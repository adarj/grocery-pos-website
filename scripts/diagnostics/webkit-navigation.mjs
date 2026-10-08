// Temporary M0.5 isolation only. Remove after supported-host diagnosis.
// This is not an acceptance gate and never changes production response behavior.
import { fork, spawn } from "node:child_process";
import { createHash } from "node:crypto";
import { once } from "node:events";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { createServer, request } from "node:http";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const file = fileURLToPath(import.meta.url);
const root = fileURLToPath(new URL("../../", import.meta.url));
const output = join(root, "test-results", "webkit-isolation");
const nativeVariables = [
  "LD_LIBRARY_PATH", "LD_PRELOAD", "GIO_MODULE_DIR", "GIO_EXTRA_MODULES",
  "GSETTINGS_SCHEMA_DIR", "GI_TYPELIB_PATH", "GTK_PATH", "GTK_DATA_PREFIX",
  "GTK_EXE_PREFIX", "XDG_DATA_DIRS",
];
const securityHeaders = [
  "content-security-policy", "x-content-type-options", "referrer-policy",
  "x-frame-options", "permissions-policy",
];
const selectedHeaders = [
  ...securityHeaders, "content-type", "content-length", "transfer-encoding",
  "content-encoding", "connection", "cache-control",
];
const browserName = process.argv.find(arg => arg.startsWith("--browser="))?.slice(10) ?? "webkit";
const workerLimit = Number(process.argv.find(arg => arg.startsWith("--timeout-ms="))?.slice(13) ?? 90_000);
if (!["webkit", "chromium", "firefox"].includes(browserName) ||
    !Number.isInteger(workerLimit) || workerLimit < 100 || workerLimit > 90_000) {
  throw new Error("Use --browser=webkit|chromium|firefox and a timeout of 100..90000 ms");
}
const brief = value => String(value).slice(0, 800);
const headers = value => Object.fromEntries(selectedHeaders
  .filter(key => value[key] !== undefined).map(key => [key, brief(value[key])]));
async function bounded(promise, milliseconds, label) {
  let timer;
  try {
    return await Promise.race([promise, new Promise((_, reject) => {
      timer = setTimeout(() => reject(new Error(label + " timed out")), milliseconds);
    })]);
  } finally { clearTimeout(timer); }
}
const hash = body => createHash("sha256").update(body).digest("hex");

async function runWorker(remove, quick) {
  const { chromium, firefox, webkit } = await import("@playwright/test");
  const engine = { chromium, firefox, webkit }[browserName];
  const result = { browser: browserName, removed: remove, probes: [], requests: [] };
  let browser, next, server;
  const send = data => process.send?.(data);
  const killNext = () => {
    if (next && next.exitCode === null && next.signalCode === null) next.kill("SIGKILL");
  };
  // Playwright's installed launcher owns browser groups and kills them on process exit.
  process.once("exit", killNext);
  process.once("SIGINT", () => process.exit(130));
  process.once("SIGTERM", () => process.exit(143));
  const deadline = setTimeout(() => {
    send({ event: "worker-deadline", milliseconds: workerLimit });
    process.exit(124);
  }, workerLimit);
  const env = { ...process.env };
  for (const key of remove) delete env[key];
  result.environment = Object.fromEntries(nativeVariables.map(key => [key, {
    present: Object.hasOwn(process.env, key),
    containsNixPath: /\/nix\//.test(process.env[key] ?? ""),
  }]));
  result.executable = engine.executablePath();
  result.node = process.version;
  result.nodeExecutable = process.execPath;
  const responses = new Map();
  let nextPort;
  const plain = Buffer.from("<!doctype html><html lang=en><title>Isolation</title><body><h1>HTTP isolation</h1></body></html>");
  const inline = Buffer.from("<!doctype html><html lang=en><title>Isolation</title><body><h1>HTTP isolation</h1><script>document.body.dataset.inline='ran'</script></body></html>");
  responses.set("/plain", { body: plain });
  responses.set("/inline", { body: inline });
  server = createServer((req, res) => {
    const path = new URL(req.url, "http://127.0.0.1").pathname;
    const entry = { path, method: req.method, received: true, finished: false };
    if (result.requests.length < 64) result.requests.push(entry);
    res.once("finish", () => { entry.finished = true; });
    res.once("close", () => { entry.closedBeforeFinish = !res.writableFinished; });
    if (path.startsWith("/_next/") && nextPort) {
      const upstream = request({ hostname: "127.0.0.1", port: nextPort, path: req.url }, response => {
        res.writeHead(response.statusCode, response.headers);
        response.on("error", () => res.destroy());
        response.pipe(res);
      });
      upstream.setTimeout(5_000, () => upstream.destroy(new Error("asset deadline")));
      upstream.on("error", () => res.destroy());
      res.once("close", () => upstream.destroy());
      upstream.end();
      return;
    }
    const response = responses.get(path);
    const body = response?.body ?? Buffer.from("Not found");
    res.writeHead(response ? 200 : 404, {
      "content-type": "text/html; charset=utf-8",
      "content-length": body.length,
      ...response?.headers,
    });
    entry.bytes = body.length;
    res.end(body);
  });
  server.requestTimeout = 5_000;
  try {
    await new Promise((resolve, reject) => {
      server.once("error", reject);
      server.listen(0, "127.0.0.1", resolve);
    });
    const origin = "http://127.0.0.1:" + server.address().port;
    if (browserName === "webkit") {
      result.bundledLibsoup = {};
      for (const kind of ["gtk", "wpe"]) {
        try {
          const body = await readFile(join(dirname(result.executable), "minibrowser-" + kind, "sys/lib/libsoup-3.0.so.0"));
          result.bundledLibsoup[kind] = { versions: [...new Set(body.toString("latin1").match(/libsoup\/3\.\d+\.\d+/g))], sha256: hash(body) };
        } catch { result.bundledLibsoup[kind] = { inspectable: false }; }
      }
    }
    browser = await engine.launch({ headless: true, env, timeout: 15_000 });
    result.version = browser.version();
    browser.on("disconnected", () => send({ event: "browser-disconnected" }));
    send({ event: "browser-launched", browser: browserName, version: result.version });
    async function probe(name, url, javaScriptEnabled = true, waitUntil = "load") {
      const item = { name, waitUntil, javaScriptEnabled, events: [], ok: false };
      const record = event => { if (item.events.length < 8) item.events.push(event); };
      let context, page;
      try {
        context = await bounded(browser.newContext({ javaScriptEnabled }), 5_000, "context");
        page = await context.newPage();
        page.on("crash", () => record({ event: "page-crash" }));
        page.on("pageerror", error => record({ event: "pageerror", message: brief(error.message) }));
        page.on("console", message => {
          if (message.type() === "error") record({ event: "console-error", message: brief(message.text()) });
        });
        page.on("requestfailed", req => record({ event: "requestfailed", url: brief(req.url()), failure: req.failure() }));
        page.on("response", response => {
          if (response.request().isNavigationRequest()) {
            record({ event: "document-response", status: response.status(), headers: headers(response.headers()) });
          }
        });
        const response = await page.goto(url, { waitUntil, timeout: 8_000 });
        item.status = response?.status() ?? null;
        item.finalUrl = brief(page.url());
        item.document = await bounded(page.evaluate(() => ({
          readyState: document.readyState, heading: document.querySelector("h1")?.textContent,
          inline: document.body?.dataset.inline ?? null,
        })), 2_000, "document inspection");
        item.ok = true;
      } catch (error) {
        item.error = brief(error.message);
      } finally {
        if (page) item.finalUrl = brief(page.url());
        if (url.startsWith(origin + "/")) {
          item.server = result.requests.filter(entry => entry.path === new URL(url).pathname)
            .map(entry => ({ ...entry }));
        }
        if (context) await bounded(context.close(), 3_000, "context cleanup").catch(error => {
          item.cleanupError = brief(error.message);
        });
        result.probes.push(item);
        send({ event: "probe", ...item });
      }
      return item;
    }
    if (!quick) {
      await probe("A-about-blank", "about:blank");
      await probe("B-data-document", "data:text/html," + encodeURIComponent(plain.toString()));
    }
    const http = await probe("C-http-no-script", origin + "/plain", false);
    if (quick) return result;
    const inlineProbe = await probe("D-http-inline-script", origin + "/inline");
    if (!http.ok) {
      result.production = "Not attempted: plain HTTP did not load";
      return result;
    }
    // Only after plain HTTP works: use the existing production build and supported CLI.
    const portReservation = createServer();
    await new Promise(resolve => portReservation.listen(0, "127.0.0.1", resolve));
    nextPort = portReservation.address().port;
    await new Promise(resolve => portReservation.close(resolve));
    next = spawn(process.execPath, [
      fileURLToPath(import.meta.resolve("next/dist/bin/next")),
      "start", "--hostname", "127.0.0.1", "--port", String(nextPort),
    ], { cwd: root, env: { ...process.env, NODE_ENV: "production", DEBUG: "" }, stdio: ["ignore", "pipe", "pipe"] });
    next.stdout.on("data", data => process.stderr.write(data));
    next.stderr.on("data", data => process.stderr.write(data));
    next.on("error", error => send({ event: "next-spawn-error", message: brief(error.message) }));
    async function fetchProduction(encoding) {
      return await new Promise((resolve, reject) => {
        const req = request({ hostname: "127.0.0.1", port: nextPort, path: "/en",
          headers: { "accept-encoding": encoding } }, response => {
          const chunks = []; let size = 0;
          response.on("data", chunk => {
            size += chunk.length;
            if (size > 512_000) req.destroy(new Error("production body exceeds diagnostic limit"));
            else chunks.push(chunk);
          });
          response.on("error", reject);
          response.on("end", () => resolve({ body: Buffer.concat(chunks), status: response.statusCode,
            headers: response.headers, completed: response.complete }));
        });
        req.on("error", reject);
        req.setTimeout(2_000, () => req.destroy(new Error("HTTP response deadline")));
        req.end();
      });
    }
    let captured;
    const readyDeadline = Date.now() + 15_000;
    while (Date.now() < readyDeadline && !captured) {
      if (next.exitCode !== null || next.signalCode !== null) throw new Error("production server exited");
      try { captured = await fetchProduction("identity"); }
      catch { await new Promise(resolve => setTimeout(resolve, 200)); }
    }
    if (!captured || captured.status !== 200 || !captured.completed) throw new Error("production response not ready");
    send({ event: "next-started", pid: next.pid });
    result.production = [];
    for (const [encoding, response] of [
      ["identity", captured], ["gzip", await fetchProduction("gzip")],
    ]) {
      result.production.push({ encoding, status: response.status, completed: response.completed,
        headerNames: Object.keys(response.headers).sort(), headers: headers(response.headers),
        bodyBytes: response.body.length, bodySha256: hash(response.body) });
    }
    const csp = captured.headers["content-security-policy"];
    if (!csp) throw new Error("production CSP missing; diagnostic must not invent one");
    responses.set("/csp", { body: inline, headers: { "content-security-policy": csp } });
    if (inlineProbe.ok) await probe("E-http-production-CSP", origin + "/csp");
    else result.cspProbe = "Not attempted: inline HTTP did not load";
    const productionUrl = "http://127.0.0.1:" + nextPort + "/en";
    const actual = await probe("F-next-production-load", productionUrl);
    await probe("G-next-production-no-JS", productionUrl, false);
    if (!actual.ok) {
      await probe("H-next-commit-diagnostic-only", productionUrl, true, "commit");
      await probe("I-next-DCL-diagnostic-only", productionUrl, true, "domcontentloaded");
      responses.set("/replay-bare", { body: captured.body });
      responses.set("/replay-security", { body: captured.body, headers: Object.fromEntries(
        securityHeaders.filter(key => captured.headers[key]).map(key => [key, captured.headers[key]])) });
      await probe("J-captured-HTML-bare", origin + "/replay-bare");
      await probe("K-captured-HTML-security", origin + "/replay-security");
    }
    return result;
  } catch (error) {
    result.error = brief(error.message);
    return result;
  } finally {
    if (browser) await bounded(browser.close(), 4_000, "browser cleanup").catch(error => {
      result.cleanupError = brief(error.message);
    });
    if (next && next.exitCode === null && next.signalCode === null) {
      const exited = once(next, "exit");
      next.kill("SIGTERM");
      const fallback = setTimeout(killNext, 2_000);
      await bounded(exited, 3_000, "production cleanup").catch(killNext);
      clearTimeout(fallback);
    }
    server.closeAllConnections();
    await bounded(new Promise(resolve => server.close(resolve)), 2_000, "HTTP cleanup").catch(() => {});
    clearTimeout(deadline);
  }
}

async function main() {
  await mkdir(output, { recursive: true });
  let active, interrupted = false, signalStatus = 143;
  const signalWorker = signal => {
    if (active && active.exitCode === null && active.signalCode === null) active.kill(signal);
  };
  const stop = signal => { interrupted = true; signalStatus = signal === "SIGINT" ? 130 : 143; signalWorker(signal); };
  process.once("SIGINT", () => stop("SIGINT"));
  process.once("SIGTERM", () => stop("SIGTERM"));
  const limit = setTimeout(() => stop("SIGTERM"), 330_000);
  const reports = [];
  async function variant(name, remove, quick = false) {
    if (interrupted) throw new Error("diagnostic interrupted or overall deadline reached");
    let tail = Buffer.alloc(0), first = Buffer.alloc(0), bytes = 0, report;
    active = fork(file, ["--worker=" + remove.join(","), "--browser=" + browserName,
      "--timeout-ms=" + workerLimit, ...(quick ? ["--quick"] : [])], {
      cwd: root, env: { ...process.env, DEBUG: "pw:browser", DEBUG_COLORS: "0" },
      stdio: ["ignore", "pipe", "pipe", "ipc"],
    });
    const child = active;
    const capture = data => {
      bytes += data.length;
      if (first.length < 8_192) first = Buffer.concat([first, data]).subarray(0, 8_192);
      tail = Buffer.concat([tail, data]).subarray(-65_536);
    };
    child.stdout.on("data", capture);
    child.stderr.on("data", capture);
    child.on("message", message => {
      if (message.event === "result") report = message.result;
      else console.log(JSON.stringify({ variant: name, ...message }));
    });
    const [code, signal] = await once(child, "close");
    active = undefined;
    const native = bytes <= 65_536 ? tail : Buffer.concat([
      first, Buffer.from("\n--- bounded native log: middle omitted ---\n"), tail.subarray(-57_344),
    ]);
    await writeFile(join(output, name + ".log"), native);
    const launchedBinary = native.toString().match(/pw:browser <launching> (.+?) --/)?.[1];
    const entry = { variant: name, exitCode: code, signal, nativeBytes: bytes,
      launchedBinary, nativeTruncated: bytes > 65_536, report };
    reports.push(entry);
    console.log(JSON.stringify({ variant: name, exitCode: code, signal, nativeBytes: bytes, launchedBinary }));
    console.log(native.toString().split("\n").slice(-20).join("\n"));
    return entry;
  }
  try {
    const normal = await variant("inherited", []);
    const sanitized = await variant("sanitized", nativeVariables);
    // A change in minimal or production navigation earns single-variable probes.
    const recovered = normal.report?.probes.find(probe => !probe.ok &&
      sanitized.report?.probes.some(other => other.name === probe.name && other.ok));
    if (recovered) {
      console.log(JSON.stringify({ event: "sanitization-differential", probe: recovered.name,
        changedConfiguredVariables: nativeVariables.filter(key => Object.hasOwn(process.env, key)),
        attribution: "Observed difference; single-variable probes are candidates, not acceptance" }));
      for (const key of nativeVariables.filter(key => Object.hasOwn(process.env, key))) {
        const isolated = await variant("remove-" + key, [key], recovered.name === "C-http-no-script");
        if (isolated.report?.probes.some(probe => probe.name === recovered.name && probe.ok)) break;
      }
    }
  } catch (error) {
    if (!interrupted) throw error;
    console.log(JSON.stringify({ event: "diagnostic-interrupted", exitCode: signalStatus }));
  } finally {
    clearTimeout(limit);
    signalWorker("SIGTERM");
    await writeFile(join(output, "summary.json"), JSON.stringify(reports, null, 2) + "\n");
    if (interrupted) process.exitCode = signalStatus;
  }
}

const workerArg = process.argv.find(arg => arg.startsWith("--worker="));
if (workerArg !== undefined) {
  const remove = workerArg.slice(9).split(",").filter(Boolean);
  if (remove.some(key => !nativeVariables.includes(key))) throw new Error("unsupported environment variable");
  const result = await runWorker(remove, process.argv.includes("--quick"));
  await new Promise(resolve => process.send({ event: "result", result }, resolve));
  // Runs Playwright's synchronous exit cleanup if graceful browser closure failed.
  process.exit(0);
} else {
  await main();
}

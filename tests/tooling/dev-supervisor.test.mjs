import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { mkdtemp, mkdir, readFile, readlink, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { setTimeout as delay } from "node:timers/promises";

// Run the actual supervisor against isolated launcher/native-child fixtures.
// No Next server, compiler output, dependency installation, or repository cleanup.
const supervisorSource = await readFile(new URL("../../scripts/dev.mjs", import.meta.url), "utf8");
const launcherSource = `
import { spawn } from "node:child_process";
import { appendFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const native = process.argv[2] === "native";
const role = native ? process.argv[3] : process.argv[2] === "build" ? "initial" : process.argv[2] === "watch" ? "watch" : "next";
const record = () => appendFileSync("events.jsonl", JSON.stringify({ role, native, pid: process.pid }) + "\\n");
if (!native) record();
if (native) {
  // These cases must reach the supervisor's bounded SIGKILL fallback.
  if ((role === "initial" && process.env.SUPERVISOR_CASE === "initial-killed") ||
      (role === "watch" && process.env.SUPERVISOR_CASE === "repeated-signals")) {
    process.on("SIGTERM", () => {});
  }
  setInterval(() => {}, 1000);
  process.send("ready", () => {});
  record(); // Readiness is observed only after the descendant can survive its launcher.
} else if (role === "initial" && !process.env.SUPERVISOR_CASE.startsWith("initial-")) {
  process.exit(0);
} else {
  const child = spawn(process.execPath, [fileURLToPath(import.meta.url), "native", role], {
    stdio: ["ignore", "inherit", "inherit", "ipc"],
  });
  child.once("message", () => {
    if (role === "initial" && process.env.SUPERVISOR_CASE === "initial-nonzero") process.exit(23);
  });
  child.once("exit", () => process.exit(0));
  process.on("SIGTERM", () => {
    appendFileSync("signals.jsonl", role + ":SIGTERM\\n");
    child.kill("SIGTERM");
  });
  process.on("SIGINT", () => child.kill("SIGINT"));
}
`;

function exists(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch (error) {
    if (error.code === "ESRCH") return false;
    throw error;
  }
}

async function waitFor(predicate, description, timeout = 15_000) {
  const deadline = Date.now() + timeout;
  while (Date.now() < deadline) {
    const value = await predicate();
    if (value) return value;
    await delay(25);
  }
  throw new Error(`Timed out: ${description}`);
}

async function qualify(name) {
  const root = await mkdtemp(join(tmpdir(), "grocery-pos-supervisor-"));
  let supervisor;
  let result;
  let interrupted = false;
  let output = "";
  const interrupt = () => {
    interrupted = true;
    supervisor?.kill("SIGTERM");
  };
  process.once("SIGINT", interrupt);
  process.once("SIGTERM", interrupt);
  const events = async () => {
    try {
      return (await readFile(join(root, "events.jsonl"), "utf8"))
        .trim().split("\n").filter(Boolean).map(line => JSON.parse(line));
    } catch (error) {
      if (error.code === "ENOENT") return [];
      throw error;
    }
  };
  try {
    for (const directory of ["scripts", "node_modules/rescript/cli", "node_modules/next/dist/bin"]) {
      await mkdir(join(root, directory), { recursive: true });
    }
    await writeFile(join(root, "package.json"), '{"type":"module"}\n');
    await writeFile(join(root, "events.jsonl"), "");
    await writeFile(join(root, "scripts/dev.mjs"), supervisorSource);
    await writeFile(join(root, "node_modules/rescript/cli/rescript.js"), launcherSource);
    await writeFile(join(root, "node_modules/next/dist/bin/next"), launcherSource);
    assert.equal(interrupted, false, "Fixture interrupted before startup");
    supervisor = spawn(process.execPath, [join(root, "scripts/dev.mjs")], {
      cwd: root,
      detached: true,
      env: { ...process.env, SUPERVISOR_CASE: name },
      stdio: ["ignore", "pipe", "pipe"],
    });
    supervisor.stdout.on("data", data => { output += data; });
    supervisor.stderr.on("data", data => { output += data; });
    supervisor.once("error", error => { result = { error }; });
    supervisor.once("exit", (code, signal) => { result = { code, signal }; });

    if (name.startsWith("initial-")) {
      await waitFor(async () => (await events()).some(event => event.role === "initial" && event.native), "initial native descendant");
      if (name === "initial-killed") {
        const launcher = (await events()).find(event => event.role === "initial" && !event.native);
        process.kill(launcher.pid, "SIGKILL");
      }
    } else {
      await waitFor(async () => {
        const recorded = await events();
        return ["watch", "next"].every(role => recorded.some(event => event.role === role && event.native));
      }, "normal watcher/server startup");
      if (name === "watcher-killed" || name === "next-killed") {
        const role = name === "watcher-killed" ? "watch" : "next";
        const launcher = (await events()).find(event => event.role === role && !event.native);
        process.kill(launcher.pid, "SIGKILL");
      } else {
        process.kill(supervisor.pid, name === "SIGTERM" ? "SIGTERM" : "SIGINT");
        if (name === "repeated-signals") {
          // Wait for the first signal to reach a child before sending the second.
          await waitFor(async () => {
            try {
              return (await readFile(join(root, "signals.jsonl"), "utf8")).includes("watch:SIGTERM");
            } catch (error) {
              if (error.code === "ENOENT") return false;
              throw error;
            }
          }, "first shutdown signal received");
          process.kill(supervisor.pid, "SIGTERM");
        }
      }
    }

    await waitFor(() => result, "supervisor exit");
    assert.equal(interrupted, false, "Fixture interrupted");
    assert.ifError(result.error);
    assert.equal(result.signal, null);
    const expected = name === "initial-nonzero" ? 23 : name === "SIGTERM" ? 143 :
      name === "SIGINT" || name === "repeated-signals" ? 130 : 1;
    assert.equal(result.code, expected, output);
    const owned = [supervisor.pid, ...(await events()).map(event => event.pid)];
    await waitFor(() => owned.every(pid => !exists(pid)), "all owned processes gone", 3000);
    console.log(`PASS ${name}: exit ${expected}; all ${owned.length} owned processes gone`);
  } catch (error) {
    error.message += `\nFixture: ${name}\n${output}`;
    throw error;
  } finally {
    // Only signal groups with a currently verified member in this fixture directory.
    const recorded = await events();
    const owned = [supervisor?.pid, ...recorded.map(event => event.pid)].filter(Boolean);
    const allowedGroups = new Set([supervisor?.pid, ...recorded.filter(event => !event.native).map(event => event.pid)]);
    const groups = new Set();
    for (const pid of owned) {
      try {
        if (await readlink(`/proc/${pid}/cwd`) !== root) continue;
        const stat = await readFile(`/proc/${pid}/stat`, "utf8");
        const group = Number(stat.slice(stat.lastIndexOf(")") + 2).split(" ")[2]);
        if (allowedGroups.has(group)) groups.add(group);
      } catch (error) {
        if (error.code !== "ENOENT" && error.code !== "ESRCH") throw error;
      }
    }
    for (const group of groups) {
      try {
        process.kill(-group, "SIGKILL");
      } catch (error) {
        if (error.code !== "ESRCH") throw error;
      }
    }
    if (supervisor && !result) await waitFor(() => result, "fixture cleanup");
    await waitFor(() => owned.every(pid => !exists(pid)), "fixture descendants cleaned", 3000);
    await rm(root, { recursive: true, force: true });
    process.removeListener("SIGINT", interrupt);
    process.removeListener("SIGTERM", interrupt);
  }
}

for (const name of ["initial-killed", "initial-nonzero", "watcher-killed", "next-killed", "SIGINT", "SIGTERM", "repeated-signals"]) {
  await qualify(name);
}

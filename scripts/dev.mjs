import { spawn } from "node:child_process";
import { rmSync } from "node:fs";
import { fileURLToPath } from "node:url";

process.chdir(fileURLToPath(new URL("..", import.meta.url)));

// Next generates overlapping ambient types in dev and production directories.
// Dev uses next-env's dev imports; canonical checks regenerate production types.
rmSync(".next/types", { recursive: true, force: true });

// Separate process groups let shutdown reach compiler and Next descendants.
const children = new Set();
const groups = new Set();
let stopping = false;
let killTimer;

function signalChildren(signal) {
  for (const pid of groups) {
    try {
      process.kill(-pid, signal);
    } catch (error) {
      if (error.code !== "ESRCH") throw error;
    }
  }
}

function shutdown(code) {
  if (stopping) return;
  stopping = true;
  process.exitCode = code;
  signalChildren("SIGTERM");
  killTimer = setTimeout(() => signalChildren("SIGKILL"), 5000);
}

function finishShutdown() {
  if (!stopping || children.size !== 0) return;
  for (const pid of groups) {
    try {
      process.kill(-pid, 0);
      return; // Retain the timeout if a leader's descendants are still alive.
    } catch (error) {
      if (error.code !== "ESRCH") throw error;
    }
  }
  clearTimeout(killTimer);
}

process.on("SIGINT", () => shutdown(130));
process.on("SIGTERM", () => shutdown(143));

function run(script, args, watch = false) {
  const child = spawn(process.execPath, [script, ...args], {
    detached: true,
    stdio: "inherit",
  });
  children.add(child);
  if (child.pid !== undefined) groups.add(child.pid);
  return new Promise((resolve) => {
    child.on("error", (error) => {
      console.error(error);
      shutdown(1);
    });
    child.on("close", (code) => {
      children.delete(child);
      // Failed initial compilation also owns any surviving native descendants.
      if (!stopping && (watch || code !== 0)) shutdown(code || 1);
      if (!stopping) groups.delete(child.pid);
      finishShutdown();
      resolve(code ?? 1);
    });
  });
}

const compiler = "node_modules/rescript/cli/rescript.js";
const initial = await run(compiler, ["build"]);
if (!stopping && initial === 0) {
  await Promise.all([
    run(compiler, ["watch"], true),
    run("node_modules/next/dist/bin/next", [
      "dev", "--hostname", "127.0.0.1", ...process.argv.slice(2),
    ], true),
  ]);
}

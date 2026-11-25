import { spawn } from "node:child_process";

function runNodeScript(cmd: string, args: string[]) {
  return new Promise<number>((resolve) => {
    const child = spawn(cmd, args, { stdio: "inherit", shell: true });
    child.on("close", (code) => resolve(code ?? 1));
  });
}

async function waitForServer(url: string, timeoutMs = 15000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.ok) return;
    } catch {
      // retry
    }
    await new Promise((r) => setTimeout(r, 300));
  }
  throw new Error(`Preview server did not respond within ${timeoutMs}ms`);
}

async function main() {
  const server = spawn("node", ["node_modules/vite/bin/vite.js", "preview", "--port", "4173", "--host", "127.0.0.1", "--strictPort"], {
    stdio: "pipe",
  });

  try {
    await waitForServer("http://127.0.0.1:4173/home");
    console.log("Preview server ready at http://127.0.0.1:4173");

    const e2eCode = await runNodeScript("npx", ["tsx", "scripts/run-e2e.ts"]);
    if (e2eCode !== 0) process.exitCode = e2eCode;

    const visCode = await runNodeScript("npx", ["tsx", "scripts/compare-screenshots.ts"]);
    if (visCode !== 0) process.exitCode = visCode;
  } finally {
    server.kill("SIGTERM");
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

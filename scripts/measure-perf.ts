import { spawn } from "node:child_process";
import fs from "node:fs";
import { chromium } from "playwright";

async function waitForServer(url: string) {
  for (let i = 0; i < 40; i++) {
    try {
      const r = await fetch(url);
      if (r.ok) return;
    } catch {
      // retry
    }
    await new Promise((r) => setTimeout(r, 250));
  }
  throw new Error("Server timeout");
}

async function main() {
  const server = spawn("node", ["node_modules/vite/bin/vite.js", "preview", "--port", "4174", "--host", "127.0.0.1", "--strictPort"], {
    stdio: "pipe",
  });
  try {
    await waitForServer("http://127.0.0.1:4174/home");
    const browser = await chromium.launch({ headless: true });
    const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
    const page = await ctx.newPage();

    const perf: Record<string, any> = {};
    for (const r of ["/", "/home", "/features", "/about-us", "/careers", "/blog", "/contact"]) {
      await page.goto(`http://127.0.0.1:4174${r}`, { waitUntil: "networkidle" });
      await page.waitForTimeout(400);
      const metrics = await page.evaluate(`(() => {
        const nav = performance.getEntriesByType("navigation")[0];
        const lcpEntries = performance.getEntriesByType("largest-contentful-paint");
        const layoutShifts = performance.getEntriesByType("layout-shift");
        const cls = layoutShifts.reduce((acc, s) => acc + (s.hadRecentInput ? 0 : s.value), 0);
        return {
          domContentLoadedMs: nav ? Math.round(nav.domContentLoadedEventEnd) : 0,
          loadEventMs: nav ? Math.round(nav.loadEventEnd) : 0,
          lcpMs: lcpEntries.length ? Math.round(lcpEntries[lcpEntries.length - 1].startTime) : null,
          cls: Number(cls.toFixed(4)),
        };
      })()`);
      perf[r] = metrics;
    }
    await browser.close();
    fs.writeFileSync("docs/testing/perf-metrics.json", JSON.stringify(perf, null, 2));
    console.log("PERF METRICS:", JSON.stringify(perf, null, 2));
  } finally {
    server.kill("SIGTERM");
  }
}

main();

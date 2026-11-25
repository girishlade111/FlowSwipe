import fs from "node:fs";
import { chromium } from "playwright";

const BASE = "https://flowswipe-template.webflow.io";

const SCREENSHOT_ROUTES = [
  { route: "/", name: "showcase" },
  { route: "/home", name: "home" },
  { route: "/features", name: "features" },
  { route: "/about-us", name: "about-us" },
  { route: "/team", name: "team" },
  { route: "/careers", name: "careers" },
  { route: "/blog", name: "blog" },
  { route: "/contact", name: "contact" },
  { route: "/terms-conditions", name: "terms-conditions" },
  { route: "/style-guide", name: "style-guide" },
  { route: "/404", name: "not-found" },
];

async function hidePromoOverlays(page: any) {
  await page.evaluate(() => {
    document
      .querySelectorAll(".buy-template-badge, .more-template-badge, .hireus-badge")
      .forEach((el) => ((el as HTMLElement).style.display = "none"));
  });
}

async function main() {
  fs.mkdirSync("docs/reference/desktop", { recursive: true });
  fs.mkdirSync("docs/reference/tablet", { recursive: true });
  fs.mkdirSync("docs/reference/mobile", { recursive: true });
  fs.mkdirSync("docs/reference/interactions", { recursive: true });
  fs.mkdirSync("docs/research", { recursive: true });

  const browser = await chromium.launch({ headless: true });

  // 1. Desktop 1440x900 full audit & screenshots
  const desktopCtx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await desktopCtx.newPage();

  const styleMeasurements: Record<string, any> = {};

  for (const { route, name } of SCREENSHOT_ROUTES) {
    console.log(`Auditing desktop ${route}...`);
    await page.goto(BASE + route, { waitUntil: "networkidle", timeout: 60000 }).catch(() => {});
    await page.evaluate(() => document.fonts.ready);
    // Scroll through entire page to settle all scroll animations and lazy images
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 450) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 120));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(800);
    await hidePromoOverlays(page);

    await page.screenshot({ path: `docs/reference/desktop/${name}-1440-hero.png` });
    await page.screenshot({ path: `docs/reference/desktop/${name}-1440-full.png`, fullPage: true });

    const metrics = await page.evaluate(`(() => {
      const pick = (sel) => {
        const el = document.querySelector(sel);
        if (!el) return null;
        const cs = getComputedStyle(el);
        const r = el.getBoundingClientRect();
        return {
          width: Math.round(r.width),
          height: Math.round(r.height),
          bg: cs.backgroundColor,
          color: cs.color,
          fontFamily: cs.fontFamily,
          fontSize: cs.fontSize,
          fontWeight: cs.fontWeight,
          lineHeight: cs.lineHeight,
          letterSpacing: cs.letterSpacing,
          borderRadius: cs.borderRadius,
          borderColor: cs.borderColor,
          padding: cs.padding,
          maxWidth: cs.maxWidth,
        };
      };
      return {
        body: pick("body"),
        header: pick("header, .navbar, .nav-section"),
        container: pick(".w-container, .container, .base-container"),
        h1: pick("h1"),
        h2: pick("h2"),
        h3: pick("h3"),
        p: pick("p"),
        primaryButton: pick(".primary-button, .button, [class*='primary-button']"),
        footer: pick("footer, .footer-section"),
        scrollHeight: document.body.scrollHeight,
      };
    })()`);
    styleMeasurements[route] = metrics;
  }

  // Capture interaction screenshots (Pages dropdown, FAQ expanded, Terms tab)
  await page.goto(BASE + "/features", { waitUntil: "networkidle", timeout: 60000 }).catch(() => {});
  await hidePromoOverlays(page);
  const dropdownToggle = page.locator(".w-dropdown-toggle").first();
  if (await dropdownToggle.count()) {
    await dropdownToggle.hover().catch(() => {});
    await dropdownToggle.click().catch(() => {});
    await page.waitForTimeout(400);
    await page.screenshot({ path: "docs/reference/interactions/navigation-pages-expanded.png" });
  }

  // Tablet 768x1024 and Mobile 390x844 on key pages
  for (const vp of [
    { dir: "tablet", width: 768, height: 1024 },
    { dir: "mobile", width: 390, height: 844 },
  ]) {
    const ctx = await browser.newContext({ viewport: { width: vp.width, height: vp.height } });
    const p = await ctx.newPage();
    for (const { route, name } of SCREENSHOT_ROUTES.slice(0, 8)) {
      await p.goto(BASE + route, { waitUntil: "networkidle", timeout: 60000 }).catch(() => {});
      await p.evaluate(() => document.fonts.ready);
      await hidePromoOverlays(p);
      await p.screenshot({ path: `docs/reference/${vp.dir}/${name}-${vp.width}.png` });
    }
    await ctx.close();
  }

  await browser.close();
  fs.writeFileSync("docs/research/computed-styles.json", JSON.stringify(styleMeasurements, null, 2));
  console.log("Audit complete!");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

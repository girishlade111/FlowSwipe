import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright";
import pixelmatch from "pixelmatch";
import { PNG } from "pngjs";
import sharp from "sharp";

const LOCAL_BASE = process.env.LOCAL_URL || "http://127.0.0.1:4173";

const TARGETS = [
  { route: "/", refHero: "docs/reference/desktop/showcase-1440-hero.png", name: "showcase" },
  { route: "/home", refHero: "docs/reference/desktop/home-1440-hero.png", name: "home" },
  { route: "/features", refHero: "docs/reference/desktop/features-1440-hero.png", name: "features" },
  { route: "/about-us", refHero: "docs/reference/desktop/about-us-1440-hero.png", name: "about-us" },
  { route: "/team", refHero: "docs/reference/desktop/team-1440-hero.png", name: "team" },
  { route: "/careers", refHero: "docs/reference/desktop/careers-1440-hero.png", name: "careers" },
  { route: "/blog", refHero: "docs/reference/desktop/blog-1440-hero.png", name: "blog" },
  { route: "/contact", refHero: "docs/reference/desktop/contact-1440-hero.png", name: "contact" },
  { route: "/terms-conditions", refHero: "docs/reference/desktop/terms-conditions-1440-hero.png", name: "terms" },
  { route: "/style-guide", refHero: "docs/reference/desktop/style-guide-1440-hero.png", name: "style-guide" },
];

async function main() {
  fs.mkdirSync("docs/testing/screenshots", { recursive: true });
  fs.mkdirSync("docs/testing/diffs", { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();

  const results: any[] = [];

  for (const t of TARGETS) {
    await page.goto(LOCAL_BASE + t.route, { waitUntil: "networkidle", timeout: 30000 });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(900);

    const localHeroPath = `docs/testing/screenshots/${t.name}-1440-hero.png`;
    await page.screenshot({ path: localHeroPath });
    await page.screenshot({
      path: `docs/testing/screenshots/${t.name}-1440-full.png`,
      fullPage: true,
    });

    const metrics = await page.evaluate(`(() => {
      const h1 = document.querySelector("h1");
      const header = document.querySelector("header");
      const body = document.body;
      const brokenImgs = Array.from(document.querySelectorAll("img")).filter(i => !i.complete || i.naturalWidth === 0).map(i => i.src);
      return {
        bodyBg: getComputedStyle(body).backgroundColor,
        headerHeight: header ? Math.round(header.getBoundingClientRect().height) : 0,
        h1Font: h1 ? getComputedStyle(h1).fontFamily : "",
        h1Size: h1 ? getComputedStyle(h1).fontSize : "",
        overflowX: document.documentElement.scrollWidth > window.innerWidth,
        brokenImgs,
      };
    })()`);

    let diffRatio = null;
    const diffPath = `docs/testing/diffs/${t.name}-hero-diff.png`;
    if (fs.existsSync(t.refHero)) {
      const refBuf = await sharp(t.refHero).resize(1440, 900).png().toBuffer();
      const locBuf = await sharp(localHeroPath).resize(1440, 900).png().toBuffer();
      const img1 = PNG.sync.read(refBuf);
      const img2 = PNG.sync.read(locBuf);
      const diff = new PNG({ width: 1440, height: 900 });
      const mismatched = pixelmatch(img1.data, img2.data, diff.data, 1440, 900, { threshold: 0.15 });
      fs.writeFileSync(diffPath, PNG.sync.write(diff));
      diffRatio = Number(((mismatched / (1440 * 900)) * 100).toFixed(2));
    }

    results.push({ ...t, metrics, heroDiffPercent: diffRatio, diffPath });
  }

  await browser.close();
  fs.writeFileSync("docs/testing/visual-comparison-results.json", JSON.stringify(results, null, 2));
  console.log("Visual comparison results:", JSON.stringify(results, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

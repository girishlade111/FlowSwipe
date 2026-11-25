import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { chromium } from "playwright";
import sharp from "sharp";

const BASE = "https://flowswipe-template.webflow.io";

const ROUTES = [
  "/",
  "/home",
  "/features",
  "/about-us",
  "/team",
  "/careers",
  "/blog",
  "/contact",
  "/terms-conditions",
  "/style-guide",
  "/licenses",
  "/changelog",
  "/instructions",
  "/401",
  "/404",
  "/team/jacob",
  "/team/mark",
  "/team/rodriguez",
  "/careers/principal-lead-fintech-product-manager",
  "/careers/lead-global-payment-solutions-specialist",
  "/careers/senior-customer-experience-strategist",
  "/careers/chief-blockchain-integration-engineer",
  "/careers/senior-financial-technology-advisor",
  "/careers/head-lead-global-payments-coordinator",
  "/blog/smart-collector-tips-for-global-currency-coins-timeless-diverse-and-valuable",
  "/blog/smart-spending-habits-for-a-more-balanced-and-secure-financial-life",
  "/blog/a-practical-guide-to-effortless-expense-reporting-made-simple-and-smart",
  "/blog/your-essential-guide-to-secured-global-transactions-built-on-trust-and-speed",
  "/blog/essential-learning-guide-for-workplace-conversations-made-open-honest-and-meaningful",
  "/blog/advanced-analytics-guide-to-transaction-performance",
];

const EXCLUDE_PATTERNS = [
  "buy-template-badge",
  "more-template-badge",
  "hireus-close-badge",
];

function stripResponsiveSuffix(url: string): string {
  return url.replace(/-p-(500|800|1080|1600|2000|2600|3200)\.(png|jpg|jpeg|webp|avif)$/i, ".$2");
}

function categorizeAsset(url: string, routesSeen: string[]): string {
  const lower = decodeURIComponent(url).toLowerCase();
  if (lower.includes("logo") || lower.includes("cardflow icon") || lower.includes("favicon")) return "brand";
  if (lower.endsWith(".svg")) return "icons";
  if (lower.includes("banner-bg") || lower.includes("footer-bg") || lower.includes("cta-bg") || lower.includes("dot")) return "textures";
  if (routesSeen.every((r) => r === "/") || lower.includes("animation-image") || lower.includes("figma") || lower.includes("mobile-responsive")) return "images/showcase";
  if (lower.includes("team") || lower.includes("jacob") || lower.includes("mark") || lower.includes("rodriguez") || lower.includes("peggy") || lower.includes("nova") || lower.includes("chris")) return "images/team";
  if (lower.includes("blog")) return "images/blog";
  if (lower.includes("career")) return "images/careers";
  if (lower.includes("about") || lower.includes("rocket") || lower.includes("globe") || lower.includes("value")) return "images/about";
  if (lower.includes("contact") || lower.includes("headphone") || lower.includes("chat") || lower.includes("question")) return "images/contact";
  if (lower.includes("card") || lower.includes("wallet") || lower.includes("dashboard") || lower.includes("analytics") || lower.includes("notify") || lower.includes("alert")) return "images/cards";
  return "images/holographic";
}

function sanitizeFilename(url: string): string {
  const rawName = decodeURIComponent(url.split("/").pop()?.split("?")[0] || "asset");
  // Remove leading webflow hash prefix like 6948f50be9c7d588c776b289_
  const parts = rawName.split("_");
  const clean = parts.length > 1 ? parts.slice(1).join("_") : rawName;
  return clean.replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/-+/g, "-").toLowerCase();
}

async function main() {
  fs.mkdirSync("docs/research", { recursive: true });
  fs.mkdirSync("public/assets", { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await context.newPage();

  const discovered = new Map<string, any>();

  for (const route of ROUTES) {
    console.log(`Discovering assets on ${route}...`);
    await page.goto(BASE + route, { waitUntil: "networkidle", timeout: 60000 }).catch(() => {});
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 80));
      }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(400);

    const items = await page.evaluate(() => {
      const results: any[] = [];
      document.querySelectorAll("img").forEach((img) => {
        const rect = img.getBoundingClientRect();
        const cs = getComputedStyle(img);
        const section = img.closest("section, header, footer, nav, [class*='section']")?.className || "";
        const src = img.currentSrc || img.getAttribute("src") || "";
        const origSrc = img.getAttribute("src") || src;
        if (origSrc && origSrc.includes("cdn.prod.website-files.com")) {
          results.push({
            sourceUrl: origSrc,
            currentSrc: src,
            alt: img.getAttribute("alt") || "",
            naturalWidth: img.naturalWidth,
            naturalHeight: img.naturalHeight,
            displayWidth: Math.round(rect.width),
            displayHeight: Math.round(rect.height),
            objectFit: cs.objectFit,
            objectPosition: cs.objectPosition,
            transform: cs.transform,
            zIndex: parseInt(cs.zIndex || "0", 10) || 0,
            blendMode: cs.mixBlendMode,
            component: String(section).slice(0, 80),
            mediaType: "image",
          });
        }
      });
      // CSS background images
      document.querySelectorAll("*").forEach((el) => {
        const bg = getComputedStyle(el).backgroundImage;
        if (bg && bg !== "none" && bg.includes("cdn.prod.website-files.com")) {
          const m = bg.match(/url\("([^"]+)"\)/);
          if (m) {
            const rect = el.getBoundingClientRect();
            results.push({
              sourceUrl: m[1],
              currentSrc: m[1],
              alt: "",
              naturalWidth: 0,
              naturalHeight: 0,
              displayWidth: Math.round(rect.width),
              displayHeight: Math.round(rect.height),
              objectFit: "cover",
              objectPosition: getComputedStyle(el).backgroundPosition,
              transform: getComputedStyle(el).transform,
              zIndex: parseInt(getComputedStyle(el).zIndex || "0", 10) || 0,
              blendMode: getComputedStyle(el).mixBlendMode,
              component: String(el.className || "").slice(0, 80),
              mediaType: "css-background",
            });
          }
        }
      });
      return results;
    });

    for (const item of items) {
      if (EXCLUDE_PATTERNS.some((p) => item.sourceUrl.includes(p))) continue;
      const masterUrl = stripResponsiveSuffix(item.sourceUrl);
      if (!discovered.has(masterUrl)) {
        discovered.set(masterUrl, {
          ...item,
          sourceUrl: masterUrl,
          routes: [route],
        });
      } else {
        const existing = discovered.get(masterUrl);
        if (!existing.routes.includes(route)) existing.routes.push(route);
      }
    }
  }

  // Also check CSS background images directly in reference-webflow.css
  const css = fs.readFileSync("docs/research/reference-webflow.css", "utf8");
  for (const m of css.matchAll(/https:\/\/cdn\.prod\.website-files\.com\/[^\s"'(),<>]+/g)) {
    const masterUrl = stripResponsiveSuffix(m[0]);
    if (EXCLUDE_PATTERNS.some((p) => masterUrl.includes(p))) continue;
    if (!discovered.has(masterUrl) && !masterUrl.endsWith(".css") && !masterUrl.endsWith(".js")) {
      discovered.set(masterUrl, {
        sourceUrl: masterUrl,
        alt: "",
        naturalWidth: 0,
        naturalHeight: 0,
        displayWidth: 0,
        displayHeight: 0,
        objectFit: "",
        objectPosition: "",
        transform: "none",
        zIndex: 0,
        blendMode: "normal",
        component: "shared-css",
        mediaType: "css-background",
        routes: ["shared-css"],
      });
    }
  }

  await browser.close();

  console.log(`Downloading ${discovered.size} unique master assets...`);
  const manifest: any[] = [];
  const usedPaths = new Map<string, string>(); // sha256 -> localPath
  let idx = 1;

  for (const [url, info] of discovered.entries()) {
    const category = categorizeAsset(url, info.routes);
    const dir = path.join("public/assets", category);
    fs.mkdirSync(dir, { recursive: true });

    let filename = sanitizeFilename(url);
    let localPath = path.posix.join("public/assets", category, filename);
    // Avoid filename collisions across different source URLs
    if (fs.existsSync(localPath)) {
      const ext = path.extname(filename);
      const base = path.basename(filename, ext);
      filename = `${base}-${idx}${ext}`;
      localPath = path.posix.join("public/assets", category, filename);
    }

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const mimeType = res.headers.get("content-type") || "";
      if (mimeType.includes("text/html")) throw new Error("Received HTML instead of media");
      const buf = Buffer.from(await res.arrayBuffer());
      const sha256 = crypto.createHash("sha256").update(buf).digest("hex");

      let width = info.naturalWidth || 0;
      let height = info.naturalHeight || 0;
      let hasTransparency = false;

      if (!mimeType.includes("svg") && !url.endsWith(".svg")) {
        try {
          const meta = await sharp(buf).metadata();
          width = meta.width || width;
          height = meta.height || height;
          hasTransparency = Boolean(meta.hasAlpha);
        } catch {
          // keep fallback metadata
        }
      } else {
        hasTransparency = true;
      }

      // Deduplicate identical binaries
      if (usedPaths.has(sha256)) {
        const existingLocal = usedPaths.get(sha256)!;
        manifest.push({
          id: `asset-${String(idx++).padStart(3, "0")}`,
          sourceUrl: url,
          referenceRoute: info.routes.join(", "),
          component: info.component,
          mediaType: info.mediaType,
          mimeType,
          originalFilename: decodeURIComponent(url.split("/").pop() || ""),
          originalWidth: width,
          originalHeight: height,
          displayWidth: info.displayWidth,
          displayHeight: info.displayHeight,
          aspectRatio: width && height ? `${width}:${height}` : "",
          hasTransparency,
          objectFit: info.objectFit,
          objectPosition: info.objectPosition,
          transform: info.transform,
          zIndex: info.zIndex,
          blendMode: info.blendMode,
          localPath: existingLocal,
          licenseStatus: "Verified free personal & commercial use (FlowSwipe Licenses page)",
          acquisitionStatus: "deduplicated-reused",
          sha256,
          optimizedVariants: [],
          notes: info.alt || "Deduplicated identical binary",
        });
        continue;
      }

      fs.writeFileSync(localPath, buf);
      usedPaths.set(sha256, localPath);

      manifest.push({
        id: `asset-${String(idx++).padStart(3, "0")}`,
        sourceUrl: url,
        referenceRoute: info.routes.join(", "),
        component: info.component,
        mediaType: info.mediaType,
        mimeType,
        originalFilename: decodeURIComponent(url.split("/").pop() || ""),
        originalWidth: width,
        originalHeight: height,
        displayWidth: info.displayWidth,
        displayHeight: info.displayHeight,
        aspectRatio: width && height ? `${width}:${height}` : "",
        hasTransparency,
        objectFit: info.objectFit,
        objectPosition: info.objectPosition,
        transform: info.transform,
        zIndex: info.zIndex,
        blendMode: info.blendMode,
        localPath,
        licenseStatus: "Verified free personal & commercial use (FlowSwipe Licenses page)",
        acquisitionStatus: "acquired",
        sha256,
        optimizedVariants: [],
        notes: info.alt || "",
      });
    } catch (err: any) {
      manifest.push({
        id: `asset-${String(idx++).padStart(3, "0")}`,
        sourceUrl: url,
        referenceRoute: info.routes.join(", "),
        component: info.component,
        mediaType: info.mediaType,
        mimeType: "",
        originalFilename: decodeURIComponent(url.split("/").pop() || ""),
        originalWidth: 0,
        originalHeight: 0,
        displayWidth: info.displayWidth,
        displayHeight: info.displayHeight,
        aspectRatio: "",
        hasTransparency: false,
        objectFit: info.objectFit,
        objectPosition: info.objectPosition,
        transform: info.transform,
        zIndex: info.zIndex,
        blendMode: info.blendMode,
        localPath: "",
        licenseStatus: "Unverified",
        acquisitionStatus: `failed: ${err.message}`,
        sha256: "",
        optimizedVariants: [],
        notes: "",
      });
    }
  }

  fs.writeFileSync("docs/research/asset-manifest.json", JSON.stringify(manifest, null, 2));
  console.log(`Done! Acquired ${usedPaths.size} unique binaries across ${manifest.length} manifest entries.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

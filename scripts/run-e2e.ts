import fs from "node:fs";
import { chromium } from "playwright";

const BASE = process.env.LOCAL_URL || "http://127.0.0.1:4173";

const ALL_ROUTES = [
  "/",
  "/showcase",
  "/home",
  "/features",
  "/about-us",
  "/team",
  "/team/jacob",
  "/team/mark",
  "/team/rodriguez",
  "/careers",
  "/careers/principal-lead-fintech-product-manager",
  "/careers/lead-global-payment-solutions-specialist",
  "/careers/senior-customer-experience-strategist",
  "/careers/chief-blockchain-integration-engineer",
  "/careers/senior-financial-technology-advisor",
  "/careers/head-lead-global-payments-coordinator",
  "/blog",
  "/blog/smart-spending-habits-for-a-more-balanced-and-secure-financial-life",
  "/blog/a-practical-guide-to-effortless-expense-reporting-made-simple-and-smart",
  "/blog/smart-collector-tips-for-global-currency-coins-timeless-diverse-and-valuable",
  "/blog/your-essential-guide-to-secured-global-transactions-built-on-trust-and-speed",
  "/blog/essential-learning-guide-for-workplace-conversations-made-open-honest-and-meaningful",
  "/blog/advanced-analytics-guide-to-transaction-performance",
  "/blog-category/technology",
  "/blog-author/peggy-carter",
  "/career-category/security",
  "/contact",
  "/terms-conditions",
  "/style-guide",
  "/licenses",
  "/changelog",
  "/instructions",
  "/401",
  "/404",
];

async function main() {
  const browser = await chromium.launch({ headless: true });
  const results: any = {
    routesChecked: 0,
    routesPassed: 0,
    failures: [],
    interactions: {},
    responsive: {},
  };

  // 1. Check every route for render, console errors, broken images, overflow
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  const consoleErrors: string[] = [];
  page.on("pageerror", (err) => consoleErrors.push(err.message));
  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  });

  for (const r of ALL_ROUTES) {
    results.routesChecked++;
    await page.goto(BASE + r, { waitUntil: "networkidle", timeout: 30000 });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(200);
    const check = await page.evaluate(`(() => {
      const h1 = document.querySelector("h1");
      const broken = Array.from(document.querySelectorAll("img"))
        .filter(img => !img.complete || img.naturalWidth === 0)
        .map(img => img.getAttribute("src"));
      return {
        hasH1: Boolean(h1 && h1.textContent.trim().length > 0),
        overflowX: document.documentElement.scrollWidth > window.innerWidth,
        brokenImages: broken,
      };
    })()`);
    if (!check.hasH1 || check.overflowX || check.brokenImages.length > 0) {
      results.failures.push({ route: r, ...check });
    } else {
      results.routesPassed++;
    }
  }

  // 2. Test Interactions:
  // Dropdown
  await page.goto(BASE + "/home", { waitUntil: "networkidle" });
  await page.locator("button:has-text('Pages')").click();
  results.interactions.pagesDropdownOpens = await page.locator("a[role='menuitem']:has-text('Careers')").isVisible();

  // FAQ
  await page.goto(BASE + "/features", { waitUntil: "networkidle" });
  const faqBtn1 = page.locator(".faq-question-area").nth(0);
  const faqBtn2 = page.locator(".faq-question-area").nth(1);
  const initialFirstOpen = (await faqBtn1.getAttribute("aria-expanded")) === "true";
  await faqBtn2.click();
  const secondOpened = (await faqBtn2.getAttribute("aria-expanded")) === "true";
  results.interactions.faqAccordion = { initialFirstOpen, secondOpened };

  // Blog filter
  await page.goto(BASE + "/blog", { waitUntil: "networkidle" });
  const allCount = await page.locator("article.blog-card").count();
  await page.locator("button[role='tab']:has-text('Security')").click();
  const secCount = await page.locator("article.blog-card").count();
  results.interactions.blogFilter = { allCount, securityCount: secCount };

  // Job filter & Culture video modal
  await page.goto(BASE + "/careers", { waitUntil: "networkidle" });
  const jobAll = await page.locator(".career-card").count();
  await page.locator("button[role='tab']:has-text('Finance')").click();
  const jobFin = await page.locator(".career-card").count();
  await page.locator("button[aria-label='Play team culture video']").click();
  const modalVisible = await page.locator("div[role='dialog']").isVisible();
  await page.keyboard.press("Escape");
  const modalClosedOnEsc = !(await page.locator("div[role='dialog']").isVisible());
  results.interactions.careers = { jobAll, jobFin, modalVisible, modalClosedOnEsc };

  // Policy Tabs
  await page.goto(BASE + "/terms-conditions", { waitUntil: "networkidle" });
  await page.locator("button[role='tab']:has-text('User Policy')").click();
  const userPolicyVisible = await page.locator("h2:has-text('Purpose of Guidelines')").isVisible();
  results.interactions.policyTabs = { userPolicyVisible };

  // Contact Form & Card Alert Form validation + submission
  await page.goto(BASE + "/contact", { waitUntil: "networkidle" });
  await page.fill("#contact-name", "Ada Lovelace");
  await page.fill("#contact-email", "ada@example.com");
  await page.fill("#contact-company", "FlowSwipe Test");
  await page.fill("#contact-message", "Testing contact form submission flow.");
  await page.locator("form.contact-form-area button[type='submit']").click();
  await page.waitForTimeout(600);
  const contactSuccess = await page.locator("div[role='status']").first().isVisible();

  await page.fill("#cta-email", "alerts@example.com");
  await page.locator("form.cta-form button[type='submit']").click();
  await page.waitForTimeout(600);
  const ctaSuccess = await page.locator(".cta-form-area div[role='status']").isVisible();
  results.interactions.forms = { contactSuccess, ctaSuccess };

  // 3. Responsive checks across Desktop (1440), Tablet (768), Mobile (390, 320)
  for (const vp of [
    { name: "desktop-1440", w: 1440, h: 900 },
    { name: "tablet-768", w: 768, h: 1024 },
    { name: "mobile-390", w: 390, h: 844 },
    { name: "mobile-320", w: 320, h: 700 },
  ]) {
    const vpCtx = await browser.newContext({ viewport: { width: vp.w, height: vp.h } });
    const vpPage = await vpCtx.newPage();
    let anyOverflow = false;
    for (const r of ["/home", "/features", "/about-us", "/careers", "/blog", "/contact"]) {
      await vpPage.goto(BASE + r, { waitUntil: "networkidle" });
      const overflow = await vpPage.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
      if (overflow) anyOverflow = true;
    }
    results.responsive[vp.name] = { horizontalOverflow: anyOverflow };
    await vpCtx.close();
  }

  results.consoleErrors = consoleErrors;
  await browser.close();

  fs.mkdirSync("docs/testing", { recursive: true });
  fs.writeFileSync("docs/testing/e2e-results.json", JSON.stringify(results, null, 2));
  console.log(JSON.stringify(results, null, 2));
  if (results.failures.length > 0 || consoleErrors.length > 0) {
    process.exit(1);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

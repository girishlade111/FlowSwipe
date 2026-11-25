# FlowSwipe Reference Audit

## Root URL & Routing Discovery
- **Reference Root URL (`https://flowswipe-template.webflow.io/`)**: Template Showcase presentation page ("Simplify payments with one smart card" + "Explore Pages" / "Buy Template" + 13+ Pages / 95+ Sections / Figma showcase / Main pages / Utility pages / Design standards / Mobile responsive / Browse all templates).
- **Actual Product Homepage (`https://flowswipe-template.webflow.io/home`)**: Consumer-facing FlowSwipe fintech landing page ("Control Every Transaction" / "Simplify Payments With One Smart Card" / "Get a Free Card" / Smart card 3D stack / Bento safety grid / Digital integration / Global payments / Testimonials / Pre-book card / Blog / Card Alert CTA / Marquee / Footer).
- **Local Routing Decision**:
  - `/home` renders the consumer-facing Fintech Homepage.
  - `/showcase` always renders the Template Presentation page.
  - `/` is configurable via `VITE_DEFAULT_ROUTE` in `src/data/siteConfig.ts` (defaults to `/` rendering `TemplateShowcase` so the exact reference root URL matches 1:1, while `/home` is linked from header `Home` and brand logo; setting `VITE_DEFAULT_ROUTE=/home` makes `/` mount the Fintech Homepage directly for independent business deployment).

## Discovered Routes (30 Primary + 9 Taxonomy = 39 Total)
- **Main Pages (9)**: `/`, `/home`, `/features`, `/about-us`, `/team`, `/careers`, `/blog`, `/contact`, `/terms-conditions`
- **Utility Pages (6)**: `/style-guide`, `/licenses`, `/changelog`, `/instructions`, `/401`, `/404`
- **CMS Collections**:
  - **Team (3)**: `/team/jacob`, `/team/mark`, `/team/rodriguez`
  - **Careers (6)**: `/careers/principal-lead-fintech-product-manager`, `/careers/lead-global-payment-solutions-specialist`, `/careers/senior-customer-experience-strategist`, `/careers/chief-blockchain-integration-engineer`, `/careers/senior-financial-technology-advisor`, `/careers/head-lead-global-payments-coordinator`
  - **Blog (6)**: 6 published articles (Jan 2026) + category & author filtering.

## Verified Deviations / Quirks in Reference
1. `/terms-conditions` Privacy Policy tab repeats the `How We Use Your Information` heading twice in the live reference DOM; preserved accurately with note.
2. About Us statistics (`89M`, `473+`) use rolling 3-digit odometer stacks (`[8,5,2]`, `[0,3,9]` + `M`, and `[4,6,2]`, `[5,8,7]`, `[3,2,0]` + `+`) that animate vertically into their final settled digits.
3. No `.mp4` or `.json` Lottie files are used on the live reference; video lightboxes on `/home` and `/careers` open YouTube embeds (`setu9Ir1miY`), and all 3D holographic artwork consists of high-resolution transparent PNG/AVIF/WebP renders animated via GSAP / CSS transforms.

# Functional Test Report

## Automated Test Suites
1. **Vitest Unit Tests (`npm test`)**:
   - `src/__tests__/cms.test.ts`: **4 passed / 4 total** (verifies 3 Team members, 6 Careers listings, 6 Blog articles, 4 FAQs, 4 Core Values, 3 Policy tabs, and local `/assets/` paths).
2. **Playwright E2E Suite (`scripts/run-e2e.ts` against `vite preview` at `http://127.0.0.1:4173`)**:
   - **Routes Verified**: **34 / 34 passed** (main pages, showcase, 3 team details, 6 career details, 6 blog details, category/author taxonomies, 6 utility pages `/style-guide`, `/licenses`, `/changelog`, `/instructions`, `/401`, `/404`).
   - **Broken Images**: `0` across all 34 routes.
   - **Console / Page Errors**: `0`.
   - **Interactions Verified**:
     - Header `Pages` dropdown opens (`true`).
     - FAQ accordion initial open + expand second item (`true`).
     - Blog category filtering (`All`: 6, `Security`: 2).
     - Careers category filtering (`All`: 6, `Finance`: 2) & Culture video modal open/Escape close (`true`).
     - Terms & Conditions segmented policy tabs switching (`true`).
     - Contact form & Card Alert CTA form validation + local adapter submission (`true`).
   - **Responsive Overflow Check**: `horizontalOverflow: false` at `1440x900`, `768x1024`, `390x844`, and `320x700`.

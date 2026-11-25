# FlowSwipe — Multi-Page Fintech Web Application

Complete React + TypeScript + Vite reconstruction of the FlowSwipe fintech website and template showcase, preserving the dark `#080808` / `#0f0f0f` / `#c45003` design system, `Onest` typography, 159 verified local holographic 3D & brand assets, GSAP + Lenis smooth motion, and full CMS collections.

## Quick Start

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` — Start Vite development server
- `npm run build` — Run `tsc -b` and Vite production build
- `npm run preview` — Preview production build locally
- `npm test` — Run Vitest unit suite
- `npx tsx scripts/verify-preview.ts` — Run Playwright E2E + pixelmatch visual regression against `vite preview`
- `npm run research:validate` — Validate SHA-256 checksums, dimensions, and MIME types of all 161 asset manifest entries

## Root Routing Configuration

- `/` renders the Template Showcase (`TemplateShowcase.tsx`) by default to match the reference root URL (`https://flowswipe-template.webflow.io/`), or mounts the Fintech Homepage (`Home.tsx`) when `VITE_DEFAULT_ROUTE=/home` is set.
- `/home` always renders the consumer-facing FlowSwipe Fintech Homepage.
- `/showcase` always renders the Template Presentation Showcase.

See [docs/configuration.md](docs/configuration.md) for environment options and [docs/research/route-manifest.json](docs/research/route-manifest.json) for the full 30+ route inventory.

# FlowSwipe Configuration Guide

## Environment Variables (`.env.example`)
- `VITE_DEFAULT_ROUTE`: Set to `/` (Template Showcase default matching reference root) or `/home` (Fintech Homepage default for independent business launch).
- `VITE_SUPPORT_EMAIL`: Support email rendered on Contact page (`support@flowswipe.com` by default).
- `VITE_LOGIN_URL`: Destination for header `Login` button (`/contact` by default).
- `VITE_APP_DOWNLOAD_URL`: Destination for `Download App` CTA (`/features` by default).
- `VITE_CONTACT_FORM_ENDPOINT`: Optional authorized POST endpoint for Contact form.
- `VITE_CARD_ALERT_ENDPOINT`: Optional authorized POST endpoint for Card Alert email signup.
- `VITE_CAREER_APPLY_ENDPOINT`: Optional authorized POST endpoint for Career application form.

## Form Adapter Behavior
When endpoint env vars are omitted, `src/lib/formAdapter.ts` uses a clearly documented local development adapter and informs the user that submissions are preview-only and not sent to external servers or financial backends.

## Centralized Data & Design Tokens
- Design tokens: `src/styles/tokens.css`, `src/styles/typography.css`, `src/styles/animations.css`, `src/styles/global.css`
- CMS collections: `src/data/team.ts`, `src/data/jobs.ts`, `src/data/articles.ts`
- Shared content: `src/data/faqs.ts`, `src/data/values.ts`, `src/data/policies.ts`, `src/data/testimonials.ts`, `src/data/features.ts`
- Asset registry: `src/data/media.ts` and `docs/research/asset-manifest.json`

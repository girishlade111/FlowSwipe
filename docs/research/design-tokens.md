# FlowSwipe Design Tokens (Verified & Measured)

All values below are extracted directly from the live reference stylesheet (`flowswipe-template.webflow.shared.293018137.css`) and verified via Playwright computed-style inspection (`docs/research/computed-styles.json`) at 1440x900 desktop viewport.

## Color System (`:root` variables)
| Token | CSS Variable | Hex / Value | Usage |
|---|---|---|---|
| Main Dark Background | `--bg-color--dark` | `#080808` | Page canvas background |
| Black | `--bg-color--black` | `#000000` | Deep shadows, hero contrasts |
| Card Dark Background | `--bg-color--card-bg-dark` | `#0f0f0f` | Bento cards, FAQ items, form panels |
| Card Lite Background | `--bg-color--card-bg-lite` | `#1f1f1f` | Inputs, inactive filter tabs, FAQ closed buttons |
| Primary Orange | `--bg-color--primary` | `#c45003` | Primary buttons, active nav link, footer section headers, active FAQ icon |
| Primary Orange Hover | `--color-primary-hover` | `#b04602` | Measured hover darkening |
| Border / Stroke | `--bg-color--border` | `#262626` | 1px card & input borders |
| Text White | `--bg-color--white` | `#ffffff` | Headings, active tab background |
| Text Light | `--font-color--lite` | `#cccccc` | FAQ questions, marquee text, labels |
| Text Grey | `--font-color--grey` | `#b6b6b6` | Body paragraphs, muted descriptions, footer links |
| Hero Grey Glow | `--hero-glow` | `#1c1c1c` | Blurred `150px` top radial arc (`inset: -120px -5% auto`) |

## Typography System
- **Verified Primary Font**: `Onest, sans-serif` (Google Fonts weights: `300, 400, 500, 600, 700`)
- **Fallback Stack**: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

| Scale | CSS Variable | Size | Line Height | Weight |
|---|---|---|---|---|
| Home Hero H1 | `--font-size-home-h1` | `68px` | `120%` (`81.6px`) | `500` |
| Showcase Hero H1 | `--font-size-showcase-h1` | `60px` | `120%` (`72px`) | `500` |
| Inner H1 | `--_font-size---heading--h1` | `56px` | `120%` (`67.2px`) | `500` |
| H2 | `--_font-size---heading--h2` | `40px` | `120%` (`48px`) | `500`–`600` |
| H3 | `--_font-size---heading--h3` | `34px` (cards `24px`) | `120%`–`130%` | `500`–`600` |
| H4 | `--_font-size---heading--h4` | `30px` | `120%` | `500` |
| H5 | `--_font-size---heading--h5` | `24px` | `120%` | `500` |
| H6 | `--_font-size---heading--h6` | `20px` | `130%` | `500` |
| Body Default | `--_font-size---paragraph--default` | `18px` | `150%` (`27px`) | `400` |
| Body Small | `--_font-size---paragraph--small` | `16px` | `150%` | `400` |
| Body X-Small | `--_font-size---paragraph--x-small` | `14px` | `150%` | `400` |

## Geometry & Spacing
- **Main Container Width**: `1200px` (1440px viewport with `120px` gutters or `20px` mobile padding)
- **Header Height**: `110px` (`30px 0px` vertical padding)
- **Section Spacing Regular**: `120px` (`--_spacing---section-space--regular`)
- **Section Spacing Small**: `60px` (`--_spacing---section-space--small`)
- **Border Radius Scale**: `8px` (`small`), `16px` (`medium`), `20px` (`large`), `24px` (`x-large`), `100%` (`circle`)
- **Breakpoints (Desktop-first Webflow match)**: `<= 991px` (Tablet), `<= 767px` (Mobile Landscape), `<= 479px` (Mobile Portrait)

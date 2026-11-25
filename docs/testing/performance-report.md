# Performance Report

## Production Build Chunking (`npm run build`)
- `dist/index.html`: `1.59 kB` (`gzip: 0.65 kB`)
- `dist/assets/index-CcN58Fmk.css`: `103.75 kB` (`gzip: 16.25 kB`)
- `dist/assets/react-vendor-B_vxFV_p.js`: `50.95 kB` (`gzip: 17.96 kB`)
- `dist/assets/form-vendor-BwpJ7ph1.js`: `90.23 kB` (`gzip: 25.32 kB`)
- `dist/assets/motion-vendor-CrVM0rs4.js`: `91.06 kB` (`gzip: 33.51 kB`)
- `dist/assets/index-CAmjWjz1.js`: `405.18 kB` (`gzip: 119.69 kB`)

## Measured Runtime Metrics (`scripts/measure-perf.ts` on `vite preview` at `1440x900`)
| Route | `domContentLoadedMs` | `loadEventMs` | CLS |
|---|---|---|---|
| `/` (cold initial load) | `2469` | `2471` | `0` |
| `/home` | `27` | `27` | `0` |
| `/features` | `42` | `43` | `0` |
| `/about-us` | `40` | `41` | `0` |
| `/careers` | `27` | `27` | `0` |
| `/blog` | `37` | `38` | `0` |
| `/contact` | `24` | `24` | `0` |

## Measurement Scope & Notes
- `CLS` measured `0` across all 7 tested routes.
- Lighthouse scores (Performance, Accessibility, Best Practices, SEO) and INP/LCP observer sweeps were not executed via Lighthouse CLI in this environment and are reported as unmeasured.
- Media optimization: 6 oversized raster images (`> 1200px`) have non-destructive 960w WebP variants generated under `public/assets/optimized/`.

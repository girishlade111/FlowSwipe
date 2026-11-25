# Visual Regression Report

Automated `pixelmatch` and DOM geometry comparisons executed at `1440x900` against live reference captures (`docs/reference/desktop/`) using `scripts/compare-screenshots.ts` on the built `vite preview` server (`http://127.0.0.1:4173`).

## Measured Hero Pixel Diffs & DOM Parity (`docs/testing/visual-comparison-results.json`)
| Route | Body BG | Header Height | H1 Font | H1 Size | Hero Pixel Diff |
|---|---|---|---|---|---|
| `/` | `rgb(8, 8, 8)` | `107px` | `Onest, sans-serif` | `60px` | `20.66%` (live marquee frame offset) |
| `/home` | `rgb(8, 8, 8)` | `107px` | `Onest, sans-serif` | `68px` | `4.92%` |
| `/features` | `rgb(8, 8, 8)` | `107px` | `Onest, sans-serif` | `68px` | `3.59%` |
| `/about-us` | `rgb(8, 8, 8)` | `107px` | `Onest, sans-serif` | `68px` | `8.43%` |
| `/team` | `rgb(8, 8, 8)` | `107px` | `Onest, sans-serif` | `68px` | `10.61%` |
| `/careers` | `rgb(8, 8, 8)` | `107px` | `Onest, sans-serif` | `68px` | `4.46%` |
| `/blog` | `rgb(8, 8, 8)` | `107px` | `Onest, sans-serif` | `68px` | `4.91%` |
| `/contact` | `rgb(8, 8, 8)` | `107px` | `Onest, sans-serif` | `68px` | `4.31%` |
| `/terms-conditions` | `rgb(8, 8, 8)` | `107px` | `Onest, sans-serif` | `68px` | `4.24%` |
| `/style-guide` | `rgb(8, 8, 8)` | `107px` | `Onest, sans-serif` | `68px` | `12.77%` |

## Summary of Differences
- All routes match `rgb(8, 8, 8)` background, `Onest` font family, `0` horizontal overflow, and `0` broken images.
- Diff artifacts saved under `docs/testing/diffs/*.png` and full-page local captures under `docs/testing/screenshots/*.png`.
- Remaining visual variance on `/` (`20.66%`) and `/style-guide` (`12.77%`) stems from dynamic horizontal marquee scroll offsets at capture time and refactored Style Guide preview card spacing.

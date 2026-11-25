# FlowSwipe Responsive Audit

Measured breakpoints from `reference-webflow.css` and Playwright captures (`1440x900`, `768x1024`, `390x844`):

- **Desktop (`>= 992px`, tested at `1920x1080`, `1440x900`, `1280x800`)**:
  - `1200px` centered container (`padding: 0 20px` on narrower desktop).
  - Full horizontal navbar (`110px` height), asymmetric 2-row/3-row bento grids, 3-column Blog & Careers grids, 2-column Contact form, 2-column Footer `Preview` links + `Utilities` column.
- **Tablet (`<= 991px`, tested at `1024x768`, `768x1024`)**:
  - Hamburger menu replaces desktop links; header height `90px` (`padding: 20px 0`).
  - Asymmetric bento grids adjust span proportions and collapse 3-col grids to 2 columns.
  - Hero cylinders scale down (`max-width: 22%`) and reposition cleanly outside headline text.
- **Mobile (`<= 767px` and `<= 479px`, tested at `430x932`, `390x844`, `375x812`, `320x700`)**:
  - Single-column stacking for Bento cards, Contact support cards, Contact form, Careers/Blog grids, and Card Alert CTA input + button.
  - Hero H1 scales cleanly (`68px -> 48px -> 36px`), `0px` horizontal overflow across all viewports.
  - Footer columns stack vertically with proportional wordmark scaling.

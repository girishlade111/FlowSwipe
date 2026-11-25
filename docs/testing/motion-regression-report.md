# Motion Regression Report

## Verified Animation Architecture
- **Scroll & Reveal Engine**: GSAP 3.13 + ScrollTrigger + Lenis smooth scroll (`src/animations/useFlowSwipeAnimations.ts`), matching the reference `/instructions` custom attributes (`animate-banner`, `animate`, `image-banner`, `card="wrap"` + `card="item"`).
- **CSS Infinite Marquees**: Hardware-accelerated `translate3d` loops for `FooterMarquee`, Home partner logo strip, and Showcase dual montage rows (`src/styles/animations.css`).
- **About Counter Roll**: IntersectionObserver-triggered vertical odometer digit transitions settling at `89M` and `473+` (`CompanyStatistics.tsx`).
- **Interactive Controls Tested**:
  - Pages dropdown open/close on hover, click, `Escape`, and outside click (`pagesDropdownOpens: true`).
  - FAQ accordion smooth `max-height` & `aria-expanded` toggle (`initialFirstOpen: true`, `secondOpened: true`).
  - Video lightbox modal open & `Escape` close (`modalVisible: true`, `modalClosedOnEsc: true`).
  - `prefers-reduced-motion: reduce`: Disables Lenis/GSAP entrance animations, marquee motion, and floating loops while keeping all content visible at opacity `1`.

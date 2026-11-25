# FlowSwipe Interaction Inventory

Verified against live DOM and Webflow CSS/JS on `https://flowswipe-template.webflow.io`:

1. **Desktop Header & Pages Dropdown**:
   - Links: `Home` (`/home`), `Features` (`/features`), `Pages` dropdown (`Careers`, `Team`, `Blog`), `About Us` (`/about-us`), CTA `Login` (`/contact`).
   - Active link highlighted in `#c45003`.
   - Dropdown opens on hover/click, displays vertical dark menu with `Careers`, `Team`, `Blog`, closes on outside click or `Escape`.
2. **Mobile Navigation**:
   - Collapses below `991px` into 3-line hamburger `.nav-menu-button`.
   - Expands full-width dark drawer with nav links, `Pages` accordion/links, and `Login` CTA.
3. **Hero Entrance & 3D Smart Card Scroll Sequence (`/home`)**:
   - Uses Webflow GSAP attribute hooks (`animate-banner="grow"`, `animate-banner="slide-top"`, `image-banner="reveal"`).
   - 3D smart card (`perspective: 10000px`, `.card-stack` with `rotateY(50deg)`) transitions smoothly into view alongside diagonal marquee strip (`.banner-bg-wrap`, `rotate(-11deg)`).
4. **Scroll Reveal Attributes**:
   - `animate="slide-top"`, `animate="grow"`, `animate="slide-left"`, `image="reveal"`, `card="wrap"` + `card="item"`.
5. **About Page Counters (`/about-us`)**:
   - `.counter-number-area` with vertical digit columns (`.counter-animation-area.top` / `.bottom`), settling at `89M` and `473+`.
6. **Global Presence Interactive Map Markers (`/about-us`)**:
   - Four `.globe-location-wrap` markers (`US & Canada`, `Chad`, `Mumbai`, `Australia`) revealing `.globe-card-wrap` details with `Contact Office` link.
7. **Carousels (`/home`, `/about-us`, `/careers`)**:
   - Values carousel (`Inspiration`, `Innovation`, `Collaboration`, `Growth`) and Testimonials carousel (`From The Team's Desk` / `Voices that truly define our greatness`) with left/right circular arrow controls, touch/drag scroll, and partial edge peek.
8. **Category Filters (`/careers`, `/blog`)**:
   - Filter pills (`All`, `Technology`, `Finance`, `Security`); active pill uses white background (`#ffffff`) with dark text; inactive uses `#1f1f1f` with `#cccccc`.
9. **Video Lightbox Modal (`/home`, `/careers`)**:
   - Triggered by circular play button over holographic microphone (`/careers`) or podcast card (`/home`, `/careers`). Opens YouTube embed (`setu9Ir1miY`) in accessible modal with Escape/backdrop close.
10. **FAQ Accordion (`/features`, `/about-us`, `/contact`)**:
    - 4 items; first item (`How to pre-book my card?`) open by default. Toggle button `100px x 48px`: `#1f1f1f` with `+` when collapsed, `#c45003` with `-` when expanded.
11. **Legal Policy Tabs (`/terms-conditions`)**:
    - Segmented 3-tab control (`Privacy Policy`, `Terms & Conditions`, `User Policy`) swapping policy content cleanly.
12. **Forms (`CardAlertCTA`, `CommunicationForm`, `PasswordPage`)**:
    - Email subscription (`Enter your business email` + `Book Now`) and 5-field contact form (`Name`, `Email`, `Phone Number`, `Company`, `Message` + `Submit`) with Zod validation, loading/success/error states via local dev adapter.
13. **Footer Marquee**:
    - Continuous horizontal seamless marquee repeating `TAP INTO A SMARTER WAY TO PAY. ✦ ONE CARD. EVERY PAYMENT. TOTAL CONTROL. ✦ SEAMLESS PAYMENTS FOR A CASHLESS WORLD. ✦`.

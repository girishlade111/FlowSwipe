import { Link } from "react-router-dom";
import { CardAlertCTA } from "../components/cta/CardAlertCTA";
import { SiteLayout } from "../components/layout/SiteLayout";
import { mediaAssets } from "../data/media";

const MONTAGE_TOP = [
  "/assets/images/showcase/5af82d09f979b2bcda78e8214ffffe40_animation-image-1.jpg",
  "/assets/images/showcase/9a35eed7290904814fb671230501a1e8_animation-image-2.jpg",
  "/assets/images/showcase/36063a114863b7e0dab3279465bb4147_animation-image-3.jpg",
  "/assets/images/showcase/c90245dd9b3160a3ddac655742f8ab2a_animation-image-4.jpg",
  "/assets/images/showcase/9f1cda5d490d1c29fb1ca76e494f6191_animation-image-5.jpg",
];

const MONTAGE_BOTTOM = [
  "/assets/images/showcase/3d20e92dd105a11b0ee9aae6b6324bcf_animation-image-6.jpg",
  "/assets/images/showcase/6c23e1bcaad1b8af2d2cd21a601b2eec_animation-image-7.jpg",
  "/assets/images/showcase/c144dbfa8b2f2a8416556b5dd8e4fd43_animation-image-8.jpg",
  "/assets/images/showcase/576f66256d2918835ff83a7346f115fa_animation-image-9.jpg",
  "/assets/images/showcase/e9d262aa2a89a6cb90ff0e4ae3aeb563_animation-image-10.jpg",
];

const MAIN_PAGES = [
  { title: "Home", to: "/home", img: "/assets/images/showcase/0ac83c8fcb886d39ba5376174f809d0f_main-image-1.jpg" },
  { title: "About Us", to: "/about-us", img: "/assets/images/showcase/2e9195365e329cb2dd867759275d4192_main-image-2.jpg" },
  { title: "Features", to: "/features", img: "/assets/images/showcase/389f13f7843f08773389cc497ec12534_main-image-3.jpg" },
  { title: "Team", to: "/team", img: "/assets/images/showcase/0abce629c1cac3218956767a8ea7051f_main-image-4.jpg" },
  { title: "Team Single", to: "/team/jacob", img: "/assets/images/showcase/2f2cb2c55b3a0ee683637cc98725bf50_main-image-5.jpg" },
  { title: "Blog", to: "/blog", img: "/assets/images/showcase/1be19f1d2619712d7a47d34f2b4473bf_main-image-6.jpg" },
  {
    title: "Blog Single",
    to: "/blog/smart-collector-tips-for-global-currency-coins-timeless-diverse-and-valuable",
    img: "/assets/images/showcase/6f0a3628fd2d70a38a705186b60a3920_main-image-7.jpg",
  },
  { title: "Careers", to: "/careers", img: "/assets/images/showcase/9e461571fa9a6dd4724c3ddf76e3a0f3_main-image-8.jpg" },
  {
    title: "Careers Single",
    to: "/careers/principal-lead-fintech-product-manager",
    img: "/assets/images/showcase/c5b9739400392a5ee4ae6e05b3c1e759_main-image-9.jpg",
  },
  { title: "Contact Us", to: "/contact", img: "/assets/images/showcase/edfe62fdbfadd1acec3c3cd506d9a526_main-img-10.jpg" },
  { title: "Terms", to: "/terms-conditions", img: "/assets/images/showcase/main-img-11.jpg" },
];

const UTILITY_PAGES = [
  { title: "Style Guide", to: "/style-guide", img: "/assets/images/showcase/1f9012d0dfd5a53ccb7585e335798983_utility-image-1.jpg" },
  { title: "Licenses", to: "/licenses", img: "/assets/images/showcase/de382ee9e9e3b8a2b10dc31fca0940de_utility-image-2.jpg" },
  { title: "Changelog", to: "/changelog", img: "/assets/images/showcase/4a6435522f9e983b8423618aa5d443ab_utility-image-3.jpg" },
  { title: "Instructions", to: "/instructions", img: "/assets/images/showcase/utility-img-4.jpg" },
  { title: "Protected Page", to: "/401", img: "/assets/images/showcase/cf297ec98dbfa1e019b7431627bf4a36_utility-image-4.jpg" },
  { title: "Not Found", to: "/404", img: "/assets/images/showcase/ec0540aaef9a6b92046eeae3db627a48_utility-image-5.jpg" },
];

const ESSENTIAL_FEATURES = [
  { label: "Responsive Design", icon: "/assets/icons/feature-icon-1.svg" },
  { label: "Clean Code", icon: "/assets/icons/feature-icon-2.svg" },
  { label: "Smooth Animations", icon: "/assets/icons/feature-icon-3.svg" },
  { label: "SEO Optimized", icon: "/assets/icons/feature-icon-4.svg" },
  { label: "Global Swatches", icon: "/assets/icons/feature-icon-5.svg" },
  { label: "CMS Collections", icon: "/assets/icons/feature-icon-6.svg" },
  { label: "Reusable Components", icon: "/assets/icons/feature-icon-7.svg" },
  { label: "Fast Performance", icon: "/assets/icons/feature-icon-8.svg" },
];

export function TemplateShowcase() {
  return (
    <SiteLayout
      title="FlowSwipe - Template Showcase"
      description="FlowSwipe template presentation showcasing all fintech pages, components, Figma file, and responsive layouts."
    >
      {/* Section 1: Presentation Hero */}
      <section className="splash-banner-section">
        <div className="w-layout-blockcontainer splash-container w-container">
          <div animate-banner="grow" className="splash-banner-title-wrap">
            <h1 className="splash-banner-title">Simplify payments with one smart card</h1>
            <div className="splash-banner-text-wrap">
              <p className="splash-text white">
                Sprout’s Analytics tools speed up and automate data collection.
              </p>
            </div>
            <div className="splash-banner-button-wrap">
              <a href="#pages" className="primary-button w-button">
                Explore Pages
              </a>
              <Link
                to="/home"
                className="primary-button w-variant-2060a244-7a9b-43e0-2bb8-f48970aa75ff w-button"
              >
                Open Fintech Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Orange Screenshot Montage */}
      <section className="splash-animation-section">
        <div className="splash-animation-wrap">
          <div className="splash-animation-top-wrap fs-marquee-pause" style={{ overflow: "hidden" }}>
            <div className="fs-marquee-track" style={{ gap: "20px" }}>
              {[...MONTAGE_TOP, ...MONTAGE_TOP].map((src, i) => (
                <div key={i} className="splash-animation-image-wrap" style={{ flex: "0 0 422px" }}>
                  <img src={src} alt="FlowSwipe page preview" className="splash-animation-image" />
                </div>
              ))}
            </div>
          </div>
          <div className="splash-animation-top-wrap fs-marquee-pause" style={{ overflow: "hidden", marginTop: "20px" }}>
            <div className="fs-marquee-track fs-marquee-track--reverse" style={{ gap: "20px" }}>
              {[...MONTAGE_BOTTOM, ...MONTAGE_BOTTOM].map((src, i) => (
                <div key={i} className="splash-animation-image-wrap" style={{ flex: "0 0 422px" }}>
                  <img src={src} alt="FlowSwipe section preview" className="splash-animation-image" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 & 4: Included Content + Figma Showcase */}
      <section className="splash-counter-section">
        <div className="w-layout-blockcontainer splash-container w-container">
          <div className="align-center">
            <h2 className="section-title">
              What is included in FlowSwipe How many pages, sections, components
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
              marginTop: "48px",
            }}
          >
            <div className="splash-card" style={{ background: "var(--bg-color--card-bg-dark)", border: "1px solid var(--bg-color--border)", borderRadius: "20px", padding: "28px" }}>
              <h3 className="card-title" style={{ marginBottom: "16px" }}>13+ Pages</h3>
              <img src="/assets/images/showcase/504031fb9031f47d27093d56a4d5fb44_page-image.png" alt="Pages preview" style={{ borderRadius: "12px", width: "100%" }} />
            </div>
            <div className="splash-card" style={{ background: "var(--bg-color--card-bg-dark)", border: "1px solid var(--bg-color--border)", borderRadius: "20px", padding: "28px" }}>
              <h3 className="card-title" style={{ marginBottom: "16px" }}>95+ Sections</h3>
              <img src="/assets/images/showcase/395f4748f544cfbd8c2ccfa34086a05c_section-image.png" alt="Sections preview" style={{ borderRadius: "12px", width: "100%" }} />
            </div>
            <div className="splash-card" style={{ background: "var(--bg-color--card-bg-dark)", border: "1px solid var(--bg-color--border)", borderRadius: "20px", padding: "28px" }}>
              <h3 className="card-title" style={{ marginBottom: "16px" }}>Components</h3>
              <img src="/assets/images/showcase/3705699b94f6985d7e75356c29e2b00b_component-image.png" alt="Components preview" style={{ borderRadius: "12px", width: "100%" }} />
            </div>
          </div>

          {/* Figma Showcase */}
          <div
            style={{
              marginTop: "60px",
              background: "var(--bg-color--card-bg-dark)",
              border: "1px solid var(--bg-color--border)",
              borderRadius: "24px",
              padding: "48px",
              textAlign: "center",
            }}
          >
            <img src={mediaAssets.figmaLogo} alt="Figma logo" style={{ width: "44px", marginBottom: "16px" }} />
            <h2 className="section-title" style={{ marginBottom: "28px" }}>Figma file included</h2>
            <img
              src="/assets/images/showcase/e985b085e7d6e705be9e10b13abd4a4c_figma-file-image.png"
              alt="Figma design editor preview"
              style={{ borderRadius: "16px", width: "100%" }}
            />
          </div>
        </div>
      </section>

      {/* Section 5 & 6: Main Pages + Utility Pages */}
      <section id="pages" className="splash-page-section">
        <div className="w-layout-blockcontainer splash-container w-container">
          <div
            style={{
              background: "var(--bg-color--primary)",
              borderRadius: "24px",
              padding: "56px 40px",
            }}
          >
            <h2 className="section-title" style={{ marginBottom: "36px" }}>Main pages</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "24px",
              }}
            >
              {MAIN_PAGES.map((p) => (
                <Link
                  key={p.title}
                  to={p.to}
                  style={{
                    background: "#0f0f0f",
                    borderRadius: "16px",
                    padding: "16px",
                    display: "block",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <img src={p.img} alt={`${p.title} preview`} style={{ borderRadius: "10px", width: "100%" }} />
                  <h3 className="card-title" style={{ marginTop: "14px", fontSize: "20px" }}>
                    {p.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>

          <div style={{ marginTop: "80px" }}>
            <h2 className="section-title" style={{ marginBottom: "36px" }}>Utility pages</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "24px",
              }}
            >
              {UTILITY_PAGES.map((p) => (
                <Link
                  key={p.title}
                  to={p.to}
                  style={{
                    background: "var(--bg-color--card-bg-dark)",
                    borderRadius: "16px",
                    padding: "16px",
                    display: "block",
                    border: "1px solid var(--bg-color--border)",
                  }}
                >
                  <img src={p.img} alt={`${p.title} preview`} style={{ borderRadius: "10px", width: "100%" }} />
                  <h3 className="card-title" style={{ marginTop: "14px", fontSize: "20px" }}>
                    {p.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 & 8: Design Standards & Template Marketing */}
      <section className="splash-asset-section">
        <div className="w-layout-blockcontainer splash-container w-container" style={{ display: "grid", gap: "60px" }}>
          <div
            style={{
              background: "var(--bg-color--primary)",
              borderRadius: "24px",
              padding: "48px 40px",
            }}
          >
            <h2 className="section-title" style={{ marginBottom: "28px" }}>
              Template designed for your growth & We build everything in standards
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "18px",
              }}
            >
              {["Style-guide", "Open Source Fonts", "Open Source Icons", "Designed on Figma"].map(
                (label) => (
                  <div
                    key={label}
                    style={{
                      background: "#0f0f0f",
                      borderRadius: "16px",
                      padding: "24px",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    <h3 className="card-title" style={{ fontSize: "20px" }}>
                      {label}
                    </h3>
                  </div>
                )
              )}
            </div>
            <img
              src="/assets/images/showcase/077f2a5d1eb5ccb0fe9513e6c88301db_styleguide-image.png"
              alt="Design system style guide preview"
              style={{ borderRadius: "16px", width: "100%", marginTop: "24px" }}
            />
          </div>

          <div>
            <h2 className="section-title" style={{ marginBottom: "28px" }}>
              Template marketing section.
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "24px",
              }}
            >
              <div style={{ background: "var(--bg-color--card-bg-dark)", borderRadius: "16px", padding: "24px", border: "1px solid var(--bg-color--border)" }}>
                <h3 className="card-title" style={{ marginBottom: "14px" }}>Email Signature</h3>
                <img src="/assets/images/showcase/6b0d130daee08932fddc65d2c0da29df_marketing-image-1.png" alt="Email signature preview" style={{ borderRadius: "12px", width: "100%" }} />
              </div>
              <div style={{ background: "var(--bg-color--card-bg-dark)", borderRadius: "16px", padding: "24px", border: "1px solid var(--bg-color--border)" }}>
                <h3 className="card-title" style={{ marginBottom: "14px" }}>Call-To-Action</h3>
                <img src="/assets/images/showcase/76b0a61bfc1edb30c7a9d57ce2553092_marketing-image-3.png" alt="CTA preview" style={{ borderRadius: "12px", width: "100%" }} />
              </div>
              <div style={{ background: "var(--bg-color--card-bg-dark)", borderRadius: "16px", padding: "24px", border: "1px solid var(--bg-color--border)" }}>
                <h3 className="card-title" style={{ marginBottom: "14px" }}>Digital Media Resources</h3>
                <img src="/assets/images/showcase/ac4370b357682a69930f59278bb88962_social-asset-image.png" alt="Social assets preview" style={{ borderRadius: "12px", width: "100%" }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9 & 10: Essential Features & Mobile Responsive */}
      <section className="splash-feature-section">
        <div className="w-layout-blockcontainer splash-container w-container">
          <h2 className="section-title" style={{ marginBottom: "28px" }}>Essential features</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "18px",
            }}
          >
            {ESSENTIAL_FEATURES.map((f) => (
              <div
                key={f.label}
                style={{
                  background: "var(--bg-color--card-bg-dark)",
                  border: "1px solid var(--bg-color--border)",
                  borderRadius: "16px",
                  padding: "24px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <img src={f.icon} alt="" aria-hidden="true" style={{ width: "28px", height: "28px" }} />
                <span style={{ color: "#fff", fontWeight: 500 }}>{f.label}</span>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "80px", textAlign: "center" }}>
            <h2 className="section-title" style={{ marginBottom: "32px" }}>Mobile responsive</h2>
            <img
              src="/assets/images/showcase/539f13e87fdc73587c464c202f012b91_responsive-mobile-image.png"
              alt="Mobile responsive showcase across smartphone devices"
              style={{ borderRadius: "20px", width: "100%" }}
            />
          </div>
        </div>
      </section>

      {/* Section 11: Browse All Templates (Preserved only in TemplateShowcase) */}
      <section className="splash-cta-section">
        <div className="w-layout-blockcontainer splash-container w-container">
          <div className="align-center" style={{ marginBottom: "32px" }}>
            <h2 className="section-title">Browse all templates</h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            <div
              style={{
                background: "var(--bg-color--card-bg-dark)",
                border: "1px solid var(--bg-color--border)",
                borderRadius: "20px",
                padding: "32px",
              }}
            >
              <h3 className="card-title">Buy now on Webflow</h3>
              <img
                src="/assets/images/showcase/defa05ed46f69b4e32f0732d8a5816a0_cta-image-1.png"
                alt="FlowSwipe Webflow template"
                style={{ borderRadius: "12px", marginTop: "18px", width: "100%" }}
              />
              <div style={{ marginTop: "20px" }}>
                <a
                  href="https://webflow.com/templates/html/flowswipe-website-template"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-button w-button"
                >
                  Buy Template Now
                </a>
              </div>
            </div>

            <div
              style={{
                background: "var(--bg-color--card-bg-dark)",
                border: "1px solid var(--bg-color--border)",
                borderRadius: "20px",
                padding: "32px",
              }}
            >
              <h3 className="card-title">Browse our awesome Webflow templates</h3>
              <img
                src="/assets/images/showcase/cta-image-2.png"
                alt="VictorFlow templates"
                style={{ borderRadius: "12px", marginTop: "18px", width: "100%" }}
              />
              <div style={{ marginTop: "20px" }}>
                <a
                  href="https://webflow.com/templates/designers/victorflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-button w-button"
                >
                  Explore More Templates
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CardAlertCTA />
    </SiteLayout>
  );
}

import { Badge } from "../components/common/Badge";
import { CardAlertCTA } from "../components/cta/CardAlertCTA";
import { InnerPageHero } from "../components/heroes/InnerPageHero";
import { SiteLayout } from "../components/layout/SiteLayout";
import { mediaAssets } from "../data/media";

const SWATCHES = [
  { name: "Primary", hex: "#C45003", cssVar: "--bg-color--primary" },
  { name: "Text White", hex: "#FFFFFF", cssVar: "--bg-color--white" },
  { name: "Text Light", hex: "#CCCCCC", cssVar: "--font-color--lite" },
  { name: "Text Grey", hex: "#B6B6B6", cssVar: "--font-color--grey" },
  { name: "Card Dark BG", hex: "#0F0F0F", cssVar: "--bg-color--card-bg-dark" },
  { name: "Dark BG", hex: "#080808", cssVar: "--bg-color--dark" },
  { name: "Card Lite Dark BG", hex: "#1F1F1F", cssVar: "--bg-color--card-bg-lite" },
  { name: "Stroke", hex: "#262626", cssVar: "--bg-color--border" },
];

export function StyleGuide() {
  return (
    <SiteLayout
      title="Style Guide - FlowSwipe"
      description="FlowSwipe design system colors, typography, labels, buttons, and UI components."
    >
      <InnerPageHero
        badge="System"
        title="Style Guide"
        description="Core design tokens, color swatches, typography scale, badges, and buttons powering FlowSwipe."
      />

      <section className="section-regular" style={{ paddingTop: 0 }}>
        <div className="w-layout-blockcontainer container w-container" style={{ display: "grid", gap: "60px" }}>
          {/* Colors */}
          <div
            style={{
              background: "var(--bg-color--card-bg-dark)",
              border: "1px solid var(--bg-color--border)",
              borderRadius: "20px",
              padding: "40px",
            }}
          >
            <h2 className="section-title">Colors</h2>
            <p style={{ marginTop: "8px" }}>
              The primary colours and Text Shades are consistently used throughout the website.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))",
                gap: "20px",
                marginTop: "28px",
              }}
            >
              {SWATCHES.map((s) => (
                <div key={s.name}>
                  <div
                    style={{
                      height: "110px",
                      borderRadius: "12px",
                      background: `var(${s.cssVar})`,
                      border: "1px solid var(--bg-color--border)",
                    }}
                  />
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                    <h3 style={{ fontSize: "16px" }}>{s.name}</h3>
                    <span className="text-x-small">{s.hex}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Typography */}
          <div
            style={{
              background: "var(--bg-color--card-bg-dark)",
              border: "1px solid var(--bg-color--border)",
              borderRadius: "20px",
              padding: "40px",
              display: "grid",
              gap: "20px",
            }}
          >
            <h2 className="section-title">Typography</h2>
            <p>Font family: Onest (300, 400, 500, 600, 700)</p>
            <h1>Heading 1 — 56px / 120%</h1>
            <h2>Heading 2 — 40px / 120%</h2>
            <h3>Heading 3 — 34px / 130%</h3>
            <h4>Heading 4 — 30px / 120%</h4>
            <h5>Heading 5 — 24px / 130%</h5>
            <h6>Heading 6 — 20px / 130%</h6>
            <p>Default Paragraph — 18px / 150%</p>
            <p className="text-x-small">Small / X-Small Paragraph — 14px / 150%</p>
          </div>

          {/* Labels & Buttons */}
          <div
            style={{
              background: "var(--bg-color--card-bg-dark)",
              border: "1px solid var(--bg-color--border)",
              borderRadius: "20px",
              padding: "40px",
              display: "grid",
              gap: "24px",
            }}
          >
            <h2 className="section-title">Labels & Buttons</h2>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
              <Badge label="Base Label" />
              <Badge label="Home Label" variant="home" />
            </div>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
              <span className="primary-button w-button">Default Button</span>
              <span className="primary-button w-variant-9b74692f-4e58-b2f0-23be-d1678f1de4d7 w-button">
                Outlined Button
              </span>
              <span className="primary-button w-variant-2060a244-7a9b-43e0-2bb8-f48970aa75ff w-button">
                White Button
              </span>
            </div>
            <div>
              <img
                src={mediaAssets.styleGuideImg}
                alt="Style guide visual preview"
                style={{ borderRadius: "16px", maxWidth: "480px", width: "100%" }}
              />
            </div>
          </div>
        </div>
      </section>

      <CardAlertCTA />
    </SiteLayout>
  );
}

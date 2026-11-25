import { CardAlertCTA } from "../components/cta/CardAlertCTA";
import { InnerPageHero } from "../components/heroes/InnerPageHero";
import { SiteLayout } from "../components/layout/SiteLayout";

export function Instructions() {
  return (
    <SiteLayout
      title="Instructions - FlowSwipe"
      description="Configuration and customization guide for FlowSwipe."
    >
      <InnerPageHero
        badge="Template guide"
        title="Instructions"
        description="Centralized architecture notes for colors, typography, routing, animations, and forms."
      />

      <section className="section-regular" style={{ paddingTop: 0 }}>
        <div className="w-layout-blockcontainer container w-container">
          <div style={{ maxWidth: "820px", margin: "0 auto", display: "grid", gap: "28px" }}>
            <div
              style={{
                background: "var(--bg-color--card-bg-dark)",
                border: "1px solid var(--bg-color--border)",
                borderRadius: "16px",
                padding: "32px",
              }}
            >
              <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Colours & Type</h2>
              <p className="mg-0">
                All colours, font sizes, spacing, and radii are centralized in{" "}
                <code>src/styles/tokens.css</code> and <code>src/styles/typography.css</code>.
                Editing a CSS custom property updates every page globally.
              </p>
            </div>

            <div
              style={{
                background: "var(--bg-color--card-bg-dark)",
                border: "1px solid var(--bg-color--border)",
                borderRadius: "16px",
                padding: "32px",
              }}
            >
              <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>
                Animations & Smooth Scroll
              </h2>
              <p className="mg-0">
                Scroll reveals use GSAP + ScrollTrigger paired with Lenis in{" "}
                <code>src/animations/useFlowSwipeAnimations.ts</code>, matching the attribute
                hooks (<code>animate-banner</code>, <code>animate</code>, <code>card=&quot;wrap&quot;</code>)
                and respecting <code>prefers-reduced-motion</code>.
              </p>
            </div>

            <div
              style={{
                background: "var(--bg-color--card-bg-dark)",
                border: "1px solid var(--bg-color--border)",
                borderRadius: "16px",
                padding: "32px",
              }}
            >
              <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>
                Configurable Routing & Forms
              </h2>
              <p className="mg-0">
                Configure <code>VITE_DEFAULT_ROUTE</code> (<code>/</code> for Template Showcase or{" "}
                <code>/home</code> for Fintech Homepage), <code>VITE_SUPPORT_EMAIL</code>, and
                authorized form endpoints in <code>.env</code> / <code>src/data/siteConfig.ts</code>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CardAlertCTA />
    </SiteLayout>
  );
}

import { CardAlertCTA } from "../components/cta/CardAlertCTA";
import { InnerPageHero } from "../components/heroes/InnerPageHero";
import { SiteLayout } from "../components/layout/SiteLayout";

export function Changelog() {
  return (
    <SiteLayout
      title="Changelog - FlowSwipe"
      description="Follow here for updates and version history."
    >
      <InnerPageHero
        badge="Changelog"
        title="Follow here For Project Updates"
        description="Track verified releases and architecture updates for the FlowSwipe application."
      />

      <section className="section-regular" style={{ paddingTop: 0 }}>
        <div className="w-layout-blockcontainer container w-container">
          <div
            style={{
              maxWidth: "820px",
              margin: "0 auto",
              background: "var(--bg-color--card-bg-dark)",
              border: "1px solid var(--bg-color--border)",
              borderRadius: "16px",
              padding: "36px",
              display: "grid",
              gap: "20px",
            }}
          >
            <div>
              <span
                style={{
                  display: "inline-block",
                  padding: "6px 14px",
                  borderRadius: "8px",
                  background: "var(--bg-color--primary)",
                  color: "#fff",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Version 1.0
              </span>
              <h2 style={{ fontSize: "26px", marginTop: "14px" }}>
                FlowSwipe Complete Reconstruction
              </h2>
              <p className="mg-0" style={{ marginTop: "8px" }}>
                Full React + TypeScript + Vite multi-page build with 159 verified local assets,
                GSAP + Lenis animations, CMS collections (Team, Careers, Blog), and automated
                visual & functional test suites.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CardAlertCTA />
    </SiteLayout>
  );
}

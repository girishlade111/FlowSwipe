import { CardAlertCTA } from "../components/cta/CardAlertCTA";
import { InnerPageHero } from "../components/heroes/InnerPageHero";
import { SiteLayout } from "../components/layout/SiteLayout";

export function Licenses() {
  return (
    <SiteLayout
      title="Licenses - FlowSwipe"
      description="All graphical assets in this template are licensed for personal and commercial use."
    >
      <InnerPageHero
        badge="Assets"
        title="Licenses"
        description="All graphical assets in this project are licensed for personal and commercial use. Verified provenance and attribution are listed below."
      />

      <section className="section-regular" style={{ paddingTop: 0 }}>
        <div className="w-layout-blockcontainer container w-container">
          <div style={{ maxWidth: "820px", margin: "0 auto", display: "grid", gap: "36px" }}>
            <div
              style={{
                background: "var(--bg-color--card-bg-dark)",
                border: "1px solid var(--bg-color--border)",
                borderRadius: "16px",
                padding: "32px",
              }}
            >
              <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Icon and Graphics</h2>
              <p>
                The iconography used in FlowSwipe is licensed for free personal and commercial use
                via{" "}
                <a
                  href="https://phosphoricons.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--bg-color--primary)", textDecoration: "underline" }}
                >
                  Phosphoricons
                </a>{" "}
                and original FlowSwipe SVG UI icons stored locally under <code>/assets/icons/</code>.
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
              <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Photography & 3D Media</h2>
              <p>
                All photography and 3D holographic artwork in FlowSwipe are licensed for free
                personal and commercial use via Lummi AI and Unsplash as stated on the official
                FlowSwipe Licenses page, and stored locally under <code>/assets/images/</code>.
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
              <h2 style={{ fontSize: "28px", marginBottom: "12px" }}>Font</h2>
              <p>
                FlowSwipe uses the free open-source Google Font{" "}
                <a
                  href="https://fonts.google.com/specimen/Onest"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--bg-color--primary)", textDecoration: "underline" }}
                >
                  Onest
                </a>{" "}
                (weights 300, 400, 500, 600, 700) under the SIL Open Font License.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CardAlertCTA />
    </SiteLayout>
  );
}

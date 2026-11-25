import { useState } from "react";
import { CardAlertCTA } from "../components/cta/CardAlertCTA";
import { InnerPageHero } from "../components/heroes/InnerPageHero";
import { SiteLayout } from "../components/layout/SiteLayout";
import { policiesData, PolicyTab } from "../data/policies";

export function Terms() {
  const [activeTabId, setActiveTabId] = useState<PolicyTab["id"]>("privacy");
  const currentTab = policiesData.find((t) => t.id === activeTabId) || policiesData[0];

  return (
    <SiteLayout
      title="Terms & Conditions - FlowSwipe"
      description="Access our privacy policy, terms and conditions, and user guidelines in one clear and simple place."
    >
      <InnerPageHero
        badge="Policy"
        title="Guidelines Overview"
        description="Access our privacy policy, terms and conditions, and user guidelines in one clear and simple place."
      />

      <section className="section-regular" style={{ paddingTop: 0 }}>
        <div className="w-layout-blockcontainer container w-container">
          <div className="policy-tab-wrapper" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div
              className="policy-tab-menu"
              role="tablist"
              aria-label="Policy documents"
              style={{
                display: "inline-flex",
                gap: "8px",
                padding: "8px",
                borderRadius: "12px",
                backgroundColor: "var(--bg-color--card-bg-dark)",
                border: "1px solid var(--bg-color--border)",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {policiesData.map((tab) => {
                const isActive = tab.id === activeTabId;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTabId(tab.id)}
                    className={`policy-tab-link ${isActive ? "is-active" : ""}`}
                    style={{
                      padding: "10px 22px",
                      borderRadius: "8px",
                      border: 0,
                      cursor: "pointer",
                      fontFamily: "inherit",
                      fontSize: "16px",
                      fontWeight: 500,
                      backgroundColor: isActive ? "#fff" : "var(--bg-color--card-bg-lite)",
                      color: isActive ? "#080808" : "#ccc",
                      transition: "background-color 0.2s, color 0.2s",
                    }}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            <div
              role="tabpanel"
              style={{
                maxWidth: "760px",
                width: "100%",
                marginTop: "60px",
              }}
            >
              {currentTab.sections.map((sec, i) => (
                <div key={`${currentTab.id}-${i}`} style={{ marginBottom: "40px" }}>
                  <h2 style={{ fontSize: "28px", marginBottom: "14px" }}>{sec.heading}</h2>
                  {sec.paragraphs.map((p, pi) => (
                    <p key={pi} style={{ marginBottom: "14px" }}>
                      {p}
                    </p>
                  ))}
                  {sec.bullets && (
                    <ul style={{ paddingLeft: "20px", margin: "12px 0", display: "grid", gap: "10px" }}>
                      {sec.bullets.map((b, bi) => (
                        <li key={bi}>
                          {b.label && <strong style={{ color: "#fff" }}>{b.label}: </strong>}
                          {b.text}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CardAlertCTA />
    </SiteLayout>
  );
}

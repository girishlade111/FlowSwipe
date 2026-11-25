import { Link, useParams } from "react-router-dom";
import { Badge } from "../components/common/Badge";
import { CardAlertCTA } from "../components/cta/CardAlertCTA";
import { SiteLayout } from "../components/layout/SiteLayout";
import { mediaAssets } from "../data/media";
import { teamMembersData } from "../data/team";
import { NotFound } from "./NotFound";

export function TeamDetail() {
  const { slug } = useParams<{ slug: string }>();
  const member = teamMembersData.find((m) => m.slug === slug);

  if (!member) return <NotFound />;

  const related = teamMembersData.filter((m) => m.slug !== member.slug);

  return (
    <SiteLayout title={member.seo.title} description={member.seo.description}>
      <section className="banner-section">
        <div className="w-layout-blockcontainer container w-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "48px",
              alignItems: "center",
            }}
          >
            <div style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid var(--bg-color--border)" }}>
              <img
                src={member.portrait}
                alt={`${member.name} - ${member.role}`}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            <div>
              <Badge label={member.location} />
              <div className="mt-15">
                <h1 className="banner-title">{member.name}</h1>
              </div>
              <p style={{ color: "var(--bg-color--primary)", fontSize: "20px", fontWeight: 500, marginTop: "8px" }}>
                {member.role}
              </p>
              <p style={{ marginTop: "16px" }}>{member.biography}</p>

              <div style={{ display: "flex", gap: "14px", marginTop: "24px", alignItems: "center" }}>
                {member.socialLinks.map((soc) => (
                  <a
                    key={soc.platform}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on ${soc.platform}`}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "8px",
                      border: "1px solid var(--bg-color--border)",
                      background: "var(--bg-color--card-bg-dark)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img src={soc.icon} alt="" style={{ width: "18px", height: "18px" }} />
                  </a>
                ))}
                <Link to="/contact" className="primary-button w-button" style={{ marginLeft: "8px" }}>
                  Contact {member.name}
                </Link>
              </div>
            </div>
          </div>

          {/* Metrics Row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "16px",
              marginTop: "60px",
            }}
          >
            {member.metrics.map((m) => (
              <div
                key={m.label}
                style={{
                  background: "var(--bg-color--card-bg-dark)",
                  border: "1px solid var(--bg-color--border)",
                  borderRadius: "16px",
                  padding: "24px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "32px", fontWeight: 600, color: "#fff" }}>{m.value}</div>
                <div className="text-x-small" style={{ marginTop: "6px" }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          {/* Expertise & Tools */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
              marginTop: "40px",
            }}
          >
            {member.expertise.map((exp) => (
              <div
                key={exp.title}
                style={{
                  background: "var(--bg-color--card-bg-dark)",
                  border: "1px solid var(--bg-color--border)",
                  borderRadius: "16px",
                  padding: "28px",
                }}
              >
                <h2 className="card-title" style={{ marginBottom: "10px" }}>
                  {exp.title}
                </h2>
                <p className="mg-0">{exp.description}</p>
              </div>
            ))}
          </div>

          <div
            style={{
              marginTop: "32px",
              background: "var(--bg-color--card-bg-dark)",
              border: "1px solid var(--bg-color--border)",
              borderRadius: "16px",
              padding: "28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img src={mediaAssets.careerIcons.location} alt="" style={{ width: "20px" }} />
              <span style={{ color: "#fff", fontWeight: 500 }}>Tools & Tech Stack</span>
            </div>
            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              {member.tools.map((t, i) => (
                <div
                  key={i}
                  className="team-tools-icon"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    border: "1px solid var(--bg-color--border)",
                    background: "var(--bg-color--card-bg-lite)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={t} alt="Tool icon" style={{ width: "22px", height: "22px" }} />
                </div>
              ))}
            </div>
          </div>

          {/* Related Team */}
          <div style={{ marginTop: "80px" }}>
            <h2 className="section-title" style={{ marginBottom: "32px" }}>
              Other Team Members
            </h2>
            <div className="w-dyn-items w-row">
              {related.map((other) => (
                <div key={other.id} className="w-col w-col-4">
                  <Link to={`/team/${other.slug}`} className="team-card" style={{ display: "block" }}>
                    <div className="team-image-wrap">
                      <img src={other.portrait} alt={other.name} className="team-image" />
                    </div>
                    <h3 className="card-title" style={{ marginTop: "14px" }}>
                      {other.name}
                    </h3>
                    <p className="mg-0">{other.role}</p>
                  </Link>
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

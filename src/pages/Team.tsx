import { Link } from "react-router-dom";
import { Badge } from "../components/common/Badge";
import { CardAlertCTA } from "../components/cta/CardAlertCTA";
import { SiteLayout } from "../components/layout/SiteLayout";
import { mediaAssets } from "../data/media";
import { teamMembersData } from "../data/team";

export function Team() {
  return (
    <SiteLayout
      title="Team - FlowSwipe"
      description="Meet our expert family members who bring knowledge, experience, and dedication to deliver exceptional results every day."
    >
      <section className="banner-section">
        <div className="w-layout-blockcontainer container w-container">
          <div animate-banner="grow" className="align-center">
            <Badge label="Team" />
            <div className="inner-container-750">
              <h1 className="banner-title">Our Expert Family Members</h1>
              <div className="inner-container-600">
                <p>
                  Meet our expert family members who bring knowledge, experience, and dedication to
                  deliver exceptional results every day.
                </p>
              </div>
            </div>
          </div>

          <div animate-banner="slide-top" className="section-spacer">
            <img
              src={mediaAssets.teamBanner}
              alt="FlowSwipe leadership team group portrait"
              className="team-banner-image"
            />
          </div>
        </div>
      </section>

      <section className="section-regular">
        <div className="w-layout-blockcontainer container w-container">
          <div card="wrap" className="section-title-area">
            <div card="item" className="section-title-wrap">
              <h2 className="section-title">Guided by Principles. Driven by Leadership</h2>
            </div>
            <div card="item" className="section-text-wrap">
              <p className="mg-0">
                Built on strong principles and unwavering values, our team combines expertise,
                creativity, and commitment to deliver remarkable solutions and results every day.
              </p>
            </div>
          </div>

          <div className="section-spacer">
            <div className="w-dyn-list">
              <div card="wrap" role="list" className="w-dyn-items w-row">
                {teamMembersData.map((member) => (
                  <div
                    key={member.id}
                    card="item"
                    role="listitem"
                    className="team-collection-item w-dyn-item w-col w-col-4"
                  >
                    <div className="team-card">
                      <div className="team-image-wrap">
                        <Link
                          to={`/team/${member.slug}`}
                          className="team-image-area w-inline-block"
                        >
                          <img
                            src={member.portrait}
                            alt={`${member.name}, ${member.role}`}
                            className="team-image"
                          />
                        </Link>
                      </div>
                      <div className="team-content-area" style={{ marginTop: "18px" }}>
                        <Link to={`/team/${member.slug}`} style={{ textDecoration: "none" }}>
                          <h3 className="card-title">{member.name}</h3>
                        </Link>
                        <p className="mg-0" style={{ marginTop: "4px" }}>
                          {member.role}
                        </p>
                        <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
                          {member.socialLinks.map((soc) => (
                            <a
                              key={soc.platform}
                              href={soc.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${member.name} on ${soc.platform}`}
                            >
                              <img src={soc.icon} alt="" style={{ width: "18px", height: "18px" }} />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CardAlertCTA />
    </SiteLayout>
  );
}

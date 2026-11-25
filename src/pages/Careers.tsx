import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "../components/common/Badge";
import { CardAlertCTA } from "../components/cta/CardAlertCTA";
import { InnerPageHero } from "../components/heroes/InnerPageHero";
import { SiteLayout } from "../components/layout/SiteLayout";
import { VideoModal } from "../components/media/VideoModal";
import { TestimonialsCarousel } from "../components/testimonials/TestimonialsCarousel";
import { JobCategory, jobsData } from "../data/jobs";
import { mediaAssets } from "../data/media";
import { siteConfig } from "../data/siteConfig";
import { careerTestimonialsData } from "../data/testimonials";

const JOB_FILTERS: Array<"All" | JobCategory> = ["All", "Technology", "Finance", "Security"];

export function Careers({ initialCategory }: { initialCategory?: JobCategory }) {
  const [activeFilter, setActiveFilter] = useState<"All" | JobCategory>(initialCategory || "All");
  const [cultureVideoOpen, setCultureVideoOpen] = useState(false);

  const visibleJobs =
    activeFilter === "All" ? jobsData : jobsData.filter((j) => j.category === activeFilter);

  return (
    <SiteLayout
      title="Careers - FlowSwipe"
      description="Become part of a dynamic, innovative team where your skills are valued, growth is encouraged, and impact matters."
    >
      <InnerPageHero
        badge="Careers"
        title="Join Our Fastest Growing Team"
        description="Become part of a dynamic, innovative team where your skills are valued, growth is encouraged, and impact matters."
      />

      {/* Culture Video Card */}
      <section className="section-regular" style={{ paddingTop: 0 }}>
        <div className="w-layout-blockcontainer container w-container">
          <div animate-banner="slide-top" className="culture-area">
            <div className="culture-image-area" style={{ position: "relative" }}>
              <img
                src={mediaAssets.micImg}
                alt="Transparent iridescent holographic microphone"
                className="culture-image"
              />
              <button
                type="button"
                aria-label="Play team culture video"
                onClick={() => setCultureVideoOpen(true)}
                style={{
                  position: "absolute",
                  inset: "50% auto auto 50%",
                  transform: "translate(-50%, -50%)",
                  width: "68px",
                  height: "68px",
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.25)",
                  background: "rgba(15, 15, 15, 0.72)",
                  backdropFilter: "blur(6px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <img
                  src={mediaAssets.playIconLarge}
                  alt=""
                  aria-hidden="true"
                  style={{ width: "22px", height: "22px" }}
                />
              </button>
            </div>

            <div className="culture-content-area">
              <div>
                <Badge label="Culture" />
                <div className="mt-15">
                  <h2 className="section-title">Listen to what our team says on culture</h2>
                </div>
                <div className="mt-15">
                  <p>
                    Supportive teammates, clear vision, and real opportunities make this a place
                    I’m proud to work every single day.
                  </p>
                </div>
              </div>
              <div className="culture-button-wrap">
                <a href="#career" className="primary-button w-button">
                  View Jobs
                </a>
                <Link
                  to="/team"
                  className="primary-button w-variant-9b74692f-4e58-b2f0-23be-d1678f1de4d7 w-button"
                >
                  Our Team Members
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bento */}
      <section className="section-regular">
        <div className="w-layout-blockcontainer container w-container">
          <div card="wrap" className="section-title-area">
            <div card="item" className="section-title-wrap">
              <h2 className="section-title">Thrive with our culture, perks, and cool lifestyle.</h2>
            </div>
            <div card="item" className="section-text-wrap">
              <p className="mg-0">
                Be part of a supportive environment that values collaboration, offers meaningful
                perks, and promotes a balanced lifestyle for lasting growth and success.
              </p>
            </div>
          </div>

          <div className="section-spacer">
            <div className="perks-area">
              <div animate="slide-top" className="perks-wrap">
                <div className="perks-card">
                  <div className="perks-text-area">
                    <h3 className="card-title">90% Remote Opportunity</h3>
                    <div className="mt-10">
                      <p>
                        Enjoy remote flexibility with the freedom to work from anywhere, collaborate
                        seamlessly with your team, and maintain a healthy work-life balance.
                      </p>
                    </div>
                  </div>
                  <div className="perks-image-wrap">
                    <img
                      src={mediaAssets.houseImg}
                      alt="Transparent glass house sculpture with iridescent light spectrum"
                      className="perks-image"
                    />
                  </div>
                </div>
              </div>

              <div className="perks-wrap">
                <div animate="slide-top" className="perks-card">
                  <div className="perks-image-wrap second">
                    <img
                      src={mediaAssets.careerLightningImg}
                      alt="Iridescent holographic lightning bolt"
                      className="perks-image"
                    />
                  </div>
                  <div className="perks-text-area">
                    <h3 className="card-title">Career Growth</h3>
                    <div className="mt-10">
                      <p className="mg-0">
                        Unlock continuous learning, mentorship, and clear advancement paths designed
                        to help you grow faster and achieve your professional goals.
                      </p>
                    </div>
                  </div>
                </div>

                <div card="wrap" className="perks-card-wrap">
                  <div card="item" className="perks-card">
                    <div>
                      <h3 className="card-title">Flexible hours</h3>
                      <div className="mt-10">
                        <p className="mg-0">
                          Work on your schedule with flexible daily working hours.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div card="item" className="perks-card">
                    <div>
                      <h3 className="card-title">Medical Benefits</h3>
                      <div className="mt-10">
                        <p className="mg-0">
                          Comprehensive health coverage for you and your family.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsCarousel heading="From the team’s desk" slides={careerTestimonialsData} />

      {/* Open Positions */}
      <section id="career" className="section-regular">
        <div className="w-layout-blockcontainer container w-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
            <h2 className="section-title">Open positions</h2>
            <div className="card-listing-tab-menu" role="tablist" aria-label="Filter open positions" style={{ marginBottom: 0 }}>
              {JOB_FILTERS.map((cat) => {
                const isActive = activeFilter === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveFilter(cat)}
                    className={`card-listing-tab-link w-inline-block ${isActive ? "is-active" : ""}`}
                    style={{ border: 0, cursor: "pointer", fontFamily: "inherit", fontSize: "16px" }}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="section-spacer">
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items w-row">
                {visibleJobs.map((job) => (
                  <div key={job.id} role="listitem" className="career-collection-item w-dyn-item w-col w-col-4">
                    <div className="career-card">
                      <div className="career-tag">
                        <img src={mediaAssets.careerIcons.clock} alt="" aria-hidden="true" style={{ width: "16px" }} />
                        <div>{job.employmentType}</div>
                      </div>
                      <h3 className="card-title">{job.title}</h3>
                      <p className="mg-0">{job.summary}</p>
                      <div className="career-meta-wrap" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                        <div className="career-tag">
                          <img src={mediaAssets.careerIcons.bag} alt="" aria-hidden="true" style={{ width: "16px" }} />
                          <div>{job.experience}</div>
                        </div>
                        <div className="career-tag">
                          <img src={mediaAssets.careerIcons.location} alt="" aria-hidden="true" style={{ width: "16px" }} />
                          <div>{job.location}</div>
                        </div>
                      </div>
                      <div className="mt-15">
                        <Link to={`/careers/${job.slug}`} className="primary-button w-button">
                          Apply
                        </Link>
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

      <VideoModal
        isOpen={cultureVideoOpen}
        videoUrl={siteConfig.youtubeVideoUrl}
        title="FlowSwipe Team Culture Video"
        onClose={() => setCultureVideoOpen(false)}
      />
    </SiteLayout>
  );
}

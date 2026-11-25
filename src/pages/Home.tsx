import { Link } from "react-router-dom";
import { Badge } from "../components/common/Badge";
import { CardAlertCTA } from "../components/cta/CardAlertCTA";
import { DigitalIntegration } from "../components/features/DigitalIntegration";
import { GlobalPaymentsSection } from "../components/features/GlobalPaymentsSection";
import { SecurityBento } from "../components/features/SecurityBento";
import { SiteLayout } from "../components/layout/SiteLayout";
import { TestimonialsCarousel } from "../components/testimonials/TestimonialsCarousel";
import { articlesData } from "../data/articles";
import { mediaAssets } from "../data/media";
import { homeTestimonialsData } from "../data/testimonials";

const HERO_PILLS = [
  { label: "Titanium Card", pos: "first", rightLine: false },
  { label: "NFC - Access", pos: "third", rightLine: false },
  { label: "Chip Intelligence", pos: "second", rightLine: true },
  { label: "Anti - Theft", pos: "fourth", rightLine: true },
];

const CARD_STACK_CLASSES = [
  "",
  "first",
  "second",
  "third",
  "fourth",
  "fifth",
  "sixth",
  "seventh",
  "eighth",
  "ninth",
  "tenth",
  "eleventh",
  "twelfth",
  "thirteenth",
  "fourteenth",
  "fifteenth",
  "sixteenth",
  "seventeenth",
  "eighteenth",
  "ninteenth",
];

export function Home() {
  const latestBlogs = articlesData.slice(0, 3);

  return (
    <SiteLayout
      title="FlowSwipe - Smart Card Payment Platform"
      description="Manage all your purchases securely using a single smart card that streamlines payments and keeps spending simple."
    >
      {/* Home Hero & Sticky Card Sequence */}
      <div className="home-banner-area">
        <section className="banner-section home">
          <div className="w-layout-blockcontainer container w-container">
            <div animate-banner="grow" className="align-center">
              <Badge label="Control Every Transaction" variant="home" />
              <div animate-banner="grow" className="mt-10">
                <div className="inner-container-750">
                  <h1 className="banner-title">Simplify Payments With One Smart Card</h1>
                  <div className="inner-container-600">
                    <p>
                      Manage all your purchases securely using a single smart card that streamlines
                      payments and keeps spending simple.
                    </p>
                  </div>
                </div>
              </div>
              <div animate-banner="grow" className="mt-30">
                <Link to="/contact" className="primary-button w-button">
                  Get a Free Card
                </Link>
              </div>
            </div>

            <div animate-banner="slide-top" className="home-banner-animation-area">
              <div className="home-banner-card-wrap">
                <img src={mediaAssets.cardOrangeFront} alt="FlowSwipe orange smart payment card" />
              </div>
              <div className="home-banner-card-wrap cover">
                <img src={mediaAssets.cardCover} alt="FlowSwipe smart card matte dark reverse side" />
              </div>

              <div animate="grow" className="home-banner-point-area">
                <div className="home-banner-point-image-area">
                  <img src={mediaAssets.arcSvg} alt="" aria-hidden="true" />
                </div>
                {HERO_PILLS.map((pill) => (
                  <div key={pill.label} className={`home-point-area ${pill.pos}`}>
                    {pill.rightLine && (
                      <div className="home-point-line right">
                        <div className="home-point-dot" />
                      </div>
                    )}
                    <div className="home-banner-point">
                      {pill.rightLine && (
                        <div className="subtitle-icon-wrap">
                          <img src={mediaAssets.subtitleStar} alt="" aria-hidden="true" />
                        </div>
                      )}
                      <div>{pill.label}</div>
                      {!pill.rightLine && (
                        <div className="subtitle-icon-wrap">
                          <img src={mediaAssets.subtitleStar} alt="" aria-hidden="true" />
                        </div>
                      )}
                    </div>
                    {!pill.rightLine && (
                      <div className="home-point-line">
                        <div className="home-point-dot" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Partner Logo Marquee */}
      <section className="section-regular" style={{ paddingTop: "60px", paddingBottom: "40px" }}>
        <div className="w-layout-blockcontainer container w-container">
          <div className="fs-marquee-pause" style={{ overflow: "hidden" }}>
            <div className="fs-marquee-track fs-marquee-track--slow" style={{ gap: "60px", alignItems: "center" }}>
              {[...mediaAssets.partnerLogos, ...mediaAssets.partnerLogos, ...mediaAssets.partnerLogos].map(
                (logo, idx) => (
                  <img
                    key={idx}
                    src={logo}
                    alt={idx < mediaAssets.partnerLogos.length ? "Partner brand mark" : ""}
                    aria-hidden={idx >= mediaAssets.partnerLogos.length}
                    style={{ height: "32px", width: "auto", opacity: 0.72 }}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Global Acceptance with Smart Safety (Home 4-card variant) */}
      <SecurityBento variant="home" />

      {/* 3D Card Stack Section */}
      <div className="home-card-section">
        <div className="home-card-container">
          <div className="home-card-area">
            <section className="section-regular">
              <div className="w-layout-blockcontainer container w-container">
                <div animate="slide-top" className="section-title-area">
                  <div className="stack-section-title-wrap">
                    <h2 className="section-title">This isn’t just another card, it’s the future.</h2>
                    <div className="mt-10">
                      <p className="mg-0">
                        More than a card, it’s a future-ready tool that makes payments simple,
                        secure, and effortless.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-stack-area" aria-hidden="true">
                {CARD_STACK_CLASSES.map((cls, i) => (
                  <div key={i} className={`card-stack ${cls}`.trim()}>
                    {cls === "eighth" && (
                      <img
                        src={mediaAssets.cardOrangeFront}
                        alt=""
                        className="card-stack-image"
                      />
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Digital Integration */}
      <DigitalIntegration />

      {/* Global Payments */}
      <GlobalPaymentsSection />

      {/* Testimonials */}
      <TestimonialsCarousel
        heading="Voices that truly define our greatness"
        slides={homeTestimonialsData}
      />

      {/* Pre Book Your Card Today */}
      <section className="credit-card-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="credit-card-area">
            <div className="credit-card-content-area">
              <div animate="slide-left">
                <h2 className="section-title">Pre book your card today</h2>
                <div className="mt-10">
                  <p>
                    Reserve your smart card now and enjoy fast, secure global payments with seamless
                    digital integration.
                  </p>
                </div>
              </div>

              <div animate="slide-left">
                <div className="credit-card-list-item">
                  <div className="credit-card-list-icon">
                    <img src={mediaAssets.subtitleStar} alt="" className="icon" aria-hidden="true" />
                  </div>
                  <div>13 Years</div>
                </div>
                <div className="credit-card-list-item">
                  <div className="credit-card-list-icon">
                    <img src={mediaAssets.subtitleStar} alt="" className="icon" aria-hidden="true" />
                  </div>
                  <div>15+ Curated Deals</div>
                </div>
              </div>

              <div animate="slide-left">
                <Link to="/contact" className="primary-button w-button">
                  Book Your Card
                </Link>
              </div>
            </div>

            <div className="credit-card-image-area">
              <div className="credit-card-image-wrap">
                <img
                  animate="grow"
                  className="credit-card-hand-image"
                  src={mediaAssets.handImage}
                  alt="Transparent holographic glass hand sculpture"
                />
                <div className="credit-card-card-image">
                  <img src={mediaAssets.cardOrangeFront} alt="FlowSwipe orange smart card" />
                </div>
                <div animate="grow" className="credit-card-icon-image" aria-hidden="true">
                  <img src={mediaAssets.handBgIcons} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Blogs That Inspire Ideas And Innovation */}
      <section className="section-regular">
        <div className="w-layout-blockcontainer container w-container">
          <div card="wrap" className="section-title-area">
            <div card="item" className="section-title-wrap">
              <h2 className="section-title">Our blogs that inspire ideas and innovation</h2>
            </div>
            <div card="item" className="section-text-wrap">
              <Link to="/blog" className="primary-button w-button">
                Browse All Blogs
              </Link>
            </div>
          </div>

          <div className="section-spacer">
            <div className="w-dyn-list">
              <div role="list" className="w-dyn-items w-row">
                {latestBlogs.map((article) => (
                  <div
                    key={article.id}
                    role="listitem"
                    className="blog-collection-item w-dyn-item w-col w-col-4"
                  >
                    <article className="blog-card">
                      <div className="blog-image-area">
                        <Link to={`/blog/${article.slug}`} className="blog-image-wrap w-inline-block">
                          <img
                            src={article.thumbnailImage}
                            alt={article.title}
                            className="blog-image"
                          />
                        </Link>
                        <Link
                          to={`/blog-category/${article.category.toLowerCase()}`}
                          className="blog-category"
                        >
                          {article.category}
                        </Link>
                      </div>
                      <div className="blog-content-area">
                        <div className="blog-date-wrap">
                          <span>{article.publicationDate}</span>
                        </div>
                        <Link to={`/blog/${article.slug}`} className="card-title link">
                          {article.title}
                        </Link>
                        <Link to={`/blog/${article.slug}`} className="blog-link w-inline-block">
                          <span>Read more</span>
                          <img src={mediaAssets.arrowIcon} alt="" className="icon" aria-hidden="true" />
                        </Link>
                      </div>
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CardAlertCTA />

      {/* Bottom Orange & Dark Card Reveal */}
      <div className="home-bottom-animation-area" aria-hidden="true">
        <div className="home-bottom-animation-image-area">
          <img
            src={mediaAssets.curveDottedLines}
            alt=""
            className="home-bottom-animation-image"
          />
        </div>
        <div className="home-bottom-animation-card-image">
          <div className="home-bottom-animation-card-wrap">
            <img src={mediaAssets.cardOrangeFront} alt="" />
          </div>
          <div className="home-bottom-animation-card-cover-wrap">
            <img src={mediaAssets.cardCoverBottom} alt="" />
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}

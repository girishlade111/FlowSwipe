import { Link } from "react-router-dom";
import { CompanyStatistics } from "../components/about/CompanyStatistics";
import { GlobalPresence } from "../components/about/GlobalPresence";
import { ValuesCarousel } from "../components/about/ValuesCarousel";
import { CardAlertCTA } from "../components/cta/CardAlertCTA";
import { FAQSection } from "../components/faq/FAQSection";
import { InnerPageHero } from "../components/heroes/InnerPageHero";
import { SiteLayout } from "../components/layout/SiteLayout";
import { mediaAssets } from "../data/media";

export function About() {
  return (
    <SiteLayout
      title="About Us - FlowSwipe"
      description="Founded with a vision to simplify payments, our company delivers secure and seamless global solutions."
    >
      <InnerPageHero
        badge="About Us"
        title="The Story Behind Our Company"
        description="Founded with a vision to simplify payments, our company delivers secure and seamless global solutions."
      />

      <section className="about-section">
        <div className="w-layout-blockcontainer container w-container">
          <div animate-banner="slide-top" className="about-area">
            <div className="about-image-area">
              <div className="about-image-wrap">
                <img
                  src={mediaAssets.rocketImg}
                  alt="Iridescent holographic rocket sculpture angled diagonally upward"
                  className="about-image"
                />
              </div>
              <div className="about-dot-image" aria-hidden="true">
                <img src={mediaAssets.dottedPattern} alt="" />
              </div>
            </div>

            <div className="about-content-area">
              <div>
                <h2 className="section-title">Shaping tomorrow with purpose, with elegance</h2>
                <div className="mt-10">
                  <p>
                    Creating a better future with purpose, style, and thoughtful, elegant solutions.
                  </p>
                </div>
                <div className="mt-30">
                  <Link to="/careers" className="primary-button w-button">
                    Join Our Team
                  </Link>
                </div>
              </div>

              <CompanyStatistics />
            </div>
          </div>
        </div>
      </section>

      <GlobalPresence />
      <ValuesCarousel />
      <FAQSection />
      <CardAlertCTA />
    </SiteLayout>
  );
}

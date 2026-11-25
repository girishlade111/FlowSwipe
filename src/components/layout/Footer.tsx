import { Link, useLocation } from "react-router-dom";
import { mediaAssets } from "../../data/media";
import { siteConfig } from "../../data/siteConfig";
import { FooterMarquee } from "./FooterMarquee";

const PREVIEW_LINKS = [
  { label: "Home", to: "/home" },
  { label: "About Us", to: "/about-us" },
  { label: "Team", to: "/team" },
  { label: "Team Single", to: "/team/jacob" },
  { label: "Blog", to: "/blog" },
  {
    label: "Blog Single",
    to: "/blog/smart-collector-tips-for-global-currency-coins-timeless-diverse-and-valuable",
  },
  { label: "Features", to: "/features" },
  { label: "Careers", to: "/careers" },
  { label: "Career Single", to: "/careers/principal-lead-fintech-product-manager" },
  { label: "Contact", to: "/contact" },
  { label: "Terms", to: "/terms-conditions" },
];

const UTILITY_LINKS = [
  { label: "Style Guide", to: "/style-guide" },
  { label: "Licenses", to: "/licenses" },
  { label: "Changelog", to: "/changelog" },
  { label: "Instructions", to: "/instructions" },
  { label: "Protected", to: "/401" },
  { label: "Not Found", to: "/404" },
];

export function Footer() {
  const { pathname } = useLocation();

  return (
    <footer className="footer">
      <FooterMarquee />

      <section className="footer-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="footer-top-area">
            <div className="footer-logo-area">
              <Link to="/home" className="footer-logo-wrap w-inline-block">
                <img
                  src={mediaAssets.brandLogo}
                  alt="FlowSwipe"
                  style={{ width: "260px", maxWidth: "100%", height: "auto" }}
                />
              </Link>
              <div>
                <p>{siteConfig.tagline}</p>
              </div>
            </div>

            <div className="footer-link-area">
              <div>
                <h2 className="footer-link-title">Preview</h2>
                <div className="footer-link-wrap">
                  {PREVIEW_LINKS.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      className={`footer-link ${pathname === item.to ? "w--current" : ""}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="footer-link-title">Utilities</h2>
                <div>
                  {UTILITY_LINKS.map((item) => (
                    <Link
                      key={item.label}
                      to={item.to}
                      className={`footer-link ${pathname === item.to ? "w--current" : ""}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom-wrap">
            <p className="copyright-text">
              {siteConfig.copyright} |{" "}
              <a
                href="https://www.victorflow.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="copyright-link"
              >
                VictorFlow
              </a>{" "}
              Design System
            </p>
            <div className="footer-social-wrap">
              {siteConfig.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link w-inline-block"
                  aria-label={social.name}
                >
                  <img src={social.icon} alt={social.name} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="footer-bg-image left" aria-hidden="true">
        <img src={mediaAssets.cylinderBg} alt="" />
      </div>
      <div className="footer-bg-image right" aria-hidden="true">
        <img src={mediaAssets.cylinderBg} alt="" />
      </div>
    </footer>
  );
}

import { Link } from "react-router-dom";
import { SiteLayout } from "../components/layout/SiteLayout";

export function NotFound() {
  return (
    <SiteLayout
      title="Not Found - FlowSwipe"
      description="The page you are looking for does not exist."
    >
      <section className="banner-section" style={{ minHeight: "65vh", display: "flex", alignItems: "center" }}>
        <div className="w-layout-blockcontainer container w-container">
          <div animate-banner="grow" className="align-center">
            <div
              style={{
                fontSize: "clamp(72px, 14vw, 140px)",
                fontWeight: 700,
                lineHeight: 1,
                color: "var(--bg-color--primary)",
                marginBottom: "16px",
              }}
            >
              404
            </div>
            <h1 className="banner-title">Oops!! Page Not Found</h1>
            <div className="inner-container-600" style={{ marginTop: "12px" }}>
              <p>
                The page you are looking for doesn’t exist. Please try searching for some other
                page, or return to the website’s homepage to find what you’re looking for.
              </p>
            </div>
            <div className="mt-30">
              <Link to="/home" className="primary-button w-button">
                Back To Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

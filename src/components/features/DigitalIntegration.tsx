import { Link } from "react-router-dom";
import { mediaAssets } from "../../data/media";
import { siteConfig } from "../../data/siteConfig";
import { Badge } from "../common/Badge";

export function DigitalIntegration() {
  return (
    <section className="section-regular">
      <div className="w-layout-blockcontainer container w-container">
        <div card="wrap" className="section-title-area">
          <div card="item" className="section-title-wrap">
            <h2 className="section-title">Digital integration with one smart app</h2>
          </div>
          <div card="item" className="section-text-wrap">
            <Link to={siteConfig.appDownloadUrl} className="primary-button w-button">
              Download App
            </Link>
          </div>
        </div>

        <div className="section-spacer">
          <div className="integration-area">
            <div animate="slide-top" className="integration-wrap small">
              <div className="integration-card first">
                <div className="integration-card-title-wrap">
                  <div>
                    <h3 className="card-title">Wallet Integration</h3>
                  </div>
                  <div className="mt-10">
                    <p>Connect your card to wallet apps to enjoy smooth, easy payments.</p>
                  </div>
                  <div className="integration-small-image-wrap">
                    <img
                      src={mediaAssets.walletDetailsImg}
                      alt="Wallet balance illustration showing Hello Laura and $40,500.80 balance"
                    />
                  </div>
                </div>
                <div className="integration-image-wrap first">
                  <img
                    src={mediaAssets.walletHolderImg}
                    alt="Transparent holographic wallet holding bright orange FlowSwipe card"
                    className="integration-image"
                  />
                  <div className="integration-image-bg" aria-hidden="true">
                    <img src={mediaAssets.integrationDotBg} alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div card="wrap" className="integration-wrap">
              <div card="item" className="integration-card second">
                <div className="integration-title-wrap">
                  <div className="integration-title-area">
                    <h3 className="card-title">Real Time Notifications</h3>
                    <p>Receive fast alerts that keep you aware of every activity.</p>
                  </div>
                  <div className="integration-tag-area">
                    <Badge label="Quick Alerts" />
                    <Badge label="Instant Updates" />
                  </div>
                </div>
                <div className="integration-image-wrap second">
                  <img
                    src={mediaAssets.notificationsImg}
                    alt="Alert Box notification interface with holographic bell"
                    className="integration-image"
                  />
                </div>
              </div>

              <div card="item" className="integration-card third">
                <div className="integration-title-area">
                  <h3 className="card-title">Advanced Analytics Dashboard</h3>
                  <p>
                    View detailed insights and simple charts that help you stay in control of your
                    spending every day.
                  </p>
                </div>
                <div className="integration-image-wrap third">
                  <img
                    src={mediaAssets.analyticsDashboardImg}
                    alt="FlowSwipe Payment Overview analytics dashboard mockup"
                    className="integration-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

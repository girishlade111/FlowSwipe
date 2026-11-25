import { Link } from "react-router-dom";
import { globalPaymentFeatures } from "../../data/features";
import { mediaAssets } from "../../data/media";

export function GlobalPaymentsSection() {
  return (
    <section className="section-regular">
      <div className="w-layout-blockcontainer container w-container">
        <div className="payment-area">
          <div className="payment-content-area">
            <div animate="slide-top">
              <h2 className="section-title">Manage global payments with ease</h2>
              <div className="mt-10">
                <p>
                  Move money around the world easily and effortlessly with a setup that keeps your
                  transactions quick and secure.
                </p>
              </div>
            </div>

            <div animate="slide-top" className="payment-point-area">
              {globalPaymentFeatures.map((feat, idx) => (
                <div key={feat.id}>
                  {idx > 0 && <div className="payment-point-line" />}
                  <div className="payment-point-card">
                    <div>
                      <h3 className="payment-card-title">{feat.title}</h3>
                      <p className="mg-0">{feat.description}</p>
                    </div>
                    <div className="payment-point-icon-wrap">
                      <img src={feat.icon} alt="" className="icon" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div animate="slide-top">
              <Link to="/contact" className="primary-button w-button">
                Get Your Card
              </Link>
            </div>
          </div>

          <div animate="grow" className="payment-image-area">
            <div className="payment-image-wrap">
              <img
                src={mediaAssets.paymentCardHolder}
                alt="Orange FlowSwipe smart payment card inserted into transparent holographic glass holder"
                className="payment-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

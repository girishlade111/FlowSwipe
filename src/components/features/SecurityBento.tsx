import { Link } from "react-router-dom";
import { mediaAssets } from "../../data/media";
import { Badge } from "../common/Badge";

interface SecurityBentoProps {
  variant?: "home" | "features";
}

export function SecurityBento({ variant = "features" }: SecurityBentoProps) {
  return (
    <section className="section-regular">
      <div className="w-layout-blockcontainer container w-container">
        <div card="wrap" className="section-title-area">
          <div card="item" className="section-title-wrap">
            <h2 className="section-title">Global Acceptance with Smart Safety</h2>
          </div>
          <div card="item" className="section-text-wrap">
            <p className="mg-0">
              Enjoy seamless payments anywhere with built-in smart safety that protects every tap.
              Move with confidence, access global networks, and keep your transactions simple and
              secure.
            </p>
          </div>
        </div>

        <div className="section-spacer">
          <div className="features-card-area">
            {/* Row 1 */}
            <div card="wrap" className="features-card-wrap">
              {variant === "home" ? (
                <>
                  <div card="item" className="features-card">
                    <div className="features-inner-card space-large">
                      <Badge label="Security" />
                      <div>
                        <h3 className="card-title">Tamper Resistance</h3>
                        <div className="mt-10">
                          <p className="mg-0">
                            Built to prevent interference and keep your card secure at all times.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div card="item" className="features-card large">
                    <div className="features-inner-card">
                      <Badge label="Quality" />
                      <div>
                        <h3 className="card-title">World-Class Microchips</h3>
                        <div className="mt-10">
                          <p className="mg-0">
                            High-grade chips power smooth transactions with strong protection.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="features-image-wrap second">
                      <img
                        src={mediaAssets.microchipsImg}
                        alt="Dark holographic microchip cylinder with interface icons"
                        className="features-image bottom"
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div card="item" className="features-card large">
                    <div className="features-inner-card">
                      <Badge label="Quality" />
                      <div>
                        <h3 className="card-title">World-Class Microchips</h3>
                        <div className="mt-10">
                          <p className="mg-0">
                            High-grade chips power smooth transactions with strong protection.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="features-image-wrap second">
                      <img
                        src={mediaAssets.microchipsImg}
                        alt="Dark holographic microchip cylinder with interface icons"
                        className="features-image bottom"
                      />
                    </div>
                  </div>
                  <div card="item" className="features-card">
                    <div className="features-inner-card space-large">
                      <Badge label="Security" />
                      <div>
                        <h3 className="card-title">Tamper Resistance</h3>
                        <div className="mt-10">
                          <p className="mg-0">
                            Built to prevent interference and keep your card secure at all times.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="features-image-wrap lock">
                      <img
                        src={mediaAssets.padlockImg}
                        alt="Transparent holographic padlock"
                        className="features-image"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Row 2 (Only on Features page: Eco-Friendly Materials + Next-Gen Technology) */}
            {variant === "features" && (
              <div card="wrap" className="features-card-wrap">
                <div card="item" className="features-card small">
                  <div className="features-inner-card space-large">
                    <Badge label="Range" />
                    <div>
                      <h3 className="card-title">Eco-Friendly Materials</h3>
                      <div className="mt-10">
                        <p className="mg-0">
                          Made from sustainable materials, protecting the environment.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="features-image-wrap case">
                    <img
                      src={mediaAssets.ecoFrameImg}
                      alt="Transparent holographic rounded corner frame"
                      className="features-image case"
                    />
                  </div>
                </div>

                <div card="item" className="features-card large">
                  <div className="features-inner-card">
                    <Badge label="Ease" />
                    <div>
                      <h3 className="card-title">Next-Gen Technology</h3>
                      <div className="mt-10">
                        <p className="mg-0">
                          Modern solutions made to deliver quick, smart, and efficient results.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="features-image-wrap third">
                    <img
                      src={mediaAssets.coinsImg}
                      alt="Floating iridescent holographic coins"
                      className="features-image"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Row 3 */}
            <div card="wrap" className="features-card-wrap">
              <div card="item" className="features-card large">
                <div className="features-inner-card">
                  <Badge label="Ease" />
                  <div>
                    <h3 className="card-title">Smart Digital Integration</h3>
                    <div className="mt-10">
                      <p className="mg-0">
                        Smart systems sync your payments and data for easy, secure use.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="features-image-wrap third">
                  <img
                    src={mediaAssets.lightningIntegrationImg}
                    alt="Iridescent holographic lightning bolt with vertical interface controls"
                    className="features-image"
                  />
                </div>
              </div>

              <div card="item" className="features-card">
                <div className="features-inner-card space-reduce">
                  <Badge label="Range" />
                  <div>
                    <h3 className="card-title">Global Acceptance</h3>
                    <div className="mt-10">
                      <p className="mg-0">
                        Accepted globally, your card works easily in stores, apps, and ATMs.
                      </p>
                    </div>
                  </div>
                  {variant === "home" ? (
                    <Link to="/contact" className="primary-button w-button">
                      Book A Call
                    </Link>
                  ) : (
                    <div className="features-image-wrap sixth">
                      <img
                        src={mediaAssets.globalAcceptanceCard}
                        alt="Orange FlowSwipe payment card cropped inside Global Acceptance panel"
                        className="features-image"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

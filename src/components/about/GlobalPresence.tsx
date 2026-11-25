import { useState } from "react";
import { Link } from "react-router-dom";
import { globalPresenceLocations } from "../../data/features";
import { mediaAssets } from "../../data/media";

export function GlobalPresence() {
  const [activeOfficeId, setActiveOfficeId] = useState<string | null>(null);

  return (
    <div className="overflow-hide">
      <section className="section-regular">
        <div className="w-layout-blockcontainer container w-container">
          <div animate="slide-top" className="align-center">
            <h2 className="section-title">Our global presence</h2>
            <div className="inner-container-500">
              <div className="mt-15">
                <p>
                  Connecting markets worldwide, we provide seamless solutions across regions with
                  trusted expertise.
                </p>
              </div>
            </div>
          </div>

          <div className="section-spacer">
            <div animate="slide-top" className="globe-image-area">
              <img
                src={mediaAssets.globeImg}
                alt="Translucent optical-glass global presence globe with colorful light refraction"
                className="globe-image"
              />

              {globalPresenceLocations.map((loc) => {
                const isActive = activeOfficeId === loc.id;
                return (
                  <div
                    key={loc.id}
                    className={`globe-location-wrap ${loc.classModifier} ${
                      isActive ? "is-active" : ""
                    }`}
                  >
                    <button
                      type="button"
                      aria-label={`View ${loc.title} office details`}
                      aria-expanded={isActive}
                      onClick={() => setActiveOfficeId(isActive ? null : loc.id)}
                      style={{
                        background: "transparent",
                        border: 0,
                        padding: 0,
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src={mediaAssets.locationPin}
                        alt=""
                        className="globe-location-icon"
                        aria-hidden="true"
                      />
                    </button>
                    <div
                      className={`globe-card-wrap ${
                        loc.classModifier === "canada" || loc.classModifier === "chad"
                          ? "w-variant-3e402649-0a59-17a9-1f49-58f6c60193ce"
                          : ""
                      }`}
                    >
                      <div className="globe-card-image-wrap">
                        <img src={loc.badgeImage} alt={loc.badgeAlt} />
                      </div>
                      <div className="w-layout-vflex globe-card-content-wrap">
                        <h3 className="globe-card-title">{loc.title}</h3>
                        <p className="text-x-small">{loc.description}</p>
                        <Link to="/contact" className="globe-card-link w-inline-block">
                          <div>Contact Office</div>
                          <div className="button-icon-wrap">
                            <img src={mediaAssets.arrowSmallIcon} alt="" aria-hidden="true" />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

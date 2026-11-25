import { useState } from "react";
import { mediaAssets } from "../../data/media";
import { coreValuesData } from "../../data/values";
import { Badge } from "../common/Badge";

export function ValuesCarousel() {
  const [index, setIndex] = useState(0);
  const maxIndex = coreValuesData.length - 1;

  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));

  return (
    <section className="section-regular">
      <div className="w-layout-blockcontainer container w-container">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: "24px",
            flexWrap: "wrap",
          }}
        >
          <div animate="slide-top" className="inner-container-550">
            <h2 className="section-title" style={{ textTransform: "uppercase" }}>
              Guided by principles, driven by core values
            </h2>
          </div>

          <div style={{ display: "flex", gap: "12px" }}>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous value"
              className="testimonial-slider-arrow"
              style={{
                position: "relative",
                inset: "auto",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1px solid var(--bg-color--border)",
                background: "var(--bg-color--card-bg-dark)",
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ‹
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next value"
              className="testimonial-slider-arrow right"
              style={{
                position: "relative",
                inset: "auto",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1px solid var(--bg-color--border)",
                background: "var(--bg-color--card-bg-dark)",
                color: "#fff",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ›
            </button>
          </div>
        </div>

        <div animate="slide-top" className="section-spacer">
          <div className="fs-carousel-viewport">
            <div
              className="fs-carousel-track"
              style={{
                transform: `translate3d(-${index * 42}%, 0, 0)`,
              }}
            >
              {coreValuesData.map((val) => (
                <div
                  key={val.id}
                  style={{ flex: "0 0 min(460px, 85vw)" }}
                >
                  <div className="mission-card">
                    <div className="w-layout-vflex mission-content-area">
                      <Badge label={val.badge} />
                    </div>
                    <div className="mission-content-area">
                      <h3 className="mission-card-title">{val.title}</h3>
                      <p>{val.description}</p>
                    </div>
                    <div className="mission-image-wrap">
                      <img src={val.image} alt={val.imageAlt} />
                    </div>
                    <div className="mission-dot-image" aria-hidden="true">
                      <img src={mediaAssets.dottedPattern} alt="" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { mediaAssets } from "../../data/media";
import { TestimonialSlide } from "../../data/testimonials";
import { Badge } from "../common/Badge";
import { VideoModal } from "../media/VideoModal";

interface TestimonialsCarouselProps {
  heading: string;
  slides: TestimonialSlide[];
}

export function TestimonialsCarousel({ heading, slides }: TestimonialsCarouselProps) {
  const [index, setIndex] = useState(0);
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);
  const maxIndex = Math.max(0, slides.length - 2);

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
              {heading}
            </h2>
          </div>

          <div style={{ display: "flex", gap: "12px" }}>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              style={{
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
              aria-label="Next testimonial"
              style={{
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

        <div className="section-spacer">
          <div className="fs-carousel-viewport">
            <div
              className="fs-carousel-track"
              style={{
                transform: `translate3d(-${index * 36}%, 0, 0)`,
              }}
            >
              {slides.map((slide) => (
                <div
                  key={slide.id}
                  className="testimonial-card"
                  style={{ flex: "0 0 min(460px, 86vw)" }}
                >
                  <div className="testimonial-top-wrap">
                    <div className="testimonial-author-image-wrap">
                      <img src={slide.avatar} alt={slide.avatarAlt} className="testimonial-author-image" />
                    </div>
                    <Badge label={slide.badge} />
                  </div>

                  {slide.type === "text" ? (
                    <div className="testimonial-content-area">
                      <div>
                        <img
                          src={mediaAssets.quoteIcon}
                          alt=""
                          aria-hidden="true"
                          style={{ width: "26px", marginBottom: "18px" }}
                        />
                        <h3 className="card-title">{slide.quote}</h3>
                      </div>
                      <div style={{ marginTop: "32px" }}>
                        <h4 style={{ fontSize: "18px", color: "#fff", margin: 0 }}>{slide.name}</h4>
                        <p className="text-x-small" style={{ margin: "4px 0 0" }}>
                          {slide.roleLocation}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div
                      className="testimonial-video-area"
                      style={{ position: "relative", borderRadius: "16px", overflow: "hidden" }}
                    >
                      <img
                        src={slide.thumbnail}
                        alt={slide.thumbnailAlt}
                        style={{ width: "100%", height: "320px", objectFit: "cover", display: "block" }}
                      />
                      <button
                        type="button"
                        aria-label={`Play video from ${slide.badge}`}
                        onClick={() => setActiveVideoUrl(slide.videoUrl)}
                        style={{
                          position: "absolute",
                          inset: "50% auto auto 50%",
                          transform: "translate(-50%, -50%)",
                          width: "64px",
                          height: "64px",
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
                        <img src={mediaAssets.playIcon} alt="" aria-hidden="true" />
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={Boolean(activeVideoUrl)}
        videoUrl={activeVideoUrl || ""}
        title="Team Testimonial Video"
        onClose={() => setActiveVideoUrl(null)}
      />
    </section>
  );
}

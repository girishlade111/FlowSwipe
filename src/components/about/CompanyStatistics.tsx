import { useEffect, useRef, useState } from "react";
import { siteConfig } from "../../data/siteConfig";

interface CounterColumnProps {
  digits: string[];
  direction: "top" | "bottom";
  active: boolean;
}

function CounterColumn({ digits, direction, active }: CounterColumnProps) {
  // Final settled digit sits at index 0 for "bottom" or last index for "top" in visual reference:
  // Left stat settles at 89M; right stat settles at 473+.
  const targetOffset =
    direction === "bottom" ? "0%" : `-${((digits.length - 1) / digits.length) * 100}%`;
  const initialOffset =
    direction === "bottom" ? `-${((digits.length - 1) / digits.length) * 100}%` : "0%";

  return (
    <div
      className={`counter-animation-area ${direction}`}
      style={{
        transform: `translateY(${active ? targetOffset : initialOffset})`,
        transition: "transform 1.1s cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      {digits.map((d, i) => (
        <h3 key={i} className="card-title" style={{ lineHeight: "28.8px" }}>
          {d}
        </h3>
      ))}
    </div>
  );
}

export function CompanyStatistics() {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setTriggered(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="about-counter-area">
      <div className="about-counter-wrap">
        <div className="counter-number-area" aria-label={siteConfig.stats.growthLabel}>
          <CounterColumn digits={["8", "5", "2"]} direction="bottom" active={triggered} />
          <CounterColumn digits={["0", "3", "9"]} direction="top" active={triggered} />
          <div className="counter-animation-area" aria-hidden="true">
            <h3 className="card-title" style={{ lineHeight: "28.8px" }}>
              M
            </h3>
          </div>
        </div>
        <div className="mt-10">
          <p className="mg-0">{siteConfig.stats.growthCaption}</p>
        </div>
      </div>

      <div className="about-counter-line" />

      <div className="about-counter-wrap right">
        <div className="counter-number-area" aria-label={siteConfig.stats.communityLabel}>
          <CounterColumn digits={["4", "6", "2"]} direction="bottom" active={triggered} />
          <CounterColumn digits={["5", "8", "7"]} direction="top" active={triggered} />
          <CounterColumn digits={["3", "2", "0"]} direction="bottom" active={triggered} />
          <div className="counter-animation-area" aria-hidden="true">
            <h3 className="card-title" style={{ lineHeight: "28.8px" }}>
              +
            </h3>
          </div>
        </div>
        <div className="mt-10">
          <p className="mg-0">{siteConfig.stats.communityCaption}</p>
        </div>
      </div>
    </div>
  );
}

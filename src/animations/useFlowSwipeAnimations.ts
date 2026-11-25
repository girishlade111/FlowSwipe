import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export function useFlowSwipeAnimations(routeKey: string) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      touchMultiplier: 1.2,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const rafTick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(rafTick);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      // Hero banner entrance animations
      gsap.from("[animate-banner='grow']", {
        opacity: 0,
        scale: 0.96,
        y: 16,
        duration: 0.65,
        stagger: 0.08,
        ease: "power2.out",
        clearProps: "transform,opacity",
      });

      gsap.from("[animate-banner='slide-top']", {
        opacity: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.08,
        ease: "power2.out",
        clearProps: "transform,opacity",
      });

      gsap.from("[image-banner='reveal']", {
        opacity: 0,
        scale: 0.94,
        duration: 0.75,
        ease: "power2.out",
        clearProps: "transform,opacity",
      });

      // Scroll-triggered reveals
      gsap.utils.toArray<HTMLElement>("[animate='slide-top']").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 24,
          duration: 0.6,
          ease: "power2.out",
          clearProps: "transform,opacity",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[animate='grow']").forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          scale: 0.97,
          duration: 0.6,
          ease: "power2.out",
          clearProps: "transform,opacity",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            once: true,
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[card='wrap']").forEach((wrap) => {
        const items = wrap.querySelectorAll("[card='item']");
        if (!items.length) return;
        gsap.from(items, {
          opacity: 0,
          y: 22,
          duration: 0.55,
          stagger: 0.08,
          ease: "power2.out",
          clearProps: "transform,opacity",
          scrollTrigger: {
            trigger: wrap,
            start: "top 88%",
            once: true,
          },
        });
      });
    });

    return () => {
      ctx.revert();
      gsap.ticker.remove(rafTick);
      lenis.destroy();
    };
  }, [routeKey]);
}

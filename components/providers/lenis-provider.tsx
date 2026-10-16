"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      autoRaf: true,
      // Silkier premium scroll — still responsive, not laggy
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 0.98,
      touchMultiplier: 1.15,
      syncTouch: false,
      anchors: {
        offset: -88,
        lerp: 0.12,
      },
      stopInertiaOnNavigate: true,
      respectReducedMotion: true,
      prevent: (node) =>
        node instanceof HTMLElement &&
        Boolean(
          node.closest("[data-lenis-prevent]") ||
            node.closest("[data-lenis-prevent-wheel]")
        ),
    });

    (window as Window & { __lenis?: Lenis }).__lenis = lenis;

    const onResize = () => lenis.resize();
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("resize", onResize);
      const win = window as Window & { __lenis?: Lenis };
      if (win.__lenis === lenis) delete win.__lenis;
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

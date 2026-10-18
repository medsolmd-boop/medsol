"use client";

import { useEffect, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { usePathname } from "next/navigation";
import type Lenis from "lenis";
import { easeOutSoft } from "@/lib/motion";
import { consumePageScroll } from "@/components/providers/navigation-effects";

type NavMeta = {
  path: string;
  direction: 1 | -1;
  stack: string[];
};

function getLenis() {
  return (window as Window & { __lenis?: Lenis }).__lenis;
}

const variants: Variants = {
  enter: {
    opacity: 0,
    y: 10,
  },
  center: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.18, ease: easeOutSoft },
  },
};

/**
 * Fade the current page out where it is, then reveal the next one.
 * Scroll resets while the outgoing page is already invisible.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const metaRef = useRef<NavMeta>({
    path: pathname,
    direction: 1,
    stack: [pathname],
  });

  if (metaRef.current.path !== pathname) {
    const stack = metaRef.current.stack;
    const existingIndex = stack.lastIndexOf(pathname);

    if (existingIndex !== -1) {
      metaRef.current = {
        path: pathname,
        direction: -1,
        stack: stack.slice(0, existingIndex + 1),
      };
    } else {
      metaRef.current = {
        path: pathname,
        direction: 1,
        stack: [...stack, pathname],
      };
    }
  }

  useEffect(() => {
    const lenis = getLenis();
    if (!lenis) return;

    // Layout height changes after swap — resync virtual scroll
    const id = window.setTimeout(() => {
      lenis.resize();
    }, 40);

    return () => window.clearTimeout(id);
  }, [pathname]);

  if (reduceMotion) {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          data-page-panel={pathname}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.42, ease: easeOutSoft }}
          className="relative w-full bg-transparent"
          style={{
            backfaceVisibility: "hidden",
          }}
          onAnimationStart={(definition) => {
            if (definition === "exit" || definition === "enter") {
              document.documentElement.classList.add("is-page-transitioning");
            }
            if (definition === "exit") {
              getLenis()?.stop();
            }
          }}
          onAnimationComplete={(definition) => {
            if (definition === "exit") {
              const y = consumePageScroll();
              if (y != null) {
                const lenis = getLenis();
                if (lenis) {
                  lenis.start();
                  lenis.scrollTo(y, { immediate: true, force: true });
                  lenis.stop();
                } else {
                  window.scrollTo({ top: y, left: 0, behavior: "auto" });
                }
              }
              return;
            }
            if (definition !== "center") return;
            document.documentElement.classList.remove("is-page-transitioning");
            const lenis = getLenis();
            if (!lenis) return;
            lenis.start();
            lenis.resize();
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

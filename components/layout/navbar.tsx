"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { navLinks, servicesMenuLinks, siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { BrandLogo, brandLogoWordmarkSize } from "@/components/brand-logo";

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

/** Soft ease-out for scroll → progress mapping */
function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export function Navbar() {
  const pathname = usePathname();
  const [pill, setPill] = useState(false);
  const [elevated, setElevated] = useState(false);
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const headerRef = useRef<HTMLElement>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLSpanElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const progressRef = useRef(0);
  const targetProgressRef = useRef(0);
  const openRef = useRef(false);
  const desktopRef = useRef(false);
  const applyRef = useRef<(progress: number) => void>(() => {});
  const rafRef = useRef(0);

  const servicesActive = servicesMenuLinks.some((link) =>
    pathname.startsWith(link.href)
  );

  useEffect(() => {
    openRef.current = open;
    applyRef.current(progressRef.current);
    setElevated(progressRef.current > 0.05 || open);
  }, [open]);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const sync = () => {
      desktopRef.current = media.matches;
      setIsDesktop(media.matches);
      if (!media.matches) {
        setOpen(false);
        setServicesOpen(false);
      } else {
        setMobileServicesOpen(false);
      }
      applyRef.current(progressRef.current);
    };
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const SCROLL_RANGE = 180;
    const LERP = 0.14;
    // Animating blur px every frame is a major scroll stutter source
    let lastGlass: boolean | null = null;

    const apply = (progress: number) => {
      const header = headerRef.current;
      const shell = shellRef.current;
      const row = rowRef.current;
      const logo = logoRef.current;
      const cta = ctaRef.current;
      if (!header || !shell || !row) return;

      const desktop = desktopRef.current;
      const menuOpen = openRef.current;
      const p = progress;
      const mobileSheet = !desktop && menuOpen;

      const padX = mobileSheet ? 0 : desktop ? p * 20 : p * 12;
      const padY = mobileSheet ? 0 : desktop ? p * 14 : p * 10;
      const maxWidth = mobileSheet
        ? 100
        : desktop
          ? 100 - p * 16
          : 100 - p * 8;

      let radius = 0;
      if (!mobileSheet && p > 0.01) {
        radius = Math.pow(p, 0.85) * 48;
      }

      const barHeight = 68 - p * (desktop ? 8 : 6);
      const logoHeight = 40 - p * 4;
      const ctaHeight = 36 - p * 4;
      const ctaPadX = 22 - p * 4;
      const showGlass = !mobileSheet && p > 0.02;

      header.style.paddingLeft = `${padX}px`;
      header.style.paddingRight = `${padX}px`;
      header.style.paddingTop = `${padY}px`;

      shell.style.maxWidth = `${maxWidth}%`;
      shell.style.borderRadius = `${radius}px`;
      shell.style.paddingLeft = mobileSheet ? "0px" : `${p * (desktop ? 10 : 6)}px`;
      shell.style.paddingRight = mobileSheet ? "0px" : `${p * (desktop ? 10 : 6)}px`;
      shell.style.overflow = servicesOpen && desktop ? "visible" : "hidden";
      shell.style.boxShadow = mobileSheet
        ? "none"
        : showGlass
          ? `0 ${10 + p * 8}px ${28 + p * 14}px rgba(10,21,64,${0.06 + p * 0.08})`
          : "none";
      shell.style.borderColor = mobileSheet
        ? "transparent"
        : showGlass
          ? `rgba(255,255,255,${0.55 + p * 0.2})`
          : "transparent";
      shell.style.background = mobileSheet
        ? "#f7f8fb"
        : showGlass
          ? `radial-gradient(120% 90% at 0% 0%, rgba(48,101,212,${0.14 + p * 0.05}), transparent 54%), radial-gradient(90% 80% at 100% 100%, rgba(80,173,170,${0.11 + p * 0.04}), transparent 50%), linear-gradient(165deg, rgba(255,255,255,${0.7 + p * 0.12}), rgba(232,244,251,${0.64 + p * 0.12}))`
          : "transparent";

      if (lastGlass !== showGlass) {
        lastGlass = showGlass;
        const blur = showGlass ? "blur(12px)" : "none";
        shell.style.backdropFilter = blur;
        shell.style.setProperty("-webkit-backdrop-filter", blur);
      }

      row.style.height = `${barHeight}px`;

      if (logo) {
        logo.style.height = `${logoHeight}px`;
        logo.style.width = `${logoHeight * (brandLogoWordmarkSize.width / brandLogoWordmarkSize.height)}px`;
      }
      if (cta) {
        cta.style.height = `${ctaHeight}px`;
        cta.style.paddingLeft = `${ctaPadX}px`;
        cta.style.paddingRight = `${ctaPadX}px`;
      }
    };

    applyRef.current = apply;

    const readScrollY = () => {
      const lenis = (window as Window & { __lenis?: { scroll: number } }).__lenis;
      return lenis ? lenis.scroll : window.scrollY;
    };

    const readTarget = () => {
      targetProgressRef.current = easeOutCubic(
        clamp(readScrollY() / SCROLL_RANGE)
      );
    };

    const syncFlags = (progress: number) => {
      const nextPill = progress > 0.55;
      const nextElevated = progress > 0.05 || openRef.current;
      setPill((prev) => (prev === nextPill ? prev : nextPill));
      setElevated((prev) => (prev === nextElevated ? prev : nextElevated));
    };

    const tick = () => {
      const current = progressRef.current;
      const target = targetProgressRef.current;
      const next = current + (target - current) * LERP;
      const settled = Math.abs(target - next) < 0.001;

      progressRef.current = settled ? target : next;
      apply(progressRef.current);
      syncFlags(progressRef.current);

      rafRef.current = settled ? 0 : requestAnimationFrame(tick);
    };

    const kick = () => {
      readTarget();
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    readTarget();
    progressRef.current = targetProgressRef.current;
    apply(progressRef.current);
    syncFlags(progressRef.current);

    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", kick, { passive: true });

    return () => {
      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", kick);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [servicesOpen]);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open || isDesktop) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, isDesktop]);

  useEffect(() => {
    if (!servicesOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!servicesRef.current?.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setServicesOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [servicesOpen]);

  const linkClass = (active: boolean) =>
    cn(
      "inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full px-2 text-sm font-medium leading-none transition-[background-color,color,box-shadow,padding,font-size] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
      pill && "h-8 px-1.5 text-[13px]",
      active
        ? pill
          ? "bg-primary text-white shadow-[0_6px_16px_rgba(10,21,64,0.22)]"
          : "bg-primary/5 text-primary"
        : "text-muted hover:bg-white/70 hover:text-primary"
    );

  const frontDeskIndex = navLinks.findIndex(
    (link) => link.href === "/virtual-front-desk"
  );
  const linksBeforeServices = navLinks.slice(0, frontDeskIndex + 1);
  const linksAfterServices = navLinks.slice(frontDeskIndex + 1);

  return (
    <header
      ref={headerRef}
      className={cn(
        "pointer-events-none fixed inset-x-0 top-[var(--topbar-height)] nav-enter",
        open && !isDesktop ? "z-[70]" : "z-50"
      )}
      style={{ paddingLeft: 0, paddingRight: 0, paddingTop: 0 }}
    >
      <div
        ref={shellRef}
        className={cn(
          "pointer-events-auto relative z-10 mx-auto w-full border will-change-[max-width,border-radius,transform,opacity]",
          elevated || open ? "border-white/70" : "border-transparent"
        )}
        style={{
          maxWidth: "100%",
          borderRadius: 0,
          background: "transparent",
        }}
      >
        <Container
          ref={rowRef}
          className={cn(
            "grid grid-cols-[1fr_auto] items-center gap-3 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-x-6",
            pill && "max-w-none !px-2 md:!px-3"
          )}
          style={{ height: 68 }}
        >
          <Link
            href="/"
            className="group flex min-w-0 items-center justify-self-start gap-2.5"
            aria-label={`${siteConfig.name} home`}
          >
            <span
              ref={logoRef}
              className="relative flex h-10 shrink-0 items-center transition-transform duration-300 group-hover:scale-[1.02]"
              style={{
                width:
                  40 * (brandLogoWordmarkSize.width / brandLogoWordmarkSize.height),
              }}
            >
              <BrandLogo alt="" priority variant="wordmark" />
            </span>
          </Link>

          <nav
            className="hidden items-center justify-center gap-0.5 justify-self-center lg:flex lg:pl-4"
            aria-label="Primary navigation"
          >
            {linksBeforeServices.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  scroll={false}
                  className={linkClass(active)}
                >
                  {pill ? link.short : link.label}
                </Link>
              );
            })}

            <div ref={servicesRef} className="relative">
              <button
                type="button"
                className={linkClass(servicesActive || servicesOpen)}
                aria-expanded={servicesOpen}
                aria-haspopup="menu"
                onClick={() => setServicesOpen((value) => !value)}
              >
                <span className="inline-flex items-center gap-1">
                  Services
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-200",
                      servicesOpen && "rotate-180"
                    )}
                    aria-hidden="true"
                  />
                </span>
              </button>

              {servicesOpen ? (
                <div
                  role="menu"
                  className="absolute left-1/2 top-[calc(100%+0.55rem)] z-[60] w-64 -translate-x-1/2 rounded-2xl border border-white/70 bg-white/95 p-2 shadow-[0_18px_40px_rgba(10,21,64,0.14)] backdrop-blur-xl"
                >
                  {servicesMenuLinks.map((link) => {
                    const active = pathname.startsWith(link.href);
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        role="menuitem"
                        scroll={false}
                        onClick={() => setServicesOpen(false)}
                        className={cn(
                          "block rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                          active
                            ? "bg-primary/8 text-primary"
                            : "text-foreground hover:bg-primary/5 hover:text-primary"
                        )}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              ) : null}
            </div>

            {linksAfterServices.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  scroll={false}
                  className={linkClass(active)}
                >
                  {pill ? link.short : link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center justify-self-end lg:flex">
            <Button asChild className="rounded-full">
              <Link
                ref={ctaRef}
                href="/contact"
                className="inline-flex items-center justify-center whitespace-nowrap"
              >
                Contact Us
              </Link>
            </Button>
          </div>

          <button
            type="button"
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center justify-self-end text-primary transition-colors lg:hidden",
              open || elevated
                ? "rounded-full bg-primary/5"
                : "glass rounded-xl"
            )}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </Container>
      </div>

      {open && !isDesktop && typeof document !== "undefined"
        ? createPortal(
        <div
          data-lenis-prevent
          className="pointer-events-auto fixed inset-x-0 bottom-0 z-[60] overflow-y-auto overscroll-contain bg-[#f7f8fb] px-4 pb-8 pt-[var(--navbar-height)]"
          style={{ top: "var(--topbar-height)" }}
        >
            <div className="border-t border-primary/10 py-3">
              <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                {linksBeforeServices.map((link) => {
                  const active =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      scroll={false}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-xl px-3 py-3 text-sm font-medium transition-colors",
                        active
                          ? "bg-primary/8 text-primary"
                          : "text-foreground hover:bg-primary/5"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}

                <div className="rounded-xl">
                  <button
                    type="button"
                    className={cn(
                      "flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-medium transition-colors",
                      servicesActive || mobileServicesOpen
                        ? "bg-primary/8 text-primary"
                        : "text-foreground hover:bg-primary/5"
                    )}
                    aria-expanded={mobileServicesOpen}
                    onClick={() => setMobileServicesOpen((value) => !value)}
                  >
                    Services
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform duration-200",
                        mobileServicesOpen && "rotate-180"
                      )}
                      aria-hidden="true"
                    />
                  </button>
                  {mobileServicesOpen ? (
                    <div className="mt-1 space-y-1 border-l border-primary/10 pl-3">
                      {servicesMenuLinks.map((link) => {
                        const active = pathname.startsWith(link.href);
                        return (
                          <Link
                            key={link.href}
                            href={link.href}
                            scroll={false}
                            onClick={() => setOpen(false)}
                            className={cn(
                              "block rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                              active
                                ? "bg-primary/8 text-primary"
                                : "text-foreground hover:bg-primary/5"
                            )}
                          >
                            {link.label}
                          </Link>
                        );
                      })}
                    </div>
                  ) : null}
                </div>

                {linksAfterServices.map((link) => {
                  const active =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      scroll={false}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "rounded-xl px-3 py-3 text-sm font-medium transition-colors",
                        active
                          ? "bg-primary/8 text-primary"
                          : "text-foreground hover:bg-primary/5"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
              <Button
                asChild
                className="mt-3 h-auto min-h-12 w-full whitespace-normal rounded-full px-5 py-3 text-center leading-snug"
              >
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>,
          document.body
        )
        : null}
    </header>
  );
}

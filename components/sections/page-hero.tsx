import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";
import {
  PhotoHeroShell,
  photoHeroSectionClassName,
} from "@/components/sections/photo-hero-shell";

type PageHeroProps = {
  eyebrow?: string;
  h1: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta?: string;
  secondaryHref?: string;
  primaryHref?: string;
  breadcrumb?: string;
  backgroundImage?: string;
  backgroundAlt?: string;
  children?: React.ReactNode;
};

export function PageHero({
  eyebrow,
  h1,
  subheadline,
  primaryCta,
  secondaryCta,
  secondaryHref = "/about",
  primaryHref = "/contact",
  breadcrumb,
  backgroundImage,
  backgroundAlt = "",
  children,
}: PageHeroProps) {
  const hasPhoto = Boolean(backgroundImage);

  const copy = (
    <>
      {eyebrow ? (
        <FadeIn immediate>
          <p
            className={`mb-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] lg:text-left ${
              hasPhoto ? "text-accent" : "text-secondary"
            }`}
          >
            {eyebrow}
          </p>
        </FadeIn>
      ) : null}
      <FadeIn immediate delay={0.08}>
        <h1
          className={`mx-auto max-w-3xl text-balance text-[1.65rem] font-bold leading-[1.15] tracking-tight min-[380px]:text-[1.85rem] sm:text-4xl md:text-5xl lg:mx-0 lg:text-[3.2rem] lg:leading-[1.1] ${
            hasPhoto ? "text-white" : "text-foreground lg:text-[3.35rem]"
          }`}
        >
          {h1}
        </h1>
      </FadeIn>
      <FadeIn immediate delay={0.16}>
        <p
          className={`mx-auto mt-6 max-w-2xl text-base leading-relaxed md:text-lg lg:mx-0 ${
            hasPhoto ? "text-white/80" : "text-muted"
          }`}
        >
          {subheadline}
        </p>
      </FadeIn>
      <FadeIn
        immediate
        delay={0.24}
        className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start"
      >
        <Button
          asChild
          size="lg"
          className="h-auto min-h-12 w-full whitespace-normal rounded-full px-5 py-3 text-center leading-snug sm:w-auto sm:min-h-14"
        >
          <Link href={primaryHref}>
            {primaryCta}
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </Link>
        </Button>
        {secondaryCta ? (
          <Button
            asChild
            size="lg"
            variant="outline"
            className={
              hasPhoto
                ? "h-auto min-h-12 w-full whitespace-normal rounded-full border-white/45 bg-white/85 px-5 py-3 text-center leading-snug text-black hover:border-white hover:bg-white hover:text-black sm:w-auto sm:min-h-14"
                : "h-auto min-h-12 w-full whitespace-normal rounded-full px-5 py-3 text-center leading-snug sm:w-auto sm:min-h-14"
            }
          >
            <Link href={secondaryHref}>{secondaryCta}</Link>
          </Button>
        ) : null}
      </FadeIn>
    </>
  );

  if (hasPhoto) {
    return (
      <PhotoHeroShell
        src={backgroundImage!}
        alt={backgroundAlt}
        intensity="strong"
        breadcrumb={breadcrumb}
      >
        <div className="grid items-center gap-10 text-center lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:text-left">
          <div>{copy}</div>
          {children ? (
            <FadeIn
              immediate
              delay={0.2}
              className="relative z-[1] mx-auto w-full max-w-md overflow-visible px-1 sm:px-2 lg:mx-0 lg:max-w-none lg:px-4"
            >
              {children}
            </FadeIn>
          ) : null}
        </div>
      </PhotoHeroShell>
    );
  }

  return (
    <section
      className={`${photoHeroSectionClassName} hero-gradient noise-overlay`}
    >
      <Container className="relative z-[2]">
        {breadcrumb ? (
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="inline-flex flex-wrap items-center justify-center gap-1.5 text-sm text-muted lg:justify-start">
              <li>
                <Link href="/" className="transition-colors hover:text-primary">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
                <span
                  className="font-medium text-foreground"
                  aria-current="page"
                >
                  {breadcrumb}
                </span>
              </li>
            </ol>
          </nav>
        ) : null}

        <div className="grid items-center gap-12 text-center lg:grid-cols-[1.15fr_0.85fr] lg:text-left">
          <div>{copy}</div>
          {children ? (
            <FadeIn
              immediate
              delay={0.2}
              className="relative z-[1] mx-auto w-full max-w-md overflow-visible px-2 sm:px-4 lg:mx-0 lg:max-w-none lg:px-6"
            >
              {children}
            </FadeIn>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

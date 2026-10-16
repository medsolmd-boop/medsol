import { homeContent } from "@/lib/content/home";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { HealthcareHeroIllustration } from "@/components/illustrations/healthcare-hero";
import { heroBackgrounds } from "@/lib/hero-backgrounds";
import { ServiceCards } from "@/components/sections/service-cards";
import { BenefitGrid } from "@/components/sections/benefit-grid";
import { StatsSection } from "@/components/sections/stats-section";
import { Timeline } from "@/components/sections/timeline";
import { Testimonials } from "@/components/sections/testimonials";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBanner } from "@/components/sections/cta-banner";
import { CalculatorPromo } from "@/components/sections/calculator-promo";
import { ComparisonCallout } from "@/components/sections/comparison-callout";
import { WhoWeServe } from "@/components/sections/who-we-serve";
import { Container } from "@/components/ui/container";
import { FadeIn, Stagger, StaggerItem } from "@/components/motion/fade-in";
import {
  ClipboardCheck,
  MapPinned,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

export const metadata = buildMetadata({
  title: homeContent.seo.title,
  description: homeContent.seo.description,
  path: "/",
  keywords: [...homeContent.seo.keywords],
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([{ name: "Home", href: "/" }])}
      />
      <JsonLd data={faqSchema([...homeContent.faqs])} />

      <PageHero
        eyebrow="Medical Billing Services"
        h1={homeContent.hero.h1}
        subheadline={homeContent.hero.subheadline}
        primaryCta={homeContent.hero.primaryCta}
        secondaryCta={homeContent.hero.secondaryCta}
        secondaryHref="/medical-billing"
        backgroundImage={heroBackgrounds.home.src}
        backgroundAlt={heroBackgrounds.home.alt}
      >
        <div className="relative">
          <HealthcareHeroIllustration />
          <div className="glass-strong absolute -left-2 bottom-8 hidden rounded-2xl px-4 py-3 md:block">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Clean Claim Rate
            </p>
            <p className="text-2xl font-bold text-primary">98%</p>
          </div>
          <div className="glass-strong absolute -right-2 top-10 hidden rounded-2xl px-4 py-3 md:block">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Collection Lift
            </p>
            <p className="text-2xl font-bold text-accent">+28%</p>
          </div>
        </div>
      </PageHero>

      <section className="section-surface border-b py-7 md:py-8">
        <Container>
          <Stagger className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {[
              {
                label: "HIPAA-aware workflows",
                icon: ShieldCheck,
                tone: "text-accent bg-accent/10 group-hover:bg-accent",
              },
              {
                label: "Transparent reporting",
                icon: ClipboardCheck,
                tone: "text-secondary bg-secondary/10 group-hover:bg-secondary",
              },
              {
                label: "Specialty-aware specialists",
                icon: Stethoscope,
                tone: "text-primary bg-primary/10 group-hover:bg-primary",
              },
              {
                label: "US-focused RCM support",
                icon: MapPinned,
                tone: "text-spark bg-spark/15 group-hover:bg-spark",
              },
            ].map((item) => (
              <StaggerItem key={item.label}>
                <div className="group relative inline-flex cursor-default items-center gap-2.5 rounded-full border border-[rgba(27,58,87,0.08)] bg-[linear-gradient(165deg,rgba(255,255,255,0.92),rgba(244,246,248,0.78))] px-4 py-2.5 text-sm font-medium text-muted shadow-[0_1px_0_rgba(255,255,255,0.8)_inset,0_8px_20px_rgba(28,36,48,0.05)] transition-all duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-primary/15 hover:bg-white hover:text-primary hover:shadow-[0_14px_28px_rgba(28,36,48,0.08)]">
                  <span
                    className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-[400ms] group-hover:scale-105 group-hover:text-white ${item.tone}`}
                  >
                    <item.icon
                      className="relative z-[1] h-4 w-4"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="transition-colors duration-[400ms]">
                    {item.label}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="py-10 md:py-14">
        <Container>
          <FadeIn className="mx-auto max-w-3xl text-center">
            <p className="text-base leading-relaxed text-muted md:text-lg">
              {homeContent.intro}
            </p>
          </FadeIn>
        </Container>
      </section>

      <div id="services">
        <ServiceCards
          title="Our Core Services"
          description="End-to-end medical billing services, credentialing, and virtual front desk support designed for modern healthcare practices."
          services={homeContent.services}
        />
      </div>

      <WhoWeServe
        title={homeContent.whoWeServe.title}
        description={homeContent.whoWeServe.description}
      />

      <BenefitGrid
        eyebrow="Why Choose Us"
        title={homeContent.whyChoose.title}
        description="Healthcare providers choose a revenue cycle management company that increases collections while reducing administrative burden."
        items={homeContent.whyChoose.items}
      />

      <StatsSection stats={[...homeContent.stats]} variant="brand" />

      <CalculatorPromo />

      <ComparisonCallout
        title={homeContent.comparison.title}
        description={homeContent.comparison.description}
        items={homeContent.comparison.items}
      />

      <Timeline
        eyebrow="How We Work"
        title="How We Work"
        description="A clear path from discovery to optimized collections, built for busy healthcare operators."
        steps={homeContent.howWeWork}
      />

      <Testimonials items={homeContent.testimonials} />

      <CtaBanner
        title="Get a Free Revenue Cycle Assessment"
        description="See how outsourcing medical billing and streamlining credentialing can increase collections and free your team for patient care."
        cta={homeContent.hero.primaryCta}
      />

      <FaqSection faqs={homeContent.faqs} />

      <CtaBanner
        title={homeContent.finalCta.title}
        description={homeContent.finalCta.description}
        cta={homeContent.finalCta.cta}
      />
    </>
  );
}

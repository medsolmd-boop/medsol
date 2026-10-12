import { homeContent } from "@/lib/content/home";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/sections/page-hero";
import { HealthcareHeroIllustration } from "@/components/illustrations/healthcare-hero";
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
import { FadeIn } from "@/components/motion/fade-in";
import {
  ClipboardCheck,
  FileCheck2,
  Landmark,
  ShieldCheck,
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
      >
        <HealthcareHeroIllustration />
      </PageHero>

      <section className="border-b border-border bg-white">
        <Container>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-5 py-6 md:grid-cols-4 md:py-7">
            {[
              { label: "HIPAA-aware workflows", icon: ShieldCheck },
              { label: "Claim-level reporting", icon: ClipboardCheck },
              { label: "Denial follow-up", icon: FileCheck2 },
              { label: "US payer billing", icon: Landmark },
            ].map((item) => (
              <li key={item.label} className="flex items-center gap-3">
                <item.icon
                  className="h-4 w-4 shrink-0 text-secondary"
                  aria-hidden="true"
                />
                <span className="text-sm font-semibold leading-snug text-foreground">
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-14">
            <FadeIn className="lg:col-span-5">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                The revenue cycle
              </p>
              <h2 className="mt-3 text-3xl leading-[1.15] text-foreground md:text-4xl">
                Collections, denials, and days in A/R. That is the job.
              </h2>
            </FadeIn>
            <FadeIn
              delay={0.08}
              className="space-y-5 text-[1.0625rem] leading-[1.75] text-foreground/80 lg:col-span-7"
            >
              <p>{homeContent.intro}</p>
              <p>{homeContent.introDetail}</p>
            </FadeIn>
          </div>
        </Container>
      </section>

      <div id="services">
        <ServiceCards
          title="Our Core Services"
          description="Claim submission, payer enrollment, and front-desk support for practices that want the revenue cycle handled like a finance function."
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
        description="Practices hire a billing company when in-house follow-up cannot keep denials from aging and collections from slipping."
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
        description="A clear path from the first claim audit to a billing desk that reports collections every month."
        steps={homeContent.howWeWork}
      />

      <Testimonials items={homeContent.testimonials} />

      <CtaBanner
        title="Get a Free Revenue Cycle Assessment"
        description="See where claims are stalling, which denials repeat, and what a dedicated billing team would change in the first quarter."
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

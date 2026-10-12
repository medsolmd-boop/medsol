"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/section-title";
import { FadeIn } from "@/components/motion/fade-in";
import { AccordionGallery } from "@/components/ui/accordion-gallery";

const audienceItems = [
  {
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    label: "Independent Physicians",
    alt: "Practice administrator reviewing billing reports at a desk",
  },
  {
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80",
    label: "Specialty Clinics",
    alt: "Billing specialist reviewing claims and payment records",
  },
  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    label: "Urgent Care Centers",
    alt: "Revenue dashboard on a laptop used for medical billing follow-up",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80",
    label: "Behavioral Health",
    alt: "Billing team meeting about claim follow-up and collections",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80",
    label: "Multi-Provider Groups",
    alt: "Professional office where a multi-provider group manages operations",
  },
];

type WhoWeServeProps = {
  title: string;
  description: string;
};

export function WhoWeServe({ title, description }: WhoWeServeProps) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionTitle
          eyebrow="Practices We Support"
          title={title}
          description={description}
        />
        <FadeIn delay={0.08} className="mt-10 md:mt-12">
          <AccordionGallery
            items={audienceItems}
            defaultIndex={1}
            expandRatio={0.5}
            trigger="auto"
            height={440}
            gap={12}
            radius={32}
            accentColor="#1f6b4a"
            overlayColor="#0a365c"
            textColor="#ffffff"
            grayscale
            showLabels
            parallax={0.25}
            tilt={5}
          />
        </FadeIn>
        <FadeIn className="mt-8 text-center text-sm text-muted">
          Explore our{" "}
          <Link
            href="/medical-billing"
            className="font-semibold text-secondary underline-offset-4 hover:underline"
          >
            medical billing services
          </Link>
          ,{" "}
          <Link
            href="/credentialing"
            className="font-semibold text-secondary underline-offset-4 hover:underline"
          >
            provider credentialing services
          </Link>
          , and{" "}
          <Link
            href="/virtual-front-desk"
            className="font-semibold text-secondary underline-offset-4 hover:underline"
          >
            virtual front desk for medical practice
          </Link>{" "}
          support.
        </FadeIn>
      </Container>
    </section>
  );
}

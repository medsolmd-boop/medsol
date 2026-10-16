"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/section-title";
import { FadeIn } from "@/components/motion/fade-in";
import { AccordionGallery } from "@/components/ui/accordion-gallery";

const audienceItems = [
  {
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1400&q=80",
    label: "Independent Physicians",
    alt: "Independent practice owner reviewing operations in a professional office",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1400&q=80",
    label: "Specialty Clinics",
    alt: "Specialty clinic leadership collaborating in a modern office",
  },
  {
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80",
    label: "Urgent Care Centers",
    alt: "Multi-location urgent care operations office for outsourced billing support",
  },
  {
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1400&q=80",
    label: "Behavioral Health",
    alt: "Behavioral health practice administrator in a calm professional workspace",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1400&q=80",
    label: "Multi-Provider Groups",
    alt: "Multi-provider group leadership meeting on revenue operations",
  },
];

type WhoWeServeProps = {
  title: string;
  description: string;
};

export function WhoWeServe({ title, description }: WhoWeServeProps) {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <SectionTitle
          eyebrow="Practices We Support"
          title={title}
          description={description}
        />
        <FadeIn delay={0.08} className="mt-8 md:mt-10">
          <AccordionGallery
            items={audienceItems}
            defaultIndex={1}
            expandRatio={0.5}
            trigger="auto"
            height={440}
            gap={12}
            radius={24}
            accentColor="#3aa89c"
            overlayColor="#1b3a57"
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

"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/section-title";
import { FadeIn } from "@/components/motion/fade-in";
import { AccordionGallery } from "@/components/ui/accordion-gallery";

const audienceItems = [
  {
    image: "/independent-physician.jpg",
    label: "Independent Physicians",
    description:
      "Billing and credentialing for solo and small practices, without adding staff.",
    alt: "Independent physician reviewing a patient chart",
  },
  {
    image: "/serve-lab.jpg",
    label: "Labs",
    description:
      "Claim submission and payer follow-up for diagnostic and reference laboratories.",
    alt: "Laboratory scientist working with clinical analyzers",
  },
  {
    image: "/serve-hospital.jpg",
    label: "Hospitals",
    description:
      "Revenue cycle support for inpatient and outpatient hospital claims.",
    alt: "Large modern hospital building exterior",
  },
  {
    image: "/serve-urgent-care.jpg",
    label: "Urgent Care Centers",
    description:
      "High-volume charge capture and clean claims for walk-in visits.",
    alt: "Clinician checking a patient's blood pressure during an urgent care visit",
  },
  {
    image: "/serve-dentist.jpg",
    label: "Dentists",
    description:
      "Dental insurance billing, claim follow-up, and patient balances.",
    alt: "Dentist examining a patient in a dental chair",
  },
  {
    image: "/serve-multi-provider.jpg",
    label: "Multi-Provider Groups",
    description:
      "Shared billing across multiple clinicians, specialties, and locations.",
    alt: "Multi-provider clinical team standing together",
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
            defaultIndex={0}
            expandRatio={0.5}
            trigger="auto"
            height={440}
            gap={12}
            radius={24}
            accentColor="#50adaa"
            overlayColor="#0a1540"
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

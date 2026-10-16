"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/section-title";
import { AccordionGallery } from "@/components/ui/accordion-gallery";

const frontDeskProjectItems = [
  {
    image:
      "https://images.unsplash.com/photo-1560264418-c4445382edbc?auto=format&fit=crop&w=1400&q=80",
    label: "Live Call Answering",
    alt: "Virtual front desk specialist with headset answering practice calls",
  },
  {
    image:
      "https://images.unsplash.com/photo-1553775282-20af80779df7?auto=format&fit=crop&w=1400&q=80",
    label: "Headset-Ready Support",
    alt: "Professional headset at a remote front desk workstation",
  },
  {
    image:
      "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1400&q=80",
    label: "Professional Support Team",
    alt: "Support specialist on a call in a modern office",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=80",
    label: "Appointment Scheduling",
    alt: "Coordinator scheduling appointments from a laptop workspace",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=80",
    label: "Intake Coordination",
    alt: "Team coordinating registration and intake workflows",
  },
];

export function VirtualFrontDeskGallery() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <SectionTitle
          eyebrow="How Virtual Support Looks"
          title="Front Desk Moments That Shape Every Patient Call"
          description="From headset-ready receptionists answering phones to scheduling, intake, and eligibility checks, our virtual front desk team keeps patients connected and your clinic running smoothly."
        />
        <div className="mt-8 md:mt-10">
          <AccordionGallery
            items={frontDeskProjectItems}
            defaultIndex={1}
            expandRatio={0.5}
            trigger="auto"
            height={440}
            gap={12}
            radius={24}
            accentColor="#2ec4b6"
            overlayColor="#0a365c"
            textColor="#ffffff"
            grayscale
            showLabels
            parallax={0.28}
            tilt={6}
          />
        </div>
        <p className="mt-8 text-center text-sm text-muted">
          Want coverage that feels like your own front desk?{" "}
          <Link
            href="/contact"
            className="font-semibold text-secondary underline-offset-4 hover:underline"
          >
            Talk about front desk support
          </Link>{" "}
          or pair it with{" "}
          <Link
            href="/medical-billing"
            className="font-semibold text-secondary underline-offset-4 hover:underline"
          >
            medical billing services
          </Link>{" "}
          for cleaner claim starts.
        </p>
      </Container>
    </section>
  );
}

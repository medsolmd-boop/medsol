"use client";

import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/section-title";
import { AccordionGallery } from "@/components/ui/accordion-gallery";

const medicalBillingProjectItems = [
  {
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1400&q=80",
    label: "Claim Scrubbing & Submission",
    alt: "Billing specialist preparing electronic claims on a laptop",
  },
  {
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80",
    label: "Payment Posting",
    alt: "Financial documents used for payment posting and reconciliation",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    label: "Denial Rate Trends",
    alt: "Analytics charts showing denial performance over time",
  },
  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    label: "Aging AR Dashboard",
    alt: "Laptop dashboard tracking aging accounts receivable",
  },
  {
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=80",
    label: "Payer Follow-Up",
    alt: "Desk paperwork for insurance follow-up and claim files",
  },
];

export function MedicalBillingGallery() {
  return (
    <section className="py-12 md:py-16">
      <Container>
        <SectionTitle
          eyebrow="How We Run the Revenue Cycle"
          title="Billing Work That Turns Claims Into Collected Cash"
          description="From clean claim submission and payment posting to denial appeals, aging AR recovery, and payer follow-up, every step is managed so practices get paid faster with fewer write-offs."
        />
        <div className="mt-8 md:mt-10">
          <AccordionGallery
            items={medicalBillingProjectItems}
            defaultIndex={2}
            expandRatio={0.5}
            trigger="auto"
            height={440}
            gap={12}
            radius={24}
            accentColor="#2ec4b6"
            overlayColor="#020837"
            textColor="#ffffff"
            grayscale
            showLabels
            parallax={0.25}
            tilt={5}
          />
        </div>
        <p className="mt-8 text-center text-sm text-muted">
          Want a clearer picture of leakage first?{" "}
          <Link
            href="/tools/revenue-leakage-calculator"
            className="font-semibold text-secondary underline-offset-4 hover:underline"
          >
            Use the revenue leakage calculator
          </Link>{" "}
          or{" "}
          <Link
            href="/contact"
            className="font-semibold text-secondary underline-offset-4 hover:underline"
          >
            get a free billing analysis
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardList,
  FileText,
  Globe,
  Headset,
  Megaphone,
  Search,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/section-title";
import { Stagger, StaggerItem } from "@/components/motion/fade-in";

const icons: Record<string, LucideIcon> = {
  FileText,
  BadgeCheck,
  ClipboardList,
  Headset,
  Megaphone,
  Globe,
  Search,
};

const iconStyle =
  "bg-primary text-white";

type Service = {
  title: string;
  href: string;
  description: string;
  icon: string;
};

export function ServiceCards({
  title,
  description,
  services,
}: {
  title: string;
  description?: string;
  services: readonly Service[] | Service[];
}) {
  return (
    <section className="section-alt py-20 md:py-28">
      <Container>
        <SectionTitle
          eyebrow="What We Do"
          title={title}
          description={description}
        />
        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon] ?? FileText;
            return (
              <StaggerItem key={service.href}>
                <Link
                  href={service.href}
                  className="group flex h-full flex-col rounded-[1.75rem] border border-border bg-white p-7 transition-colors duration-300 hover:border-primary/30 md:p-8"
                >
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${iconStyle}`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-2xl leading-snug text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 flex-1 text-base leading-[1.7] text-foreground/80">
                    {service.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-secondary">
                    Learn more
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Container>
    </section>
  );
}

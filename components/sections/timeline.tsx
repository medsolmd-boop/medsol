"use client";

import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardList,
  Headset,
  LineChart,
  Rocket,
  Settings2,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/section-title";
import { FadeIn } from "@/components/motion/fade-in";
import { cn } from "@/lib/utils";

type Step = {
  step?: string;
  year?: string;
  title: string;
  description: string;
};

type TimelineProps = {
  title: string;
  description?: string;
  steps: readonly Step[] | Step[];
  eyebrow?: string;
};

const stepIcons: LucideIcon[] = [
  ClipboardList,
  Settings2,
  Headset,
  LineChart,
  BadgeCheck,
  Users,
  ShieldCheck,
  Rocket,
];

export function Timeline({
  title,
  description,
  steps,
  eyebrow = "Process",
}: TimelineProps) {
  const [active, setActive] = useState(0);

  return (
    <section className="section-alt py-16 md:py-24">
      <Container>
        <SectionTitle
          eyebrow={eyebrow}
          title={title}
          description={description}
        />

        <FadeIn className="mt-8 md:mt-10">
          {/* Desktop / tablet: hover-expand strip */}
          <div
            className="timeline-track hidden h-[280px] gap-4 md:grid"
            style={{
              gridTemplateColumns: steps
                .map((_, index) => (index === active ? "2.35fr" : "1fr"))
                .join(" "),
            }}
            onMouseLeave={() => setActive(0)}
          >
            {steps.map((item, index) => {
              const Icon = stepIcons[index % stepIcons.length];
              const isActive = active === index;
              const label =
                item.step ?? item.year ?? String(index + 1).padStart(2, "0");

              return (
                <button
                  key={`${item.title}-${index}`}
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  aria-expanded={isActive}
                  className={cn(
                    "relative h-full min-w-0 overflow-hidden rounded-[2rem] border text-left",
                    "transition-[background-color,border-color,color] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isActive
                      ? "border-primary bg-primary text-white"
                      : "border-border bg-white text-foreground"
                  )}
                >
                  <div
                    className={cn(
                      "absolute inset-0 flex flex-col items-center justify-center gap-3 px-4 py-5 transition-opacity duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                      isActive ? "pointer-events-none opacity-0" : "opacity-100"
                    )}
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/8 text-primary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="text-xs font-bold tracking-[0.14em] text-secondary">
                      {label}
                    </span>
                    <h3 className="px-1 text-center text-[15px] font-semibold leading-snug text-foreground">
                      {item.title}
                    </h3>
                    <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-[#f7f4ee] text-muted">
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>

                  <div
                    className={cn(
                      "absolute inset-0 flex flex-col justify-between p-6 transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:p-7",
                      isActive
                        ? "opacity-100 delay-150"
                        : "pointer-events-none opacity-0"
                    )}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
                          <Icon className="h-5 w-5" aria-hidden="true" />
                        </span>
                        <span className="shrink-0 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-wide text-white/90">
                          Step {label}
                        </span>
                      </div>

                      <h3 className="mt-4 text-xl font-semibold leading-snug text-white lg:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-[46ch] text-[15px] leading-relaxed text-white/88">
                        {item.description}
                      </p>
                    </div>

                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary">
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Mobile: tap-to-expand accordion cards */}
          <div className="space-y-3 md:hidden">
            {steps.map((item, index) => {
              const Icon = stepIcons[index % stepIcons.length];
              const isActive = active === index;
              const label =
                item.step ?? item.year ?? String(index + 1).padStart(2, "0");

              return (
                <button
                  key={`${item.title}-${index}-mobile`}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-expanded={isActive}
                  className={cn(
                    "w-full rounded-[1.75rem] border p-4 text-left transition-[background-color,border-color,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isActive
                      ? "border-primary bg-primary text-white"
                      : "border-border bg-white text-foreground"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-500",
                        isActive
                          ? "bg-white/15 text-white"
                          : "bg-primary/8 text-primary"
                      )}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p
                        className={cn(
                          "text-xs font-semibold tracking-[0.14em] transition-colors duration-500",
                          isActive ? "text-white/75" : "text-secondary"
                        )}
                      >
                        {label}
                      </p>
                      <h3 className="text-base font-bold">{item.title}</h3>
                    </div>
                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-500",
                        isActive
                          ? "border-white/30 bg-white text-primary"
                          : "border-border bg-[#f7f4ee] text-muted"
                      )}
                    >
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                  <div
                    className={cn(
                      "grid transition-[grid-template-rows,opacity,margin] duration-500 ease-in-out",
                      isActive
                        ? "mt-3 grid-rows-[1fr] opacity-100"
                        : "mt-0 grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="text-base leading-[1.7] text-white/85">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

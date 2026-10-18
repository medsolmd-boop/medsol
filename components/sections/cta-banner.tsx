import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/motion/fade-in";

type CtaBannerProps = {
  title: string;
  description: string;
  cta: string;
  href?: string;
};

export function CtaBanner({
  title,
  description,
  cta,
  href = "/contact",
}: CtaBannerProps) {
  return (
    <section className="relative overflow-hidden py-10 md:py-14">
      <Container>
        <FadeIn>
          <div className="noise-overlay relative overflow-hidden rounded-[1.75rem] bg-primary px-6 py-10 text-white shadow-[0_1px_0_rgba(255,255,255,0.12)_inset,0_24px_50px_rgba(18,41,61,0.28)] md:px-12 md:py-12">
            <div
              className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-secondary/20 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative z-[2] grid items-center gap-8 text-center lg:grid-cols-[1.4fr_auto] lg:text-left">
              <div>
                <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold tracking-tight md:text-4xl lg:mx-0">
                  {title}
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg lg:mx-0">
                  {description}
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="mx-auto h-auto min-h-12 w-full whitespace-normal bg-[#fcfcfd] px-5 py-3 text-center leading-snug text-primary shadow-[0_10px_28px_rgba(0,0,0,0.12)] hover:bg-white sm:w-auto lg:mx-0"
              >
                <Link href={href}>
                  {cta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

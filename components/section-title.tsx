import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/motion/fade-in";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  as?: "h1" | "h2" | "h3";
  className?: string;
  titleClassName?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "center",
  as = "h2",
  className,
  titleClassName,
}: SectionTitleProps) {
  const Heading = as;

  return (
    <FadeIn
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
          {eyebrow}
        </p>
      ) : null}
      <Heading
        className={cn(
          "text-balance text-3xl leading-[1.15] text-foreground md:text-4xl",
          titleClassName
        )}
      >
        {title}
      </Heading>
      {description ? (
        <p
          className={cn(
            "mt-4 max-w-[42rem] text-[1.0625rem] leading-[1.75] text-foreground/80",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      ) : null}
    </FadeIn>
  );
}

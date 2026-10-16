import Image from "next/image";

type HeroBackgroundProps = {
  src: string;
  alt: string;
  /** Darker left-side fade for text-heavy layouts */
  intensity?: "soft" | "strong";
};

/**
 * Full-bleed photo with a readable ink veil.
 * Left stays dark for copy; right keeps a hint of the photo.
 */
export function HeroBackground({
  src,
  alt,
  intensity = "strong",
}: HeroBackgroundProps) {
  const veil =
    intensity === "strong"
      ? "from-black/82 via-black/68 to-black/55"
      : "from-black/74 via-black/58 to-black/46";

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="100vw"
        className="scale-[1.03] object-cover object-center brightness-[0.72] contrast-[1.05] saturate-[0.85]"
      />
      {/* Primary readability veil — heavier on the copy side */}
      <div className={`absolute inset-0 bg-gradient-to-r ${veil}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/35" />
      {/* Soft brand wash — muted, not neon */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_12%_45%,rgba(27,58,87,0.45),transparent_58%),radial-gradient(ellipse_50%_45%_at_92%_18%,rgba(58,168,156,0.12),transparent_55%)]" />
    </div>
  );
}

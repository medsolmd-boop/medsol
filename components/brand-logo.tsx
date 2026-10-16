import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  /** Accessible label; decorative when empty and parent has aria-label */
  alt?: string;
  priority?: boolean;
};

/**
 * MedSol mark (petal icon only — no wordmark). Transparent PNG for light surfaces.
 */
export function BrandLogo({
  className,
  alt = "MedSol",
  priority = false,
}: BrandLogoProps) {
  return (
    <Image
      src="/logo.png"
      alt={alt}
      width={254}
      height={228}
      priority={priority}
      className={cn("h-full w-full object-contain", className)}
    />
  );
}

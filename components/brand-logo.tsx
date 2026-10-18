import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  /** Accessible label; decorative when empty and parent has aria-label */
  alt?: string;
  priority?: boolean;
  /** Navbar uses the wordmark only, without the billing line. */
  variant?: "full" | "wordmark";
};

/** Full Medsol lockup, colors left as supplied. */
export const brandLogoSize = { width: 1199, height: 331 };
/** Mark and wordmark, without the billing / credentialing / support line. */
export const brandLogoWordmarkSize = { width: 1197, height: 248 };

export function BrandLogo({
  className,
  alt = "Medsol",
  priority = false,
  variant = "full",
}: BrandLogoProps) {
  const size = variant === "wordmark" ? brandLogoWordmarkSize : brandLogoSize;

  return (
    <Image
      src={variant === "wordmark" ? "/logo-lockup.png" : "/logo.png"}
      alt={alt}
      width={size.width}
      height={size.height}
      priority={priority}
      unoptimized
      className={cn("h-full w-full object-contain", className)}
    />
  );
}

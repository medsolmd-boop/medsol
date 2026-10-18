import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/container";

const officeAddress = `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`;

export function TopBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-[55] h-[var(--topbar-height)] border-b border-white/10 bg-primary text-white">
      <Container className="flex h-full min-w-0 flex-col items-center justify-center gap-1 overflow-hidden py-1.5 text-center text-[11px] leading-tight sm:flex-row sm:gap-x-5 sm:py-0 sm:text-left sm:text-xs">
        <div className="flex min-w-0 flex-col items-center gap-1 min-[420px]:flex-row min-[420px]:gap-x-4">
          <a
            href={`tel:${siteConfig.phoneTel}`}
            className="inline-flex shrink-0 items-center gap-1.5 font-medium transition-colors hover:text-white/80"
          >
            <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {siteConfig.phone}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex min-w-0 items-center gap-1.5 font-medium transition-colors hover:text-white/80"
          >
            <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span className="truncate">{siteConfig.email}</span>
          </a>
        </div>
        <a
          href={siteConfig.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-w-0 max-w-full items-center justify-center gap-1.5 font-medium transition-colors hover:text-white/80 sm:ml-auto sm:justify-start"
        >
          <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span className="truncate">{officeAddress}</span>
        </a>
      </Container>
    </div>
  );
}

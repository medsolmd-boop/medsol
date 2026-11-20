import { Mail, MapPin, Phone, Printer } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Container } from "@/components/ui/container";

const officeAddress = `${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.zip}`;

export function TopBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-[55] h-[var(--topbar-height)] border-b border-white/10 bg-primary text-white">
      <Container className="flex h-full min-w-0 flex-wrap items-center justify-center gap-x-4 gap-y-1 py-1.5 text-center text-[11px] leading-tight sm:text-xs xl:flex-nowrap xl:justify-start xl:py-0 xl:text-left">
        {siteConfig.phones.map((phone) => (
          <a
            key={phone.tel}
            href={`tel:${phone.tel}`}
            className="inline-flex shrink-0 items-center gap-1.5 font-medium transition-colors hover:text-white/80"
          >
            <Phone className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>Phone: {phone.display}</span>
          </a>
        ))}
        <span className="inline-flex shrink-0 items-center gap-1.5 font-medium">
          <Printer className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span>Fax: {siteConfig.fax.display}</span>
        </span>
        <a
          href={`mailto:${siteConfig.email}`}
          className="inline-flex min-w-0 items-center gap-1.5 font-medium transition-colors hover:text-white/80"
        >
          <Mail className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span className="truncate">{siteConfig.email}</span>
        </a>
        <a
          href={siteConfig.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-w-0 max-w-full items-center justify-center gap-1.5 font-medium transition-colors hover:text-white/80 xl:ml-auto xl:justify-start"
        >
          <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span className="truncate">{officeAddress}</span>
        </a>
      </Container>
    </div>
  );
}

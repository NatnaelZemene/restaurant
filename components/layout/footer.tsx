import { Instagram, Facebook, Music2, Mail, Phone, MapPin } from "lucide-react";
import { site, navLinks } from "@/lib/data/site";
import { ArchDivider } from "@/components/shared/arch-divider";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-base pt-16 pb-8">
      <div className="container-luxury">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-2">
            <p className="font-display text-2xl text-white">{site.name}</p>
            <p className="text-gold/70 text-xs tracking-widest2 uppercase mt-1">
              {site.nameAmharic}
            </p>
            <p className="text-white/50 text-sm mt-5 max-w-sm leading-relaxed">
              {site.subtagline}
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/50 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={site.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/50 transition-colors"
              >
                <Music2 className="h-4 w-4" />
              </a>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/50 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <p className="eyebrow mb-5">Navigate</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/50 hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-5">Contact</p>
            <ul className="space-y-3 text-sm text-white/50">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold/70" />
                <span>{site.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-gold/70" />
                <span>{site.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-gold/70" />
                <a href={`mailto:${site.email}`} className="hover:text-gold transition-colors">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <ArchDivider className="mt-14 mb-6 opacity-60" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Gondar, Ethiopia</p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Facebook } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { site } from "@/lib/data/site";

export function Contact() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    site.mapsQuery
  )}&output=embed`;

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-card/40">
      <div className="container-luxury">
        <SectionHeading eyebrow="Visit Us" title="Find Us in Gondar" />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-8">
          <Reveal className="lg:col-span-2">
            <div className="glass-card rounded-2xl p-8 md:p-10 h-full flex flex-col">
              <div className="space-y-6 flex-1">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-white/40 uppercase tracking-widest2">
                      Address
                    </p>
                    <p className="text-white mt-1">{site.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-white/40 uppercase tracking-widest2">
                      Hours
                    </p>
                    <p className="text-white mt-1">{site.hoursLabel}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-white/40 uppercase tracking-widest2">
                      Phone
                    </p>
                    <p className="text-white mt-1">{site.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-white/40 uppercase tracking-widest2">
                      Email
                    </p>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-white mt-1 hover:text-gold transition-colors block"
                    >
                      {site.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 mt-8 pt-8 border-t border-white/[0.08]">
                <a
                  href={`https://wa.me/${site.whatsapp.replace(/[^\d]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient text-[#1a1305] text-sm font-medium px-5 py-3 hover:brightness-110 transition-all"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="h-11 w-11 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/50 transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href={site.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="h-11 w-11 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-gold hover:border-gold/50 transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={0.1}>
            <div className="rounded-2xl overflow-hidden h-full min-h-[360px] border border-white/[0.08] grayscale hover:grayscale-0 transition-all duration-700">
              <iframe
                title="Nu Restaurant location map"
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 360 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

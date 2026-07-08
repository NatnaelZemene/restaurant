"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/shared/reveal";

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 bg-base overflow-hidden">
      <div className="container-luxury grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-black/20">
              <img
                src="/images/we.png"
                alt="The team behind Nu Restaurant"
                className="w-full h-auto object-contain block"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-transparent to-transparent pointer-events-none" />
            </div>

          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow mb-4">About Nu Restaurant</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="heading-display text-3xl md:text-5xl font-medium leading-[1.1]">
              Nourishment for body and mind, rooted in Ethiopian tradition
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-white/60 leading-relaxed">
              The name <span className="text-gold">Nu</span> carries a deliberate
              meaning — an aspiration to nourish both body and mind while
              celebrating Ethiopia and the spirit of Ethiopianism. In the heart
              of Gondar, Nu Restaurant brings together authentic Ethiopian
              dishes and international favorites, reconnecting nutrition with
              the wisdom of traditional culinary heritage.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-4 text-white/60 leading-relaxed">
              Every dish is prepared to honor that heritage — thoughtfully
              cooked, generously served, and presented with the same care the
              team brings to every guest who walks through the door.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="border-l border-gold/30 pl-5">
                <p className="font-display text-2xl text-white">Open Daily</p>
                <p className="text-xs text-white/40 mt-1 uppercase tracking-wide">
                  11:00 AM – 11:00 PM
                </p>
              </div>
              <div className="border-l border-gold/30 pl-5">
                <p className="font-display text-2xl text-white">Gondar</p>
                <p className="text-xs text-white/40 mt-1 uppercase tracking-wide">
                  Ethiopia
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

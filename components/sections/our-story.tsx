"use client";

import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const milestones = [
  {
    label: "The Idea",
    title: "A name with a purpose",
    text: "Nu was chosen to carry a clear intention: nourish the body and the mind, and celebrate Ethiopian identity through food.",
  },
  {
    label: "The Kitchen",
    title: "Tradition meets craft",
    text: "Recipes drawn from Ethiopian culinary heritage, prepared with care and served the way family meals are meant to be shared.",
  },
  {
    label: "The Table",
    title: "A home in Gondar",
    text: "Today, Nu Restaurant is a gathering place in Gondar — for locals, families, and travelers discovering the city's history.",
  },
  {
    label: "Today",
    title: "A growing reputation",
    text: "Rated 4.8 stars by guests on Google, Nu continues to welcome the city with the same hospitality it opened its doors with.",
  },
];

export function OurStory() {
  return (
    <section id="story" className="relative py-28 md:py-36 bg-card/40">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Our Story"
          title="How Nu came to the table"
          description="A brief history — a real sequence worth telling in order."
        />

        <div className="mt-20 relative max-w-3xl mx-auto">
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent md:-translate-x-1/2" />

          <div className="space-y-16">
            {milestones.map((m, i) => {
              const isEven = i % 2 === 0;
              return (
                <Reveal key={m.label} delay={i * 0.05}>
                  <div
                    className={`relative flex flex-col md:flex-row items-start gap-6 ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    <div className="absolute left-0 md:left-1/2 top-1.5 -translate-x-1/2 h-3 w-3 rounded-full bg-gold shadow-gold" />

                    <div
                      className={`pl-10 md:pl-0 md:w-1/2 ${
                        isEven ? "md:pr-14 md:text-right" : "md:pl-14"
                      }`}
                    >
                      <span className="eyebrow">{m.label}</span>
                      <h3 className="font-display text-2xl text-white mt-2">
                        {m.title}
                      </h3>
                      <p className="text-white/50 text-sm mt-3 leading-relaxed">
                        {m.text}
                      </p>
                    </div>
                    <div className="hidden md:block md:w-1/2" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

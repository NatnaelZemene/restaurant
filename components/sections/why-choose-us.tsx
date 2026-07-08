"use client";

import { ChefHat, Users, Leaf, Coffee } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";

const pillars = [
  {
    icon: ChefHat,
    title: "Authentic Recipes",
    text: "Dishes rooted in Ethiopian culinary heritage, prepared with traditional technique.",
  },
  {
    icon: Leaf,
    title: "Quality Ingredients",
    text: "Fresh, thoughtfully sourced ingredients in every plate that leaves the kitchen.",
  },
  {
    icon: Users,
    title: "Family Hospitality",
    text: "A warm, welcoming atmosphere built for families, friends, and travelers alike.",
  },
  {
    icon: Coffee,
    title: "Coffee Ceremony",
    text: "A genuine Ethiopian coffee ceremony, unhurried and rich in tradition.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative py-28 md:py-36 bg-base">
      <div className="container-luxury">
        <SectionHeading eyebrow="Why Choose Us" title="What guests come back for" />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="group relative h-full rounded-2xl bg-card border border-white/[0.06] p-8 hover:border-gold/30 transition-colors duration-500">
                <div className="h-12 w-12 rounded-full bg-gold-gradient-soft border border-gold/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <p.icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg text-white">{p.title}</h3>
                <p className="text-sm text-white/50 mt-2 leading-relaxed">
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

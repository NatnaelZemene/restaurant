"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { signatureDishes } from "@/lib/data/dishes";

export function SignatureDishes() {
  return (
    <section className="relative py-28 md:py-36 bg-base">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="From Our Kitchen"
          title="Signature Dishes"
          description="A short list of the plates our guests ask for by name."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {signatureDishes.map((dish, i) => (
            <Reveal key={dish.id} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group relative rounded-2xl overflow-hidden bg-card border border-white/[0.06] hover:border-gold/30 transition-colors duration-500"
              >
                <div className="relative h-72 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-luxury group-hover:scale-110"
                    style={{ backgroundImage: `url(${dish.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
                </div>
                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-xl text-white">{dish.name}</h3>
                    <span className="font-display text-gold text-lg shrink-0">
                      {dish.price}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-white/50 leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

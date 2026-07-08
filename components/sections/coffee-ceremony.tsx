"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";

const steps = [
  {
    title: "Roasting",
    text: "Green coffee beans are roasted fresh over open flame, filling the room with aroma.",
  },
  {
    title: "Grinding",
    text: "The roasted beans are hand-ground, releasing the full character of the coffee.",
  },
  {
    title: "Brewing",
    text: "Ground coffee is brewed in a traditional jebena and served in three rounds.",
  },
];

export function CoffeeCeremony() {
  return (
    <section id="coffee-ceremony" className="relative py-28 md:py-36 bg-base overflow-hidden">
      {/* ── Cinematic Crossfade Background ── */}
      <div className="absolute inset-0 z-0 bg-[#0a0705]">
        {/* Images Wrapper - reduced opacity for ambient feel */}
        <div className="absolute inset-0 opacity-[0.35]">
          <motion.div
            className="absolute inset-0"
            animate={{ opacity: [1, 1, 0, 0, 1] }}
            transition={{ 
              duration: 18, // 7s hold + 2s dissolve + 7s hold + 2s dissolve
              times: [0, 7/18, 9/18, 16/18, 1],
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <Image
              src="/images/coffee-bg-1.jpg"
              alt="Traditional Ethiopian Coffee Ceremony Preparation"
              fill
              className="object-cover object-[75%_center] md:object-center"
              priority
            />
          </motion.div>
          <motion.div
            className="absolute inset-0"
            animate={{ opacity: [0, 0, 1, 1, 0] }}
            transition={{ 
              duration: 18, 
              times: [0, 7/18, 9/18, 16/18, 1],
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <Image
              src="/images/coffee-bg-2.jpg"
              alt="Pouring Traditional Ethiopian Coffee"
              fill
              className="object-cover object-[center_25%] md:object-center"
            />
          </motion.div>
        </div>

        {/* ── Dark Gradient Overlays for Text Legibility ── */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0705] via-transparent to-[#0a0705]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0705]/80 via-transparent to-[#0a0705]/80" />
      </div>

      <div className="relative z-10 container-luxury">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow mb-4">A Ritual, Not Just a Drink</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="heading-display text-3xl md:text-5xl font-medium leading-[1.1]">
              The Ethiopian Coffee Ceremony
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-white/60 leading-relaxed text-lg">
              Coffee was discovered in Ethiopia, and the ceremony that
              surrounds it remains one of the country&rsquo;s most cherished
              traditions. At Nu Restaurant, it&rsquo;s prepared slowly and
              shared generously — an invitation to sit a while longer.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -4 }}
                className="relative rounded-2xl glass-card p-8 h-full bg-[#1a1305]/40 border border-[#c9a84c]/10"
              >
                <span className="font-display text-5xl text-[#c9a84c]/30">
                  0{i + 1}
                </span>
                <h3 className="font-display text-xl text-white mt-4">
                  {step.title}
                </h3>
                <p className="text-sm text-white/50 mt-3 leading-relaxed">
                  {step.text}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

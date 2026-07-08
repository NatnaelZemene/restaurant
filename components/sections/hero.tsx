"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/data/site";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-end overflow-hidden bg-base"
    >
      {/* Background video layer */}
      <div className="absolute inset-0">
        <motion.video
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
          src="/video/hero_loop.mp4"
          poster="/video/hero-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-gradient-to-t from-base via-base/70 to-base/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-base/60 via-transparent to-base/60" />
      </div>

      {/* Floating ember particles for ambient luxury motion */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-gold/60"
            style={{
              left: `${12 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container-luxury pb-24 md:pb-28 pt-40">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow mb-6"
        >
          {site.nameAmharic} &middot; Gondar, Ethiopia
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="heading-display text-[2.5rem] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium max-w-4xl"
        >
          {site.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-white/60 text-base md:text-xl max-w-xl font-body leading-relaxed"
        >
          {site.subtagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Button
            size="lg"
            onClick={() =>
              document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Menu
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() =>
              document
                .querySelector("#reservation")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Reserve Table
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-[10px] uppercase tracking-widest2">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}

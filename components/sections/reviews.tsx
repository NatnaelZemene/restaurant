"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { reviews } from "@/lib/data/reviews";
import { site } from "@/lib/data/site";

export function Reviews() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % reviews.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="reviews" className="relative py-28 md:py-36 bg-card/40">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Guest Reviews"
          title="What Our Guests Say"
          description={`${site.googleRating}★ average across ${site.googleReviewCount} Google reviews — the quotes below are illustrative and stand in for real, permission-cleared testimonials.`}
        />

        <div className="mt-16 max-w-2xl mx-auto">
          <div className="relative h-64 md:h-56">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 glass-card rounded-2xl p-8 md:p-10 flex flex-col items-center justify-center text-center"
              >
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="font-display text-xl md:text-2xl text-white leading-snug">
                  &ldquo;{reviews[index].quote}&rdquo;
                </p>
                <p className="mt-5 text-sm text-white/40 uppercase tracking-widest2">
                  {reviews[index].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-2 mt-8">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Show review ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index ? "w-8 bg-gold" : "w-1.5 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

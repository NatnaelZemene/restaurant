"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";

const galleryImages = [
  { src: "/images/gallery-13.png", alt: "Traditional Injera platter with various stews", tall: true },
  { src: "/images/gallery-11.jpg", alt: "Signature pasta dish with fresh greens", tall: false },
  { src: "/images/gallery-12.png", alt: "Fresh Ethiopian salad", tall: false },
  { src: "/images/coffee-bg-1.jpg", alt: "Traditional Ethiopian coffee ceremony", tall: true },
  { src: "/images/coffee-bg-2.jpg", alt: "Pouring traditional Ethiopian coffee", tall: false },
  { src: "/images/gallery-06.jpg", alt: "Guests dining together", tall: true },
  { src: "/images/gallery-07.jpg", alt: "Close-up of a signature dish", tall: false },
  { src: "/images/gallery-08.jpg", alt: "Dessert display", tall: false },
  { src: "/images/gallery-09.jpg", alt: "Guests enjoying a meal", tall: true },
];

export function FoodGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const next = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % galleryImages.length));
  const prev = () =>
    setActiveIndex((i) =>
      i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length
    );

  return (
    <section id="gallery" className="relative py-28 md:py-36 bg-base">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="Gallery"
          title="A Taste of Nu, In Pictures"
        />

        <div className="mt-16 columns-1 sm:columns-2 lg:columns-3 gap-5 [&>*]:mb-5">
          {galleryImages.map((img, i) => (
            <Reveal key={img.src} delay={(i % 3) * 0.08}>
              <motion.button
                onClick={() => setActiveIndex(i)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`relative w-full block overflow-hidden rounded-2xl group ${
                  img.tall ? "aspect-[3/4]" : "aspect-square"
                }`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url(${img.src})` }}
                />
                <div className="absolute inset-0 bg-base/0 group-hover:bg-base/20 transition-colors duration-500" />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/[0.06] rounded-2xl" />
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-base/95 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={close}
          >
            <button
              onClick={close}
              className="absolute top-6 right-6 text-white/60 hover:text-gold transition-colors"
              aria-label="Close"
            >
              <X className="h-7 w-7" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 md:left-10 text-white/60 hover:text-gold transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 md:right-10 text-white/60 hover:text-gold transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-8 w-8" />
            </button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full aspect-[4/5] rounded-2xl overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${galleryImages[activeIndex].src})` }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

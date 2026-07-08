"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Info } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { menuCategories } from "@/lib/data/menu";

export function MenuExperience() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return menuCategories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter((item) => {
          if (!q) return true;
          return (
            item.name.toLowerCase().includes(q) ||
            item.description.toLowerCase().includes(q)
          );
        }),
      }))
      .filter((cat) => (q ? cat.items.length > 0 : true));
  }, [query]);

  const visibleCategories = query ? filtered : filtered.filter((c) => c.id === activeCategory);

  return (
    <section id="menu" className="relative py-28 md:py-36 bg-card/40">
      <div className="container-luxury">
        <SectionHeading
          eyebrow="The Menu"
          title="A Premium Digital Menu"
          description="Browse by category or search for a dish."
        />

        <div className="mt-10 max-w-md mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/30" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search the menu…"
              className="w-full rounded-full bg-white/[0.04] border border-white/10 pl-11 pr-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-gold/50 transition-colors"
            />
          </div>
        </div>

        <div className="mt-10 flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar sticky top-[64px] md:top-[76px] z-30 bg-card/60 backdrop-blur-xl -mx-6 px-6 md:mx-0 md:px-0 md:bg-transparent md:backdrop-blur-none md:static">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setQuery("");
                setActiveCategory(cat.id);
              }}
              className={`relative shrink-0 rounded-full px-5 py-2.5 text-xs md:text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                activeCategory === cat.id && !query
                  ? "text-[#1a1305]"
                  : "text-white/60 hover:text-white border border-white/10"
              }`}
            >
              {activeCategory === cat.id && !query && (
                <motion.span
                  layoutId="category-pill"
                  className="absolute inset-0 rounded-full bg-gold-gradient"
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
              <span className="relative z-10">{cat.label}</span>
            </button>
          ))}
        </div>



        <div className="mt-8 space-y-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={query ? "search" : activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-14"
            >
              {visibleCategories.length === 0 && (
                <p className="text-center text-white/40 text-sm py-12">
                  No dishes match your search.
                </p>
              )}
              {visibleCategories.map((cat) => (
                <div key={cat.id}>
                  {query && (
                    <h3 className="font-display text-xl text-gold mb-5">
                      {cat.label}
                    </h3>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
                    {cat.items.map((item) => (
                      <div
                        key={item.id}
                        className="group flex items-start justify-between gap-4 py-4 border-b border-white/[0.06]"
                      >
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className="font-display text-lg text-white group-hover:text-gold transition-colors">
                              {item.name}
                            </h4>
                            {item.tags?.map((tag) => (
                              <span
                                key={tag}
                                className="text-[9px] uppercase tracking-widest2 text-gold/80 border border-gold/25 rounded-full px-2 py-0.5"
                              >
                                {tag}
                              </span>
                            ))}

                          </div>
                          <p className="text-sm text-white/45 mt-1.5 leading-relaxed max-w-md">
                            {item.description}
                          </p>

                        </div>
                        <span className="font-display text-gold shrink-0 pt-1">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

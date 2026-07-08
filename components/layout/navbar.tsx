"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, site } from "@/lib/data/site";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-luxury ${
        scrolled
          ? "bg-base/80 backdrop-blur-xl border-b border-white/[0.06] py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-luxury flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.png"
            alt={`${site.name} logo`}
            className="h-9 w-9 md:h-10 md:w-10 object-contain"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl md:text-2xl tracking-wide text-white group-hover:text-gold transition-colors duration-300">
              {site.name}
            </span>
            <span className="text-[10px] md:text-xs text-gold/70 tracking-widest2 uppercase mt-0.5">
              {site.nameAmharic}
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm text-white/70 hover:text-white transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-gradient transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button size="default" onClick={() => {
            document.querySelector("#reservation")?.scrollIntoView({ behavior: "smooth" });
          }}>
            Reserve a Table
          </Button>
        </div>

        <button
          className="lg:hidden text-white"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden bg-base/95 backdrop-blur-xl border-b border-white/[0.06]"
          >
            <div className="container-luxury flex flex-col gap-5 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                    document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-lg text-white/80 hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={() => {
                  setOpen(false);
                  document.querySelector("#reservation")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="mt-2 w-full"
              >
                Reserve a Table
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

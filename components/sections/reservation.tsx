"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, User, Phone, Calendar, Clock, Users2, Utensils } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/shared/reveal";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function Reservation() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // NOTE: no backend is wired up yet — this simulates a submission so the
    // owner can see the intended flow. Connect this to email/SMS/booking
    // system (or a simple API route) before launch.
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section id="reservation" className="relative overflow-hidden">
      {/* ── Full-bleed background photo ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/reservation-bg.jpg"
          alt="Guests enjoying a meal at Nu Restaurant"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Layered gradient overlays for depth + readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
        {/* Warm gold tint at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0d0900]/90 to-transparent" />
      </div>

      {/* ── Decorative top border ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/60 to-transparent z-10" />

      {/* ── Floating ambient orbs ── */}
      <motion.div
        animate={{ y: [0, -18, 0], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[8%] w-72 h-72 rounded-full bg-[#c9a84c]/10 blur-3xl pointer-events-none z-0"
      />
      <motion.div
        animate={{ y: [0, 14, 0], opacity: [0.1, 0.22, 0.1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-24 right-[6%] w-96 h-96 rounded-full bg-[#c9a84c]/8 blur-3xl pointer-events-none z-0"
      />

      {/* ── Main content ── */}
      <div className="relative z-10 py-28 md:py-40 px-6">
        {/* Header block */}
        <div className="text-center mb-16">
          {/* Eyebrow with decorative lines */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-5"
          >
            <span className="block h-px w-16 bg-gradient-to-r from-transparent to-[#c9a84c]/70" />
            <span className="flex items-center gap-2 text-[#c9a84c] text-xs uppercase tracking-[0.3em] font-medium">
              <Utensils className="h-3 w-3" />
              Reserve Your Table
              <Utensils className="h-3 w-3" />
            </span>
            <span className="block h-px w-16 bg-gradient-to-l from-transparent to-[#c9a84c]/70" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-tight tracking-tight"
          >
            Join Us at{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a84c] via-[#f0d080] to-[#c9a84c]">
              Nu
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-white/60 text-lg max-w-md mx-auto leading-relaxed"
          >
            {"Tell us when you'd like to visit, and we'll take care of the rest."}
          </motion.p>
        </div>

        {/* Form card */}
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: "rgba(10, 8, 4, 0.65)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "1px solid rgba(201,168,76,0.18)",
                  boxShadow: "0 32px 64px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
                className="rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                {/* Top gold accent line */}
                <div className="md:col-span-2 -mt-4 mb-2">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-[#c9a84c]/50 to-transparent" />
                </div>

                <Reveal className="md:col-span-1">
                  <label className="text-xs uppercase tracking-[0.2em] text-white/40 mb-2.5 flex items-center gap-2">
                    <User className="h-3.5 w-3.5 text-[#c9a84c]/70" /> Full Name
                  </label>
                  <Input required placeholder="Your name" />
                </Reveal>

                <Reveal className="md:col-span-1" delay={0.04}>
                  <label className="text-xs uppercase tracking-[0.2em] text-white/40 mb-2.5 flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-[#c9a84c]/70" /> Phone Number
                  </label>
                  <Input required type="tel" placeholder="+251 ..." />
                </Reveal>

                <Reveal className="md:col-span-1" delay={0.08}>
                  <label className="text-xs uppercase tracking-[0.2em] text-white/40 mb-2.5 flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5 text-[#c9a84c]/70" /> Date
                  </label>
                  <Input required type="date" />
                </Reveal>

                <Reveal className="md:col-span-1" delay={0.12}>
                  <label className="text-xs uppercase tracking-[0.2em] text-white/40 mb-2.5 flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5 text-[#c9a84c]/70" /> Time
                  </label>
                  <Input required type="time" />
                </Reveal>

                <Reveal className="md:col-span-1" delay={0.16}>
                  <label className="text-xs uppercase tracking-[0.2em] text-white/40 mb-2.5 flex items-center gap-2">
                    <Users2 className="h-3.5 w-3.5 text-[#c9a84c]/70" /> Guests
                  </label>
                  <Select required defaultValue="">
                    <option value="" disabled>
                      Select party size
                    </option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? "Guest" : "Guests"}
                      </option>
                    ))}
                    <option value="9+">9+ Guests</option>
                  </Select>
                </Reveal>

                <div className="hidden md:block md:col-span-1" />

                <Reveal className="md:col-span-2" delay={0.24}>
                  <label className="text-xs uppercase tracking-[0.2em] text-white/40 mb-2.5 block">
                    Special Request
                  </label>
                  <Textarea rows={3} placeholder="Anniversary, dietary needs, seating preference…" />
                </Reveal>

                <Reveal className="md:col-span-2" delay={0.3}>
                  <Button type="submit" size="lg" className="w-full" disabled={loading}>
                    {loading ? "Sending…" : "Confirm Reservation"}
                  </Button>
                </Reveal>

                {/* Bottom note */}
                <Reveal className="md:col-span-2" delay={0.35}>
                  <p className="text-center text-white/25 text-xs tracking-wide">
                    Our team will call to confirm within 24 hours
                  </p>
                </Reveal>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  background: "rgba(10, 8, 4, 0.65)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: "1px solid rgba(201,168,76,0.18)",
                  boxShadow: "0 32px 64px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
                className="rounded-3xl p-16 flex flex-col items-center text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 14 }}
                  className="h-20 w-20 rounded-full flex items-center justify-center mb-6"
                  style={{
                    background: "linear-gradient(135deg, #c9a84c, #f0d080)",
                    boxShadow: "0 0 40px rgba(201,168,76,0.4)",
                  }}
                >
                  <Check className="h-9 w-9 text-[#1a1305]" strokeWidth={2.5} />
                </motion.div>
                <h3 className="font-display text-3xl text-white">
                  Reservation Received
                </h3>
                <div className="mt-3 h-px w-16 mx-auto bg-gradient-to-r from-transparent via-[#c9a84c]/60 to-transparent" />
                <p className="text-white/50 mt-4 max-w-sm text-base leading-relaxed">
                  Thank you — our team will confirm your table shortly by
                  phone.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-sm text-[#c9a84c] hover:text-[#f0d080] transition-colors underline underline-offset-4"
                >
                  Book another table
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* ── Decorative bottom border ── */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c9a84c]/40 to-transparent z-10" />
    </section>
  );
}

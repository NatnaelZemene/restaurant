# Nu Restaurant (ኑ ምግብ ቤት) — Website

A premium, dark-themed marketing website concept for Nu Restaurant in
Gondar, Ethiopia. Built with Next.js 15 (App Router), React 19,
TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

> Note: `npm run build` needs normal internet access to fetch Playfair
> Display and Inter from Google Fonts via `next/font/google`. It was built
> and verified in a sandboxed environment without access to
> fonts.googleapis.com, so that one network call was stubbed out locally
> just to confirm the rest of the app compiles cleanly — the real font
> imports are back in `app/layout.tsx` and will resolve normally on any
> machine with standard internet access (a laptop, CI, or Vercel).

## What's real vs. placeholder — read this before presenting to the client

This was built from public research plus the menu photos supplied
directly by you. Here's exactly what's confirmed and what still needs the
owner's input:

**Confirmed / real:**
- Business description, "Nu" name meaning, and tone — from nu-restaurant.com
- Hours (Mon–Sun, 11:00 AM–11:00 PM) and email — from nu-restaurant.com
- Google rating (4.8★, 30 reviews) — from Google's business listing
- Full "Fasting Menu" (Soup, Salads, Pasta, Hot Drinks, Ethiopian Dishes,
  Juices, Snack Menu, Local Beer & Traditional Drinks) — transcribed
  directly from your English menu photo. See `lib/data/menu.ts`.
- Amharic drinks/snacks poster items — transcribed and mostly confirmed;
  a handful of items are flagged `verified: false` with a `note` where the
  small print in the photo wasn't fully legible. These show a small
  "Confirm" marker in the live Menu section — search `verified: false` in
  `lib/data/menu.ts` to find every one.

**Still placeholder — needs the owner:**
- Phone number, WhatsApp number, exact street address (`lib/data/site.ts`)
- Live social media links, if different from the guesses in `site.ts`
- Every photo (`public/images/` is empty — see the README in that folder
  for the full shot list and exact filenames expected)
- The testimonial quotes in `lib/data/reviews.ts` are illustrative, not
  real customer quotes — swap in permission-cleared reviews before launch

## Project structure

```
app/                  Root layout, global styles, home page
components/
  layout/              Navbar, Footer
  sections/            One file per homepage section (Hero, Menu, etc.)
  shared/              Reveal (scroll animation), SectionHeading, ArchDivider
  ui/                  Button, Input, Textarea, Select
lib/
  data/                site.ts, menu.ts, dishes.ts, reviews.ts — all content
  utils.ts             Tailwind class merge helper
public/images/         Empty — see README.md inside for the shot list
```

## Design notes

- Palette, type (Playfair Display + Inter), and dark luxury direction
  follow the brief exactly.
- The signature visual motif is a thin repeating arch line (see
  `components/shared/arch-divider.tsx`) — a nod to Fasil Ghebbi, Gondar's
  17th-century castle complex, used as the section divider instead of a
  generic gold rule.
- The reservation form is front-end only right now (no email/SMS/backend
  wired up) — it simulates a successful submission so the flow can be
  demoed. Connect it to a real notification method before launch.

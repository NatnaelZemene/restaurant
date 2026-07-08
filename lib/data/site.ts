/**
 * SITE DATA — SOURCING NOTES FOR THE CLIENT MEETING
 * ----------------------------------------------------------------------------
 * Fields marked VERIFIED were confirmed from Nu Restaurant's public website
 * (nu-restaurant.com) and Google's business listing for "Nu Restaurant Gondar
 * ኑ ምግብ ቤት" at the time this was built.
 *
 * Fields marked PLACEHOLDER could not be confirmed from public sources and
 * MUST be replaced with real details from the owner before launch:
 *   - Direct phone number
 *   - Exact street address / landmark directions
 *   - WhatsApp number
 *   - Live social handles (Instagram/TikTok/Facebook) if different from below
 *
 * Menu content (lib/data/menu.ts) has since been transcribed directly from
 * three real menu photos supplied by the client — see the sourcing note at
 * the top of that file for which items are fully confirmed vs. flagged for
 * a quick double-check with the owner.
 * ----------------------------------------------------------------------------
 */

export const site = {
  name: "Nu Restaurant",
  nameAmharic: "ኑ ምግብ ቤት",
  tagline: "Experience Authentic Ethiopian Dining",
  subtagline:
    "Where Ethiopian tradition meets modern hospitality in the heart of Gondar.",

  // VERIFIED — from nu-restaurant.com
  city: "Gondar, Ethiopia",
  hoursLabel: "Monday – Sunday, 11:00 AM – 11:00 PM",
  email: "info@nu-restaurant.com",
  googleRating: 4.8,
  googleReviewCount: 30,

  // PLACEHOLDER — confirm with owner before launch
  phone: "+251961612461",
  whatsapp: "+251961612461",
  address: "Piassa Area, Gondar, Ethiopia (exact address to be confirmed)",
  mapsQuery: "Nu Restaurant Gondar",
  instagram: "https://instagram.com/nurestaurant",
  tiktok: "https://tiktok.com/@nurestaurant",
  facebook: "https://facebook.com/nurestaurant",
} as const;

export const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Our Story", href: "#story" },
  { label: "Gallery", href: "#gallery" },
  { label: "Coffee Ceremony", href: "#coffee-ceremony" },
  { label: "Reviews", href: "#reviews" },
  { label: "Reservations", href: "#reservation" },
  { label: "Contact", href: "#contact" },
];

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#090909",
        card: "#121212",
        cardhover: "#161616",
        line: "rgba(255,255,255,0.08)",
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E8C766",
          dark: "#B8860B",
        },
        beige: "#E8DCC8",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #E8C766 0%, #D4AF37 45%, #B8860B 100%)",
        "gold-gradient-soft": "linear-gradient(135deg, rgba(212,175,55,0.16) 0%, rgba(212,175,55,0.02) 100%)",
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(212,175,55,0.35), 0 8px 40px -8px rgba(212,175,55,0.35)",
        "gold-lg": "0 20px 60px -15px rgba(212,175,55,0.25)",
        soft: "0 20px 60px -20px rgba(0,0,0,0.6)",
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;

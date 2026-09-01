import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: "#FAF2F3",
          100: "#F5E5E7",
          200: "#EBC7CC",
          300: "#DC9AA4",
          400: "#C76676",
          500: "#A93E51",
          600: "#8B2639",
          700: "#6B1D2F",
          800: "#4A0E17",
          900: "#33070E",
          950: "#1A0307",
        },
        gold: {
          50: "#FDFBF4",
          100: "#F9F3DC",
          200: "#F2E4B5",
          300: "#E8D186",
          400: "#DDB954",
          500: "#D4AF37",
          600: "#B8860B",
          700: "#916908",
          800: "#6E4F06",
          900: "#4D3604",
        },
        ivory: {
          50: "#FFFDF9",
          100: "#FAF6F0",
          200: "#F5EBE6",
          300: "#EAE0D6",
          400: "#D5C7B8",
          500: "#BBA996",
        },
      },
      fontFamily: {
        serif: ["var(--font-cinzel)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-outfit)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        gold: "0 4px 20px -2px rgba(212, 175, 55, 0.25)",
        "gold-lg": "0 10px 30px -5px rgba(212, 175, 55, 0.4)",
        maroon: "0 10px 30px -5px rgba(74, 14, 23, 0.3)",
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.03)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        shimmer: "shimmer 2s infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        marquee: "marquee 60s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;

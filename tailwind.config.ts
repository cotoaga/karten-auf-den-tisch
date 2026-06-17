import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        primary: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        "cotoaga-green": "#00A86B",
        "cotoaga-blue": "#0088FF",
        "cotoaga-cyan": "#00D4FF",
        "cotoaga-gold": "#E9B320",
        "cotoaga-sand": "#EB9929",
        "cotoaga-white": "#FAFBFB",
        "cotoaga-smoke": "#E0E0E0",
        "cotoaga-grey-light": "#8A8A8A",
        "cotoaga-grey": "#4A4A4A",
        "cotoaga-grey-dark": "#2D2D2D",
        "cotoaga-dark-marine": "#16213E",
        "cotoaga-deep-sky": "#191A2E",
        /* Ampel — sanctioned game mechanic colors (semantic, not decorative) */
        "ampel-green": "#00A86B",
        "ampel-yellow": "#E9B320",
        "ampel-red": "#C0392B",
      },
      borderRadius: {
        DEFAULT: "0",
        none: "0",
        sm: "0",
        md: "0",
        lg: "0",
        xl: "0",
        "2xl": "0",
        "3xl": "0",
        full: "9999px", /* only for circular elements like Ampel dots */
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "48px",
        "3xl": "64px",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(0,0,0,0.05)",
        hover: "0 4px 16px rgba(0,168,107,0.10)",
        "dark-hover": "0 4px 16px rgba(235,153,41,0.15)",
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(0.4,0,0.2,1)",
      },
    },
  },
  plugins: [],
} satisfies Config;

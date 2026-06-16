import type { Config } from "tailwindcss";

// Design tokens — see docs/DESIGN_SYSTEM.md. Reference these names, not raw hex.
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#0B0E14",
        surface: "#141922",
        "surface-2": "#1B212C",
        hairline: "#1E2530",
        strong: "#232A36",
        ink: "#E8EDF4", // text-primary
        muted: "#8A94A6", // text-secondary
        faint: "#5A6376", // text-tertiary
        up: "#2BD17E",
        down: "#FF5C5C",
        learn: "#8B7CF6",
        streak: "#F5A623",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      borderRadius: { md: "8px", lg: "12px", xl: "16px" },
    },
  },
  plugins: [],
};

export default config;

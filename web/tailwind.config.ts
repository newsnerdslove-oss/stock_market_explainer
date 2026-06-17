import type { Config } from "tailwindcss";

// Design tokens — see docs/DESIGN_SYSTEM.md. Reference these names, not raw hex.
const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Channel-based vars (set in globals.css per theme) so every utility —
        // including opacity modifiers like bg-up/10 — flows through the tokens.
        canvas: "rgb(var(--bg-canvas) / <alpha-value>)",
        surface: "rgb(var(--bg-surface) / <alpha-value>)",
        "surface-2": "rgb(var(--bg-surface-2) / <alpha-value>)",
        hairline: "rgb(var(--border-hairline) / <alpha-value>)",
        strong: "rgb(var(--border-strong) / <alpha-value>)",
        ink: "rgb(var(--text-primary) / <alpha-value>)",
        muted: "rgb(var(--text-secondary) / <alpha-value>)",
        faint: "rgb(var(--text-tertiary) / <alpha-value>)",
        up: "rgb(var(--up) / <alpha-value>)",
        down: "rgb(var(--down) / <alpha-value>)",
        learn: "rgb(var(--learn) / <alpha-value>)",
        streak: "rgb(var(--streak) / <alpha-value>)",
      },
      fontFamily: {
        // The CSS vars are set by next/font in app/layout.tsx; the fallbacks keep
        // text readable before the webfont swaps in.
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      borderRadius: { md: "8px", lg: "12px", xl: "16px" },
    },
  },
  plugins: [],
};

export default config;

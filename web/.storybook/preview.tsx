import type { Preview, Decorator } from "@storybook/nextjs-vite";
import React from "react";
// Tailwind + the app's design tokens (the :root dark theme is the default; the
// `.light` class swaps it). Importing globals.css is what makes the token utilities
// (bg-surface, border-strong, text-up …) and the dark canvas render in Storybook.
import "../app/globals.css";
import { initialize, mswLoader } from "msw-storybook-addon";
import { handlers } from "./msw-handlers";

// Start the MSW worker so components' /api/* fetches resolve to fixtures. Guarded
// because design-sync bundles this module as a preview decorator where MSW's worker
// is a stub (no real Service Worker) — the init throw must not break the decorator.
try {
  initialize({ onUnhandledRequest: "bypass" });
} catch {
  /* no Service Worker (e.g. design-sync preview bundle) — fine */
}

// Stories render on the right surface for their design system: the Stax "Warm
// Campus" page for kit stories (parameters.staxKit), else the trading-app canvas.
// The theme toolbar flips light/dark for both (`.light` for the trading tokens,
// `.dark` for the Stax tokens).
const withCanvas: Decorator = (Story, ctx) => {
  const dark = ctx.globals.theme === "dark";
  if (ctx.parameters?.staxKit) {
    return (
      <div className={dark ? "dark" : ""} style={{ minHeight: "100vh", padding: 24, background: "var(--stax-page)", color: "var(--stax-ink)", fontFamily: "var(--stax-font)" }}>
        <Story />
      </div>
    );
  }
  return (
    <div className={`${dark ? "" : "light"} bg-canvas text-ink font-sans`} style={{ minHeight: "100vh", padding: 24 }}>
      <Story />
    </div>
  );
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: { disable: true }, // the canvas decorator paints the background
    a11y: { test: "todo" },
    msw: { handlers }, // default API mocks; override per-story via parameters.msw.handlers
  },
  // A toolbar toggle to preview the light theme (flips the `.light` token set).
  globalTypes: {
    theme: {
      description: "Design-token theme",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
        dynamicTitle: true,
      },
    },
  },
  loaders: [mswLoader],
  decorators: [withCanvas],
};

export default preview;

import type { Preview, Decorator } from "@storybook/nextjs-vite";
import React from "react";
// Tailwind + the app's design tokens (the :root dark theme is the default; the
// `.light` class swaps it). Importing globals.css is what makes the token utilities
// (bg-surface, border-strong, text-up …) and the dark canvas render in Storybook.
import "../app/globals.css";

// Every story renders on the app's dark canvas, in the sans font stack, with room
// to breathe — matching how these components appear in the product.
const withCanvas: Decorator = (Story, ctx) => {
  const theme = ctx.globals.theme === "light" ? "light" : "";
  return (
    <div className={`${theme} bg-canvas text-ink font-sans`} style={{ minHeight: "100vh", padding: 24 }}>
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
  },
  // A toolbar toggle to preview the light theme (flips the `.light` token set).
  globalTypes: {
    theme: {
      description: "Design-token theme",
      defaultValue: "dark",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: [
          { value: "dark", title: "Dark" },
          { value: "light", title: "Light" },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [withCanvas],
};

export default preview;

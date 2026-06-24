import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../components/**/*.stories.@(ts|tsx)",
  ],
  // Kept minimal for now: docs + a11y. The Vitest/browser-test, Chromatic, and MCP
  // addons that `storybook init` added are left installed but unwired so they don't
  // touch the app's existing `vitest` suite.
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  framework: "@storybook/nextjs-vite",
};
export default config;

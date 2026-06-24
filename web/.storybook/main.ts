import type { StorybookConfig } from "@storybook/nextjs-vite";

const config: StorybookConfig = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../components/**/*.stories.@(ts|tsx)",
  ],
  // docs + a11y, plus the MCP server addon (exposes Storybook to AI agents at
  // /mcp while `storybook dev` runs). The Vitest/browser-test and Chromatic addons
  // that `storybook init` added stay unwired so they don't touch the app's existing
  // `vitest` 2.1 suite (addon-vitest needs Vitest 3+).
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y", "@storybook/addon-mcp"],
  framework: "@storybook/nextjs-vite",
};
export default config;

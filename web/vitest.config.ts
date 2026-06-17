import { defineConfig } from "vitest/config";
import { resolve } from "node:path";

// Unit tests for the app's pure logic (selection, scoring, readiness, study
// plan, progress aggregation, migrations, spaced repetition). Node env — no DOM;
// component rendering is out of scope. The `@/…` alias mirrors tsconfig paths.
export default defineConfig({
  resolve: {
    alias: { "@": resolve(__dirname, ".") },
  },
  test: {
    environment: "node",
    include: ["lib/**/*.test.ts"],
  },
});

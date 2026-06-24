import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { PatternChart } from "./PatternChart";
import { bullishEngulfing, hammer, doji, shootingStar } from "@/lib/charts/patterns";

// A small, dependency-free SVG candlestick chart (green up / red down, wicks,
// auto-scaled). Static by default; pass `onPick` to make each candle a clickable,
// keyboard-focusable target (the pattern-spotter trainer), with `picked` /
// `correctIndex` drawing highlight boxes after a guess.
const meta = {
  title: "Charts/PatternChart",
  component: PatternChart,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof PatternChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BullishEngulfing: Story = { args: { candles: bullishEngulfing() } };
export const Hammer: Story = { args: { candles: hammer() } };
export const Doji: Story = { args: { candles: doji() } };

// Interactive trainer state: clickable candles, with a wrong pick (red) and the
// correct candle (green) highlighted after a guess.
export const Interactive: Story = {
  args: {
    candles: shootingStar(),
    onPick: fn(),
    picked: 2,
    correctIndex: 4,
  },
};

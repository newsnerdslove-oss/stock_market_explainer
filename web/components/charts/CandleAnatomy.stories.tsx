import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CandleAnatomy } from "./CandleAnatomy";

// A fixed, labeled SVG explainer of a single candlestick (open/close/high/low,
// body, wicks). No props — it's a teaching diagram used inside lessons.
const meta = {
  title: "Charts/CandleAnatomy",
  component: CandleAnatomy,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof CandleAnatomy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

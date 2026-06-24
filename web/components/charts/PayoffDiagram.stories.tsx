import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PayoffDiagram } from "./PayoffDiagram";

// Options payoff-at-expiration diagram: pass position legs, it computes the P/L
// curve, breakevens (zero-crossings), and profit/loss fills.
const meta = {
  title: "Charts/PayoffDiagram",
  component: PayoffDiagram,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof PayoffDiagram>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LongCall: Story = {
  args: {
    title: "Long call · strike 100 @ $5",
    legs: [{ instrument: "call", side: "long", strike: 100, premium: 5, qty: 1 }],
  },
};

export const BullCallSpread: Story = {
  args: {
    title: "Bull call spread · 100/110",
    legs: [
      { instrument: "call", side: "long", strike: 100, premium: 5, qty: 1 },
      { instrument: "call", side: "short", strike: 110, premium: 2, qty: 1 },
    ],
  },
};

export const LongStraddle: Story = {
  args: {
    title: "Long straddle · strike 100",
    legs: [
      { instrument: "call", side: "long", strike: 100, premium: 5, qty: 1 },
      { instrument: "put", side: "long", strike: 100, premium: 5, qty: 1 },
    ],
  },
};

export const CoveredCall: Story = {
  args: {
    title: "Covered call · long 100 shares, short 110 call",
    legs: [
      { instrument: "stock", side: "long", premium: 100, qty: 1 },
      { instrument: "call", side: "short", strike: 110, premium: 4, qty: 1 },
    ],
  },
};

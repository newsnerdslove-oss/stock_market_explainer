import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { within, userEvent } from "storybook/test";
import ResearchChart from "@/components/charts/ResearchChart";
import { patchFetch, seed, tAt } from "@/components/charts/chartFixtures";

// ResearchChart is a live, data-fetching canvas component (TradingView lightweight-
// charts): it fetches /api/candles, polls, draws on a <canvas>, and persists drawings
// + alerts + chart-type in localStorage. To render it in isolation we (a) patch fetch
// to serve deterministic fixtures (works in Storybook AND a backend-less preview, where
// MSW is inert), (b) seed localStorage per variant, and (c) give it a sized container.

const meta = {
  title: "Charts/ResearchChart",
  component: ResearchChart,
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => {
      patchFetch();
      return (
        <div style={{ height: 560, padding: 8 }}>
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof ResearchChart>;

export default meta;
type Story = StoryObj<typeof meta>;

// Out-of-the-box: candlesticks + EMA 9/20 overlays, volume pane, timeframe + drawing toolbars.
export const Default: Story = {
  args: { symbol: "AAPL" },
  beforeEach: () => seed("AAPL", {}),
};

// Pre-loaded annotations: a demand zone (green) + supply zone (red) box, a trend line, and a price alert.
export const SupplyDemandZones: Story = {
  args: { symbol: "AAPL" },
  beforeEach: () =>
    seed("AAPL", {
      drawings: [
        { id: "dz", type: "zone", kind: "demand", color: "#2BD17E", points: [{ time: tAt(55), price: 148 }, { time: tAt(85), price: 145 }] },
        { id: "sz", type: "zone", kind: "supply", color: "#FF5C5C", points: [{ time: tAt(120), price: 159 }, { time: tAt(150), price: 156 }] },
        { id: "tl", type: "trend", color: "#5BA8FF", points: [{ time: tAt(10), price: 145 }, { time: tAt(190), price: 157 }] },
      ],
      alerts: [{ id: "a1", price: 158, above: true, triggered: false, createdAt: 0 }],
    }),
};

// The Heikin-Ashi chart type (persisted via localStorage `chart:type`).
export const HeikinAshi: Story = {
  args: { symbol: "AAPL" },
  beforeEach: () => seed("AAPL", { type: "heikin" }),
};

// Indicator panes are toolbar toggles (React state, not pre-settable), so this variant
// clicks them. Interaction-driven → Storybook-only (skipped in design-sync).
export const WithRsiAndMacd: Story = {
  args: { symbol: "AAPL" },
  beforeEach: () => seed("AAPL", {}),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByRole("button", { name: "RSI" }));
    await userEvent.click(await canvas.findByRole("button", { name: "MACD" }));
  },
};

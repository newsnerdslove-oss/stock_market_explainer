import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import LiveCandleChart from "@/components/charts/LiveCandleChart";
import { genCandles, patchFetch } from "@/components/charts/chartFixtures";

// The simpler live candlestick chart: it takes initialCandles as a prop (renders
// immediately) and polls /api/candles every ~5s to update the latest bar. The
// fetch-patch serves the poll from fixtures; the sized wrapper gives the canvas room.
const meta = {
  title: "Charts/LiveCandleChart",
  component: LiveCandleChart,
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => {
      patchFetch();
      return (
        <div style={{ height: 460, padding: 8 }}>
          <Story />
        </div>
      );
    },
  ],
} satisfies Meta<typeof LiveCandleChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { symbol: "AAPL", initialCandles: genCandles(120) },
};

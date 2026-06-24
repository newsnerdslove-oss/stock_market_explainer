import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { HomeStocks } from "@/components/home/HomeStocks";

// Data tier: the home stock strip fetches quotes + daily candles from /api/* and
// polls. It renders in Storybook because the global MSW handlers (.storybook/
// msw-handlers.ts) serve deterministic fixtures — no backend needed. The default
// tracked symbols come from localStorage (AAPL/MSFT/TSLA on first run).
const meta = {
  title: "Home/HomeStocks",
  component: HomeStocks,
  parameters: { layout: "padded" },
} satisfies Meta<typeof HomeStocks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

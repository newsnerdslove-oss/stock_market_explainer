import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { EquityCurve } from "./EquityCurve";

// A compact SVG equity curve indexed to 100, green if it ends up, red if down,
// with a dashed break-even baseline at 100. Used in backtest results.
const meta = {
  title: "Charts/EquityCurve",
  component: EquityCurve,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    equity: { control: "object", description: "Equity series, indexed to 100" },
  },
} satisfies Meta<typeof EquityCurve>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Up: Story = {
  args: { equity: [100, 101, 103, 102, 105, 108, 107, 110, 114, 113, 118] },
};

export const Down: Story = {
  args: { equity: [100, 99, 101, 98, 96, 97, 93, 94, 90, 88, 86] },
};

export const Volatile: Story = {
  args: { equity: [100, 106, 97, 109, 92, 104, 88, 101, 95, 112, 103] },
};

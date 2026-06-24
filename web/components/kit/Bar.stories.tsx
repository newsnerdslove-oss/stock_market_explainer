import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Bar } from "./Bar";
import { A } from "./theme";

const meta = {
  title: "Kit/Bar",
  component: Bar,
  parameters: { staxKit: true, layout: "padded" },
  tags: ["autodocs"],
} satisfies Meta<typeof Bar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { pct: 60 } };
export const Success: Story = { args: { pct: 100, color: A.green } };
export const Glow: Story = { args: { pct: 80, color: A.primary, glow: true } };

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Ring } from "./Ring";
import { A } from "./theme";

const meta = {
  title: "Kit/Ring",
  component: Ring,
  parameters: { staxKit: true, layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Ring>;
export default meta;
type Story = StoryObj<typeof meta>;

export const DailyGoal: Story = {
  args: {
    pct: 0.66,
    children: (
      <div>
        <div style={{ fontSize: 22, fontWeight: 800, color: A.ink }}>2/3</div>
        <div style={{ fontSize: 11, fontWeight: 700, color: A.muted }}>today</div>
      </div>
    ),
  },
};
export const Complete: Story = { args: { pct: 1, color: A.green, children: <div style={{ fontSize: 24, fontWeight: 800, color: A.green }}>✓</div> } };

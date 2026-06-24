import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Card } from "./Card";
import { A } from "./theme";

const meta = {
  title: "Kit/Card",
  component: Card,
  parameters: { staxKit: true, layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div style={{ width: 260 }}>
        <div style={{ fontWeight: 800, fontSize: 17, color: A.ink }}>Daily streak</div>
        <div style={{ marginTop: 6, color: A.muted, fontWeight: 600 }}>You&apos;re on a 12-day roll — keep it going.</div>
      </div>
    ),
  },
};
export const Interactive: Story = { args: { hover: true, onClick: () => {}, children: <div style={{ width: 260, fontWeight: 700, color: A.ink }}>Hover / click me</div> } };

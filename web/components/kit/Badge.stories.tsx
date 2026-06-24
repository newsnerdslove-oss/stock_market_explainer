import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "./Badge";

const meta = {
  title: "Kit/Badge",
  component: Badge,
  parameters: { staxKit: true, layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { children: "New", tone: "primary" } };
export const AllTones: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      <Badge tone="primary">Primary</Badge>
      <Badge tone="green">Passed</Badge>
      <Badge tone="amber">Streak</Badge>
      <Badge tone="red">Missed</Badge>
      <Badge tone="blue">Beta</Badge>
      <Badge tone="neutral">Draft</Badge>
    </div>
  ),
};

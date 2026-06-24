import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Icon } from "./Icon";
import { A } from "./theme";

const meta = {
  title: "Kit/Icon",
  component: Icon,
  parameters: { staxKit: true, layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = { args: { name: "flame", size: 28, color: A.amberInk } };
export const Gallery: Story = {
  args: { name: "flame" },
  render: () => (
    <div style={{ display: "flex", gap: 18, color: A.ink }}>
      {["sparkles", "graduation-cap", "dumbbell", "line-chart", "trending-up", "flame", "zap", "check-circle-2"].map((n) => (
        <Icon key={n} name={n} size={24} />
      ))}
    </div>
  ),
};

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Btn } from "./Btn";

const meta = {
  title: "Kit/Btn",
  component: Btn,
  parameters: { staxKit: true, layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Btn>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = { args: { children: "Continue", kind: "primary" } };
export const Soft: Story = { args: { children: "Soft", kind: "soft" } };
export const Ghost: Story = { args: { children: "Ghost", kind: "ghost" } };
export const Success: Story = { args: { children: "Correct!", kind: "success", icon: "check" } };
export const WithIcon: Story = { args: { children: "Start lesson", icon: "play", iconRight: "arrow-right" } };
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Btn size="sm">Small</Btn>
      <Btn size="md">Medium</Btn>
      <Btn size="lg">Large</Btn>
    </div>
  ),
};

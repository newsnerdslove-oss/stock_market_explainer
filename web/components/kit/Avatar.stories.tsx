import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Avatar } from "./Avatar";
import { A } from "./theme";

const meta = {
  title: "Kit/Avatar",
  component: Avatar,
  parameters: { staxKit: true, layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { name: "Maya R", bg: A.green } };
export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Avatar name="Maya R" size={28} bg={A.primary} />
      <Avatar name="Maya R" size={40} bg={A.green} />
      <Avatar name="Maya R" size={56} bg={A.blue} />
    </div>
  ),
};

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Field } from "./Field";

const meta = {
  title: "Kit/Field",
  component: Field,
  parameters: { staxKit: true, layout: "padded" },
  tags: ["autodocs"],
} satisfies Meta<typeof Field>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { label: "Email", placeholder: "you@example.com", icon: "mail" } };
export const Password: Story = { args: { label: "Password", placeholder: "••••••••", type: "password", icon: "lock" } };

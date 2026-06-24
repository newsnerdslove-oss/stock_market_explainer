import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Toggle } from "./Toggle";

const meta = {
  title: "Kit/Toggle",
  component: Toggle,
  parameters: { staxKit: true, layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Toggle>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Off: Story = { args: { on: false } };
export const On: Story = { args: { on: true } };

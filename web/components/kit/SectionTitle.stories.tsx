import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SectionTitle } from "./SectionTitle";

const meta = {
  title: "Kit/SectionTitle",
  component: SectionTitle,
  parameters: { staxKit: true, layout: "padded" },
  tags: ["autodocs"],
} satisfies Meta<typeof SectionTitle>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { children: "Continue learning" } };
export const WithAction: Story = { args: { children: "Your lessons", action: "See all" } };

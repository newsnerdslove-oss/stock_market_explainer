import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { WeekDots } from "./WeekDots";

const meta = {
  title: "Kit/WeekDots",
  component: WeekDots,
  parameters: { staxKit: true, layout: "padded" },
  tags: ["autodocs"],
} satisfies Meta<typeof WeekDots>;
export default meta;
type Story = StoryObj<typeof meta>;

export const ThisWeek: Story = {
  args: {
    today: 3,
    days: [
      { l: "M", done: true },
      { l: "T", done: true },
      { l: "W", done: true },
      { l: "T", done: false },
      { l: "F", done: false },
      { l: "S", done: false },
      { l: "S", done: false },
    ],
  },
};

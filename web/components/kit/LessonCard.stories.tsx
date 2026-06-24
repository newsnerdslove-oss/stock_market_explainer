import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LessonCard } from "./LessonCard";
import { A } from "./theme";

const meta = {
  title: "Kit/LessonCard",
  component: LessonCard,
  parameters: { staxKit: true, layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof LessonCard>;
export default meta;
type Story = StoryObj<typeof meta>;

export const InProgress: Story = {
  args: { title: "Reading candlesticks", sub: "Unit 2 · 4 lessons", icon: "candlestick-chart", pct: 60 },
};
export const Done: Story = {
  args: { title: "Market basics", sub: "Unit 1 · 5 lessons", icon: "book-open", pct: 100, state: "done", tint: { bg: A.greenSoft, fg: A.green } },
};
export const Locked: Story = {
  args: { title: "Options strategies", sub: "Unit 6 · 6 lessons", state: "locked" },
};

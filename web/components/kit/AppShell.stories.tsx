import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AppShell } from "./AppShell";
import { Card } from "./Card";
import { SectionTitle } from "./SectionTitle";
import { A } from "./theme";

const meta = {
  title: "Kit/AppShell",
  component: AppShell,
  parameters: { staxKit: true, layout: "fullscreen" },
} satisfies Meta<typeof AppShell>;
export default meta;
type Story = StoryObj<typeof meta>;

const Content = () => (
  <div>
    <SectionTitle action="See all">Continue learning</SectionTitle>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
      {["Market basics", "Reading candlesticks", "Risk & position sizing"].map((t) => (
        <Card key={t}>
          <div style={{ fontWeight: 800, fontSize: 16, color: A.ink }}>{t}</div>
          <div style={{ marginTop: 6, color: A.muted, fontWeight: 600 }}>Unit · lessons</div>
        </Card>
      ))}
    </div>
  </div>
);

export const Today: Story = { args: { tab: "daily", children: <Content /> } };
export const Invest: Story = { args: { tab: "trade", children: <Content /> } };

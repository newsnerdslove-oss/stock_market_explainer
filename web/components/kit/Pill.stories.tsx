import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Pill } from "./Pill";
import { A } from "./theme";

const meta = {
  title: "Kit/Pill",
  component: Pill,
  parameters: { staxKit: true, layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof Pill>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Streak: Story = { args: { icon: "flame", children: "12", bg: A.amberSoft, fg: A.amberInk } };
export const Xp: Story = { args: { icon: "zap", children: "340 XP" } };
export const Tones: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8 }}>
      <Pill icon="flame" bg={A.amberSoft} fg={A.amberInk}>
        12
      </Pill>
      <Pill icon="zap">340 XP</Pill>
      <Pill icon="check" bg={A.greenSoft} fg={A.green}>
        Done
      </Pill>
    </div>
  ),
};

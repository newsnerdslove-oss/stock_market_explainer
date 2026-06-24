import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { NavBar } from "@/components/NavBar";
import { ProgressProvider } from "@/lib/progress/useProgress";

// App chrome: the persistent top nav. It reads usePathname() (to highlight the
// active route) and useProgress() (the streak counter), so the story (a) wraps it
// in <ProgressProvider> via a decorator and (b) sets the active route through the
// @storybook/nextjs-vite navigation mock — no real router needed.
const meta = {
  title: "Chrome/NavBar",
  component: NavBar,
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <ProgressProvider>
        <Story />
      </ProgressProvider>
    ),
  ],
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const at = (pathname: string) => ({ nextjs: { appDirectory: true, navigation: { pathname } } });

export const Home: Story = { parameters: at("/") };
export const OnLearn: Story = { parameters: at("/learn") };
export const OnSimulator: Story = { parameters: at("/simulator") };

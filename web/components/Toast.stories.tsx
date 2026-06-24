import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ToastProvider, useToast, type ToastTone } from "@/components/Toast";

// The toast system is fired via the useToast() hook from under <ToastProvider>.
// This demo composes the real provider + hook and exposes a button per tone so the
// stack is interactive in Storybook. Pattern to reuse: wrap any context-dependent
// component in its provider via a decorator.
const TONES: ToastTone[] = ["ok", "info", "warn", "err"];

function ToastDemo() {
  const toast = useToast();
  return (
    <div className="flex flex-wrap gap-2">
      {TONES.map((t) => (
        <button
          key={t}
          type="button"
          onClick={() => toast(`This is a "${t}" toast`, t)}
          className="rounded-md border border-strong px-3 py-1.5 text-sm text-ink transition hover:bg-surface-2"
        >
          Fire {t}
        </button>
      ))}
    </div>
  );
}

const meta = {
  title: "Components/Toast",
  component: ToastDemo,
  parameters: { layout: "centered" },
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
} satisfies Meta<typeof ToastDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

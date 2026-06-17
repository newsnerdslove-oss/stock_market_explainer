import type { Question } from "@/lib/quiz/types";

// Quiz for the "Protective Put: Insurance for Your Shares" lesson.
export const questions: Question[] = [
  {
    id: "protective-put.q1",
    lessonSlug: "protective-put",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["options", "protective-put", "math", "max-loss"],
    unit: "$",
    prompt: "You own 100 shares at `$100` and buy a `$95` put for `$3`. What's your maximum loss?",
    choices: [
      { id: "a", text: "$500", feedback: "That omits the `$300` premium you paid." },
      { id: "b", text: "$800" },
      { id: "c", text: "$300", feedback: "That's only the premium; you also fall from `$100` to `$95`." },
      { id: "d", text: "$1,000" },
    ],
    correctId: "b",
    explanation:
      "Max loss `= (cost − strike + premium) × 100 = (100 − 95 + 3) × 100 = $800`, no matter how far the stock falls.",
  },
  {
    id: "protective-put.q2",
    lessonSlug: "protective-put",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["options", "protective-put", "math", "breakeven"],
    unit: "$",
    prompt: "Own 100 shares at `$100`, buy a `$95` put for `$3`. What's the breakeven?",
    choices: [
      { id: "a", text: "$97", feedback: "The premium is *added* to cost, not subtracted, for a long-stock hedge." },
      { id: "b", text: "$95", feedback: "That's the floor strike, not the breakeven." },
      { id: "c", text: "$103" },
      { id: "d", text: "$100" },
    ],
    correctId: "c",
    explanation:
      "Breakeven `= cost + premium = 100 + 3 = $103`. The stock must rise past the premium you spent on insurance.",
  },
  {
    id: "protective-put.q3",
    lessonSlug: "protective-put",
    type: "single",
    difficulty: "medium",
    tags: ["options", "protective-put", "scenario", "premium-drag"],
    prompt: "Your protected stock rallies 20%. Compared to an unhedged holder, you…",
    choices: [
      { id: "a", text: "Make slightly less, because the premium is a sunk cost" },
      { id: "b", text: "Make more, because the put adds upside", feedback: "A long put doesn't add upside; it only floors the downside." },
      { id: "c", text: "Make exactly the same" },
      { id: "d", text: "Lose money despite the rally" },
    ],
    correctId: "a",
    explanation:
      "You keep the upside but the put's premium is a **sunk cost** (premium drag), so you finish slightly behind an unhedged holder.",
  },
  {
    id: "protective-put.q4",
    lessonSlug: "protective-put",
    type: "single",
    difficulty: "hard",
    tags: ["options", "protective-put", "scenario", "gap-risk"],
    prompt: "Why might a protective put beat a stop-loss order going into earnings?",
    choices: [
      { id: "a", text: "It guarantees a sale price even if the stock gaps down overnight" },
      { id: "b", text: "It is always cheaper than a stop", feedback: "A put costs a premium; a stop is free to place." },
      { id: "c", text: "It removes all premium cost" },
      { id: "d", text: "A stop can never miss its level", feedback: "A stop can fill far below its trigger in a gap." },
    ],
    correctId: "a",
    explanation:
      "A put's strike is a **guaranteed** exit. A stop can fill far below its trigger if the stock gaps down overnight, so the put avoids that gap risk.",
  },
  {
    id: "protective-put.q5",
    lessonSlug: "protective-put",
    type: "single",
    difficulty: "easy",
    tags: ["options", "protective-put", "construction"],
    prompt: "How is a protective put constructed?",
    choices: [
      { id: "a", text: "Long 100 shares plus a long put" },
      { id: "b", text: "Long 100 shares plus a short put" },
      { id: "c", text: "Short 100 shares plus a long put" },
      { id: "d", text: "A long put plus a short put" },
    ],
    correctId: "a",
    explanation:
      "Own **100 shares** and **buy 1 put** — the right to sell at the strike, which becomes your downside floor.",
  },
  {
    id: "protective-put.q6",
    lessonSlug: "protective-put",
    type: "single",
    difficulty: "medium",
    tags: ["options", "protective-put", "misconception"],
    prompt: "Why is 'a protective put means I can't lose money' wrong?",
    choices: [
      { id: "a", text: "You can still lose up to `(cost − strike)` plus the premium" },
      { id: "b", text: "Protective puts actually increase downside risk" },
      { id: "c", text: "The put removes the premium cost" },
      { id: "d", text: "A put has no strike price" },
    ],
    correctId: "a",
    explanation:
      "The put caps **how far** you fall, not whether you fall. You can still lose `(cost − strike)` plus the premium — and the premium is gone if the stock never drops.",
  },
  {
    id: "protective-put.q7",
    lessonSlug: "protective-put",
    type: "single",
    difficulty: "hard",
    tags: ["options", "protective-put", "risk", "exercise"],
    prompt: "The stock crashes well below the strike. To actually realize the floor, you must…",
    choices: [
      { id: "a", text: "Exercise the put (or sell the stock and put together)" },
      { id: "b", text: "Let the in-the-money put expire unexercised", feedback: "That throws away the protection you paid for." },
      { id: "c", text: "Buy more shares to average down" },
      { id: "d", text: "Do nothing — the floor pays automatically with no action" },
    ],
    correctId: "a",
    explanation:
      "To cap the loss you must **exercise** the put (or close stock and put together). Letting an in-the-money put expire unused wastes the protection.",
  },
  {
    id: "protective-put.q8",
    lessonSlug: "protective-put",
    type: "single",
    difficulty: "medium",
    tags: ["options", "protective-put", "scenario", "fit"],
    prompt: "A protective put is a **poor** fit when…",
    choices: [
      { id: "a", text: "You expect the stock to stay flat or rise, so the premium is wasted" },
      { id: "b", text: "You're worried about a near-term drop" },
      { id: "c", text: "You want to ride through an earnings event" },
      { id: "d", text: "You want a guaranteed exit price" },
    ],
    correctId: "a",
    explanation:
      "If the stock stays flat or rises, you simply lose the premium and underperform an unhedged holder. Insurance you never need is still paid for.",
  },
];

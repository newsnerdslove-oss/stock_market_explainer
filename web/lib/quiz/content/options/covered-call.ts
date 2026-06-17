import type { Question } from "@/lib/quiz/types";

// Quiz for the "Covered Call: Renting Out Stock You Own" lesson.
export const questions: Question[] = [
  {
    id: "covered-call.q1",
    lessonSlug: "covered-call",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["options", "covered-call", "math", "breakeven"],
    unit: "$",
    prompt: "You buy 100 shares at `$50` and sell a `$55` call for `$2`. What's your breakeven price?",
    choices: [
      { id: "a", text: "$48" },
      { id: "b", text: "$52", feedback: "The premium *lowers* the breakeven; you subtract it from cost." },
      { id: "c", text: "$55", feedback: "That's the strike, not the breakeven." },
      { id: "d", text: "$50" },
    ],
    correctId: "a",
    explanation:
      "Breakeven is `cost − premium = 50 − 2 = $48`. The `$2` premium lowers your effective basis.",
  },
  {
    id: "covered-call.q2",
    lessonSlug: "covered-call",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["options", "covered-call", "math", "max-profit"],
    unit: "$",
    prompt: "Buy 100 shares at `$50`, sell a `$55` call for `$2`. What's the maximum profit?",
    choices: [
      { id: "a", text: "$200", feedback: "That's only the premium; you also gain up to the strike." },
      { id: "b", text: "$500", feedback: "That's the gain to the strike but omits the premium." },
      { id: "c", text: "$700" },
      { id: "d", text: "$1,000" },
    ],
    correctId: "c",
    explanation:
      "Max profit `= (strike − cost + premium) × 100 = (55 − 50 + 2) × 100 = $700`, reached at or above the `$55` strike.",
  },
  {
    id: "covered-call.q3",
    lessonSlug: "covered-call",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["options", "covered-call", "math", "max-loss"],
    unit: "$",
    prompt: "Buy 100 shares at `$50`, sell a `$55` call for `$2`. If the stock goes to zero, what's the max loss?",
    choices: [
      { id: "a", text: "$5,000", feedback: "The premium offsets `$200` of that." },
      { id: "b", text: "$4,800" },
      { id: "c", text: "$700", feedback: "That's the max *profit*, not loss." },
      { id: "d", text: "$200" },
    ],
    correctId: "b",
    explanation:
      "Max loss `= (cost − premium) × 100 = (50 − 2) × 100 = $4,800`. You still own the stock; the premium only modestly offsets a collapse.",
  },
  {
    id: "covered-call.q4",
    lessonSlug: "covered-call",
    type: "single",
    difficulty: "medium",
    tags: ["options", "covered-call", "scenario", "called-away"],
    prompt: "You sold a `$55` covered call and the stock jumps to `$70` by expiry. What happens?",
    choices: [
      { id: "a", text: "Your shares are called away at `$55`; you keep the premium but miss the `$55 → $70` move" },
      { id: "b", text: "You sell at `$70` and keep the premium" },
      { id: "c", text: "The call expires worthless and you keep the shares" },
      { id: "d", text: "You owe the difference up to `$70`", feedback: "You're covered — you deliver the shares you own, no extra cash." },
    ],
    correctId: "a",
    explanation:
      "The call is deep in-the-money, so your shares are **called away at `$55`**. You keep the premium and the gain to the strike, but forgo everything above it.",
  },
  {
    id: "covered-call.q5",
    lessonSlug: "covered-call",
    type: "single",
    difficulty: "medium",
    tags: ["options", "covered-call", "scenario", "fit"],
    prompt: "Which situation makes a covered call a **poor** choice?",
    choices: [
      { id: "a", text: "You expect a strong breakout and want the full upside" },
      { id: "b", text: "You expect the stock to drift sideways" },
      { id: "c", text: "You'd be happy to sell at a set higher price" },
      { id: "d", text: "You want some income while you wait" },
    ],
    correctId: "a",
    explanation:
      "A covered call **caps** upside at the strike. If you expect a big breakout and want the full run, the cap works against you.",
  },
  {
    id: "covered-call.q6",
    lessonSlug: "covered-call",
    type: "single",
    difficulty: "easy",
    tags: ["options", "covered-call", "construction"],
    prompt: "How is a covered call built?",
    choices: [
      { id: "a", text: "Long 100 shares plus a short call against them" },
      { id: "b", text: "Long 100 shares plus a long put" },
      { id: "c", text: "Short 100 shares plus a long call" },
      { id: "d", text: "A long call plus a short call" },
    ],
    correctId: "a",
    explanation:
      "Own **100 shares** and **sell 1 call** against them. The shares 'cover' the obligation to deliver if assigned.",
  },
  {
    id: "covered-call.q7",
    lessonSlug: "covered-call",
    type: "single",
    difficulty: "hard",
    tags: ["options", "covered-call", "risk", "assignment"],
    prompt: "When is early assignment of a short call most likely?",
    choices: [
      { id: "a", text: "When the call is in-the-money, especially just before an ex-dividend date" },
      { id: "b", text: "When the call is far out-of-the-money" },
      { id: "c", text: "Only on the exact expiration minute" },
      { id: "d", text: "Never — American calls can't be assigned early" },
    ],
    correctId: "a",
    explanation:
      "In-the-money short calls can be **assigned early**, and the risk rises right before an **ex-dividend date** as holders exercise to capture the dividend.",
  },
  {
    id: "covered-call.q8",
    lessonSlug: "covered-call",
    type: "single",
    difficulty: "hard",
    tags: ["options", "covered-call", "misconception"],
    prompt: "Why is calling a covered call 'a low-risk income trade' misleading?",
    choices: [
      { id: "a", text: "The income is capped and small, while the downside is nearly the full stock decline" },
      { id: "b", text: "Covered calls have unlimited loss potential", feedback: "Loss is bounded by the stock going to zero, not unlimited." },
      { id: "c", text: "You can never collect a premium" },
      { id: "d", text: "The premium guarantees a profit" },
    ],
    correctId: "a",
    explanation:
      "Premium income is **capped and modest**, and you still carry almost the full stock decline. The true cost is the **capped upside** — and assignment can come early.",
  },
];

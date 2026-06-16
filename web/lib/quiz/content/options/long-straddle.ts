import type { Question } from "@/lib/quiz/types";

// Quiz for the "Long Straddle: Betting on a Big Move, Either Way" lesson.
export const questions: Question[] = [
  {
    id: "long-straddle.q1",
    lessonSlug: "long-straddle",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["options", "long-straddle", "math", "breakeven"],
    unit: "$",
    prompt: "You buy a `100` call for `$4` and a `100` put for `$4`. What are the two breakevens?",
    choices: [
      { id: "a", text: "$96 and $104", feedback: "That uses a `$4` move; the total debit is `$8`." },
      { id: "b", text: "$92 and $108" },
      { id: "c", text: "$88 and $112", feedback: "That doubles the debit." },
      { id: "d", text: "$100 only" },
    ],
    correctId: "b",
    explanation:
      "Breakevens `= strike ± total debit = 100 ± 8 = $92` and `$108`. The stock must move past either to cover both premiums.",
  },
  {
    id: "long-straddle.q2",
    lessonSlug: "long-straddle",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["options", "long-straddle", "math", "max-loss"],
    unit: "$",
    prompt: "Buy a `100` call for `$4` and a `100` put for `$4`. What's the max loss, and where?",
    choices: [
      { id: "a", text: "$800, if the stock pins `$100` at expiry" },
      { id: "b", text: "$400, if the stock pins `$100`", feedback: "Both legs are paid for; the total debit is `$8`." },
      { id: "c", text: "Unlimited", feedback: "A long straddle's loss is capped at the combined premium." },
      { id: "d", text: "$1,600 at the strike" },
    ],
    correctId: "a",
    explanation:
      "Max loss is the **total debit**, `(4 + 4) × 100 = $800`, suffered if the stock pins the `$100` strike so both legs expire worthless.",
  },
  {
    id: "long-straddle.q3",
    lessonSlug: "long-straddle",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["options", "long-straddle", "math", "payoff"],
    unit: "$",
    prompt: "Same straddle (total debit `$8`). The stock finishes at `$120`. What's the profit?",
    choices: [
      { id: "a", text: "+$2,000", feedback: "That's the call's intrinsic value before subtracting the debit." },
      { id: "b", text: "+$1,200" },
      { id: "c", text: "+$800", feedback: "That's the cost, not the profit." },
      { id: "d", text: "+$400" },
    ],
    correctId: "b",
    explanation:
      "The call is worth `$20` (`120 − 100`), the put is worthless. Profit `= (20 − 8) × 100 = +$1,200`.",
  },
  {
    id: "long-straddle.q4",
    lessonSlug: "long-straddle",
    type: "single",
    difficulty: "hard",
    tags: ["options", "long-straddle", "scenario", "iv-crush"],
    prompt:
      "You bought a straddle before earnings. The stock moved 5%, yet you lost money. Why?",
    choices: [
      { id: "a", text: "You paid inflated pre-earnings IV; the post-report volatility crush outweighed the move" },
      { id: "b", text: "A 5% move can never be profitable for a straddle" },
      { id: "c", text: "The call and put cancel each other out" },
      { id: "d", text: "Straddles lose whenever the stock moves up" },
    ],
    correctId: "a",
    explanation:
      "Buying before earnings means paying **peak IV**. The post-event **volatility crush** can drain both legs faster than a modest move adds value — a loss despite being directionally right.",
  },
  {
    id: "long-straddle.q5",
    lessonSlug: "long-straddle",
    type: "single",
    difficulty: "medium",
    tags: ["options", "long-straddle", "scenario", "fit"],
    prompt: "When is a long straddle the right tool?",
    choices: [
      { id: "a", text: "You expect a large move, are unsure of direction, and IV is reasonable" },
      { id: "b", text: "You expect the stock to stay perfectly flat" },
      { id: "c", text: "You're certain of the direction" },
      { id: "d", text: "IV is at an all-time high right before an event" },
    ],
    correctId: "a",
    explanation:
      "A straddle fits a **big move of unknown direction** — but only if IV is **reasonable**. Overpaying for IV (e.g. into earnings) sets up a volatility crush.",
  },
  {
    id: "long-straddle.q6",
    lessonSlug: "long-straddle",
    type: "single",
    difficulty: "easy",
    tags: ["options", "long-straddle", "construction"],
    prompt: "How is a long straddle built?",
    choices: [
      { id: "a", text: "Buy a call and buy a put at the same strike and expiration" },
      { id: "b", text: "Buy a call and sell a put at the same strike" },
      { id: "c", text: "Buy a call and a put at different strikes" },
      { id: "d", text: "Sell a call and sell a put at the same strike" },
    ],
    correctId: "a",
    explanation:
      "Buy **both** a call and a put at the **same strike and expiration**, paying both premiums. The combined cost is your total at risk.",
  },
  {
    id: "long-straddle.q7",
    lessonSlug: "long-straddle",
    type: "single",
    difficulty: "hard",
    tags: ["options", "long-straddle", "misconception"],
    prompt: "Why is 'I can't lose — I profit whichever way it moves' wrong?",
    choices: [
      { id: "a", text: "You profit only if it moves far enough (past `±$8`); a small move or IV crush loses" },
      { id: "b", text: "A straddle profits even if the stock stays still" },
      { id: "c", text: "Only the put can ever pay off" },
      { id: "d", text: "There's no premium to lose" },
    ],
    correctId: "a",
    explanation:
      "Direction-agnostic isn't risk-free. The move must clear **`±$8`** to cover both premiums, and an IV crush can sink you even on a real move.",
  },
  {
    id: "long-straddle.q8",
    lessonSlug: "long-straddle",
    type: "single",
    difficulty: "medium",
    tags: ["options", "long-straddle", "greeks"],
    prompt: "What is a long straddle's exposure to time and volatility?",
    choices: [
      { id: "a", text: "Positive vega and strongly negative theta" },
      { id: "b", text: "Negative vega and positive theta" },
      { id: "c", text: "No exposure to either" },
      { id: "d", text: "Positive theta and positive vega" },
    ],
    correctId: "a",
    explanation:
      "Holding two long options, a straddle gains from rising IV (**positive vega**) but bleeds from time decay (**strongly negative theta**), which accelerates near expiry.",
  },
];

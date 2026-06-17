import type { Question } from "@/lib/quiz/types";

// Quiz for the "Bull Call Spread: Cheaper Bullish Bet, Capped Reward" lesson.
export const questions: Question[] = [
  {
    id: "bull-call-spread.q1",
    lessonSlug: "bull-call-spread",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["options", "bull-call-spread", "math", "max-profit"],
    unit: "$",
    prompt: "You buy a `100` call for `$5` and sell a `110` call for `$2` (same expiry). What's the max profit?",
    choices: [
      { id: "a", text: "$300", feedback: "That's the debit paid, which is the max *loss*." },
      { id: "b", text: "$700" },
      { id: "c", text: "$1,000", feedback: "That's the strike width before subtracting the debit." },
      { id: "d", text: "$1,300" },
    ],
    correctId: "b",
    explanation:
      "Max profit `= (width − debit) × 100 = (10 − 3) × 100 = $700`, reached at or above the `$110` upper strike.",
  },
  {
    id: "bull-call-spread.q2",
    lessonSlug: "bull-call-spread",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["options", "bull-call-spread", "math", "breakeven"],
    unit: "$",
    prompt: "Buy a `100` call for `$5`, sell a `110` call for `$2`. What's the breakeven?",
    choices: [
      { id: "a", text: "$103" },
      { id: "b", text: "$105", feedback: "That would be the breakeven of the long call *alone*." },
      { id: "c", text: "$107", feedback: "That adds the debit to the wrong strike." },
      { id: "d", text: "$110" },
    ],
    correctId: "a",
    explanation:
      "Breakeven `= lower strike + debit = 100 + 3 = $103`. The short call lowers the breakeven versus a single long call.",
  },
  {
    id: "bull-call-spread.q3",
    lessonSlug: "bull-call-spread",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["options", "bull-call-spread", "math", "max-loss"],
    unit: "$",
    prompt: "Buy a `100` call for `$5`, sell a `110` call for `$2`. What's the max loss?",
    choices: [
      { id: "a", text: "$300" },
      { id: "b", text: "$500", feedback: "The `$2` short premium offsets part of the long call's cost." },
      { id: "c", text: "$700", feedback: "That's the max profit." },
      { id: "d", text: "$200" },
    ],
    correctId: "a",
    explanation:
      "Max loss is the **net debit**: `(5 − 2) × 100 = $300`, lost if the stock is at or below `$100` at expiry.",
  },
  {
    id: "bull-call-spread.q4",
    lessonSlug: "bull-call-spread",
    type: "single",
    difficulty: "medium",
    tags: ["options", "bull-call-spread", "scenario", "capped"],
    prompt: "The stock blows past the upper strike to `$130`. What's true of the spread?",
    choices: [
      { id: "a", text: "It's capped at `$700`; a plain long call would have captured the full run" },
      { id: "b", text: "It keeps gaining dollar-for-dollar above `$110`" },
      { id: "c", text: "It loses money on a big rally" },
      { id: "d", text: "It doubles its max profit" },
    ],
    correctId: "a",
    explanation:
      "Above the `$110` upper strike, both calls move together and profit is **capped at `$700`**. A single long call would have caught the full `$130` move.",
  },
  {
    id: "bull-call-spread.q5",
    lessonSlug: "bull-call-spread",
    type: "single",
    difficulty: "medium",
    tags: ["options", "bull-call-spread", "scenario", "fit"],
    prompt: "When is a bull call spread preferable to a single long call?",
    choices: [
      { id: "a", text: "When you expect a moderate rise and want lower cost, a lower breakeven, and defined risk" },
      { id: "b", text: "When you expect an enormous breakout and want unlimited upside" },
      { id: "c", text: "When you expect the stock to fall" },
      { id: "d", text: "When you want zero cost to enter" },
    ],
    correctId: "a",
    explanation:
      "The spread shines on a **moderate** rise: the short call cuts cost and breakeven while keeping risk defined. The trade-off is a capped reward.",
  },
  {
    id: "bull-call-spread.q6",
    lessonSlug: "bull-call-spread",
    type: "single",
    difficulty: "easy",
    tags: ["options", "bull-call-spread", "construction"],
    prompt: "How is a bull call spread built?",
    choices: [
      { id: "a", text: "Buy a lower-strike call and sell a higher-strike call, same expiration" },
      { id: "b", text: "Buy a higher-strike call and sell a lower-strike call" },
      { id: "c", text: "Buy a call and buy a put at the same strike" },
      { id: "d", text: "Sell a put and buy a lower put" },
    ],
    correctId: "a",
    explanation:
      "Buy the **lower** strike call (your bet) and sell the **higher** strike call to fund it — same expiration, a net debit.",
  },
  {
    id: "bull-call-spread.q7",
    lessonSlug: "bull-call-spread",
    type: "single",
    difficulty: "hard",
    tags: ["options", "bull-call-spread", "misconception"],
    prompt: "Why is 'two legs means more upside than a long call' wrong?",
    choices: [
      { id: "a", text: "The spread caps profit at the upper strike; its advantage is lower cost and breakeven" },
      { id: "b", text: "The spread has unlimited upside, more than a call" },
      { id: "c", text: "Adding a leg removes all risk" },
      { id: "d", text: "The short call increases the breakeven" },
    ],
    correctId: "a",
    explanation:
      "The short call **caps** profit, so a spread offers **less** upside than a long call. The real edge is a lower cost and a closer breakeven.",
  },
  {
    id: "bull-call-spread.q8",
    lessonSlug: "bull-call-spread",
    type: "single",
    difficulty: "hard",
    tags: ["options", "bull-call-spread", "risk", "pin-risk"],
    prompt: "The stock settles between the two strikes right at expiry. What's the concern?",
    choices: [
      { id: "a", text: "Pin risk — the short call may or may not be assigned, so manage before expiration" },
      { id: "b", text: "The long call is automatically assigned to someone else" },
      { id: "c", text: "Both legs always cancel to exactly zero" },
      { id: "d", text: "You're guaranteed the max profit" },
    ],
    correctId: "a",
    explanation:
      "Between the strikes you face **pin risk**: the short call's assignment is uncertain, which can leave a surprise position. Manage the spread before expiration.",
  },
];

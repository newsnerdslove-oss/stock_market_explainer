import type { Question } from "@/lib/quiz/types";

// Quiz for the "Bear Put Spread: Defined-Risk Bearish Bet" lesson.
export const questions: Question[] = [
  {
    id: "bear-put-spread.q1",
    lessonSlug: "bear-put-spread",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["options", "bear-put-spread", "math", "max-loss"],
    unit: "$",
    prompt: "You buy a `100` put for `$6` and sell a `90` put for `$2.50` (same expiry). What's the max loss?",
    choices: [
      { id: "a", text: "$350" },
      { id: "b", text: "$600", feedback: "The `$2.50` short premium reduces the net debit." },
      { id: "c", text: "$650", feedback: "That's the max profit, not loss." },
      { id: "d", text: "$250" },
    ],
    correctId: "a",
    explanation:
      "Max loss is the **net debit**: `(6 − 2.50) × 100 = $350`, lost if the stock is at or above `$100` at expiry.",
  },
  {
    id: "bear-put-spread.q2",
    lessonSlug: "bear-put-spread",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["options", "bear-put-spread", "math", "breakeven"],
    unit: "$",
    prompt: "Buy a `100` put for `$6`, sell a `90` put for `$2.50`. What's the breakeven?",
    choices: [
      { id: "a", text: "$103.50", feedback: "For a bearish put spread you *subtract* the debit from the higher strike." },
      { id: "b", text: "$96.50" },
      { id: "c", text: "$94", feedback: "That's not how the debit applies here." },
      { id: "d", text: "$90" },
    ],
    correctId: "b",
    explanation:
      "Breakeven `= higher strike − debit = 100 − 3.50 = $96.50`. Below this, the spread is profitable.",
  },
  {
    id: "bear-put-spread.q3",
    lessonSlug: "bear-put-spread",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["options", "bear-put-spread", "math", "max-profit"],
    unit: "$",
    prompt: "Buy a `100` put for `$6`, sell a `90` put for `$2.50`. What's the max profit?",
    choices: [
      { id: "a", text: "$350", feedback: "That's the debit / max loss." },
      { id: "b", text: "$650" },
      { id: "c", text: "$1,000", feedback: "That's the strike width before subtracting the debit." },
      { id: "d", text: "$900" },
    ],
    correctId: "b",
    explanation:
      "Max profit `= (width − debit) × 100 = (10 − 3.50) × 100 = $650`, reached at or below the `$90` lower strike.",
  },
  {
    id: "bear-put-spread.q4",
    lessonSlug: "bear-put-spread",
    type: "single",
    difficulty: "medium",
    tags: ["options", "bear-put-spread", "scenario"],
    prompt: "The stock rises and stays above the higher strike at expiry. What's the result?",
    choices: [
      { id: "a", text: "You lose the full `$350` debit" },
      { id: "b", text: "You keep the max profit of `$650`" },
      { id: "c", text: "You break even" },
      { id: "d", text: "You're assigned long stock", feedback: "Both puts expire worthless above the higher strike — no assignment." },
    ],
    correctId: "a",
    explanation:
      "Above the higher strike, both puts expire worthless and you lose the **full `$350` debit** — the defined max loss.",
  },
  {
    id: "bear-put-spread.q5",
    lessonSlug: "bear-put-spread",
    type: "single",
    difficulty: "medium",
    tags: ["options", "bear-put-spread", "scenario", "fit"],
    prompt: "Why pick a bear put spread over a single long put?",
    choices: [
      { id: "a", text: "Lower cost and a closer breakeven on a moderate-decline thesis, accepting a capped reward" },
      { id: "b", text: "It earns more on a total collapse than a single put" },
      { id: "c", text: "It has unlimited downside profit" },
      { id: "d", text: "It costs nothing to enter" },
    ],
    correctId: "a",
    explanation:
      "The short put **cuts cost and breakeven** for a moderate decline. The trade-off is a profit **capped** at the lower strike.",
  },
  {
    id: "bear-put-spread.q6",
    lessonSlug: "bear-put-spread",
    type: "single",
    difficulty: "easy",
    tags: ["options", "bear-put-spread", "construction"],
    prompt: "How is a bear put spread built?",
    choices: [
      { id: "a", text: "Buy a higher-strike put and sell a lower-strike put, same expiration" },
      { id: "b", text: "Buy a lower-strike put and sell a higher-strike put" },
      { id: "c", text: "Buy a call and sell a higher call" },
      { id: "d", text: "Sell a put and buy a call" },
    ],
    correctId: "a",
    explanation:
      "Buy the **higher** strike put (your bearish bet) and sell the **lower** strike put to fund it — same expiration, a net debit.",
  },
  {
    id: "bear-put-spread.q7",
    lessonSlug: "bear-put-spread",
    type: "single",
    difficulty: "hard",
    tags: ["options", "bear-put-spread", "misconception"],
    prompt: "Why is 'spreading lets me profit more on a big crash than a single put' wrong?",
    choices: [
      { id: "a", text: "The spread caps downside profit at the lower strike; its edge is lower cost and a closer breakeven" },
      { id: "b", text: "The spread has unlimited downside profit" },
      { id: "c", text: "A single put can never profit on a crash" },
      { id: "d", text: "The short put raises the breakeven" },
    ],
    correctId: "a",
    explanation:
      "Below the lower strike both puts move together, so profit is **capped**. The advantage is lower cost and a closer breakeven, not a bigger crash payout.",
  },
  {
    id: "bear-put-spread.q8",
    lessonSlug: "bear-put-spread",
    type: "single",
    difficulty: "hard",
    tags: ["options", "bear-put-spread", "risk", "assignment"],
    prompt: "A short put in the spread settles in-the-money near expiry. What's the risk?",
    choices: [
      { id: "a", text: "It can be assigned, leaving you unexpectedly long stock — close or roll before expiry" },
      { id: "b", text: "It forces you to deliver shares you don't own" },
      { id: "c", text: "It has no effect since it's part of a spread" },
      { id: "d", text: "It guarantees the max profit" },
    ],
    correctId: "a",
    explanation:
      "An in-the-money short put can be **assigned**, making you buy shares unexpectedly. Manage the tested leg before expiration.",
  },
];

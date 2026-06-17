import type { Question } from "@/lib/quiz/types";

// Quiz for the "Risk Tolerance & Time Horizon" lesson.
export const questions: Question[] = [
  {
    id: "risk-tolerance-and-time-horizon.q1",
    lessonSlug: "risk-tolerance-and-time-horizon",
    type: "single",
    difficulty: "medium",
    tags: ["portfolio", "risk-capacity"],
    prompt: "Risk **capacity** differs from risk **tolerance** because capacity is about your…",
    choices: [
      { id: "a", text: "Emotional willingness to watch losses" },
      { id: "b", text: "Financial ability to absorb losses given your goal and timeline" },
      { id: "c", text: "Favorite asset class" },
      { id: "d", text: "Past investing returns" },
    ],
    correctId: "b",
    explanation:
      "**Capacity** is your *financial ability* to absorb losses given your goal and horizon. **Tolerance** is your *emotional willingness* to endure them. Both matter, and they can diverge.",
  },
  {
    id: "risk-tolerance-and-time-horizon.q2",
    lessonSlug: "risk-tolerance-and-time-horizon",
    type: "single",
    difficulty: "easy",
    tags: ["portfolio", "horizon"],
    prompt: "A longer time horizon generally…",
    choices: [
      { id: "a", text: "Raises risk capacity, since there's more time to recover from drawdowns" },
      { id: "b", text: "Lowers risk capacity" },
      { id: "c", text: "Has no effect on how much risk you can take" },
      { id: "d", text: "Eliminates all investment risk" },
    ],
    correctId: "a",
    explanation:
      "A longer horizon **raises capacity** because there's more time to recover from losses. Near-term goals favor lower-volatility assets; long-term goals can tolerate more equity.",
  },
  {
    id: "risk-tolerance-and-time-horizon.q3",
    lessonSlug: "risk-tolerance-and-time-horizon",
    type: "single",
    difficulty: "easy",
    tags: ["portfolio", "plan", "behavior"],
    prompt: "Why does a written plan tend to beat reacting to the market in the moment?",
    choices: [
      { id: "a", text: "It guarantees higher returns" },
      { id: "b", text: "It pre-commits decisions and curbs panic-selling" },
      { id: "c", text: "It lets you time the market perfectly" },
      { id: "d", text: "It removes all risk from investing" },
    ],
    correctId: "b",
    explanation:
      "A written plan — target allocation plus a rebalancing rule — **pre-commits** your decisions before emotions spike, guarding against the behavior gap of panic-selling and chasing.",
  },
  {
    id: "risk-tolerance-and-time-horizon.q4",
    lessonSlug: "risk-tolerance-and-time-horizon",
    type: "single",
    difficulty: "medium",
    tags: ["portfolio", "sequence-risk", "scenario"],
    prompt:
      "Two retirees have the **same** average returns and the **same** withdrawals, but one suffers a big loss in **year one**. What happens?",
    choices: [
      { id: "a", text: "Both end with identical balances" },
      { id: "b", text: "The one with the early loss ends with less — this is sequence-of-returns risk" },
      { id: "c", text: "The one with the early loss ends with more" },
      { id: "d", text: "Order never affects the outcome" },
    ],
    correctId: "b",
    explanation:
      "When money is being withdrawn, the **order** of returns matters. An early loss shrinks the base that later gains build on, so that retiree ends with less — **sequence-of-returns risk**.",
  },
  {
    id: "risk-tolerance-and-time-horizon.q5",
    lessonSlug: "risk-tolerance-and-time-horizon",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["portfolio", "sequence-risk", "math"],
    unit: "$",
    prompt:
      "Start with `$1,000,000`, withdraw `$50,000` at the start of year 1, then the portfolio falls `−30%`. What's the end-of-year-1 value?",
    choices: [
      { id: "a", text: "$665,000" },
      { id: "b", text: "$700,000", feedback: "Apply the `−30%` after the withdrawal: `(1,000,000 − 50,000) × 0.70`, not `1,000,000 × 0.70`." },
      { id: "c", text: "$615,000" },
      { id: "d", text: "$950,000" },
    ],
    correctId: "a",
    explanation:
      "Withdraw first, then apply the return: `($1,000,000 − $50,000) × 0.70 = $950,000 × 0.70 = $665,000`.",
  },
  {
    id: "risk-tolerance-and-time-horizon.q6",
    lessonSlug: "risk-tolerance-and-time-horizon",
    type: "single",
    difficulty: "hard",
    tags: ["portfolio", "sequence-risk"],
    prompt:
      "For a lump sum with **no** contributions or withdrawals, how does the order of a `−30%` year and a `+30%` year affect the ending value?",
    choices: [
      { id: "a", text: "Order doesn't matter — both end at `$910,000` per `$1,000,000`" },
      { id: "b", text: "The bad-year-first order ends much lower" },
      { id: "c", text: "The good-year-first order ends much lower" },
      { id: "d", text: "It depends on the day of the week" },
    ],
    correctId: "a",
    explanation:
      "With no cash flows, multiplication commutes: `$1,000,000 × 0.70 × 1.30 = $1,000,000 × 1.30 × 0.70 = $910,000`. Sequence risk only bites when money is flowing in or out.",
  },
  {
    id: "risk-tolerance-and-time-horizon.q7",
    lessonSlug: "risk-tolerance-and-time-horizon",
    type: "single",
    difficulty: "medium",
    tags: ["portfolio", "behavior"],
    prompt: "The \"behavior gap\" refers to…",
    choices: [
      { id: "a", text: "The fee difference between two funds" },
      { id: "b", text: "Returns lost when investors react emotionally — selling low and buying high" },
      { id: "c", text: "The gap between stocks and bonds" },
      { id: "d", text: "The time between rebalancing dates" },
    ],
    correctId: "b",
    explanation:
      "The **behavior gap** is the return investors give up by reacting emotionally — locking in losses by selling low and missing recoveries. A written plan helps close it.",
  },
  {
    id: "risk-tolerance-and-time-horizon.q8",
    lessonSlug: "risk-tolerance-and-time-horizon",
    type: "single",
    difficulty: "hard",
    tags: ["portfolio", "misconception"],
    prompt:
      "A young investor says, \"I'm young, so I should always take maximum risk.\" The soundest correction is…",
    choices: [
      { id: "a", text: "Correct — youth alone justifies maximum risk" },
      { id: "b", text: "A long horizon raises capacity, but the right level also depends on tolerance, the goal, and staying invested through a downturn" },
      { id: "c", text: "Young investors should hold only cash" },
      { id: "d", text: "Risk level depends solely on age" },
    ],
    correctId: "b",
    explanation:
      "A long horizon raises **capacity**, but it doesn't override **tolerance**, the specific goal, or the need to actually stay invested through a drawdown. Panic-selling realizes losses no matter how young you are.",
  },
];

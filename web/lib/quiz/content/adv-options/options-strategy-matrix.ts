import type { Question } from "@/lib/quiz/types";

// Quiz for the "Strategy Matrix: Choosing by Outlook + Volatility" lesson.
export const questions: Question[] = [
  {
    id: "options-strategy-matrix.q1",
    lessonSlug: "options-strategy-matrix",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "options", "strategy"],
    prompt: "A customer is **bearish** and wants **defined risk** while collecting a **credit**. Which structure fits?",
    choices: [
      { id: "a", text: "Bear call (credit) spread" },
      { id: "b", text: "Bear put (debit) spread", feedback: "A bear put spread is bearish and defined-risk, but it's a debit — you pay premium rather than collect a credit." },
      { id: "c", text: "Long straddle" },
      { id: "d", text: "Covered call" },
    ],
    correctId: "a",
    explanation:
      "Bearish + credit + defined risk = a **bear call spread**: sell the lower call, buy a higher call. You collect a net credit and cap the loss at `width − credit`.",
  },
  {
    id: "options-strategy-matrix.q2",
    lessonSlug: "options-strategy-matrix",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "options", "neutral", "theta"],
    prompt: "An investor is **neutral**, sees **high IV**, and wants **positive theta with defined risk**. Best fit?",
    choices: [
      { id: "a", text: "Iron condor" },
      { id: "b", text: "Long strangle", feedback: "A long strangle is a negative-theta buyer that needs a big move — the opposite of a neutral, range-bound, positive-theta view." },
      { id: "c", text: "Long call" },
      { id: "d", text: "Protective put" },
    ],
    correctId: "a",
    explanation:
      "An **iron condor** (or long butterfly) is a neutral, positive-theta, defined-risk seller of premium — ideal when IV is rich and you expect a range.",
  },
  {
    id: "options-strategy-matrix.q3",
    lessonSlug: "options-strategy-matrix",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "spreads", "max-loss"],
    unit: "$",
    prompt: "A credit spread collects a `$2` credit on `$5`-wide strikes (one contract). What is the max loss?",
    choices: [
      { id: "a", text: "$200" },
      { id: "b", text: "$300" },
      { id: "c", text: "$500", feedback: "That's the full strike width — but you keep the $2 credit, so the loss is only width minus credit." },
      { id: "d", text: "$700" },
    ],
    correctId: "b",
    explanation:
      "Max loss = `(width − credit) × 100 = (5 − 2) × 100 = $300`. The credit you collected offsets part of the width.",
  },
  {
    id: "options-strategy-matrix.q4",
    lessonSlug: "options-strategy-matrix",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "options", "same-side"],
    prompt: "Which two positions are on the **same (bullish) side** of the market?",
    choices: [
      { id: "a", text: "Long calls and short puts" },
      { id: "b", text: "Long calls and long puts", feedback: "Long calls are bullish but long puts are bearish — those are opposite sides, not the same side." },
      { id: "c", text: "Short calls and long puts" },
      { id: "d", text: "Long puts and short calls" },
    ],
    correctId: "a",
    explanation:
      "Bullish = **long calls + short puts** (both profit when the stock rises). Bearish = long puts + short calls.",
  },
  {
    id: "options-strategy-matrix.q5",
    lessonSlug: "options-strategy-matrix",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "options", "scenario"],
    prompt: "A customer owns `100` shares of `XYZ` at `$50`, is mildly bullish, and wants downside protection at **low or zero net cost**. Best fit?",
    choices: [
      { id: "a", text: "Collar" },
      { id: "b", text: "Long straddle" },
      { id: "c", text: "Bare protective put", feedback: "A bare protective put protects but isn't low/zero cost — the collar's short call finances the put." },
      { id: "d", text: "Cash-secured put" },
    ],
    correctId: "a",
    explanation:
      "A **collar** (long stock + long OTM put + short OTM call) puts a floor under the shares while the short call's premium offsets the put's cost — protection at low or zero net cost.",
  },
  {
    id: "options-strategy-matrix.q6",
    lessonSlug: "options-strategy-matrix",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "options", "volatility", "max-loss"],
    unit: "$",
    prompt: "Expecting a sharp move of unknown direction, a customer buys a **long straddle**: the ATM call for `$4` and the ATM put for `$3` (one each). As a premium buyer, what is the **most** this position can lose?",
    choices: [
      { id: "a", text: "$700" },
      { id: "b", text: "$400", feedback: "That's only the call premium — a long straddle's max loss is the total of both legs paid." },
      { id: "c", text: "$100" },
      { id: "d", text: "Unlimited" },
    ],
    correctId: "a",
    explanation:
      "A long straddle is a defined-risk premium **buyer**: max loss = total premium = `(4 + 3) × 100 = $700`, if the stock pins the strike.",
  },
  {
    id: "options-strategy-matrix.q7",
    lessonSlug: "options-strategy-matrix",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["fn:3", "options", "debit-credit"],
    unit: "$",
    prompt: "A customer pays a `$2.50` net debit for a `$5`-wide defined-risk spread (one contract). What is the **max loss**?",
    choices: [
      { id: "a", text: "$250" },
      { id: "b", text: "$500", feedback: "$500 is the strike width — on a debit spread the max loss is just the debit you paid." },
      { id: "c", text: "$750" },
      { id: "d", text: "$200" },
    ],
    correctId: "a",
    explanation:
      "On a debit spread the max loss is the **net debit paid** = `$2.50 × 100 = $250`. (Max gain would be `width − debit = $250`.)",
  },
  {
    id: "options-strategy-matrix.q8",
    lessonSlug: "options-strategy-matrix",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["fn:3", "options", "credit", "max-loss"],
    unit: "$",
    prompt: "A bearish customer sells a defined-risk **bear call spread** for a `$1.75` credit on `$5`-wide strikes (one contract). What is the **max loss**?",
    choices: [
      { id: "a", text: "$325" },
      { id: "b", text: "$175", feedback: "$175 is the max gain (the credit) — the max loss on a credit spread is width minus credit." },
      { id: "c", text: "$500" },
      { id: "d", text: "$675" },
    ],
    correctId: "a",
    explanation:
      "Credit-spread max loss = `(width − credit) × 100 = (5 − 1.75) × 100 = $325`. The `$175` credit only caps the gain.",
  },
];

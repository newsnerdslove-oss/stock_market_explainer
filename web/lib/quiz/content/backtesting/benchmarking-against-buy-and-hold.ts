import type { Question } from "@/lib/quiz/types";

// Quiz for the "Benchmarking Against Buy-and-Hold" lesson.
export const questions: Question[] = [
  {
    id: "benchmarking-against-buy-and-hold.q1",
    lessonSlug: "benchmarking-against-buy-and-hold",
    type: "single",
    difficulty: "easy",
    tags: ["benchmark", "concept"],
    prompt:
      "For a strategy that trades only the S&P 500, what is the most appropriate benchmark?",
    choices: [
      { id: "a", text: "A high-yield savings account rate", feedback: "That's an unrelated, easier hurdle — it doesn't reflect what you could have trivially done with the same asset." },
      { id: "b", text: "Buy-and-hold of the S&P 500 over the same period" },
      { id: "c", text: "The best-performing single tech stock that year" },
      { id: "d", text: "The strategy's own average return" },
    ],
    correctId: "b",
    explanation:
      "Compare apples to apples: same asset, same dates, same starting capital. The do-nothing alternative for an S&P 500 strategy is **buy-and-hold of the S&P 500**.",
  },
  {
    id: "benchmarking-against-buy-and-hold.q2",
    lessonSlug: "benchmarking-against-buy-and-hold",
    type: "single",
    difficulty: "medium",
    tags: ["benchmark", "scenario"],
    prompt:
      "Your strategy returned `8%` annually over a period in which buy-and-hold of the same index returned `12%`. What's the right conclusion?",
    choices: [
      { id: "a", text: "The strategy underperformed — it earned less than simply holding the asset" },
      { id: "b", text: "The strategy is great because any positive return is a win", feedback: "A positive return is meaningless without a benchmark; here the benchmark beat the strategy by 4 points." },
      { id: "c", text: "The 8% proves the strategy has positive alpha" },
      { id: "d", text: "You can't compare them because they're different things" },
    ],
    correctId: "a",
    explanation:
      "All that trading earned `8%` while doing nothing earned `12%`. The strategy **destroyed value** relative to the benchmark — raw return is only meaningful next to buy-and-hold.",
  },
  {
    id: "benchmarking-against-buy-and-hold.q3",
    lessonSlug: "benchmarking-against-buy-and-hold",
    type: "single",
    difficulty: "medium",
    tags: ["risk-adjusted", "drawdown", "scenario"],
    prompt:
      "Strategy A returns `10%` with a `50%` max drawdown. Buy-and-hold returns `9%` with a `20%` max drawdown. On a risk-adjusted basis…",
    choices: [
      { id: "a", text: "Strategy A clearly wins because 10% > 9%", feedback: "Raw return isn't the finish line — A's far larger drawdown makes its extra 1% a bad trade." },
      { id: "b", text: "They are identical since both are positive" },
      { id: "c", text: "Buy-and-hold looks better — nearly the same return for far less drawdown" },
      { id: "d", text: "Drawdown is irrelevant to the comparison" },
    ],
    correctId: "c",
    explanation:
      "An extra `1%` of return bought with `2.5×` the drawdown is a poor deal. The honest comparison is **risk-adjusted** — Sharpe and max drawdown side by side — and buy-and-hold wins here.",
  },
  {
    id: "benchmarking-against-buy-and-hold.q4",
    lessonSlug: "benchmarking-against-buy-and-hold",
    type: "single",
    difficulty: "medium",
    tags: ["alpha", "concept"],
    prompt: "Alpha is best described as…",
    choices: [
      { id: "a", text: "A strategy's raw total return" },
      { id: "b", text: "The benchmark's return over the period" },
      { id: "c", text: "The volatility of the strategy" },
      { id: "d", text: "Return earned above the benchmark for the same risk exposure" },
    ],
    correctId: "d",
    explanation:
      "**Alpha** is the return above the benchmark for the same risk — the part attributable to skill, not just the market rising. A strategy can have positive raw return yet **negative alpha**.",
  },
  {
    id: "benchmarking-against-buy-and-hold.q5",
    lessonSlug: "benchmarking-against-buy-and-hold",
    type: "single",
    difficulty: "hard",
    tags: ["taxes", "regulatory"],
    prompt:
      "In a taxable account, why do taxes raise an active strategy's hurdle versus buy-and-hold?",
    choices: [
      { id: "a", text: "Frequent trading realizes short-term gains, taxed at higher ordinary income rates, while buy-and-hold defers and qualifies for lower long-term rates" },
      { id: "b", text: "Active strategies are exempt from capital gains tax" },
      { id: "c", text: "Buy-and-hold pays a higher tax rate than active trading" },
      { id: "d", text: "Short-term and long-term gains are always taxed identically", feedback: "They aren't — short-term gains are taxed as ordinary income; long-term (held over a year) gets preferential lower rates." },
    ],
    correctId: "a",
    explanation:
      "The IRS taxes gains on positions held **one year or less** as **short-term** at ordinary income rates; **more than one year** is **long-term** at lower rates. High turnover means mostly short-term gains, a permanent drag buy-and-hold avoids by deferring.",
  },
  {
    id: "benchmarking-against-buy-and-hold.q6",
    lessonSlug: "benchmarking-against-buy-and-hold",
    type: "single",
    difficulty: "hard",
    tags: ["wash-sale", "regulatory"],
    prompt:
      "You sell a stock at a loss and rebuy a substantially identical security 10 days later. Under the IRS wash sale rule…",
    choices: [
      { id: "a", text: "The loss is fully deductible immediately" },
      { id: "b", text: "The loss is disallowed and added to the cost basis of the replacement shares" },
      { id: "c", text: "The gain is converted to long-term automatically" },
      { id: "d", text: "Nothing happens because the rule only applies after 60 days", feedback: "The wash sale window is 30 days before or after the sale — 10 days later falls squarely inside it." },
    ],
    correctId: "b",
    explanation:
      "Under IRC §1091, buying a substantially identical security within **30 days before or after** a loss sale **disallows** the loss; it's added to the replacement's cost basis, deferring the deduction.",
  },
  {
    id: "benchmarking-against-buy-and-hold.q7",
    lessonSlug: "benchmarking-against-buy-and-hold",
    type: "single",
    difficulty: "medium",
    tags: ["complexity", "concept"],
    prompt:
      "A 12-parameter strategy beats one-line buy-and-hold by a tiny margin after costs. The lesson's guidance is…",
    choices: [
      { id: "a", text: "Always pick the more complex model — more rules mean more edge" },
      { id: "b", text: "Complexity is free, so it doesn't matter which you choose" },
      { id: "c", text: "Added complexity must earn its keep; a razor-thin win usually favors the simpler, more robust choice" },
      { id: "d", text: "Parameter count has no effect on overfitting risk", feedback: "More parameters mean more ways to overfit and break in new regimes — exactly why complexity must justify itself." },
    ],
    correctId: "c",
    explanation:
      "Every added rule is a chance to overfit and break in a new regime. Complexity must beat buy-and-hold by **enough** to justify the fragility — a hair's-width edge favors **parsimony**.",
  },
];

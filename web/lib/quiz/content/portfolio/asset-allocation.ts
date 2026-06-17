import type { Question } from "@/lib/quiz/types";

// Quiz for the "Asset Allocation: The Decision That Drives Your Portfolio" lesson.
export const questions: Question[] = [
  {
    id: "asset-allocation.q1",
    lessonSlug: "asset-allocation",
    type: "single",
    difficulty: "easy",
    tags: ["portfolio", "allocation"],
    prompt: "Asset allocation is best described as…",
    choices: [
      { id: "a", text: "Choosing which individual stocks to buy" },
      { id: "b", text: "Dividing money across broad asset classes like stocks, bonds, and cash" },
      { id: "c", text: "Timing when to enter and exit the market" },
      { id: "d", text: "Picking the cheapest fund by fee" },
    ],
    correctId: "b",
    explanation:
      "**Asset allocation** is the high-level split of a portfolio across broad asset classes — stocks, bonds, cash — to match a goal and risk level. It's a different (and bigger) decision than picking individual securities.",
  },
  {
    id: "asset-allocation.q2",
    lessonSlug: "asset-allocation",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["portfolio", "allocation", "math"],
    unit: "%",
    prompt: "A portfolio is `70%` stocks (returned `+8%`) and `30%` bonds (returned `+4%`). What's its return?",
    choices: [
      { id: "a", text: "6.0%" },
      { id: "b", text: "6.8%" },
      { id: "c", text: "7.2%" },
      { id: "d", text: "12.0%", feedback: "That adds the raw returns instead of weighting them by their shares." },
    ],
    correctId: "b",
    explanation:
      "Weighted average: `0.70 × 8% + 0.30 × 4% = 5.6% + 1.2% = 6.8%`.",
  },
  {
    id: "asset-allocation.q3",
    lessonSlug: "asset-allocation",
    type: "single",
    difficulty: "medium",
    tags: ["portfolio", "allocation", "research"],
    prompt:
      "The Brinson, Hood, and Beebower study is most accurately summarized as: allocation policy explained most of a diversified portfolio's…",
    choices: [
      { id: "a", text: "Dollar return — it determines ~94% of the money you earn" },
      { id: "b", text: "Return variability over time — the variation, not the dollar level", feedback: "Close, but flip which one — the finding is about variability over time, not the dollar level." },
      { id: "c", text: "Future tax bill" },
      { id: "d", text: "Number of holdings" },
    ],
    correctId: "b",
    explanation:
      "The famous `~93.6%` figure describes how much of the *variability of returns over time* allocation explained — **not** the level of dollars earned. It's a common misquote to say allocation \"determines 90% of returns.\"",
  },
  {
    id: "asset-allocation.q4",
    lessonSlug: "asset-allocation",
    type: "single",
    difficulty: "easy",
    tags: ["portfolio", "asset-class"],
    prompt: "Compared with stocks, bonds typically offer…",
    choices: [
      { id: "a", text: "Higher expected return and higher volatility" },
      { id: "b", text: "Lower expected return, income, and smaller swings" },
      { id: "c", text: "No return and perfect liquidity" },
      { id: "d", text: "Guaranteed gains every year" },
    ],
    correctId: "b",
    explanation:
      "**Bonds** generally provide lower expected return than stocks, deliver income, and swing less. Stocks carry higher expected return *and* higher volatility; cash is stable but barely grows.",
  },
  {
    id: "asset-allocation.q5",
    lessonSlug: "asset-allocation",
    type: "single",
    difficulty: "medium",
    tags: ["portfolio", "allocation", "scenario"],
    prompt:
      "You're saving for a house down payment due in **18 months** and want the balance to stay stable. Which allocation fits best?",
    choices: [
      { id: "a", text: "Mostly stocks, for maximum growth" },
      { id: "b", text: "Heavier in bonds and cash for stability" },
      { id: "c", text: "100% in a single high-growth stock" },
      { id: "d", text: "All cash in a foreign currency" },
    ],
    correctId: "b",
    explanation:
      "A near-term goal that needs price stability favors **bonds and cash**. There isn't time to recover from a stock drawdown before the money is needed.",
  },
  {
    id: "asset-allocation.q6",
    lessonSlug: "asset-allocation",
    type: "single",
    difficulty: "medium",
    tags: ["portfolio", "strategic"],
    prompt: "In what order are these decisions typically made?",
    choices: [
      { id: "a", text: "Pick individual stocks first, then back into an allocation" },
      { id: "b", text: "Set the strategic asset allocation first, then select securities" },
      { id: "c", text: "Rebalance first, then choose a target mix" },
      { id: "d", text: "There is no order; they are unrelated" },
    ],
    correctId: "b",
    explanation:
      "The **strategic allocation** is set first — it's the high-level mix chosen before any individual security selection. Rebalancing comes later to restore that mix.",
  },
  {
    id: "asset-allocation.q7",
    lessonSlug: "asset-allocation",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["portfolio", "allocation", "math"],
    unit: "%",
    prompt:
      "A portfolio is `50%` stocks (`+12%`), `40%` bonds (`−2%`), and `10%` cash (`+1%`). What's its return?",
    choices: [
      { id: "a", text: "3.7%" },
      { id: "b", text: "5.3%" },
      { id: "c", text: "6.1%" },
      { id: "d", text: "11.0%", feedback: "Each class must be weighted by its share before summing — you can't just add the returns." },
    ],
    correctId: "b",
    explanation:
      "`0.50 × 12% + 0.40 × (−2%) + 0.10 × 1% = 6.0% − 0.8% + 0.1% = 5.3%`.",
  },
  {
    id: "asset-allocation.q8",
    lessonSlug: "asset-allocation",
    type: "single",
    difficulty: "hard",
    tags: ["portfolio", "misconception"],
    prompt:
      "A friend says, \"For my diversified fund, picking the very best stocks is what matters most for my results.\" The soundest correction is…",
    choices: [
      { id: "a", text: "Agreed — security selection drives nearly all of a diversified portfolio's results" },
      { id: "b", text: "For a diversified portfolio, the high-level allocation drives most return variability; security picks matter far less" },
      { id: "c", text: "Only market timing matters; allocation is irrelevant" },
      { id: "d", text: "Nothing can be said — returns are entirely random" },
    ],
    correctId: "b",
    explanation:
      "For a diversified portfolio the stock/bond/cash **allocation** is the dominant driver of return variability over time. Individual security selection contributes far less than most people assume.",
  },
];

import type { Question } from "@/lib/quiz/types";

// Quiz for the "The Big Backtesting Pitfalls" lesson.
export const questions: Question[] = [
  {
    id: "backtesting-pitfalls.q1",
    lessonSlug: "backtesting-pitfalls",
    type: "single",
    difficulty: "easy",
    tags: ["pitfalls", "survivorship", "concept"],
    prompt: "Survivorship bias inflates backtest results because it…",
    choices: [
      { id: "a", text: "Excludes companies that failed or were delisted" },
      { id: "b", text: "Adds extra transaction costs" },
      { id: "c", text: "Uses too little historical data" },
      { id: "d", text: "Counts dividends twice" },
    ],
    correctId: "a",
    explanation:
      "By keeping only the survivors and dropping bankrupt or delisted names, survivorship bias **overstates returns and hides risk**.",
  },
  {
    id: "backtesting-pitfalls.q2",
    lessonSlug: "backtesting-pitfalls",
    type: "single",
    difficulty: "easy",
    tags: ["pitfalls", "look-ahead", "defense"],
    prompt: "The standard defense against look-ahead bias is…",
    choices: [
      { id: "a", text: "Using more parameters" },
      { id: "b", text: "Point-in-time data" },
      { id: "c", text: "A higher win rate" },
      { id: "d", text: "Trading less often" },
    ],
    correctId: "b",
    explanation:
      "**Point-in-time data** records exactly what was known on each date, preventing the use of information that wasn't available yet.",
  },
  {
    id: "backtesting-pitfalls.q3",
    lessonSlug: "backtesting-pitfalls",
    type: "single",
    difficulty: "medium",
    tags: ["pitfalls", "look-ahead", "scenario"],
    prompt:
      "A strategy computes its entry threshold from the **full year's** daily returns, then trades on day 3 of that year. This is…",
    choices: [
      { id: "a", text: "Survivorship bias" },
      { id: "b", text: "Slippage" },
      { id: "c", text: "Look-ahead bias" },
      { id: "d", text: "Regime change" },
    ],
    correctId: "c",
    explanation:
      "Using the whole year's data to trade on day 3 requires information not yet available — textbook **look-ahead bias**.",
  },
  {
    id: "backtesting-pitfalls.q4",
    lessonSlug: "backtesting-pitfalls",
    type: "single",
    difficulty: "medium",
    tags: ["pitfalls", "data-snooping", "scenario"],
    prompt:
      "A team tests `200` parameter combinations and markets only the single best performer. The core problem is…",
    choices: [
      { id: "a", text: "Data-snooping — the winner may be luck, not skill" },
      { id: "b", text: "Look-ahead bias from future prices", feedback: "No future data is used here; the issue is testing many variants and keeping one." },
      { id: "c", text: "Survivorship bias from delisted names" },
      { id: "d", text: "Ignored slippage" },
    ],
    correctId: "a",
    explanation:
      "Testing many variants and reporting only the best is **data-snooping (multiple testing / p-hacking)** — the winner can easily be chance.",
  },
  {
    id: "backtesting-pitfalls.q5",
    lessonSlug: "backtesting-pitfalls",
    type: "single",
    difficulty: "medium",
    tags: ["pitfalls", "regime", "concept"],
    prompt: "Why does **regime change** threaten a backtested strategy?",
    choices: [
      { id: "a", text: "It deletes failed companies from the dataset" },
      { id: "b", text: "Markets shift in volatility, rates, or structure, breaking a strategy fit to the old regime" },
      { id: "c", text: "It adds commissions to every trade" },
      { id: "d", text: "It uses future data in past decisions" },
    ],
    correctId: "b",
    explanation:
      "A strategy tuned to one market **regime** can break when conditions shift — volatility, rates, liquidity, or structure change.",
  },
  {
    id: "backtesting-pitfalls.q6",
    lessonSlug: "backtesting-pitfalls",
    type: "single",
    difficulty: "medium",
    tags: ["pitfalls", "data-revisions", "edge-case"],
    prompt: "How can look-ahead bias sneak in through **data revisions**?",
    choices: [
      { id: "a", text: "Revised commissions lower past costs" },
      { id: "b", text: "Restated figures (e.g., GDP or earnings) weren't the values traders actually saw on that date" },
      { id: "c", text: "Revisions delete delisted tickers" },
      { id: "d", text: "Revisions always shorten the dataset" },
    ],
    correctId: "b",
    explanation:
      "GDP and earnings get **restated** after release, so today's database value may differ from what was knowable on the trade date.",
  },
  {
    id: "backtesting-pitfalls.q7",
    lessonSlug: "backtesting-pitfalls",
    type: "single",
    difficulty: "hard",
    tags: ["pitfalls", "costs", "scenario"],
    prompt:
      "A high-frequency mean-reversion system backtests at `+30%` CAGR but loses money live; costs were never modeled. The most likely cause is…",
    choices: [
      { id: "a", text: "Slippage and commissions on high turnover erased the edge" },
      { id: "b", text: "Survivorship bias inflated the live results" },
      { id: "c", text: "The risk-free rate was too high" },
      { id: "d", text: "Regime change made the data too long", feedback: "The tell here is unmodeled costs on a high-turnover strategy, not regime length." },
    ],
    correctId: "a",
    explanation:
      "High turnover multiplies **slippage and commissions**. Leaving them out can turn a paper winner into a live loser.",
  },
  {
    id: "backtesting-pitfalls.q8",
    lessonSlug: "backtesting-pitfalls",
    type: "single",
    difficulty: "hard",
    tags: ["pitfalls", "survivorship", "scenario"],
    prompt:
      "Testing \"buy the 30 largest US stocks, rebalance yearly\" over `2000-2024` using **today's** survivors will most likely…",
    choices: [
      { id: "a", text: "Understate returns and overstate risk" },
      { id: "b", text: "Overstate returns and understate risk" },
      { id: "c", text: "Produce results identical to a bias-free dataset" },
      { id: "d", text: "Be unaffected because large stocks rarely fail" },
    ],
    correctId: "b",
    explanation:
      "Names like Enron and Lehman never appear, so survivorship bias **overstates returns and understates risk**. A bias-free dataset is less rosy.",
  },
];

import type { Question } from "@/lib/quiz/types";

// Quiz for the "Evaluating a Backtest & Going Live" lesson.
export const questions: Question[] = [
  {
    id: "evaluating-a-backtest-and-going-live.q1",
    lessonSlug: "evaluating-a-backtest-and-going-live",
    type: "single",
    difficulty: "easy",
    tags: ["metrics", "profit-factor", "concept"],
    prompt: "Profit factor is calculated as…",
    choices: [
      { id: "a", text: "Gross profit ÷ gross loss" },
      { id: "b", text: "Gross loss ÷ gross profit", feedback: "That's upside down — profit factor puts gross profit on top." },
      { id: "c", text: "Net profit ÷ number of trades" },
      { id: "d", text: "Win rate × average win" },
    ],
    correctId: "a",
    explanation:
      "**Profit factor = gross profit ÷ gross loss.** Above `1` is profitable; `~1.75-4` is healthy; far above `~4` can hint at overfitting.",
  },
  {
    id: "evaluating-a-backtest-and-going-live.q2",
    lessonSlug: "evaluating-a-backtest-and-going-live",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["metrics", "profit-factor", "math"],
    prompt: "Winners total `$9,000` and losers total `$6,000`. What is the profit factor?",
    choices: [
      { id: "a", text: "1.5" },
      { id: "b", text: "0.67", feedback: "That's gross loss ÷ gross profit — the ratio inverted." },
      { id: "c", text: "3.0" },
      { id: "d", text: "15" },
    ],
    correctId: "a",
    explanation:
      "`Profit factor = 9,000 ÷ 6,000 = 1.5` — profitable and within the healthy zone.",
  },
  {
    id: "evaluating-a-backtest-and-going-live.q3",
    lessonSlug: "evaluating-a-backtest-and-going-live",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["metrics", "drawdown", "math"],
    unit: "%",
    prompt: "Equity peaks at `$20,000`, then falls to a trough of `$15,000`. What is the maximum drawdown?",
    choices: [
      { id: "a", text: "5" },
      { id: "b", text: "20" },
      { id: "c", text: "25" },
      { id: "d", text: "33", feedback: "That divides the loss by the trough; max drawdown divides by the peak." },
    ],
    correctId: "c",
    explanation:
      "`MDD = (15,000 − 20,000) ÷ 20,000 = −25%` — a `25%` peak-to-trough drop.",
  },
  {
    id: "evaluating-a-backtest-and-going-live.q4",
    lessonSlug: "evaluating-a-backtest-and-going-live",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["metrics", "sharpe", "math"],
    prompt: "Annual return is `15%`, the risk-free rate is `3%`, and the standard deviation is `6%`. What is the Sharpe ratio?",
    choices: [
      { id: "a", text: "1.5" },
      { id: "b", text: "2.0" },
      { id: "c", text: "2.5", feedback: "That forgets to subtract the risk-free rate before dividing." },
      { id: "d", text: "3.0" },
    ],
    correctId: "b",
    explanation:
      "`Sharpe = (15 − 3) ÷ 6 = 2.0` — return per unit of volatility, after subtracting the risk-free rate.",
  },
  {
    id: "evaluating-a-backtest-and-going-live.q5",
    lessonSlug: "evaluating-a-backtest-and-going-live",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["metrics", "cagr", "math"],
    unit: "%",
    prompt: "An account grows from `$10,000` to `$14,000` over `2` years. What is the CAGR (approximately)?",
    choices: [
      { id: "a", text: "18.3" },
      { id: "b", text: "20", feedback: "That's 40% ÷ 2 — but growth compounds, so you can't just divide by the years." },
      { id: "c", text: "40" },
      { id: "d", text: "14" },
    ],
    correctId: "a",
    explanation:
      "`CAGR = (14,000 ÷ 10,000)^(1 ÷ 2) − 1 = (1.4)^0.5 − 1 ≈ 18.3%`. Compounding makes it less than the naive `20%`.",
  },
  {
    id: "evaluating-a-backtest-and-going-live.q6",
    lessonSlug: "evaluating-a-backtest-and-going-live",
    type: "single",
    difficulty: "medium",
    tags: ["metrics", "win-rate", "scenario"],
    prompt:
      "A strategy wins `90%` of its trades but still **loses money** overall. The most likely reason is…",
    choices: [
      { id: "a", text: "Its few losing trades are huge, pushing profit factor below 1" },
      { id: "b", text: "A 90% win rate is mathematically impossible" },
      { id: "c", text: "Its Sharpe ratio must be exactly zero" },
      { id: "d", text: "Win rate alone proves it is profitable", feedback: "Win rate without profit factor and drawdown can be deeply misleading." },
    ],
    correctId: "a",
    explanation:
      "Win rate isn't an edge by itself. A few enormous losses can outweigh many small wins, driving **profit factor below `1`**.",
  },
  {
    id: "evaluating-a-backtest-and-going-live.q7",
    lessonSlug: "evaluating-a-backtest-and-going-live",
    type: "single",
    difficulty: "medium",
    tags: ["walk-forward", "concept"],
    prompt: "Walk-forward analysis works by…",
    choices: [
      { id: "a", text: "Optimizing and testing on the exact same window" },
      { id: "b", text: "Optimizing on an in-sample window, testing on the next out-of-sample window, then rolling forward" },
      { id: "c", text: "Trading only the single best parameter ever found" },
      { id: "d", text: "Removing all delisted tickers from the data" },
    ],
    correctId: "b",
    explanation:
      "Walk-forward optimizes on one window, tests on the **next** out-of-sample window, then rolls forward and repeats — a robustness gold standard.",
  },
  {
    id: "evaluating-a-backtest-and-going-live.q8",
    lessonSlug: "evaluating-a-backtest-and-going-live",
    type: "single",
    difficulty: "hard",
    tags: ["going-live", "scenario", "process"],
    prompt:
      "A strategy passes walk-forward with strong metrics. What is the most prudent **next** step?",
    choices: [
      { id: "a", text: "Re-optimize on the out-of-sample segments to squeeze out more return", feedback: "Re-optimizing on the OOS segments contaminates them and invites overfitting." },
      { id: "b", text: "Deploy full capital immediately to capture the edge" },
      { id: "c", text: "Paper trade, then start with small position sizing and scale as live results confirm" },
      { id: "d", text: "Conclude live results are guaranteed to match the backtest" },
    ],
    correctId: "c",
    explanation:
      "Even a robust backtest is hypothetical. **Paper trade** to catch execution and cost issues, then start **small** and scale only as live results confirm.",
  },
];

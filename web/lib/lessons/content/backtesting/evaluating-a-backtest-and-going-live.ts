import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "evaluating-a-backtest-and-going-live",
  title: "Evaluating a Backtest & Going Live",
  level: 3,
  moduleId: "markets-backtesting",
  moduleOrder: 4,
  summary: "Read CAGR, drawdown, Sharpe, win rate, and profit factor together; validate with walk-forward; then paper-trade and size up slowly.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "Your strategy passed its out-of-sample test. Now what does \"good\" actually look like — and how do you cross the chasm from a promising backtest to real money without getting burned? This lesson covers the core metrics, the gold-standard validation method, and the cautious path to going live.",
    },
    { type: "heading", text: "The five metrics that matter" },
    {
      type: "list",
      items: [
        "**CAGR** — the smoothed annual growth rate: `(Final ÷ Initial)^(1 ÷ Years) − 1`.",
        "**Maximum drawdown (MDD)** — the worst peak-to-trough fall: `(Trough − Peak) ÷ Peak`. This is your worst-case pain.",
        "**Sharpe ratio** — risk-adjusted return: `(Return − R_f) ÷ std dev`. Higher means more return per unit of volatility.",
        "**Win rate** — the percentage of trades that were profitable. By itself, *not* an edge — a few big losses can wipe out many small wins.",
        "**Profit factor** — `gross profit ÷ gross loss`. Above `1` is profitable; `~1.75-4` is a healthy zone; far above `~4` can hint at overfitting (a rough rule of thumb).",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "CAGR", def: "Compound annual growth rate: (Final ÷ Initial)^(1 ÷ Years) − 1 — the smoothed yearly rate." },
        { term: "Maximum drawdown", def: "The worst peak-to-trough decline: (Trough − Peak) ÷ Peak." },
        { term: "Sharpe ratio", def: "(Return − risk-free rate) ÷ standard deviation — return per unit of volatility." },
        { term: "Profit factor", def: "Gross profit ÷ gross loss. Above 1 is profitable; far above ~4 can signal overfitting." },
        { term: "Win rate", def: "The share of trades that were profitable — meaningless without profit factor and drawdown." },
        { term: "Walk-forward analysis", def: "Optimize on an in-sample window, test on the next out-of-sample window, roll forward, and repeat." },
        { term: "Paper trading", def: "Simulating the strategy live with real-time data but no real money, to catch execution and cost issues." },
      ],
    },
    { type: "heading", text: "Worked example: reading the numbers" },
    {
      type: "text",
      body:
        "Suppose your winners summed to `+$8,000` (gross profit) and your losers to `−$5,000` (gross loss). **Profit factor** = `8,000 ÷ 5,000 = 1.6` — healthy, and comfortably below the overfitting zone. Your equity peaked at `$12,000`, then fell to `$9,000`, so **max drawdown** = `(9,000 − 12,000) ÷ 12,000 = −25%`. With an annual return of `12%`, a risk-free rate of `2%`, and a standard deviation of `8%`, **Sharpe** = `(12 − 2) ÷ 8 = 1.25`.",
    },
    {
      type: "text",
      body:
        "Now a **CAGR** trap. Account grew `$10,000 → $14,000` over `2` years. The lazy answer is `40% ÷ 2 = 20%` per year — but that's wrong, because growth compounds. The real figure is `(1.4)^(1 ÷ 2) − 1 ≈ 18.3%`. Always compound; never just divide by the number of years.",
    },
    { type: "heading", text: "Validate, then go live carefully" },
    {
      type: "text",
      body:
        "**Walk-forward analysis** is the robustness gold standard: optimize on an in-sample window, test on the *next* out-of-sample window, then roll the whole window forward and repeat. This simulates how you'd actually re-tune over time, across many regimes. Once a strategy survives that, the path to live is deliberately slow: **paper trade** first (live, real-time data, no real money) to surface execution and cost surprises, then start with **small position sizing** and scale up *only* as live results confirm the backtest.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "No single metric tells the truth. A `90%` win rate can still *lose* money — profit factor below `1` — if the rare `10%` of losses are enormous. Read win rate *with* profit factor and drawdown. And annualizing Sharpe or CAGR only works when your return frequency is consistent.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"a great backtest means a great live strategy.\"* Even a robust, walk-forward-validated backtest is **hypothetical**. Walk-forward, paper trading, and small position sizing *manage* the gap between backtest and reality — they don't eliminate it. Backtested performance is not actual performance.",
    },
  ],
};

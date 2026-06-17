import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "overfitting-and-curve-fitting",
  title: "Overfitting: When a Strategy Memorizes the Past",
  level: 3,
  moduleId: "markets-backtesting",
  moduleOrder: 2,
  summary: "Tune a strategy too hard and it memorizes random noise instead of a real edge. The IS-vs-OOS gap is how you catch it.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "There's a seductive trap in backtesting: the more you tinker, the better your results look — right up until you trade it and the profits vanish. This is **overfitting**, and it's the number-one reason backtests lie. The strategy didn't learn how markets work; it *memorized* the exact wiggles of one stretch of history.",
    },
    {
      type: "text",
      body:
        "**Overfitting** means a strategy is tuned so tightly that it captures **noise** — the random, one-off quirks of the data — instead of **signal**, a durable relationship that repeats. Memorizing noise feels like progress in-sample but fails out-of-sample, because next year's noise is different. **Curve-fitting** is overfitting done through overly precise parameter tweaks: each tweak conveniently removes a past loss, so the equity curve looks ever-smoother while the strategy quietly molds itself to history.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Overfitting", def: "Tuning a strategy so tightly it captures random noise rather than a durable signal, so it fails out-of-sample." },
        { term: "Curve-fitting", def: "Overfitting via overly precise parameter tweaks that each remove a specific past loss." },
        { term: "Signal vs. noise", def: "Signal is a durable, repeating relationship; noise is random, one-off variation that won't recur." },
        { term: "Degrees of freedom / parameters", def: "The knobs a strategy can turn. More parameters = more ways to bend around noise — a liability, not a strength." },
        { term: "Robustness", def: "How well a strategy holds up to small changes in parameters, data, or conditions." },
        { term: "Parameter plateau", def: "A broad range of parameter values that all work well — the opposite of a fragile single peak." },
      ],
    },
    { type: "heading", text: "Why more knobs make it worse" },
    {
      type: "text",
      body:
        "Every parameter you add is another **degree of freedom** — another way to bend the strategy around the data's random bumps. With enough knobs you can fit *any* history perfectly, the way a curve through enough points can pass through pure noise. So degrees of freedom are a **liability**: prefer simple strategies with **few parameters** and a **logical rationale** for why the edge should exist. \"It just backtests well\" is not a rationale.",
    },
    { type: "heading", text: "The telltale signature" },
    {
      type: "list",
      items: [
        "**Great in-sample, poor out-of-sample** — a wide IS/OOS gap is the classic fingerprint of overfitting.",
        "**Magic numbers** — a `37`-day lookback that's far better than `35` or `40` is a red flag; real edges degrade *gracefully* as you nudge parameters.",
        "**Too-good results** — a profit factor far above `~4` or an implausible Sharpe usually means the curve was fit, not discovered.",
      ],
    },
    {
      type: "text",
      body:
        "A practical defense: test parameter **neighborhoods**, not single peaks. If `35`, `37`, and `40` days all work, you've found a **plateau** — evidence of a stable effect. If only `37` works, you've found a fragile spike that likely won't survive. This whole problem is a cousin of **data-snooping**: trying many variants and keeping only the best.",
    },
    { type: "heading", text: "Walkthrough: a mean-reversion system" },
    {
      type: "text",
      body:
        "Imagine a mean-reversion system polished with 11 hand-picked filters: RSI below `27` (not `30`), a `9`-day exit, skip Mondays, only trade when VIX is under `18.3`, and so on. In-sample (`2012-2019`) it posts a dazzling `+40%` CAGR. Out-of-sample (`2020-2024`) it does `−5%` CAGR. The filters didn't find an edge — they memorized the exact wiggles of `2012-2019`. A plainer `2`-parameter version that only managed `+9%` in-sample might well hold up better OOS, precisely because it has less to overfit with.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Overfitting can hide *even when you use an OOS test*. If you quietly ran many candidate strategies and kept only the one that happened to pass OOS, you've overfit to the OOS set by sheer luck. Walk-forward testing plus awareness of how many things you tried (multiple-testing) are what protect you.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"a higher backtest return means a better strategy.\"* Beyond a point, higher in-sample returns often mean **more overfitting**, not more edge. What actually matters is out-of-sample performance and robustness — and even those are hypothetical and don't guarantee future results.",
    },
  ],
};

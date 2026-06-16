import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "moving-averages-sma-vs-ema",
  title: "Moving Averages: SMA vs EMA and the Golden Cross",
  level: 2,
  moduleId: "markets-technical",
  moduleOrder: 1,
  summary: "The smoothing line everyone watches — how SMA and EMA differ, and what the golden cross really tells you.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "Price is noisy. A **moving average** quiets that noise by averaging recent closes into a single line you can read at a glance. It's the first tool most chart-watchers learn — and the one most often misread. Remember up front: every signal here is a *probabilistic tendency*, not a guarantee. This is educational material, not financial advice.",
    },
    { type: "heading", text: "SMA: the plain average" },
    {
      type: "text",
      body:
        "A **simple moving average** (SMA) is exactly what it sounds like: add up the last `N` closing prices and divide by `N`. Every price gets *equal weight*. A 50-day SMA gives a four-month-old close the same say as yesterday's. That makes it smooth and stable — but slow to react.",
    },
    { type: "heading", text: "EMA: weighting the recent" },
    {
      type: "text",
      body:
        "An **exponential moving average** (EMA) fixes the slowness by giving *recent* prices more weight. The weighting comes from a smoothing multiplier `k = 2 / (N + 1)`. For a 20-period EMA that's `2 / 21 ≈ 0.0952`. Each day you blend the new close into the prior EMA: `EMA_today = (Close × k) + (EMA_yesterday × (1 − k))`. You seed the very first value with an SMA, then let the recursion run.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "SMA", def: "Simple moving average — the equal-weight mean of the last `N` closes." },
        { term: "EMA", def: "Exponential moving average — weights recent closes more via the multiplier `k`." },
        { term: "Smoothing multiplier (k)", def: "`k = 2 / (N + 1)`. For N=20, `k ≈ 0.0952`. Higher k = more weight on the newest price." },
        { term: "Golden cross", def: "When the 50 crosses **above** the 200 — a bullish, long-term trend cue." },
        { term: "Death cross", def: "When the 50 crosses **below** the 200 — a bearish, long-term trend cue." },
        { term: "Lag", def: "Moving averages are built from past prices, so they confirm trends late — they don't forecast." },
        { term: "Whipsaw", def: "Repeated false crosses in a sideways market that trigger losing trades in both directions." },
      ],
    },
    { type: "heading", text: "Which periods, and what they mean" },
    {
      type: "list",
      items: [
        "**20** — short-term trend; tracks price closely.",
        "**50** — intermediate trend; the swing-trader's benchmark.",
        "**200** — the long-term trend line. Above it = uptrend bias; below it = downtrend bias.",
        "**Golden cross** = 50 crosses *above* 200 (bullish). **Death cross** = 50 crosses *below* 200 (bearish).",
      ],
    },
    { type: "heading", text: "Worked example: SMA vs EMA on the same data" },
    {
      type: "text",
      body:
        "Take five closes: `10, 11, 12, 15, 14`. The **3-period SMA at day 5** is `(12 + 15 + 14) / 3 = 13.67`.",
    },
    {
      type: "text",
      body:
        "Now the **3-period EMA**, where `k = 2 / (3 + 1) = 0.5`. Seed it with the day-3 SMA: `EMA_day3 = (10 + 11 + 12) / 3 = 11.0`. Then `EMA_day4 = (15 × 0.5) + (11.0 × 0.5) = 13.0`, and `EMA_day5 = (14 × 0.5) + (13.0 × 0.5) = 13.5`. Notice the EMA (`13.5`) sits closer to the recent action than the SMA (`13.67`) — because it weights the newest prices more heavily. EMA reacts faster; SMA is smoother but laggier.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Where it fails: in a **choppy, sideways market** the 50 and 200 can cross back and forth repeatedly, firing false golden/death crosses — classic **whipsaw**. And because the cross is built from a 50- and 200-day average, it's *late*: a golden cross can print well after a rally has started, sometimes near the end of it.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"a golden cross guarantees the stock goes up.\"* It doesn't. It's a **lagging, probabilistic** signal. It fails in chop, and because it's late it can even fire near a top — confirming a trend that's about to reverse. Use it as one cue among many, not a green light.",
    },
  ],
};

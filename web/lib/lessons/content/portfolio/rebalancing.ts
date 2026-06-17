import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "rebalancing",
  title: "Rebalancing: Selling Winners to Stay on Target",
  level: 3,
  moduleId: "markets-portfolio",
  moduleOrder: 4,
  summary:
    "Why a portfolio drifts away from its target mix over time, how to calculate the trades that bring it back, and the trade-offs between calendar and threshold rebalancing.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "You set a `60/40` portfolio and walk away. A year later it's `64/36` — you never traded, yet your mix changed. That silent shift is **drift**, and left alone it quietly turns your carefully chosen risk level into something riskier. Rebalancing is how you pull it back on target.",
    },
    {
      type: "heading",
      text: "Why portfolios drift",
    },
    {
      type: "text",
      body:
        "**Drift** happens because asset classes grow at different rates. When stocks surge and bonds crawl, the stock slice swells as a share of the whole — your winners enlarge their own footprint. **Rebalancing** trades back to the target, which mechanically means **selling what rose and buying what fell**: a built-in buy-low, sell-high discipline. Crucially, it's primarily a **risk-control** tool, not a guaranteed way to boost returns.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Drift", def: "When asset weights move away from target because classes grow at different rates." },
        { term: "Rebalancing", def: "Trading back to target weights — selling the overweight, buying the underweight." },
        { term: "Calendar rebalancing", def: "Rebalancing on a fixed schedule (e.g. annually) regardless of drift size." },
        { term: "Threshold / band rebalancing", def: "Rebalancing only when a weight drifts beyond a set band (e.g. `±5` points)." },
        { term: "Tolerance band", def: "The allowed range around a target before a threshold rule triggers a trade." },
        { term: "Target weights", def: "The intended share of each asset class — e.g. `60%` stocks / `40%` bonds." },
        { term: "Transaction costs", def: "Trading fees, spreads, and taxes incurred when rebalancing." },
      ],
    },
    {
      type: "heading",
      text: "Worked example: computing the trades",
    },
    {
      type: "text",
      body:
        "Target `60/40`, starting with `$100,000`: that's `$60,000` stocks and `$40,000` bonds. Over the year stocks return `+25%` and bonds `+5%`:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Stocks grow to `$60,000 × 1.25 = $75,000`.",
        "Bonds grow to `$40,000 × 1.05 = $42,000`.",
        "Total portfolio: `$75,000 + $42,000 = $117,000`.",
        "New weights: stocks `75,000 ÷ 117,000 = 64.1%`, bonds `42,000 ÷ 117,000 = 35.9%` — drifted above the `60%` target.",
        "Target dollars: stocks `0.60 × 117,000 = $70,200`, bonds `0.40 × 117,000 = $46,800`.",
        "Trades: **sell `$75,000 − $70,200 = $4,800`** of stocks and **buy `$4,800`** of bonds.",
      ],
    },
    {
      type: "heading",
      text: "How often: calendar vs. threshold",
    },
    {
      type: "text",
      body:
        "**Calendar** rebalancing fires on a fixed schedule — simple and predictable. **Threshold (band)** rebalancing only trades when a weight breaches its band, say `±5` points, so it trades less often. A **hybrid** checks on a schedule but only trades if a band is breached. In the example above, with a `±5`-point band (a `55–65%` range), the stock weight of `64.1%` is still *inside* the band — a threshold rule wouldn't trigger yet, while a calendar rule due that day would trade anyway.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "In a **taxable** account, selling winners realizes capital gains — a real cost. You can soften this by directing new contributions toward the underweight asset, or by rebalancing inside tax-advantaged accounts where trades don't trigger a tax bill.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"Rebalancing means selling losers and chasing winners.\"* It's the **opposite** — you trim what *grew* (now overweight) and add to what *lagged* (now underweight). And rebalancing won't always raise returns: in a long bull run, trimming winners can lag a pure buy-and-hold. Its job is **risk control**, not return maximization.",
    },
  ],
};

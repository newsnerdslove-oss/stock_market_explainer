import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "scalping",
  title: "Scalping: Many Tiny Trades, Tiny Margins",
  level: 3,
  moduleId: "markets-styles",
  moduleOrder: 4,
  summary: "How scalping chases many tiny profits, why costs dominate the outcome, and why it's not beginner-friendly.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "**Scalping** is day trading taken to its extreme. Holds last *seconds to minutes*, and the trade count is enormous — **dozens to hundreds of trades a day**. The goal is to grab a few **ticks** or cents of profit, over and over. It sounds steady and low-stakes. In practice it's one of the **least forgiving** styles there is, because of one thing: costs.",
    },
    {
      type: "text",
      body:
        "When your target profit is a few cents, the **bid-ask spread** and per-trade commissions aren't a footnote — they're often *larger than the move you're trying to capture*. That flips the usual logic: for a scalper, **costs decide profitability more than direction does**. You can be right about which way price ticks and still lose money to the spread.",
    },
    { type: "heading", text: "It's an arms race" },
    {
      type: "text",
      body:
        "Scalping demands serious tooling: **fast execution**, direct order routing, **hotkeys**, **Level 2** market depth, and low latency — because you're competing against professional desks and **algorithms** doing the exact same thing faster. The main risk is the combination of **cost/spread drag** and **execution risk**: one slow fill, a bit of slippage, or a single oversized loss can erase a long run of tiny wins.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Scalp", def: "A trade held seconds to minutes aiming for a few ticks or cents, repeated many times a day." },
        { term: "Bid-ask spread", def: "The gap between the best buy and sell price. For a scalper it's a per-trade cost that can exceed the profit target." },
        { term: "Level 2 / market depth", def: "A view of resting buy and sell orders beyond the top quote — used to read short-term supply and demand." },
        { term: "Latency", def: "The delay between your action and the market acting on it. Even small latency turns a few-cent edge into a loss." },
        { term: "Tick", def: "The smallest price increment a security can move — the unit a scalper tries to harvest." },
      ],
    },
    { type: "heading", text: "Worked example: where the money actually goes" },
    {
      type: "text",
      body:
        "You target **+$0.05/share** on a **$20** stock, trading **1,000 shares**, about **50 times a day**. The spread is **$0.02** and commissions run **~$0.01/share** = **~$0.03** of cost per share. So your real edge is only `$0.05 − $0.03 = $0.02` per *winning* trade. One **−$0.10** loser wipes out **five** winning scalps. On a good trade: `1,000 × $0.05 = $50` gross, minus ~$30 in costs = **$20 net**. Across 50 trades, your cost drag is roughly `50 × $30 = $1,500/day`. The style only survives with **tight spreads, low commissions, and a high win rate** — all at once.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Edge cases: in **wide-spread or low-liquidity** names, the spread *alone* makes scalping unprofitable no matter how skilled you are. And **latency/slippage** means your real fill is worse than the screen showed — fatal when the whole target is a few cents. Scalping also runs straight into intraday-margin and day-trade concerns from Lesson 1.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'lots of small wins is the safest, steadiest way to trade.'* The opposite is closer to true. **Costs plus a single large loss can erase dozens of wins**, and the speed magnifies every behavioral and mechanical error. Scalping is **not beginner-friendly** — it's the most tooling-, speed-, and cost-intensive style, where amateurs face a structural disadvantage. Educational content, not financial advice.",
    },
  ],
};

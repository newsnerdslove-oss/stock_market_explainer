import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "bull-call-spread",
  title: "Bull Call Spread: Cheaper Bullish Bet, Capped Reward",
  level: 3,
  moduleId: "markets-options",
  moduleOrder: 5,
  summary: "Fund a bullish call by selling a higher one — lower cost and breakeven, in exchange for a profit ceiling.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "You think a stock will rise — but to a reasonable target, not the moon. Buying a single call works, yet it's pricey and bleeds time value. A **bull call spread** trims the cost by selling a higher call against the one you buy, in exchange for capping your reward at that higher strike.",
    },
    { type: "heading", text: "How to build it" },
    {
      type: "list",
      items: [
        "**Buy a lower-strike call** (your bullish bet).",
        "**Sell a higher-strike call**, same expiration, to fund it — a net **debit**.",
        "The stance is **moderately bullish**: a move up to about the higher strike, not a runaway.",
      ],
    },
    {
      type: "text",
      body:
        "Versus a single long call, the short call **lowers your cost and breakeven** and reduces theta and vega bleed. The price you pay: profit is **capped** at the upper strike. Above it, both calls move together and your gain stops growing.",
    },
    {
      type: "payoff",
      legs: [
        { instrument: "call", side: "long", strike: 100, premium: 5, qty: 1 },
        { instrument: "call", side: "short", strike: 110, premium: 2, qty: 1 },
      ],
      title: "Bull call spread payoff",
      caption: "Debit $300; max profit $700 at/above $110; breakeven $103.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Vertical spread", def: "Two same-expiration options of the same type at different strikes." },
        { term: "Net debit", def: "The cash you pay to open: long premium minus short premium (here `$5 − $2 = $3`)." },
        { term: "Strike width", def: "The gap between the two strikes (here `$10`) — it sets the maximum payout." },
        { term: "Profit ceiling", def: "The point above the upper strike where your gain stops growing." },
        { term: "Capped upside", def: "The trade-off: the short call limits how much you can make." },
        { term: "Defined risk", def: "Loss is limited to the debit paid — you know the worst case at entry." },
      ],
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "Buy the `100` call @ `$5`, sell the `110` call @ `$2`; net debit `$3` (`$300`). Max profit is `(10 − 3) × 100 = $700`; max loss is the debit, `$300`; breakeven is `100 + 3 = $103`.",
    },
    {
      type: "list",
      items: [
        "Stock to `$115` → spread worth its max `$10` → `+$700`.",
        "Stock to `$110` → also `+$700` (the ceiling).",
        "Stock to `$103` → breakeven, `$0`.",
        "Stock at or below `$100` → both calls expire worthless → `−$300` (the full debit).",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "If the stock settles **between the strikes** near expiry, you face *pin risk* — the short call may or may not be assigned, leaving an unexpected stock position. Manage the spread **before expiration** rather than guessing. And max profit only arrives if the stock is **at or above** the upper strike.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'two legs means more upside than a long call.'* It's **less** upside — the profit is capped. The real advantage is a **lower cost and breakeven**, not a bigger payout on a huge move.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial advice. Options can expire worthless.",
    },
  ],
};

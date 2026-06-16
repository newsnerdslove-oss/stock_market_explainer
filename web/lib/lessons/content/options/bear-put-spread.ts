import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "bear-put-spread",
  title: "Bear Put Spread: Defined-Risk Bearish Bet",
  level: 3,
  moduleId: "markets-options",
  moduleOrder: 6,
  summary: "Bet on a moderate decline with a put, sell a lower one to cut the cost — and cap the reward.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "You expect a stock to fall — but to a sensible level, not off a cliff. A single long put is expensive and decays. A **bear put spread** is the mirror image of the bull call spread: buy a put, sell a lower one to cut the cost, and accept a profit cap at that lower strike.",
    },
    { type: "heading", text: "How to build it" },
    {
      type: "list",
      items: [
        "**Buy a higher-strike put** (your bearish bet).",
        "**Sell a lower-strike put**, same expiration, to fund it — a net **debit**.",
        "The stance is **moderately bearish**: a decline toward about the lower strike.",
      ],
    },
    {
      type: "text",
      body:
        "Versus a single long put, selling the lower put **cuts your cost and breakeven** and trims the bleed. The trade-off: profit is **capped** at the lower strike. Below it, both puts move together and the gain stops.",
    },
    {
      type: "payoff",
      legs: [
        { instrument: "put", side: "long", strike: 100, premium: 6, qty: 1 },
        { instrument: "put", side: "short", strike: 90, premium: 2.5, qty: 1 },
      ],
      title: "Bear put spread payoff",
      caption: "Debit $350; max profit $650 at/below $90; breakeven $96.50.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Bear put spread (debit put spread)", def: "Long a higher-strike put, short a lower-strike put, same expiration, for a net debit." },
        { term: "Net debit", def: "The cash paid to open: long premium minus short premium (here `$6 − $2.50 = $3.50`)." },
        { term: "Lower-strike floor", def: "The short strike where your profit stops growing." },
        { term: "Breakeven", def: "`higher strike − debit` (here `$96.50`) — where the position turns profitable." },
        { term: "Capped reward", def: "The most you can make, set by the strike width minus the debit." },
        { term: "Defined risk", def: "Loss is limited to the debit paid — the worst case is known at entry." },
      ],
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "Buy the `100` put @ `$6`, sell the `90` put @ `$2.50`; net debit `$3.50` (`$350`). Max profit is `(10 − 3.50) × 100 = $650`; max loss is the debit, `$350`; breakeven is `100 − 3.50 = $96.50`.",
    },
    {
      type: "list",
      items: [
        "Stock to `$85` → spread worth its max `$10` → `+$650`.",
        "Stock to `$90` → also `+$650` (the floor).",
        "Stock to `$96.50` → breakeven, `$0`.",
        "Stock at or above `$100` → both puts expire worthless → `−$350` (the full debit).",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "A short put settling **in-the-money** near expiry can be assigned, leaving you unexpectedly **long stock**. Close or roll before expiration rather than risk it. And max profit only arrives if the stock is **at or below** the lower strike.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'spreading lets me profit more on a big crash than a single put.'* No — the spread **caps** your downside profit at the lower strike. The edge is a lower cost and a closer breakeven, not a bigger payout on a collapse.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial advice. Options can expire worthless.",
    },
  ],
};

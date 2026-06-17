import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "long-straddle",
  title: "Long Straddle: Betting on a Big Move, Either Way",
  level: 3,
  moduleId: "markets-options",
  moduleOrder: 8,
  summary: "Buy a call and a put at the same strike to profit from a big move — if it moves far enough, and if IV holds.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "Earnings drop tomorrow. You're sure the stock will *lurch* — you just don't know which way. A **long straddle** buys both a call and a put at the same strike, so a big move in either direction can pay. The catch: you pay for both, and the stock has to move *far enough* to cover them.",
    },
    { type: "heading", text: "How to build it" },
    {
      type: "list",
      items: [
        "**Buy 1 call** and **buy 1 put**, same strike and expiration.",
        "You pay **both premiums** — the combined cost is your total at risk.",
        "The stance is **direction-agnostic but move-hungry**: a big swing, way unsure of direction.",
      ],
    },
    {
      type: "text",
      body:
        "A straddle has positive vega and strongly negative theta. It **fails** two ways: the stock barely moves (you bleed both premiums), or a **volatility crush** hits — IV spikes into the event, then collapses after, so even a decent move can't cover the inflated premiums you paid.",
    },
    {
      type: "payoff",
      legs: [
        { instrument: "call", side: "long", strike: 100, premium: 4, qty: 1 },
        { instrument: "put", side: "long", strike: 100, premium: 4, qty: 1 },
      ],
      title: "Long straddle payoff",
      caption: "Total debit $800; breakevens $92 and $108; max loss $800 at the $100 strike.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Long straddle", def: "A long call and a long put at the same strike and expiration." },
        { term: "Total debit", def: "The combined premium paid for both legs (here `$4 + $4 = $8`, or `$800`)." },
        { term: "Two breakevens", def: "`strike ± total debit` (here `$92` and `$108`) — the move needed on each side." },
        { term: "Volatility crush (IV crush)", def: "A post-event collapse in implied volatility that drains option value." },
        { term: "Expected move", def: "The swing the options' pricing implies — compare it to what you need (`±$8`)." },
        { term: "Vega risk", def: "Sensitivity to IV: a straddle gains on rising IV and loses on falling IV." },
      ],
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "Buy the `100` call @ `$4` and the `100` put @ `$4`; total debit `$8` (`$800`). Max loss is `$800` if the stock pins the strike; breakevens are `100 ± 8 = $92` and `$108`.",
    },
    {
      type: "list",
      items: [
        "Stock to `$120` → call worth `$20` → `(20 − 8) × 100 = +$1,200`.",
        "Stock to `$108` → upper breakeven, `$0`.",
        "Stock to `$100` → `−$800` (the worst case — it went nowhere).",
        "Stock to `$92` → lower breakeven, `$0`.",
        "Stock to `$80` → put worth `$20` → `+$1,200`.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Volatility crush is the silent killer. Buying just before earnings means paying **peak IV**; the post-report drop can leave you in the red even on a real move. Compare the move you *need* (`±$8`) to the **expected move** — and remember theta accelerates near expiry.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'I can't lose — I profit whichever way it moves.'* You profit only if it moves **far enough**, past `±$8`. A modest move or a still stock loses, and an IV crush can sink you even on a directional move.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial advice. Both legs can expire worthless.",
    },
  ],
};

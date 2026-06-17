import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "multi-leg-strategies",
  title: "Butterflies, Calendars & Strangles: The Multi-Leg Toolkit",
  level: 4,
  moduleId: "markets-adv-options",
  moduleOrder: 3,
  summary:
    "Add the four-leg butterfly, time-based calendar/diagonal spreads, and the strangle to your arsenal, with exact P/L math and how each differs from what you already know.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "Beyond two-leg verticals lie three structures the Series 7 loves: the **butterfly** (a four-leg neutral bet on a pinpoint price), **calendar/diagonal** spreads (bets on *time*), and the **strangle** (a cheaper cousin of the straddle). Each has clean P/L math once you spot its shape.",
    },
    { type: "heading", text: "Long call butterfly" },
    {
      type: "text",
      body:
        "Buy `1` low strike, sell `2` middle strikes, buy `1` high strike — **equidistant** strikes, one expiration, a net **debit**. It's a neutral bet that the stock pins the middle strike.",
    },
    {
      type: "list",
      items: [
        "**Max loss = net debit** (at or beyond either wing).",
        "**Max gain = adjacent-strike distance − net debit**, achieved at the middle strike.",
        "**Lower breakeven = low strike + debit; upper breakeven = high strike − debit.**",
      ],
    },
    { type: "heading", text: "Calendar & diagonal spreads" },
    {
      type: "list",
      items: [
        "**Calendar (horizontal) spread:** same strike, **sell near-term**, **buy longer-term** — a net debit. Profits from the faster time decay of the short leg; max profit if the stock sits at the strike at the near-term expiry.",
        "**Diagonal spread:** differs in **both** strike **and** expiration — a calendar plus a directional tilt.",
      ],
    },
    { type: "heading", text: "Strangle vs. straddle" },
    {
      type: "list",
      items: [
        "**Long straddle:** same strike call + put (ATM). **Breakevens = strike ± total premium.**",
        "**Long strangle:** OTM call + OTM put — **cheaper**, but **wider** breakevens, so the stock must move **more**.",
        "**Strangle breakevens:** call strike + total premium (upside) and put strike − total premium (downside).",
      ],
    },
    { type: "heading", text: "Worked example — long call butterfly" },
    {
      type: "text",
      body:
        "Buy the Jan `45` call @ `$7`, sell `2` Jan `50` calls @ `$3.50` each, buy the Jan `55` call @ `$1.50`.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**Net debit:** `7 − (2 × 3.50) + 1.50 = 7 − 7 + 1.50 = $1.50` (`$150`).",
        "**Adjacent distance:** `$5`.",
        "**Max loss:** the debit = `$150` (at or below `45`, or at or above `55`).",
        "**Max gain:** `distance − debit = 5 − 1.50 = $3.50` (`$350`), exactly at `$50`.",
        "**Lower BE:** `45 + 1.50 = $46.50`. **Upper BE:** `55 − 1.50 = $53.50`.",
        "**Sanity check at `$50`:** `45` call = `$5`, two `50` calls = `$0`, `55` call = `$0` → value `$5`; minus `$1.50` debit = `+$3.50`. ✓",
      ],
    },
    {
      type: "payoff",
      legs: [
        { instrument: "call", side: "long", strike: 45, premium: 7, qty: 1 },
        { instrument: "call", side: "short", strike: 50, premium: 3.5, qty: 2 },
        { instrument: "call", side: "long", strike: 55, premium: 1.5, qty: 1 },
      ],
      title: "Long call butterfly payoff",
      caption:
        "Buy 45 call @ $7, sell two 50 calls @ $3.50, buy 55 call @ $1.50. Net debit $1.50 ($150). Peak +$350 at $50; breakevens $46.50 and $53.50; max loss −$150 at the wings.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Long call butterfly", def: "Buy 1 low, sell 2 middle, buy 1 high (equidistant strikes); a net-debit neutral bet." },
        { term: "Wing", def: "The low or high outer strike of a butterfly, where max loss occurs." },
        { term: "Calendar spread", def: "Same strike, sell near-term and buy longer-term; profits from time decay of the short leg." },
        { term: "Diagonal spread", def: "Differs in both strike and expiration — a directional calendar." },
        { term: "Long straddle", def: "Same-strike ATM call + put; breakevens = strike ± total premium." },
        { term: "Long strangle", def: "OTM call + OTM put; cheaper but with wider breakevens." },
        { term: "Total premium", def: "The combined cost of both legs, which sets a straddle's or strangle's breakevens." },
        { term: "Time decay (theta)", def: "The erosion of an option's time value, which calendars try to harvest." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'A strangle and a straddle are basically the same neutral-move bet.'* The strangle is **cheaper** but its breakevens are **farther apart** — the stock must move **more** to profit. This is educational content, not financial advice.",
    },
  ],
};

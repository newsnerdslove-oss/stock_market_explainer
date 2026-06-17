import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "hedging-with-options",
  title: "Hedging Equity With Options: Married Puts, Collars & Portfolio Protection",
  level: 4,
  moduleId: "markets-adv-options",
  moduleOrder: 6,
  summary:
    "Use puts and collars to put a floor under stock you own, and know the precise breakeven/max-loss math and the married-vs-protective distinction.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "When you own stock and want a floor, options give you two main tools: the **protective put** (insurance) and the **collar** (insurance you finance by capping your upside). Each has clean breakeven and max-loss math, and the exam loves the **married-vs-protective** holding-period wrinkle.",
    },
    { type: "heading", text: "Protective put" },
    {
      type: "list",
      items: [
        "**Setup:** own the stock, buy a put.",
        "**Max loss = stock cost − put strike + put premium.**",
        "**Breakeven = stock cost + put premium.**",
        "**Upside is unlimited** — the put just sets a floor.",
      ],
    },
    { type: "heading", text: "Married put vs. protective put" },
    {
      type: "text",
      body:
        "A **married put** is buying the put **at the same time** as the stock; mechanically it's identical to a protective put. The difference is **tax / holding period**: a married put **does not restart** the holding period, while a protective put bought against **already-held** shares can **suspend** the holding period.",
    },
    { type: "heading", text: "Collar" },
    {
      type: "list",
      items: [
        "**Setup:** long stock + long OTM put (floor) + short OTM call (cap).",
        "**Max loss bottoms at the put strike; max gain caps at the call strike.**",
        "**Breakeven = stock cost + put premium − call premium.**",
        "Cheaper than a bare protective put because the short call helps pay for the put.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "To hedge a **diversified equity portfolio**, use **broad-based index puts** (e.g. `SPX`), which are cash-settled — one position protects the whole book without selling individual names.",
    },
    { type: "heading", text: "Worked example — collar" },
    {
      type: "text",
      body:
        "Own `100` `XYZ` at `$50`. Buy the Jul `45` put @ `$1.00`, sell the Jul `55` call @ `$0.80`.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**Net premium:** `1.00 − 0.80 = $0.20` debit (`$20`).",
        "**Breakeven:** stock cost + put premium − call premium = `50 + 1.00 − 0.80 = $50.20`.",
        "**Max loss (at or below `$45`):** `(50 − 45) + 0.20 = $5.20` (`$520`).",
        "**Max gain (at or above `$55`):** `(55 − 50) − 0.20 = $4.80` (`$480`).",
        "**Sanity check at `$55`:** stock gain `$5`, net premium cost `$0.20` → `+$4.80`. ✓",
      ],
    },
    {
      type: "payoff",
      legs: [
        { instrument: "stock", side: "long", premium: 50, qty: 100 },
        { instrument: "put", side: "long", strike: 45, premium: 1.0, qty: 1 },
        { instrument: "call", side: "short", strike: 55, premium: 0.8, qty: 1 },
      ],
      title: "Collar payoff (long stock + long 45 put + short 55 call)",
      caption:
        "Own 100 shares @ $50, buy 45 put @ $1.00, sell 55 call @ $0.80. Net debit $0.20. Breakeven $50.20; max loss −$520 below $45; max gain +$480 above $55.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Protective put", def: "Own stock + buy a put as insurance; max loss = cost − strike + premium." },
        { term: "Married put", def: "Buy the put at the same time as the stock; identical mechanics, different holding-period tax treatment." },
        { term: "Holding period", def: "The clock for long-term gains; a married put doesn't restart it, a protective put on held shares can suspend it." },
        { term: "Collar", def: "Long stock + long OTM put (floor) + short OTM call (cap)." },
        { term: "Floor", def: "The lowest effective sale price, set by the long put's strike." },
        { term: "Cap", def: "The highest effective sale price, set by the short call's strike." },
        { term: "Collar breakeven", def: "stock cost + put premium − call premium." },
        { term: "Index-put hedge", def: "Broad-based index puts (e.g. SPX, cash-settled) protect a diversified portfolio at once." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'A collar is free downside protection.'* The short call **caps your upside** at its strike — the protection is paid for with your upside, not free. This is educational content, not financial advice.",
    },
  ],
};

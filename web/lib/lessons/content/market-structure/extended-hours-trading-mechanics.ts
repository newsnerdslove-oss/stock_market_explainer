import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "extended-hours-trading-mechanics",
  title: "Extended-Hours Trading Mechanics",
  level: 2,
  moduleId: "markets-structure",
  moduleOrder: 5,
  summary: "How pre-market and after-hours really work — and why they bite.",
  estMinutes: 5,
  sections: [
    {
      type: "text",
      body:
        "Earnings drop at `4:05pm` and the stock is suddenly up 8%. You *can* trade it before tomorrow's open — but **extended hours** are a different, thinner, riskier place than the regular session, and the mechanics explain why.",
    },
    { type: "heading", text: "The sessions" },
    {
      type: "list",
      items: [
        "**Regular hours**: `9:30am–4:00pm ET`.",
        "**Pre-market**: roughly `4:00am–9:30am ET`.",
        "**After-hours**: roughly `4:00pm–8:00pm ET` (exact windows vary by broker).",
      ],
    },
    {
      type: "text",
      body:
        "Extended-hours trades happen on **ECNs/ATSs** — there are **no opening or closing auctions** to concentrate liquidity, so each venue's book stands more or less alone.",
    },
    { type: "heading", text: "What changes mechanically" },
    {
      type: "list",
      items: [
        "**Order types are limited** — most brokers accept **limit orders only** and reject market orders, because thin books would cause brutal slippage.",
        "**Thin liquidity** — wide spreads and shallow depth, so even modest orders move the price.",
        "**Fragmentation** — each ECN runs its own book; they may not interact, and the usual NBBO protections don't apply the same way.",
        "**Gap risk** — extended-hours prices may not hold to the next regular open.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Pre-market / after-hours", def: "Trading windows before (~4:00am) and after (~8:00pm) the regular session." },
        { term: "Extended-hours session", def: "Trading outside 9:30am–4:00pm ET, run on ECNs/ATSs with no auctions." },
        { term: "Thin liquidity", def: "Few resting orders, so spreads are wide and small orders move the price." },
        { term: "Gap", def: "A jump between the extended-hours price and the next regular session's price." },
        { term: "Limit-order-only", def: "The common broker restriction in extended hours; market orders are rejected." },
        { term: "Fragmentation", def: "Liquidity split across separate ECN books that may not interact." },
      ],
    },
    { type: "heading", text: "Worked example: chasing an after-hours pop" },
    {
      type: "text",
      body:
        "A stock closes at `$100.00`. At `4:05pm` an earnings beat hits. The after-hours book is thin and gaps to `$108 / $112` — a `$4` spread versus the pennies you'd see in regular hours. You place a **limit buy at `$112`** and fill **50 shares**. The next morning, the *regular* session opens at `$104` — **below your fill**. Wide spread, low liquidity, and gap risk all worked against you.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "The after-hours **last price** can mislead — a single small trade can flash a price far from the real market. Also watch order durations: some don't carry over, and a plain *day* order won't execute in extended hours unless you explicitly enable it.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Don't treat after-hours prices as a forecast of the open. They're set by **thin, fragmented liquidity** and frequently don't hold — the regular open can **gap away** from where the stock traded overnight.",
    },
  ],
};

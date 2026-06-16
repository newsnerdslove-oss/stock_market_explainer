import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "iron-condor",
  title: "Iron Condor: Profiting From a Stock That Goes Nowhere",
  level: 3,
  moduleId: "markets-options",
  moduleOrder: 9,
  summary: "Sell two credit spreads around a range to harvest time decay — defined risk, but max loss beats max profit.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "Most strategies need the stock to *do* something. An **iron condor** is the opposite bet: you profit if the stock goes **nowhere**. You sell a credit spread below and another above the current price, collect a credit, and keep it as long as the stock stays inside the range.",
    },
    { type: "heading", text: "How to build it" },
    {
      type: "list",
      items: [
        "**A bull put spread below** the price (sell a put, buy a lower put for the wing).",
        "**A bear call spread above** the price (sell a call, buy a higher call for the wing).",
        "Four legs, a net **credit**. The stance is **neutral / range-bound** — profit if the stock stays between the short strikes.",
      ],
    },
    {
      type: "text",
      body:
        "The profit driver is **time decay** (positive theta) plus stable or falling volatility. Max profit is the net credit; both sides have **defined risk** because the long wings cap losses. It works best in low-conviction, range-bound markets — especially when **IV is elevated**, giving a richer credit.",
    },
    {
      type: "payoff",
      legs: [
        { instrument: "put", side: "long", strike: 90, premium: 0.5, qty: 1 },
        { instrument: "put", side: "short", strike: 95, premium: 1.2, qty: 1 },
        { instrument: "call", side: "short", strike: 105, premium: 1.2, qty: 1 },
        { instrument: "call", side: "long", strike: 110, premium: 0.5, qty: 1 },
      ],
      title: "Iron condor payoff",
      caption: "Net credit $140 (max profit) between $95–$105; max loss $360; breakevens $93.60 and $106.40.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Iron condor", def: "A bull put spread plus a bear call spread on the same underlying and expiration." },
        { term: "Short strikes (inner)", def: "The `95` put and `105` call you sell — the edges of your profit range." },
        { term: "Long wings", def: "The outer `90` put and `110` call you buy to cap each side's loss." },
        { term: "Net credit", def: "Cash collected at open (here `(1.20 + 1.20) − (0.50 + 0.50) = $1.40`)." },
        { term: "Profit range", def: "Between the short strikes (`95–105`), where every option expires worthless." },
        { term: "Wing width", def: "The distance from short to long strike (here `$5`) — it sets the max loss." },
        { term: "Range-bound", def: "A market drifting sideways within a band — the condor's ideal habitat." },
      ],
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "With the stock at `$100`: net credit `$1.40` (`$140`), each wing `$5` wide. Max profit is the credit, `$140`, if the stock stays between `95` and `105`. Max loss is `(5 − 1.40) × 100 = $360` — because only **one** wing can be breached. Breakevens are `95 − 1.40 = $93.60` and `105 + 1.40 = $106.40`.",
    },
    {
      type: "list",
      items: [
        "Stock between `95` and `105` at expiry → all four worthless → `+$140`.",
        "Stock to `$106.40` → upper breakeven, `$0`.",
        "Stock to `$93.60` → lower breakeven, `$0`.",
        "Stock at or above `$110` → call spread fully loses → `−$360`.",
        "Stock at or below `$90` → put spread fully loses → `−$360`.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Only **one** short spread can finish in-the-money, so the worst case is a single `$5` wing. An in-the-money short option can still be **assigned** (possibly early) — manage the tested side before expiry rather than letting it run.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'max loss is both spreads combined, about `$720`.'* At expiry the stock can only be in **one** direction, so only one wing can be breached. Max loss = `(width − credit) × 100 = $360`, **not** the sum.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial advice. Short options carry assignment risk, and max-loss math assumes you manage the position.",
    },
  ],
};

import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "pe-ratio",
  title: "The P/E ratio",
  level: 2,
  moduleId: "markets-valuation",
  moduleOrder: 1,
  summary: "The most-quoted valuation number — what it means and where it lies.",
  estMinutes: 5,
  sections: [
    {
      type: "text",
      body:
        "The **price-to-earnings ratio** (P/E) is the single most-quoted way to ask: *is this stock expensive?* It compares a company's share price to how much it earns per share.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "EPS", def: "Earnings per share — the company's profit divided by its shares outstanding." },
        { term: "P/E", def: "`share price ÷ EPS`. Roughly: dollars paid per $1 of annual earnings." },
      ],
    },
    { type: "heading", text: "Reading the number" },
    {
      type: "text",
      body:
        "A P/E of **20** means investors pay $20 for every $1 the company earns per year. Another way to say it: at today's earnings, it'd take ~20 years of profit to earn back the price. A **high** P/E says the market expects growth; a **low** P/E says it expects little — or sees risk.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "P/E only makes sense **in context** — versus the company's own history, its competitors, and its sector. A P/E of 35 is cheap for fast-growing software and expensive for a utility.",
    },
    { type: "heading", text: "Where P/E misleads" },
    {
      type: "list",
      items: [
        "**No earnings, no P/E** — an unprofitable company has negative or undefined EPS, so the ratio breaks.",
        "**Trailing vs. forward** — trailing P/E uses past earnings; forward uses *estimates*, which can be wrong.",
        "**Earnings can be massaged** — one-time gains or accounting choices distort EPS, and so the ratio.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "A low P/E isn't automatically a bargain — it can signal the market expects earnings to fall. Cheap and *cheap for a reason* look identical on this one number.",
    },
  ],
};

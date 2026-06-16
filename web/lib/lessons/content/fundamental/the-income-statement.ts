import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "the-income-statement",
  title: "The Income Statement, Line by Line",
  level: 2,
  moduleId: "markets-fundamental",
  moduleOrder: 1,
  summary: "Follow a single dollar of revenue as it flows down to net income — and learn what each subtotal really tells you.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "When a company says it \"made money,\" *which* number do they mean? The **income statement** answers that by showing how every dollar of sales is whittled down by costs until what's left is profit. The trick is that there isn't one profit number — there are several, and each one answers a different question.",
    },
    { type: "heading", text: "A flow, not a snapshot" },
    {
      type: "text",
      body:
        "Unlike the balance sheet (a photo taken on one day), the income statement covers a *period* — a quarter or a year. It's a **flow**: how much came in and how much went out over that stretch of time.",
    },
    { type: "heading", text: "The waterfall of subtotals" },
    {
      type: "text",
      body:
        "Money flows top to bottom: **Revenue → Gross Profit → Operating Income → Net Income**. Each step subtracts another layer of cost.",
    },
    {
      type: "list",
      items: [
        "**Revenue** (the *top line*) — total sales before any costs are taken out.",
        "**Gross profit** = `revenue − COGS`. Strips out the direct cost of making the product, revealing core product profitability.",
        "**Operating income** (also called *EBIT*) = `gross profit − operating expenses`. Operating expenses include SG&A, R&D, and depreciation. This is the profit from *running the business*, before interest and taxes.",
        "**Net income** (the *bottom line*) = `operating income − interest − taxes ± non-operating items`. This is what feeds EPS.",
      ],
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "Think of *above the line* vs *below the line*: operating income is the company's core engine; interest, taxes, and one-off items sit below it. Mixing the two hides what the business actually does.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Revenue (top line)", def: "Total sales for the period, before any costs are subtracted." },
        { term: "COGS", def: "Cost of goods sold — the direct cost of producing what was sold." },
        { term: "Gross profit", def: "`revenue − COGS`. Measures core product profitability." },
        { term: "Operating income (EBIT)", def: "`gross profit − operating expenses`. Profit from running the business, before interest and taxes." },
        { term: "SG&A", def: "Selling, general & administrative expenses — overhead like salaries, marketing, and rent." },
        { term: "Net income (bottom line)", def: "The final profit after interest, taxes, and non-operating items. Feeds EPS." },
        { term: "Non-operating item", def: "A gain or cost outside core operations, e.g. selling a building or a lawsuit payout." },
      ],
    },
    { type: "heading", text: "Worked example: following $1 of revenue" },
    {
      type: "text",
      body:
        "A company reports: Revenue `$1,000M`, COGS `$600M`, SG&A `$150M`, R&D `$50M`, Depreciation `$30M`, Interest `$20M`, Taxes `$30M`. Let's walk the waterfall.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**Gross profit** = `1,000 − 600 = $400M`.",
        "**Operating expenses** = `150 + 50 + 30 = $230M`.",
        "**Operating income (EBIT)** = `400 − 230 = $170M`.",
        "**Pre-tax income** = `170 − 20 interest = $150M`.",
        "**Net income** = `150 − 30 taxes = $120M`.",
      ],
    },
    {
      type: "text",
      body:
        "So of every `$1` of revenue: about **`$0.40`** survives COGS, **`$0.17`** survives operations, and just **`$0.12`** reaches the bottom line. Each subtotal answered a different question — product economics, operating efficiency, and final profitability.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Watch for one-time items. If the company sold a building this quarter, net income can jump while operating income stays flat — that gain won't repeat. Also remember net income is *accrual* accounting: it includes non-cash charges and revenue not yet collected, so it isn't the same as cash in the bank.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Don't assume *higher revenue = higher profit*. Costs can rise faster than sales, squeezing every subtotal below the top line. Always read the subtotals, not just revenue.",
    },
  ],
};

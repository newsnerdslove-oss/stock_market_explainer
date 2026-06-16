import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "the-balance-sheet",
  title: "The Balance Sheet: What a Company Owns and Owes",
  level: 2,
  moduleId: "markets-fundamental",
  moduleOrder: 2,
  summary: "The accounting identity that always balances — and the current vs. long-term split that reveals near-term pressure.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "If the income statement is a movie of a period, the **balance sheet** is a photograph taken on a single day. It lists everything a company *owns*, everything it *owes*, and what's left over for the owners. And it has one rule it can never break.",
    },
    { type: "heading", text: "The accounting identity" },
    {
      type: "text",
      body:
        "Every balance sheet obeys: **`Assets = Liabilities + Equity`**. It *always* balances — that's the point. Rearranged, it tells you net worth: **`Equity = Assets − Liabilities`**. This equity is the company's **book value** — what owners would theoretically keep if all assets were sold and all debts paid.",
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "Equity is the residual. Whatever the assets are, after the lenders are paid, the rest belongs to shareholders. That's why it's sometimes called *net worth* or *book value*.",
    },
    { type: "heading", text: "Current vs. long-term" },
    {
      type: "text",
      body:
        "Both assets and liabilities split by *time horizon*. **Current** means within 12 months; **long-term** means beyond.",
    },
    {
      type: "list",
      items: [
        "**Current assets** — cash, receivables, inventory (turn to cash within a year).",
        "**Long-term assets** — PP&E (property, plant & equipment) and other things held for years.",
        "**Current liabilities** — payables, short-term debt (due within a year).",
        "**Long-term liabilities** — long-term debt and obligations due beyond a year.",
      ],
    },
    {
      type: "text",
      body:
        "Two liquidity checks fall straight out of this split. **Working capital** = `current assets − current liabilities` (the cash cushion for the coming year). **Current ratio** = `current assets ÷ current liabilities` — above `1` means current assets cover current obligations.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Asset", def: "A resource the company owns that has economic value." },
        { term: "Liability", def: "An obligation the company owes to others." },
        { term: "Shareholders' equity", def: "`Assets − Liabilities`. The owners' residual claim, a.k.a. book value." },
        { term: "Current asset / liability", def: "An asset that becomes cash, or an obligation that comes due, within 12 months." },
        { term: "Working capital", def: "`current assets − current liabilities`. A measure of short-term liquidity." },
        { term: "Book value", def: "Net worth on the balance sheet — equity, recorded at historical cost." },
        { term: "Goodwill", def: "An intangible asset from acquisitions; can overstate equity if it can't be realized." },
      ],
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "A company reports total assets `$800M` (current `$300M`, long-term `$500M`) and total liabilities `$500M` (current `$200M`, long-term `$300M`).",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**Equity** = `assets − liabilities = 800 − 500 = $300M`.",
        "**Check the identity**: `liabilities + equity = 500 + 300 = $800M` = assets ✓",
        "**Working capital** = `current assets − current liabilities = 300 − 200 = $100M`.",
        "**Current ratio** = `current assets ÷ current liabilities = 300 ÷ 200 = 1.5`.",
      ],
    },
    {
      type: "text",
      body:
        "A current ratio of `1.5` means the company has $1.50 of current assets for every $1 of bills due within the year. That `$300M` equity is the same number that later feeds **ROE** and **P/B**.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Book value has limits. Assets are carried at *historical cost*, so land or a valuable brand may be worth far more than the sheet shows. And **goodwill** from acquisitions can overstate equity. Also: a balanced sheet says nothing about *quality* — a company drowning in debt still balances perfectly.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Don't assume *a profitable company has large equity*. Equity is roughly retained earnings minus dividends, buybacks, and losses. Heavy buybacks and dividends can shrink equity — sometimes even pushing it negative — at a perfectly profitable firm.",
    },
  ],
};

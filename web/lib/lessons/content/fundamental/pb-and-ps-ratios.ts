import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "pb-and-ps-ratios",
  title: "P/B and P/S: Valuing Assets and Sales",
  level: 2,
  moduleId: "markets-fundamental",
  moduleOrder: 5,
  summary: "When earnings don't tell the story, value a company by its assets (P/B) or its sales (P/S) — and know which fits which business.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "The P/E ratio needs earnings. But banks are valued on their assets, and a fast-growing startup may have no profits at all. For those cases, two other multiples earn their keep: **price-to-book (P/B)** and **price-to-sales (P/S)**.",
    },
    { type: "heading", text: "Price-to-book (P/B)" },
    {
      type: "text",
      body:
        "Start with **book value per share** = `(total assets − total liabilities) ÷ shares outstanding` — that's equity per share. Then **`P/B = price per share ÷ book value per share`**. It compares the market's price to the balance-sheet net worth. P/B works best for **asset-heavy** businesses — banks, insurers, REITs — whose value really does sit in tangible assets.",
    },
    { type: "heading", text: "Price-to-sales (P/S)" },
    {
      type: "text",
      body:
        "**`P/S = market cap ÷ revenue`** (equivalently, price ÷ revenue per share). Because it needs no profits, P/S is useful for **unprofitable or early-stage** companies and for cyclicals whose earnings swing wildly.",
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "A **P/B below 1** means the market values the company at less than its book net worth — possibly a bargain, possibly a warning that the assets are about to be written down. Same number, opposite stories.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Book value per share", def: "`(total assets − total liabilities) ÷ shares outstanding`. Equity per share." },
        { term: "P/B ratio", def: "`price per share ÷ book value per share`. Market price vs. balance-sheet net worth." },
        { term: "P/S ratio", def: "`market cap ÷ revenue`. Price relative to sales; works without earnings." },
        { term: "Asset-heavy firm", def: "A business whose value sits in tangible assets — banks, insurers, REITs." },
        { term: "Asset-light firm", def: "A business built on intangibles — software, brands — with few balance-sheet assets." },
        { term: "Impairment", def: "A write-down recognizing that an asset is worth less than its recorded value." },
      ],
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "A company trades at `$40` per share. Total assets are `$2,000M`, total liabilities `$1,400M`, with `100M` shares outstanding and revenue of `$1,000M`.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**Book value (equity)** = `assets − liabilities = 2,000 − 1,400 = $600M`.",
        "**Book value per share** = `600 ÷ 100 = $6`.",
        "**P/B** = `price ÷ book value per share = 40 ÷ 6 = 6.67`.",
        "**Market cap** = `price × shares = 40 × 100 = $4,000M`.",
        "**P/S** = `market cap ÷ revenue = 4,000 ÷ 1,000 = 4.0`.",
      ],
    },
    {
      type: "text",
      body:
        "So the market pays about `6.67×` the company's book net worth and `4.0×` its annual sales.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Each multiple has a blind spot. **P/S ignores profitability** — a high-revenue money-loser can look 'cheap' on P/S while bleeding cash. **P/B is distorted for asset-light firms**: software and brands keep their value off the balance sheet (intangibles), so P/B looks absurdly high even for great companies. Pair both with margins.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Don't read *P/B below 1 = automatically undervalued*. It can mean the market expects write-downs (impairment) or losses that will erode book value. Investigate *why* it's low before calling it a bargain.",
    },
  ],
};

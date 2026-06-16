import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "cost-basis",
  title: "Cost Basis",
  level: 1,
  moduleId: "markets-owning-position",
  moduleOrder: 2,
  summary: "The number the tax form cares about — what you actually paid, and why gains are measured from it.",
  estMinutes: 5,
  sections: [
    {
      type: "text",
      body:
        "When you finally sell a stock, the most important question isn't *what did it sell for?* — it's *what did I pay for it?* That second number is your **cost basis**, and it's the baseline everything else is measured against.",
    },
    {
      type: "text",
      body:
        "Your **cost basis** is the total you paid to acquire a position — the share price **plus any fees or commissions**. It's the line in the sand: anything above it is gain, anything below it is loss.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Cost basis", def: "The total you paid to acquire a position, including fees. The baseline for gain or loss." },
        { term: "Average cost", def: "`total invested ÷ total shares` — your blended basis per share when you buy in pieces." },
        { term: "Capital gain / loss", def: "`proceeds − cost basis`. You're taxed on the *gain*, not the whole sale amount." },
        { term: "Tranche", def: "One slice of a position bought at a separate time and price." },
        { term: "Form 1099-B", def: "The U.S. broker tax form that reports your proceeds and cost basis for the year." },
      ],
    },
    { type: "heading", text: "Buying in tranches" },
    {
      type: "text",
      body:
        "Most people don't buy a position all at once — they add over time, each buy at a different price. Each of those buys is a **tranche**. To find your blended basis per share, divide everything you've put in by the shares you hold: `average cost = total invested ÷ total shares`.",
    },
    { type: "heading", text: "Worked example" },
    {
      type: "list",
      ordered: true,
      items: [
        "First buy: **10 shares @ $50** = `$500`.",
        "Second buy: **20 shares @ $65** = `$1,300`.",
        "Total invested = `$500 + $1,300 = $1,800` across **30 shares**.",
        "Average cost = `$1,800 ÷ 30 = $60` per share.",
        "Later you sell all **30 @ $75** → proceeds = `$2,250`.",
        "Capital gain = `proceeds − basis = $2,250 − $1,800 = $450`.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Common trap: thinking you're taxed on the **full $2,250 you sold for**. You're not — you're taxed only on the **$450 gain** (sale − basis). The money you originally invested isn't taxed again.",
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "Your broker tracks basis for you and reports it on **Form 1099-B**. Reinvested dividends and corporate actions (like splits) can adjust it — and how long you held affects whether a gain is *short-* or *long-term*, which can change the tax rate. (Educational only — not tax advice.)",
    },
  ],
};

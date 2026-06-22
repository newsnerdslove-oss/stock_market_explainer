import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "total-return",
  title: "Total Return",
  level: 1,
  moduleId: "markets-owning-position",
  moduleOrder: 7,
  summary: "Price change alone undercounts what you actually earned — total return adds the income you collected, and it's the honest way to compare investments.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "Two stocks both end the year at the same price they started. One looks like a flat, boring year — zero return. But if that stock paid you **$3 per share in dividends** along the way, you didn't earn nothing. You earned the income. Looking only at the price would hide it. That's why the honest measure of what an investment did for you is **total return**.",
    },
    {
      type: "text",
      body:
        "**Total return** is the full result of holding an investment: the change in its price **plus** any income it paid you — dividends from a stock, interest from a bond. FINRA calls it *\"generally considered the most accurate measure of return.\"* The price move alone is just one piece.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Total return", def: "The complete result of an investment: `price change + income`. Generally the most accurate measure of return." },
        { term: "Price return", def: "The change in price alone — `ending price − beginning price`. Ignores any income paid." },
        { term: "Income", def: "Cash the investment paid you while you held it — **dividends** from stocks, **interest** from bonds." },
        { term: "Total return %", def: "`(ending price − beginning price + income) ÷ beginning price`, shown as a percent." },
        { term: "Reinvestment", def: "Using the income to buy more shares instead of taking the cash — the engine of compounding." },
      ],
    },
    { type: "heading", text: "The formula" },
    {
      type: "text",
      body:
        "Total return as a percent is straightforward. Take where the price ended, subtract where it began, add the income you collected, and divide all of that by the beginning price:",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "`total return % = (ending price − beginning price + income) ÷ beginning price`. Strip out the income term and you're left with **price return** — which is why price return always understates a dividend-paying stock.",
    },
    { type: "heading", text: "Worked example" },
    {
      type: "list",
      ordered: true,
      items: [
        "You buy a stock at **$100**. A year later it's at **$105**.",
        "Price return = `($105 − $100) ÷ $100 = 5%`.",
        "But it also paid **$3** in dividends over the year.",
        "Total return = `($105 − $100 + $3) ÷ $100 = $8 ÷ $100 = 8%`.",
        "The dividend added **3 percentage points** the price chart never showed.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Common trap: judging a stock by its price chart alone. A flat or even slightly-down price can still be a **positive** total return once the dividends are counted. Income is real money — leaving it out makes a stock look worse than it actually did.",
    },
    { type: "heading", text: "Why reinvesting compounds" },
    {
      type: "text",
      body:
        "If you take the dividend as cash, you pocket it once. If you **reinvest** it — buy more shares — those new shares pay dividends too, and so do the shares those buy. Over years this snowballs: you earn returns on your returns. This is why long-run fund and stock performance is quoted on a **total-return basis assuming dividends are reinvested** — it captures the compounding that price-only figures miss entirely.",
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "Total return is also the only fair way to **compare across asset types**. A bond's gain is mostly interest; a growth stock's is mostly price; a dividend stock splits the difference. Comparing them on price alone is apples-to-oranges — total return puts every investment on the same honest scale.",
    },
  ],
};

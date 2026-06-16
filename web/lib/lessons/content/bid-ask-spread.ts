import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "bid-ask-spread",
  title: "Bid, ask, and the spread",
  level: 1,
  summary: "Every quote is really two prices — here's why that gap matters.",
  estMinutes: 4,
  sections: [
    {
      type: "text",
      body:
        "When you look up a stock you see one price, but the market actually runs on **two**: the bid and the ask. Understanding the gap between them is the difference between thinking you paid one price and actually paying another.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Bid", def: "The highest price a **buyer** is currently willing to pay." },
        { term: "Ask (offer)", def: "The lowest price a **seller** is currently willing to accept." },
        { term: "Spread", def: "The gap between them: `ask − bid`. It's a real cost you pay to trade." },
      ],
    },
    { type: "heading", text: "Who pays the spread" },
    {
      type: "text",
      body:
        "If you **buy now** (a market order), you pay the **ask**. If you **sell now**, you receive the **bid**. So buying and immediately selling loses you the spread — you're down before the price even moves.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Example: bid `$10.00`, ask `$10.05`. Buy 100 shares at the ask = $1,005. Sell them right back at the bid = $1,000. You lost **$5** to the spread, ignoring fees.",
    },
    { type: "heading", text: "Wide vs. tight spreads" },
    {
      type: "list",
      items: [
        "**Tight** spread (a cent or two) — lots of buyers and sellers; the asset is **liquid**. Cheap to trade.",
        "**Wide** spread — few participants; **illiquid**. Each trade costs more just to enter and exit.",
      ],
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "A **limit order** lets you set your own price instead of accepting the bid/ask — a way to avoid paying the full spread, at the risk of not getting filled.",
    },
  ],
};

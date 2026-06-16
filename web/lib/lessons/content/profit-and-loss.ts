import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "profit-and-loss",
  title: "Profit & loss (P&L), realized and unrealized",
  level: 1,
  summary: "How gains are actually counted — and why a 'paper' profit isn't real yet.",
  estMinutes: 5,
  sections: [
    {
      type: "text",
      body:
        "**P&L** — profit and loss — is just the difference between what you paid for something and what it's worth now. The catch is that there are **two kinds**, and only one of them is money in your pocket.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Cost basis", def: "What you actually paid to acquire a position, including fees." },
        { term: "Unrealized P&L", def: "Gain or loss on a position you **still hold**. It moves every tick — a *paper* profit." },
        { term: "Realized P&L", def: "Gain or loss **locked in** once you sell. This is the part that's truly yours." },
      ],
    },
    { type: "heading", text: "The basic math" },
    {
      type: "text",
      body:
        "For a position you bought (going **long**): `P&L = (current price − cost basis) × shares`. Buy 10 shares at $50 (cost basis $500); at $58 your unrealized P&L is `(58 − 50) × 10 = $80`. Sell there and that $80 becomes realized.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Unrealized gains can vanish before you sell. A 20% paper profit is not a 20% return until you've actually closed the trade.",
    },
    { type: "heading", text: "What eats into P&L" },
    {
      type: "list",
      items: [
        "**The spread** — you buy at the ask and sell at the bid (see the bid/ask lesson).",
        "**Fees / commissions** — added to your cost basis and subtracted on exit.",
        "**Slippage** — getting filled at a slightly worse price than you expected in fast markets.",
      ],
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "Your real **breakeven** is a bit above your purchase price — it has to cover the spread and fees before you're actually in profit.",
    },
  ],
};

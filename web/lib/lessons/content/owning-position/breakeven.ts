import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "breakeven",
  title: "Breakeven",
  level: 1,
  moduleId: "markets-owning-position",
  moduleOrder: 3,
  summary: "The price you actually need to hit to stop losing money — and why it sits above your buy price.",
  estMinutes: 4,
  sections: [
    {
      type: "text",
      body:
        "A stock you bought at $20 climbs back to exactly $20. Are you even? Almost — but not quite. Your true **breakeven** is the price at which selling leaves you with exactly what you started with, *after all costs*.",
    },
    {
      type: "text",
      body:
        "With **zero fees**, breakeven is simply your **cost basis per share** — get back to your buy price and you're even. But every cost of trading nudges that line a little higher: you have to recover not just the buy, but the cost of getting in *and* getting out.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Breakeven price", def: "The per-share price at which selling leaves you exactly even after all costs." },
        { term: "Commission", def: "A fee a broker charges to execute a trade. Many U.S. brokers now charge $0." },
        { term: "Round-trip cost", def: "The combined cost of both legs of a trade — buying in *and* selling out." },
        { term: "Cost basis", def: "Total paid to acquire the position, including buy fees." },
        { term: "Net proceeds", def: "What you actually receive on a sale after sell-side fees are deducted." },
      ],
    },
    { type: "heading", text: "The formula" },
    {
      type: "text",
      body:
        "Add up everything you must recover, then spread it over your shares: `breakeven per share = (purchase cost + buy fees + expected sell fees) ÷ shares`. The buy fees and sell fees together are your **round-trip cost**.",
    },
    { type: "heading", text: "Worked example" },
    {
      type: "list",
      ordered: true,
      items: [
        "Buy **100 shares @ $20** = `$2,000`.",
        "Add a `$5` buy fee → cost so far = `$2,005` (this is your cost basis).",
        "Add a `$5` expected sell fee → total to recover = `$2,010`.",
        "Breakeven = `$2,010 ÷ 100 = $20.10` per share.",
        "If your broker charges **$0 commission**, there's nothing extra to recover → breakeven ≈ `$20.00`.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Common trap: \"back to my purchase price = I broke even.\" That's only true with **zero fees**. Commissions push your breakeven higher — and even at $0 commission, the **spread and slippage** act like hidden costs that quietly raise the price you really need to hit.",
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "Sell **below** breakeven and you've taken a loss; sell **above** it and you're actually in profit. The wider your costs, the more the stock has to move just to get you back to zero.",
    },
  ],
};

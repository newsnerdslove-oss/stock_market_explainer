import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "slippage",
  title: "Slippage",
  level: 1,
  moduleId: "markets-quotes-orders",
  moduleOrder: 5,
  summary: "The small gap between the price you saw and the price you got — and what makes it big.",
  estMinutes: 4,
  sections: [
    {
      type: "text",
      body:
        "You see a stock at **$10.00**, hit buy, and the confirmation says **$10.06**. That six-cent difference is **slippage** — the gap between the price you *expected* and the price you actually got.",
    },
    {
      type: "text",
      body:
        "Slippage happens because prices move and the quote you saw can already be **stale** by the time your order reaches the market. It's not a fee — it's just the market having moved between your decision and your fill.",
    },
    { type: "heading", text: "What makes slippage worse" },
    {
      type: "list",
      items: [
        "**Market orders** — they take whatever price is available, so they absorb any movement.",
        "**Fast, volatile markets** — prices move more between click and fill.",
        "**Low liquidity / wide spreads** — fewer shares on offer near the quote, so you reach worse prices.",
        "**Large orders vs. available volume** — a big order eats through several price levels of the order book.",
        "**Gaps** — when price jumps without trading in between, fills land far from the last quote.",
      ],
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "**Limit orders prevent negative price surprises** — you'll never fill worse than your limit. The tradeoff is they may not fill at all. Slippage is closely tied to the **bid/ask spread**: the wider the spread, the more room to slip.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Slippage", def: "The difference between the price you expected (the quote you saw) and the actual fill price." },
        { term: "Volatility", def: "How fast and far a price moves. More volatility means more room for slippage." },
        { term: "Order book", def: "The live list of buy and sell orders at each price. A large order can sweep through several levels." },
        { term: "Best bid / best ask", def: "The highest price a buyer will pay and the lowest a seller will accept — the top of the order book." },
        { term: "Quote", def: "The current bid/ask you see. It can go stale in fast markets before your order fills." },
      ],
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "You see a stock last at **$10.00** and place a **market buy for 100 shares**. By the time it fills, the price has ticked up and you pay **$10.06**.",
    },
    {
      type: "list",
      items: [
        "Slippage per share = `$10.06 − $10.00 = $0.06`.",
        "Total slippage = `100 × $0.06 = $6`.",
        "As a percent: `$0.06 ÷ $10.00 ≈ 0.6%`.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: \"slippage only hits huge institutional trades.\" Any market order can slip — and small accounts feel it *most* in thin, fast-moving stocks where even 100 shares moves the price.",
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "Reduce slippage by trading **liquid names**, using **limit orders**, avoiding **volatile news moments**, and sizing orders sensibly relative to volume.",
    },
  ],
};

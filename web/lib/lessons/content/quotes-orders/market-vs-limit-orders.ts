import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "market-vs-limit-orders",
  title: "Market vs. Limit Orders",
  level: 1,
  moduleId: "markets-quotes-orders",
  moduleOrder: 2,
  summary: "The two orders you'll use most — one trades speed for price, the other price for speed.",
  estMinutes: 4,
  sections: [
    {
      type: "text",
      body:
        "Every time you trade, you choose between two things you can't fully have at once: **getting it done now** and **getting your price**. The two most common order types — market and limit — sit at opposite ends of that tradeoff.",
    },
    {
      type: "text",
      body:
        "A **market order** says *buy or sell right now, at the best available price*. It's fast and almost always fills — but you don't control the exact price you get. A **limit order** says *only trade at $X or better*. You control the price, but it may fill slowly, only partially, or never.",
    },
    { type: "heading", text: "The core tradeoff" },
    {
      type: "list",
      items: [
        "**Market order** → certainty of *execution*, not of *price*. You'll almost certainly get filled; the exact price can move.",
        "**Limit order** → certainty of *price*, not of *execution*. You'll never pay worse than your limit, but you might not trade at all.",
      ],
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "Market orders are most predictable on **liquid, tight-spread** stocks — big names where the price barely moves between when you click and when you fill. On thin, jumpy stocks, a market order is far less predictable.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Market order", def: "An instruction to trade **immediately** at the best available price. High fill certainty, no price control." },
        { term: "Limit order", def: "An instruction to trade only at a set price **or better** — `buy at $X or lower`, `sell at $X or higher`." },
        { term: "Limit price", def: "The worst price you'll accept on a limit order. The order won't trade beyond it." },
        { term: "Fill", def: "An executed trade. An order can be fully filled, partially filled, or unfilled." },
        { term: "Execution certainty", def: "How sure you are the order will actually trade. Market orders are high; limit orders depend on price reaching your limit." },
      ],
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "Say a stock last printed at **$50.00** and you want 100 shares.",
    },
    {
      type: "list",
      items: [
        "**Market buy 100** → fills at the best available ask, say ~`$50.04`, for about `100 × $50.04 = $5,004`. You're in immediately, but you paid 4 cents above the last print.",
        "**Limit buy at $49.90** → you only buy if the price dips to `$49.90` or lower. If it dips, you save money; if it never dips, you buy nothing.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Common mistake: thinking a market order fills at *exactly* the price on screen. The quote you see can move in the split second before you fill — your actual price may differ. That gap is **slippage**.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "An unfilled limit order is a **real outcome**, not a glitch. If you place a limit and the price never reaches it before the order expires, you simply don't trade — by design.",
    },
  ],
};

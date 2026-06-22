import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "buy-stops-and-trailing-stops",
  title: "Buy-Stops & Trailing Stops",
  level: 1,
  moduleId: "markets-quotes-orders",
  moduleOrder: 8,
  summary: "Stops that sit above the market — and stops that chase the price and lock in gains.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "The classic stop sits **below** the market and waits to sell you out of a falling position. But a stop is just a trigger level — and you can put that level **above** the market, or tell it to **move on its own** as the price runs in your favor. Two variations do exactly that: the **buy-stop** and the **trailing stop**.",
    },
    { type: "heading", text: "Buy-stops: a trigger above the market" },
    {
      type: "text",
      body:
        "A **buy-stop** order is entered at a stop price **above** the current market price. It does nothing while the stock trades below it; the instant the price rises to the stop, it **activates** — becoming a market order to buy.",
    },
    {
      type: "list",
      items: [
        "**Covering a short** → if you're short and the stock starts climbing against you, a buy-stop above the market **caps your loss** (or protects a profit) by buying you back in if it runs.",
        "**Breakout entry** → some traders place a buy-stop just above a resistance level so they only get in **after** the stock proves it can push higher.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Mirror image of a sell stop: a **sell stop** sits **below** the market to protect a long position; a **buy stop** sits **above** the market to protect a short position or chase an upside breakout.",
    },
    { type: "heading", text: "Trailing stops: a stop that follows the price" },
    {
      type: "text",
      body:
        "A **trailing stop** sets its stop not at a fixed dollar price, but a fixed **distance** away — a set dollar amount or **percentage** from the market. As the price moves in your favor, the stop **trails** along behind it, staying that same distance back. When the price moves against you, the stop **stays put**. It only ever ratchets in your favor; it never gives ground.",
    },
    {
      type: "list",
      items: [
        "**On a long position** → a trailing stop sits **below** the market and rises as the stock rises, locking in gains. If the stock falls back by the trail amount, it triggers and sells.",
        "**On a short position** → a trailing stop sits **above** the market and **falls** as the stock falls, then triggers a buy if the stock bounces back by the trail amount.",
      ],
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "The point of a trailing stop is to **let a winner run while protecting gains**. You don't have to keep moving your stop up by hand — the trail does it for you, but only ever in the favorable direction.",
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "You buy a stock at **$50** and attach a **$5 trailing stop**. The stop starts at `$45` ($5 below). The stock rallies to `$60` — the stop **trails up** to `$55`. Then it stalls and slips to `$58`; the stop **does not move down**, it holds at `$55`. The stock keeps falling to `$55`, the stop **triggers**, and you sell — locking in roughly a `$5` gain instead of riding it all the way back down.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Same fine print as any stop: when triggered, a buy-stop or trailing stop becomes a **market order**, not a guaranteed price. The SEC is explicit — the stop price is **not** the guaranteed execution price, and in a fast-moving market the fill can deviate **significantly** from the stop. (A trailing *stop-limit* can miss entirely if the price gaps past your limit.)",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Buy-stop order", def: "A stop entered **above** the current market price; activates and **buys** when the price rises to it. Used to cover a short or enter on an upside breakout." },
        { term: "Sell-stop order", def: "A stop entered **below** the market; activates and **sells** when the price falls to it. Protects a long position." },
        { term: "Trailing stop", def: "A stop set a fixed **dollar amount or percentage** away from the market. It trails the price in the favorable direction and stays fixed when the price moves against you." },
        { term: "Trail amount", def: "The distance the stop holds from the market — a dollar figure (e.g. **$5**) or a **percentage** (e.g. **10%**)." },
        { term: "Ratchet", def: "The one-way nature of a trailing stop: it moves only in your favor and never the other way, locking in gains as the price runs." },
      ],
    },
    {
      type: "text",
      body:
        "Bottom line: **where** the stop sits and **whether it moves** are just settings on the same trigger. A buy-stop flips the direction; a trailing stop automates the follow. But the trigger always converts to a **market order** — certain to act, not certain on price.",
    },
  ],
};

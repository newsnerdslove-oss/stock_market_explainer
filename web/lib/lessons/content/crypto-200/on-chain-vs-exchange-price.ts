import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "on-chain-vs-exchange-price",
  title: "On-Chain vs Exchange Price",
  level: 2,
  moduleId: "crypto-200",
  moduleOrder: 2,
  summary: "Why the same token shows different prices on a centralized exchange and an on-chain DEX — and what closes the gap.",
  estMinutes: 5,
  sections: [
    {
      type: "text",
      body:
        "Look up one token in two places and you may see two different prices. That isn't an error — it reflects two different machines computing price in two different ways. Understanding why they diverge tells you a lot about how crypto markets actually settle.",
    },
    { type: "heading", text: "Two ways to make a price" },
    {
      type: "text",
      body:
        "A centralized exchange (**CEX**) price comes from an **order book** — the best bid and best ask among resting orders. Most trades there settle on the exchange's **internal ledger**; you don't truly hold the asset on-chain until you withdraw.",
    },
    {
      type: "text",
      body:
        "An on-chain / **DEX** price is computed by a smart contract — often an **AMM** — from the **ratio of assets in a liquidity pool**, and the trade settles **on-chain**. Two separate venues, two separate pools of liquidity and order flow, so two separate prices.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Order book", def: "The list of resting buy and sell orders; the best bid/ask sets a CEX price." },
        { term: "Liquidity pool", def: "Assets locked in a smart contract; an AMM prices trades from the pool's ratio." },
        { term: "Arbitrage", def: "Buying on the cheaper venue and selling on the dearer one until the gap closes." },
        { term: "Settlement", def: "Where a trade finalizes — on-chain for a DEX, on the internal ledger for a CEX." },
        { term: "Internal ledger", def: "An exchange's own record of who owns what; a balance there is an IOU until withdrawn." },
        { term: "Spread", def: "The gap between the best bid and best ask on an order book." },
      ],
    },
    { type: "heading", text: "What pulls prices back together" },
    {
      type: "text",
      body:
        "**Arbitrage** narrows gaps: traders buy where the token is cheap and sell where it's dear, and that flow pushes the two prices toward each other until the remaining gap is smaller than the cost of the trade. Gaps **persist** when arbitrage is slow or costly — gas fees, withdrawal limits and times, bridging delays, low liquidity, and slippage all stand in the way.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "There is no single \"the price.\" Price is **venue-specific**. Aggregators show a *blended* figure across venues, which is useful as a reference but is not the price you'll get on any one exchange.",
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "Say a token shows `$10.00` on a CEX and `$10.30` on a DEX (illustrative). An arbitrageur buys near `$10.00` on the CEX and sells into the DEX pool. Selling into the pool **lowers** the DEX price, while the CEX buying nudges its price **up**, so the two converge toward a middle figure. The activity stops once the gap shrinks below the round-trip cost of gas and fees — at that point there's no profit left to chase.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Two edge cases bite real users. A **thin DEX pool's** quoted price is *not* the price you'll get for size — a large order moves the pool and fills worse (**slippage**). And a **CEX balance** you haven't withdrawn is an IOU on the internal ledger, **not** in your custody.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**Misconception:** \"An asset has one true price everywhere.\" Price is *per-venue*. Arbitrage narrows differences but doesn't perfectly erase them — especially when moving funds between venues is slow or costly.",
    },
  ],
};

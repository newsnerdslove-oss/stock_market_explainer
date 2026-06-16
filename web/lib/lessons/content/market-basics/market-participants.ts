import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "market-participants",
  title: "Who's in the Market",
  level: 1,
  moduleId: "markets-basics",
  moduleOrder: 4,
  summary: "Retail, institutions, market makers, brokers — who's trading and who really moves prices.",
  estMinutes: 4,
  sections: [
    {
      type: "text",
      body:
        "The market isn't one crowd — it's several very different players, each with a distinct role and a very different size of wallet. Knowing who they are explains a lot about why prices move.",
    },
    { type: "heading", text: "Retail vs. institutional" },
    {
      type: "list",
      items: [
        "**Retail investors** are individuals trading their own money, usually in small amounts.",
        "**Institutional investors** are funds, pensions, and hedge funds trading enormous sums on behalf of many people.",
        "Institutions account for the **majority of trading volume**, so most big price moves are driven by them — not by retail.",
      ],
    },
    { type: "heading", text: "Market makers provide liquidity" },
    {
      type: "text",
      body:
        "A **market maker** continuously quotes both a price to buy and a price to sell a stock. By always standing ready to trade, they provide **liquidity** — meaning you can almost always find someone on the other side of your order.",
    },
    { type: "heading", text: "Brokers route your orders" },
    {
      type: "text",
      body:
        "A **broker** is your gateway to the market. You can't trade on an exchange directly as an individual — your broker takes your order and routes it to a venue (an exchange or a market maker) where it gets executed.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Regulators keep the whole system honest. The **SEC** oversees the markets and **FINRA** oversees brokers, setting rules and enforcing them.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Retail investor", def: "An individual trading their own money, typically in small size." },
        { term: "Institutional investor", def: "A fund, pension, or hedge fund trading large sums for many people." },
        { term: "Market maker", def: "A firm that quotes both buy and sell prices to provide liquidity." },
        { term: "Broker", def: "The firm that routes your orders to the market on your behalf." },
        { term: "Liquidity", def: "How easily you can buy or sell without moving the price much." },
        { term: "SEC / FINRA", def: "The main U.S. regulators of the markets (SEC) and brokers (FINRA)." },
      ],
    },
    { type: "heading", text: "A worked example" },
    {
      type: "text",
      body:
        "You buy `10` shares through your broker, who routes the order to a market maker that fills it. Your trade barely registers. Meanwhile a pension fund buys `500,000` shares of the same stock — and *that* order can noticeably push the price up. Same market, wildly different impact.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Common misconception: retail traders aren't the main force moving prices. **Institutions dominate volume**, so a sudden move on no obvious news is far more likely to be a large institution than a wave of small investors.",
    },
  ],
};

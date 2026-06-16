import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "crypto-volatility",
  title: "Why crypto swings so hard",
  level: 1,
  moduleId: "crypto-100",
  moduleOrder: 5,
  summary: "Crypto routinely moves in a day what a stock index might move in a month — and that cuts both ways.",
  estMinutes: 5,
  sections: [
    {
      type: "text",
      body:
        "If you've watched crypto for more than a week, you've seen it: prices lurching up or down by amounts that would make a stock trader spill their coffee. That's **volatility**, and understanding *why* crypto has so much of it is the difference between bracing for it and being blindsided.",
    },
    {
      type: "heading",
      text: "What volatility means",
    },
    {
      type: "text",
      body:
        "**Volatility** is how much and how fast a price moves. Crypto is far more volatile than stocks: **5–10%+ daily moves are common**, and **20%+ swings** happen. The same conditions that make a 30% gain possible make a 30% loss just as possible.",
    },
    {
      type: "heading",
      text: "Why crypto moves so much",
    },
    {
      type: "list",
      items: [
        "**No earnings to anchor value** — many cryptos have no cash flows or profits, so price rests on supply, demand, and **sentiment** rather than fundamentals.",
        "**No circuit breakers, 24/7** — nothing pauses a runaway move (see the previous lesson).",
        "**Thinner, younger markets** — less liquidity and large holders (**whales**) can move price sharply.",
        "**Sentiment-driven** — news, regulation, and social media can swing prices fast.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Volatility", def: "How much and how fast a price moves — bigger, faster swings mean higher volatility." },
        { term: "Sentiment", def: "The market's collective mood — optimism or fear — which drives price when fundamentals are thin." },
        { term: "Liquidity", def: "How easily an asset can be traded without moving its price; thin liquidity amplifies swings." },
        { term: "Whale", def: "A holder large enough that their trades can noticeably move the price." },
        { term: "Risk", def: "The chance of loss — and volatility is a core measure of it, cutting in both directions." },
      ],
    },
    {
      type: "heading",
      text: "Worked example",
    },
    {
      type: "text",
      body:
        "A broad **stock index** moving ~1% is a normal day; a 3% day already feels *\"volatile.\"* For a major crypto, **+8% in a day is routine**. On `$1,000`, that's about a **`$10`** swing in the index versus roughly **`$80`** in the crypto (illustrative). Same dollar amount, very different ride.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Common myth: *\"high volatility mostly means high potential profit.\"* Volatility is **two-directional** — it *is* risk. The exact conditions that allow a 30% gain allow a 30% loss just as easily.",
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "Practical, not advice: expect large swings, never put in money you can't afford to lose, and remember that **past gains don't predict future ones**.",
    },
  ],
};

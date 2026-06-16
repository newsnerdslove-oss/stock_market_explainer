import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "sectors-and-indices",
  title: "Sectors & indices",
  level: 1,
  moduleId: "markets-valuation",
  moduleOrder: 5,
  summary: "How the market is grouped — and what the S&P 500, Dow, and Nasdaq really track.",
  estMinutes: 5,
  sections: [
    {
      type: "text",
      body:
        "Every night the news says \"the market\" was up or down. But *which* market — and measured how? The answer runs through two ideas: **sectors**, which group companies by what they do, and **indices**, which bundle stocks into a single number you can track.",
    },
    { type: "heading", text: "Sectors: grouping by business" },
    {
      type: "text",
      body:
        "A **sector** groups companies that do similar work — technology, energy, healthcare, financials, consumer, and so on. The widely-used **GICS** framework defines **11** sectors. Companies in the same sector tend to move together because they share the same forces: an oil-price spike lifts energy names; a rate cut tends to move financials.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Sector", def: "A group of companies in the same line of business. GICS defines 11 of them." },
        { term: "Index", def: "A tracked basket of stocks that gauges a slice of the market." },
        { term: "S&P 500", def: "About 500 large US companies (~503 stocks), weighted by market cap — the main US benchmark." },
        { term: "Dow Jones Industrial Average", def: "Just 30 large companies, price-weighted — famous but narrow." },
        { term: "Nasdaq Composite", def: "Thousands of Nasdaq-listed stocks, heavily tech-weighted (not the same as the Nasdaq-100)." },
        { term: "Index fund / ETF", def: "A fund that holds an index's stocks, letting you buy the whole basket cheaply in one trade." },
      ],
    },
    { type: "heading", text: "Indices: one number for many stocks" },
    {
      type: "text",
      body:
        "An **index** is a defined basket of stocks tracked together to gauge part of the market. You can't buy an index directly, but you can buy it through an **index fund** or **ETF** — which is how most beginners get broad, low-cost exposure in a single purchase.",
    },
    {
      type: "list",
      items: [
        "**S&P 500** — about **500** large US companies (~503 stocks, thanks to dual share classes), **market-cap weighted** so the biggest names count most. The main US benchmark and the broadest of the three.",
        "**Dow Jones Industrial Average** — only **30** large companies, and **price-weighted**, so a high-priced stock sways it more than a bigger company with a lower price. Famous, but narrow.",
        "**Nasdaq Composite** — **thousands** of Nasdaq-listed stocks, **heavily tech-weighted**. Don't confuse it with the Nasdaq-100, which is just the 100 largest.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Worked example: oil drops, energy falls **−4%** while tech climbs **+2%**. A Nasdaq Composite fund rises, an energy-sector fund falls, and the broad **S&P 500** lands somewhere in between — its sector mix cushions the swings.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**\"The Dow represents the whole market\" is misleading.** It's just 30 companies and is *price-weighted*, which overweights high-priced stocks. The **S&P 500** is far broader and more representative of the US market.",
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "For most beginners, an S&P 500 index fund is the simplest way to track and invest in the broad US large-cap market in one cheap, diversified trade.",
    },
  ],
};

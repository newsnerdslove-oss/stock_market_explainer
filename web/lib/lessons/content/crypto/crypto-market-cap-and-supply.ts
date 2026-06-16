import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "crypto-market-cap-and-supply",
  title: "Crypto market cap & supply",
  level: 1,
  moduleId: "crypto-100",
  moduleOrder: 3,
  summary: "Why a $0.50 coin can be worth far more than a $50,000 one — it's supply, not unit price.",
  estMinutes: 5,
  sections: [
    {
      type: "text",
      body:
        "*\"This coin is only `$0.01` — imagine if it hit `$100`!\"* It's one of the most common beginner traps in crypto, and it falls apart the moment you ask the right question: **how many units exist?** The honest size of a crypto is its **market cap**, not its unit price.",
    },
    {
      type: "heading",
      text: "Market cap = price × supply",
    },
    {
      type: "text",
      body:
        "**Market cap** is `price × circulating supply` — the same logic as a stock's market cap. A coin's *unit price* on its own tells you almost nothing, because supplies differ wildly. A `$0.50` coin with a huge supply can be a bigger asset than a `$50,000` coin with a tiny one.",
    },
    {
      type: "heading",
      text: "Circulating vs. max supply",
    },
    {
      type: "list",
      items: [
        "**Circulating supply** — the units actually in the market right now.",
        "**Max supply** — the hard cap on how many can ever exist, *if* the coin has one.",
        "**Capped** vs. **inflationary** — some coins cap supply; others keep issuing new units over time.",
      ],
    },
    {
      type: "text",
      body:
        "Examples (illustrative): **Bitcoin** is capped at **21,000,000**, with roughly **20 million** circulating already (~95%). **Ethereum** has **no fixed cap**. **Dogecoin** is **uncapped / inflationary**. **XRP** has a **100 billion** cap.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Market cap (crypto)", def: "`price × circulating supply` — the total value of all circulating units." },
        { term: "Circulating supply", def: "The number of units currently available in the market." },
        { term: "Max supply", def: "The hard cap on how many units can ever exist (if any)." },
        { term: "Capped supply", def: "A fixed maximum that can never be exceeded (e.g. Bitcoin's 21M)." },
        { term: "Inflationary supply", def: "Supply that keeps growing over time with no hard cap (e.g. Dogecoin)." },
      ],
    },
    {
      type: "heading",
      text: "Worked example",
    },
    {
      type: "text",
      body:
        "Coin **A**: `$30,000 × 20,000,000 = $600B` market cap. Coin **B**: `$0.50 × 500,000,000,000 = $250B` market cap. Coin B's *tiny* unit price still makes it a **`$250B` asset** (all figures illustrative). The unit price alone would have told you the opposite of the truth.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Common myth: *\"this coin is `$0.01`, so it's cheap and could easily hit `$100`.\"* Run the math: `$0.01 × 100B units = $1B` cap *already*. For one unit to reach `$100`, the cap would need to hit `$10T` — larger than almost anything on Earth. A **low unit price is not 'cheap'** and is not 'room to grow.'",
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "Before reacting to a unit price, ask: *price times what supply?* That one habit defuses most low-price hype. None of this is advice — it's just how to read the number honestly.",
    },
  ],
};

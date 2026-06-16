import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "order-book-and-market-depth",
  title: "The Order Book & Market Depth",
  level: 2,
  moduleId: "markets-structure",
  moduleOrder: 1,
  summary: "Read a Level 2 book and see why a big order moves the price.",
  estMinutes: 5,
  sections: [
    {
      type: "text",
      body:
        "Behind every quote is a queue. The **order book** is the live, price-ranked list of resting limit orders waiting to trade — and once you can read it, *why* prices move when a big order hits stops being a mystery.",
    },
    { type: "heading", text: "What the book actually shows" },
    {
      type: "text",
      body:
        "**Bids** (buyers) are stacked from the highest price down; **asks** (sellers) from the lowest price up. The gap between the best bid and the best ask is the **spread**. The very best bid and best ask together are the *top of book*.",
    },
    {
      type: "list",
      items: [
        "**Level 1** shows only the *top of book*: the best bid and best ask, their sizes, and the last trade.",
        "**Level 2** shows *depth of book*: multiple price levels on each side and the size resting at each one.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Bid / Ask (offer)", def: "The best price a buyer will pay (bid) and the best price a seller will accept (ask)." },
        { term: "Top of book", def: "The single best bid and best ask — what a Level 1 quote shows." },
        { term: "Market depth", def: "How much size is resting near the touch. Deep books absorb large orders; thin ones have gaps." },
        { term: "Level 1 / Level 2", def: "L1 = best bid/ask + last trade. L2 = the full ladder of price levels and sizes." },
        { term: "Walking the book", def: "A market order filling the best price first, then the next level, then the next, until it's full." },
        { term: "Slippage", def: "The difference between the price you expected (the top quote) and your actual average fill." },
        { term: "Iceberg order", def: "A large order that only displays a small piece at a time, hiding its true size." },
      ],
    },
    { type: "heading", text: "Worked example: walking the book" },
    {
      type: "text",
      body:
        "Say the ask side reads `100 @ $50.00`, `200 @ $50.02`, `500 @ $50.05`. You send a **market buy for 600 shares**. A market order takes the best price first, then climbs:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "`100 @ $50.00` = `$5,000`",
        "`200 @ $50.02` = `$10,004`",
        "`300 @ $50.05` = `$15,015` (only 300 of the 500 here are needed)",
      ],
    },
    {
      type: "text",
      body:
        "Total cost `$30,019` for 600 shares — an **average of ~`$50.0317`**, not the `$50.00` you saw at the top. Your order also *lifted* the best ask to `$50.05`, because the cheaper levels are now gone.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Displayed size isn't the whole story. **Iceberg and hidden orders** mean more can fill near a level than the book shows — and Level 2 only displays *lit* orders, never dark or hidden liquidity. Quoted size can also vanish before you reach it (fading or *phantom* liquidity).",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Don't assume a market order fills at the quoted price. For any size bigger than the top level, it **walks the book** and your average fill comes out *worse* than the top quote. On a thin book, that slippage can be large.",
    },
  ],
};

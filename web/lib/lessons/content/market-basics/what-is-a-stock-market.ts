import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "what-is-a-stock-market",
  title: "What a Stock Market Is",
  level: 1,
  moduleId: "markets-basics",
  moduleOrder: 1,
  summary: "Where shares of companies actually change hands — and who you're really trading with.",
  estMinutes: 4,
  sections: [
    {
      type: "text",
      body:
        "When you buy a **stock**, you're buying a tiny slice of ownership in a real company. A stock market is simply the place where those slices change hands — a regulated marketplace that matches people who want to buy with people who want to sell.",
    },
    { type: "heading", text: "A share is a slice of ownership" },
    {
      type: "text",
      body:
        "A company divides itself into millions (sometimes billions) of equal pieces called **shares**. Own one share and you own one of those pieces. If a company has issued `1,000,000` shares and you hold `2`, you own a very small — but real — fraction of the whole business.",
    },
    { type: "heading", text: "An exchange matches buyers and sellers" },
    {
      type: "text",
      body:
        "A **stock exchange** like the **NYSE** or **Nasdaq** is a regulated marketplace. It doesn't decide what a stock is worth. Its job is to take everyone's buy and sell orders, match them up, and record each completed trade.",
    },
    {
      type: "list",
      items: [
        "Someone wants to **sell** a share at a price they'll accept.",
        "Someone else wants to **buy** a share at a price they'll pay.",
        "When those prices meet, the exchange **matches** them and records the **trade**.",
      ],
    },
    { type: "heading", text: "Prices move from supply and demand" },
    {
      type: "text",
      body:
        "Because trades happen continuously during market hours, prices move all day. More eager buyers than sellers nudges the price up; more eager sellers nudges it down. The exchange never sets the price — the crowd of buyers and sellers does.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Stock / share", def: "A small unit of ownership in a company. One share = one slice." },
        { term: "Stock exchange", def: "A regulated marketplace that matches buyers and sellers and records trades." },
        { term: "NYSE", def: "The New York Stock Exchange, one of the two big U.S. exchanges." },
        { term: "Nasdaq", def: "The other major U.S. exchange, home to many tech companies." },
        { term: "Trade", def: "A single completed buy-and-sell match between two investors." },
        { term: "Public company", def: "A company whose shares anyone can buy and sell on an exchange." },
      ],
    },
    { type: "heading", text: "A worked example" },
    {
      type: "text",
      body:
        "Maria wants one share of `AAPL`. At the same moment, Tom wants to sell one share of `AAPL`. The Nasdaq matches them at `$200` and records the trade. Maria's `$200` goes to **Tom** — the selling investor. Apple itself isn't part of this trade at all.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Common misconception: buying a stock on the exchange does **not** hand money to the company. On this **secondary market**, your money goes to the investor who sold. A company only raises money when it *first issues* its shares.",
    },
  ],
};

import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "primary-vs-secondary-market",
  title: "Primary vs. Secondary Market",
  level: 1,
  moduleId: "markets-basics",
  moduleOrder: 6,
  summary: "When does a company actually get your money? The answer is primary vs. secondary.",
  estMinutes: 5,
  sections: [
    {
      type: "text",
      body:
        "There's a crucial difference between buying shares *from a company* and buying them *from another investor*. That difference is the line between the **primary** and **secondary** market — and it decides who actually gets your money.",
    },
    { type: "heading", text: "The primary market" },
    {
      type: "text",
      body:
        "The **primary market** is where a company sells **new** shares to raise money. The classic example is an **IPO** (initial public offering). When investors buy at the offering price, that money goes **to the company** as proceeds it can spend.",
    },
    { type: "heading", text: "The secondary market" },
    {
      type: "text",
      body:
        "The **secondary market** is the everyday exchange where investors trade **existing** shares with each other. This is what's happening almost every time you buy a stock. The **company gets nothing** from these trades — your money goes to the investor who sold.",
    },
    {
      type: "list",
      items: [
        "**Primary** — new shares, money flows to the **company**. (IPO, follow-on offering.)",
        "**Secondary** — existing shares, money flows to the **selling investor**. (Daily exchange trading.)",
        "An IPO is a **one-time** sale for those shares; afterward they trade hands daily on the secondary market.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "A company can return to the primary market later by issuing more new shares — a **follow-on** (or secondary) **offering**. That fresh issuance is primary again, even though the company is already public.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Primary market", def: "Where a company sells new shares; money goes to the company." },
        { term: "IPO", def: "Initial public offering — a company's first sale of shares to the public." },
        { term: "Secondary market", def: "Where investors trade existing shares with each other." },
        { term: "Issuance", def: "The act of a company creating and selling new shares." },
        { term: "Follow-on / secondary offering", def: "A later sale of new shares by an already-public company." },
        { term: "Proceeds", def: "The money a company actually raises from selling new shares." },
      ],
    },
    { type: "heading", text: "A worked example" },
    {
      type: "text",
      body:
        "Company X IPOs `10,000,000` shares at `$20` each, raising `$200,000,000` — that's **primary**, and the cash goes to the company. The next day you buy `100` shares at `$25` from another investor. That's **secondary**: your `$2,500` goes to the seller, and Company X receives nothing.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Common misconception: buying a hot stock on IPO day does **not** automatically fund the company. Only investors allocated shares **at the offering price** buy from the company. Once public trading opens, you're buying from other investors on the secondary market.",
    },
  ],
};

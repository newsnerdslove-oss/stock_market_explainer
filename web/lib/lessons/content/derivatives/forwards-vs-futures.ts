import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "forwards-vs-futures",
  title: "Forwards vs. Futures",
  level: 2,
  moduleId: "markets-derivatives",
  moduleOrder: 6,
  summary: "Same economics, opposite plumbing — a private handshake vs. an exchange with a clearinghouse in the middle.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "A **forward** and a **future** both lock in a price today for delivery later. The *economics* look almost identical — so people lump them together. But the **plumbing** underneath is completely different, and that difference decides who you're trusting, how easily you can exit, and who's watching the market.",
    },
    { type: "heading", text: "A forward is a private deal" },
    {
      type: "text",
      body:
        "A **forward contract** is a private, **over-the-counter (OTC)** agreement between two parties to buy or sell an asset at a set price on a set future date. Because it's negotiated directly, it can be **customized** — any quantity, grade, location, or date the two sides want. The catch: there's no one in the middle. Each side bears **counterparty risk** — the risk that the *other party defaults* and doesn't perform.",
    },
    { type: "heading", text: "A future is the same trade, run through an exchange" },
    {
      type: "text",
      body:
        "A **futures contract** is the *standardized*, **exchange-traded** version of that same obligation. The exchange fixes the terms — contract size, quality, delivery dates — so the contracts are interchangeable. Crucially, a **clearinghouse** steps into the middle of every trade: it becomes **the buyer to every seller and the seller to every buyer**. You're no longer trusting the stranger on the other side — you're facing the clearinghouse.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Per the CFTC, when a futures contract is bought or sold it is *technically* bought from or sold to the clearinghouse — not the party you traded with. That central substitution is what removes individual counterparty risk.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Forward contract", def: "A private, OTC agreement to buy or sell an asset at a set price and date — customizable but not standardized." },
        { term: "Futures contract", def: "The standardized, exchange-traded version of a forward, guaranteed by a clearinghouse." },
        { term: "Over-the-counter (OTC)", def: "Traded privately between two parties, not on a centralized exchange." },
        { term: "Counterparty (credit) risk", def: "The risk that the other party defaults and fails to perform — borne directly in a forward." },
        { term: "Clearinghouse", def: "The entity that becomes buyer to every seller and seller to every buyer, guaranteeing performance on a future." },
        { term: "Mark-to-market", def: "Daily settlement of gains and losses in cash — standard on futures, not on a typical forward." },
        { term: "CFTC", def: "The Commodity Futures Trading Commission, the U.S. regulator of futures, options, and swaps markets." },
      ],
    },
    { type: "heading", text: "Five differences that actually matter" },
    {
      type: "list",
      items: [
        "**Standardization:** a forward is *customized* to the two parties; a future is *standardized* by the exchange, so the contracts are interchangeable.",
        "**Counterparty risk:** a forward leaves you exposed to the other party's default; a future is *guaranteed against default by the clearinghouse*, which becomes your counterparty.",
        "**Settlement timing:** a forward is typically settled *once*, at delivery; a future is **marked-to-market daily**, with gains and losses paid in cash every day via margin.",
        "**Liquidity / exit:** a forward is hard to exit — you can't simply *offset* it, so unwinding usually means renegotiating with that same party. A future is liquid: you close by trading an *equal and opposite* contract, which extinguishes the position.",
        "**Regulation:** U.S. futures trade on regulated exchanges overseen by the **CFTC**; traditional forwards are private OTC contracts that historically sat outside that exchange framework.",
      ],
    },
    { type: "heading", text: "Why the clearinghouse changes everything" },
    {
      type: "text",
      body:
        "On a forward, contract performance is only as strong as the *creditworthiness of the other party*. On a future, the clearinghouse requires **margin** (a performance bond) from both sides and settles gains and losses daily, so performance is backed by the strength of the *whole clearing system* rather than one counterparty. That's why exchange-traded futures offer high liquidity and a low risk of contract nonperformance — benefits that flow directly from standardization plus the clearinghouse guarantee.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**Misconception: \"a forward is safer because it's private and flexible.\"** Customization is real, but privacy cuts the other way — there's no clearinghouse, no daily settlement, and no exchange watching. If your counterparty fails, *you* eat the loss. A future trades that flexibility for a guaranteed counterparty. Educational only, not financial advice.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "The CFTC was created by Congress in 1974 to regulate U.S. commodity futures and options markets; after the 2008 financial crisis its mandate expanded to cover most OTC derivatives, including many swaps that resemble forwards.",
    },
  ],
};

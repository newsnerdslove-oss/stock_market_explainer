import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "rights-and-warrants",
  title: "Rights & Warrants",
  level: 2,
  moduleId: "markets-derivatives",
  moduleOrder: 5,
  summary: "Two ways to buy stock at a fixed price — one short and protective, one long and a sweetener.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "Calls and futures come from the *market*. **Rights** and **warrants** come from the *company itself* — they're contracts a corporation issues directly, each one a fixed-price ticket to buy its shares. They look similar on the surface, but they sit at opposite ends of one spectrum: a right is **short-term** and priced to be a bargain *today*, while a warrant is **long-term** and priced to pay off *someday*.",
    },
    { type: "heading", text: "Preemptive rights: protecting existing owners" },
    {
      type: "text",
      body:
        "When a company issues new shares, every existing shareholder's slice of the pie gets smaller — that's **dilution**. A **preemptive right** is the fix: before selling new stock to the public, the company offers it to current shareholders *first*, in **proportion to what they already own**, so they can keep their ownership percentage intact. FINRA describes a **rights offering** as one where a company issues rights that *\"entitle [existing shareholders] to buy additional shares directly from the company in proportion to their existing holdings within a prescribed time period.\"*",
    },
    {
      type: "list",
      items: [
        "**One right per share owned.** Own `100` shares, receive `100` rights — your stake in the offering scales with your stake in the company.",
        "**Subscription price BELOW market.** The price to buy is *\"generally at a discount to the current market price,\"* so the rights have real value the moment they're issued.",
        "**Short-term.** A rights offering runs for a *\"prescribed time period\"* — FINRA notes the expiration is **generally one to three months** from the announcement. Holders must subscribe, sell, or let the rights lapse before then.",
        "**Often transferable.** A shareholder who doesn't want more stock can usually *sell* the rights on the open market instead of letting them expire worthless.",
      ],
    },
    { type: "heading", text: "Warrants: the long-term sweetener" },
    {
      type: "text",
      body:
        "A **warrant** is a longer-lived contract — FINRA's plain-English definition: *\"a contract that gives the holder the right to purchase from the issuer a certain number of additional shares of common stock in the future at a certain price, often a premium to the stock price at the time the warrant is issued.\"* That last phrase is the whole personality of a warrant: the **strike is set ABOVE the market price** at issuance, so on day one the warrant has no intrinsic value — it's a bet that the stock climbs *past* the strike over time.",
    },
    {
      type: "text",
      body:
        "Because they start out worthless on paper and last for years, warrants are most often used as a **\"sweetener.\"** A company attaches them to a **bond** or **preferred stock** offering at issue, making the package more attractive so it can borrow at a lower rate. The investor gets the income from the bond *plus* a long-dated lottery ticket on the stock.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Preemptive right", def: "The right of an existing shareholder to buy new shares *first*, in proportion to current holdings, to avoid dilution." },
        { term: "Rights offering", def: "A company's distribution of subscription rights to current shareholders, letting them buy new shares at a set price." },
        { term: "Subscription price", def: "The fixed price a right lets you pay for new shares — set *below* the current market price." },
        { term: "Warrant", def: "A long-term contract to buy stock from the issuer at a set price, usually a *premium* (above market) at issuance." },
        { term: "Sweetener", def: "A warrant attached to a bond or preferred offering to make it more attractive to investors." },
        { term: "Dilution", def: "The shrinking of each existing shareholder's ownership percentage when a company issues new shares." },
        { term: "Intrinsic value", def: "How much exercising would save versus buying at market: `market price − exercise price`, never below `$0`." },
      ],
    },
    { type: "heading", text: "Intrinsic value: in or out of the money" },
    {
      type: "text",
      body:
        "Both rights and warrants let you *buy* stock, so their intrinsic value works like a call's: `intrinsic value = market price − exercise price`, and it can never drop below `$0`. The exercise (subscription) price is fixed, so the contract gains value as the stock rises.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**Right:** stock trades at `$50`, subscription price is `$45`. Intrinsic value = `$50 − $45 = $5`. It's *in the money* immediately — that built-in discount is the point of a preemptive right.",
        "**Warrant:** stock trades at `$50`, strike is `$60`. Intrinsic value = `max($50 − $60, $0) = $0`. It's *out of the money* at issuance — it only pays if the stock later climbs above `$60`.",
      ],
    },
    { type: "heading", text: "The key contrasts" },
    {
      type: "list",
      items: [
        "**Term:** rights are **short** (a one-to-three-month subscription window); warrants are **long** (often several years).",
        "**Pricing at issue:** a right's subscription price is **below** market (in the money now); a warrant's strike is **above** market (out of the money now).",
        "**Purpose:** rights let current owners **avoid dilution** when new shares are sold; warrants act as a **sweetener** to help sell bonds or preferred stock.",
        "**Who gets them:** rights go to **existing shareholders** (one per share); warrants are usually **attached to another security** at issue.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Easy memory hook: **R**ights are **R**eal-soon and **R**ight-now valuable (short term, below market). Warrants **W**ait (long term, strike above market — they need the stock to grow into them).",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**Misconception: \"a right and a warrant are basically the same.\"** They're opposites on the two things that matter most. A right is short-term with a subscription price *below* market; a warrant is long-term with a strike *above* market. Mixing them up is a classic exam trap. Educational only, not financial advice.",
    },
  ],
};

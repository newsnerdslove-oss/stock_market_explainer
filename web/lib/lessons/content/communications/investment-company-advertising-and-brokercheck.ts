import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "investment-company-advertising-and-brokercheck",
  title: "Fund Advertising & BrokerCheck Disclosure",
  level: 4,
  moduleId: "markets-communications",
  moduleOrder: 9,
  summary:
    "Mutual fund performance ads must show standardized 1-, 5-, and 10-year average annual total returns net of the max sales charge, carry the past-performance legend, and offer month-end data — while retail communications must point to FINRA BrokerCheck.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "Investment-company (mutual fund) advertising has its own rulebook. When a fund ad quotes performance, **SEC `Rule 482`** dictates *exactly* how — so two funds can be compared on the same **standardized** basis. Layered on top, **FINRA `Rule 2210`** governs the broker-dealer communication itself, including a requirement to reference **BrokerCheck**.",
    },
    { type: "heading", text: "Standardized performance under Rule 482" },
    {
      type: "text",
      body:
        "A fund ad that includes performance must quote **average annual total return** for **three standardized periods: 1, 5, and 10 years** (or the life of the fund if its registration statement has been effective for less than the full period). The figures must **reflect the maximum sales charge** (the front-end load or applicable CDSC) — you cannot advertise a flattering number that ignores the load.",
    },
    {
      type: "list",
      items: [
        "**1-, 5-, and 10-year** average annual total returns (shorter substitute if the fund is younger).",
        "Returns must **reflect the maximum sales load/fee**; if a quoted figure does **not** deduct the load, the ad must say so.",
        "Standardization is what makes fund A and fund B **comparable** — same periods, same load treatment.",
      ],
    },
    { type: "heading", text: "The required legend" },
    {
      type: "text",
      body:
        "Every Rule 482 performance ad must carry the **legend** stating that the data represents **past performance**, that **past performance does not guarantee future results**, and that the **investment return and principal value will fluctuate** so shares may be worth more or less than their original cost.",
    },
    { type: "heading", text: "Month-end currency" },
    {
      type: "text",
      body:
        "Advertised numbers go stale, so Rule 482 requires the ad to **make month-end data available**. The ad must provide a **toll-free (or collect) phone number or a website** where an investor can obtain total return **current to the most recent month-end** — *unless* the ad already quotes returns current to the most recent month ended **at least seven business days** before the date of use.",
    },
    { type: "heading", text: "FINRA Rule 2210: the BrokerCheck reference" },
    {
      type: "text",
      body:
        "Separate from the fund's own performance rules, **FINRA `Rule 2210(d)(8)`** requires that each of a member's **websites** include a **readily apparent reference and hyperlink to BrokerCheck** on (i) the **initial webpage** the member intends retail investors to view, and (ii) **any webpage with a professional profile** of a registered person who does business with retail investors. **BrokerCheck** is FINRA's free public tool for researching firms and registered persons.",
    },
    {
      type: "list",
      items: [
        "**'Readily apparent'** means visible without significant scrolling — FINRA says burying the link in a **footer generally does not** satisfy the standard.",
        "**Narrow exceptions [`2210(d)(8)(B)`]**: a member that does **not** provide products/services to retail investors, and a **directory/list** of registered persons limited to names and contact info.",
        "BrokerCheck reports cover current FINRA members and persons registered within roughly the **past 10 years**.",
      ],
    },
    { type: "heading", text: "Worked scenario — a non-compliant fund ad" },
    {
      type: "text",
      body:
        "An ad blares: *'Our fund returned `22%` last year — best in class!'* and stops there. It fails Rule 482 on multiple counts: it shows only a **single year** (not the standardized **1/5/10-year** average annual total returns), it **omits the maximum sales charge**, it lacks the **past-performance legend**, and it gives **no month-end source**. A fix presents 1-, 5-, and 10-year average annual total returns net of the max load, the required legend, and a website/phone for current month-end data.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "SEC Rule 482", def: "Governs investment-company advertisements that include performance data — sets the standardized format." },
        { term: "Average annual total return", def: "The standardized performance measure quoted for 1-, 5-, and 10-year periods (or life of fund)." },
        { term: "Maximum sales charge", def: "Standardized returns must reflect the max load/CDSC; an ad must disclose if a figure omits it." },
        { term: "Past-performance legend", def: "Required statement: past performance does not guarantee future results; return/principal will fluctuate." },
        { term: "Month-end currency", def: "Ad must offer month-end data via phone/website unless it already quotes returns current to within 7 business days." },
        { term: "FINRA Rule 2210(d)(8)", def: "Requires a readily apparent BrokerCheck reference and hyperlink on retail-facing and profile webpages." },
        { term: "BrokerCheck", def: "FINRA's free public tool for researching firms and registered persons." },
        { term: "Readily apparent", def: "BrokerCheck link must be visible without significant scrolling; a footer placement generally fails." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'I can advertise my fund's best 1-year number alone.'* No — Rule 482 performance ads must show **standardized 1-, 5-, and 10-year average annual total returns** that **reflect the maximum sales charge**, with the **past-performance legend** and a **month-end** data source.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial or legal advice.",
    },
  ],
};

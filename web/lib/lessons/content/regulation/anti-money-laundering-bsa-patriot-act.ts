import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "anti-money-laundering-bsa-patriot-act",
  title: "Anti-Money Laundering: BSA, USA PATRIOT Act, CIP, SARs, CTRs & OFAC",
  level: 4,
  moduleId: "markets-regulation",
  moduleOrder: 8,
  summary:
    "Broker-dealers must run an AML program — identifying customers at onboarding, filing SARs at $5,000 and CTRs above $10,000, and screening every transaction against OFAC sanctions.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "Every broker-dealer must run an **anti-money-laundering (AML) program**. The foundational statute is the `Bank Secrecy Act` (**BSA**, `1970`). The `USA PATRIOT Act` (`2001`) added the **Customer Identification Program (CIP)** and expanded AML duties for broker-dealers; `FINRA Rule 3310` requires a **written AML program** with a **designated AML compliance officer** and **independent testing**.",
    },
    { type: "heading", text: "CIP — identifying the customer at onboarding" },
    {
      type: "list",
      items: [
        "Minimum data to open an account: **name**, **date of birth** (for individuals), **physical address**, and an **identification number** (SSN/TIN for U.S. persons; passport or other for non-U.S. persons).",
        "**Verify** identity **before or when** opening the account; check against **government / OFAC lists**.",
        "Retain **CIP records `5 years`** after the account closes.",
      ],
    },
    { type: "heading", text: "SAR vs. CTR — the two filings (both to FinCEN)" },
    {
      type: "list",
      items: [
        "**SAR — Suspicious Activity Report** (filed with **FinCEN**): required for **suspicious** transactions **aggregating `$5,000` or more**; filed **within `30 calendar days`** of detection (an extra `30`-to-`60` days if no suspect is identified). **Confidential** — **no tipping** the subject.",
        "**CTR — Currency Transaction Report** (filed with **FinCEN**): required for **currency** transactions of **MORE THAN `$10,000`** (cash in or out) in one **business day**, **aggregated** for the same person. **Exactly `$10,000` does NOT trigger** — it must be *more than* `$10,000`.",
      ],
    },
    { type: "heading", text: "OFAC — sanctions screening" },
    {
      type: "text",
      body:
        "**OFAC** (the Office of Foreign Assets Control, part of the **U.S. Treasury**) administers **sanctions**. Firms screen transactions and customers against the **SDN (Specially Designated Nationals) list** and must **block or reject** prohibited transactions.",
    },
    { type: "heading", text: "Worked scenario — CTR aggregation" },
    {
      type: "text",
      body:
        "A customer makes three cash deposits in one business day: `$4,000 + $4,000 + $3,500 = $11,500`. Because the aggregate **exceeds `$10,000`**, the firm must file a **CTR**. The pattern of sub-`$10,000` chunks ('**structuring**') is itself suspicious, so the firm should **also consider a SAR** (which aggregates suspicious activity over `$5,000`).",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Bank Secrecy Act (BSA, 1970)", def: "The foundational U.S. anti-money-laundering statute." },
        { term: "USA PATRIOT Act (2001)", def: "Added CIP and expanded AML for broker-dealers." },
        { term: "FINRA Rule 3310", def: "Requires a written AML program with a designated AML compliance officer and independent testing." },
        { term: "CIP", def: "Customer Identification Program: collect name, DOB, physical address, and ID number; verify and screen; keep records 5 years after closing." },
        { term: "SAR", def: "Suspicious Activity Report to FinCEN — suspicious activity aggregating $5,000+, filed within 30 days; confidential, no tipping." },
        { term: "CTR", def: "Currency Transaction Report to FinCEN — currency transactions of MORE THAN $10,000 in one business day, aggregated per person." },
        { term: "Structuring", def: "Breaking cash into sub-$10,000 chunks to evade CTR filing — itself suspicious and a SAR trigger." },
        { term: "OFAC / SDN list", def: "Treasury's Office of Foreign Assets Control administers sanctions; firms screen against the Specially Designated Nationals list and block/reject prohibited transactions." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'SARs and CTRs are the same `$10,000` report.'* No — a **CTR** is for **cash transactions over `$10,000`** (objective, no suspicion needed); a **SAR** is for **suspicious** activity aggregating **`$5,000`+** regardless of cash, and is **confidential** (no tipping).",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial or legal advice.",
    },
  ],
};

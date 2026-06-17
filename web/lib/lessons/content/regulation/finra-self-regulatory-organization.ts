import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "finra-self-regulatory-organization",
  title: "FINRA: The Self-Regulatory Organization (and How It Differs From the SEC)",
  level: 4,
  moduleId: "markets-regulation",
  moduleOrder: 2,
  summary:
    "FINRA is a non-governmental SRO that writes and enforces broker-dealer rules, licenses reps, and runs the industry's arbitration forum — under SEC oversight.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "**FINRA** — the Financial Industry Regulatory Authority — is a **self-regulatory organization (SRO)**, **not** a government agency. It is **private** and **not-for-profit**, funded by **member firm fees** rather than taxpayers, and it is **registered with and supervised by the SEC**. The exam loves the contrast: the **SEC is the government regulator** that **oversees FINRA**, while **FINRA is the SRO** operating under that oversight.",
    },
    {
      type: "text",
      body:
        "FINRA was **formed in 2007** from the merger of the **NASD** with the member-regulation function of the **NYSE**.",
    },
    { type: "heading", text: "What FINRA does" },
    {
      type: "list",
      items: [
        "Writes and **enforces** the **FINRA rulebook** (the Conduct Rules).",
        "Administers the industry **qualification exams** (SIE, Series 7, etc.).",
        "**Examines** member firms and conducts **market surveillance**.",
        "Operates **trade-reporting facilities**.",
        "Runs the industry's **dispute-resolution / arbitration** forum under the **Code of Arbitration**.",
      ],
    },
    { type: "heading", text: "FINRA vs. the SEC" },
    {
      type: "text",
      body:
        "The **SEC** is the **government agency** with **statutory authority** that **oversees FINRA**. **FINRA** is the **SRO** that writes and enforces broker-dealer rules under that SEC oversight. Unlike the **MSRB** (covered separately), FINRA both **writes and enforces** its rules.",
    },
    { type: "heading", text: "Worked scenario" },
    {
      type: "text",
      body:
        "A customer alleges **churning** in her account. Under the standard brokerage agreement she signed, the dispute is sent to **FINRA arbitration**. A panel hears it under the **Code of Arbitration**, and the award is generally **final and binding with limited appeal**. Separately, **FINRA Enforcement** can discipline the rep — a regulatory action distinct from the customer's monetary claim.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "FINRA", def: "The Financial Industry Regulatory Authority — a private, not-for-profit SRO funded by member fees, supervised by the SEC." },
        { term: "Self-regulatory organization (SRO)", def: "A non-governmental body that writes and enforces rules for its members under government oversight." },
        { term: "SEC oversight", def: "The SEC is the government regulator that registers and supervises FINRA; FINRA operates under that authority." },
        { term: "NASD / NYSE merger", def: "FINRA was formed in 2007 from the NASD and NYSE member-regulation functions." },
        { term: "Code of Arbitration", def: "The FINRA framework under which customer-vs-firm disputes are arbitrated; awards are generally final and binding with limited appeal." },
        { term: "FINRA Enforcement", def: "The disciplinary function that can sanction reps and firms, separate from a customer's arbitration claim." },
        { term: "Member firm fees", def: "FINRA's funding source — not taxpayer dollars, underscoring that it is not a government agency." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'FINRA is a government agency / part of the SEC.'* No — **FINRA is a private, member-funded SRO**. The **SEC** is the **government agency** that **oversees** it.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial or legal advice.",
    },
  ],
};

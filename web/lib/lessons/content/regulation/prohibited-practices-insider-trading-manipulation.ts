import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "prohibited-practices-insider-trading-manipulation",
  title: "Prohibited Practices: Insider Trading, Market Manipulation, Front-Running & Churning",
  level: 4,
  moduleId: "markets-regulation",
  moduleOrder: 6,
  summary:
    "The exam's 'what's illegal' core — insider trading (treble civil damages, $5M/20-year criminal penalties), manipulation, front-running, and churning.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "This lesson is the exam's **'what's illegal' core**. The anti-fraud foundation for **insider trading** is `Exchange Act Section 10(b)` and `Rule 10b-5`, extended by the **misappropriation theory** (`U.S. v. O'Hagan`, 1997).",
    },
    { type: "heading", text: "Insider trading — the statutes that built the penalties" },
    {
      type: "list",
      items: [
        "`Insider Trading Sanctions Act of 1984 (ITSA)` — first authorized **treble** civil penalties.",
        "`Insider Trading and Securities Fraud Enforcement Act of 1988 (ITSFEA)` — added **§21A**, **controlling-person liability**, and required firms to maintain supervisory policies.",
      ],
    },
    { type: "heading", text: "The penalties" },
    {
      type: "list",
      items: [
        "**CIVIL** (§21A): up to **treble damages** — `3×` the **profit gained or loss avoided**. For a **controlling person**: the **greater of `$1,000,000` or `3×`** the controlled person's gain/avoided loss.",
        "**CRIMINAL** (§32(a), as amended by **Sarbanes-Oxley 2002**): an **individual** faces up to a `$5,000,000` fine **and/or `20 years`**; an **entity** up to `$25,000,000`.",
        "**Whistleblower** (Dodd-Frank): the SEC program pays **`10%`–`30%`** of sanctions when sanctions **exceed `$1,000,000`**.",
      ],
    },
    { type: "heading", text: "Market manipulation and other prohibited acts" },
    {
      type: "list",
      items: [
        "**Market manipulation** (`§9(a)`): **wash trades**, **matched orders**, **painting the tape**, **pump-and-dump**, **marking the close**, **spoofing**, and **layering**.",
        "**Front-running** (`FINRA Rule 5270`): trading on **material non-public knowledge of an imminent block** (≈`10,000`+ shares) **ahead of it**.",
        "**Churning** (`FINRA Rule 2111` quantitative suitability / `Rule 2010`): **excessive trading** inconsistent with the customer's profile to **generate commissions**. (FINRA removed the 'control' element effective **June 30 2020**.)",
      ],
    },
    { type: "heading", text: "Worked scenario — the penalties stack" },
    {
      type: "text",
      body:
        "A trader earns `$200,000` on inside information. The **civil** penalty can be up to `3 × $200,000 = $600,000` — **on top of disgorgement** of the `$200,000`. The **criminal** exposure can reach a `$5,000,000` fine and `20 years`. These penalties **stack**: civil and criminal are separate.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Rule 10b-5 / Section 10(b)", def: "The Exchange Act anti-fraud basis for insider-trading enforcement." },
        { term: "Misappropriation theory", def: "U.S. v. O'Hagan (1997) — trading on info misappropriated in breach of a duty is illegal even without being a classic insider." },
        { term: "ITSA (1984)", def: "First authorized treble (3×) civil penalties for insider trading." },
        { term: "ITSFEA (1988)", def: "Added §21A, controlling-person liability, and required supervisory policies." },
        { term: "Civil penalty (§21A)", def: "Up to 3× the gain/avoided loss; for a controlling person, greater of $1,000,000 or 3× the controlled person's gain." },
        { term: "Criminal penalty (§32(a))", def: "Individual up to $5,000,000 fine and/or 20 years; entity up to $25,000,000 (per Sarbanes-Oxley 2002)." },
        { term: "Front-running (Rule 5270)", def: "Trading on knowledge of an imminent block (≈10,000+ shares) ahead of it." },
        { term: "Churning (Rule 2111 / 2010)", def: "Excessive trading inconsistent with the customer's profile to generate commissions; FINRA dropped the 'control' element in 2020." },
        { term: "Whistleblower award", def: "Dodd-Frank pays 10%–30% of sanctions when sanctions exceed $1,000,000." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'The insider-trading penalty is just paying back the profit.'* No — the **civil** penalty is up to **treble (`3×`)** the gain/avoided loss **ON TOP of disgorgement**, plus **criminal** exposure of `$5,000,000` and `20 years` for an individual.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial or legal advice.",
    },
  ],
};

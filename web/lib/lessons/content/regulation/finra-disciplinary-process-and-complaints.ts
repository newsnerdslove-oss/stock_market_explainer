import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "finra-disciplinary-process-and-complaints",
  title: "FINRA Disciplinary Process & Customer Complaints",
  level: 4,
  moduleId: "markets-regulation",
  moduleOrder: 10,
  summary:
    "FINRA disciplines firms and reps through the Code of Procedure (AWC settlements, MRVP fines, OHO hearings, sanctions) and resolves customer disputes through the Code of Arbitration — with mediation as a voluntary option and written complaints retained 4 years under Rule 4513.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "FINRA runs **two separate tracks** that the exam constantly contrasts. The **Code of Procedure** (the **`9000` rule series**) governs **disciplinary actions** — FINRA *vs.* a firm or rep for a **rule violation**. The **Code of Arbitration** (the **`12000`/`13000` series**) governs **disputes** — typically a **customer vs. a member firm** over money. Discipline is a **regulatory** matter; arbitration is a **dispute-resolution** matter. The same misconduct can trigger **both** independently.",
    },
    { type: "heading", text: "Code of Procedure — how discipline flows" },
    {
      type: "text",
      body:
        "FINRA can resolve an alleged violation by **settlement** or by a **litigated hearing**. Most matters **settle** through a **Letter of Acceptance, Waiver, and Consent (AWC)** under `Rule 9216`: the respondent **accepts** the findings, **waives** the right to a hearing and to appeal, and **consents** to the sanction. An accepted AWC is **final** and is **not subject to appeal**.",
    },
    {
      type: "list",
      items: [
        "**AWC** (`Rule 9216`) — a negotiated **settlement**; accepted AWCs are **final, no appeal**.",
        "**Litigated complaint** — if no settlement, FINRA issues a formal **complaint** heard by the **Office of Hearing Officers (OHO)**, which holds a contested **hearing** and issues a **decision**.",
        "**Appeal** — an OHO decision can be appealed to the **National Adjudicatory Council (NAC)**, then to the **SEC**, and finally to a **federal court of appeals**.",
      ],
    },
    { type: "heading", text: "Minor Rule Violation Plan (MRVP)" },
    {
      type: "text",
      body:
        "For **minor or technical** violations, FINRA can skip the full complaint process and impose a small fine under the **Minor Rule Violation Plan (MRVP)**. The MRVP allows a fine of **up to `$2,500`** (`Rule 9216(b)`), only for rules **specifically listed** in `Rule 9217`. Inclusion on the list does **not** mean the rule is unimportant — it means a minor violation is better handled with a quick fine than a costly proceeding. A respondent may **accept** the MRVP fine **or** contest it through the normal disciplinary process.",
    },
    { type: "heading", text: "The sanctions ladder" },
    {
      type: "list",
      items: [
        "**Censure** — a formal reprimand on the record.",
        "**Fine** — a monetary penalty.",
        "**Suspension** — a temporary bar from associating with a member (a set period).",
        "**Expulsion** (of a **firm**) / **Bar** (of an **individual**) — the most severe sanction: **permanent** removal from the industry.",
      ],
    },
    { type: "heading", text: "Code of Arbitration — customer disputes" },
    {
      type: "text",
      body:
        "Money disputes between a **customer** and a **member** go to **FINRA arbitration** under the **Code of Arbitration**. Under `Rule 12200`, arbitration is **required** when there is a **written (predispute) arbitration agreement** *or* **the customer requests it** — meaning a customer can **compel** the firm into FINRA arbitration even without a signed clause. Disputes **between members** (and associated persons) are subject to **mandatory** arbitration. An arbitration award is **final and binding** with only **very limited grounds for appeal**.",
    },
    {
      type: "text",
      body:
        "**Mediation** is the **voluntary**, **non-binding** alternative: a neutral **mediator** facilitates a settlement but has **no power to decide** the dispute. **Both parties must agree** to mediate, and nothing is binding **until they sign a settlement agreement**. Mediation can run **alongside** a pending arbitration; if it fails, the arbitration simply continues.",
    },
    { type: "heading", text: "The written customer complaint — Rule 4513" },
    {
      type: "text",
      body:
        "A **written customer complaint** is any **written grievance** by a customer (or someone authorized to act for them) about the firm's or a rep's handling of a securities transaction or the disposition of funds/securities. Under `FINRA Rule 4513`, firms must **keep records of written customer complaints for `4 years`** at the **Office of Supervisory Jurisdiction (OSJ)** or make them promptly available on request. Separately, firms report **statistical and certain complaint information** to FINRA **quarterly** under `Rule 4530`. The complaint must be **logged, supervised/reviewed, and resolved** — not ignored.",
    },
    { type: "heading", text: "Worked scenario" },
    {
      type: "text",
      body:
        "A customer **emails** the branch alleging a rep made **unauthorized trades**. That email is a **written customer complaint**: it must be **recorded and retained `4 years`** (`Rule 4513`) and reported in the firm's **quarterly `Rule 4530`** filing. The customer can **demand FINRA arbitration** for her money damages (`Rule 12200`). **Separately**, FINRA Enforcement can pursue the rep under the **Code of Procedure** — likely an **AWC** if he settles, or an **OHO hearing** if he doesn't — and sanctions could range from a **censure and fine** to a **bar**. The arbitration award and the disciplinary sanction are **independent outcomes**.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Code of Procedure (9000 series)", def: "FINRA's framework for disciplinary actions against firms and reps for rule violations." },
        { term: "Code of Arbitration (12000/13000)", def: "FINRA's framework for resolving disputes — typically customer-vs-firm money claims." },
        { term: "AWC (Rule 9216)", def: "Letter of Acceptance, Waiver, and Consent — a settlement where the respondent accepts findings and consents to sanctions; final and not appealable." },
        { term: "Office of Hearing Officers (OHO)", def: "Hears litigated disciplinary complaints that don't settle and issues decisions." },
        { term: "National Adjudicatory Council (NAC)", def: "Hears appeals of OHO decisions; further appeal runs to the SEC, then a federal court of appeals." },
        { term: "MRVP (Rule 9216(b) / 9217)", def: "Minor Rule Violation Plan — a fine of up to $2,500 for minor violations of rules specifically listed in Rule 9217." },
        { term: "Sanctions", def: "Censure, fine, suspension, and the most severe — expulsion (firm) or bar (individual), both permanent." },
        { term: "Rule 12200", def: "Requires FINRA arbitration when there's a written agreement or when the customer requests it — a customer can compel arbitration." },
        { term: "Mediation", def: "Voluntary, non-binding dispute resolution; both parties must agree, and the mediator cannot decide the outcome." },
        { term: "Written customer complaint", def: "A written grievance about the handling of a transaction or funds/securities; logged, reviewed, and resolved." },
        { term: "Rule 4513", def: "Requires records of written customer complaints to be retained 4 years at the OSJ." },
        { term: "Rule 4530", def: "Requires firms to report statistical and certain complaint information to FINRA quarterly." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'A customer complaint and FINRA discipline are the same case.'* No — the **Code of Arbitration** handles the **customer's money claim**, while the **Code of Procedure** handles **FINRA's disciplinary action**. They run on **separate tracks** with **independent outcomes**.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Don't confuse the retention periods: written **customer complaints** are kept **`4 years`** under `Rule 4513` — distinct from the `3`/`6`-year and life-of-firm tiers under `SEC Rule 17a-4`.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial or legal advice.",
    },
  ],
};

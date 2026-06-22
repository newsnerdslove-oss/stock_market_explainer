import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "options-communications-and-the-odd",
  title: "Options Communications & the ODD (Rule 2220)",
  level: 4,
  moduleId: "markets-communications",
  moduleOrder: 8,
  summary:
    "Options communications carry their own rulebook: the ODD must accompany or precede them, a Registered Options Principal approves them, and pre-ODD pieces get pre-filed with FINRA for approval.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "Options are higher-risk and standardized, so FINRA gives their communications a dedicated rule — **`Rule 2220` (Options Communications)** — that layers **on top of** the general `Rule 2210` standards. Two ideas drive everything: the customer must get the **Options Disclosure Document (ODD)**, and a piece that goes out **before** the ODD is sharply restricted.",
    },
    { type: "heading", text: "The Options Disclosure Document (ODD)" },
    {
      type: "text",
      body:
        "The **ODD** is the OCC-published booklet *Characteristics and Risks of Standardized Options*. Under `2220`, **any retail communication about standardized options must be accompanied or preceded by the current ODD** — the same delivery standard the firm already owes a customer before approving an options account.",
    },
    { type: "heading", text: "Before the ODD is delivered: a tight leash" },
    {
      type: "text",
      body:
        "A piece that goes out **prior to ODD delivery** is meant to spark interest, not to sell strategies. Such a communication **must NOT contain**:",
    },
    {
      type: "list",
      items: [
        "**Recommendations** of options or any specific strategy.",
        "**Past or projected performance figures**, including **annualized rates of return**.",
        "**Names of specific securities**.",
      ],
    },
    {
      type: "text",
      body:
        "Once the ODD has been delivered (or accompanies the piece), the communication may discuss **strategies, performance, and specific securities** — subject to the content rules below.",
    },
    { type: "heading", text: "Approval and pre-filing with FINRA" },
    {
      type: "list",
      items: [
        "**ROP approval**: every options **retail communication** (except completed worksheets) must be **approved in advance by a Registered Options Principal (ROP)** — a step beyond the ordinary registered-principal sign-off.",
        "**Pre-file for approval**: an options **retail communication used PRIOR to delivery of the ODD** must be **submitted to FINRA's Advertising Regulation Department at least `10 calendar days` before first use** (or a shorter period the Department allows) **for approval** — it is held back until approved.",
        "If the Department **changes or disapproves** a piece, it must be **withheld until corrected**, or **resubmitted and re-approved** after disapproval.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Note the wording: the `2220` pre-file is measured in **`10 calendar days`**, and it is a **filing for approval**, not the after-the-fact post-filing common under `2210(c)`. Don't confuse it with the `10 business day` windows in Lesson 2.",
    },
    { type: "heading", text: "Content standards once you can talk strategy" },
    {
      type: "list",
      items: [
        "**Balanced risk and reward**: any statement of opportunity must be matched by a **statement of the corresponding risks with the same degree of specificity** — broad generalities won't do.",
        "**Projected performance** is allowed only with the ODD, clearly stated assumptions, full cost disclosure, and risk disclosure; an **annualized rate of return** may **not be based on less than `60 days`** of experience.",
        "**Historical performance** must cover **at least the most recent `12-month` period** and be confined to a **specific, fully isolated 'universe'** — you may **not cherry-pick** favorable trades or windows.",
        "Performance must carry a statement that **results cannot be viewed as an indicator of future performance**, and **cautionary statements may not be omitted, made misleading, or contradicted** by the rest of the piece.",
      ],
    },
    { type: "heading", text: "Worked scenario — a covered-call mailer" },
    {
      type: "list",
      items: [
        "A teaser postcard goes out **before** the ODD → it may invite questions but **no strategy names, no performance figures, no specific securities**.",
        "The full brochure showing a **covered-call strategy with example returns** → it must be **accompanied or preceded by the ODD**, **approved by an ROP**, and (because it precedes ODD delivery in the prospect's hands) **pre-filed with FINRA at least `10 calendar days` before use for approval**.",
        "Its examples must show **both gains and losses with equal specificity**, draw from a **full `12-month` universe** (no cherry-picking), and state that **past results don't predict the future**.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Rule 2220", def: "FINRA's Options Communications rule, layered on top of Rule 2210's general standards." },
        { term: "Options Disclosure Document (ODD)", def: "The OCC booklet 'Characteristics and Risks of Standardized Options'; must accompany or precede any standardized-options communication." },
        { term: "Pre-ODD restriction", def: "Communications used before ODD delivery may not contain recommendations, past/projected performance, annualized returns, or specific security names." },
        { term: "Registered Options Principal (ROP)", def: "Must approve every options retail communication (except completed worksheets) in advance." },
        { term: "Pre-file for approval (10 calendar days)", def: "Pre-ODD options retail communications are filed with FINRA's Advertising Regulation Department at least 10 calendar days before use for approval." },
        { term: "Balanced treatment", def: "Risk statements must match opportunity statements in specificity; broad generalities are not allowed." },
        { term: "Projected performance / 60-day rule", def: "Allowed with the ODD and full disclosure; an annualized rate may not be based on less than 60 days of experience." },
        { term: "Historical performance / 12-month universe", def: "Must cover at least the most recent 12-month period in a fully isolated universe — no cherry-picking." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'I can mail an options strategy piece as long as I attach the ODD later.'* No — the ODD must **accompany or precede** the piece, an **ROP** must approve it, and a strategy/performance piece used **before** ODD delivery must be **pre-filed for FINRA approval `10 calendar days` ahead**. Cherry-picked examples and one-sided 'profit' claims are prohibited.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial or legal advice.",
    },
  ],
};

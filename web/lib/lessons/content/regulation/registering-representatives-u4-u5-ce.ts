import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "registering-representatives-u4-u5-ce",
  title: "Registering & Terminating Reps: Forms U4/U5, Fingerprinting, CE & Statutory Disqualification",
  level: 4,
  moduleId: "markets-regulation",
  moduleOrder: 5,
  summary:
    "A rep is registered by Form U4 and terminated by Form U5 — and tight amendment windows, annual continuing education, and statutory-disqualification rules govern the lifecycle.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "A representative is **registered** by **Form U4** (the Uniform Application for Securities Industry Registration) and **terminated** by **Form U5** (the Uniform Termination Notice). The exam tests the **filing windows** tightly, so memorize them precisely.",
    },
    { type: "heading", text: "Filing and amendment windows" },
    {
      type: "list",
      items: [
        "**Form U5 — termination:** the firm files the initial U5 within `30 days` of termination, and files an **amended U5** within `30 days` of learning facts requiring amendment.",
        "**Form U4 — amendment:** **not later than `30 days`** after learning of facts requiring amendment — **EXCEPT** statutory-disqualification events, which must be reported within `10 days`.",
      ],
    },
    { type: "heading", text: "Fingerprinting" },
    {
      type: "text",
      body:
        "Under `Exchange Act Rule 17f-2`, **fingerprinting** is required for **partners, officers, directors, and employees** who handle **securities or funds**. The fingerprint cards are submitted to the **FBI**.",
    },
    { type: "heading", text: "Statutory disqualification" },
    {
      type: "text",
      body:
        "Statutory disqualification is defined in `Exchange Act §3(a)(39)`. Common triggers:",
    },
    {
      type: "list",
      items: [
        "Conviction of **any felony**, or certain **misdemeanors**, within the **past `10 years`**.",
        "**Industry bars** or **suspensions**.",
        "Certain **injunctions**.",
        "**Willful false statements** on registration forms.",
        "Re-entry is sought through **`FINRA Rule 9520`** eligibility proceedings.",
      ],
    },
    { type: "heading", text: "Continuing Education (CE)" },
    {
      type: "text",
      body:
        "Under `FINRA Rule 1240`, the **Regulatory Element** is now **ANNUAL** — due by **December 31** each year for **each registration category** (effective **Jan 1 2023**; this replaced the old 'second anniversary, then every 3 years' schedule). Miss it and the registration goes **CE inactive**. The **Firm Element** is annual, firm-administered training. The **Maintaining Qualifications Program (MQP)** lets a terminated rep **preserve a qualification for up to ~`5 years`** via annual CE instead of re-testing.",
    },
    { type: "heading", text: "Worked scenario" },
    {
      type: "text",
      body:
        "A rep is **charged with a felony**. That is a **statutory-disqualification event**, so the firm must amend his **U4 within `10 days`** — not the usual `30`. If he later **resigns**, the firm files his **U5 within `30 days`**, and the U5's **reason-for-termination** follows him to any future employer.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Form U4", def: "Uniform Application for registration; amended within 30 days of triggering facts — except statutory-DQ events, within 10 days." },
        { term: "Form U5", def: "Uniform Termination Notice; filed within 30 days of termination; reason-for-termination follows the rep." },
        { term: "Statutory disqualification", def: "Exchange Act §3(a)(39): any felony or certain misdemeanors within 10 years, industry bars/suspensions, injunctions, or willful false filings." },
        { term: "FINRA Rule 9520", def: "Eligibility proceedings through which a statutorily disqualified person may seek re-entry." },
        { term: "Fingerprinting (Rule 17f-2)", def: "Required for partners/officers/directors/employees handling securities or funds; cards go to the FBI." },
        { term: "Regulatory Element (Rule 1240)", def: "Now ANNUAL, due by Dec 31 per registration category (since Jan 1 2023); miss it → CE inactive." },
        { term: "Firm Element", def: "Annual, firm-administered continuing-education training for covered persons." },
        { term: "Maintaining Qualifications Program (MQP)", def: "Lets a terminated rep preserve a qualification up to ~5 years via annual CE instead of re-testing." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'The CE Regulatory Element is taken every three years.'* Outdated — since **Jan 1 2023** it is **ANNUAL**, due by **December 31**, for **each registration category**.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial or legal advice.",
    },
  ],
};

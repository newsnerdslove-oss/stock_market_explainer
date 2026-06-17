import type { Question } from "@/lib/quiz/types";

// Quiz for "The MSRB: Who Writes Municipal Rules (and Who Enforces Them)".
export const questions: Question[] = [
  {
    id: "msrb-municipal-securities-rulemaking.q1",
    lessonSlug: "msrb-municipal-securities-rulemaking",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "regulation", "msrb"],
    prompt: "Who enforces MSRB rules against a broker-dealer?",
    choices: [
      { id: "a", text: "The MSRB itself" },
      { id: "b", text: "FINRA (with the SEC and bank regulators); the MSRB has no enforcement power" },
      { id: "c", text: "The municipal issuer" },
      { id: "d", text: "EMMA" },
    ],
    correctId: "b",
    explanation:
      "The **MSRB has no enforcement power**. For a broker-dealer, **FINRA** enforces (the **SEC** and **bank regulators** also enforce, depending on the firm).",
  },
  {
    id: "msrb-municipal-securities-rulemaking.q2",
    lessonSlug: "msrb-municipal-securities-rulemaking",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "regulation", "msrb"],
    prompt: "Which entity created the MSRB?",
    choices: [
      { id: "a", text: "Congress, via the `Securities Acts Amendments of 1975`" },
      { id: "b", text: "The SEC, by internal rule in 1934" },
      { id: "c", text: "FINRA, in its 2007 merger" },
      { id: "d", text: "The Federal Reserve" },
    ],
    correctId: "a",
    explanation:
      "Congress created the **MSRB** through the `Securities Acts Amendments of 1975`.",
  },
  {
    id: "msrb-municipal-securities-rulemaking.q3",
    lessonSlug: "msrb-municipal-securities-rulemaking",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "regulation", "msrb", "emma"],
    prompt: "Where are municipal disclosures officially available to the public?",
    choices: [
      { id: "a", text: "On EDGAR" },
      { id: "b", text: "On EMMA" },
      { id: "c", text: "On TRACE" },
      { id: "d", text: "On the SEC's enforcement docket" },
    ],
    correctId: "b",
    explanation:
      "**EMMA** (Electronic Municipal Market Access) is the MSRB-operated, SEC-designated **official repository** for municipal disclosures, with free public access.",
  },
  {
    id: "msrb-municipal-securities-rulemaking.q4",
    lessonSlug: "msrb-municipal-securities-rulemaking",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "regulation", "msrb", "scope"],
    prompt: "Over which of the following does the MSRB have NO authority?",
    choices: [
      { id: "a", text: "Municipal securities dealers" },
      { id: "b", text: "Municipal advisors" },
      { id: "c", text: "Municipal issuers and investors" },
      { id: "d", text: "Bank dealers in municipal securities", feedback: "The MSRB writes rules for dealers (including bank dealers) and muni advisors; it has no authority over issuers or investors." },
    ],
    correctId: "c",
    explanation:
      "The MSRB writes rules for **dealers** and **municipal advisors** — but has **no authority over issuers or investors**.",
  },
  {
    id: "msrb-municipal-securities-rulemaking.q5",
    lessonSlug: "msrb-municipal-securities-rulemaking",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "regulation", "msrb", "enforcement"],
    prompt: "Which set of regulators enforces MSRB rules against bank dealers?",
    choices: [
      { id: "a", text: "The FDIC, the Fed, and the OCC" },
      { id: "b", text: "The CFTC and the NFA" },
      { id: "c", text: "The MSRB's own enforcement staff" },
      { id: "d", text: "State insurance commissioners" },
    ],
    correctId: "a",
    explanation:
      "For **bank dealers**, the **bank regulators** — the **FDIC**, **Fed**, and **OCC** — enforce MSRB rules. The MSRB never enforces its own rules.",
  },
  {
    id: "msrb-municipal-securities-rulemaking.q6",
    lessonSlug: "msrb-municipal-securities-rulemaking",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "regulation", "msrb", "gifts"],
    prompt: "What is the MSRB gift limit under `Rule G-20` for gifts related to municipal business?",
    choices: [
      { id: "a", text: "`$100` per person per year" },
      { id: "b", text: "`$250` per person per year" },
      { id: "c", text: "`$300` per person per year" },
      { id: "d", text: "No limit applies to muni gifts", feedback: "The MSRB muni gift cap under G-20 is $100/person/year — distinct from FINRA's $300 limit under Rule 3220." },
    ],
    correctId: "a",
    explanation:
      "`MSRB Rule G-20` caps muni-business gifts at `$100` per person per year. (Note this differs from FINRA's `$300` limit under `Rule 3220`.)",
  },
  {
    id: "msrb-municipal-securities-rulemaking.q7",
    lessonSlug: "msrb-municipal-securities-rulemaking",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "regulation", "msrb", "scenario"],
    prompt:
      "A muni dealer overcharges markups, violating an MSRB fair-pricing rule. What happens next?",
    choices: [
      { id: "a", text: "The MSRB suspends the dealer's license" },
      { id: "b", text: "FINRA (or the SEC / a bank regulator) examines and enforces; the MSRB cannot discipline" },
      { id: "c", text: "EMMA delists the dealer's trades" },
      { id: "d", text: "Nothing — fair pricing is only a guideline", feedback: "Fair pricing is an enforceable MSRB rule; the MSRB just can't enforce it itself — FINRA or the SEC does." },
    ],
    correctId: "b",
    explanation:
      "The **MSRB wrote** the fair-pricing rule but **cannot enforce** it. **FINRA** (or the **SEC** / a **bank regulator**) examines and disciplines the dealer.",
  },
  {
    id: "msrb-municipal-securities-rulemaking.q8",
    lessonSlug: "msrb-municipal-securities-rulemaking",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "regulation", "msrb"],
    prompt: "Which statement best captures the MSRB's unique feature among SROs?",
    choices: [
      { id: "a", text: "It writes rules but does not enforce them" },
      { id: "b", text: "It enforces rules but does not write them" },
      { id: "c", text: "It both writes and enforces, like FINRA" },
      { id: "d", text: "It is a government agency, like the SEC" },
    ],
    correctId: "a",
    explanation:
      "The MSRB is a **rulemaking-only SRO** — it **writes** rules but does **not enforce** them, leaving enforcement to FINRA, the SEC, and bank regulators.",
  },
];

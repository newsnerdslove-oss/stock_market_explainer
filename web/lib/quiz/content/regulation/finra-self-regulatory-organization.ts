import type { Question } from "@/lib/quiz/types";

// Quiz for "FINRA: The Self-Regulatory Organization".
export const questions: Question[] = [
  {
    id: "finra-self-regulatory-organization.q1",
    lessonSlug: "finra-self-regulatory-organization",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "finra", "regulation"],
    prompt: "FINRA is best described as which of the following?",
    choices: [
      { id: "a", text: "A government agency that oversees the SEC" },
      { id: "b", text: "A self-regulatory organization (SRO) under SEC oversight" },
      { id: "c", text: "A division within the SEC" },
      { id: "d", text: "A federal court for securities disputes" },
    ],
    correctId: "b",
    explanation:
      "**FINRA** is a private, not-for-profit **SRO** that operates **under SEC oversight** — it is not a government agency and not part of the SEC.",
  },
  {
    id: "finra-self-regulatory-organization.q2",
    lessonSlug: "finra-self-regulatory-organization",
    type: "single",
    difficulty: "easy",
    tags: ["finra", "regulation", "fn:3"],
    prompt: "How is FINRA funded?",
    choices: [
      { id: "a", text: "By taxpayer appropriations from Congress" },
      { id: "b", text: "By member firm fees" },
      { id: "c", text: "By SEC filing fees alone" },
      { id: "d", text: "By the Federal Reserve" },
    ],
    correctId: "b",
    explanation:
      "FINRA is funded by **member firm fees**, not taxpayers — one signal that it is a **private SRO**, not a government agency.",
  },
  {
    id: "finra-self-regulatory-organization.q3",
    lessonSlug: "finra-self-regulatory-organization",
    type: "single",
    difficulty: "medium",
    tags: ["finra", "regulation", "history", "fn:3"],
    prompt: "FINRA was created in 2007 from the merger of which two bodies?",
    choices: [
      { id: "a", text: "The SEC and the MSRB" },
      { id: "b", text: "The NASD and the NYSE member-regulation function" },
      { id: "c", text: "The CFTC and the NASD" },
      { id: "d", text: "SIPC and the NYSE", feedback: "SIPC handles failed-firm customer protection; FINRA came from the NASD plus NYSE member regulation." },
    ],
    correctId: "b",
    explanation:
      "FINRA was **formed in 2007** by merging the **NASD** with the **NYSE** member-regulation function.",
  },
  {
    id: "finra-self-regulatory-organization.q4",
    lessonSlug: "finra-self-regulatory-organization",
    type: "single",
    difficulty: "medium",
    tags: ["finra", "arbitration", "fn:3"],
    prompt: "Under a standard brokerage agreement, how is a customer-vs-firm dispute typically resolved?",
    choices: [
      { id: "a", text: "In federal district court by jury trial" },
      { id: "b", text: "By FINRA arbitration, generally binding with limited appeal" },
      { id: "c", text: "By the SEC's enforcement division" },
      { id: "d", text: "By the state securities administrator" },
    ],
    correctId: "b",
    explanation:
      "Standard agreements send disputes to **FINRA arbitration** under the **Code of Arbitration**; the award is generally **final and binding with limited appeal**.",
  },
  {
    id: "finra-self-regulatory-organization.q5",
    lessonSlug: "finra-self-regulatory-organization",
    type: "single",
    difficulty: "medium",
    tags: ["finra", "sec", "regulation", "fn:3"],
    prompt: "What is the relationship between the SEC and FINRA?",
    choices: [
      { id: "a", text: "FINRA oversees the SEC" },
      { id: "b", text: "The SEC is the government regulator that oversees FINRA" },
      { id: "c", text: "They are coequal government agencies" },
      { id: "d", text: "FINRA is an SEC subsidiary funded by taxpayers", feedback: "FINRA is a separate private SRO funded by member fees — the SEC oversees it but doesn't make it part of the government." },
    ],
    correctId: "b",
    explanation:
      "The **SEC** is the **government agency** with statutory authority that **oversees FINRA**; FINRA is the private **SRO** operating under that oversight.",
  },
  {
    id: "finra-self-regulatory-organization.q6",
    lessonSlug: "finra-self-regulatory-organization",
    type: "single",
    difficulty: "medium",
    tags: ["finra", "functions", "fn:3"],
    prompt: "Which of the following is NOT a FINRA function?",
    choices: [
      { id: "a", text: "Administering qualification exams like the Series 7" },
      { id: "b", text: "Examining member firms and conducting market surveillance" },
      { id: "c", text: "Running the industry arbitration forum" },
      { id: "d", text: "Setting margin requirements under Reg T", feedback: "Reg T margin is set by the Federal Reserve under the 1934 Act framework — not by FINRA." },
    ],
    correctId: "d",
    explanation:
      "FINRA writes/enforces rules, runs exams, examines firms, and operates arbitration. **`Reg T` margin** is set by the **Federal Reserve**, not FINRA.",
  },
  {
    id: "finra-self-regulatory-organization.q7",
    lessonSlug: "finra-self-regulatory-organization",
    type: "single",
    difficulty: "easy",
    tags: ["finra", "enforcement", "fn:3"],
    prompt: "Does FINRA both write and enforce its rules?",
    choices: [
      { id: "a", text: "Yes — FINRA writes and enforces its rulebook" },
      { id: "b", text: "No — FINRA only writes rules; the SEC enforces them all" },
      { id: "c", text: "No — FINRA only enforces; Congress writes its rules" },
      { id: "d", text: "No — FINRA neither writes nor enforces rules" },
    ],
    correctId: "a",
    explanation:
      "Unlike the **MSRB** (rulemaking only), **FINRA both writes and enforces** its rulebook — and has an Enforcement arm that disciplines members.",
  },
  {
    id: "finra-self-regulatory-organization.q8",
    lessonSlug: "finra-self-regulatory-organization",
    type: "single",
    difficulty: "hard",
    tags: ["finra", "scenario", "arbitration", "fn:3"],
    prompt:
      "A customer alleges churning. Under her signed agreement, a FINRA panel hears the claim and issues an award. Separately, what can FINRA do to the rep?",
    choices: [
      { id: "a", text: "Nothing — the arbitration award is FINRA's only remedy" },
      { id: "b", text: "FINRA Enforcement can discipline the rep, distinct from the customer's claim" },
      { id: "c", text: "Only the SEC may discipline the rep" },
      { id: "d", text: "FINRA must refer the rep to criminal prosecution", feedback: "Arbitration resolves the customer's monetary claim; a separate FINRA Enforcement action can sanction the rep regardless of the award." },
    ],
    correctId: "b",
    explanation:
      "Arbitration resolves the **customer's monetary claim**. Separately, **FINRA Enforcement** can **discipline the rep** — two independent tracks.",
  },
];

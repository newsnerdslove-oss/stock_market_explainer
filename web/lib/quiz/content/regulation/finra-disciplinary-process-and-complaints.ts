import type { Question } from "@/lib/quiz/types";

// Quiz for "FINRA Disciplinary Process & Customer Complaints".
export const questions: Question[] = [
  {
    id: "finra-disciplinary-process-and-complaints.q1",
    lessonSlug: "finra-disciplinary-process-and-complaints",
    type: "single",
    difficulty: "medium",
    tags: ["finra", "regulation", "discipline", "fn:3"],
    prompt: "Which FINRA framework governs disciplinary actions against a firm or rep for a rule violation?",
    choices: [
      { id: "a", text: "The Code of Arbitration" },
      { id: "b", text: "The Code of Procedure (the 9000 rule series)" },
      { id: "c", text: "The Uniform Securities Act" },
      { id: "d", text: "SEC Rule 17a-4" },
    ],
    correctId: "b",
    explanation:
      "The **Code of Procedure** (`9000` series) governs **disciplinary** actions. The **Code of Arbitration** handles **customer disputes** — a separate track.",
  },
  {
    id: "finra-disciplinary-process-and-complaints.q2",
    lessonSlug: "finra-disciplinary-process-and-complaints",
    type: "single",
    difficulty: "medium",
    tags: ["finra", "awc", "settlement", "fn:3"],
    prompt: "What is a Letter of Acceptance, Waiver, and Consent (AWC)?",
    choices: [
      { id: "a", text: "A negotiated settlement where the respondent accepts findings and consents to sanctions; once accepted it is final and not appealable" },
      { id: "b", text: "A customer's written complaint about unauthorized trading" },
      { id: "c", text: "The arbitration award issued by a FINRA panel" },
      { id: "d", text: "A subpoena issued by the SEC to a member firm", feedback: "An AWC is a FINRA disciplinary settlement, not an SEC subpoena — the respondent waives a hearing and the right to appeal." },
    ],
    correctId: "a",
    explanation:
      "An **AWC** (`Rule 9216`) is a **settlement**: the respondent **accepts** findings, **waives** a hearing and appeal, and **consents** to the sanction. Accepted AWCs are **final**.",
  },
  {
    id: "finra-disciplinary-process-and-complaints.q3",
    lessonSlug: "finra-disciplinary-process-and-complaints",
    type: "single",
    difficulty: "hard",
    tags: ["finra", "mrvp", "sanctions", "fn:3"],
    prompt: "Under the Minor Rule Violation Plan (MRVP), what is the maximum fine FINRA may impose?",
    choices: [
      { id: "a", text: "$1,000" },
      { id: "b", text: "$5,000" },
      { id: "c", text: "$2,500" },
      { id: "d", text: "There is no cap — fines are unlimited under the MRVP", feedback: "The MRVP is specifically a low-cost path for minor violations, capped at $2,500 under Rule 9216(b)." },
    ],
    correctId: "c",
    explanation:
      "The **MRVP** (`Rule 9216(b)`) allows a fine of **up to `$2,500`** for **minor** violations of rules listed in `Rule 9217` — a faster alternative to a full disciplinary proceeding.",
  },
  {
    id: "finra-disciplinary-process-and-complaints.q4",
    lessonSlug: "finra-disciplinary-process-and-complaints",
    type: "single",
    difficulty: "medium",
    tags: ["finra", "sanctions", "fn:3"],
    prompt: "Which sanction is the most severe and permanently removes an individual from the industry?",
    choices: [
      { id: "a", text: "Censure" },
      { id: "b", text: "Suspension" },
      { id: "c", text: "Fine" },
      { id: "d", text: "Bar" },
    ],
    correctId: "d",
    explanation:
      "A **bar** permanently removes an **individual** from the industry (the firm-level equivalent is **expulsion**). A **suspension** is only temporary; a **censure** is a reprimand.",
  },
  {
    id: "finra-disciplinary-process-and-complaints.q5",
    lessonSlug: "finra-disciplinary-process-and-complaints",
    type: "single",
    difficulty: "medium",
    tags: ["finra", "recordkeeping", "complaints", "fn:3"],
    prompt: "How long must a firm retain records of written customer complaints under FINRA Rule 4513?",
    choices: [
      { id: "a", text: "4 years" },
      { id: "b", text: "3 years" },
      { id: "c", text: "6 years" },
      { id: "d", text: "The life of the firm" },
    ],
    correctId: "a",
    explanation:
      "`FINRA Rule 4513` requires records of **written customer complaints** to be kept **`4 years`** at the OSJ — distinct from the `3`/`6`-year tiers under `SEC Rule 17a-4`.",
  },
  {
    id: "finra-disciplinary-process-and-complaints.q6",
    lessonSlug: "finra-disciplinary-process-and-complaints",
    type: "single",
    difficulty: "hard",
    tags: ["finra", "arbitration", "mediation", "fn:3"],
    prompt: "Which statement correctly distinguishes FINRA arbitration from mediation?",
    choices: [
      { id: "a", text: "Mediation produces a final, binding award; arbitration is voluntary" },
      { id: "b", text: "Arbitration yields a final and binding award, while mediation is voluntary and non-binding until the parties sign a settlement" },
      { id: "c", text: "Both arbitration and mediation are voluntary and non-binding" },
      { id: "d", text: "Both arbitration and mediation produce binding awards a neutral imposes on the parties", feedback: "A mediator has no power to decide the dispute — mediation only binds when the parties themselves sign a settlement." },
    ],
    correctId: "b",
    explanation:
      "**Arbitration** ends in a **final and binding award** (limited appeal). **Mediation** is **voluntary** and **non-binding** until the parties **sign** a settlement; the mediator can't impose a result.",
  },
  {
    id: "finra-disciplinary-process-and-complaints.q7",
    lessonSlug: "finra-disciplinary-process-and-complaints",
    type: "single",
    difficulty: "hard",
    tags: ["finra", "arbitration", "rule-12200", "scenario", "fn:3"],
    prompt: "A customer with no signed predispute arbitration clause wants her money dispute heard in FINRA arbitration. Can she compel the firm to arbitrate?",
    choices: [
      { id: "a", text: "No — without a written arbitration agreement she must sue in court" },
      { id: "b", text: "No — only the firm can elect FINRA arbitration" },
      { id: "c", text: "Yes — under Rule 12200 arbitration is required when the customer requests it, even absent a written agreement" },
      { id: "d", text: "Only if the SEC approves the request first" },
    ],
    correctId: "c",
    explanation:
      "Under `Rule 12200`, FINRA arbitration is required when there's a **written agreement** *or* **the customer requests it** — so a customer can **compel** the firm to arbitrate even without a signed clause.",
  },
];

import type { Question } from "@/lib/quiz/types";

// Quiz for "Reporting & Recordkeeping: Retention Periods, TRACE, Gifts & Reportable Ownership".
// NOTE: This lesson maps to Function 4 (fn:4), not fn:3.
export const questions: Question[] = [
  {
    id: "reporting-and-recordkeeping.q1",
    lessonSlug: "reporting-and-recordkeeping",
    type: "single",
    difficulty: "medium",
    tags: ["fn:4", "regulation", "recordkeeping"],
    prompt: "How long must the general ledger and blotters be retained, vs. partnership/incorporation articles?",
    choices: [
      { id: "a", text: "`6 years` for the ledger/blotters; life of the firm for organizational documents" },
      { id: "b", text: "`3 years` for both" },
      { id: "c", text: "Life of the firm for both" },
      { id: "d", text: "`3 years` for the ledger; `6 years` for organizational documents", feedback: "Ledgers and blotters are 6-year records; organizational documents are kept for the life of the firm." },
    ],
    correctId: "a",
    explanation:
      "Blotters and the **general ledger** are **`6-year`** records; **organizational documents** (partnership/incorporation articles) are kept for the **life of the firm** under `Rule 17a-4(d)`.",
  },
  {
    id: "reporting-and-recordkeeping.q2",
    lessonSlug: "reporting-and-recordkeeping",
    type: "single",
    difficulty: "easy",
    tags: ["fn:4", "regulation", "gifts"],
    prompt: "What is the current annual FINRA gift limit, and which rule sets it?",
    choices: [
      { id: "a", text: "`$100`, `Rule 3220`" },
      { id: "b", text: "`$300`, `Rule 3220`" },
      { id: "c", text: "`$300`, `MSRB Rule G-20`" },
      { id: "d", text: "`$250`, `Rule 3270`" },
    ],
    correctId: "b",
    explanation:
      "FINRA's gift limit is now **`$300` per person per year** under `Rule 3220` (effective **March 30 2026**, raised from `$100`).",
  },
  {
    id: "reporting-and-recordkeeping.q3",
    lessonSlug: "reporting-and-recordkeeping",
    type: "single",
    difficulty: "medium",
    tags: ["fn:4", "regulation", "ownership", "13d"],
    prompt: "At what ownership level is a Schedule 13D/13G triggered, and what is the new 13D deadline?",
    choices: [
      { id: "a", text: ">`5%`; 13D within `5 business days`" },
      { id: "b", text: ">`10%`; 13D within `10 days`" },
      { id: "c", text: ">`5%`; 13D within `10 business days`" },
      { id: "d", text: ">`25%`; 13D within `30 days`" },
    ],
    correctId: "a",
    explanation:
      "Beneficial ownership **>`5%`** of a voting equity class triggers Schedule 13D/13G; the **13D deadline** was shortened to **`5 business days`** (effective **Feb 5 2024**).",
  },
  {
    id: "reporting-and-recordkeeping.q4",
    lessonSlug: "reporting-and-recordkeeping",
    type: "numericChoice",
    difficulty: "medium",
    unit: "$",
    tags: ["fn:4", "regulation", "gifts", "calc"],
    prompt:
      "A rep gives one client a $120 gift in Q1 and a $200 gift in Q3. By how much do the gifts exceed the annual FINRA limit?",
    choices: [
      { id: "a", text: "They do not exceed it" },
      { id: "b", text: "`$20`" },
      { id: "c", text: "`$120`" },
      { id: "d", text: "`$220`", feedback: "Gifts aggregate to $320; the excess over the $300 limit is $20, not $220." },
    ],
    correctId: "b",
    explanation:
      "Gifts **aggregate** per person per year: `$120 + $200 = $320`, which exceeds the `$300` limit (`Rule 3220`) by **`$20`** → violation.",
  },
  {
    id: "reporting-and-recordkeeping.q5",
    lessonSlug: "reporting-and-recordkeeping",
    type: "single",
    difficulty: "easy",
    tags: ["fn:4", "regulation", "trace"],
    prompt: "Within what time must an eligible fixed-income trade be reported to TRACE under `Rule 6730`?",
    choices: [
      { id: "a", text: "`15 minutes` of execution" },
      { id: "b", text: "`1 hour` of execution" },
      { id: "c", text: "End of the trading day" },
      { id: "d", text: "`T+2`", feedback: "T+2 is settlement; TRACE trade reporting is within 15 minutes of execution." },
    ],
    correctId: "a",
    explanation:
      "TRACE requires reporting within **`15 minutes`** of execution. (A `1-minute` rule was approved but has **no effective date** — teach `15 minutes`.)",
  },
  {
    id: "reporting-and-recordkeeping.q6",
    lessonSlug: "reporting-and-recordkeeping",
    type: "single",
    difficulty: "medium",
    tags: ["fn:4", "regulation", "outside-activity"],
    prompt: "Under `Rule 3280`, what is required for a compensated private securities transaction ('selling away')?",
    choices: [
      { id: "a", text: "Prior written notice only" },
      { id: "b", text: "Prior written notice, plus written firm approval and recording on the firm's books" },
      { id: "c", text: "No notice — it is outside the firm's concern" },
      { id: "d", text: "Only an oral heads-up to a supervisor", feedback: "If the rep is compensated, the firm must give written approval and record the transaction on its books — more than mere notice." },
    ],
    correctId: "b",
    explanation:
      "`Rule 3280` requires **prior written notice**; if the rep is **compensated**, the firm must give **written approval** and **record** the transaction on its books.",
  },
  {
    id: "reporting-and-recordkeeping.q7",
    lessonSlug: "reporting-and-recordkeeping",
    type: "single",
    difficulty: "medium",
    tags: ["fn:4", "regulation", "section-16"],
    prompt: "Section 16 insiders (directors, officers, >10% holders) file which forms?",
    choices: [
      { id: "a", text: "Forms 3 (initial), 4 (changes), and 5 (annual)" },
      { id: "b", text: "Forms U4 and U5" },
      { id: "c", text: "Schedule 13D and Form 13H" },
      { id: "d", text: "Form CRS and Form BD", feedback: "Forms 3/4/5 are the Section 16 insider ownership filings; U4/U5 are rep registration and CRS/BD relate to the firm." },
    ],
    correctId: "a",
    explanation:
      "**Section 16 insiders** file **Form 3** (initial), **Form 4** (changes), and **Form 5** (annual).",
  },
  {
    id: "reporting-and-recordkeeping.q8",
    lessonSlug: "reporting-and-recordkeeping",
    type: "single",
    difficulty: "medium",
    tags: ["fn:4", "regulation", "recordkeeping"],
    prompt: "Most records (confirmations, order tickets, communications) must be kept how long, and with what accessibility?",
    choices: [
      { id: "a", text: "`3 years`, with the first `2 years` easily accessible" },
      { id: "b", text: "`6 years`, all easily accessible" },
      { id: "c", text: "Life of the firm" },
      { id: "d", text: "`1 year`, with no accessibility requirement", feedback: "The default for most records is 3 years, with the first 2 years readily accessible." },
    ],
    correctId: "a",
    explanation:
      "Most records are kept **`3 years`**, with the **first `2 years` easily accessible**. Blotters/ledgers/account records are `6 years`; organizational documents are life-of-firm.",
  },
];

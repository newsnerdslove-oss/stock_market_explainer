import type { Question } from "@/lib/quiz/types";

// Quiz for the "Retirement & Education Accounts" lesson.
export const questions: Question[] = [
  {
    id: "retirement-and-education-accounts.q1",
    lessonSlug: "retirement-and-education-accounts",
    type: "single",
    difficulty: "easy",
    tags: ["fn:2", "retirement", "ira"],
    prompt:
      "For 2026, what is the standard IRA contribution limit (before any catch-up)?",
    choices: [
      { id: "a", text: "$6,500" },
      { id: "b", text: "$7,000", feedback: "That was the 2024–2025 limit. The IRS increased the IRA limit to $7,500 for 2026." },
      { id: "c", text: "$7,500" },
      { id: "d", text: "$24,500", feedback: "That's the 2026 401(k)/403(b) elective-deferral limit, not the IRA limit." },
    ],
    correctId: "c",
    explanation:
      "The 2026 IRA contribution limit is **$7,500** per person across all IRAs combined, with an additional **$1,100 catch-up** for those age 50+.",
  },
  {
    id: "retirement-and-education-accounts.q2",
    lessonSlug: "retirement-and-education-accounts",
    type: "single",
    difficulty: "medium",
    tags: ["fn:2", "retirement", "roth"],
    prompt:
      "Which statement about required minimum distributions (RMDs) is correct?",
    choices: [
      { id: "a", text: "Both Traditional and Roth IRAs require RMDs starting at age 73" },
      { id: "b", text: "A Roth IRA has no RMDs during the original owner's lifetime; a Traditional IRA requires them starting at age 73" },
      { id: "c", text: "Neither Traditional nor Roth IRAs ever require distributions" },
      { id: "d", text: "RMDs begin at age 59½ for all IRAs", feedback: "59½ is the early-withdrawal penalty threshold, not the RMD age. The SECURE 2.0 RMD age is 73, and Roths have no lifetime RMDs." },
    ],
    correctId: "b",
    explanation:
      "A **Roth IRA has no lifetime RMDs** for the original owner — a key advantage. A **Traditional IRA** owner must begin RMDs by April 1 of the year after turning **73**.",
  },
  {
    id: "retirement-and-education-accounts.q3",
    lessonSlug: "retirement-and-education-accounts",
    type: "single",
    difficulty: "medium",
    tags: ["fn:2", "retirement", "prohibited"],
    prompt:
      "Which of the following may NOT be held inside an IRA?",
    choices: [
      { id: "a", text: "A whole life insurance policy" },
      { id: "b", text: "A broad-market index ETF" },
      { id: "c", text: "A corporate bond" },
      { id: "d", text: "A bank certificate of deposit (CD)" },
    ],
    correctId: "a",
    explanation:
      "IRA funds **cannot buy life insurance** (or collectibles such as art and most coins). Stocks, bonds, funds, ETFs, and CDs are all permitted.",
  },
  {
    id: "retirement-and-education-accounts.q4",
    lessonSlug: "retirement-and-education-accounts",
    type: "single",
    difficulty: "hard",
    tags: ["fn:2", "retirement", "rollover"],
    prompt:
      "A client wants to move her Traditional IRA to a new custodian without triggering the 60-day clock or the one-rollover-per-year limit. What should she use?",
    choices: [
      { id: "a", text: "An indirect 60-day rollover, taking a check first", feedback: "That's exactly what triggers the 60-day clock AND uses up her one indirect rollover for the year — the opposite of what she wants." },
      { id: "b", text: "A direct trustee-to-trustee transfer" },
      { id: "c", text: "A hardship withdrawal" },
      { id: "d", text: "A Roth conversion" },
    ],
    correctId: "b",
    explanation:
      "A **direct trustee-to-trustee transfer** moves funds institution-to-institution — no withholding, no 60-day clock, and **not** subject to the one-per-year rule. Transfers are unlimited.",
  },
  {
    id: "retirement-and-education-accounts.q5",
    lessonSlug: "retirement-and-education-accounts",
    type: "single",
    difficulty: "medium",
    tags: ["fn:2", "retirement", "penalty"],
    prompt:
      "A 50-year-old takes a $20,000 distribution from his Traditional IRA for a non-qualified reason. What is the federal tax consequence?",
    choices: [
      { id: "a", text: "Tax-free, because he is over age 50" },
      { id: "b", text: "Ordinary income tax only, with no penalty" },
      { id: "c", text: "Ordinary income tax plus a 10% early-withdrawal penalty" },
      { id: "d", text: "A flat 20% penalty with no income tax", feedback: "20% is the mandatory withholding on indirect rollovers from employer plans, not the early-withdrawal penalty. The penalty is 10%, on top of ordinary income tax." },
    ],
    correctId: "c",
    explanation:
      "He is under **59½**, so a non-qualified withdrawal is taxed as **ordinary income** *plus* a **10% early-withdrawal penalty**. Being over 50 only matters for catch-up contributions, not the penalty.",
  },
  {
    id: "retirement-and-education-accounts.q6",
    lessonSlug: "retirement-and-education-accounts",
    type: "single",
    difficulty: "medium",
    tags: ["fn:2", "education", "coverdell"],
    prompt:
      "What is the annual contribution limit per beneficiary for a Coverdell ESA?",
    choices: [
      { id: "a", text: "$2,000" },
      { id: "b", text: "$7,500", feedback: "That's the 2026 IRA limit. The Coverdell ESA is capped much lower, at $2,000 per beneficiary per year." },
      { id: "c", text: "There is no annual limit", feedback: "That describes a 529 plan, which has no annual federal limit. The Coverdell is capped at $2,000 per beneficiary per year." },
      { id: "d", text: "$16,000" },
    ],
    correctId: "a",
    explanation:
      "A **Coverdell ESA** is limited to **$2,000 per beneficiary per year** (across all Coverdell accounts for that child). Contributions stop at age 18 and funds generally distribute by age 30.",
  },
  {
    id: "retirement-and-education-accounts.q7",
    lessonSlug: "retirement-and-education-accounts",
    type: "single",
    difficulty: "hard",
    tags: ["fn:2", "retirement", "employer-plans"],
    prompt:
      "A 61-year-old teacher participates in her school's 403(b). Under SECURE 2.0, which 2026 catch-up amount applies to her on top of the $24,500 base deferral?",
    choices: [
      { id: "a", text: "$1,100", feedback: "That's the IRA catch-up, not the 403(b) catch-up. Workplace-plan catch-ups are larger." },
      { id: "b", text: "$8,000", feedback: "$8,000 is the standard age-50+ catch-up. SECURE 2.0 grants a higher 'super catch-up' at ages 60–63." },
      { id: "c", text: "$11,250" },
      { id: "d", text: "$24,500", feedback: "That's the base elective-deferral limit, not the catch-up." },
    ],
    correctId: "c",
    explanation:
      "At ages **60–63**, SECURE 2.0 provides a higher \"super catch-up\" of **$11,250** for 2026 (vs. the standard $8,000 age-50+ catch-up) in 401(k)/403(b) plans. A 403(b) shares the same limits as a 401(k).",
  },
];

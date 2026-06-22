import type { Question } from "@/lib/quiz/types";

// Quiz for the "Municipal Fund Securities (529, ABLE, LGIP)" lesson.
export const questions: Question[] = [
  {
    id: "municipal-fund-securities.q1",
    lessonSlug: "municipal-fund-securities",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "municipal-fund-securities", "regulation"],
    prompt:
      "529 plans, ABLE accounts, and LGIPs are best classified as…",
    choices: [
      { id: "a", text: "Registered open-end mutual funds under the Investment Company Act" },
      { id: "b", text: "FDIC-insured bank deposit products" },
      { id: "c", text: "Municipal fund securities regulated by the MSRB" },
      { id: "d", text: "U.S. Treasury obligations", feedback: "These are state/local government products, not Treasury debt." },
    ],
    correctId: "c",
    explanation:
      "All three are **municipal fund securities** — interests in state/local trust pools — sold by **MSRB-regulated** dealers, not registered mutual funds or FDIC-insured deposits.",
  },
  {
    id: "municipal-fund-securities.q2",
    lessonSlug: "municipal-fund-securities",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "official-statement", "disclosure"],
    prompt:
      "What disclosure document is delivered to a buyer of a municipal fund security?",
    choices: [
      { id: "a", text: "A statutory prospectus under the Investment Company Act", feedback: "Municipal fund securities are exempt from the Investment Company Act; they use an official statement." },
      { id: "b", text: "An official statement (program disclosure document)" },
      { id: "c", text: "A Form 10-K annual report" },
      { id: "d", text: "Nothing — these sales are exempt from any disclosure" },
    ],
    correctId: "b",
    explanation:
      "Because they're municipal securities, 529/ABLE/LGIP interests are sold by an **official statement** (often called a program disclosure document), not a registered fund prospectus.",
  },
  {
    id: "municipal-fund-securities.q3",
    lessonSlug: "municipal-fund-securities",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "529", "account-control"],
    prompt:
      "In a 529 college-savings plan, who controls the account and can change the beneficiary?",
    choices: [
      { id: "a", text: "The beneficiary, once they reach the age of majority" },
      { id: "b", text: "The MSRB" },
      { id: "c", text: "The state treasurer" },
      { id: "d", text: "The account owner" },
    ],
    correctId: "d",
    explanation:
      "Unlike an UGMA/UTMA, the **account owner** keeps control — directing withdrawals and changing the beneficiary to another family member with no tax hit.",
  },
  {
    id: "municipal-fund-securities.q4",
    lessonSlug: "municipal-fund-securities",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "529", "gift-tax"],
    unit: "$",
    prompt:
      "Using the `2026` `$19,000` annual exclusion, what is the most a single donor can front-load into one beneficiary's 529 with no gift tax?",
    choices: [
      { id: "a", text: "$95,000" },
      { id: "b", text: "$19,000", feedback: "That's one year's exclusion; the 5-year election multiplies it by five." },
      { id: "c", text: "$38,000" },
      { id: "d", text: "$190,000", feedback: "$190,000 is the figure for a married couple (each spouse front-loads $95,000)." },
    ],
    correctId: "a",
    explanation:
      "The 5-year front-load lets a single donor give `5 × $19,000 = $95,000` at once (a couple, `$190,000`), provided no other gifts go to that beneficiary during the five years.",
  },
  {
    id: "municipal-fund-securities.q5",
    lessonSlug: "municipal-fund-securities",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "529", "taxation"],
    prompt:
      "How is the earnings portion of a NON-qualified 529 withdrawal taxed?",
    choices: [
      { id: "a", text: "It is always tax-free, like qualified withdrawals" },
      { id: "b", text: "It is taxed at a flat 28% rate with no penalty" },
      { id: "c", text: "As ordinary income, plus a 10% federal penalty" },
      { id: "d", text: "Only the contributions are taxed, not the earnings", feedback: "It's the reverse — contributions come out free; the earnings are taxed and penalized." },
    ],
    correctId: "c",
    explanation:
      "The **earnings** in a non-qualified distribution are taxed as ordinary income **plus a 10% federal penalty**. Previously taxed contributions come out free.",
  },
  {
    id: "municipal-fund-securities.q6",
    lessonSlug: "municipal-fund-securities",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "able", "eligibility"],
    prompt:
      "Effective January 1, 2026, an ABLE account requires the beneficiary's disability to have begun before what age?",
    choices: [
      { id: "a", text: "Before age 26" },
      { id: "b", text: "Before age 46" },
      { id: "c", text: "Before age 18", feedback: "ABLE was never tied to age 18; the threshold moved from 26 to 46." },
      { id: "d", text: "Before age 65" },
    ],
    correctId: "b",
    explanation:
      "The **ABLE Age Adjustment Act** raised the disability-onset threshold from before age `26` to before age `46`, effective **January 1, 2026**, expanding eligibility to millions more people.",
  },
  {
    id: "municipal-fund-securities.q7",
    lessonSlug: "municipal-fund-securities",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "lgip", "misconception"],
    prompt:
      "Which statement about a Local Government Investment Pool (LGIP) is correct?",
    choices: [
      { id: "a", text: "It is an FDIC-insured deposit account" },
      { id: "b", text: "It is a registered money-market mutual fund" },
      { id: "c", text: "It is designed primarily for retail individual investors" },
      { id: "d", text: "It is a municipal fund security used by governmental entities to invest short-term cash" },
    ],
    correctId: "d",
    explanation:
      "An **LGIP** is a **municipal fund security** where **governmental entities** invest short-term cash. Many hold a stable `$1.00` NAV like a money-market fund, but they are **not** money-market mutual funds and **not** FDIC-insured.",
  },
];

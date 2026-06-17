import type { Question } from "@/lib/quiz/types";

// Quiz for the "Regulation Best Interest: The Four Obligations" lesson.
export const questions: Question[] = [
  {
    id: "regulation-best-interest-four-obligations.q1",
    lessonSlug: "regulation-best-interest-four-obligations",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "reg-bi", "obligations"],
    prompt: "What are the four obligations of `Reg BI`?",
    choices: [
      { id: "a", text: "Disclosure, Care, Conflict of Interest, and Compliance" },
      { id: "b", text: "Reasonable-basis, customer-specific, quantitative, and disclosure" },
      { id: "c", text: "Identity, authority, objectives, and suitability" },
      { id: "d", text: "Loyalty, care, prudence, and impartiality" },
    ],
    correctId: "a",
    explanation:
      "`Reg BI`'s four obligations are **Disclosure**, **Care**, **Conflict of Interest**, and **Compliance** — and all four must be met.",
  },
  {
    id: "regulation-best-interest-four-obligations.q2",
    lessonSlug: "regulation-best-interest-four-obligations",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "reg-bi", "scenario", "care"],
    prompt:
      "For a retail customer, a broker recommends a higher-commission fund over a nearly identical cheaper one. Which obligation(s) does this most clearly implicate?",
    choices: [
      { id: "a", text: "Only the Disclosure Obligation" },
      { id: "b", text: "The Care and Conflict of Interest Obligations" },
      { id: "c", text: "Only the Compliance Obligation" },
      { id: "d", text: "None — this is permitted if the fund is merely suitable", feedback: "Mere suitability is the old, lower bar. Reg BI requires best interest with cost weighed, and the commission-driven choice implicates Care and Conflict." },
    ],
    correctId: "b",
    explanation:
      "**Care** is implicated because cost is an explicit best-interest factor; **Conflict of Interest** is implicated because the choice is driven by the broker's higher commission — his interest ahead of the customer's.",
  },
  {
    id: "regulation-best-interest-four-obligations.q3",
    lessonSlug: "regulation-best-interest-four-obligations",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "reg-bi", "care", "cost"],
    prompt: "Under the Care Obligation, does `Reg BI` require recommending the lowest-cost product?",
    choices: [
      { id: "a", text: "Yes — the cheapest product must always be recommended" },
      { id: "b", text: "No — cost must be considered, but the lowest-cost option is not automatically required" },
      { id: "c", text: "No — cost is never a factor under Reg BI" },
      { id: "d", text: "Yes — but only for retirement accounts", feedback: "There's no account-type carve-out. Cost is always a factor under Care, yet a lowest-cost mandate is never imposed." },
    ],
    correctId: "b",
    explanation:
      "Cost is an **explicit factor** the Care Obligation requires weighing, but `Reg BI` does **not** mandate the lowest-cost product. A slightly costlier product can still be in the customer's best interest.",
  },
  {
    id: "regulation-best-interest-four-obligations.q4",
    lessonSlug: "regulation-best-interest-four-obligations",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "reg-bi", "scope"],
    prompt: "`Reg BI` applies when a broker-dealer makes a covered recommendation to which type of customer?",
    choices: [
      { id: "a", text: "Institutional customers only" },
      { id: "b", text: "A retail customer — a natural person using it primarily for personal, family, or household purposes" },
      { id: "c", text: "Pension funds and entities" },
      { id: "d", text: "Other broker-dealers" },
    ],
    correctId: "b",
    explanation:
      "`Reg BI` governs recommendations to **retail customers**: natural persons using the recommendation primarily for personal, family, or household purposes. Non-retail falls under `Rule 2111`.",
  },
  {
    id: "regulation-best-interest-four-obligations.q5",
    lessonSlug: "regulation-best-interest-four-obligations",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "reg-bi", "conflict"],
    prompt: "Under the Conflict of Interest Obligation, which practice must a firm eliminate (not merely disclose)?",
    choices: [
      { id: "a", text: "All compensation paid to registered reps" },
      { id: "b", text: "Sales contests, quotas, and bonuses tied to specific securities within limited time periods" },
      { id: "c", text: "Any recommendation involving a mutual fund" },
      { id: "d", text: "Disclosure of the firm's capacity", feedback: "Disclosing capacity is required, not eliminated. What must be eliminated are sales contests/quotas/bonuses tied to specific securities in limited periods." },
    ],
    correctId: "b",
    explanation:
      "The Conflict obligation requires firms to **eliminate** certain sales contests, quotas, and bonuses tied to specific securities within limited time periods, while other conflicts may be disclosed or mitigated.",
  },
  {
    id: "regulation-best-interest-four-obligations.q6",
    lessonSlug: "regulation-best-interest-four-obligations",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "reg-bi", "rule-15l-1"],
    prompt: "What is `Reg BI`'s formal citation and compliance date?",
    choices: [
      { id: "a", text: "Exchange Act Rule 15l-1, compliance June 30, 2020" },
      { id: "b", text: "Investment Advisers Act of 1940, compliance 1940" },
      { id: "c", text: "FINRA Rule 2090, compliance 2011" },
      { id: "d", text: "Securities Act Rule 144, compliance 2008" },
    ],
    correctId: "a",
    explanation:
      "`Reg BI` is SEC Exchange Act `Rule 15l-1`, with a compliance date of `June 30, 2020`.",
  },
  {
    id: "regulation-best-interest-four-obligations.q7",
    lessonSlug: "regulation-best-interest-four-obligations",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "reg-bi", "scenario", "account-type"],
    prompt:
      "A broker recommends that a retail customer move from a commission brokerage account into a fee-based advisory account. Is this within `Reg BI`'s scope?",
    choices: [
      { id: "a", text: "No — Reg BI only covers individual security trades" },
      { id: "b", text: "Yes — a recommended account type is a covered recommendation under Reg BI" },
      { id: "c", text: "No — account recommendations are exempt" },
      { id: "d", text: "Only if a mutual fund is involved", feedback: "The product isn't the trigger. Reg BI expressly covers recommendations of account type, so the account-switch recommendation is in scope." },
    ],
    correctId: "b",
    explanation:
      "`Reg BI` covers recommendations of a securities transaction **or strategy, including account type**. Recommending a move between account types to a retail customer is within scope.",
  },
  {
    id: "regulation-best-interest-four-obligations.q8",
    lessonSlug: "regulation-best-interest-four-obligations",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "reg-bi", "obligations", "compliance"],
    prompt:
      "A firm makes a strong best-interest recommendation but has no written policies designed to achieve `Reg BI` compliance overall. Which obligation is unmet?",
    choices: [
      { id: "a", text: "The Care Obligation" },
      { id: "b", text: "The Disclosure Obligation" },
      { id: "c", text: "The Compliance Obligation" },
      { id: "d", text: "None — a good recommendation satisfies Reg BI by itself", feedback: "A single good recommendation isn't enough. Reg BI separately requires firm-level written policies, which is the Compliance Obligation." },
    ],
    correctId: "c",
    explanation:
      "The **Compliance Obligation** requires written policies and procedures reasonably designed to achieve compliance with `Reg BI` as a whole — a firm-level duty distinct from the merits of any single recommendation.",
  },
];

import type { Question } from "@/lib/quiz/types";

// Quiz for the "Three Pillars of Suitability: Rule 2111" lesson.
export const questions: Question[] = [
  {
    id: "three-components-suitability-rule-2111.q1",
    lessonSlug: "three-components-suitability-rule-2111",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "suitability", "rule-2111"],
    prompt: "What are the three components of `Rule 2111` suitability?",
    choices: [
      { id: "a", text: "Reasonable-basis, customer-specific, and quantitative" },
      { id: "b", text: "Disclosure, care, and compliance" },
      { id: "c", text: "Identity, authority, and objectives" },
      { id: "d", text: "Market, credit, and liquidity" },
    ],
    correctId: "a",
    explanation:
      "The three components are **reasonable-basis** (suitable for some investors), **customer-specific** (suitable for this customer), and **quantitative** (a series of trades isn't excessive).",
  },
  {
    id: "three-components-suitability-rule-2111.q2",
    lessonSlug: "three-components-suitability-rule-2111",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "suitability", "quantitative", "scenario"],
    prompt:
      "Each individual trade fits the customer, but the account turns over six times a year and generates heavy commissions. Which component is violated?",
    choices: [
      { id: "a", text: "Reasonable-basis suitability" },
      { id: "b", text: "Customer-specific suitability", feedback: "Customer-specific is satisfied here — each trade fits the profile. The problem is the cumulative pattern, which is the quantitative component." },
      { id: "c", text: "Quantitative suitability" },
      { id: "d", text: "Disclosure suitability" },
    ],
    correctId: "c",
    explanation:
      "**Quantitative suitability** asks whether a series of recommendations is excessive even if each is suitable alone. High turnover generating heavy commissions implicates this component.",
  },
  {
    id: "three-components-suitability-rule-2111.q3",
    lessonSlug: "three-components-suitability-rule-2111",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "suitability", "reg-bi", "current-state"],
    prompt: "After `June 30, 2020`, when does `Rule 2111` still apply rather than `Reg BI`?",
    choices: [
      { id: "a", text: "For recommendations to retail customers" },
      { id: "b", text: "For recommendations to non-retail customers, such as institutions and entities" },
      { id: "c", text: "For all recommendations regardless of customer type" },
      { id: "d", text: "Only for recommendations made before 2020", feedback: "Rule 2111 wasn't repealed — it still governs going forward, just for non-retail customers. Retail recommendations fall under Reg BI." },
    ],
    correctId: "b",
    explanation:
      "Reg. Notice 20-18 made `Rule 2111` inapplicable where `Reg BI` applies (retail). `Rule 2111` now primarily governs **non-retail** recommendations — institutions, pension funds, and entities.",
  },
  {
    id: "three-components-suitability-rule-2111.q4",
    lessonSlug: "three-components-suitability-rule-2111",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "suitability", "quantitative", "current-state"],
    prompt:
      "Under the current `Rule 2111`, must a broker control or have discretion over an account to be liable for excessive trading?",
    choices: [
      { id: "a", text: "Yes — control remains a required element" },
      { id: "b", text: "No — the 2020 amendment removed the control element; a pattern of followed recommendations suffices" },
      { id: "c", text: "Only if the account is a margin account" },
      { id: "d", text: "Only if the customer is an institution", feedback: "Institutional status isn't the issue. The 2020 amendment removed the control element entirely, so no discretion is needed to establish excessive trading." },
    ],
    correctId: "b",
    explanation:
      "The 2020 amendment **removed the control element** from quantitative suitability. A broker can be liable for excessive trading when a customer routinely follows a pattern of recommendations, even with no discretion.",
  },
  {
    id: "three-components-suitability-rule-2111.q5",
    lessonSlug: "three-components-suitability-rule-2111",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "suitability", "reasonable-basis", "scenario"],
    prompt:
      "A broker recommends a complex non-traded REIT he never analyzed. Which suitability component does this most directly fail?",
    choices: [
      { id: "a", text: "Reasonable-basis suitability" },
      { id: "b", text: "Quantitative suitability" },
      { id: "c", text: "Customer-specific suitability only" },
      { id: "d", text: "None — recommending unfamiliar products is permitted", feedback: "It is not permitted. Without understanding the product's risks and rewards, the rep has no reasonable basis to believe it suitable for anyone." },
    ],
    correctId: "a",
    explanation:
      "**Reasonable-basis** suitability requires the rep to understand the product's risks and rewards. Recommending a product he never analyzed means he has no basis to believe it suitable for any investor.",
  },
  {
    id: "three-components-suitability-rule-2111.q6",
    lessonSlug: "three-components-suitability-rule-2111",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "suitability", "rule-2111"],
    prompt: "How many of the three suitability components must a recommendation satisfy?",
    choices: [
      { id: "a", text: "Any one is enough" },
      { id: "b", text: "At least two of the three" },
      { id: "c", text: "All three" },
      { id: "d", text: "Only the customer-specific component" },
    ],
    correctId: "c",
    explanation:
      "A recommendation must clear **all three** components. Passing one or two while failing another still makes the recommendation unsuitable.",
  },
  {
    id: "three-components-suitability-rule-2111.q7",
    lessonSlug: "three-components-suitability-rule-2111",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "suitability", "scenario", "concentration"],
    prompt:
      "A broker recommends placing 80% of a conservative retiree's portfolio into one product he understands well. Which component is most clearly threatened?",
    choices: [
      { id: "a", text: "Reasonable-basis, because he understands the product" },
      { id: "b", text: "Customer-specific, because the concentration is wrong for this conservative profile" },
      { id: "c", text: "Quantitative, because only one trade was made" },
      { id: "d", text: "None of the three", feedback: "An 80% concentration in one product for a conservative retiree is a textbook customer-specific failure, even when the rep understands the product." },
    ],
    correctId: "b",
    explanation:
      "Because the rep understands the product, reasonable-basis can be met. The problem is the heavy concentration mismatched to a conservative retiree's profile — a **customer-specific** failure.",
  },
  {
    id: "three-components-suitability-rule-2111.q8",
    lessonSlug: "three-components-suitability-rule-2111",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "suitability", "reg-bi", "current-state"],
    prompt:
      "Which FINRA notice amended `Rule 2111` so it no longer applies where `Reg BI` governs, and removed the control element?",
    choices: [
      { id: "a", text: "Regulatory Notice 20-18, effective June 30, 2020" },
      { id: "b", text: "Regulatory Notice 11-25, effective 2012" },
      { id: "c", text: "The Investment Advisers Act of 1940" },
      { id: "d", text: "Exchange Act Rule 10b-5" },
    ],
    correctId: "a",
    explanation:
      "Reg. Notice 20-18 (effective `June 30, 2020`) made `Rule 2111` inapplicable where `Reg BI` applies and removed the control element from quantitative suitability.",
  },
];

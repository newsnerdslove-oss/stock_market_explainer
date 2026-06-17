import type { Question } from "@/lib/quiz/types";

// Quiz for "Content Standards: Fair & Balanced, No Guarantees, No Promissory Claims".
// Series 7 Function 1 — every question carries the fn:1 tag.
export const questions: Question[] = [
  {
    id: "content-standards-prohibited-practices.q1",
    lessonSlug: "content-standards-prohibited-practices",
    type: "single",
    difficulty: "easy",
    tags: ["fn:1", "communications", "content-standards"],
    prompt: "What is the overarching requirement for ALL communications, regardless of category?",
    choices: [
      { id: "a", text: "They must be fair and balanced, based on good faith and fair dealing" },
      { id: "b", text: "They must be filed with FINRA before use", feedback: "Filing depends on category; the universal content standard is fair, balanced, and based on good faith and fair dealing." },
      { id: "c", text: "They must be approved by FINRA's Advertising Regulation Department" },
      { id: "d", text: "They must guarantee no losses" },
    ],
    correctId: "a",
    explanation:
      "`Rule 2210(d)(1)` requires every communication to be **fair and balanced**, based on **good faith and fair dealing**, giving a **sound basis** to evaluate the facts.",
  },
  {
    id: "content-standards-prohibited-practices.q2",
    lessonSlug: "content-standards-prohibited-practices",
    type: "single",
    difficulty: "medium",
    tags: ["fn:1", "communications", "projections"],
    prompt: "An ad claims 'This stock will double by year-end.' This primarily violates the rule against:",
    choices: [
      { id: "a", text: "Disclosing the firm's market-making interest", feedback: "Market-making disclosure is a recommendation rule; the violation here is projecting future performance with a promissory claim." },
      { id: "b", text: "Predicting/projecting performance and making promissory claims" },
      { id: "c", text: "Filing the communication late" },
      { id: "d", text: "Using an institutional communication for retail investors" },
    ],
    correctId: "b",
    explanation:
      "Forecasting that the stock 'will double' **predicts/projects performance** and is **promissory** — both prohibited under `2210(d)(1)` and `(d)(1)(F)`.",
  },
  {
    id: "content-standards-prohibited-practices.q3",
    lessonSlug: "content-standards-prohibited-practices",
    type: "single",
    difficulty: "medium",
    tags: ["fn:1", "communications", "guarantees"],
    prompt: "Implying that a non-guaranteed product is guaranteed is:",
    choices: [
      { id: "a", text: "Permitted if the figures are accurate", feedback: "Accuracy doesn't save it — implying a guarantee on a non-guaranteed product is prohibited regardless of true numbers." },
      { id: "b", text: "Permitted for institutional communications only" },
      { id: "c", text: "Prohibited; comparisons must disclose guarantee/insurance differences" },
      { id: "d", text: "Allowed once filed with FINRA" },
    ],
    correctId: "c",
    explanation:
      "Communications **may not imply guaranteed gains**, and comparisons must disclose **all material differences**, including the **presence or absence of guarantees or insurance**.",
  },
  {
    id: "content-standards-prohibited-practices.q4",
    lessonSlug: "content-standards-prohibited-practices",
    type: "single",
    difficulty: "hard",
    tags: ["fn:1", "communications", "content-standards"],
    prompt: "An ad states: 'Our fund returned 18% last year — expect the same next year, guaranteed.' How many content standards does it break?",
    choices: [
      { id: "a", text: "None, because the 18% figure is true", feedback: "True figures still violate the rules when presented in a projecting, recurring, or guaranteeing way." },
      { id: "b", text: "One: only the missing FINRA filing" },
      { id: "c", text: "Two: only late filing and a missing risk disclosure" },
      { id: "d", text: "Three: projecting performance, implying past performance recurs, and an implied guarantee" },
    ],
    correctId: "d",
    explanation:
      "It breaks **three** standards: **projecting performance**, **implying past performance will recur**, and an **implied guarantee** — even though the `18%` is true.",
  },
  {
    id: "content-standards-prohibited-practices.q5",
    lessonSlug: "content-standards-prohibited-practices",
    type: "single",
    difficulty: "medium",
    tags: ["fn:1", "communications", "omissions"],
    prompt: "Leaving out a material fact or qualification so the communication misleads is:",
    choices: [
      { id: "a", text: "A prohibited material omission" },
      { id: "b", text: "Permitted, since only affirmative false statements are barred", feedback: "Misleading omissions are prohibited too — you cannot omit a material fact that makes the piece misleading." },
      { id: "c", text: "Allowed in correspondence only" },
      { id: "d", text: "Allowed if the omitted fact is in the prospectus" },
    ],
    correctId: "a",
    explanation:
      "A **material omission** that makes the communication misleading is **prohibited** under `2210(d)(1)`.",
  },
  {
    id: "content-standards-prohibited-practices.q6",
    lessonSlug: "content-standards-prohibited-practices",
    type: "single",
    difficulty: "hard",
    tags: ["fn:1", "communications", "projections"],
    prompt: "Which is a permitted exception to the no-projecting-performance rule?",
    choices: [
      { id: "a", text: "Stating 'this stock should rise 20% this quarter'", feedback: "That is a prohibited projection of a security's return — not one of the narrow math/tool/research exceptions." },
      { id: "b", text: "A hypothetical illustration of a mathematical principle, such as compounding" },
      { id: "c", text: "Guaranteeing a fund will beat its index" },
      { id: "d", text: "Promising next year will match last year" },
    ],
    correctId: "b",
    explanation:
      "Limited exceptions include **hypothetical illustrations of mathematical principles**, certain **investment-analysis tools**, and **reasonable-basis price targets in research reports**.",
  },
  {
    id: "content-standards-prohibited-practices.q7",
    lessonSlug: "content-standards-prohibited-practices",
    type: "single",
    difficulty: "easy",
    tags: ["fn:1", "communications", "content-standards"],
    prompt: "True performance figures presented in an exaggerated, one-sided way are:",
    choices: [
      { id: "a", text: "Always acceptable because they are accurate", feedback: "Truth alone is not enough; presentation must remain fair, balanced, and non-promissory." },
      { id: "b", text: "Acceptable for institutional communications" },
      { id: "c", text: "Still a violation — even true figures must be fair and balanced" },
      { id: "d", text: "Acceptable if the firm later files them" },
    ],
    correctId: "c",
    explanation:
      "Even **true** figures violate the rule if presented in an **exaggerated, promissory, or non-balanced** way, or if material risks/qualifications are omitted.",
  },
  {
    id: "content-standards-prohibited-practices.q8",
    lessonSlug: "content-standards-prohibited-practices",
    type: "single",
    difficulty: "medium",
    tags: ["fn:1", "communications", "disclosures"],
    prompt: "Required regulatory disclosures in a communication must be:",
    choices: [
      { id: "a", text: "Placed only in a linked footnote", feedback: "Disclosures must be clear and prominent, not buried in fine print or a hidden link." },
      { id: "b", text: "Omitted for retail investors" },
      { id: "c", text: "Reserved for institutional communications" },
      { id: "d", text: "Clear and prominent" },
    ],
    correctId: "d",
    explanation:
      "Required regulatory disclosures must be **clear and prominent**, and communications must reflect the relevant **risks**.",
  },
];

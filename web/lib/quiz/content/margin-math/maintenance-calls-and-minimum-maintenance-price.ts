import type { Question } from "@/lib/quiz/types";

// Quiz for the "Maintenance Calls & the Minimum Maintenance Price" lesson.
export const questions: Question[] = [
  {
    id: "maintenance-calls-and-minimum-maintenance-price.q1",
    lessonSlug: "maintenance-calls-and-minimum-maintenance-price",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "maintenance", "minimum-maintenance-price"],
    unit: "$",
    prompt: "A long account has `DR = $24,000`. At what LMV does it hit the `25%` maintenance floor?",
    choices: [
      { id: "a", text: "$18,000", feedback: "That multiplies the debit by 0.75. The trigger DIVIDES by 0.75." },
      { id: "b", text: "$30,000", feedback: "That divides by 0.80 (a 20% floor). The long floor is 25%, so divide by 0.75." },
      { id: "c", text: "$32,000" },
      { id: "d", text: "$36,000", feedback: "That divides by 0.667. The long trigger is `DR ÷ 0.75`." },
    ],
    correctId: "c",
    explanation:
      "Long minimum maintenance LMV `= DR ÷ 0.75 = $24,000 ÷ 0.75 = $32,000`.",
  },
  {
    id: "maintenance-calls-and-minimum-maintenance-price.q2",
    lessonSlug: "maintenance-calls-and-minimum-maintenance-price",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "maintenance-call", "long"],
    unit: "$",
    prompt: "A long account has `LMV = $40,000` and `DR = $34,000`. What is the maintenance call?",
    choices: [
      { id: "a", text: "$4,000" },
      { id: "b", text: "$6,000", feedback: "That's the current equity, not the shortfall versus the requirement." },
      { id: "c", text: "$10,000", feedback: "That's the full requirement; the call is only the part not covered by equity." },
      { id: "d", text: "$0", feedback: "Equity ($6,000) is below the $10,000 requirement, so a call exists." },
    ],
    correctId: "a",
    explanation:
      "`EQ = $40,000 − $34,000 = $6,000`; requirement `= 25% × $40,000 = $10,000`; call `= $10,000 − $6,000 = $4,000`.",
  },
  {
    id: "maintenance-calls-and-minimum-maintenance-price.q3",
    lessonSlug: "maintenance-calls-and-minimum-maintenance-price",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "maintenance", "minimum-maintenance-price", "short"],
    unit: "$",
    prompt: "A short account has `CR = $78,000`. At what SMV does it hit the `30%` maintenance floor?",
    choices: [
      { id: "a", text: "$60,000" },
      { id: "b", text: "$54,600", feedback: "That multiplies the credit by 0.70. The short trigger is `CR ÷ 1.30`." },
      { id: "c", text: "$101,400", feedback: "That multiplies the credit by 1.30. The short trigger DIVIDES by 1.30." },
      { id: "d", text: "$65,000", feedback: "That divides by 1.20 (a 20% add-on). The short floor is 30%, so divide by 1.30." },
    ],
    correctId: "a",
    explanation:
      "Short minimum maintenance SMV `= CR ÷ 1.30 = $78,000 ÷ 1.30 = $60,000`.",
  },
  {
    id: "maintenance-calls-and-minimum-maintenance-price.q4",
    lessonSlug: "maintenance-calls-and-minimum-maintenance-price",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["fn:3", "maintenance-call", "short"],
    unit: "$",
    prompt: "A short account has `CR = $90,000`; the stock rises so `SMV = $80,000`. What is the maintenance call?",
    choices: [
      { id: "a", text: "$10,000", feedback: "That's the current equity, not the shortfall versus the requirement." },
      { id: "b", text: "$14,000" },
      { id: "c", text: "$24,000", feedback: "That's the full requirement; subtract the equity already present." },
      { id: "d", text: "$0", feedback: "Equity ($10,000) is below the $24,000 requirement, so a call exists." },
    ],
    correctId: "b",
    explanation:
      "`EQ = $90,000 − $80,000 = $10,000`; requirement `= 30% × $80,000 = $24,000`; call `= $24,000 − $10,000 = $14,000`.",
  },
  {
    id: "maintenance-calls-and-minimum-maintenance-price.q5",
    lessonSlug: "maintenance-calls-and-minimum-maintenance-price",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["fn:3", "maintenance", "minimum-maintenance-price", "long"],
    unit: "$",
    prompt: "A customer is long 1,000 shares with `DR = $30,000`. At what price per share does a maintenance call trigger?",
    choices: [
      { id: "a", text: "$22.50", feedback: "That multiplies the debit by 0.75. The trigger DIVIDES by 0.75." },
      { id: "b", text: "$30.00", feedback: "That's the per-share debit, not the trigger price." },
      { id: "c", text: "$40.00" },
      { id: "d", text: "$45.00", feedback: "That divides by 0.667. The long trigger is `DR ÷ 0.75`." },
    ],
    correctId: "c",
    explanation:
      "Trigger LMV `= $30,000 ÷ 0.75 = $40,000`; per share `= $40,000 ÷ 1,000 = $40.00`. Below `$40` a call triggers.",
  },
  {
    id: "maintenance-calls-and-minimum-maintenance-price.q6",
    lessonSlug: "maintenance-calls-and-minimum-maintenance-price",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["fn:3", "maintenance-call", "long"],
    unit: "$",
    prompt: "Long 1,000 sh, `DR = $30,000`; the stock falls to `$36`. What is the maintenance call?",
    choices: [
      { id: "a", text: "$3,000" },
      { id: "b", text: "$6,000", feedback: "That's the current equity, not the shortfall." },
      { id: "c", text: "$9,000", feedback: "That's the full requirement; subtract the equity already present." },
      { id: "d", text: "$0", feedback: "Equity ($6,000) is below the $9,000 requirement, so a call exists." },
    ],
    correctId: "a",
    explanation:
      "At `$36`: `LMV = $36,000`, `EQ = $36,000 − $30,000 = $6,000`; requirement `= 25% × $36,000 = $9,000`; call `= $9,000 − $6,000 = $3,000`.",
  },
  {
    id: "maintenance-calls-and-minimum-maintenance-price.q7",
    lessonSlug: "maintenance-calls-and-minimum-maintenance-price",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "maintenance", "method"],
    prompt: "To find the LMV at which a long account hits the `25%` maintenance floor, you should…",
    choices: [
      { id: "a", text: "Divide the debit by `0.75`" },
      { id: "b", text: "Multiply the debit by `0.75`" },
      { id: "c", text: "Divide the debit by `1.25`" },
      { id: "d", text: "Multiply the debit by `1.30`" },
    ],
    correctId: "a",
    explanation:
      "The long trigger is `DR ÷ (1 − 0.25) = DR ÷ 0.75`. Multiplying by `0.75` is the classic trap and gives a number that is too low.",
  },
  {
    id: "maintenance-calls-and-minimum-maintenance-price.q8",
    lessonSlug: "maintenance-calls-and-minimum-maintenance-price",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "intraday-margin", "pdt"],
    prompt: "Under the current intraday-margin regime (FINRA Notice 26-10, effective 2026-06-04), how are intraday requirements determined?",
    choices: [
      { id: "a", text: "By each account's intraday margin exposure/deficit under Rule 4210 — the PDT rule and `$25,000` minimum were eliminated" },
      { id: "b", text: "By a fixed `25%` intraday equity figure newly codified for all day traders" },
      { id: "c", text: "By counting four or more day trades in five business days, as before" },
      { id: "d", text: "By requiring a `$25,000` minimum balance for any margin trading" },
    ],
    correctId: "a",
    explanation:
      "FINRA Notice 26-10 eliminated the PDT rule and the `$25,000` minimum (effective 2026-06-04, phasing in to 2027-10-20). Intraday requirements are now exposure/deficit-based under Rule 4210 — not a discrete codified percentage. The 300-level Margin module owns this topic.",
  },
];

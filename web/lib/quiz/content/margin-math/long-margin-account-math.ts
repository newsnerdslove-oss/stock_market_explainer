import type { Question } from "@/lib/quiz/types";

// Quiz for the "Long Margin Account Math" lesson.
export const questions: Question[] = [
  {
    id: "long-margin-account-math.q1",
    lessonSlug: "long-margin-account-math",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["fn:3", "margin", "reg-t"],
    unit: "$",
    prompt: "A customer buys `$60,000` of stock in a margin account. Under Reg T `50%`, what deposit is required?",
    choices: [
      { id: "a", text: "$15,000" },
      { id: "b", text: "$30,000" },
      { id: "c", text: "$45,000" },
      { id: "d", text: "$60,000" },
    ],
    correctId: "b",
    explanation:
      "Reg T initial requirement = `50% × $60,000 = $30,000`. The broker lends the other `$30,000` as the debit balance.",
  },
  {
    id: "long-margin-account-math.q2",
    lessonSlug: "long-margin-account-math",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["fn:3", "margin", "equity"],
    unit: "$",
    prompt: "`LMV = $80,000` and `DR = $30,000`. What is the equity?",
    choices: [
      { id: "a", text: "$30,000" },
      { id: "b", text: "$40,000", feedback: "That's the Reg T requirement (50% of LMV), not the equity. Equity is `LMV − DR`." },
      { id: "c", text: "$50,000" },
      { id: "d", text: "$110,000", feedback: "That adds the debit to LMV. Equity subtracts the debit: `LMV − DR`." },
    ],
    correctId: "c",
    explanation:
      "`EQ = LMV − DR = $80,000 − $30,000 = $50,000`.",
  },
  {
    id: "long-margin-account-math.q3",
    lessonSlug: "long-margin-account-math",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "margin", "sma"],
    unit: "$",
    prompt: "`LMV = $80,000`, `DR = $30,000`. How much SMA (excess equity) does the account have?",
    choices: [
      { id: "a", text: "$0" },
      { id: "b", text: "$10,000" },
      { id: "c", text: "$20,000", feedback: "That uses the 25% maintenance figure. SMA is measured against the 50% Reg T requirement." },
      { id: "d", text: "$50,000", feedback: "That's the equity itself, not the excess above the Reg T requirement." },
    ],
    correctId: "b",
    explanation:
      "Equity `= $50,000`; Reg T requirement `= 50% × $80,000 = $40,000`; excess equity = SMA `= $50,000 − $40,000 = $10,000`.",
  },
  {
    id: "long-margin-account-math.q4",
    lessonSlug: "long-margin-account-math",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["fn:3", "margin", "buying-power", "sma"],
    unit: "$",
    prompt: "An account has `$4,000` of SMA. What is its buying power?",
    choices: [
      { id: "a", text: "$2,000", feedback: "That halves SMA. Buying power is `2 × SMA`, because Reg T only requires you to fund 50%." },
      { id: "b", text: "$4,000" },
      { id: "c", text: "$6,000" },
      { id: "d", text: "$8,000" },
    ],
    correctId: "d",
    explanation:
      "Buying power = `2 × SMA = 2 × $4,000 = $8,000`. The `$4,000` SMA funds the `50%` requirement on `$8,000` of new stock.",
  },
  {
    id: "long-margin-account-math.q5",
    lessonSlug: "long-margin-account-math",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "margin", "equity", "restricted-account"],
    unit: "$",
    prompt: "Open with `LMV = $50,000`, `DR = $25,000`. The stock falls so `LMV = $40,000`. What is the equity?",
    choices: [
      { id: "a", text: "$10,000", feedback: "That's the 25% maintenance floor on `$40,000`, not the equity. Equity is `LMV − DR`." },
      { id: "b", text: "$15,000" },
      { id: "c", text: "$20,000", feedback: "That's the Reg T requirement (50% of $40,000). Equity is `LMV − DR`, with DR fixed at $25,000." },
      { id: "d", text: "$25,000" },
    ],
    correctId: "b",
    explanation:
      "The debit is fixed: `DR = $25,000`. `EQ = $40,000 − $25,000 = $15,000`.",
  },
  {
    id: "long-margin-account-math.q6",
    lessonSlug: "long-margin-account-math",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "margin", "restricted-account"],
    prompt: "Open with `LMV = $50,000`, `DR = $25,000`; the stock falls so `LMV = $40,000` and `EQ = $15,000`. What is the account's status?",
    choices: [
      { id: "a", text: "Restricted — equity is below the `$20,000` Reg T requirement but above the `$10,000` maintenance floor" },
      { id: "b", text: "In violation — equity is below the maintenance floor" },
      { id: "c", text: "Unrestricted — equity exceeds the Reg T requirement" },
      { id: "d", text: "Frozen — the debit balance was exceeded" },
    ],
    correctId: "a",
    explanation:
      "Reg T requirement `= 50% × $40,000 = $20,000`; maintenance floor `= 25% × $40,000 = $10,000`. Equity `$15,000` sits below `$20,000` but above `$10,000` → restricted, not in violation.",
  },
  {
    id: "long-margin-account-math.q7",
    lessonSlug: "long-margin-account-math",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["fn:3", "margin", "sma", "buying-power"],
    unit: "$",
    prompt: "Buy 1,000 sh at `$50` (`DR = $25,000`). The stock rises to `$70`. What is the resulting buying power?",
    choices: [
      { id: "a", text: "$10,000", feedback: "That's the SMA itself. Buying power doubles SMA under Reg T 50%." },
      { id: "b", text: "$20,000" },
      { id: "c", text: "$35,000", feedback: "That's the Reg T requirement on the new LMV, not buying power." },
      { id: "d", text: "$45,000", feedback: "That's the equity, not the buying power generated by excess equity." },
    ],
    correctId: "b",
    explanation:
      "At `$70`: `LMV = $70,000`, `EQ = $70,000 − $25,000 = $45,000`. Reg T req `= 50% × $70,000 = $35,000`. SMA `= $45,000 − $35,000 = $10,000`; buying power `= 2 × $10,000 = $20,000`.",
  },
  {
    id: "long-margin-account-math.q8",
    lessonSlug: "long-margin-account-math",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "margin", "sma"],
    prompt: "An account generated `$10,000` of SMA at a high. The stock then drops, cutting current excess equity to `$5,000`. What happens to the SMA figure?",
    choices: [
      { id: "a", text: "It stays at `$10,000` — SMA is non-decreasing until spent" },
      { id: "b", text: "It falls to `$5,000` to match current excess equity" },
      { id: "c", text: "It falls to `$0` because the account is now restricted" },
      { id: "d", text: "It doubles to `$20,000`" },
    ],
    correctId: "a",
    explanation:
      "SMA is a high-water-mark line of credit. A falling stock lowers *current* excess equity, but the recorded SMA stays at its `$10,000` high until the customer spends it by buying or withdrawing.",
  },
];

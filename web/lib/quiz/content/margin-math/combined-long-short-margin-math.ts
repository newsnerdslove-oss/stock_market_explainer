import type { Question } from "@/lib/quiz/types";

// Quiz for the "Combined Margin Accounts" lesson.
export const questions: Question[] = [
  {
    id: "combined-long-short-margin-math.q1",
    lessonSlug: "combined-long-short-margin-math",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["fn:3", "combined", "equity"],
    unit: "$",
    prompt: "Long-side equity is `$45,000` and short-side equity is `$25,000`. What is the combined equity?",
    choices: [
      { id: "a", text: "$20,000", feedback: "That subtracts the sides. Combined equity adds the two equities." },
      { id: "b", text: "$45,000" },
      { id: "c", text: "$70,000" },
      { id: "d", text: "$90,000", feedback: "That doubles the long side; just add the two equities." },
    ],
    correctId: "c",
    explanation:
      "Combined equity = long EQ + short EQ = `$45,000 + $25,000 = $70,000`.",
  },
  {
    id: "combined-long-short-margin-math.q2",
    lessonSlug: "combined-long-short-margin-math",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "combined", "equity"],
    unit: "$",
    prompt: "Long: `LMV = $80,000`, `DR = $30,000`. Short: `SMV = $60,000`, `CR = $90,000`. What is the combined equity?",
    choices: [
      { id: "a", text: "$20,000", feedback: "That nets LMV against SMV — exactly the move to avoid. Compute each side's equity first." },
      { id: "b", text: "$50,000", feedback: "That's only the long side's equity." },
      { id: "c", text: "$80,000" },
      { id: "d", text: "$110,000", feedback: "That adds the two equities to the short SMV incorrectly." },
    ],
    correctId: "c",
    explanation:
      "Long EQ `= $80,000 − $30,000 = $50,000`; short EQ `= $90,000 − $60,000 = $30,000`; combined `= $50,000 + $30,000 = $80,000`.",
  },
  {
    id: "combined-long-short-margin-math.q3",
    lessonSlug: "combined-long-short-margin-math",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "combined", "maintenance"],
    unit: "$",
    prompt: "Long `LMV = $80,000` and short `SMV = $60,000`. What is the combined minimum maintenance?",
    choices: [
      { id: "a", text: "$28,000", feedback: "That applies 25% to both sides. The short side uses 30%." },
      { id: "b", text: "$35,000", feedback: "That mixes the rates up; long is 25%, short is 30%." },
      { id: "c", text: "$38,000" },
      { id: "d", text: "$42,000", feedback: "That applies 30% to both sides. The long side uses 25%." },
    ],
    correctId: "c",
    explanation:
      "Combined maintenance `= (25% × $80,000) + (30% × $60,000) = $20,000 + $18,000 = $38,000`.",
  },
  {
    id: "combined-long-short-margin-math.q4",
    lessonSlug: "combined-long-short-margin-math",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "combined", "maintenance-call"],
    prompt: "Combined equity is `$80,000` and combined maintenance is `$38,000`. Is there a maintenance call?",
    choices: [
      { id: "a", text: "No — equity `$80,000` exceeds the `$38,000` requirement" },
      { id: "b", text: "Yes — the call is `$38,000`" },
      { id: "c", text: "Yes — the call is `$42,000`" },
      { id: "d", text: "Cannot be determined without the Reg T requirement" },
    ],
    correctId: "a",
    explanation:
      "A call exists only when equity is below the maintenance requirement. Here `$80,000 > $38,000`, so there is no maintenance call.",
  },
  {
    id: "combined-long-short-margin-math.q5",
    lessonSlug: "combined-long-short-margin-math",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "combined", "reg-t"],
    unit: "$",
    prompt: "Long `LMV = $100,000` and short `SMV = $90,000`. What is the combined Reg T requirement?",
    choices: [
      { id: "a", text: "$47,500", feedback: "That's 25% of the total; Reg T is 50% per side." },
      { id: "b", text: "$52,000", feedback: "That's the combined maintenance, not the Reg T requirement." },
      { id: "c", text: "$95,000" },
      { id: "d", text: "$190,000", feedback: "That's 100% of both market values; Reg T is 50% per side." },
    ],
    correctId: "c",
    explanation:
      "Combined Reg T `= (50% × $100,000) + (50% × $90,000) = $50,000 + $45,000 = $95,000`.",
  },
  {
    id: "combined-long-short-margin-math.q6",
    lessonSlug: "combined-long-short-margin-math",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "combined", "restricted-account", "sma"],
    prompt: "Combined equity `$90,000`, combined Reg T requirement `$95,000`, combined maintenance `$52,000`. What is the status and combined SMA?",
    choices: [
      { id: "a", text: "Restricted; combined SMA `= $0` (equity is below Reg T but above maintenance)" },
      { id: "b", text: "In violation; SMA `= $0`" },
      { id: "c", text: "Unrestricted; combined SMA `= $5,000`" },
      { id: "d", text: "Restricted; combined SMA `= $38,000`" },
    ],
    correctId: "a",
    explanation:
      "Equity `$90,000` is below the `$95,000` Reg T requirement but above the `$52,000` maintenance floor → restricted, not in violation. There is no excess equity, so combined SMA `= $0`.",
  },
  {
    id: "combined-long-short-margin-math.q7",
    lessonSlug: "combined-long-short-margin-math",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["fn:3", "combined", "equity"],
    unit: "$",
    prompt: "Long: `LMV = $100,000`, `DR = $40,000`. Short: `CR = $120,000`, `SMV = $90,000`. What is the combined equity?",
    choices: [
      { id: "a", text: "$60,000", feedback: "That's only the long side." },
      { id: "b", text: "$90,000" },
      { id: "c", text: "$30,000", feedback: "That's only the short side." },
      { id: "d", text: "$10,000", feedback: "That nets LMV against SMV — never do this directly." },
    ],
    correctId: "b",
    explanation:
      "Long EQ `= $100,000 − $40,000 = $60,000`; short EQ `= $120,000 − $90,000 = $30,000`; combined `= $60,000 + $30,000 = $90,000`.",
  },
  {
    id: "combined-long-short-margin-math.q8",
    lessonSlug: "combined-long-short-margin-math",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "combined", "method"],
    prompt: "What is the correct way to compute equity in a combined long/short margin account?",
    choices: [
      { id: "a", text: "Compute `LMV − DR` and `CR − SMV` separately, then add the two equities" },
      { id: "b", text: "Subtract `SMV` from `LMV`, then subtract the debit" },
      { id: "c", text: "Add `LMV` and `SMV`, then subtract `DR` and `CR`" },
      { id: "d", text: "Use the larger of the long or short equity only" },
    ],
    correctId: "a",
    explanation:
      "Each side is computed on its own — long with `LMV − DR`, short with `CR − SMV` — and only the resulting equities are added. Market values are never netted directly.",
  },
];

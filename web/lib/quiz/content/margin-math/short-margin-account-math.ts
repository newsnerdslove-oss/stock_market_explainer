import type { Question } from "@/lib/quiz/types";

// Quiz for the "Short Margin Account Math" lesson.
export const questions: Question[] = [
  {
    id: "short-margin-account-math.q1",
    lessonSlug: "short-margin-account-math",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["fn:3", "short", "credit-balance"],
    unit: "$",
    prompt: "A customer shorts `$50,000` of stock under Reg T `50%`. What is the resulting credit balance?",
    choices: [
      { id: "a", text: "$25,000", feedback: "That's only the Reg T deposit. The credit balance also includes the short-sale proceeds." },
      { id: "b", text: "$50,000", feedback: "That's the proceeds alone. Add the 50% Reg T deposit to get the credit balance." },
      { id: "c", text: "$75,000" },
      { id: "d", text: "$100,000" },
    ],
    correctId: "c",
    explanation:
      "`CR = SMV + (50% × SMV) = $50,000 + $25,000 = $75,000` (= `150% × $50,000`).",
  },
  {
    id: "short-margin-account-math.q2",
    lessonSlug: "short-margin-account-math",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "short", "equity"],
    unit: "$",
    prompt: "`CR = $120,000` and the stock rises so `SMV = $100,000`. What is the equity?",
    choices: [
      { id: "a", text: "$0" },
      { id: "b", text: "$20,000" },
      { id: "c", text: "$30,000", feedback: "That's the 30% maintenance requirement on $100,000, not the equity." },
      { id: "d", text: "$220,000", feedback: "That adds SMV to CR. Equity subtracts SMV: `CR − SMV`." },
    ],
    correctId: "b",
    explanation:
      "`EQ = CR − SMV = $120,000 − $100,000 = $20,000`. The credit balance is frozen; only SMV moves.",
  },
  {
    id: "short-margin-account-math.q3",
    lessonSlug: "short-margin-account-math",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["fn:3", "short", "maintenance"],
    unit: "$",
    prompt: "`SMV = $100,000` on a `$5`+ stock. What is the FINRA minimum maintenance?",
    choices: [
      { id: "a", text: "$25,000", feedback: "25% is the long-account maintenance rate. Shorts use 30% of SMV." },
      { id: "b", text: "$30,000" },
      { id: "c", text: "$50,000" },
      { id: "d", text: "$130,000" },
    ],
    correctId: "b",
    explanation:
      "Short maintenance = `30% × SMV = 30% × $100,000 = $30,000` (greater than the `$5/share` alternative here).",
  },
  {
    id: "short-margin-account-math.q4",
    lessonSlug: "short-margin-account-math",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["fn:3", "short", "maintenance", "low-priced"],
    unit: "$",
    prompt: "A customer shorts 1,000 shares of a `$4` stock. What is the minimum maintenance requirement?",
    choices: [
      { id: "a", text: "$1,200", feedback: "That applies the 30% rule, which is for $5+ stocks. Under $5 uses the special low-priced rule." },
      { id: "b", text: "$2,500", feedback: "That's `$2.50 × 1,000`, but the rule takes the greater of that or 100% of SMV." },
      { id: "c", text: "$4,000" },
      { id: "d", text: "$5,000", feedback: "That's the $5/share floor, which applies only to $5+ stocks." },
    ],
    correctId: "c",
    explanation:
      "Under `$5`: greater of `$2.50/share` or `100% × SMV`. Here `$2.50 × 1,000 = $2,500` vs `100% × $4,000 = $4,000`. The greater is `$4,000`.",
  },
  {
    id: "short-margin-account-math.q5",
    lessonSlug: "short-margin-account-math",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "short", "credit-balance", "150-percent"],
    unit: "$",
    prompt: "Short 1,000 sh at `$80`. What credit balance results under Reg T `50%`?",
    choices: [
      { id: "a", text: "$40,000", feedback: "That's the Reg T deposit alone. Add the $80,000 proceeds." },
      { id: "b", text: "$80,000", feedback: "That's the proceeds alone, without the 50% deposit." },
      { id: "c", text: "$120,000" },
      { id: "d", text: "$160,000", feedback: "That's 200% of SMV. The credit balance is 150% of SMV." },
    ],
    correctId: "c",
    explanation:
      "`SMV = 1,000 × $80 = $80,000`; deposit `= 50% × $80,000 = $40,000`; `CR = $80,000 + $40,000 = $120,000`.",
  },
  {
    id: "short-margin-account-math.q6",
    lessonSlug: "short-margin-account-math",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["fn:3", "short", "maintenance-call"],
    unit: "$",
    prompt: "`CR = $120,000`; the stock rises so `SMV = $100,000`. What is the maintenance call?",
    choices: [
      { id: "a", text: "$0", feedback: "Equity ($20,000) is below the $30,000 requirement, so there is a call." },
      { id: "b", text: "$10,000" },
      { id: "c", text: "$20,000", feedback: "That's the current equity, not the shortfall versus the requirement." },
      { id: "d", text: "$30,000", feedback: "That's the full requirement; the call is only the part not covered by equity." },
    ],
    correctId: "b",
    explanation:
      "`EQ = $120,000 − $100,000 = $20,000`; requirement `= 30% × $100,000 = $30,000`; call `= $30,000 − $20,000 = $10,000`.",
  },
  {
    id: "short-margin-account-math.q7",
    lessonSlug: "short-margin-account-math",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "short", "equity"],
    prompt: "In a short margin account, what happens to equity when the short stock's price **falls**?",
    choices: [
      { id: "a", text: "Equity rises — `CR` is frozen and a lower `SMV` means a larger `CR − SMV`" },
      { id: "b", text: "Equity falls, just as in a long account" },
      { id: "c", text: "Equity is unchanged because the credit balance is frozen" },
      { id: "d", text: "The credit balance falls to match the lower price" },
    ],
    correctId: "a",
    explanation:
      "Equity is `CR − SMV` with `CR` frozen. When `SMV` falls, the gap widens, so equity rises — the inverse of a long account.",
  },
  {
    id: "short-margin-account-math.q8",
    lessonSlug: "short-margin-account-math",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["fn:3", "short", "maintenance-call"],
    unit: "$",
    prompt: "Short 1,000 sh at `$80` (`CR = $120,000`); the stock then jumps to `$120`. What is the maintenance call?",
    choices: [
      { id: "a", text: "$0", feedback: "Equity is wiped out to $0, which is below the $36,000 requirement — a large call results." },
      { id: "b", text: "$20,000" },
      { id: "c", text: "$36,000" },
      { id: "d", text: "$120,000", feedback: "That's the SMV, not the maintenance shortfall." },
    ],
    correctId: "c",
    explanation:
      "At `SMV = $120,000`: `EQ = $120,000 − $120,000 = $0`; requirement `= 30% × $120,000 = $36,000`; call `= $36,000 − $0 = $36,000`.",
  },
];

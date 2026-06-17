import type { Question } from "@/lib/quiz/types";

// Quiz for the "Day-Trading Margin: From the PDT Rule to Intraday Margin" lesson.
export const questions: Question[] = [
  {
    id: "day-trading-buying-power.q1",
    lessonSlug: "day-trading-buying-power",
    type: "single",
    difficulty: "medium",
    tags: ["margin", "day-trading", "pdt"],
    prompt: "As of June 4, 2026, what replaced the Pattern Day Trader rule and its `$25,000` minimum?",
    choices: [
      { id: "a", text: "A flat $50,000 minimum for all traders" },
      { id: "b", text: "An intraday margin standard requiring ~25% equity against positions during the day" },
      { id: "c", text: "A total ban on day trading in margin accounts" },
      { id: "d", text: "A trade-count cap of 10 per week" },
    ],
    correctId: "b",
    explanation:
      "FINRA eliminated the PDT designation and `$25,000` minimum (Regulatory Notice 26-10), replacing them with an **intraday margin standard** under Rule 4210 — `25%` equity maintained against actual positions throughout the day.",
  },
  {
    id: "day-trading-buying-power.q2",
    lessonSlug: "day-trading-buying-power",
    type: "single",
    difficulty: "easy",
    tags: ["margin", "day-trading", "definition"],
    prompt: "A **day trade** is…",
    choices: [
      { id: "a", text: "Holding a stock for several weeks" },
      { id: "b", text: "Buying and selling (or shorting and covering) the same security within the same trading day" },
      { id: "c", text: "Any trade made on margin" },
      { id: "d", text: "A trade that pays a dividend" },
    ],
    correctId: "b",
    explanation:
      "A day trade opens and closes the same security within one trading day.",
  },
  {
    id: "day-trading-buying-power.q3",
    lessonSlug: "day-trading-buying-power",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["margin", "day-trading", "intraday", "math"],
    unit: "$",
    prompt: "Under the current intraday standard, holding `$120,000` of long positions intraday requires what minimum equity?",
    choices: [
      { id: "a", text: "$25,000", feedback: "That was the old PDT minimum — the current test is 25% of positions, not a fixed dollar floor." },
      { id: "b", text: "$30,000" },
      { id: "c", text: "$60,000" },
      { id: "d", text: "$120,000" },
    ],
    correctId: "b",
    explanation:
      "`25% × $120,000 = $30,000`. The current rule ties required equity to actual positions, not a fixed `$25,000`.",
  },
  {
    id: "day-trading-buying-power.q4",
    lessonSlug: "day-trading-buying-power",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["margin", "day-trading", "historical", "math"],
    unit: "$",
    prompt: "Under the *old* PDT rule, a trader with `$30,000` equity and `4×` intraday buying power could trade up to what amount intraday?",
    choices: [
      { id: "a", text: "$60,000" },
      { id: "b", text: "$90,000" },
      { id: "c", text: "$120,000" },
      { id: "d", text: "$150,000", feedback: "That would be 5× — the old PDT rule gave up to 4× intraday." },
    ],
    correctId: "c",
    explanation:
      "Old rule: `$30,000 × 4 = $120,000` intraday buying power. (Note: this is historical — superseded as of June 4, 2026.)",
  },
  {
    id: "day-trading-buying-power.q5",
    lessonSlug: "day-trading-buying-power",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["margin", "day-trading", "intraday", "math"],
    unit: "$",
    prompt: "You have `$30,000` equity and your intraday long positions grow to `$130,000`. What's your intraday margin deficit?",
    choices: [
      { id: "a", text: "$0" },
      { id: "b", text: "$2,500" },
      { id: "c", text: "$5,000" },
      { id: "d", text: "$32,500", feedback: "That's the total required equity — the deficit is the shortfall below it." },
    ],
    correctId: "b",
    explanation:
      "Required equity = `25% × $130,000 = $32,500`. Deficit = `$32,500 − $30,000 = $2,500`, which must be satisfied promptly.",
  },
  {
    id: "day-trading-buying-power.q6",
    lessonSlug: "day-trading-buying-power",
    type: "single",
    difficulty: "medium",
    tags: ["margin", "day-trading", "freeze"],
    prompt: "Under the current rule, what happens if an intraday margin deficit is unmet by the 5th business day?",
    choices: [
      { id: "a", text: "A 90-day cash-only restriction" },
      { id: "b", text: "The account is permanently closed" },
      { id: "c", text: "Nothing — there's no deadline" },
      { id: "d", text: "The $25,000 PDT minimum is reinstated" },
    ],
    correctId: "a",
    explanation:
      "An unmet intraday deficit by the 5th business day triggers a **90-day cash-only restriction**.",
  },
  {
    id: "day-trading-buying-power.q7",
    lessonSlug: "day-trading-buying-power",
    type: "single",
    difficulty: "medium",
    tags: ["margin", "day-trading", "intraday"],
    prompt: "Day-trading buying power is described as *intraday only*. What does that mean?",
    choices: [
      { id: "a", text: "It can only be used on Mondays" },
      { id: "b", text: "Positions must be reduced by the close, or what's left becomes an overnight loan" },
      { id: "c", text: "It never charges interest" },
      { id: "d", text: "It applies only to short sales" },
    ],
    correctId: "b",
    explanation:
      "Intraday buying power is for positions opened and closed the same day. Anything held past the close becomes an overnight margin loan subject to the usual requirements.",
  },
  {
    id: "day-trading-buying-power.q8",
    lessonSlug: "day-trading-buying-power",
    type: "single",
    difficulty: "easy",
    tags: ["margin", "day-trading", "minimum"],
    prompt: "Under the current rule, what minimum is still required to trade on margin at all?",
    choices: [
      { id: "a", text: "$25,000" },
      { id: "b", text: "$2,000" },
      { id: "c", text: "$10,000" },
      { id: "d", text: "There is no minimum" },
    ],
    correctId: "b",
    explanation:
      "The `$25,000` PDT minimum is gone, but the longstanding `$2,000` minimum to trade on margin still applies.",
  },
  {
    id: "day-trading-buying-power.q9",
    lessonSlug: "day-trading-buying-power",
    type: "single",
    difficulty: "hard",
    tags: ["margin", "day-trading", "scenario", "phase-in"],
    prompt:
      "In mid-2026, your broker tells you they still enforce the `$25,000` PDT requirement. Is that possible?",
    choices: [
      { id: "a", text: "No — the old rule was instantly void everywhere on June 4, 2026" },
      { id: "b", text: "Yes — during the phase-in through Oct 20, 2027, some firms may still apply the old rule" },
      { id: "c", text: "Only if you trade options" },
      { id: "d", text: "No — brokers can never set their own requirements" },
    ],
    correctId: "b",
    explanation:
      "There's an 18-month phase-in through **Oct 20, 2027**. The rule is broker-dependent during that window, so some firms may still enforce the old `$25,000` PDT requirement — confirm with yours.",
  },
];

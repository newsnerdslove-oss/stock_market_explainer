import type { Question } from "@/lib/quiz/types";

// Quiz for the "Exercise & Assignment: OCC Mechanics" lesson.
export const questions: Question[] = [
  {
    id: "assignment-exercise-mechanics.q1",
    lessonSlug: "assignment-exercise-mechanics",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "exercise", "auto-exercise"],
    prompt:
      "An equity call closes `$0.02` in-the-money at expiration with no instructions. What happens?",
    choices: [
      { id: "a", text: "It is auto-exercised — it is at least $0.01 ITM" },
      { id: "b", text: "It expires worthless because it is under a dollar ITM", feedback: "The trigger is $0.01, not $1.00 — anything $0.01+ ITM is auto-exercised." },
      { id: "c", text: "It is cash-settled" },
      { id: "d", text: "Nothing happens until the next business day" },
    ],
    correctId: "a",
    explanation:
      "The OCC auto-exercises any option `$0.01` or more ITM. `$0.02 ≥ $0.01`, so the call is exercised by exception.",
  },
  {
    id: "assignment-exercise-mechanics.q2",
    lessonSlug: "assignment-exercise-mechanics",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "assignment", "occ"],
    prompt: "How does the OCC select which short customer gets **assigned**?",
    choices: [
      { id: "a", text: "The OCC assigns a clearing firm at random; the firm then assigns a customer by FIFO, random, or another fair method" },
      { id: "b", text: "The OCC directly picks the individual customer who sold first", feedback: "The OCC stops at the clearing-firm level — the firm, not the OCC, selects the individual customer." },
      { id: "c", text: "The customer with the largest position is always assigned" },
      { id: "d", text: "Assignment is by alphabetical order of account names" },
    ],
    correctId: "a",
    explanation:
      "Two steps: OCC → **random** clearing firm, then firm → customer by **FIFO, random, or any fair method**.",
  },
  {
    id: "assignment-exercise-mechanics.q3",
    lessonSlug: "assignment-exercise-mechanics",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "settlement", "index"],
    unit: "$",
    prompt: "A broad-based index call finishes `15` points ITM (multiplier `100`). Since index options are **cash-settled**, how much does the holder receive?",
    choices: [
      { id: "a", text: "$1,500" },
      { id: "b", text: "100 shares of the index", feedback: "Index options never deliver shares — they pay the ITM amount in cash: 15 × 100 = $1,500." },
      { id: "c", text: "$15" },
      { id: "d", text: "$150" },
    ],
    correctId: "a",
    explanation:
      "Index options are **cash-settled**: ITM amount × multiplier = `15 × 100 = $1,500` in cash; no stock changes hands. (Equity options instead deliver stock T+1.)",
  },
  {
    id: "assignment-exercise-mechanics.q4",
    lessonSlug: "assignment-exercise-mechanics",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "american-european"],
    prompt: "Which best describes **American-style** exercise?",
    choices: [
      { id: "a", text: "Exercisable on any business day through expiration" },
      { id: "b", text: "Exercisable only at expiration", feedback: "That's European style — American options can be exercised any business day up to expiration." },
      { id: "c", text: "Exercisable only on the third Friday of each month" },
      { id: "d", text: "Never exercisable; only tradable" },
    ],
    correctId: "a",
    explanation:
      "American-style options (most US equity options) are exercisable **any business day** through expiration. European-style options exercise **only at expiration**.",
  },
  {
    id: "assignment-exercise-mechanics.q5",
    lessonSlug: "assignment-exercise-mechanics",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "expiration", "timeline"],
    prompt: "On expiration day, what is the typical **exercise-notice deadline**?",
    choices: [
      { id: "a", text: "5:30pm ET" },
      { id: "b", text: "4:00pm ET", feedback: "4:00pm ET is the trading cutoff; the exercise-notice deadline is later, at 5:30pm ET." },
      { id: "c", text: "11:59pm ET" },
      { id: "d", text: "9:30am ET" },
    ],
    correctId: "a",
    explanation:
      "Expiration timeline: trading cutoff **4:00pm**, exercise-notice deadline **5:30pm**, contracts expire **11:59pm ET**.",
  },
  {
    id: "assignment-exercise-mechanics.q6",
    lessonSlug: "assignment-exercise-mechanics",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "auto-exercise"],
    unit: "$",
    prompt:
      "What is the **minimum** amount in-the-money (per share) at which the OCC will auto-exercise an option absent contrary instructions?",
    choices: [
      { id: "a", text: "$0.01" },
      { id: "b", text: "$1.00", feedback: "A dollar is a common misconception — the OCC's exercise-by-exception trigger is just one cent ITM." },
      { id: "c", text: "$0.10" },
      { id: "d", text: "$0.005" },
    ],
    correctId: "a",
    explanation:
      "Exercise by exception triggers at `$0.01` or more ITM. An option only `$0.005` ITM is below the threshold and is **not** auto-exercised.",
  },
  {
    id: "assignment-exercise-mechanics.q7",
    lessonSlug: "assignment-exercise-mechanics",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "exercise", "settlement"],
    unit: "$",
    prompt:
      "A long `XYZ` `50` call is auto-exercised at expiration. How much does the holder pay for the `100` shares?",
    choices: [
      { id: "a", text: "$5,000" },
      { id: "b", text: "$50", feedback: "That's the per-share strike — multiply by 100 shares per contract: 50 × 100 = $5,000." },
      { id: "c", text: "$500" },
      { id: "d", text: "$50,000" },
    ],
    correctId: "a",
    explanation:
      "Exercising a `50` call buys `100` shares at the `$50` strike: `50 × 100 = $5,000`, delivered T+1.",
  },
  {
    id: "assignment-exercise-mechanics.q8",
    lessonSlug: "assignment-exercise-mechanics",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["fn:3", "assignment", "settlement"],
    unit: "$",
    prompt:
      "A short call writer is assigned on one `XYZ` `50` call. How much cash does the writer **receive** for delivering the `100` shares?",
    choices: [
      { id: "a", text: "$5,000" },
      { id: "b", text: "$50", feedback: "That's the per-share strike — the writer delivers 100 shares, so multiply: 50 × 100 = $5,000." },
      { id: "c", text: "$500" },
      { id: "d", text: "$0 — index options cash-settle", feedback: "This is an equity option, so shares are delivered at the strike, not cash-settled." },
    ],
    correctId: "a",
    explanation:
      "Assigned on a `50` call, the writer delivers `100` shares at the `$50` strike and receives `50 × 100 = $5,000` (settling T+1).",
  },
];

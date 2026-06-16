import type { Question } from "@/lib/quiz/types";

// Quiz for the "Iron Condor: Profiting From a Stock That Goes Nowhere" lesson.
export const questions: Question[] = [
  {
    id: "iron-condor.q1",
    lessonSlug: "iron-condor",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["options", "iron-condor", "math", "max-loss"],
    unit: "$",
    prompt:
      "An iron condor: long `90` put `$0.50`, short `95` put `$1.20`, short `105` call `$1.20`, long `110` call `$0.50` (each wing `$5` wide). What's the max loss?",
    choices: [
      { id: "a", text: "$360" },
      { id: "b", text: "$720", feedback: "Both wings can't be breached at once — at expiry the stock is only on one side." },
      { id: "c", text: "$500", feedback: "The `$140` credit reduces the `$500` width." },
      { id: "d", text: "$140" },
    ],
    correctId: "a",
    explanation:
      "Net credit `= (1.20 + 1.20) − (0.50 + 0.50) = $1.40`. Only **one** wing can be breached, so max loss `= (5 − 1.40) × 100 = $360`, not `$720`.",
  },
  {
    id: "iron-condor.q2",
    lessonSlug: "iron-condor",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["options", "iron-condor", "math", "breakeven"],
    unit: "$",
    prompt: "For that condor (net credit `$1.40`, short strikes `95` and `105`), what are the breakevens?",
    choices: [
      { id: "a", text: "$95.00 and $105.00", feedback: "The credit widens the profitable range beyond the short strikes." },
      { id: "b", text: "$93.60 and $106.40" },
      { id: "c", text: "$90.00 and $110.00", feedback: "Those are the long wing strikes." },
      { id: "d", text: "$96.40 and $103.60" },
    ],
    correctId: "b",
    explanation:
      "Breakevens `= 95 − 1.40 = $93.60` and `105 + 1.40 = $106.40`. The credit extends the range slightly past each short strike.",
  },
  {
    id: "iron-condor.q3",
    lessonSlug: "iron-condor",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["options", "iron-condor", "math", "max-profit"],
    unit: "$",
    prompt: "Same condor. What's the maximum profit, and where?",
    choices: [
      { id: "a", text: "$140, with the stock between `95` and `105`" },
      { id: "b", text: "$360, between the wings", feedback: "That's the max loss, not profit." },
      { id: "c", text: "$240, at `$100`", feedback: "The net credit is `$1.40`, i.e. `$140`." },
      { id: "d", text: "$500, at any price" },
    ],
    correctId: "a",
    explanation:
      "Max profit is the **net credit**, `$140`, kept when the stock finishes between the short strikes `95` and `105` so all four legs expire worthless.",
  },
  {
    id: "iron-condor.q4",
    lessonSlug: "iron-condor",
    type: "single",
    difficulty: "easy",
    tags: ["options", "iron-condor", "scenario"],
    prompt: "The stock sits at `$100` and stays there through expiry. What's the outcome?",
    choices: [
      { id: "a", text: "Max profit — you keep the full `$140` credit" },
      { id: "b", text: "Max loss of `$360`" },
      { id: "c", text: "Breakeven" },
      { id: "d", text: "You're assigned on both spreads", feedback: "Inside the range, all four options expire worthless." },
    ],
    correctId: "a",
    explanation:
      "At `$100`, the stock is inside the `95–105` range, so every leg expires worthless and you keep the **full `$140`** credit.",
  },
  {
    id: "iron-condor.q5",
    lessonSlug: "iron-condor",
    type: "single",
    difficulty: "medium",
    tags: ["options", "iron-condor", "scenario", "risk"],
    prompt: "What most threatens an iron condor?",
    choices: [
      { id: "a", text: "A strong directional breakout (or volatility spike) through a short strike" },
      { id: "b", text: "The stock drifting sideways" },
      { id: "c", text: "Time passing without a big move" },
      { id: "d", text: "Falling implied volatility" },
    ],
    correctId: "a",
    explanation:
      "A condor wants a **range-bound** stock. A strong move (up or down) through a short strike toward a wing — or an IV spike — drives it toward the max loss.",
  },
  {
    id: "iron-condor.q6",
    lessonSlug: "iron-condor",
    type: "single",
    difficulty: "hard",
    tags: ["options", "iron-condor", "misconception", "max-loss"],
    prompt: "Why isn't the max loss the two spreads combined (~`$720`)?",
    choices: [
      { id: "a", text: "At expiry the stock can be on only one side, so only one wing can be breached" },
      { id: "b", text: "The two spreads always offset to zero" },
      { id: "c", text: "The long wings double the credit" },
      { id: "d", text: "Iron condors have no defined loss" },
    ],
    correctId: "a",
    explanation:
      "The stock can finish above **or** below — not both. So only one `$5` wing can be breached: max loss `= (width − credit) × 100 = $360`, never the sum of both.",
  },
  {
    id: "iron-condor.q7",
    lessonSlug: "iron-condor",
    type: "single",
    difficulty: "easy",
    tags: ["options", "iron-condor", "construction"],
    prompt: "An iron condor is which combination?",
    choices: [
      { id: "a", text: "A bull put spread below the price plus a bear call spread above it" },
      { id: "b", text: "A long call plus a long put at the same strike" },
      { id: "c", text: "100 shares plus a short call" },
      { id: "d", text: "Two bull call spreads" },
    ],
    correctId: "a",
    explanation:
      "It pairs a **bull put spread** (below) with a **bear call spread** (above) — four legs, a net credit, profiting if the stock stays between the short strikes.",
  },
  {
    id: "iron-condor.q8",
    lessonSlug: "iron-condor",
    type: "single",
    difficulty: "medium",
    tags: ["options", "iron-condor", "concept", "theta"],
    prompt: "What primarily drives an iron condor's profit?",
    choices: [
      { id: "a", text: "Time decay (positive theta) plus stable or falling volatility" },
      { id: "b", text: "A large directional move" },
      { id: "c", text: "Rising implied volatility" },
      { id: "d", text: "Dividends from the underlying" },
    ],
    correctId: "a",
    explanation:
      "The condor harvests **time decay** while the stock stays range-bound; stable or falling volatility helps, and elevated IV at entry richens the credit.",
  },
];

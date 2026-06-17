import type { Question } from "@/lib/quiz/types";

// Quiz for the "Position & Exercise Limits (FINRA 2360)" lesson.
export const questions: Question[] = [
  {
    id: "options-rules-position-limits.q1",
    lessonSlug: "options-rules-position-limits",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "position-limits", "aggregation"],
    unit: "",
    prompt:
      "An account holds long `200,000` calls and short `70,000` puts on a stock with a `250,000` position limit. How many contracts count on the bullish side?",
    choices: [
      { id: "a", text: "270,000" },
      { id: "b", text: "200,000", feedback: "Short puts are also bullish — they aggregate with the long calls, so add them: 200,000 + 70,000." },
      { id: "c", text: "130,000" },
      { id: "d", text: "70,000" },
    ],
    correctId: "a",
    explanation:
      "Long calls + short puts are both bullish: `200,000 + 70,000 = 270,000`. That exceeds the `250,000` limit — a violation.",
  },
  {
    id: "options-rules-position-limits.q2",
    lessonSlug: "options-rules-position-limits",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "position-limits", "same-side"],
    prompt: "Which positions **aggregate on the bullish side** of the market?",
    choices: [
      { id: "a", text: "Long calls and short puts" },
      { id: "b", text: "Long calls and long puts", feedback: "Long puts are bearish — they go on the opposite side and are not netted against the calls." },
      { id: "c", text: "Short calls and short puts" },
      { id: "d", text: "Long puts and short calls" },
    ],
    correctId: "a",
    explanation:
      "Bullish aggregate = **long calls + short puts** (both profit on a rise). Long puts and short calls form the bearish aggregate.",
  },
  {
    id: "options-rules-position-limits.q3",
    lessonSlug: "options-rules-position-limits",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "exercise-limit"],
    prompt: "Over what window does the options **exercise limit** apply?",
    choices: [
      { id: "a", text: "5 consecutive business days" },
      { id: "b", text: "5 consecutive calendar days", feedback: "The rule counts business days, not calendar days." },
      { id: "c", text: "10 consecutive business days" },
      { id: "d", text: "1 business day" },
    ],
    correctId: "a",
    explanation:
      "An account may not exercise more than the position-limit number of contracts of a class within any **5 consecutive business days**.",
  },
  {
    id: "options-rules-position-limits.q4",
    lessonSlug: "options-rules-position-limits",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "position-limits", "tiers"],
    prompt: "Which set of figures are the standard equity-option **position-limit tiers** (in contracts)?",
    choices: [
      { id: "a", text: "25,000 / 50,000 / 75,000 / 200,000 / 250,000" },
      { id: "b", text: "10,000 / 25,000 / 50,000 / 100,000 / 250,000", feedback: "Those are not the standard tiers — the five figures are 25k, 50k, 75k, 200k, and 250k." },
      { id: "c", text: "50,000 / 100,000 / 150,000 / 200,000 / 250,000" },
      { id: "d", text: "25,000 / 75,000 / 125,000 / 175,000 / 250,000" },
    ],
    correctId: "a",
    explanation:
      "The five standard tiers are `25,000 / 50,000 / 75,000 / 200,000 / 250,000` contracts on the same side of the market.",
  },
  {
    id: "options-rules-position-limits.q5",
    lessonSlug: "options-rules-position-limits",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "position-limits", "aggregation"],
    unit: "",
    prompt: "On a `250,000`-limit stock, an account is already long `180,000` calls and short `40,000` puts. How many **more** bullish-side contracts can it add before hitting the limit?",
    choices: [
      { id: "a", text: "30,000" },
      { id: "b", text: "70,000", feedback: "That ignores the short puts — they're bullish too, so the current bullish side is 220,000, leaving only 30,000." },
      { id: "c", text: "250,000" },
      { id: "d", text: "0" },
    ],
    correctId: "a",
    explanation:
      "Current bullish side = `180,000 + 40,000 = 220,000`. Headroom = `250,000 − 220,000 = 30,000` contracts.",
  },
  {
    id: "options-rules-position-limits.q6",
    lessonSlug: "options-rules-position-limits",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "position-limits", "purpose"],
    prompt: "What is the primary **purpose** of options position and exercise limits?",
    choices: [
      { id: "a", text: "To prevent anyone from building a controlling stock position through options" },
      { id: "b", text: "To cap the premium a market maker can quote", feedback: "The rule is about contract quantity and market control, not quoting limits." },
      { id: "c", text: "To set the maximum commission per contract" },
      { id: "d", text: "To require physical settlement of all options" },
    ],
    correctId: "a",
    explanation:
      "The limits exist to **prevent cornering** — stopping a trader from amassing a controlling stock position via large options positions.",
  },
  {
    id: "options-rules-position-limits.q7",
    lessonSlug: "options-rules-position-limits",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["fn:3", "position-limits", "aggregation"],
    unit: "",
    prompt:
      "An account is long `150,000` calls and short `120,000` puts on a `250,000`-limit stock, and separately holds `80,000` long puts. How many contracts count on the **bullish side** (the side being tested for a violation)?",
    choices: [
      { id: "a", text: "270,000" },
      { id: "b", text: "190,000", feedback: "Opposite sides are never netted; the 80,000 long puts are bearish and can't reduce the bullish count." },
      { id: "c", text: "350,000" },
      { id: "d", text: "150,000" },
    ],
    correctId: "a",
    explanation:
      "Bullish side = long calls + short puts = `150,000 + 120,000 = 270,000` — over the `250,000` limit, a violation. The `80,000` long puts are bearish and counted separately, not netted.",
  },
  {
    id: "options-rules-position-limits.q8",
    lessonSlug: "options-rules-position-limits",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["fn:3", "exercise-limit"],
    unit: "",
    prompt:
      "A class has a `75,000`-contract position limit. What is the most contracts of that class an account may **exercise** within any 5 consecutive business days?",
    choices: [
      { id: "a", text: "75,000" },
      { id: "b", text: "150,000", feedback: "The exercise limit equals the position limit, not double it." },
      { id: "c", text: "37,500" },
      { id: "d", text: "250,000" },
    ],
    correctId: "a",
    explanation:
      "The exercise limit equals the position limit: at most `75,000` contracts of the class may be exercised within any 5 consecutive business days.",
  },
];

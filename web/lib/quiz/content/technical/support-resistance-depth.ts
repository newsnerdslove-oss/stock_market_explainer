import type { Question } from "@/lib/quiz/types";

// Quiz for the "Support & Resistance: Role Reversal and Fakeouts" lesson.
export const questions: Question[] = [
  {
    id: "support-resistance-depth.q1",
    lessonSlug: "support-resistance-depth",
    type: "single",
    difficulty: "easy",
    tags: ["technical", "support-resistance", "role-reversal"],
    prompt: "A stock decisively breaks **above** `$30` resistance. What is `$30` most likely to become?",
    choices: [
      { id: "a", text: "Support" },
      { id: "b", text: "A permanent ceiling", feedback: "Once broken, a resistance level tends to flip roles rather than stay a ceiling." },
      { id: "c", text: "Irrelevant from now on" },
      { id: "d", text: "A dividend level" },
    ],
    correctId: "a",
    explanation:
      "Role reversal: broken **resistance becomes support**. If price pulls back to `$30` and holds, the old ceiling now acts as a floor.",
  },
  {
    id: "support-resistance-depth.q2",
    lessonSlug: "support-resistance-depth",
    type: "single",
    difficulty: "medium",
    tags: ["technical", "support-resistance", "scenario", "fakeout"],
    prompt:
      "Price spikes to `$101` intraday — just above `$100` resistance — but then closes at `$97` on average volume. What does this most likely indicate?",
    choices: [
      { id: "a", text: "A possible fakeout; the level held since price closed back inside" },
      { id: "b", text: "A confirmed breakout above $100" },
      { id: "c", text: "Role reversal has already turned $100 into support" },
      { id: "d", text: "A golden cross" },
    ],
    correctId: "a",
    explanation:
      "An intrabar pierce that **closes back inside** is a **fakeout**, not a breakout. With no closing break and only average volume, the `$100` resistance held.",
  },
  {
    id: "support-resistance-depth.q3",
    lessonSlug: "support-resistance-depth",
    type: "single",
    difficulty: "medium",
    tags: ["technical", "support-resistance", "round-numbers"],
    prompt: "Why do round numbers like `$50` and `$100` often act as support or resistance?",
    choices: [
      { id: "a", text: "Orders and trader attention cluster at psychological round levels" },
      { id: "b", text: "Exchanges legally cap prices at round numbers" },
      { id: "c", text: "Round numbers have lower trading fees" },
      { id: "d", text: "They are the only prices algorithms can use" },
    ],
    correctId: "a",
    explanation:
      "Round numbers are psychological magnets — people place orders and set targets/stops at them, so buying and selling **clusters** there, creating S/R.",
  },
  {
    id: "support-resistance-depth.q4",
    lessonSlug: "support-resistance-depth",
    type: "single",
    difficulty: "easy",
    tags: ["technical", "support-resistance", "breakout"],
    prompt: "What best defines a credible **breakout** of a resistance level?",
    choices: [
      { id: "a", text: "Any intrabar touch above the level" },
      { id: "b", text: "A decisive close beyond the level, ideally on strong volume" },
      { id: "c", text: "A single tick above the level on any volume" },
      { id: "d", text: "Price approaching the level without reaching it" },
    ],
    correctId: "b",
    explanation:
      "A real breakout is a **decisive close** beyond the level, preferably with strong volume — not a brief intrabar spike that closes back inside.",
  },
  {
    id: "support-resistance-depth.q5",
    lessonSlug: "support-resistance-depth",
    type: "single",
    difficulty: "easy",
    tags: ["technical", "support-resistance", "zone"],
    prompt: "Support and resistance are best thought of as…",
    choices: [
      { id: "a", text: "Exact, razor-thin price lines" },
      { id: "b", text: "Zones or bands around a price" },
      { id: "c", text: "Fixed percentages of market cap" },
      { id: "d", text: "Only valid on weekly charts" },
    ],
    correctId: "b",
    explanation:
      "S/R are **zones**, not exact lines. Closes of `49.90`, `50.10`, and `49.95` all belong to the same `$50` resistance band.",
  },
  {
    id: "support-resistance-depth.q6",
    lessonSlug: "support-resistance-depth",
    type: "single",
    difficulty: "medium",
    tags: ["technical", "support-resistance", "touches"],
    prompt: "How does the number of times a level is tested affect its strength?",
    choices: [
      { id: "a", text: "More touches generally strengthen it, but too many tests can weaken it" },
      { id: "b", text: "Each touch always makes it permanently stronger" },
      { id: "c", text: "Touches have no effect on a level" },
      { id: "d", text: "A level is strongest after exactly one touch" },
    ],
    correctId: "a",
    explanation:
      "Repeated touches confirm a level matters — but each test consumes some of the orders defending it, so a level tested *too* many times can eventually give way.",
  },
  {
    id: "support-resistance-depth.q7",
    lessonSlug: "support-resistance-depth",
    type: "single",
    difficulty: "hard",
    tags: ["technical", "support-resistance", "scenario", "trends"],
    prompt:
      "In a powerful downtrend, price slices through three levels that everyone called \"strong support\" with barely a bounce. What does this show?",
    choices: [
      { id: "a", text: "S/R can be overridden by strong trend momentum" },
      { id: "b", text: "Support always holds, so the chart must be wrong" },
      { id: "c", text: "The supports will definitely cause a reversal soon" },
      { id: "d", text: "Volume is irrelevant in downtrends" },
    ],
    correctId: "a",
    explanation:
      "In a strong trend, momentum can cut straight through S/R with little reaction. Levels are probabilistic zones, not guarantees — a forceful trend overrides them.",
  },
  {
    id: "support-resistance-depth.q8",
    lessonSlug: "support-resistance-depth",
    type: "single",
    difficulty: "hard",
    tags: ["technical", "support-resistance", "misconception", "stop-hunt"],
    prompt: "Why isn't an intrabar pierce of a level enough to confirm a break?",
    choices: [
      { id: "a", text: "Stop-hunts and liquidity grabs can briefly pierce a level then reverse" },
      { id: "b", text: "Intrabar pierces are illegal" },
      { id: "c", text: "Price can never move intrabar" },
      { id: "d", text: "A pierce always confirms a real breakout" },
    ],
    correctId: "a",
    explanation:
      "A wick through a level often reflects a **stop-hunt** or liquidity grab that reverses, not a real break. Confirmation requires a *close* beyond the level — ideally with volume or a successful retest.",
  },
];

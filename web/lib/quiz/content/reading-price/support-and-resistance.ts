import type { Question } from "@/lib/quiz/types";

// Quiz for the "Support & Resistance" lesson.
export const questions: Question[] = [
  {
    id: "support-and-resistance.q1",
    lessonSlug: "support-and-resistance",
    type: "single",
    difficulty: "easy",
    tags: ["support-resistance", "basics"],
    prompt: "**Resistance** is best described as…",
    choices: [
      { id: "a", text: "A floor where buyers step in" },
      { id: "b", text: "A ceiling where sellers tend to step in" },
      { id: "c", text: "The number of shares traded" },
      { id: "d", text: "The general direction of price" },
    ],
    correctId: "b",
    explanation:
      "**Resistance** is a price area where **sellers tend to step in**, acting like a ceiling over the price.",
  },
  {
    id: "support-and-resistance.q2",
    lessonSlug: "support-and-resistance",
    type: "single",
    difficulty: "easy",
    tags: ["support-resistance", "basics"],
    prompt: "**Support** acts like a…",
    choices: [
      { id: "a", text: "Ceiling where sellers cap the price" },
      { id: "b", text: "Floor where buyers tend to step in" },
      { id: "c", text: "Gap in the chart" },
      { id: "d", text: "Volume spike" },
    ],
    correctId: "b",
    explanation:
      "**Support** is a price area where **buyers tend to step in**, acting like a floor under the price.",
  },
  {
    id: "support-and-resistance.q3",
    lessonSlug: "support-and-resistance",
    type: "single",
    difficulty: "easy",
    tags: ["support-resistance", "vocab"],
    prompt: "When price reaches a level and reverses away from it, that's called a…",
    choices: [
      { id: "a", text: "Breakout" },
      { id: "b", text: "Bounce" },
      { id: "c", text: "Gap" },
      { id: "d", text: "Spike" },
    ],
    correctId: "b",
    explanation:
      "A **bounce** is when price hits a level and turns back away from it.",
  },
  {
    id: "support-and-resistance.q4",
    lessonSlug: "support-and-resistance",
    type: "single",
    difficulty: "medium",
    tags: ["support-resistance", "why"],
    prompt: "Why do support and resistance levels tend to form?",
    choices: [
      { id: "a", text: "Because traders react to remembered past prices" },
      { id: "b", text: "Because exchanges set fixed price limits" },
      { id: "c", text: "Because companies announce them in advance" },
      { id: "d", text: "Because of a law that prices can't cross them", feedback: "Nothing forbids crossing — these are behavioral tendencies, not rules." },
    ],
    correctId: "a",
    explanation:
      "Levels form largely because traders **react to past prices** — that shared memory becomes self-reinforcing.",
  },
  {
    id: "support-and-resistance.q5",
    lessonSlug: "support-and-resistance",
    type: "single",
    difficulty: "medium",
    tags: ["support-resistance", "zones"],
    prompt: "Are support and resistance exact prices?",
    choices: [
      { id: "a", text: "Yes — they are precise lines a stock can't cross" },
      { id: "b", text: "No — they are approximate zones, and prices break them regularly" },
      { id: "c", text: "Yes — but only on daily charts" },
      { id: "d", text: "No — they only exist during earnings" },
    ],
    correctId: "b",
    explanation:
      "They are **zones**, not exact lines, and prices break through them often. They mark where reversals are **more likely**, not certain.",
  },
  {
    id: "support-and-resistance.q6",
    lessonSlug: "support-and-resistance",
    type: "single",
    difficulty: "medium",
    tags: ["support-resistance", "breakout"],
    prompt: "A **breakout** is…",
    choices: [
      { id: "a", text: "A bounce off support" },
      { id: "b", text: "A decisive move through a support or resistance level" },
      { id: "c", text: "A day with no trading" },
      { id: "d", text: "A drop in volume" },
    ],
    correctId: "b",
    explanation:
      "A **breakout** is a decisive move that pushes through a support or resistance level.",
  },
  {
    id: "support-and-resistance.q7",
    lessonSlug: "support-and-resistance",
    type: "single",
    difficulty: "medium",
    tags: ["support-resistance", "scenario"],
    prompt:
      "A stock bounces near `$100` three separate times, then keeps stalling near `$120`. What are `$100` and `$120` acting as?",
    choices: [
      { id: "a", text: "`$100` is resistance and `$120` is support" },
      { id: "b", text: "`$100` is support and `$120` is resistance" },
      { id: "c", text: "Both are support" },
      { id: "d", text: "Both are resistance" },
    ],
    correctId: "b",
    explanation:
      "Repeated bounces at `$100` make it **support** (a floor); repeated stalls at `$120` make it **resistance** (a ceiling).",
  },
  {
    id: "support-and-resistance.q8",
    lessonSlug: "support-and-resistance",
    type: "single",
    difficulty: "hard",
    tags: ["support-resistance", "role-reversal", "application"],
    prompt:
      "A stock breaks above `$50` on heavy volume, then pulls back and holds steady right at `$50`. What's happening?",
    choices: [
      { id: "a", text: "Old resistance at `$50` has become new support (role reversal)" },
      { id: "b", text: "The breakout has failed" },
      { id: "c", text: "`$50` is now permanent resistance forever" },
      { id: "d", text: "Volume caused a data glitch", feedback: "Heavy volume confirming a breakout is normal, not an error." },
    ],
    correctId: "a",
    explanation:
      "After a decisive break, the old `$50` resistance often flips to act as new **support** — a classic **role reversal**.",
  },
  {
    id: "support-and-resistance.q9",
    lessonSlug: "support-and-resistance",
    type: "single",
    difficulty: "hard",
    tags: ["support-resistance", "tendency", "application"],
    prompt:
      "A stock has held support at `$30` for months, then **major bad news** hits. What's the soundest expectation?",
    choices: [
      { id: "a", text: "Support will always hold no matter the news" },
      { id: "b", text: "A strong catalyst on heavy volume can break support — these levels are tendencies, not guarantees" },
      { id: "c", text: "The price legally cannot fall below `$30`" },
      { id: "d", text: "News has no effect on support" },
    ],
    correctId: "b",
    explanation:
      "Support shows where buyers *tend* to step in, but a strong catalyst on heavy volume can break it. These are **tendencies, not guarantees**.",
  },
];

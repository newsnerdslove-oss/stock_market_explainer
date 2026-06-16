import type { Question } from "@/lib/quiz/types";

// Quiz for the "Volume Basics" lesson.
export const questions: Question[] = [
  {
    id: "volume-basics.q1",
    lessonSlug: "volume-basics",
    type: "single",
    difficulty: "easy",
    tags: ["volume", "basics"],
    prompt: "Volume measures…",
    choices: [
      { id: "a", text: "The dollar value of a company" },
      { id: "b", text: "The number of shares traded in a period" },
      { id: "c", text: "The number of people who own the stock" },
      { id: "d", text: "How much the price moved" },
    ],
    correctId: "b",
    explanation:
      "**Volume** is the number of **shares traded** during a period — not dollars, not people.",
  },
  {
    id: "volume-basics.q2",
    lessonSlug: "volume-basics",
    type: "single",
    difficulty: "easy",
    tags: ["volume", "chart"],
    prompt: "Where is volume usually shown on a price chart?",
    choices: [
      { id: "a", text: "As a line above the price" },
      { id: "b", text: "As bars below the price" },
      { id: "c", text: "Inside each candle" },
      { id: "d", text: "It isn't shown on charts" },
    ],
    correctId: "b",
    explanation:
      "Volume is typically drawn as **volume bars** underneath the price, one bar per period.",
  },
  {
    id: "volume-basics.q3",
    lessonSlug: "volume-basics",
    type: "single",
    difficulty: "easy",
    tags: ["volume", "spike"],
    prompt: "Which event most commonly causes a **volume spike**?",
    choices: [
      { id: "a", text: "A quiet mid-afternoon with no news" },
      { id: "b", text: "An earnings report" },
      { id: "c", text: "A market holiday" },
      { id: "d", text: "A weekend" },
    ],
    correctId: "b",
    explanation:
      "Volume tends to surge around **earnings and news**, when many traders react at once.",
  },
  {
    id: "volume-basics.q4",
    lessonSlug: "volume-basics",
    type: "single",
    difficulty: "medium",
    tags: ["volume", "confirmation"],
    prompt: "A stock rises on **high** volume. Compared with the same rise on low volume, this is generally…",
    choices: [
      { id: "a", text: "Weaker and more likely to fizzle" },
      { id: "b", text: "Stronger and more reliable, as a tendency" },
      { id: "c", text: "Exactly the same in meaning" },
      { id: "d", text: "A guaranteed signal the price keeps climbing", feedback: "Volume raises the odds of conviction but guarantees nothing." },
    ],
    correctId: "b",
    explanation:
      "A rise on high volume suggests broad **conviction**, so it tends to be more reliable. That's a tendency, not a guarantee.",
  },
  {
    id: "volume-basics.q5",
    lessonSlug: "volume-basics",
    type: "single",
    difficulty: "medium",
    tags: ["volume", "misconception"],
    prompt: "Does high volume always mean the price is going **up**?",
    choices: [
      { id: "a", text: "Yes — heavy volume always pushes prices higher" },
      { id: "b", text: "No — volume measures activity, not direction; it can be heavy selling" },
      { id: "c", text: "Yes — buyers always outnumber sellers on busy days" },
      { id: "d", text: "No — high volume always means the price is falling" },
    ],
    correctId: "b",
    explanation:
      "Volume measures **activity, not direction**. A high-volume day can be powerful **selling** that drives the price down.",
  },
  {
    id: "volume-basics.q6",
    lessonSlug: "volume-basics",
    type: "single",
    difficulty: "medium",
    tags: ["volume", "counting"],
    prompt: "A single large institution places one huge order. What does that do to volume?",
    choices: [
      { id: "a", text: "Nothing — volume only counts the number of distinct traders" },
      { id: "b", text: "It can add a large amount, since volume counts shares, not people" },
      { id: "c", text: "It lowers volume because it's just one party" },
      { id: "d", text: "It only counts if many small traders also trade" },
    ],
    correctId: "b",
    explanation:
      "Volume counts **shares**, not participants — so one institution can create enormous volume by itself.",
  },
  {
    id: "volume-basics.q7",
    lessonSlug: "volume-basics",
    type: "single",
    difficulty: "medium",
    tags: ["volume", "scenario"],
    prompt:
      "A stock usually trades about **1M shares/day**. Today it climbs **+6% on 5M shares**. The most reasonable read is…",
    choices: [
      { id: "a", text: "There's real conviction behind the move (5× average volume)" },
      { id: "b", text: "The move is weak and likely to fade" },
      { id: "c", text: "Volume is irrelevant to the move" },
      { id: "d", text: "The price must reverse tomorrow" },
    ],
    correctId: "a",
    explanation:
      "Five times the **average volume** behind a `+6%` move signals strong participation and conviction.",
  },
  {
    id: "volume-basics.q8",
    lessonSlug: "volume-basics",
    type: "single",
    difficulty: "hard",
    tags: ["volume", "scenario", "application"],
    prompt:
      "A stock drops **−4% on 4× its normal volume**. What does the volume most likely tell you?",
    choices: [
      { id: "a", text: "The selling has real conviction behind it" },
      { id: "b", text: "The drop is meaningless because volume only confirms gains" },
      { id: "c", text: "Buyers are clearly in control" },
      { id: "d", text: "Nothing — volume can't apply to down moves", feedback: "Volume confirms moves in either direction, including declines." },
    ],
    correctId: "a",
    explanation:
      "Heavy volume on a decline points to **conviction in the selling**. Volume confirms moves in **both** directions, up and down.",
  },
  {
    id: "volume-basics.q9",
    lessonSlug: "volume-basics",
    type: "single",
    difficulty: "hard",
    tags: ["volume", "liquidity", "application"],
    prompt:
      "Two stocks rise the same amount. One trades millions of shares daily; the other trades only a few thousand. What's a fair takeaway about the high-volume stock?",
    choices: [
      { id: "a", text: "It is more liquid, so its move reflects broader participation" },
      { id: "b", text: "It is guaranteed to keep rising" },
      { id: "c", text: "Its higher volume makes it more expensive" },
      { id: "d", text: "Volume tells you nothing about liquidity" },
    ],
    correctId: "a",
    explanation:
      "Higher volume generally means more **liquidity** and broader participation — but it's never a guarantee of where the price goes next.",
  },
];

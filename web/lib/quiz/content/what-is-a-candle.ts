import type { Question } from "@/lib/quiz/types";

// Quiz for the "What is a candlestick?" lesson.
export const questions: Question[] = [
  {
    id: "what-is-a-candle.q1",
    lessonSlug: "what-is-a-candle",
    type: "single",
    difficulty: "easy",
    tags: ["candlesticks"],
    prompt: "How many prices does a single candlestick pack into its shape?",
    choices: [
      { id: "a", text: "One — the closing price", feedback: "That's a *line* chart. A candle carries more." },
      { id: "b", text: "Two — the open and the close" },
      { id: "c", text: "Four — open, high, low, and close" },
      { id: "d", text: "Four — open, close, volume, and time" },
    ],
    correctId: "c",
    explanation:
      "Each candle encodes **four** prices for its period: the **open**, **high**, **low**, and **close**. Volume and time aren't part of the candle's body/wick shape.",
  },
  {
    id: "what-is-a-candle.q2",
    lessonSlug: "what-is-a-candle",
    type: "single",
    difficulty: "medium",
    tags: ["candlesticks", "body"],
    prompt: "On a **green** candle, where is the **open** price?",
    choices: [
      { id: "a", text: "At the bottom of the body" },
      { id: "b", text: "At the top of the body", feedback: "That's the open on a *red* candle — green flips it." },
      { id: "c", text: "At the tip of the upper wick" },
      { id: "d", text: "At the tip of the lower wick" },
    ],
    correctId: "a",
    explanation:
      "A candle is green when the close is **above** the open, so the open sits at the **bottom** of the body and the close at the top. On a red candle it's reversed.",
  },
  {
    id: "what-is-a-candle.q3",
    lessonSlug: "what-is-a-candle",
    type: "single",
    difficulty: "easy",
    tags: ["candlesticks", "wick"],
    prompt: "The thin line reaching above or below the body is called the…",
    choices: [
      { id: "a", text: "Body" },
      { id: "b", text: "Wick (or shadow)" },
      { id: "c", text: "Spread" },
      { id: "d", text: "Range" },
    ],
    correctId: "b",
    explanation:
      "The thin lines are **wicks** (also called shadows). They reach out to the **high** and **low**; the thick **body** spans open-to-close.",
  },
  {
    id: "what-is-a-candle.q4",
    lessonSlug: "what-is-a-candle",
    type: "single",
    difficulty: "medium",
    tags: ["candlesticks", "wick", "rejection"],
    prompt: "What does a **long upper wick** tell you about the period?",
    choices: [
      { id: "a", text: "Price reached a high but didn't stay there" },
      { id: "b", text: "The period lasted longer than usual", feedback: "Wick length is about *price*, not *time*." },
      { id: "c", text: "Trading volume was unusually high" },
      { id: "d", text: "The open was far above the close" },
    ],
    correctId: "a",
    explanation:
      "A long wick means price **traveled there but snapped back** — it reached that high during the period but closed away from it. Long wicks are the classic sign of *rejection*.",
  },
  {
    id: "what-is-a-candle.q5",
    lessonSlug: "what-is-a-candle",
    type: "single",
    difficulty: "easy",
    tags: ["candlesticks", "color"],
    prompt: "A candle is drawn **red**. What does that tell you?",
    choices: [
      { id: "a", text: "The close was below the open — price fell over the period" },
      { id: "b", text: "The close was above the open — price rose", feedback: "That would be a *green* candle." },
      { id: "c", text: "The high was below the low" },
      { id: "d", text: "The period had no trading" },
    ],
    correctId: "a",
    explanation:
      "**Red** (or black) means the close finished **below** the open — price fell. Green means the close was above the open. The body's color is just open-vs-close direction.",
  },
  {
    id: "what-is-a-candle.q6",
    lessonSlug: "what-is-a-candle",
    type: "single",
    difficulty: "hard",
    tags: ["candlesticks", "body", "application"],
    prompt:
      "A candle **opens at $50**, dips to **$48**, runs up to **$55**, and **closes at $53**. Which span is its **body**?",
    choices: [
      { id: "a", text: "$50 → $53 (open to close)" },
      { id: "b", text: "$48 → $55 (low to high)", feedback: "That's the wick span — the full range, not the body." },
      { id: "c", text: "$50 → $55 (open to high)" },
      { id: "d", text: "$48 → $53 (low to close)" },
    ],
    correctId: "a",
    explanation:
      "The **body** always spans **open → close** — here `$50` to `$53` (green, since the close is above the open). The `$48`–`$55` low-to-high range is drawn by the **wicks**, not the body.",
  },
];

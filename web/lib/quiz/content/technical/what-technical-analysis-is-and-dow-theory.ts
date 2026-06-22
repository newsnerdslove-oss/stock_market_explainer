import type { Question } from "@/lib/quiz/types";

// Quiz for the "What Technical Analysis Is + Dow Theory" lesson.
export const questions: Question[] = [
  {
    id: "what-technical-analysis-is-and-dow-theory.q1",
    lessonSlug: "what-technical-analysis-is-and-dow-theory",
    type: "single",
    difficulty: "easy",
    tags: ["technical", "premises"],
    prompt: "Which of these is one of the **three premises** of technical analysis?",
    choices: [
      { id: "a", text: "Price discounts everything — all known information is already in the price" },
      { id: "b", text: "Intrinsic value can be computed exactly from earnings", feedback: "That's the fundamentalist's goal, not a premise of technical analysis." },
      { id: "c", text: "Markets are perfectly random with no exploitable trends" },
      { id: "d", text: "News always moves price before traders can react" },
    ],
    correctId: "a",
    explanation:
      "The three premises are: **price discounts everything**, **prices move in trends**, and **history tends to repeat**. Premise (a) is the first of these.",
  },
  {
    id: "what-technical-analysis-is-and-dow-theory.q2",
    lessonSlug: "what-technical-analysis-is-and-dow-theory",
    type: "single",
    difficulty: "medium",
    tags: ["technical", "technician", "fundamentalist"],
    prompt: "How do a **technician** and a **fundamentalist** differ?",
    choices: [
      { id: "a", text: "The technician estimates intrinsic value; the fundamentalist reads charts" },
      { id: "b", text: "The technician studies the *effect* (the chart); the fundamentalist studies the *cause* (value)" },
      { id: "c", text: "They use identical methods with different names" },
      { id: "d", text: "The fundamentalist only trades intraday; the technician only invests long-term" },
    ],
    correctId: "b",
    explanation:
      "A fundamentalist studies the **cause** of a move — earnings, financials, the economy — to estimate intrinsic value. A technician studies the **effect** — the price chart itself.",
  },
  {
    id: "what-technical-analysis-is-and-dow-theory.q3",
    lessonSlug: "what-technical-analysis-is-and-dow-theory",
    type: "single",
    difficulty: "medium",
    tags: ["technical", "dow-theory", "trends"],
    prompt: "In Dow Theory, the **primary trend** is best described as…",
    choices: [
      { id: "a", text: "Day-to-day noise lasting days to weeks" },
      { id: "b", text: "A counter-move against the larger trend lasting weeks to months" },
      { id: "c", text: "The major, long-term direction lasting months to years — the 'tide'" },
      { id: "d", text: "A single trading session's range" },
    ],
    correctId: "c",
    explanation:
      "The **primary** trend is the major, long-term direction (months to years). The **secondary** trend is an intermediate counter-move (weeks to months), and the **minor** trend is short-term noise (days to weeks).",
  },
  {
    id: "what-technical-analysis-is-and-dow-theory.q4",
    lessonSlug: "what-technical-analysis-is-and-dow-theory",
    type: "single",
    difficulty: "medium",
    tags: ["technical", "dow-theory", "confirmation"],
    prompt: "Under Dow Theory, a valid primary-trend signal requires that…",
    choices: [
      { id: "a", text: "The Industrial and Transportation averages confirm each other" },
      { id: "b", text: "Only the Industrial average makes a new high" },
      { id: "c", text: "Bond yields and the Industrial average diverge" },
      { id: "d", text: "The minor trend agrees with the secondary trend", feedback: "Dow Theory's confirmation rule is about the two averages, not the minor/secondary trends." },
    ],
    correctId: "a",
    explanation:
      "Dow's confirmation rule: the **Industrial** and **Transportation** averages must move together. If only one makes a new high, the signal is *unconfirmed* and suspect.",
  },
  {
    id: "what-technical-analysis-is-and-dow-theory.q5",
    lessonSlug: "what-technical-analysis-is-and-dow-theory",
    type: "single",
    difficulty: "medium",
    tags: ["technical", "dow-theory", "phases"],
    prompt: "Which lists the three phases of a primary **bull** market in order?",
    choices: [
      { id: "a", text: "Panic → distribution → accumulation" },
      { id: "b", text: "Accumulation → public participation → excess (distribution)" },
      { id: "c", text: "Public participation → accumulation → panic" },
      { id: "d", text: "Excess → accumulation → public participation" },
    ],
    correctId: "b",
    explanation:
      "A bull market runs **accumulation** (informed buying while sentiment is grim) → **public participation** (the crowd piles in) → **excess/distribution** (euphoria peaks, smart money sells).",
  },
  {
    id: "what-technical-analysis-is-and-dow-theory.q6",
    lessonSlug: "what-technical-analysis-is-and-dow-theory",
    type: "single",
    difficulty: "medium",
    tags: ["technical", "dow-theory", "trend-persistence"],
    prompt: "Dow Theory holds that a trend remains in force until…",
    choices: [
      { id: "a", text: "The first down day appears" },
      { id: "b", text: "A single average wobbles intraday" },
      { id: "c", text: "There is clear, confirmed evidence it has reversed" },
      { id: "d", text: "Volume returns to its average" },
    ],
    correctId: "c",
    explanation:
      "A trend **persists until a clear reversal** — decisive, confirmed evidence (not a single wobble or retracement) is needed before concluding the primary trend has turned.",
  },
  {
    id: "what-technical-analysis-is-and-dow-theory.q7",
    lessonSlug: "what-technical-analysis-is-and-dow-theory",
    type: "single",
    difficulty: "hard",
    tags: ["technical", "dow-theory", "volume", "scenario"],
    prompt:
      "The Industrial average makes a new high, but the Transportation average fails to confirm and volume on the advance is shrinking. Under Dow Theory, the soundest read is…",
    choices: [
      { id: "a", text: "An unconfirmed signal with weak volume — treat the new high as suspect" },
      { id: "b", text: "A fully confirmed bull signal to buy aggressively" },
      { id: "c", text: "Proof the bear market has begun" },
      { id: "d", text: "Irrelevant, since only the Industrial average matters" },
    ],
    correctId: "a",
    explanation:
      "Without the **Transports confirming** and with volume *contracting* rather than expanding in the trend's direction, Dow Theory flags this as an **unconfirmed**, low-conviction move — a reason for caution, not a clean signal.",
  },
];

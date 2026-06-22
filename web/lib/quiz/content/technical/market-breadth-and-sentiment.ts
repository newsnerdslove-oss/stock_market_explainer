import type { Question } from "@/lib/quiz/types";

// Quiz for the "Market Breadth & Sentiment" lesson.
export const questions: Question[] = [
  {
    id: "market-breadth-and-sentiment.q1",
    lessonSlug: "market-breadth-and-sentiment",
    type: "single",
    difficulty: "easy",
    tags: ["technical", "breadth", "advance-decline"],
    prompt: "How is the **advance/decline line** built?",
    choices: [
      { id: "a", text: "A running cumulative total of (advancing stocks − declining stocks) each day" },
      { id: "b", text: "The index's closing price minus its opening price" },
      { id: "c", text: "Total volume on up days minus volume on down days", feedback: "That's closer to OBV — the A/D line counts the *number of stocks* advancing vs. declining, not volume." },
      { id: "d", text: "The ratio of put volume to call volume" },
    ],
    correctId: "a",
    explanation:
      "The A/D line keeps a running total of advances minus declines, measuring how *many* stocks participate — breadth — rather than what the index price alone is doing.",
  },
  {
    id: "market-breadth-and-sentiment.q2",
    lessonSlug: "market-breadth-and-sentiment",
    type: "single",
    difficulty: "medium",
    tags: ["technical", "breadth", "divergence"],
    prompt:
      "An index prints a new high, but the **A/D line** makes a *lower* high. What does this most likely indicate?",
    choices: [
      { id: "a", text: "Broad confirmation that the rally is strong and healthy", feedback: "Confirmation would be the A/D line rising *with* the index. Here it's lagging, which is the opposite." },
      { id: "b", text: "A guaranteed crash within days" },
      { id: "c", text: "A breadth divergence — the rally is narrowing and weakening" },
      { id: "d", text: "That short interest must be falling" },
    ],
    correctId: "c",
    explanation:
      "When the index makes a new high but the A/D line doesn't, fewer stocks are carrying the move — a **breadth divergence**. It flags a narrowing, weakening advance, though it gives no precise timing.",
  },
  {
    id: "market-breadth-and-sentiment.q3",
    lessonSlug: "market-breadth-and-sentiment",
    type: "single",
    difficulty: "medium",
    tags: ["technical", "sentiment", "short-interest", "contrarian"],
    prompt:
      "Under the classic **short interest theory**, why is *high* short interest considered **bullish**?",
    choices: [
      { id: "a", text: "Every short position must eventually be bought back to cover — latent future buying demand" },
      { id: "b", text: "High short interest proves the company's fundamentals are strong" },
      { id: "c", text: "Shorts pay dividends that push the price up" },
      { id: "d", text: "It means most investors are already long the stock", feedback: "Short interest measures *shorts*, not longs — and the theory turns on those shorts needing to buy back later." },
    ],
    correctId: "a",
    explanation:
      "Short interest theory is **contrarian**: every open short must eventually buy the stock to close. A large short interest is therefore a reservoir of future buying that can fuel a **short squeeze** if price rises.",
  },
  {
    id: "market-breadth-and-sentiment.q4",
    lessonSlug: "market-breadth-and-sentiment",
    type: "single",
    difficulty: "medium",
    tags: ["technical", "regulation", "short-interest", "finra"],
    prompt: "How often does **FINRA** currently require firms to report short interest positions?",
    choices: [
      { id: "a", text: "Once every trading day in real time" },
      { id: "b", text: "Twice a month — around the 15th and the last business day" },
      { id: "c", text: "Once a quarter with the company's earnings" },
      { id: "d", text: "Once a year on December 31", feedback: "Short interest is reported far more frequently than annually — twice each month under current FINRA rules." },
    ],
    correctId: "b",
    explanation:
      "FINRA requires short interest to be reported **twice a month**: as of the settlement date on or before the 15th and as of the last business day of the month, due by 6 p.m. ET on the second business day after the reporting settlement date.",
  },
  {
    id: "market-breadth-and-sentiment.q5",
    lessonSlug: "market-breadth-and-sentiment",
    type: "single",
    difficulty: "medium",
    tags: ["technical", "sentiment", "odd-lot", "contrarian"],
    prompt:
      "The **odd-lot theory** is a contrarian gauge. If small odd-lot traders are heavily **buying**, the theory suggests…",
    choices: [
      { id: "a", text: "Strong confirmation to buy alongside them" },
      { id: "b", text: "That short interest is about to spike" },
      { id: "c", text: "Nothing — odd lots are orders of more than 100 shares", feedback: "An odd lot is *fewer* than 100 shares, the classic small-retail footprint." },
      { id: "d", text: "Caution — heavy odd-lot buying can mark a top, since the small crowd tends to be wrong at extremes" },
    ],
    correctId: "d",
    explanation:
      "Odd-lot theory says **fade the odd-lotter**. Heavy small-trader buying is read as a sign of a top, heavy selling a sign of a bottom — the premise being that the small crowd is wrong at extremes.",
  },
  {
    id: "market-breadth-and-sentiment.q6",
    lessonSlug: "market-breadth-and-sentiment",
    type: "single",
    difficulty: "medium",
    tags: ["technical", "sentiment", "put-call", "options"],
    prompt:
      "A **put/call ratio** reading well **above 1.0** means more puts than calls are trading. Read as a contrarian signal, an *extremely high* ratio suggests…",
    choices: [
      { id: "a", text: "Peak greed — a likely top", feedback: "Peak greed shows up as an extremely *low* ratio (call buying dominating), not a high one." },
      { id: "b", text: "Peak fear / bearishness — a possible bottom and rebound" },
      { id: "c", text: "That the index will keep falling, confirming the bearishness" },
      { id: "d", text: "That breadth has confirmed the rally" },
    ],
    correctId: "b",
    explanation:
      "Put/call = put volume ÷ call volume; above 1.0 is net bearish positioning. As a **contrarian** gauge, an extreme high signals peak fear — when nearly everyone is hedged or short, the path of least resistance is up (a possible bottom).",
  },
  {
    id: "market-breadth-and-sentiment.q7",
    lessonSlug: "market-breadth-and-sentiment",
    type: "single",
    difficulty: "hard",
    tags: ["technical", "sentiment", "contrarian", "scenario"],
    prompt:
      "Why do **sentiment extremes** (very high short interest, a very high put/call ratio) tend to *precede reversals* rather than confirm the trend?",
    choices: [
      { id: "a", text: "Because regulators force traders to reverse at those levels" },
      { id: "b", text: "Because sentiment data is published in real time and front-runs price" },
      { id: "c", text: "They measure positions already taken — once nearly everyone is bearish, the marginal seller is exhausted and only buying is left" },
      { id: "d", text: "Because high readings mechanically lower the index price" },
    ],
    correctId: "c",
    explanation:
      "Sentiment tools gauge positions *already taken*. At a bearish extreme, the sellers and shorts are largely committed, so the remaining flow skews toward covering and buying — which is why crowded extremes tend to mark turning points, the heart of the contrarian logic.",
  },
];

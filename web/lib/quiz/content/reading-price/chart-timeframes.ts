import type { Question } from "@/lib/quiz/types";

// Quiz for the "Chart Timeframes" lesson.
export const questions: Question[] = [
  {
    id: "chart-timeframes.q1",
    lessonSlug: "chart-timeframes",
    type: "single",
    difficulty: "easy",
    tags: ["timeframes", "basics"],
    prompt: "On a `1h` chart, each candle represents…",
    choices: [
      { id: "a", text: "One hour of trading" },
      { id: "b", text: "One trading day" },
      { id: "c", text: "One minute" },
      { id: "d", text: "One week", feedback: "That would be a weekly (`1W`) candle, not an hourly one." },
    ],
    correctId: "a",
    explanation:
      "A **timeframe** is how much time each candle covers. On a `1h` chart, every candle is **one hour** of trading.",
  },
  {
    id: "chart-timeframes.q2",
    lessonSlug: "chart-timeframes",
    type: "single",
    difficulty: "easy",
    tags: ["timeframes", "vocab"],
    prompt: "One bar or candle on a chart is called a…",
    choices: [
      { id: "a", text: "Range" },
      { id: "b", text: "Period" },
      { id: "c", text: "Spread" },
      { id: "d", text: "Trend" },
    ],
    correctId: "b",
    explanation:
      "Each candle covers one **period** — a single chunk of the chosen timeframe.",
  },
  {
    id: "chart-timeframes.q3",
    lessonSlug: "chart-timeframes",
    type: "single",
    difficulty: "easy",
    tags: ["timeframes", "noise"],
    prompt: "Compared with a daily chart, a 1-minute chart generally shows…",
    choices: [
      { id: "a", text: "More detail and more noise" },
      { id: "b", text: "Less detail and less noise" },
      { id: "c", text: "Completely different prices" },
      { id: "d", text: "The long-term trend more clearly" },
    ],
    correctId: "a",
    explanation:
      "Shorter timeframes zoom in, showing **more detail** — and with it more **noise**, the small random-looking wiggles.",
  },
  {
    id: "chart-timeframes.q4",
    lessonSlug: "chart-timeframes",
    type: "single",
    difficulty: "medium",
    tags: ["timeframes", "range"],
    prompt: "What's the difference between a chart's **timeframe** and its **range**?",
    choices: [
      { id: "a", text: "Timeframe is the time per candle; range is how far back the chart shows" },
      { id: "b", text: "They mean the same thing", feedback: "They're distinct — one is time per candle, the other is the total window shown." },
      { id: "c", text: "Range is the time per candle; timeframe is the total window" },
      { id: "d", text: "Timeframe is for stocks, range is for crypto" },
    ],
    correctId: "a",
    explanation:
      "**Timeframe** = time per candle. **Range** = how far back the chart stretches in total. A 6-month range can be shown on a daily or a weekly timeframe.",
  },
  {
    id: "chart-timeframes.q5",
    lessonSlug: "chart-timeframes",
    type: "single",
    difficulty: "medium",
    tags: ["timeframes", "intraday"],
    prompt: "Which timeframe would be described as **intraday**?",
    choices: [
      { id: "a", text: "Weekly (`1W`)" },
      { id: "b", text: "Daily (`1D`)" },
      { id: "c", text: "5-minute (`5m`)" },
      { id: "d", text: "Monthly" },
    ],
    correctId: "c",
    explanation:
      "**Intraday** means within a single trading day — timeframes shorter than one day, like `1m` or `5m`.",
  },
  {
    id: "chart-timeframes.q6",
    lessonSlug: "chart-timeframes",
    type: "single",
    difficulty: "medium",
    tags: ["timeframes", "misconception"],
    prompt: "Is a 1-minute chart more **accurate** than a daily chart of the same stock?",
    choices: [
      { id: "a", text: "Yes — shorter timeframes capture the true price better" },
      { id: "b", text: "No — both plot the same real prices; the short one just zooms in and adds noise" },
      { id: "c", text: "Yes — daily charts round the prices off" },
      { id: "d", text: "No — daily charts use made-up averages" },
    ],
    correctId: "b",
    explanation:
      "Both timeframes plot the **same real prices**. Zooming in adds **noise**, not accuracy — it doesn't make the data any more correct.",
  },
  {
    id: "chart-timeframes.q7",
    lessonSlug: "chart-timeframes",
    type: "single",
    difficulty: "medium",
    tags: ["timeframes", "scenario"],
    prompt:
      "You view a **6-month daily** chart (a smooth ~125 candles), then switch today's view to **1-minute** and it looks jagged. What changed?",
    choices: [
      { id: "a", text: "The stock suddenly became more volatile today" },
      { id: "b", text: "Only the time-per-candle changed; the underlying prices are the same" },
      { id: "c", text: "The exchange reported different prices on each chart" },
      { id: "d", text: "The daily chart was hiding errors" },
    ],
    correctId: "b",
    explanation:
      "Nothing about the prices changed — you zoomed in so each candle is one minute instead of one day, which surfaces the minute-to-minute **noise**.",
  },
  {
    id: "chart-timeframes.q8",
    lessonSlug: "chart-timeframes",
    type: "single",
    difficulty: "hard",
    tags: ["timeframes", "application"],
    prompt:
      "Someone investing for the **next several years** wants to read the big-picture trend without minute-to-minute jitter. Which timeframe fits best?",
    choices: [
      { id: "a", text: "Daily or weekly" },
      { id: "b", text: "1-minute" },
      { id: "c", text: "5-minute", feedback: "Intraday timeframes are for active trading, not a multi-year horizon." },
      { id: "d", text: "Tick-by-tick" },
    ],
    correctId: "a",
    explanation:
      "Match the timeframe to your horizon. A long-term investor leans on **daily or weekly** charts; intraday timeframes only suit active day-trading.",
  },
  {
    id: "chart-timeframes.q9",
    lessonSlug: "chart-timeframes",
    type: "single",
    difficulty: "hard",
    tags: ["timeframes", "range", "application"],
    prompt:
      "You want to see roughly **26 candles** covering a 6-month range. Which timeframe gets you there?",
    choices: [
      { id: "a", text: "1-minute" },
      { id: "b", text: "Daily — about 125 candles over 6 months" },
      { id: "c", text: "Weekly — about one candle per week" },
      { id: "d", text: "Hourly" },
    ],
    correctId: "c",
    explanation:
      "Six months is about 26 weeks, so a **weekly** timeframe gives roughly 26 candles over that range. A daily timeframe over the same range gives ~125.",
  },
];

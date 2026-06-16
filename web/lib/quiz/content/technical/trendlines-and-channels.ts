import type { Question } from "@/lib/quiz/types";

// Quiz for the "Trendlines & Channels: Drawing Valid Lines" lesson.
export const questions: Question[] = [
  {
    id: "trendlines-and-channels.q1",
    lessonSlug: "trendlines-and-channels",
    type: "single",
    difficulty: "easy",
    tags: ["technical", "trendlines"],
    prompt: "How many touch points to **draw** a trendline, and how many to **confirm** it?",
    choices: [
      { id: "a", text: "1 to draw, 2 to confirm" },
      { id: "b", text: "2 to draw, a 3rd to confirm" },
      { id: "c", text: "3 to draw, 4 to confirm" },
      { id: "d", text: "2 to draw, no confirmation needed", feedback: "Two points only define a line; a third touch is what confirms it as a real level." },
    ],
    correctId: "b",
    explanation:
      "**2 points define** a line, but a **3rd touch confirms** it — that third reversal is the evidence the market is respecting the line.",
  },
  {
    id: "trendlines-and-channels.q2",
    lessonSlug: "trendlines-and-channels",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["technical", "trendlines", "math"],
    prompt:
      "An uptrend line passes through swing lows of `$20` (week 1) and `$24` (week 3). Projected along the same slope, what is the line's value at week 5?",
    choices: [
      { id: "a", text: "$26" },
      { id: "b", text: "$28" },
      { id: "c", text: "$30", feedback: "That over-counts the slope — recheck: it's $2/week, so week 5 is $20 + $2×4." },
      { id: "d", text: "$24" },
    ],
    correctId: "b",
    explanation:
      "Slope = `($24 − $20) / (3 − 1) = $2/week`. Week 5 = `$20 + ($2 × 4) = $28`.",
  },
  {
    id: "trendlines-and-channels.q3",
    lessonSlug: "trendlines-and-channels",
    type: "single",
    difficulty: "medium",
    tags: ["technical", "channels"],
    prompt: "How do you turn a trendline into a **channel**?",
    choices: [
      { id: "a", text: "Add a parallel line along the opposite swings" },
      { id: "b", text: "Draw a second line at a 90° angle" },
      { id: "c", text: "Connect only the highest and lowest prices of the year" },
      { id: "d", text: "Use a 200-day moving average instead" },
    ],
    correctId: "a",
    explanation:
      "A channel is the trendline plus a **parallel** line across the opposite swing points — bounding price within a band.",
  },
  {
    id: "trendlines-and-channels.q4",
    lessonSlug: "trendlines-and-channels",
    type: "single",
    difficulty: "easy",
    tags: ["technical", "trendlines"],
    prompt: "An **uptrend** line is drawn by connecting…",
    choices: [
      { id: "a", text: "Rising swing lows, with price staying above the line" },
      { id: "b", text: "Falling swing highs, with price below the line", feedback: "That describes a downtrend line." },
      { id: "c", text: "The two highest closes of the period" },
      { id: "d", text: "Random points spaced evenly apart" },
    ],
    correctId: "a",
    explanation:
      "An uptrend line connects **rising swing lows**, with price staying above it. A downtrend line connects falling swing highs, with price below it.",
  },
  {
    id: "trendlines-and-channels.q5",
    lessonSlug: "trendlines-and-channels",
    type: "single",
    difficulty: "medium",
    tags: ["technical", "trendlines", "break"],
    prompt: "What counts as a genuine **trendline break**?",
    choices: [
      { id: "a", text: "A decisive close through the line, ideally on volume" },
      { id: "b", text: "Any intrabar wick that touches the line" },
      { id: "c", text: "Price approaching but not reaching the line" },
      { id: "d", text: "The line turning flat" },
    ],
    correctId: "a",
    explanation:
      "Like S/R breaks, a trendline break is a **decisive close** through the line — preferably on volume — not a brief intrabar poke.",
  },
  {
    id: "trendlines-and-channels.q6",
    lessonSlug: "trendlines-and-channels",
    type: "single",
    difficulty: "medium",
    tags: ["technical", "trendlines", "overfitting", "misconception"],
    prompt: "Why is a trendline drawn from only two touches considered weak?",
    choices: [
      { id: "a", text: "Any two points define a line, so it may be over-fit and predict nothing" },
      { id: "b", text: "Two points are mathematically impossible to connect" },
      { id: "c", text: "Two-point lines are always perfectly reliable" },
      { id: "d", text: "Trendlines require exactly five touches" },
    ],
    correctId: "a",
    explanation:
      "Two points *define* a line by geometry — that's not signal. Without a confirming third touch it's easy to **over-fit** a line to the past that means nothing going forward.",
  },
  {
    id: "trendlines-and-channels.q7",
    lessonSlug: "trendlines-and-channels",
    type: "single",
    difficulty: "hard",
    tags: ["technical", "trendlines", "scenario", "parabolic"],
    prompt:
      "A stock's uptrend line steepens until it's nearly vertical, then the move collapses quickly. What does this illustrate?",
    choices: [
      { id: "a", text: "Parabolic (near-vertical) trends are fragile and tend to break down fast" },
      { id: "b", text: "Steeper trendlines are always more durable" },
      { id: "c", text: "A vertical line guarantees the trend continues" },
      { id: "d", text: "Slope has no bearing on a trend's durability" },
    ],
    correctId: "a",
    explanation:
      "A near-vertical, **parabolic** slope is unsustainable — nothing rises straight up forever — so such moves tend to reverse sharply. A moderate slope is more durable.",
  },
  {
    id: "trendlines-and-channels.q8",
    lessonSlug: "trendlines-and-channels",
    type: "single",
    difficulty: "hard",
    tags: ["technical", "trendlines", "scenario", "chop"],
    prompt:
      "In a choppy, range-bound market, a trader keeps drawing trendlines and acting on every break, but most breaks reverse immediately. What's the lesson?",
    choices: [
      { id: "a", text: "Choppy markets produce frequent false trendline breaks" },
      { id: "b", text: "Every trendline break in chop is reliable" },
      { id: "c", text: "Trendlines work best with no confirmation" },
      { id: "d", text: "The trader should draw steeper lines" },
    ],
    correctId: "a",
    explanation:
      "Without a real trend, price pokes through trendlines repeatedly, generating **false breaks**. Trendlines are guides that work best inside an actual trend, and breaks need confirmation.",
  },
];

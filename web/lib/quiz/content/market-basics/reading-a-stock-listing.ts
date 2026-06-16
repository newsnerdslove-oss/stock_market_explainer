import type { Question } from "@/lib/quiz/types";

// Quiz for the "Tickers & Reading a Stock Listing" lesson.
export const questions: Question[] = [
  {
    id: "reading-a-stock-listing.q1",
    lessonSlug: "reading-a-stock-listing",
    type: "single",
    difficulty: "easy",
    tags: ["ticker"],
    prompt: "What is a **ticker symbol**?",
    choices: [
      { id: "a", text: "A short code that stands for a company on the exchange" },
      { id: "b", text: "The price of the most recent trade" },
      { id: "c", text: "The company's total market value" },
      { id: "d", text: "The number of shares a company has issued" },
    ],
    correctId: "a",
    explanation:
      "A **ticker** is a short code identifying a company — like `AAPL`, `MSFT`, or `TSLA`.",
  },
  {
    id: "reading-a-stock-listing.q2",
    lessonSlug: "reading-a-stock-listing",
    type: "single",
    difficulty: "easy",
    tags: ["change"],
    prompt: "On a quote, a change of `+5.00` means the stock is…",
    choices: [
      { id: "a", text: "Up 5% on the day" },
      { id: "b", text: "$5 above its previous close" },
      { id: "c", text: "Trading at exactly $5" },
      { id: "d", text: "Up $5 from this morning's open" },
    ],
    correctId: "b",
    explanation:
      "**Change** is the dollar move versus the **previous close**, so `+5.00` means `$5` above where it closed yesterday.",
  },
  {
    id: "reading-a-stock-listing.q3",
    lessonSlug: "reading-a-stock-listing",
    type: "single",
    difficulty: "easy",
    tags: ["last-price", "color"],
    prompt: "A stock quote shown in **red** indicates the stock is…",
    choices: [
      { id: "a", text: "Halted from trading" },
      { id: "b", text: "Up versus the previous close" },
      { id: "c", text: "Down versus the previous close" },
      { id: "d", text: "Trading after hours" },
    ],
    correctId: "c",
    explanation:
      "By convention, **red = down** versus the previous close and green = up. It's just a color cue.",
  },
  {
    id: "reading-a-stock-listing.q4",
    lessonSlug: "reading-a-stock-listing",
    type: "single",
    difficulty: "medium",
    tags: ["last-price", "previous-close"],
    prompt: "What does the **last price** on a quote tell you?",
    choices: [
      { id: "a", text: "The price of the most recent completed trade" },
      { id: "b", text: "The price the company set for the day" },
      { id: "c", text: "Yesterday's closing price" },
      { id: "d", text: "The lowest price the stock can fall to" },
    ],
    correctId: "a",
    explanation:
      "**Last price** is simply the price of the **most recent trade**. The prior day's final price is the *previous close*.",
  },
  {
    id: "reading-a-stock-listing.q5",
    lessonSlug: "reading-a-stock-listing",
    type: "single",
    difficulty: "medium",
    tags: ["percent-change", "comparison"],
    prompt: "Why is **percent change** often more useful than dollar change?",
    choices: [
      { id: "a", text: "It's always a larger number" },
      { id: "b", text: "It normalizes moves so you can compare stocks at different prices" },
      { id: "c", text: "It removes the effect of the previous close" },
      { id: "d", text: "It tells you the company's total value" },
    ],
    correctId: "b",
    explanation:
      "Percent change is `change ÷ previous close`, which **normalizes** the move so a `$5` swing on a `$50` stock and a `$500` stock can be compared fairly.",
  },
  {
    id: "reading-a-stock-listing.q6",
    lessonSlug: "reading-a-stock-listing",
    type: "single",
    difficulty: "medium",
    tags: ["market-closed", "real-time"],
    prompt: "After the market closes, what happens to the numbers on a quote?",
    choices: [
      { id: "a", text: "They keep updating in real time overnight" },
      { id: "b", text: "They reset to zero" },
      { id: "c", text: "They freeze at the last trade until the next session" },
      { id: "d", text: "They show tomorrow's expected price" },
    ],
    correctId: "c",
    explanation:
      "Quotes are real-time during market hours, then **freeze at the last trade** when the market is closed.",
  },
  {
    id: "reading-a-stock-listing.q7",
    lessonSlug: "reading-a-stock-listing",
    type: "single",
    difficulty: "hard",
    tags: ["percent-change", "math", "application"],
    prompt:
      "A quote reads `NVDA Last 120.00 +6.00`. What was the previous close, and what's the percent change?",
    choices: [
      { id: "a", text: "Previous close `$126.00`, about `-5%`" },
      { id: "b", text: "Previous close `$114.00`, about `+5.26%`" },
      { id: "c", text: "Previous close `$120.00`, about `+6%`" },
      { id: "d", text: "Previous close `$6.00`, about `+2000%`" },
    ],
    correctId: "b",
    explanation:
      "Last `120.00` minus the `+6.00` change gives a previous close of `$114.00`, and `6 ÷ 114 = 5.26%`.",
  },
  {
    id: "reading-a-stock-listing.q8",
    lessonSlug: "reading-a-stock-listing",
    type: "single",
    difficulty: "hard",
    tags: ["misconception", "share-price", "application"],
    prompt:
      "Stock A trades at `$40` and Stock B at `$400`. What can you conclude about the companies?",
    choices: [
      { id: "a", text: "Stock B's company is ten times larger" },
      { id: "b", text: "Stock B is a better company" },
      { id: "c", text: "Nothing about size — price per share alone doesn't tell you" },
      { id: "d", text: "Stock A is cheaper, so it's the better buy", feedback: "A lower share price doesn't make a stock 'cheaper' in value — that depends on total value, not price per share." },
    ],
    correctId: "c",
    explanation:
      "Price per share alone says **nothing** about company size. Total value = price × number of shares, so a `$40` stock could belong to a far bigger company than a `$400` one.",
  },
];

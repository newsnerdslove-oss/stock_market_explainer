import type { Question } from "@/lib/quiz/types";

// Quiz for the "Total Return" lesson.
export const questions: Question[] = [
  {
    id: "total-return.q1",
    lessonSlug: "total-return",
    type: "single",
    difficulty: "easy",
    tags: ["total-return", "definition"],
    prompt: "**Total return** measures…",
    choices: [
      { id: "a", text: "Only the change in a stock's price" },
      { id: "b", text: "The price change plus any income the investment paid" },
      { id: "c", text: "Only the dividends a stock paid", feedback: "Income is part of total return, but so is the price change — total return combines both." },
      { id: "d", text: "The broker's commission on the trade" },
    ],
    correctId: "b",
    explanation:
      "**Total return** is the complete result: `price change + income`. FINRA calls it the most accurate measure of return because it counts both pieces, not just price.",
  },
  {
    id: "total-return.q2",
    lessonSlug: "total-return",
    type: "single",
    difficulty: "easy",
    tags: ["total-return", "price-return", "contrast"],
    prompt: "How does **price return** differ from total return?",
    choices: [
      { id: "a", text: "Price return includes dividends; total return doesn't" },
      { id: "b", text: "They're identical for every stock" },
      { id: "c", text: "Price return counts only the change in price and ignores income" },
      { id: "d", text: "Price return is always larger than total return", feedback: "It's the other way around for income-paying investments — leaving out income makes price return the *smaller* figure." },
    ],
    correctId: "c",
    explanation:
      "**Price return** is just `ending price − beginning price`. It ignores dividends and interest, so for any income-paying investment it understates the true result.",
  },
  {
    id: "total-return.q3",
    lessonSlug: "total-return",
    type: "single",
    difficulty: "medium",
    tags: ["total-return", "formula"],
    prompt: "Which is the correct formula for **total return %**?",
    choices: [
      { id: "a", text: "`(ending price − beginning price) ÷ income`" },
      { id: "b", text: "`(ending price − beginning price + income) ÷ beginning price`" },
      { id: "c", text: "`(beginning price − ending price + income) ÷ ending price`" },
      { id: "d", text: "`income ÷ ending price`", feedback: "That's closer to a yield on the ending price — it leaves out the price change entirely." },
    ],
    correctId: "b",
    explanation:
      "`total return % = (ending price − beginning price + income) ÷ beginning price`. The income term is what separates it from plain price return.",
  },
  {
    id: "total-return.q4",
    lessonSlug: "total-return",
    type: "numericChoice",
    difficulty: "medium",
    unit: "%",
    tags: ["total-return", "math"],
    prompt:
      "You buy at **$100**. A year later it's at **$105** and it paid **$3** in dividends. What's your **total return**?",
    choices: [
      { id: "a", text: "3%", feedback: "That's just the dividend portion — add the $5 price gain too." },
      { id: "b", text: "5%", feedback: "That's the price return alone — you still need to add the $3 of dividends." },
      { id: "c", text: "2%" },
      { id: "d", text: "8%" },
    ],
    correctId: "d",
    explanation:
      "`($105 − $100 + $3) ÷ $100 = $8 ÷ $100 = 8%`. The price gave 5% and the dividend added 3 more.",
  },
  {
    id: "total-return.q5",
    lessonSlug: "total-return",
    type: "numericChoice",
    difficulty: "hard",
    unit: "%",
    tags: ["total-return", "math", "flat-price"],
    prompt:
      "A stock starts and ends the year at **$50** — flat price — but pays **$2** in dividends. What's its total return for the year?",
    choices: [
      { id: "a", text: "0% — the price didn't move", feedback: "Price return is 0%, but total return adds the dividend income on top of that." },
      { id: "b", text: "−4%" },
      { id: "c", text: "4%" },
      { id: "d", text: "2%" },
    ],
    correctId: "c",
    explanation:
      "`($50 − $50 + $2) ÷ $50 = $2 ÷ $50 = 4%`. A flat price chart still produced a positive total return thanks to the dividend.",
  },
  {
    id: "total-return.q6",
    lessonSlug: "total-return",
    type: "single",
    difficulty: "medium",
    tags: ["total-return", "reinvestment", "compounding"],
    prompt: "Why does **reinvesting** dividends boost long-run total return?",
    choices: [
      { id: "a", text: "The reinvested shares pay dividends too, so you earn returns on your returns" },
      { id: "b", text: "Reinvesting makes the dividend tax-free" },
      { id: "c", text: "Reinvesting raises the stock's price directly" },
      { id: "d", text: "It guarantees the price will rise", feedback: "Reinvesting compounds income; it does nothing to guarantee the share price." },
    ],
    correctId: "a",
    explanation:
      "Reinvested dividends buy more shares, which then pay their own dividends — the snowball of earning returns on prior returns is **compounding**.",
  },
  {
    id: "total-return.q7",
    lessonSlug: "total-return",
    type: "single",
    difficulty: "hard",
    tags: ["total-return", "comparison", "application"],
    prompt:
      "Why is total return the fairest way to **compare** a bond, a dividend stock, and a growth stock?",
    choices: [
      { id: "a", text: "Because bonds never change in price" },
      { id: "b", text: "Because growth stocks pay the most dividends" },
      { id: "c", text: "Because price return already includes interest", feedback: "Price return specifically excludes income — it's exactly what total return adds back." },
      { id: "d", text: "Because their returns come from different mixes of price and income, and only total return counts both" },
    ],
    correctId: "d",
    explanation:
      "A bond's gain is mostly interest, a growth stock's is mostly price, and a dividend stock splits the two. Only **total return** counts price *and* income, putting them on the same scale.",
  },
];

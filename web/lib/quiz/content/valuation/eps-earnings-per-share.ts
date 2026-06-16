import type { Question } from "@/lib/quiz/types";

// Quiz for the "Earnings per share (EPS)" lesson.
export const questions: Question[] = [
  {
    id: "eps-earnings-per-share.q1",
    lessonSlug: "eps-earnings-per-share",
    type: "single",
    difficulty: "easy",
    tags: ["valuation", "eps"],
    prompt: "Earnings per share (EPS) is calculated as…",
    choices: [
      { id: "a", text: "Net income ÷ shares outstanding" },
      { id: "b", text: "Share price ÷ net income", feedback: "Price isn't part of EPS at all — EPS is built purely from profit and share count." },
      { id: "c", text: "Net income × shares outstanding" },
      { id: "d", text: "Shares outstanding ÷ net income" },
    ],
    correctId: "a",
    explanation:
      "**EPS = net income ÷ shares outstanding** — the company's profit sliced across one share. Price doesn't enter into it.",
  },
  {
    id: "eps-earnings-per-share.q2",
    lessonSlug: "eps-earnings-per-share",
    type: "numericChoice",
    difficulty: "easy",
    unit: "$",
    tags: ["valuation", "eps", "math"],
    prompt: "A company earns `$300M` in net income and has `100M` shares outstanding. What's its EPS?",
    choices: [
      { id: "a", text: "$0.33", feedback: "That's shares ÷ income — flip it: EPS is income ÷ shares." },
      { id: "b", text: "$3.00" },
      { id: "c", text: "$30.00" },
      { id: "d", text: "$300.00" },
    ],
    correctId: "b",
    explanation:
      "`EPS = net income ÷ shares = 300 ÷ 100 = $3.00`. Each share earned three dollars of profit.",
  },
  {
    id: "eps-earnings-per-share.q3",
    lessonSlug: "eps-earnings-per-share",
    type: "numericChoice",
    difficulty: "medium",
    unit: "$",
    tags: ["valuation", "eps", "math"],
    prompt: "A company posts `$500M` in net income with `250M` shares outstanding. What is its EPS?",
    choices: [
      { id: "a", text: "$0.50", feedback: "That divides shares by income — EPS is income ÷ shares." },
      { id: "b", text: "$1.25" },
      { id: "c", text: "$2.00" },
      { id: "d", text: "$5.00" },
    ],
    correctId: "c",
    explanation:
      "`EPS = 500 ÷ 250 = $2.00`. At a $40 share price, that would give a P/E of `40 ÷ 2 = 20`.",
  },
  {
    id: "eps-earnings-per-share.q4",
    lessonSlug: "eps-earnings-per-share",
    type: "single",
    difficulty: "easy",
    tags: ["valuation", "eps", "pe"],
    prompt: "How does EPS relate to the P/E ratio?",
    choices: [
      { id: "a", text: "EPS is the denominator: P/E = price ÷ EPS" },
      { id: "b", text: "EPS is the numerator: P/E = EPS ÷ price", feedback: "It's the other way up — price goes on top, EPS on the bottom." },
      { id: "c", text: "EPS and P/E are unrelated numbers" },
      { id: "d", text: "P/E is multiplied by EPS to get the price" },
    ],
    correctId: "a",
    explanation:
      "**P/E = share price ÷ EPS.** EPS is the denominator — it's what turns a raw price into a valuation.",
  },
  {
    id: "eps-earnings-per-share.q5",
    lessonSlug: "eps-earnings-per-share",
    type: "single",
    difficulty: "easy",
    tags: ["valuation", "eps", "reporting"],
    prompt: "When a company's actual EPS comes in **below** what analysts estimated, that's called a…",
    choices: [
      { id: "a", text: "Split" },
      { id: "b", text: "Miss" },
      { id: "c", text: "Beat", feedback: "A beat is the opposite — actual EPS coming in *above* the estimate." },
      { id: "d", text: "Dividend" },
    ],
    correctId: "b",
    explanation:
      "Coming in below estimate is a **miss**; above is a **beat**. Because the market trades on expectations, even a small miss can move the stock.",
  },
  {
    id: "eps-earnings-per-share.q6",
    lessonSlug: "eps-earnings-per-share",
    type: "single",
    difficulty: "medium",
    tags: ["valuation", "eps", "misconception"],
    prompt: "A friend says \"Stock A has higher EPS than Stock B, so A is the better, more expensive stock.\" What's the flaw?",
    choices: [
      { id: "a", text: "EPS alone says nothing about value — you must compare it to the share price" },
      { id: "b", text: "Higher EPS always means a cheaper stock" },
      { id: "c", text: "EPS can't be compared between any two companies, ever" },
      { id: "d", text: "EPS only matters for unprofitable companies" },
    ],
    correctId: "a",
    explanation:
      "EPS on its own can't tell you cheap from dear. A $50 share with $5 EPS and a $5 share with $0.50 EPS both have a P/E of 10 — equally priced. You have to weigh EPS against price.",
  },
  {
    id: "eps-earnings-per-share.q7",
    lessonSlug: "eps-earnings-per-share",
    type: "single",
    difficulty: "medium",
    tags: ["valuation", "eps", "limits"],
    prompt: "What happens to the P/E ratio when a company has **negative** EPS?",
    choices: [
      { id: "a", text: "The P/E becomes very large but accurate" },
      { id: "b", text: "The P/E ratio becomes meaningless or undefined" },
      { id: "c", text: "The P/E automatically equals zero" },
      { id: "d", text: "Nothing — negative EPS makes the P/E more reliable", feedback: "A loss can't be sensibly divided into a price; it breaks the ratio rather than improving it." },
    ],
    correctId: "b",
    explanation:
      "An unprofitable company has **negative EPS**, so price ÷ EPS stops being meaningful. That's why you'll often see \"N/A\" for the P/E of a loss-making company.",
  },
  {
    id: "eps-earnings-per-share.q8",
    lessonSlug: "eps-earnings-per-share",
    type: "single",
    difficulty: "easy",
    tags: ["valuation", "eps", "reporting"],
    prompt: "How often do public companies typically report EPS?",
    choices: [
      { id: "a", text: "Quarterly" },
      { id: "b", text: "Daily" },
      { id: "c", text: "Once a decade" },
      { id: "d", text: "Only when they make a profit" },
    ],
    correctId: "a",
    explanation:
      "EPS is reported **every quarter**, with analyst estimates set beforehand so the result can be judged as a beat or a miss.",
  },
  {
    id: "eps-earnings-per-share.q9",
    lessonSlug: "eps-earnings-per-share",
    type: "single",
    difficulty: "hard",
    tags: ["valuation", "eps", "pe", "application", "scenario"],
    prompt:
      "Stock **A**: EPS `$5`, price `$150`. Stock **B**: EPS `$1`, price `$15`. Which is more expensive *per $1 of earnings*?",
    choices: [
      { id: "a", text: "Stock A — it's pricier per dollar of earnings (P/E 30 vs 15)" },
      { id: "b", text: "Stock B — its lower price tag makes it more expensive", feedback: "The dollar price tag isn't what \"expensive\" means here — compute the P/E for each." },
      { id: "c", text: "They cost the same per dollar of earnings" },
      { id: "d", text: "Stock A — because it has the higher EPS" },
    ],
    correctId: "a",
    explanation:
      "A: `150 ÷ 5 = 30`. B: `15 ÷ 1 = 15`. Stock **A** costs $30 per $1 of earnings versus $15 for B — A is the more expensive of the two, despite both having to be measured by P/E, not by EPS or price alone.",
  },
  {
    id: "eps-earnings-per-share.q10",
    lessonSlug: "eps-earnings-per-share",
    type: "single",
    difficulty: "hard",
    tags: ["valuation", "eps", "application", "scenario"],
    prompt:
      "A company's profit is flat year over year, but it bought back a chunk of its own shares. What happens to EPS?",
    choices: [
      { id: "a", text: "EPS rises, because the same profit is divided over fewer shares" },
      { id: "b", text: "EPS falls, because buybacks reduce profit" },
      { id: "c", text: "EPS is unchanged — buybacks never affect it" },
      { id: "d", text: "EPS becomes undefined" },
    ],
    correctId: "a",
    explanation:
      "EPS = net income ÷ **shares outstanding**. A buyback shrinks the share count, so flat profit divided over fewer shares lifts EPS — a reminder that EPS can move even when the underlying business doesn't.",
  },
];

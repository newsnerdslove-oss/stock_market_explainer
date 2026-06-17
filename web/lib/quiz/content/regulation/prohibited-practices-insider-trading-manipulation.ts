import type { Question } from "@/lib/quiz/types";

// Quiz for "Prohibited Practices: Insider Trading, Market Manipulation, Front-Running & Churning".
export const questions: Question[] = [
  {
    id: "prohibited-practices-insider-trading-manipulation.q1",
    lessonSlug: "prohibited-practices-insider-trading-manipulation",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "insider-trading", "regulation"],
    prompt: "What is the maximum CIVIL penalty for insider trading under §21A?",
    choices: [
      { id: "a", text: "Disgorgement of the profit only" },
      { id: "b", text: "Up to treble (`3×`) the profit gained or loss avoided" },
      { id: "c", text: "A flat `$10,000` fine" },
      { id: "d", text: "`20 years` imprisonment", feedback: "20 years is the CRIMINAL maximum; the civil maximum is up to 3× the gain/avoided loss." },
    ],
    correctId: "b",
    explanation:
      "The **civil** penalty can reach **treble (`3×`)** the profit gained or loss avoided — on top of disgorgement.",
  },
  {
    id: "prohibited-practices-insider-trading-manipulation.q2",
    lessonSlug: "prohibited-practices-insider-trading-manipulation",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "insider-trading", "criminal"],
    prompt: "Under §32(a), what are the maximum criminal penalties for an individual vs. an entity?",
    choices: [
      { id: "a", text: "Individual `$5,000,000` / `20 years`; entity `$25,000,000`" },
      { id: "b", text: "Individual `$1,000,000` / `5 years`; entity `$5,000,000`" },
      { id: "c", text: "Individual `$25,000,000`; entity `$5,000,000`" },
      { id: "d", text: "Individual `$10,000` / `1 year`; entity `$100,000`" },
    ],
    correctId: "a",
    explanation:
      "Per `§32(a)` (as amended by **Sarbanes-Oxley 2002**): an **individual** up to `$5,000,000` and/or `20 years`; an **entity** up to `$25,000,000`.",
  },
  {
    id: "prohibited-practices-insider-trading-manipulation.q3",
    lessonSlug: "prohibited-practices-insider-trading-manipulation",
    type: "numericChoice",
    difficulty: "medium",
    unit: "$",
    tags: ["fn:3", "insider-trading", "calc", "treble"],
    prompt:
      "A trader earns $200,000 on inside information. What is the maximum treble CIVIL penalty (separate from disgorgement)?",
    choices: [
      { id: "a", text: "`$200,000`" },
      { id: "b", text: "`$400,000`" },
      { id: "c", text: "`$600,000`" },
      { id: "d", text: "`$5,000,000`", feedback: "$5,000,000 is the criminal-fine maximum for an individual; the treble CIVIL penalty here is 3 × $200,000 = $600,000." },
    ],
    correctId: "c",
    explanation:
      "Treble means `3 × $200,000 = $600,000` — and that is **on top of** disgorgement of the `$200,000`. Criminal exposure (up to `$5,000,000`/`20 years`) stacks separately.",
  },
  {
    id: "prohibited-practices-insider-trading-manipulation.q4",
    lessonSlug: "prohibited-practices-insider-trading-manipulation",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "front-running", "regulation"],
    prompt: "A rep, knowing of an imminent 50,000-share customer order, trades ahead of it. Which practice and rule is this?",
    choices: [
      { id: "a", text: "Churning, under `FINRA Rule 2111`" },
      { id: "b", text: "Front-running, under `FINRA Rule 5270`" },
      { id: "c", text: "Painting the tape, under `§9(a)`" },
      { id: "d", text: "Pump-and-dump, under `Rule 10b-5`", feedback: "Trading ahead of a known large block is front-running (Rule 5270), not a price-manipulation scheme or churning." },
    ],
    correctId: "b",
    explanation:
      "Trading on knowledge of an **imminent block** (≈`10,000`+ shares) ahead of it is **front-running** under `FINRA Rule 5270`.",
  },
  {
    id: "prohibited-practices-insider-trading-manipulation.q5",
    lessonSlug: "prohibited-practices-insider-trading-manipulation",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "insider-trading", "legal-basis"],
    prompt: "What is the anti-fraud legal basis for insider-trading enforcement?",
    choices: [
      { id: "a", text: "`Exchange Act Section 10(b)` and `Rule 10b-5`" },
      { id: "b", text: "The `Securities Act of 1933`, Section 5" },
      { id: "c", text: "`FINRA Rule 3220`" },
      { id: "d", text: "The `Trust Indenture Act of 1939`" },
    ],
    correctId: "a",
    explanation:
      "Insider trading is prosecuted under the anti-fraud provisions `Section 10(b)` and `Rule 10b-5`, extended by the **misappropriation theory** (`U.S. v. O'Hagan`, 1997).",
  },
  {
    id: "prohibited-practices-insider-trading-manipulation.q6",
    lessonSlug: "prohibited-practices-insider-trading-manipulation",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "manipulation", "regulation"],
    prompt: "Which of the following is a form of market manipulation under `§9(a)`?",
    choices: [
      { id: "a", text: "Painting the tape" },
      { id: "b", text: "Recommending a lower-cost fund" },
      { id: "c", text: "Filing a Form U4 amendment" },
      { id: "d", text: "Completing the CE Regulatory Element", feedback: "Manipulation covers wash trades, matched orders, painting the tape, spoofing, etc. — not routine compliance acts." },
    ],
    correctId: "a",
    explanation:
      "**Painting the tape** is a manipulative practice under `§9(a)`, alongside wash trades, matched orders, marking the close, spoofing, and layering.",
  },
  {
    id: "prohibited-practices-insider-trading-manipulation.q7",
    lessonSlug: "prohibited-practices-insider-trading-manipulation",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "churning", "regulation"],
    prompt: "Churning is best described as which of the following?",
    choices: [
      { id: "a", text: "Excessive trading inconsistent with the customer's profile to generate commissions" },
      { id: "b", text: "Trading ahead of a large customer block order" },
      { id: "c", text: "Buying and selling to create a false impression of activity" },
      { id: "d", text: "Failing to deliver a prospectus", feedback: "That description is front-running (b) or wash trading (c); churning is excessive, commission-driven trading." },
    ],
    correctId: "a",
    explanation:
      "**Churning** (`FINRA Rule 2111` quantitative suitability / `Rule 2010`) is **excessive trading** inconsistent with the customer's profile to generate **commissions**. FINRA dropped the 'control' element in 2020.",
  },
  {
    id: "prohibited-practices-insider-trading-manipulation.q8",
    lessonSlug: "prohibited-practices-insider-trading-manipulation",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "insider-trading", "controlling-person"],
    prompt: "For a controlling person under §21A, what is the maximum civil penalty?",
    choices: [
      { id: "a", text: "The greater of `$1,000,000` or `3×` the controlled person's gain/avoided loss" },
      { id: "b", text: "Exactly `$1,000,000`, no more" },
      { id: "c", text: "`3×` the firm's annual revenue" },
      { id: "d", text: "`$25,000,000`", feedback: "$25,000,000 is the criminal entity maximum; the controlling-person civil cap is the greater of $1,000,000 or 3× the controlled person's gain." },
    ],
    correctId: "a",
    explanation:
      "Under `§21A` (added by **ITSFEA 1988**), a **controlling person** can be penalized the **greater of `$1,000,000` or `3×`** the controlled person's gain/avoided loss.",
  },
];

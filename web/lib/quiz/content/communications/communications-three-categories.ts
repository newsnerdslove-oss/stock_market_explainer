import type { Question } from "@/lib/quiz/types";

// Quiz for "Communications With the Public: Retail, Correspondence & Institutional".
// Series 7 Function 1 — every question carries the fn:1 tag.
export const questions: Question[] = [
  {
    id: "communications-three-categories.q1",
    lessonSlug: "communications-three-categories",
    type: "single",
    difficulty: "easy",
    tags: ["fn:1", "communications", "rule-2210"],
    prompt: "What number separates correspondence from a retail communication?",
    choices: [
      { id: "a", text: "`25` retail investors in any `30` calendar-day period" },
      { id: "b", text: "`25` recipients per single message" },
      { id: "c", text: "`100` retail investors in any `30` days" },
      { id: "d", text: "`25` institutional investors per quarter", feedback: "The threshold counts retail investors, not institutional, and over a rolling 30-day window." },
    ],
    correctId: "a",
    explanation:
      "The dividing line is **`25` retail investors in any `30` calendar-day period**: `25` or fewer = **correspondence**; **more than `25`** = **retail communication**.",
  },
  {
    id: "communications-three-categories.q2",
    lessonSlug: "communications-three-categories",
    type: "single",
    difficulty: "medium",
    tags: ["fn:1", "communications", "classification"],
    prompt: "The same email is sent to 26 retail investors over a three-week span. Which category is it?",
    choices: [
      { id: "a", text: "Correspondence", feedback: "26 exceeds 25 within the 30-day window, so it crosses into retail communication — the count accumulates across the period." },
      { id: "b", text: "Retail communication" },
      { id: "c", text: "Institutional communication" },
      { id: "d", text: "Exempt internal communication" },
    ],
    correctId: "b",
    explanation:
      "`26` retail investors **exceeds `25`** within the `30`-day window, so it is a **retail communication**. The count **accumulates** across the rolling period, not per message.",
  },
  {
    id: "communications-three-categories.q3",
    lessonSlug: "communications-three-categories",
    type: "single",
    difficulty: "medium",
    tags: ["fn:1", "communications", "classification"],
    prompt: "A research piece is sent only to institutional investors and excludes internal firm messages. Which category?",
    choices: [
      { id: "a", text: "Retail communication", feedback: "Recipients are all institutional, so it is institutional — not retail — regardless of how many there are." },
      { id: "b", text: "Correspondence" },
      { id: "c", text: "Institutional communication" },
      { id: "d", text: "Public appearance" },
    ],
    correctId: "c",
    explanation:
      "Distributed **only to institutional investors** and **excluding internal communications** → **institutional communication** [`2210(a)(3)`].",
  },
  {
    id: "communications-three-categories.q4",
    lessonSlug: "communications-three-categories",
    type: "single",
    difficulty: "easy",
    tags: ["fn:1", "communications", "definitions"],
    prompt: "Who is a 'retail investor' under Rule 2210?",
    choices: [
      { id: "a", text: "Only persons who currently hold an account at the firm", feedback: "Account status is irrelevant — a prospect with no account is still a retail investor." },
      { id: "b", text: "Only natural persons investing under $1 million" },
      { id: "c", text: "Anyone, including FINRA members and their registered persons" },
      { id: "d", text: "Any person other than an institutional investor, whether or not they have an account" },
    ],
    correctId: "d",
    explanation:
      "A **retail investor** is **any person other than an institutional investor**, whether or not they have an account. Account status does not matter.",
  },
  {
    id: "communications-three-categories.q5",
    lessonSlug: "communications-three-categories",
    type: "single",
    difficulty: "medium",
    tags: ["fn:1", "communications", "definitions"],
    prompt: "An employee-benefit plan qualifies as an institutional investor when it has at least how many participants?",
    choices: [
      { id: "a", text: "`100` participants" },
      { id: "b", text: "`25` participants", feedback: "25 is the correspondence headcount, not the institutional-plan threshold; plans need 100+ participants." },
      { id: "c", text: "`50` participants" },
      { id: "d", text: "`500` participants" },
    ],
    correctId: "a",
    explanation:
      "Per `2210(a)(4)` (tracking `Rule 4512(c)`), an employee-benefit or qualified plan is institutional when it has **`100` or more participants**.",
  },
  {
    id: "communications-three-categories.q6",
    lessonSlug: "communications-three-categories",
    type: "single",
    difficulty: "hard",
    tags: ["fn:1", "communications", "classification"],
    prompt: "A rep individually types and sends 30 personalized emails to 30 different retail prospects over two weeks. How is this classified?",
    choices: [
      { id: "a", text: "Correspondence — each email was one-to-one and personalized", feedback: "Personalization and one-to-one delivery do not control; the 30-recipient count over 30 days makes it a retail communication." },
      { id: "b", text: "Retail communication — 30 retail investors exceeds 25 in the 30-day window" },
      { id: "c", text: "Institutional communication" },
      { id: "d", text: "Exempt — personal emails are not communications" },
    ],
    correctId: "b",
    explanation:
      "Category turns on the **headcount**, not the medium or personalization. **`30` retail investors** in the `30`-day window **exceeds `25`** → **retail communication**.",
  },
  {
    id: "communications-three-categories.q7",
    lessonSlug: "communications-three-categories",
    type: "single",
    difficulty: "easy",
    tags: ["fn:1", "communications", "classification"],
    prompt: "A single market-commentary email goes to 20 retail prospects this month. Which category?",
    choices: [
      { id: "a", text: "Retail communication", feedback: "20 is at or below the 25-investor line within the 30-day window, so it is correspondence, not a retail communication." },
      { id: "b", text: "Institutional communication" },
      { id: "c", text: "Correspondence" },
      { id: "d", text: "Public appearance" },
    ],
    correctId: "c",
    explanation:
      "`20` retail investors is **`25` or fewer** within the `30`-day window → **correspondence** [`2210(a)(2)`].",
  },
  {
    id: "communications-three-categories.q8",
    lessonSlug: "communications-three-categories",
    type: "single",
    difficulty: "medium",
    tags: ["fn:1", "communications", "rule-2210"],
    prompt: "Which category carries the highest degree of regulation under Rule 2210?",
    choices: [
      { id: "a", text: "Correspondence", feedback: "Correspondence is less regulated — no pre-approval and excluded from filing; retail communication is the most regulated." },
      { id: "b", text: "Institutional communication" },
      { id: "c", text: "Internal communication" },
      { id: "d", text: "Retail communication" },
    ],
    correctId: "d",
    explanation:
      "**Retail communication** carries the **highest degree of regulation** — principal pre-approval and, for many products, FINRA filing.",
  },
];

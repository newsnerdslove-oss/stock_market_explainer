import type { Question } from "@/lib/quiz/types";

// Quiz for the "General Obligation vs. Revenue Bonds" lesson.
export const questions: Question[] = [
  {
    id: "go-vs-revenue-bonds.q1",
    lessonSlug: "go-vs-revenue-bonds",
    type: "numericChoice",
    difficulty: "easy",
    tags: ["fn:3", "municipal-bonds", "dscr"],
    unit: "×",
    prompt:
      "A water-system revenue bond has net revenue of `$9.0M` and annual debt service of `$7.2M`. What is the DSCR?",
    choices: [
      { id: "a", text: "0.80×", feedback: "That's debt service ÷ net revenue — the ratio is inverted." },
      { id: "b", text: "1.25×" },
      { id: "c", text: "1.80×" },
      { id: "d", text: "2.00×" },
    ],
    correctId: "b",
    explanation:
      "`DSCR = net revenue ÷ annual debt service = 9.0 ÷ 7.2 = 1.25×`. That clears a typical `1.20×` covenant.",
  },
  {
    id: "go-vs-revenue-bonds.q2",
    lessonSlug: "go-vs-revenue-bonds",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "municipal-bonds", "general-obligation"],
    prompt: "Which feature belongs to a GO bond but NOT to a typical revenue bond?",
    choices: [
      { id: "a", text: "Backed by the issuer's taxing power" },
      { id: "b", text: "Repaid from project tolls or user fees", feedback: "User fees back revenue bonds, not GO bonds." },
      { id: "c", text: "Exempt from voter approval" },
      { id: "d", text: "Not subject to any debt limit" },
    ],
    correctId: "a",
    explanation:
      "GO bonds are backed by **full faith, credit, and taxing power**, often need **voter approval**, and are subject to **debt limits**. Revenue bonds rely on project revenue only.",
  },
  {
    id: "go-vs-revenue-bonds.q3",
    lessonSlug: "go-vs-revenue-bonds",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "municipal-bonds", "flow-of-funds"],
    prompt: "Under a **net revenue pledge**, what is paid first from the flow of funds?",
    choices: [
      { id: "a", text: "Debt service, then operations & maintenance", feedback: "That order is the gross revenue pledge." },
      { id: "b", text: "The debt service reserve fund" },
      { id: "c", text: "Operations & maintenance, then debt service" },
      { id: "d", text: "A dividend to the municipality" },
    ],
    correctId: "c",
    explanation:
      "A **net revenue pledge** pays **O&M first**, then debt service. A **gross revenue pledge** flips that order, paying debt service before O&M.",
  },
  {
    id: "go-vs-revenue-bonds.q4",
    lessonSlug: "go-vs-revenue-bonds",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "municipal-bonds", "dscr"],
    unit: "×",
    prompt:
      "A toll road reports net revenue of `$18,000,000` and annual debt service of `$12,000,000`. What is the DSCR?",
    choices: [
      { id: "a", text: "1.20×" },
      { id: "b", text: "1.50×" },
      { id: "c", text: "0.67×", feedback: "That divides debt service by net revenue (12 ÷ 18) — the ratio is inverted." },
      { id: "d", text: "1.25×" },
    ],
    correctId: "b",
    explanation:
      "`DSCR = 18,000,000 ÷ 12,000,000 = 1.50×` — a healthy 50% cushion above the required debt service.",
  },
  {
    id: "go-vs-revenue-bonds.q5",
    lessonSlug: "go-vs-revenue-bonds",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:3", "municipal-bonds", "dscr"],
    unit: "×",
    prompt:
      "An airport's net revenue is `$8,400,000` and annual debt service is `$7,000,000`. What is the DSCR?",
    choices: [
      { id: "a", text: "1.10×" },
      { id: "b", text: "1.20×" },
      { id: "c", text: "1.25×" },
      { id: "d", text: "0.83×", feedback: "That divides debt service by net revenue — the ratio is upside down." },
    ],
    correctId: "b",
    explanation:
      "`DSCR = 8,400,000 ÷ 7,000,000 = 1.20×`, exactly meeting a `1.20×` covenant.",
  },
  {
    id: "go-vs-revenue-bonds.q6",
    lessonSlug: "go-vs-revenue-bonds",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "municipal-bonds", "rate-covenant"],
    prompt: "What does a **rate covenant** in a revenue bond indenture promise?",
    choices: [
      { id: "a", text: "To keep the coupon rate fixed for the bond's life" },
      { id: "b", text: "To set user rates high enough to cover O&M plus debt service and reserves" },
      { id: "c", text: "To raise taxes if revenue falls short", feedback: "Revenue bonds have no taxing power — a rate covenant adjusts user charges, not taxes." },
      { id: "d", text: "To call the bonds if DSCR exceeds 1.25×" },
    ],
    correctId: "b",
    explanation:
      "A **rate covenant** is the issuer's promise to charge enough — for `O&M + debt service` plus reserves — to keep the project self-supporting.",
  },
  {
    id: "go-vs-revenue-bonds.q7",
    lessonSlug: "go-vs-revenue-bonds",
    type: "numericChoice",
    difficulty: "hard",
    tags: ["fn:3", "municipal-bonds", "dscr"],
    unit: "×",
    prompt:
      "A revenue project collects `$20,000,000` of gross revenue, pays `$8,000,000` in O&M, and owes `$9,600,000` in annual debt service. Under a **net revenue pledge**, what is the DSCR?",
    choices: [
      { id: "a", text: "2.08×", feedback: "That uses gross revenue (20 ÷ 9.6). A net pledge subtracts O&M first." },
      { id: "b", text: "1.25×" },
      { id: "c", text: "1.50×" },
      { id: "d", text: "0.83×" },
    ],
    correctId: "b",
    explanation:
      "Net revenue `= 20,000,000 − 8,000,000 = 12,000,000`. `DSCR = 12,000,000 ÷ 9,600,000 = 1.25×`.",
  },
  {
    id: "go-vs-revenue-bonds.q8",
    lessonSlug: "go-vs-revenue-bonds",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "municipal-bonds", "misconception"],
    prompt:
      "\"Revenue bonds are riskier and GO bonds are always the safest.\" What's the best correction?",
    choices: [
      { id: "a", text: "True — GO bonds can never default" },
      { id: "b", text: "Not automatic; a strong essential-service revenue bond with high DSCR can beat a distressed municipality's GO" },
      { id: "c", text: "Revenue bonds are always safer because they avoid debt limits" },
      { id: "d", text: "The two are identical in credit risk" },
    ],
    correctId: "b",
    explanation:
      "Credit quality follows the **source of repayment and its coverage**, not the label. A robust rate covenant and high DSCR can make a revenue bond stronger than a weak GO.",
  },
];

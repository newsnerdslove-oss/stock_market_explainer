import type { Question } from "@/lib/quiz/types";

// Quiz for "Recommendations in Communications: Reasonable Basis & Conflict Disclosures".
// Series 7 Function 1 — every question carries the fn:1 tag.
export const questions: Question[] = [
  {
    id: "recommendations-required-disclosures.q1",
    lessonSlug: "recommendations-required-disclosures",
    type: "single",
    difficulty: "medium",
    tags: ["fn:1", "recommendations", "disclosures"],
    prompt: "A recommendation must disclose that the firm managed/co-managed a public offering of the security within:",
    choices: [
      { id: "a", text: "The past `3 years`", feedback: "3 years is the communications retention period; the underwriting-conflict disclosure window is the past 12 months." },
      { id: "b", text: "The past `12 months`" },
      { id: "c", text: "The past `30 days`" },
      { id: "d", text: "The past `6 months`" },
    ],
    correctId: "b",
    explanation:
      "Under `2210(d)(7)`, the firm must disclose if it was a **manager/co-manager of a public offering** of the security within the **past `12 months`**.",
  },
  {
    id: "recommendations-required-disclosures.q2",
    lessonSlug: "recommendations-required-disclosures",
    type: "single",
    difficulty: "easy",
    tags: ["fn:1", "recommendations", "reasonable-basis"],
    prompt: "Every recommendation of a specific security in a retail communication must rest on:",
    choices: [
      { id: "a", text: "A reasonable basis, with supporting info furnished or offered on request" },
      { id: "b", text: "A guarantee of the projected return", feedback: "Recommendations cannot guarantee results; they require a reasonable basis and supporting information." },
      { id: "c", text: "Pre-approval from the SEC" },
      { id: "d", text: "A signed customer suitability form" },
    ],
    correctId: "a",
    explanation:
      "The firm must have a **reasonable basis** and **provide, or offer to furnish on request**, the **supporting information**.",
  },
  {
    id: "recommendations-required-disclosures.q3",
    lessonSlug: "recommendations-required-disclosures",
    type: "single",
    difficulty: "medium",
    tags: ["fn:1", "recommendations", "disclosures"],
    prompt: "If the firm makes a market in the recommended security, the communication must:",
    choices: [
      { id: "a", text: "Stop recommending the security entirely", feedback: "Market-making does not bar the recommendation — it must simply be disclosed." },
      { id: "b", text: "File the piece 10 days before use" },
      { id: "c", text: "Convert the piece to an institutional communication" },
      { id: "d", text: "Disclose that the firm makes a market in the security" },
    ],
    correctId: "d",
    explanation:
      "The communication must **disclose** if the firm **makes a market** in the recommended security (or its underlying).",
  },
  {
    id: "recommendations-required-disclosures.q4",
    lessonSlug: "recommendations-required-disclosures",
    type: "single",
    difficulty: "hard",
    tags: ["fn:1", "recommendations", "disclosures"],
    prompt: "A firm publishes a buy recommendation on XYZ. It makes a market in XYZ and co-managed XYZ's IPO 8 months ago. What must it disclose?",
    choices: [
      { id: "a", text: "Only the market-making, since the IPO is over", feedback: "8 months is within the 12-month window, so the underwriting role must also be disclosed alongside the market-making." },
      { id: "b", text: "Neither — past underwriting is never disclosed" },
      { id: "c", text: "Both the market-making and the underwriting within the past 12 months" },
      { id: "d", text: "Only the IPO role" },
    ],
    correctId: "c",
    explanation:
      "`8 months` is **within `12 months`**, so the firm must disclose **both** the **market-making** and the **underwriting** roles, and offer the supporting information.",
  },
  {
    id: "recommendations-required-disclosures.q5",
    lessonSlug: "recommendations-required-disclosures",
    type: "single",
    difficulty: "medium",
    tags: ["fn:1", "recommendations", "disclosures"],
    prompt: "A recommendation must disclose if the firm or its officers/partners own which interest in the security?",
    choices: [
      { id: "a", text: "Only a controlling majority stake", feedback: "The disclosure is broader — it covers options, rights, or warrants, not just a controlling stake." },
      { id: "b", text: "Options, rights, or warrants to purchase the security" },
      { id: "c", text: "Any interest held by any employee's relative" },
      { id: "d", text: "Nothing about ownership need be disclosed" },
    ],
    correctId: "b",
    explanation:
      "The firm must disclose if it or its **officers/partners own options, rights, or warrants** to purchase the recommended security.",
  },
  {
    id: "recommendations-required-disclosures.q6",
    lessonSlug: "recommendations-required-disclosures",
    type: "single",
    difficulty: "medium",
    tags: ["fn:1", "recommendations", "content-standards"],
    prompt: "A recommendation in a retail communication may NOT:",
    choices: [
      { id: "a", text: "Imply past performance will recur or guarantee its results" },
      { id: "b", text: "Disclose the firm's market-making interest", feedback: "Disclosing market-making is required, not prohibited; what's barred is implying recurrence or guaranteeing results." },
      { id: "c", text: "Offer supporting information on request" },
      { id: "d", text: "Identify the specific security" },
    ],
    correctId: "a",
    explanation:
      "A recommendation **cannot imply past performance will recur** or **guarantee** results — tying back to the content standards in Lesson 3.",
  },
  {
    id: "recommendations-required-disclosures.q7",
    lessonSlug: "recommendations-required-disclosures",
    type: "single",
    difficulty: "easy",
    tags: ["fn:1", "recommendations", "disclosures"],
    prompt: "Conflict disclosures accompanying a recommendation must be:",
    choices: [
      { id: "a", text: "Placed only in a separate document on request", feedback: "Disclosures must be clear and prominent in the communication itself, not hidden or deferred." },
      { id: "b", text: "Omitted for sophisticated investors" },
      { id: "c", text: "Limited to institutional communications" },
      { id: "d", text: "Clear and prominent, not buried" },
    ],
    correctId: "d",
    explanation:
      "Conflict disclosures must be **clear and prominent**, not buried in the communication.",
  },
  {
    id: "recommendations-required-disclosures.q8",
    lessonSlug: "recommendations-required-disclosures",
    type: "single",
    difficulty: "medium",
    tags: ["fn:1", "recommendations", "scope"],
    prompt: "Which is EXCLUDED from the recommendation-disclosure requirements of Rule 2210(d)(7)?",
    choices: [
      { id: "a", text: "Any recommendation made to a retail investor", feedback: "Recommendations naming specific securities to retail investors are exactly what the rule covers; the exclusions are non-specific recommendations and certain research." },
      { id: "b", text: "Recommendations of mutual funds only" },
      { id: "c", text: "Recommendations that don't name a specific security, and certain research reports under other rules" },
      { id: "d", text: "Recommendations where the firm makes a market" },
    ],
    correctId: "c",
    explanation:
      "Excluded are **certain research reports** governed by other rules and recommendations that **don't name a specific security**.",
  },
];

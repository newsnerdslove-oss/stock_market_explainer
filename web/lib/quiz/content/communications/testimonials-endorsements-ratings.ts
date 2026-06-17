import type { Question } from "@/lib/quiz/types";

// Quiz for "Testimonials & Endorsements: FINRA Disclosures vs the SEC Marketing Rule".
// Series 7 Function 1 — every question carries the fn:1 tag.
export const questions: Question[] = [
  {
    id: "testimonials-endorsements-ratings.q1",
    lessonSlug: "testimonials-endorsements-ratings",
    type: "single",
    difficulty: "medium",
    tags: ["fn:1", "communications", "testimonials"],
    prompt: "A testimonial must be disclosed as 'paid' when the compensation exceeds:",
    choices: [
      { id: "a", text: "`$300`", feedback: "$300 is the FINRA gift limit, not the paid-testimonial threshold. The testimonial threshold is $100." },
      { id: "b", text: "`$100`" },
      { id: "c", text: "`$50`" },
      { id: "d", text: "`$1,000`" },
    ],
    correctId: "b",
    explanation:
      "Under `Rule 2210(d)(6)`, if compensation **exceeds `$100`**, the communication must disclose that it is a **paid** testimonial.",
  },
  {
    id: "testimonials-endorsements-ratings.q2",
    lessonSlug: "testimonials-endorsements-ratings",
    type: "single",
    difficulty: "hard",
    tags: ["fn:1", "communications", "testimonials", "marketing-rule"],
    prompt: "The 2022 SEC Marketing Rule 206(4)-1 on testimonials applies to:",
    choices: [
      { id: "a", text: "Broker-dealers, replacing FINRA Rule 2210(d)(6)", feedback: "This is the classic trap: 206(4)-1 is the ADVISER rule. Broker-dealer testimonials remain under FINRA Rule 2210(d)(6)." },
      { id: "b", text: "Both advisers and broker-dealers equally" },
      { id: "c", text: "Investment advisers (RIAs), not broker-dealers" },
      { id: "d", text: "Only municipal securities dealers" },
    ],
    correctId: "c",
    explanation:
      "The SEC Marketing Rule **`206(4)-1`** (compliance **Nov 4 2022**) governs **investment advisers (RIAs) only**. Broker-dealer testimonials stay under **FINRA `Rule 2210(d)(6)`** — the Series 7 answer.",
  },
  {
    id: "testimonials-endorsements-ratings.q3",
    lessonSlug: "testimonials-endorsements-ratings",
    type: "single",
    difficulty: "easy",
    tags: ["fn:1", "communications", "testimonials"],
    prompt: "Are broker-dealers allowed to use testimonials?",
    choices: [
      { id: "a", text: "No, testimonials are banned for broker-dealers", feedback: "Testimonials are not banned — FINRA permits them with disclosures under Rule 2210(d)(6)." },
      { id: "b", text: "Only for institutional communications" },
      { id: "c", text: "Only after the 2022 SEC Marketing Rule" },
      { id: "d", text: "Yes, with the required FINRA disclosures" },
    ],
    correctId: "d",
    explanation:
      "BD testimonials are **permitted with disclosures** under `Rule 2210(d)(6)` — they are **not banned**.",
  },
  {
    id: "testimonials-endorsements-ratings.q4",
    lessonSlug: "testimonials-endorsements-ratings",
    type: "single",
    difficulty: "medium",
    tags: ["fn:1", "communications", "testimonials"],
    prompt: "A performance testimonial must prominently disclose that it:",
    choices: [
      { id: "a", text: "May not be representative of others and is no guarantee of future results" },
      { id: "b", text: "Was reviewed by the SEC", feedback: "There is no SEC-review disclosure; the required points are 'not representative' and 'no guarantee of future results.'" },
      { id: "c", text: "Is exempt from Rule 2210" },
      { id: "d", text: "Reflects a guaranteed outcome" },
    ],
    correctId: "a",
    explanation:
      "A performance/advice testimonial must disclose it **may not be representative** of other customers' experience and is **no guarantee** of future performance/success.",
  },
  {
    id: "testimonials-endorsements-ratings.q5",
    lessonSlug: "testimonials-endorsements-ratings",
    type: "single",
    difficulty: "hard",
    tags: ["fn:1", "communications", "testimonials"],
    prompt: "A brokerage posts a client video praising a rep's picks and pays the client $250. The video implies the client is a 'market expert.' Which disclosures are required?",
    choices: [
      { id: "a", text: "Only that it is a paid testimonial", feedback: "The paid disclosure is needed, but so are 'not representative,' 'no guarantee,' and — because expertise is implied — the client's qualifications." },
      { id: "b", text: "Not representative, no guarantee, that it is paid (>$100), and the client's qualifications" },
      { id: "c", text: "None — client videos are exempt" },
      { id: "d", text: "Only the SEC Marketing Rule disclosures" },
    ],
    correctId: "b",
    explanation:
      "`$250` exceeds `$100` (paid disclosure), it is a performance testimonial (**not representative** + **no guarantee**), and the implied **expertise** requires disclosing the client's **qualifications**.",
  },
  {
    id: "testimonials-endorsements-ratings.q6",
    lessonSlug: "testimonials-endorsements-ratings",
    type: "single",
    difficulty: "medium",
    tags: ["fn:1", "communications", "rankings"],
    prompt: "Performance rankings used in a retail communication are permitted when they come from:",
    choices: [
      { id: "a", text: "The firm's own marketing team", feedback: "Firm-created rankings are not the independent standard — and they trigger pre-filing with FINRA." },
      { id: "b", text: "Any source, with no methodology disclosure" },
      { id: "c", text: "An independent entity using a disclosed, consistent methodology" },
      { id: "d", text: "A single satisfied customer" },
    ],
    correctId: "c",
    explanation:
      "Rankings are permitted from **independent entities** using a **disclosed, consistent methodology**; **firm-created** rankings instead trigger **pre-filing**.",
  },
  {
    id: "testimonials-endorsements-ratings.q7",
    lessonSlug: "testimonials-endorsements-ratings",
    type: "single",
    difficulty: "medium",
    tags: ["fn:1", "communications", "testimonials"],
    prompt: "A rep pays a customer $60 for a testimonial about her investment performance. Must it be disclosed as 'paid'?",
    choices: [
      { id: "a", text: "Yes — any compensation requires a paid-testimonial disclosure", feedback: "The paid-testimonial disclosure triggers only when compensation exceeds $100; $60 does not, though 'not representative'/'no guarantee' still apply." },
      { id: "b", text: "No disclosures of any kind are needed" },
      { id: "c", text: "Yes — and it must also be filed 10 days before use" },
      { id: "d", text: "No — $60 does not exceed the $100 threshold (other testimonial disclosures still apply)" },
    ],
    correctId: "d",
    explanation:
      "The **paid-testimonial** disclosure triggers only when compensation **exceeds `$100`**. `$60` does not — but 'not representative' and 'no guarantee' disclosures still apply.",
  },
  {
    id: "testimonials-endorsements-ratings.q8",
    lessonSlug: "testimonials-endorsements-ratings",
    type: "single",
    difficulty: "easy",
    tags: ["fn:1", "communications", "testimonials"],
    prompt: "Which FINRA rule governs broker-dealer testimonials?",
    choices: [
      { id: "a", text: "`Rule 2210(d)(6)`" },
      { id: "b", text: "SEC `Rule 206(4)-1`", feedback: "206(4)-1 is the SEC adviser Marketing Rule. BD testimonials are governed by FINRA Rule 2210(d)(6)." },
      { id: "c", text: "`Rule 3230`" },
      { id: "d", text: "`Rule 4512(c)`" },
    ],
    correctId: "a",
    explanation:
      "Broker-dealer testimonials are governed by FINRA **`Rule 2210(d)(6)`** — permitted with disclosures.",
  },
];

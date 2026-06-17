import type { Question } from "@/lib/quiz/types";

// Quiz for "Registering & Terminating Reps: Forms U4/U5, Fingerprinting, CE & Statutory Disqualification".
// NOTE: This lesson maps to Function 2 (fn:2), not fn:3.
export const questions: Question[] = [
  {
    id: "registering-representatives-u4-u5-ce.q1",
    lessonSlug: "registering-representatives-u4-u5-ce",
    type: "single",
    difficulty: "easy",
    tags: ["fn:2", "finra", "registration"],
    prompt: "Which form registers a representative, and which terminates one?",
    choices: [
      { id: "a", text: "Form U4 registers; Form U5 terminates" },
      { id: "b", text: "Form U5 registers; Form U4 terminates" },
      { id: "c", text: "Form BD registers; Form ADV terminates" },
      { id: "d", text: "Form 3 registers; Form 4 terminates", feedback: "Forms 3/4 are Section 16 insider ownership filings, not rep registration. U4 registers and U5 terminates." },
    ],
    correctId: "a",
    explanation:
      "**Form U4** is the Uniform Application for registration; **Form U5** is the Uniform Termination Notice.",
  },
  {
    id: "registering-representatives-u4-u5-ce.q2",
    lessonSlug: "registering-representatives-u4-u5-ce",
    type: "single",
    difficulty: "medium",
    tags: ["fn:2", "finra", "registration", "windows"],
    prompt: "Within what window must a firm file an initial Form U5 after a rep's termination?",
    choices: [
      { id: "a", text: "`10 days`" },
      { id: "b", text: "`30 days`" },
      { id: "c", text: "`60 days`" },
      { id: "d", text: "`90 days`" },
    ],
    correctId: "b",
    explanation:
      "The firm files the initial **Form U5 within `30 days`** of termination (and an amended U5 within `30 days` of learning facts requiring amendment).",
  },
  {
    id: "registering-representatives-u4-u5-ce.q3",
    lessonSlug: "registering-representatives-u4-u5-ce",
    type: "single",
    difficulty: "hard",
    tags: ["fn:2", "finra", "registration", "statutory-dq"],
    prompt: "A rep is charged with a felony. Within how many days must the firm amend his Form U4?",
    choices: [
      { id: "a", text: "`10 days` — it is a statutory-disqualification event" },
      { id: "b", text: "`30 days` — the standard amendment window" },
      { id: "c", text: "`60 days`" },
      { id: "d", text: "`90 days`", feedback: "The default U4 amendment window is 30 days, but statutory-DQ events compress it to 10 days." },
    ],
    correctId: "a",
    explanation:
      "Standard U4 amendments are due within `30 days`, but **statutory-disqualification** events must be reported within `10 days`.",
  },
  {
    id: "registering-representatives-u4-u5-ce.q4",
    lessonSlug: "registering-representatives-u4-u5-ce",
    type: "single",
    difficulty: "medium",
    tags: ["fn:2", "finra", "continuing-education"],
    prompt: "How often must the CE Regulatory Element now be completed?",
    choices: [
      { id: "a", text: "Once, on the second registration anniversary" },
      { id: "b", text: "Every three years" },
      { id: "c", text: "Annually, by December 31, for each registration category" },
      { id: "d", text: "Only when changing firms" },
    ],
    correctId: "c",
    explanation:
      "Since **Jan 1 2023**, the **Regulatory Element** is **ANNUAL**, due by **Dec 31** for **each category** (`FINRA Rule 1240`). Miss it and the registration goes **CE inactive**.",
  },
  {
    id: "registering-representatives-u4-u5-ce.q5",
    lessonSlug: "registering-representatives-u4-u5-ce",
    type: "single",
    difficulty: "medium",
    tags: ["fn:2", "finra", "statutory-dq"],
    prompt: "Which of the following can cause statutory disqualification under `Exchange Act §3(a)(39)`?",
    choices: [
      { id: "a", text: "Any felony, or certain misdemeanors, within the past `10 years`" },
      { id: "b", text: "A single late CE completion" },
      { id: "c", text: "A customer complaint that is later withdrawn" },
      { id: "d", text: "Failing the Series 7 once", feedback: "Disqualification flows from felonies, certain misdemeanors within 10 years, industry bars, injunctions, or willful false filings — not a failed exam." },
    ],
    correctId: "a",
    explanation:
      "Triggers include **any felony or certain misdemeanors within the past `10 years`**, plus industry bars/suspensions, certain injunctions, and willful false statements on registration forms.",
  },
  {
    id: "registering-representatives-u4-u5-ce.q6",
    lessonSlug: "registering-representatives-u4-u5-ce",
    type: "single",
    difficulty: "medium",
    tags: ["fn:2", "finra", "fingerprinting"],
    prompt: "Under `Exchange Act Rule 17f-2`, where are fingerprint cards submitted?",
    choices: [
      { id: "a", text: "To the FBI" },
      { id: "b", text: "To the SEC" },
      { id: "c", text: "To the MSRB" },
      { id: "d", text: "To the state securities administrator" },
    ],
    correctId: "a",
    explanation:
      "`Rule 17f-2` requires fingerprinting of partners/officers/directors/employees handling securities or funds; cards go to the **FBI**.",
  },
  {
    id: "registering-representatives-u4-u5-ce.q7",
    lessonSlug: "registering-representatives-u4-u5-ce",
    type: "single",
    difficulty: "medium",
    tags: ["fn:2", "finra", "mqp"],
    prompt: "What does the Maintaining Qualifications Program (MQP) allow?",
    choices: [
      { id: "a", text: "A terminated rep to preserve a qualification up to ~5 years via annual CE instead of re-testing" },
      { id: "b", text: "A rep to skip the Series 7 entirely" },
      { id: "c", text: "A firm to delay filing a U5 indefinitely" },
      { id: "d", text: "A rep to waive fingerprinting", feedback: "MQP only preserves a lapsed qualification through annual CE — it doesn't waive exams broadly or affect fingerprinting." },
    ],
    correctId: "a",
    explanation:
      "The **MQP** lets a **terminated rep** keep a qualification alive for **up to ~`5 years`** through **annual CE**, avoiding a re-test if they return.",
  },
  {
    id: "registering-representatives-u4-u5-ce.q8",
    lessonSlug: "registering-representatives-u4-u5-ce",
    type: "single",
    difficulty: "hard",
    tags: ["fn:2", "finra", "scenario", "u5"],
    prompt:
      "After being charged with a felony, the rep resigns. What is true about the U5 the firm files?",
    choices: [
      { id: "a", text: "The U5 is confidential and never seen by future employers" },
      { id: "b", text: "The firm files it within `30 days`, and the reason-for-termination follows the rep" },
      { id: "c", text: "No U5 is required if the rep resigns voluntarily" },
      { id: "d", text: "The U5 must be filed within `10 days` like the U4 amendment", feedback: "The 10-day window applies to the statutory-DQ U4 amendment; the U5 itself is filed within 30 days of termination." },
    ],
    correctId: "b",
    explanation:
      "The firm files the **U5 within `30 days`** of termination, and the **reason-for-termination** disclosed on it **follows the rep** to future employers.",
  },
];

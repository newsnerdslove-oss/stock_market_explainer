import type { Question } from "@/lib/quiz/types";

// Quiz for "The SIE, the Series 7, and the Registration Framework".
export const questions: Question[] = [
  {
    id: "sie-series7-exam-and-registration-framework.q1",
    lessonSlug: "sie-series7-exam-and-registration-framework",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "regulation", "series7"],
    prompt: "What is the Series 7 scored-question count, time limit, and passing score?",
    choices: [
      { id: "a", text: "`125` scored, `225` minutes, `72%`" },
      { id: "b", text: "`75` scored, `105` minutes, `70%`" },
      { id: "c", text: "`130` scored, `225` minutes, `70%`" },
      { id: "d", text: "`125` scored, `180` minutes, `75%`" },
    ],
    correctId: "a",
    explanation:
      "The Series 7 has `125` **scored** questions, `225` minutes, and a `72%` passing score. (75/105/70% describes the SIE.)",
  },
  {
    id: "sie-series7-exam-and-registration-framework.q2",
    lessonSlug: "sie-series7-exam-and-registration-framework",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "regulation", "functions"],
    prompt: "Which function dominates the Series 7, and at roughly what weight?",
    choices: [
      { id: "a", text: "Function 1 — Seeks Business, ~7.2%" },
      { id: "b", text: "Function 4 — Processes Transactions, ~11.2%" },
      { id: "c", text: "Function 3 — Provides Information/Recommendations/Records, ~72.8% (91 questions)" },
      { id: "d", text: "Function 2 — Opens Accounts, ~8.8%" },
    ],
    correctId: "c",
    explanation:
      "**Function 3** — providing information, recommendations, and records — is the heart of the exam at **`91` questions / `72.8%`**.",
  },
  {
    id: "sie-series7-exam-and-registration-framework.q3",
    lessonSlug: "sie-series7-exam-and-registration-framework",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "regulation", "corequisite"],
    prompt: "Besides the Series 7 top-off, what must a candidate complete to be licensed as a General Securities Rep?",
    choices: [
      { id: "a", text: "The SIE corequisite" },
      { id: "b", text: "The Series 63 only" },
      { id: "c", text: "Nothing — the Series 7 stands alone" },
      { id: "d", text: "A four-year college degree", feedback: "There's no degree requirement. The SIE is the corequisite that pairs with the Series 7 top-off." },
    ],
    correctId: "a",
    explanation:
      "The Series 7 is a **top-off**; the **SIE** is its **corequisite** and must also be passed.",
  },
  {
    id: "sie-series7-exam-and-registration-framework.q4",
    lessonSlug: "sie-series7-exam-and-registration-framework",
    type: "numericChoice",
    difficulty: "medium",
    unit: "%",
    tags: ["fn:3", "regulation", "calc"],
    prompt:
      "A candidate answers 88 of the 125 scored Series 7 questions correctly. What is the score, and does it pass?",
    choices: [
      { id: "a", text: "`70.4%` — fails (below `72%`)" },
      { id: "b", text: "`70.4%` — passes" },
      { id: "c", text: "`72.0%` — passes" },
      { id: "d", text: "`67.7%` — fails", feedback: "88÷125 = 70.4%, not 67.7%; the divisor is the 125 scored items, not 130." },
    ],
    correctId: "a",
    explanation:
      "`88 ÷ 125 = 70.4%`, which is **below `72%`** → **FAIL**. You effectively need `90/125`. The `5` pretest items don't count.",
  },
  {
    id: "sie-series7-exam-and-registration-framework.q5",
    lessonSlug: "sie-series7-exam-and-registration-framework",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "regulation", "sie"],
    prompt: "What is the SIE's passing score, and is firm sponsorship required to take it?",
    choices: [
      { id: "a", text: "`70%`; no sponsorship required" },
      { id: "b", text: "`72%`; sponsorship required" },
      { id: "c", text: "`70%`; sponsorship required" },
      { id: "d", text: "`75%`; no sponsorship required" },
    ],
    correctId: "a",
    explanation:
      "The SIE passes at `70%` and needs **no firm sponsorship** — anyone may take it. The Series 7 needs `72%` and sponsorship.",
  },
  {
    id: "sie-series7-exam-and-registration-framework.q6",
    lessonSlug: "sie-series7-exam-and-registration-framework",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "regulation", "recent-change"],
    prompt: "What changed on the Series 7 effective Oct 27, 2025?",
    choices: [
      { id: "a", text: "The passing score rose to 75%" },
      { id: "b", text: "Pretest items dropped from 10 to 5 (total 135→130); time, score, and scored count unchanged" },
      { id: "c", text: "The scored count rose from 125 to 130" },
      { id: "d", text: "The time limit was cut to 180 minutes", feedback: "Time, passing score, and scored count are all unchanged; only the pretest count dropped 10→5." },
    ],
    correctId: "b",
    explanation:
      "Effective **Oct 27 2025**, the **pretest** count dropped from `10` to `5` (total `135`→`130`). The **time, score, and scored count are unchanged**.",
  },
  {
    id: "sie-series7-exam-and-registration-framework.q7",
    lessonSlug: "sie-series7-exam-and-registration-framework",
    type: "numericChoice",
    difficulty: "medium",
    unit: "%",
    tags: ["fn:3", "regulation", "functions", "calc"],
    prompt: "Function 2 (Opens Accounts) carries 11 of the 125 scored questions. What approximate weight is that?",
    choices: [
      { id: "a", text: "`8.8%`" },
      { id: "b", text: "`11.2%`" },
      { id: "c", text: "`7.2%`" },
      { id: "d", text: "`72.8%`" },
    ],
    correctId: "a",
    explanation:
      "`11 ÷ 125 = 8.8%`. (Function 4 is 14q/11.2%; Function 1 is 9q/7.2%; Function 3 is 91q/72.8%.)",
  },
  {
    id: "sie-series7-exam-and-registration-framework.q8",
    lessonSlug: "sie-series7-exam-and-registration-framework",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "regulation", "thresholds"],
    prompt: "A candidate scores exactly 70% on the Series 7. What is the result?",
    choices: [
      { id: "a", text: "Pass — 70% is the Series 7 threshold" },
      { id: "b", text: "Fail — the Series 7 requires 72%; 70% is the SIE threshold" },
      { id: "c", text: "Pass — anything at or above 70% passes both exams" },
      { id: "d", text: "Provisional pass pending a retest", feedback: "There's no provisional pass. 70% is below the Series 7's 72% requirement, so it fails." },
    ],
    correctId: "b",
    explanation:
      "The Series 7 requires **`72%`** (effectively `90/125`). `70%` is the **SIE** threshold — so a 70% on the Series 7 **fails**.",
  },
];

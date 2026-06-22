import type { Question } from "@/lib/quiz/types";

// Quiz for "Options Communications & the ODD (Rule 2220)".
// Series 7 Function 1 — every question carries the fn:1 tag.
export const questions: Question[] = [
  {
    id: "options-communications-and-the-odd.q1",
    lessonSlug: "options-communications-and-the-odd",
    type: "single",
    difficulty: "easy",
    tags: ["fn:1", "communications", "options"],
    prompt: "Under FINRA Rule 2220, the Options Disclosure Document (ODD) must be:",
    choices: [
      { id: "a", text: "Mailed within `10 days` after the options communication", feedback: "There's no 'after' option — the ODD must accompany or PRECEDE the communication, never follow it." },
      { id: "b", text: "Accompanied or preceded by any retail communication about standardized options", feedback: "This reverses the relationship — the ODD accompanies/precedes the communication, not the other way around." },
      { id: "c", text: "Accompanying or preceding any retail communication about standardized options" },
      { id: "d", text: "Delivered only if the customer requests it" },
    ],
    correctId: "c",
    explanation:
      "Under `Rule 2220`, any retail communication about standardized options must be **accompanied or preceded by the current ODD** — never delivered afterward.",
  },
  {
    id: "options-communications-and-the-odd.q2",
    lessonSlug: "options-communications-and-the-odd",
    type: "single",
    difficulty: "medium",
    tags: ["fn:1", "communications", "options"],
    prompt: "A communication used BEFORE the ODD has been delivered may NOT contain which of the following?",
    choices: [
      { id: "a", text: "The firm's name and a general invitation to learn about options" },
      { id: "b", text: "Recommendations, performance figures, or names of specific securities" },
      { id: "c", text: "A statement that options involve risk" },
      { id: "d", text: "Contact information for a representative" },
    ],
    correctId: "b",
    explanation:
      "Before ODD delivery, a piece **must not contain recommendations, past or projected performance (including annualized rates), or names of specific securities**. It may still invite general interest.",
  },
  {
    id: "options-communications-and-the-odd.q3",
    lessonSlug: "options-communications-and-the-odd",
    type: "single",
    difficulty: "medium",
    tags: ["fn:1", "communications", "options", "approval"],
    prompt: "Who must approve an options retail communication in advance under Rule 2220?",
    choices: [
      { id: "a", text: "Any registered representative", feedback: "A rep cannot approve communications; Rule 2220 requires a specially qualified options principal." },
      { id: "b", text: "FINRA's Advertising Regulation Department" },
      { id: "c", text: "A Registered Options Principal (ROP)" },
      { id: "d", text: "The firm's Chief Compliance Officer personally" },
    ],
    correctId: "c",
    explanation:
      "Every options retail communication (except completed worksheets) must be **approved in advance by a Registered Options Principal (ROP)** — a step beyond the ordinary registered-principal approval.",
  },
  {
    id: "options-communications-and-the-odd.q4",
    lessonSlug: "options-communications-and-the-odd",
    type: "single",
    difficulty: "hard",
    tags: ["fn:1", "communications", "options", "filing"],
    prompt: "An options retail communication that will be used BEFORE the ODD is delivered must be submitted to FINRA's Advertising Regulation Department:",
    choices: [
      { id: "a", text: "Within `10 business days` AFTER first use", feedback: "That's the post-filing window for mutual funds under 2210(c). Rule 2220 pre-ODD options pieces are filed BEFORE use for approval." },
      { id: "b", text: "At least `10 calendar days` before first use, for approval" },
      { id: "c", text: "At least `10 business days` before first use, for approval", feedback: "Close, but Rule 2220 specifies calendar days, not business days." },
      { id: "d", text: "Only upon FINRA's written request" },
    ],
    correctId: "b",
    explanation:
      "A pre-ODD options retail communication must be **submitted to FINRA's Advertising Regulation Department at least `10 calendar days` before use for approval** (or a shorter period the Department allows), and is withheld until approved.",
  },
  {
    id: "options-communications-and-the-odd.q5",
    lessonSlug: "options-communications-and-the-odd",
    type: "single",
    difficulty: "medium",
    tags: ["fn:1", "communications", "options", "content-standards"],
    prompt: "How must risk be presented when an options communication discusses opportunities?",
    choices: [
      { id: "a", text: "Risk may be summarized in broad, general terms at the end", feedback: "Rule 2220 specifically forbids broad generalities — risk must match the specificity of the opportunity." },
      { id: "b", text: "Risk disclosure can be omitted if the ODD is attached", feedback: "The ODD does not excuse balanced treatment; opportunity statements still require matching risk statements." },
      { id: "c", text: "With the same degree of specificity as the statement of opportunities" },
      { id: "d", text: "Only the maximum loss must be stated, nothing more" },
    ],
    correctId: "c",
    explanation:
      "Rule 2220 requires **balanced treatment**: a statement of corresponding risks with the **same degree of specificity** as the opportunity statement — **broad generalities must be avoided**.",
  },
  {
    id: "options-communications-and-the-odd.q6",
    lessonSlug: "options-communications-and-the-odd",
    type: "single",
    difficulty: "hard",
    tags: ["fn:1", "communications", "options", "performance"],
    prompt: "When an options communication shows historical performance, the data must:",
    choices: [
      { id: "a", text: "Highlight only the firm's best-performing trades", feedback: "Cherry-picking is exactly what's prohibited — the universe must be fully isolated and complete." },
      { id: "b", text: "Cover at least the most recent `12-month` period within a fully isolated universe" },
      { id: "c", text: "Cover at least `60 days` of experience", feedback: "60 days is the minimum for ANNUALIZED projected rates, not the historical-performance window of at least 12 months." },
      { id: "d", text: "Guarantee comparable future results" },
    ],
    correctId: "b",
    explanation:
      "Historical performance must cover **at least the most recent `12-month` period** and be confined to a **fully isolated 'universe'** — no cherry-picking — with a statement that results don't predict future performance.",
  },
  {
    id: "options-communications-and-the-odd.q7",
    lessonSlug: "options-communications-and-the-odd",
    type: "single",
    difficulty: "medium",
    tags: ["fn:1", "communications", "options", "performance"],
    prompt: "Under Rule 2220, a projected annualized rate of return may NOT be based on:",
    choices: [
      { id: "a", text: "Less than `60 days` of experience" },
      { id: "b", text: "Less than `12 months` of experience", feedback: "12 months is the historical-performance window; the annualized-projection floor is 60 days of experience." },
      { id: "c", text: "Less than `10 calendar days` of experience", feedback: "10 calendar days is the FINRA pre-filing window, not a basis for projecting returns." },
      { id: "d", text: "Any past trading data at all", feedback: "Projections may use experience — they simply can't be built on less than 60 days of it." },
    ],
    correctId: "a",
    explanation:
      "An **annualized rate of return** in an options communication may **not be based on less than `60 days`** of experience, and must include clearly displayed formulas and the ODD.",
  },
];

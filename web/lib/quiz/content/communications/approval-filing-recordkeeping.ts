import type { Question } from "@/lib/quiz/types";

// Quiz for "Principal Approval, FINRA Ad-Reg Filing Windows & 3-Year Retention".
// Series 7 Function 1 — every question carries the fn:1 tag.
export const questions: Question[] = [
  {
    id: "approval-filing-recordkeeping.q1",
    lessonSlug: "approval-filing-recordkeeping",
    type: "single",
    difficulty: "medium",
    tags: ["fn:1", "communications", "filing"],
    prompt: "A retail communication about a mutual fund must be filed with FINRA when?",
    choices: [
      { id: "a", text: "At least `10 business days` BEFORE first use", feedback: "Mutual-fund retail communications are post-filed (after first use). The 10-days-before window applies to new-member, firm-created-rankings, and security-futures pieces." },
      { id: "b", text: "Within `3 business days` after first use" },
      { id: "c", text: "It is excluded from filing" },
      { id: "d", text: "Within `10 business days` AFTER first use" },
    ],
    correctId: "d",
    explanation:
      "Retail communications about registered investment companies (mutual funds) are **post-filed**: **within `10 business days` AFTER first use** under `Rule 2210(c)`.",
  },
  {
    id: "approval-filing-recordkeeping.q2",
    lessonSlug: "approval-filing-recordkeeping",
    type: "single",
    difficulty: "easy",
    tags: ["fn:1", "communications", "approval"],
    prompt: "Which category requires a registered principal's approval BEFORE use?",
    choices: [
      { id: "a", text: "Correspondence", feedback: "Correspondence needs no pre-approval — it is supervised/reviewed under Rule 3110(b)." },
      { id: "b", text: "Institutional communications" },
      { id: "c", text: "Retail communications" },
      { id: "d", text: "Internal communications" },
    ],
    correctId: "c",
    explanation:
      "**Retail communications** must be approved by an appropriately qualified registered principal **before the earlier of use or FINRA filing** [`2210(b)(1)(A)`].",
  },
  {
    id: "approval-filing-recordkeeping.q3",
    lessonSlug: "approval-filing-recordkeeping",
    type: "single",
    difficulty: "medium",
    tags: ["fn:1", "communications", "filing"],
    prompt: "Which is EXCLUDED from FINRA filing under Rule 2210(c)(7)?",
    choices: [
      { id: "a", text: "Mutual-fund retail communications", feedback: "Mutual-fund retail communications must be filed (post-use). Correspondence and institutional communications are the excluded categories." },
      { id: "b", text: "Correspondence and institutional communications" },
      { id: "c", text: "CMO retail communications" },
      { id: "d", text: "New-member public-media retail communications" },
    ],
    correctId: "b",
    explanation:
      "**Correspondence and institutional communications** are **excluded from filing** [`2210(c)(7)`], along with prior-filed pieces, prospectuses, and press releases.",
  },
  {
    id: "approval-filing-recordkeeping.q4",
    lessonSlug: "approval-filing-recordkeeping",
    type: "single",
    difficulty: "hard",
    tags: ["fn:1", "communications", "filing"],
    prompt: "A first-year FINRA member runs its first retail TV advertisement. The filing requirement is:",
    choices: [
      { id: "a", text: "Filed at least `10 business days` BEFORE first use" },
      { id: "b", text: "Filed within `10 business days` AFTER first use", feedback: "New-member public-media retail communications are PRE-filed (before use) during the first year — not post-filed like mutual funds." },
      { id: "c", text: "Excluded from filing" },
      { id: "d", text: "Filed within `3 years` of use" },
    ],
    correctId: "a",
    explanation:
      "**New-member** retail communications in **public media** (first year of membership) are **pre-filed** — at least **`10 business days` BEFORE first use**.",
  },
  {
    id: "approval-filing-recordkeeping.q5",
    lessonSlug: "approval-filing-recordkeeping",
    type: "single",
    difficulty: "medium",
    tags: ["fn:1", "communications", "filing"],
    prompt: "A retail communication contains the firm's OWN self-created fund performance rankings. When must it be filed?",
    choices: [
      { id: "a", text: "Within `10 business days` AFTER first use", feedback: "Independent rankings are different — firm-created rankings trigger PRE-filing before first use." },
      { id: "b", text: "It is excluded from filing" },
      { id: "c", text: "Only at year-end" },
      { id: "d", text: "At least `10 business days` BEFORE first use" },
    ],
    correctId: "d",
    explanation:
      "Retail communications with **self-created (firm-made) fund performance rankings** are **pre-filed** — at least **`10 business days` BEFORE first use**.",
  },
  {
    id: "approval-filing-recordkeeping.q6",
    lessonSlug: "approval-filing-recordkeeping",
    type: "single",
    difficulty: "easy",
    tags: ["fn:1", "communications", "recordkeeping"],
    prompt: "How long must communications be retained, and how accessible?",
    choices: [
      { id: "a", text: "`6 years`, all easily accessible", feedback: "6 years applies to blotters/ledgers/account records, not communications; communications are 3 years (first 2 accessible)." },
      { id: "b", text: "`1 year`" },
      { id: "c", text: "`3 years`, with the first `2 years` easily accessible" },
      { id: "d", text: "Life of the firm" },
    ],
    correctId: "c",
    explanation:
      "Communications are kept **`3 years`** under `SEA Rule 17a-4`, with the **first `2 years` easily accessible**.",
  },
  {
    id: "approval-filing-recordkeeping.q7",
    lessonSlug: "approval-filing-recordkeeping",
    type: "single",
    difficulty: "medium",
    tags: ["fn:1", "communications", "approval"],
    prompt: "What approval/supervision applies to correspondence?",
    choices: [
      { id: "a", text: "Principal pre-approval before the earlier of use or filing", feedback: "That is the retail-communication standard. Correspondence is supervised/reviewed, not pre-approved." },
      { id: "b", text: "No principal pre-approval; supervised and reviewed under `Rule 3110(b)`" },
      { id: "c", text: "Pre-filed with FINRA 10 days before use" },
      { id: "d", text: "Approval by FINRA's Advertising Regulation Department" },
    ],
    correctId: "b",
    explanation:
      "**Correspondence** requires **no principal pre-approval**; it is **supervised and reviewed** under `Rule 3110(b)`.",
  },
  {
    id: "approval-filing-recordkeeping.q8",
    lessonSlug: "approval-filing-recordkeeping",
    type: "single",
    difficulty: "medium",
    tags: ["fn:1", "communications", "recordkeeping"],
    prompt: "A retained retail-communication record must show which two items?",
    choices: [
      { id: "a", text: "The name of the approving principal and the date" },
      { id: "b", text: "The customer's account number and risk tolerance", feedback: "Communications records track the approving principal and date — not customer account profiling data." },
      { id: "c", text: "The CCO's signature and the firm's CRD number" },
      { id: "d", text: "The FINRA filing receipt and a notarization" },
    ],
    correctId: "a",
    explanation:
      "Each communications record must show the **name of the approving principal** and the **date**.",
  },
];

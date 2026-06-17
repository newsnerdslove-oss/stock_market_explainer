import type { Question } from "@/lib/quiz/types";

// Quiz for "Anti-Money Laundering: BSA, USA PATRIOT Act, CIP, SARs, CTRs & OFAC".
// NOTE: This lesson maps to Function 2 (fn:2), not fn:3.
export const questions: Question[] = [
  {
    id: "anti-money-laundering-bsa-patriot-act.q1",
    lessonSlug: "anti-money-laundering-bsa-patriot-act",
    type: "single",
    difficulty: "medium",
    tags: ["fn:2", "aml", "regulation"],
    prompt: "What are the threshold and recipient agency for a SAR vs. a CTR?",
    choices: [
      { id: "a", text: "SAR: suspicious activity `$5,000`+, FinCEN; CTR: currency over `$10,000` in one day, FinCEN" },
      { id: "b", text: "SAR: over `$10,000`, SEC; CTR: `$5,000`+, FINRA" },
      { id: "c", text: "Both: over `$10,000`, filed with the SEC" },
      { id: "d", text: "SAR: `$3,000`+, OFAC; CTR: `$5,000`+, OFAC", feedback: "Both go to FinCEN, not OFAC/SEC. SAR is suspicious activity $5,000+; CTR is currency over $10,000." },
    ],
    correctId: "a",
    explanation:
      "A **SAR** covers **suspicious** activity aggregating **`$5,000`+** (filed within `30 days`); a **CTR** covers **currency over `$10,000`** in one business day. Both go to **FinCEN**.",
  },
  {
    id: "anti-money-laundering-bsa-patriot-act.q2",
    lessonSlug: "anti-money-laundering-bsa-patriot-act",
    type: "numericChoice",
    difficulty: "medium",
    unit: "$",
    tags: ["fn:2", "aml", "ctr", "calc"],
    prompt:
      "Same-day cash deposits of $6,000 and $5,000. What is the aggregate, and must a CTR be filed?",
    choices: [
      { id: "a", text: "`$11,000` — yes, a CTR (over `$10,000`)" },
      { id: "b", text: "`$11,000` — no, neither deposit alone exceeds `$10,000`" },
      { id: "c", text: "`$1,000` — no" },
      { id: "d", text: "`$11,000` — only a SAR is required, not a CTR", feedback: "CTRs aggregate same-day cash for one person: $11,000 > $10,000 triggers a CTR. Apparent structuring may ALSO warrant a SAR." },
    ],
    correctId: "a",
    explanation:
      "Same-day cash **aggregates** per person: `$6,000 + $5,000 = $11,000`, which exceeds `$10,000` → a **CTR** is required. The structuring pattern may also warrant a **SAR**.",
  },
  {
    id: "anti-money-laundering-bsa-patriot-act.q3",
    lessonSlug: "anti-money-laundering-bsa-patriot-act",
    type: "single",
    difficulty: "medium",
    tags: ["fn:2", "aml", "cip", "ofac"],
    prompt: "Which law added the CIP requirement, and what list does OFAC maintain?",
    choices: [
      { id: "a", text: "The `USA PATRIOT Act` (2001); the SDN list" },
      { id: "b", text: "The `Bank Secrecy Act` (1970); the EMMA list" },
      { id: "c", text: "The `Securities Act of 1933`; the red-herring list" },
      { id: "d", text: "`FINRA Rule 3220`; the gift list" },
    ],
    correctId: "a",
    explanation:
      "The **`USA PATRIOT Act` (2001)** added **CIP**. **OFAC** maintains the **SDN (Specially Designated Nationals) list**.",
  },
  {
    id: "anti-money-laundering-bsa-patriot-act.q4",
    lessonSlug: "anti-money-laundering-bsa-patriot-act",
    type: "single",
    difficulty: "easy",
    tags: ["fn:2", "aml", "bsa"],
    prompt: "What is the foundational U.S. anti-money-laundering statute?",
    choices: [
      { id: "a", text: "The `Bank Secrecy Act` of 1970" },
      { id: "b", text: "The `Securities Exchange Act of 1934`" },
      { id: "c", text: "The `Dodd-Frank Act` of 2010" },
      { id: "d", text: "The `Sarbanes-Oxley Act` of 2002" },
    ],
    correctId: "a",
    explanation:
      "The **`Bank Secrecy Act` (BSA, 1970)** is the foundational U.S. AML statute; the `USA PATRIOT Act` (2001) later expanded it.",
  },
  {
    id: "anti-money-laundering-bsa-patriot-act.q5",
    lessonSlug: "anti-money-laundering-bsa-patriot-act",
    type: "single",
    difficulty: "hard",
    tags: ["fn:2", "aml", "ctr", "threshold"],
    prompt: "A customer deposits exactly $10,000 in cash in one business day. Is a CTR required for that amount alone?",
    choices: [
      { id: "a", text: "Yes — $10,000 meets the threshold" },
      { id: "b", text: "No — a CTR requires currency of MORE THAN `$10,000`" },
      { id: "c", text: "Yes — but only if the customer is non-U.S." },
      { id: "d", text: "No — CTRs only apply to wire transfers", feedback: "CTRs apply to currency (cash). The threshold is strictly more than $10,000, so exactly $10,000 alone does not trigger one." },
    ],
    correctId: "b",
    explanation:
      "A **CTR** is required for currency **MORE THAN `$10,000`**. **Exactly `$10,000` does not trigger** a CTR by itself.",
  },
  {
    id: "anti-money-laundering-bsa-patriot-act.q6",
    lessonSlug: "anti-money-laundering-bsa-patriot-act",
    type: "single",
    difficulty: "medium",
    tags: ["fn:2", "aml", "sar"],
    prompt: "Which statement about a SAR is correct?",
    choices: [
      { id: "a", text: "It is confidential, and the firm must not tip off the subject" },
      { id: "b", text: "The firm must notify the customer it filed one" },
      { id: "c", text: "It is filed with the SEC, not FinCEN" },
      { id: "d", text: "It is only required for cash over `$10,000`", feedback: "That last describes a CTR. A SAR is for suspicious activity $5,000+, is filed with FinCEN, and is confidential — no tipping." },
    ],
    correctId: "a",
    explanation:
      "A **SAR** is **confidential** — the firm must **not tip** the subject. It is filed with **FinCEN** within `30 days` for suspicious activity aggregating `$5,000`+.",
  },
  {
    id: "anti-money-laundering-bsa-patriot-act.q7",
    lessonSlug: "anti-money-laundering-bsa-patriot-act",
    type: "single",
    difficulty: "medium",
    tags: ["fn:2", "aml", "cip"],
    prompt: "How long must CIP records be retained?",
    choices: [
      { id: "a", text: "`3 years` from account opening" },
      { id: "b", text: "`5 years` after the account closes" },
      { id: "c", text: "Life of the firm" },
      { id: "d", text: "`1 year` after the last transaction", feedback: "CIP records are kept 5 years after the account closes — a distinct AML retention period." },
    ],
    correctId: "b",
    explanation:
      "**CIP** records must be retained **`5 years` after the account closes**.",
  },
  {
    id: "anti-money-laundering-bsa-patriot-act.q8",
    lessonSlug: "anti-money-laundering-bsa-patriot-act",
    type: "single",
    difficulty: "medium",
    tags: ["fn:2", "aml", "rule-3310"],
    prompt: "Under `FINRA Rule 3310`, a broker-dealer's AML program must include which elements?",
    choices: [
      { id: "a", text: "A written program, a designated AML compliance officer, and independent testing" },
      { id: "b", text: "Only an oral policy reviewed by the SEC annually" },
      { id: "c", text: "A trust indenture and a transfer agent" },
      { id: "d", text: "A red herring and a final prospectus", feedback: "Those are 1933 Act new-issue items. Rule 3310 requires a written program, a designated AML officer, and independent testing." },
    ],
    correctId: "a",
    explanation:
      "`FINRA Rule 3310` requires a **written AML program**, a **designated AML compliance officer**, and **independent testing**.",
  },
];

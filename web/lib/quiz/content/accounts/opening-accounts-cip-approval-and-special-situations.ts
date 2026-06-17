import type { Question } from "@/lib/quiz/types";

// Quiz for the "Opening Accounts: New Account Form, CIP, Approvals & Special Situations" lesson.
export const questions: Question[] = [
  {
    id: "opening-accounts-cip-approval-and-special-situations.q1",
    lessonSlug: "opening-accounts-cip-approval-and-special-situations",
    type: "single",
    difficulty: "medium",
    tags: ["fn:2", "cip", "accounts"],
    prompt:
      "What are the four minimum CIP data points, and how long must CIP records be kept after the account is closed?",
    choices: [
      { id: "a", text: "Name, DOB, address, TIN; retained 5 years after closing" },
      { id: "b", text: "Name, occupation, income, net worth; retained 3 years after closing" },
      { id: "c", text: "Name, DOB, address, TIN; retained 6 years after closing", feedback: "The data points are right but the period is wrong. CIP records are kept 5 years after the account closes, not 6." },
      { id: "d", text: "Name, address, objectives, risk tolerance; retained for the life of the firm" },
    ],
    correctId: "a",
    explanation:
      "CIP (USA PATRIOT Act §326) requires collecting and verifying **name, date of birth, address, and TIN**, and retaining CIP records **`5 years` after the account is closed**.",
  },
  {
    id: "opening-accounts-cip-approval-and-special-situations.q2",
    lessonSlug: "opening-accounts-cip-approval-and-special-situations",
    type: "single",
    difficulty: "medium",
    tags: ["fn:2", "cip", "signature"],
    prompt:
      "Whose signature is required to open a cash account?",
    choices: [
      { id: "a", text: "The customer's signature is always required" },
      { id: "b", text: "No customer signature is required; a principal's approval suffices" },
      { id: "c", text: "A FINRA examiner's signature" },
      { id: "d", text: "Two principals must co-sign" },
    ],
    correctId: "b",
    explanation:
      "For a **cash account**, the **principal's approval** is enough and the customer's signature is not required. The customer must sign only for **margin and options** accounts.",
  },
  {
    id: "opening-accounts-cip-approval-and-special-situations.q3",
    lessonSlug: "opening-accounts-cip-approval-and-special-situations",
    type: "single",
    difficulty: "hard",
    tags: ["fn:2", "rule-3210", "scenario"],
    prompt:
      "An employee (associated person) of Firm A wants to open a securities account at Firm B. What is required?",
    choices: [
      { id: "a", text: "Nothing — outside accounts are unrestricted" },
      { id: "b", text: "Prior written consent of Firm A (Rule 3210); Firm B sends duplicate confirms/statements to Firm A" },
      { id: "c", text: "Only verbal notice to Firm B's compliance department" },
      { id: "d", text: "Approval from FINRA's enforcement division" },
    ],
    correctId: "b",
    explanation:
      "Under `FINRA Rule 3210` (the former NYSE Rule 407 '407 letter'), the associated person needs the **prior written consent** of the employer (Firm A), and **Firm B must send duplicate confirms and statements** to Firm A.",
  },
  {
    id: "opening-accounts-cip-approval-and-special-situations.q4",
    lessonSlug: "opening-accounts-cip-approval-and-special-situations",
    type: "single",
    difficulty: "hard",
    tags: ["fn:2", "death", "scenario"],
    prompt:
      "A rep learns a sole-account customer died yesterday and the account holds a resting GTC order. What is the FIRST step?",
    choices: [
      { id: "a", text: "Execute the GTC order before the market moves" },
      { id: "b", text: "Cancel all open orders and freeze the account; await the death certificate and letters testamentary" },
      { id: "c", text: "Immediately transfer the assets to the next of kin" },
      { id: "d", text: "Close the account and mail a check to the last known address", feedback: "Nothing is released yet. On notice of death you cancel open orders and freeze the account, then await estate documents before any distribution." },
    ],
    correctId: "b",
    explanation:
      "On notice of death: **cancel all open/unexecuted orders** (including the GTC), **freeze** and mark the account deceased, and **release nothing** until the estate provides the **death certificate** and **letters testamentary/of administration**.",
  },
  {
    id: "opening-accounts-cip-approval-and-special-situations.q5",
    lessonSlug: "opening-accounts-cip-approval-and-special-situations",
    type: "single",
    difficulty: "medium",
    tags: ["fn:2", "accounts", "new-account-form"],
    prompt:
      "Which is required on the new account form under `SEC Rule 17a-3(a)(17)`?",
    choices: [
      { id: "a", text: "A P.O. box in place of a residential address" },
      { id: "b", text: "A residential address (no P.O. box), date of birth, and SSN/TIN" },
      { id: "c", text: "The customer's mother's maiden name only" },
      { id: "d", text: "A notarized photograph" },
    ],
    correctId: "b",
    explanation:
      "The form requires a **residential address (no P.O. box)**, **date of birth**, and **SSN/TIN**, among other items. The rep signs and a **principal approves**.",
  },
  {
    id: "opening-accounts-cip-approval-and-special-situations.q6",
    lessonSlug: "opening-accounts-cip-approval-and-special-situations",
    type: "single",
    difficulty: "medium",
    tags: ["fn:2", "accounts", "numbered"],
    prompt:
      "When is a numbered account permissible?",
    choices: [
      { id: "a", text: "Whenever the customer prefers privacy, with no documentation" },
      { id: "b", text: "Only if the customer signs a statement attesting to ownership of the account" },
      { id: "c", text: "Only for foreign nationals" },
      { id: "d", text: "Never — numbered accounts are prohibited" },
    ],
    correctId: "b",
    explanation:
      "A **numbered account** is permissible only if the customer signs a **statement attesting to ownership**. Hold-mail is similarly allowed only for a limited period with written instructions.",
  },
  {
    id: "opening-accounts-cip-approval-and-special-situations.q7",
    lessonSlug: "opening-accounts-cip-approval-and-special-situations",
    type: "numericChoice",
    difficulty: "medium",
    tags: ["fn:2", "rule-3210", "accounts"],
    prompt:
      "An associated person already had an outside account before becoming associated. Within how many days must employer consent be obtained?",
    choices: [
      { id: "a", text: "10 days" },
      { id: "b", text: "15 days" },
      { id: "c", text: "30 days" },
      { id: "d", text: "60 days" },
    ],
    correctId: "c",
    explanation:
      "For **pre-existing** outside accounts, the associated person must obtain employer consent within **`30 days`** of becoming associated under `FINRA Rule 3210`.",
  },
  {
    id: "opening-accounts-cip-approval-and-special-situations.q8",
    lessonSlug: "opening-accounts-cip-approval-and-special-situations",
    type: "single",
    difficulty: "easy",
    tags: ["fn:2", "death", "estate"],
    prompt:
      "Before releasing assets from a deceased individual's account, which document confirms who is authorized to act for the estate?",
    choices: [
      { id: "a", text: "Letters testamentary / letters of administration" },
      { id: "b", text: "The loan consent agreement" },
      { id: "c", text: "The hold-mail authorization" },
      { id: "d", text: "A trade confirmation" },
    ],
    correctId: "a",
    explanation:
      "**Letters testamentary (or of administration)** name the person authorized to act for the estate. The firm also needs the **death certificate** and any **tax waivers** before releasing assets.",
  },
];

import type { Question } from "@/lib/quiz/types";

// Quiz for the "Know Your Customer: Rule 2090 and the Customer Profile" lesson.
export const questions: Question[] = [
  {
    id: "know-your-customer-rule-2090.q1",
    lessonSlug: "know-your-customer-rule-2090",
    type: "single",
    difficulty: "easy",
    tags: ["fn:2", "kyc", "rule-2090"],
    prompt: "When does the `Rule 2090` (Know Your Customer) duty attach?",
    choices: [
      { id: "a", text: "Only once the firm makes its first recommendation" },
      { id: "b", text: "At account opening, and it continues while the account is maintained" },
      { id: "c", text: "Only when the customer requests advice" },
      { id: "d", text: "Only when the account is closed" },
    ],
    correctId: "b",
    explanation:
      "`Rule 2090` requires reasonable diligence to know the essential facts in **opening and maintaining** every account. The duty attaches at account opening, independent of any recommendation.",
  },
  {
    id: "know-your-customer-rule-2090.q2",
    lessonSlug: "know-your-customer-rule-2090",
    type: "single",
    difficulty: "medium",
    tags: ["fn:2", "kyc", "scenario"],
    prompt:
      "A customer opens a non-discretionary online account, makes all her own trades, and never receives a recommendation. Does the firm still owe a KYC duty?",
    choices: [
      { id: "a", text: "No — with no recommendation, no KYC duty exists" },
      { id: "b", text: "No — KYC applies only to discretionary accounts" },
      { id: "c", text: "Yes — `Rule 2090` is independent of any recommendation" },
      { id: "d", text: "Only if she trades on margin", feedback: "Margin doesn't determine the KYC duty. Rule 2090 attaches at account opening for every customer, regardless of how the account trades." },
    ],
    correctId: "c",
    explanation:
      "KYC does not depend on a recommendation. The firm must still verify identity, know who is authorized, and gather enough financial information to service the account — all required even with zero advice.",
  },
  {
    id: "know-your-customer-rule-2090.q3",
    lessonSlug: "know-your-customer-rule-2090",
    type: "single",
    difficulty: "medium",
    tags: ["fn:2", "kyc", "essential-facts"],
    prompt: "Which of the following is **NOT** one of the purposes of gathering 'essential facts' under `Rule 2090`?",
    choices: [
      { id: "a", text: "To effectively service the customer's account" },
      { id: "b", text: "To maximize the firm's commissions", feedback: "This is exactly the distractor to avoid. Every essential-facts purpose is about properly servicing the account and complying with the law — never about generating revenue." },
      { id: "c", text: "To understand the authority of each person acting on the customer's behalf" },
      { id: "d", text: "To comply with applicable laws and regulations" },
    ],
    correctId: "b",
    explanation:
      "The four purposes are: service the account, follow special handling instructions, understand each actor's authority, and comply with the law. Maximizing commissions is never an essential-facts purpose.",
  },
  {
    id: "know-your-customer-rule-2090.q4",
    lessonSlug: "know-your-customer-rule-2090",
    type: "single",
    difficulty: "easy",
    tags: ["fn:2", "kyc", "rule-2090"],
    prompt: "What standard of effort does `Rule 2090` require a firm to apply in knowing its customers?",
    choices: [
      { id: "a", text: "Absolute certainty about every fact" },
      { id: "b", text: "Reasonable diligence" },
      { id: "c", text: "Only what the customer volunteers, with no follow-up" },
      { id: "d", text: "A signed waiver in place of any inquiry" },
    ],
    correctId: "b",
    explanation:
      "`Rule 2090` requires **reasonable diligence** in opening and maintaining the account — a good-faith effort to learn and keep current the essential facts.",
  },
  {
    id: "know-your-customer-rule-2090.q5",
    lessonSlug: "know-your-customer-rule-2090",
    type: "single",
    difficulty: "medium",
    tags: ["fn:2", "kyc", "suitability"],
    prompt: "What best describes the relationship between KYC and suitability?",
    choices: [
      { id: "a", text: "KYC gathers the customer profile; suitability uses that profile to test a recommendation" },
      { id: "b", text: "They are the same rule under two names" },
      { id: "c", text: "Suitability gathers the profile and KYC tests the recommendation" },
      { id: "d", text: "KYC only applies after a suitability determination is made", feedback: "It's the reverse ordering. KYC is the data-gathering floor that comes first; suitability is the later analysis that consumes the profile." },
    ],
    correctId: "a",
    explanation:
      "KYC (`Rule 2090`) is the data-gathering step that fills in the investment profile. Suitability (`Rule 2111`) and Reg BI then consume that profile when a recommendation is actually made.",
  },
  {
    id: "know-your-customer-rule-2090.q6",
    lessonSlug: "know-your-customer-rule-2090",
    type: "single",
    difficulty: "medium",
    tags: ["fn:2", "kyc", "investment-profile"],
    prompt: "Which item belongs in the customer's investment profile under `Rule 2111(a)`?",
    choices: [
      { id: "a", text: "The firm's quarterly revenue target" },
      { id: "b", text: "The registered rep's commission grid" },
      { id: "c", text: "The customer's time horizon, liquidity needs, and risk tolerance" },
      { id: "d", text: "The market index's expected return" },
    ],
    correctId: "c",
    explanation:
      "The profile is about the *customer*: age, other investments, financial situation and needs, tax status, objectives, experience, time horizon, liquidity needs, and risk tolerance.",
  },
  {
    id: "know-your-customer-rule-2090.q7",
    lessonSlug: "know-your-customer-rule-2090",
    type: "single",
    difficulty: "hard",
    tags: ["fn:2", "kyc", "scenario", "authority"],
    prompt:
      "A trust account is opened and a trustee will direct all activity. Under `Rule 2090`, which essential fact is most directly implicated by this setup?",
    choices: [
      { id: "a", text: "Understanding the authority of each person acting on the customer's behalf" },
      { id: "b", text: "Maximizing the trust's turnover" },
      { id: "c", text: "Recommending the highest-commission products to the trustee" },
      { id: "d", text: "Avoiding any record of who controls the account", feedback: "The opposite is required. Knowing exactly who has authority — here, the trustee — is one of the four essential-facts purposes." },
    ],
    correctId: "a",
    explanation:
      "One of the four essential-facts purposes is understanding the **authority** of each person acting for the customer. With a trustee directing the account, the firm must know the scope of that person's power to act.",
  },
  {
    id: "know-your-customer-rule-2090.q8",
    lessonSlug: "know-your-customer-rule-2090",
    type: "single",
    difficulty: "hard",
    tags: ["fn:2", "kyc", "rule-2090", "maintenance"],
    prompt:
      "Two years after opening, a customer calls to say she has retired and her income has dropped sharply. What does `Rule 2090` imply about this update?",
    choices: [
      { id: "a", text: "Nothing — KYC obligations end after the account is opened" },
      { id: "b", text: "The firm should update essential facts because the duty continues while maintaining the account" },
      { id: "c", text: "The change is irrelevant unless she asks for a recommendation" },
      { id: "d", text: "The firm must close the account" },
    ],
    correctId: "b",
    explanation:
      "`Rule 2090` requires reasonable diligence in **opening and maintaining** the account. The duty is ongoing, so a material change like retirement should be reflected in the customer's essential facts.",
  },
];

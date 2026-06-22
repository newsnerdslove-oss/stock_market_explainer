import type { Question } from "@/lib/quiz/types";

// Quiz for "New Issues: Underwriting & Securities Act Exemptions".
export const questions: Question[] = [
  {
    id: "new-issues-underwriting-and-securities-act-exemptions.q1",
    lessonSlug: "new-issues-underwriting-and-securities-act-exemptions",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "regulation", "cooling-off"],
    prompt: "During the cooling-off period of a 1933 Act registration, what may the underwriter do?",
    choices: [
      { id: "a", text: "Sell shares and accept payment" },
      { id: "b", text: "Circulate a red herring to gather indications of interest" },
      { id: "c", text: "Advertise the new issue to the public", feedback: "Advertising the issue is prohibited during cooling-off — only a red herring may circulate, and only to gather non-binding interest." },
      { id: "d", text: "Deliver the final prospectus and close sales" },
    ],
    correctId: "b",
    explanation:
      "During cooling-off the underwriter may circulate a **red herring** to gather **non-binding indications of interest**. **No sales, payment, or advertising** of the issue are allowed until the **effective date**.",
  },
  {
    id: "new-issues-underwriting-and-securities-act-exemptions.q2",
    lessonSlug: "new-issues-underwriting-and-securities-act-exemptions",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "regulation", "underwriting"],
    prompt: "Under which underwriting commitment does the underwriter buy the entire issue and bear the risk of unsold shares?",
    choices: [
      { id: "a", text: "Best efforts" },
      { id: "b", text: "All-or-none" },
      { id: "c", text: "Firm commitment" },
      { id: "d", text: "Standby agency", feedback: "In a firm commitment the underwriter takes the issue onto its own books; an agency arrangement leaves the risk with the issuer." },
    ],
    correctId: "c",
    explanation:
      "In a **firm commitment**, the underwriter **buys the whole issue** from the issuer and resells it, taking the risk of any **unsold shares**. The issuer's proceeds are guaranteed.",
  },
  {
    id: "new-issues-underwriting-and-securities-act-exemptions.q3",
    lessonSlug: "new-issues-underwriting-and-securities-act-exemptions",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "regulation", "exempt-securities"],
    prompt: "Which of the following is an exempt security under the Securities Act of 1933?",
    choices: [
      { id: "a", text: "Common stock in a new technology IPO" },
      { id: "b", text: "Shares of a closed-end fund" },
      { id: "c", text: "Corporate bonds of a Fortune 500 issuer" },
      { id: "d", text: "Municipal securities issued by a state government" },
    ],
    correctId: "d",
    explanation:
      "**Municipal** securities are **exempt securities** — exempt because of *what they are*. So are **U.S. government** and **bank-issued** securities. Corporate stock and bonds are non-exempt and generally must be registered.",
  },
  {
    id: "new-issues-underwriting-and-securities-act-exemptions.q4",
    lessonSlug: "new-issues-underwriting-and-securities-act-exemptions",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "regulation", "reg-d"],
    prompt: "Under Rule 506(b) of Reg D, how many non-accredited (sophisticated) investors may participate?",
    choices: [
      { id: "a", text: "Up to `35`" },
      { id: "b", text: "Unlimited, the same as accredited investors" },
      { id: "c", text: "Exactly `100`" },
      { id: "d", text: "None — only accredited investors are allowed", feedback: "That rule describes 506(c). Under 506(b) up to 35 non-accredited but sophisticated investors may participate." },
    ],
    correctId: "a",
    explanation:
      "**Rule 506(b)** allows an **unlimited** number of **accredited** investors plus up to **`35`** **non-accredited but sophisticated** investors, with **no general solicitation**. The issuer files a **Form D**.",
  },
  {
    id: "new-issues-underwriting-and-securities-act-exemptions.q5",
    lessonSlug: "new-issues-underwriting-and-securities-act-exemptions",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "regulation", "accredited-investor"],
    prompt: "Which individual qualifies as an accredited investor?",
    choices: [
      { id: "a", text: "Anyone who signs a sophistication letter" },
      { id: "b", text: "An investor with a `$1 million` net worth counting their primary residence" },
      { id: "c", text: "An investor with income of at least `$200,000` in the two most recent years" },
      { id: "d", text: "An investor with `$50,000` in a brokerage account" },
    ],
    correctId: "c",
    explanation:
      "An **accredited investor** has income of at least **`$200,000`** (or **`$300,000`** with a spouse) in the two most recent years, **or** net worth over **`$1 million` excluding the primary residence**.",
  },
  {
    id: "new-issues-underwriting-and-securities-act-exemptions.q6",
    lessonSlug: "new-issues-underwriting-and-securities-act-exemptions",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "regulation", "rule-144"],
    prompt: "What is the Rule 144 holding period for restricted stock of a reporting company before public resale?",
    choices: [
      { id: "a", text: "`30 days`" },
      { id: "b", text: "`6 months`" },
      { id: "c", text: "`1 year`" },
      { id: "d", text: "`2 years`", feedback: "Two years was the old standard; the current holding period is 6 months for a reporting company (1 year for a non-reporting company)." },
    ],
    correctId: "b",
    explanation:
      "Under **Rule 144**, restricted stock of a **reporting** company carries a **`6-month`** holding period (**`1 year`** for a non-reporting company). Affiliates also face a **volume limit** per `90`-day period.",
  },
  {
    id: "new-issues-underwriting-and-securities-act-exemptions.q7",
    lessonSlug: "new-issues-underwriting-and-securities-act-exemptions",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "regulation", "reg-a"],
    prompt: "Under Regulation A, what is the maximum a Tier 2 offering may raise in a 12-month period?",
    choices: [
      { id: "a", text: "`$5 million`" },
      { id: "b", text: "`$20 million`", feedback: "`$20 million` is the Tier 1 ceiling; Tier 2 allows substantially more." },
      { id: "c", text: "`$50 million`" },
      { id: "d", text: "`$75 million`" },
    ],
    correctId: "d",
    explanation:
      "**Reg A Tier 2** permits up to **`$75 million`** in a 12-month period; **Tier 1** is capped at **`$20 million`**. Issuers file an **offering circular** rather than a full prospectus.",
  },
];

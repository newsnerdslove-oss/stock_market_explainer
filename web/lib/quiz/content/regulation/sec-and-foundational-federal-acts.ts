import type { Question } from "@/lib/quiz/types";

// Quiz for "The SEC & the Foundational Federal Acts (1933 & 1934)".
export const questions: Question[] = [
  {
    id: "sec-and-foundational-federal-acts.q1",
    lessonSlug: "sec-and-foundational-federal-acts",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "regulation", "federal-acts"],
    prompt: "Which act created the SEC and regulates the secondary market?",
    choices: [
      { id: "a", text: "The `Securities Act of 1933`" },
      { id: "b", text: "The `Securities Exchange Act of 1934`" },
      { id: "c", text: "The `Investment Company Act of 1940`" },
      { id: "d", text: "The `Trust Indenture Act of 1939`" },
    ],
    correctId: "b",
    explanation:
      "The `Securities Exchange Act of 1934` **created the SEC** and governs the **secondary market**. The 1933 Act governs new issues and did not create the SEC.",
  },
  {
    id: "sec-and-foundational-federal-acts.q2",
    lessonSlug: "sec-and-foundational-federal-acts",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "regulation", "primary-market"],
    prompt: "The `Securities Act of 1933` primarily governs which market?",
    choices: [
      { id: "a", text: "The secondary market — investor-to-investor trading" },
      { id: "b", text: "The primary market — new issues" },
      { id: "c", text: "The municipal market only" },
      { id: "d", text: "The options market only", feedback: "The 1933 Act is the 'new issues' statute — the primary market — not a derivatives or secondary-trading rule." },
    ],
    correctId: "b",
    explanation:
      "The `Securities Act of 1933` — the 'Paper Act' / 'Prospectus Act' — governs **new issues** in the **primary market**, requiring registration and a prospectus.",
  },
  {
    id: "sec-and-foundational-federal-acts.q3",
    lessonSlug: "sec-and-foundational-federal-acts",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "regulation", "cooling-off"],
    prompt: "What is the minimum cooling-off period after a registration is filed under the `Securities Act of 1933`?",
    choices: [
      { id: "a", text: "`10 days`" },
      { id: "b", text: "`20 days`" },
      { id: "c", text: "`30 days`" },
      { id: "d", text: "`90 days`" },
    ],
    correctId: "b",
    explanation:
      "The cooling-off period is **at least `20 days`**. During it, a **red herring** may circulate to gauge interest, but **no sales** may occur.",
  },
  {
    id: "sec-and-foundational-federal-acts.q4",
    lessonSlug: "sec-and-foundational-federal-acts",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "regulation", "red-herring"],
    prompt: "During the cooling-off period, what may an underwriter do with a red herring (preliminary prospectus)?",
    choices: [
      { id: "a", text: "Sell the shares and accept payment" },
      { id: "b", text: "Circulate it to gauge interest, but accept no sales or payment" },
      { id: "c", text: "Guarantee a final price to investors" },
      { id: "d", text: "Nothing — distribution is prohibited until the effective date", feedback: "The red herring is specifically allowed during cooling-off to gauge indications of interest; only sales and payment are barred." },
    ],
    correctId: "b",
    explanation:
      "A **red herring** may circulate during cooling-off to gather indications of interest, but **no sales and no payment** may be accepted until the **effective date**.",
  },
  {
    id: "sec-and-foundational-federal-acts.q5",
    lessonSlug: "sec-and-foundational-federal-acts",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "regulation", "sipc"],
    prompt: "What are SIPC's coverage limits per customer?",
    choices: [
      { id: "a", text: "`$250,000` total, with no cash sublimit" },
      { id: "b", text: "`$500,000` per customer, including a `$250,000` cash sublimit" },
      { id: "c", text: "`$500,000` per customer, all of which may be cash" },
      { id: "d", text: "Unlimited, covering market losses" },
    ],
    correctId: "b",
    explanation:
      "**SIPC** protects up to `$500,000` per customer, including a `$250,000` cash sublimit. It covers missing assets from a **failed firm** — never **market losses**.",
  },
  {
    id: "sec-and-foundational-federal-acts.q6",
    lessonSlug: "sec-and-foundational-federal-acts",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "regulation", "sipc"],
    prompt: "Which loss does SIPC NOT cover?",
    choices: [
      { id: "a", text: "Cash missing from a failed brokerage firm" },
      { id: "b", text: "Securities missing from a failed brokerage firm" },
      { id: "c", text: "A decline in a stock's market value" },
      { id: "d", text: "Customer securities held at a firm in liquidation", feedback: "SIPC steps in precisely when a firm fails — what it never covers is ordinary market losses on positions that still exist." },
    ],
    correctId: "c",
    explanation:
      "**SIPC** replaces cash and securities missing because a **firm failed**. It does **not** cover **market losses** — a stock simply falling in value is not a SIPC claim.",
  },
  {
    id: "sec-and-foundational-federal-acts.q7",
    lessonSlug: "sec-and-foundational-federal-acts",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "regulation", "federal-acts"],
    prompt: "Which act requires a paid investment adviser to register?",
    choices: [
      { id: "a", text: "The `Investment Advisers Act of 1940`" },
      { id: "b", text: "The `Investment Company Act of 1940`" },
      { id: "c", text: "The `Trust Indenture Act of 1939`" },
      { id: "d", text: "The `Securities Act of 1933`", feedback: "The 1933 Act covers new-issue registration of securities, not the registration of advisers — that's the Advisers Act." },
    ],
    correctId: "a",
    explanation:
      "The `Investment Advisers Act of 1940` requires **paid advisers** to register. The `Investment Company Act of 1940` instead regulates **mutual funds** and other investment companies.",
  },
  {
    id: "sec-and-foundational-federal-acts.q8",
    lessonSlug: "sec-and-foundational-federal-acts",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "regulation", "scenario"],
    prompt:
      "A company completes its IPO and shares begin trading between investors. Which statute now governs that trading?",
    choices: [
      { id: "a", text: "The `Securities Act of 1933`, because it was the IPO statute" },
      { id: "b", text: "The `Securities Exchange Act of 1934`, which governs the secondary market" },
      { id: "c", text: "The `Trust Indenture Act of 1939`" },
      { id: "d", text: "No federal statute — secondary trading is unregulated", feedback: "Secondary trading is heavily regulated; the 1934 Act and the SEC it created govern it." },
    ],
    correctId: "b",
    explanation:
      "The `Securities Act of 1933` governs the **primary** offering; once shares trade investor-to-investor, the **secondary market** rules of the `Securities Exchange Act of 1934` take over.",
  },
];

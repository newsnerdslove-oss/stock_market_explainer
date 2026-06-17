import type { Question } from "@/lib/quiz/types";

// Quiz for the "Matching Products to Profiles: Worked Recommendation Scenarios" lesson.
export const questions: Question[] = [
  {
    id: "suitable-recommendations-by-profile.q1",
    lessonSlug: "suitable-recommendations-by-profile",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "suitability", "scenario", "retiree"],
    prompt:
      "A 68-year-old whose sole need is steady income with low risk asks for a recommendation. Which is suitable?",
    choices: [
      { id: "a", text: "Writing uncovered options for premium income", feedback: "Uncovered options carry open-ended risk — wholly inappropriate for a low-risk retiree relying on the account for income." },
      { id: "b", text: "An investment-grade bond ladder plus dividend equities" },
      { id: "c", text: "Putting 70% of the portfolio in one growth stock" },
      { id: "d", text: "A concentrated position in a low-priced speculative biotech" },
    ],
    correctId: "b",
    explanation:
      "Income plus preservation with low risk points to an investment-grade **bond ladder** and **dividend equities**. Uncovered options and concentrated growth positions are unsuitable.",
  },
  {
    id: "suitable-recommendations-by-profile.q2",
    lessonSlug: "suitable-recommendations-by-profile",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "suitability", "tax", "municipal-bonds"],
    prompt:
      "A high-tax-bracket investor wants tax-efficient income in a taxable account. Which recommendation fits best?",
    choices: [
      { id: "a", text: "Corporate high-yield bonds" },
      { id: "b", text: "Municipal bonds" },
      { id: "c", text: "Municipal bonds held inside a tax-deferred IRA", feedback: "Munis are right for the high bracket, but placing them in a tax-deferred IRA wastes the exemption. They belong in the taxable account." },
      { id: "d", text: "A money-market fund" },
    ],
    correctId: "b",
    explanation:
      "Municipal bonds give federally tax-exempt income suited to a high-bracket investor in a **taxable** account. Holding munis in a tax-deferred account would waste the exemption.",
  },
  {
    id: "suitable-recommendations-by-profile.q3",
    lessonSlug: "suitable-recommendations-by-profile",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "suitability", "scenario", "liquidity"],
    prompt:
      "A wealthy, risk-tolerant customer needs the funds for a home purchase in 8 months. Is an illiquid non-traded REIT suitable?",
    choices: [
      { id: "a", text: "Yes — wealth and risk tolerance make it suitable" },
      { id: "b", text: "No — the near-term liquidity need overrides wealth and risk tolerance" },
      { id: "c", text: "Yes — non-traded REITs are highly liquid" },
      { id: "d", text: "Yes — as long as the customer signs a waiver", feedback: "No waiver cures a liquidity mismatch. A near-term liquidity need makes the illiquid product unsuitable regardless of wealth or signed forms." },
    ],
    correctId: "b",
    explanation:
      "The **liquidity override** controls: a near-term need (a home purchase in 8 months) makes an illiquid non-traded REIT unsuitable, even for a wealthy, risk-tolerant customer.",
  },
  {
    id: "suitable-recommendations-by-profile.q4",
    lessonSlug: "suitable-recommendations-by-profile",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "suitability", "scenario", "growth"],
    prompt:
      "A 28-year-old with a growth objective, high risk tolerance, and a long horizon needs a recommendation. Which is suitable?",
    choices: [
      { id: "a", text: "Holding the entire account in a money-market fund" },
      { id: "b", text: "A diversified portfolio of equity and growth funds" },
      { id: "c", text: "A single concentrated municipal bond" },
      { id: "d", text: "Short-term CDs rolled indefinitely", feedback: "CDs preserve principal but won't deliver growth over a long horizon, and they invite inflation risk — a mismatch with this profile." },
    ],
    correctId: "b",
    explanation:
      "A growth objective with a long horizon and high risk tolerance is well served by **diversified equity/growth funds**. All-cash or all-CD choices defeat the objective and invite inflation risk.",
  },
  {
    id: "suitable-recommendations-by-profile.q5",
    lessonSlug: "suitable-recommendations-by-profile",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "suitability", "scenario", "speculation"],
    prompt:
      "A wealthy, risk-tolerant customer has $50,000 of true surplus risk capital but also a college savings fund for her children. For which money is an options speculation strategy suitable?",
    choices: [
      { id: "a", text: "The college savings fund, since it has a long horizon" },
      { id: "b", text: "The $50,000 of surplus risk capital only" },
      { id: "c", text: "Both pools, since the customer is wealthy" },
      { id: "d", text: "Neither — options are never suitable for anyone", feedback: "Options can be suitable for a speculator, but only with loss-tolerant surplus funds — here the $50k, not the earmarked college money." },
    ],
    correctId: "b",
    explanation:
      "Speculation is suitable only with **surplus, loss-tolerant funds**. The $50,000 of true risk capital qualifies; the children's college savings is earmarked and not loss-tolerant.",
  },
  {
    id: "suitable-recommendations-by-profile.q6",
    lessonSlug: "suitable-recommendations-by-profile",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "suitability", "method"],
    prompt: "In the suitability method, what is the final check after a product fits the objective and constraints?",
    choices: [
      { id: "a", text: "Confirm the cost is in the customer's best interest (Reg BI Care)" },
      { id: "b", text: "Confirm the broker earns the highest possible commission" },
      { id: "c", text: "Confirm the product is the firm's proprietary fund" },
      { id: "d", text: "Confirm the trade settles same-day" },
    ],
    correctId: "a",
    explanation:
      "After filtering by objective, constraints, and concentration, the final step is confirming **cost** is in the customer's best interest under the `Reg BI` Care Obligation.",
  },
  {
    id: "suitable-recommendations-by-profile.q7",
    lessonSlug: "suitable-recommendations-by-profile",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "suitability", "concentration", "scenario"],
    prompt:
      "A conservative retiree's broker wants to place 70% of her portfolio in one solid blue-chip stock. What's the suitability problem?",
    choices: [
      { id: "a", text: "There is none, because blue-chip stocks are always suitable" },
      { id: "b", text: "Unsuitable concentration — too large a dose of one security for this profile" },
      { id: "c", text: "The stock pays a dividend, which is prohibited", feedback: "Dividends aren't prohibited. The issue is the 70% concentration in a single security, which is inappropriate for a conservative retiree." },
      { id: "d", text: "Blue-chip stocks can't be held by retirees" },
    ],
    correctId: "b",
    explanation:
      "Even a sound product becomes unsuitable in too large a dose. A **70% single-stock concentration** fails the diversification/concentration check for a conservative retiree.",
  },
  {
    id: "suitable-recommendations-by-profile.q8",
    lessonSlug: "suitable-recommendations-by-profile",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "suitability", "misconception"],
    prompt: "Which statement about suitability is correct?",
    choices: [
      { id: "a", text: "A wealthy or risk-tolerant customer can be sold any product" },
      { id: "b", text: "High net worth or risk tolerance overrides liquidity needs" },
      { id: "c", text: "Suitability is the intersection of all profile factors; one failed constraint makes a recommendation unsuitable" },
      { id: "d", text: "Time horizon is irrelevant once a customer is wealthy", feedback: "Time horizon, liquidity, and concentration limits always apply. Wealth never overrides them — suitability is the intersection of every factor." },
    ],
    correctId: "c",
    explanation:
      "Suitability is the **intersection of all profile factors**. Wealth and risk tolerance never override time horizon, liquidity needs, or concentration limits; one failed constraint defeats the recommendation.",
  },
];

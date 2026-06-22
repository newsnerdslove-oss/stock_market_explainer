import type { Question } from "@/lib/quiz/types";

// Quiz for the "Agency & Mortgage-Backed Securities" lesson.
export const questions: Question[] = [
  {
    id: "agency-and-mortgage-backed-securities.q1",
    lessonSlug: "agency-and-mortgage-backed-securities",
    type: "single",
    difficulty: "medium",
    tags: ["fixed-income", "agency", "gnma"],
    prompt: "Which mortgage-backed issuer carries the **full faith and credit of the US government**?",
    choices: [
      { id: "a", text: "GNMA (Ginnie Mae)" },
      { id: "b", text: "FNMA (Fannie Mae)", feedback: "Fannie Mae is a GSE — a public company, not full faith and credit." },
      { id: "c", text: "FHLMC (Freddie Mac)", feedback: "Freddie Mac is a GSE, not backed by full faith and credit." },
      { id: "d", text: "All three equally" },
    ],
    correctId: "a",
    explanation:
      "**GNMA (Ginnie Mae)** is a government corporation and the **only** MBS issuer with the **full faith and credit** of the US. Fannie and Freddie are **GSEs** — public companies, not a legal government guarantee.",
  },
  {
    id: "agency-and-mortgage-backed-securities.q2",
    lessonSlug: "agency-and-mortgage-backed-securities",
    type: "single",
    difficulty: "medium",
    tags: ["fixed-income", "gse"],
    prompt: "Fannie Mae and Freddie Mac are best described as…",
    choices: [
      { id: "a", text: "Government-sponsored enterprises (GSEs) — public companies, not full faith and credit" },
      { id: "b", text: "Federal agencies fully guaranteed by the Treasury" },
      { id: "c", text: "Divisions of the Federal Reserve" },
      { id: "d", text: "Private mutual funds that buy mortgages" },
    ],
    correctId: "a",
    explanation:
      "Fannie and Freddie are **GSEs** — publicly traded companies. Their securities are **not** backed by the government's full faith and credit, even while in federal conservatorship.",
  },
  {
    id: "agency-and-mortgage-backed-securities.q3",
    lessonSlug: "agency-and-mortgage-backed-securities",
    type: "single",
    difficulty: "medium",
    tags: ["fixed-income", "pass-through"],
    prompt: "Why is a mortgage **pass-through certificate** called *self-amortizing*?",
    choices: [
      { id: "a", text: "Each monthly payment returns some principal, so the balance shrinks over time" },
      { id: "b", text: "It repays the entire principal in one lump at maturity", feedback: "That's a bullet bond. Pass-throughs return principal monthly." },
      { id: "c", text: "It never repays principal, only interest" },
      { id: "d", text: "It automatically reinvests all coupons" },
    ],
    correctId: "a",
    explanation:
      "Homeowners pay **principal and interest** monthly, and both pass through to investors. Because principal returns every month, the balance **amortizes** down over the life rather than repaying par at the end.",
  },
  {
    id: "agency-and-mortgage-backed-securities.q4",
    lessonSlug: "agency-and-mortgage-backed-securities",
    type: "single",
    difficulty: "hard",
    tags: ["fixed-income", "prepayment-risk"],
    prompt: "Interest rates **fall** sharply. What happens to a mortgage pass-through holder?",
    choices: [
      { id: "a", text: "Prepayment risk: homeowners refinance, returning principal early to reinvest at lower yields" },
      { id: "b", text: "Extension risk: prepayments slow and the security lasts longer", feedback: "Extension risk happens when rates RISE and prepayments slow. Falling rates trigger prepayment." },
      { id: "c", text: "Nothing — MBS cash flows are fixed like a regular bond" },
      { id: "d", text: "The coupon rate automatically rises" },
    ],
    correctId: "a",
    explanation:
      "Falling rates trigger **prepayment risk** — homeowners refinance, so principal floods back exactly when it must be reinvested at **lower** rates. (Rising rates do the opposite: **extension risk**.)",
  },
  {
    id: "agency-and-mortgage-backed-securities.q5",
    lessonSlug: "agency-and-mortgage-backed-securities",
    type: "single",
    difficulty: "hard",
    tags: ["fixed-income", "cmo"],
    prompt: "What does a **CMO** do with a pool of mortgages?",
    choices: [
      { id: "a", text: "Slices the cash flows into tranches that reorder prepayment risk" },
      { id: "b", text: "Eliminates prepayment risk entirely", feedback: "A CMO redistributes prepayment risk across tranches — it doesn't make it disappear." },
      { id: "c", text: "Converts the mortgages into common stock" },
      { id: "d", text: "Guarantees a fixed maturity date for every investor" },
    ],
    correctId: "a",
    explanation:
      "A **CMO** carves a mortgage pool into **tranches**. In a sequential CMO, principal pays down one tranche at a time, so early tranches absorb prepayment first — **redistributing**, not removing, the risk.",
  },
  {
    id: "agency-and-mortgage-backed-securities.q6",
    lessonSlug: "agency-and-mortgage-backed-securities",
    type: "single",
    difficulty: "medium",
    tags: ["fixed-income", "taxation"],
    prompt: "How is the interest on agency MBS (GNMA/FNMA/FHLMC) taxed?",
    choices: [
      { id: "a", text: "Fully taxable at the federal, state, and local levels" },
      { id: "b", text: "Exempt from state and local tax, like Treasuries", feedback: "That's the Treasury rule. Agency MBS interest is fully taxable at all levels." },
      { id: "c", text: "Entirely tax-free, like municipal bonds" },
      { id: "d", text: "Taxed only when the security matures" },
    ],
    correctId: "a",
    explanation:
      "Agency MBS interest is **fully taxable** at federal, state, and local levels — unlike **US Treasuries**, which are exempt from state and local tax.",
  },
];

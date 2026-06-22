import type { Question } from "@/lib/quiz/types";

// Quiz for the "Corporate Bond Structure & Seniority" lesson.
export const questions: Question[] = [
  {
    id: "corporate-bond-structure-and-seniority.q1",
    lessonSlug: "corporate-bond-structure-and-seniority",
    type: "single",
    difficulty: "easy",
    tags: ["bonds", "corporate", "secured"],
    prompt: "What makes a bond a **secured** bond?",
    choices: [
      { id: "a", text: "It is backed by specific collateral the issuer pledges" },
      { id: "b", text: "It is backed only by the issuer's general promise to pay", feedback: "That describes an unsecured debenture, not a secured bond." },
      { id: "c", text: "It is guaranteed by the federal government" },
      { id: "d", text: "It always carries a higher yield than a debenture" },
    ],
    correctId: "a",
    explanation:
      "A **secured bond** pledges specific **collateral**. If the issuer defaults, holders have a direct claim on that asset — which is why secured bonds yield *less* than unsecured debt.",
  },
  {
    id: "corporate-bond-structure-and-seniority.q2",
    lessonSlug: "corporate-bond-structure-and-seniority",
    type: "single",
    difficulty: "easy",
    tags: ["bonds", "corporate", "secured"],
    prompt: "An airline issues bonds secured by its fleet of aircraft. This is best described as a…",
    choices: [
      { id: "a", text: "Mortgage bond" },
      { id: "b", text: "Subordinated debenture" },
      { id: "c", text: "Equipment trust certificate" },
      { id: "d", text: "Collateral trust bond", feedback: "Collateral trust bonds are backed by other securities, not movable equipment." },
    ],
    correctId: "c",
    explanation:
      "An **equipment trust certificate (ETC)** is secured by *movable equipment* like aircraft or railcars — the classic financing tool for airlines and railroads.",
  },
  {
    id: "corporate-bond-structure-and-seniority.q3",
    lessonSlug: "corporate-bond-structure-and-seniority",
    type: "single",
    difficulty: "easy",
    tags: ["bonds", "corporate", "debenture"],
    prompt: "A **debenture** is backed by…",
    choices: [
      { id: "a", text: "A pledge of the company's real estate" },
      { id: "b", text: "Securities deposited with a trustee" },
      { id: "c", text: "The issuer's general credit and promise to pay — no specific collateral" },
      { id: "d", text: "A federal guarantee" },
    ],
    correctId: "c",
    explanation:
      "A **debenture** is **unsecured** — backed only by the issuer's general credit and promise to pay, with no specific asset pledged.",
  },
  {
    id: "corporate-bond-structure-and-seniority.q4",
    lessonSlug: "corporate-bond-structure-and-seniority",
    type: "single",
    difficulty: "medium",
    tags: ["bonds", "indenture", "regulation"],
    prompt: "Under the **Trust Indenture Act of 1939**, what is the trustee's primary role?",
    choices: [
      { id: "a", text: "To set the bond's coupon rate each year" },
      { id: "b", text: "To act on behalf of the bondholders and enforce the indenture" },
      { id: "c", text: "To represent the issuer's management" },
      { id: "d", text: "To guarantee repayment of the bonds", feedback: "The trustee enforces the indenture; it does not guarantee the debt." },
    ],
    correctId: "b",
    explanation:
      "The **trustee** (usually a bank) is appointed to act *for the bondholders* — enforcing the indenture's terms and protecting investors, not the company.",
  },
  {
    id: "corporate-bond-structure-and-seniority.q5",
    lessonSlug: "corporate-bond-structure-and-seniority",
    type: "single",
    difficulty: "medium",
    tags: ["bonds", "indenture", "covenants"],
    prompt: "What is a **sinking fund** designed to do?",
    choices: [
      { id: "a", text: "Set money aside to retire the bonds gradually, lowering credit risk" },
      { id: "b", text: "Increase the bond's coupon over time" },
      { id: "c", text: "Pay the trustee's annual fees" },
      { id: "d", text: "Convert the bonds into common stock", feedback: "That's a conversion feature, not a sinking fund." },
    ],
    correctId: "a",
    explanation:
      "A **sinking fund** is money the issuer sets aside over time to retire the bonds gradually, reducing credit risk by avoiding one large repayment at maturity.",
  },
  {
    id: "corporate-bond-structure-and-seniority.q6",
    lessonSlug: "corporate-bond-structure-and-seniority",
    type: "single",
    difficulty: "hard",
    tags: ["bonds", "bankruptcy", "seniority"],
    prompt:
      "A company is liquidated. Rank these from **first** to **last** paid: subordinated debentures, secured (mortgage) bondholders, common stock, general creditors (debentures).",
    choices: [
      { id: "a", text: "General creditors → secured bondholders → common stock → subordinated debentures" },
      { id: "b", text: "Secured bondholders → general creditors → subordinated debentures → common stock" },
      { id: "c", text: "Common stock → secured bondholders → general creditors → subordinated debentures" },
      { id: "d", text: "Secured bondholders → subordinated debentures → general creditors → common stock", feedback: "Subordinated debentures rank *below* general creditors, not above them." },
    ],
    correctId: "b",
    explanation:
      "The ladder runs **secured creditors → general creditors (debentures) → subordinated debentures → preferred stock → common stock**. Each tier is paid in full before the next gets anything.",
  },
  {
    id: "corporate-bond-structure-and-seniority.q7",
    lessonSlug: "corporate-bond-structure-and-seniority",
    type: "single",
    difficulty: "hard",
    tags: ["bonds", "bankruptcy", "seniority"],
    prompt:
      "In a liquidation, which claim is paid **first** — a subordinated debenture holder or a preferred stockholder?",
    choices: [
      { id: "a", text: "The preferred stockholder, because preferred ranks above all debt" },
      { id: "b", text: "They are paid at the same time" },
      { id: "c", text: "The subordinated debenture holder, because all debt outranks all equity" },
      { id: "d", text: "Neither — both rank below common stock" },
    ],
    correctId: "c",
    explanation:
      "Even a **subordinated debenture is still debt**, and *all* debt is paid before *any* equity. So the subordinated debenture holder ranks ahead of the preferred (and common) stockholder.",
  },
];

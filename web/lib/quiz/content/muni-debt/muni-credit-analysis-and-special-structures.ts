import type { Question } from "@/lib/quiz/types";

// Quiz for the "Muni Credit Analysis & Special Structures" lesson.
export const questions: Question[] = [
  {
    id: "muni-credit-analysis-and-special-structures.q1",
    lessonSlug: "muni-credit-analysis-and-special-structures",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "municipal-bonds", "go-credit"],
    prompt:
      "Which metric is most relevant to analyzing a **general obligation** bond rather than a revenue bond?",
    choices: [
      { id: "a", text: "Debt-service coverage ratio" },
      { id: "b", text: "The project's rate covenant" },
      { id: "c", text: "Debt per capita and debt-to-assessed-value" },
      { id: "d", text: "The net revenue pledge in the flow of funds", feedback: "Flow of funds and pledges describe revenue-bond cash flow, not a GO's tax base." },
    ],
    correctId: "c",
    explanation:
      "GO analysis centers on the **tax base** — debt per capita, debt-to-assessed-value, overlapping debt, and collection rates. Coverage, rate covenants, and flow of funds belong to **revenue**-bond analysis.",
  },
  {
    id: "muni-credit-analysis-and-special-structures.q2",
    lessonSlug: "muni-credit-analysis-and-special-structures",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "municipal-bonds", "overlapping-debt"],
    prompt:
      "A city's residents also pay taxes to the county and the school district, each of which has its own bonds. In a GO analysis, the county and school-district bonds are best described as the city's:",
    choices: [
      { id: "a", text: "Overlapping (coterminous) debt" },
      { id: "b", text: "Direct debt", feedback: "Direct debt is the city's own bonded debt; debt of other taxing bodies on the same base is overlapping." },
      { id: "c", text: "Moral obligation debt" },
      { id: "d", text: "Special assessment debt" },
    ],
    correctId: "a",
    explanation:
      "**Overlapping (coterminous) debt** is debt of other taxing bodies that draws on the **same taxpayers**. Analysts add the city's proportionate share of it to the city's **direct** debt.",
  },
  {
    id: "muni-credit-analysis-and-special-structures.q3",
    lessonSlug: "muni-credit-analysis-and-special-structures",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "municipal-bonds", "double-barreled"],
    prompt: "What backs a **double-barreled** bond?",
    choices: [
      { id: "a", text: "Only the revenue of a specific project" },
      { id: "b", text: "Both a defined revenue source and the issuer's full faith, credit, and taxing power" },
      { id: "c", text: "A non-binding pledge to seek a legislative appropriation", feedback: "That describes a moral obligation bond, not a double-barreled bond." },
      { id: "d", text: "An assessment levied only on benefiting property owners" },
    ],
    correctId: "b",
    explanation:
      "A **double-barreled** bond has two barrels: a **revenue** pledge plus the issuer's **full faith, credit, and taxing power**. Because of the tax backing, it is generally **rated as a GO**.",
  },
  {
    id: "muni-credit-analysis-and-special-structures.q4",
    lessonSlug: "muni-credit-analysis-and-special-structures",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "municipal-bonds", "moral-obligation"],
    prompt: "A **moral obligation** bond is best described as one where:",
    choices: [
      { id: "a", text: "The legislature is legally required to appropriate funds if revenues fall short", feedback: "The defining feature is that the pledge is non-binding — the legislature is NOT legally obligated to appropriate." },
      { id: "b", text: "Voter approval is always required before issuance" },
      { id: "c", text: "The state pledges its property-tax levy as primary security" },
      { id: "d", text: "The state gives a non-binding pledge to seek an appropriation to cover a deficiency, but is not legally bound" },
    ],
    correctId: "d",
    explanation:
      "A **moral obligation** bond carries a **non-binding covenant** to include an appropriation in the budget recommendation if pledged revenues fall short. The legislature is **not legally obligated**, and no voter approval is needed.",
  },
  {
    id: "muni-credit-analysis-and-special-structures.q5",
    lessonSlug: "muni-credit-analysis-and-special-structures",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "municipal-bonds", "special-tax"],
    prompt:
      "Which is repaid from an earmarked excise tax such as taxes on **gasoline, tobacco, or alcohol**?",
    choices: [
      { id: "a", text: "A special tax bond" },
      { id: "b", text: "A special assessment bond", feedback: "A special assessment bond is repaid by a levy on the specific properties that benefit, not by an excise tax." },
      { id: "c", text: "A double-barreled bond" },
      { id: "d", text: "An industrial development bond" },
    ],
    correctId: "a",
    explanation:
      "A **special tax bond** is a revenue bond repaid from a **specific excise/special tax** (gasoline, tobacco, alcohol). A **special assessment bond** instead taxes only the **properties that benefit** from the improvement.",
  },
  {
    id: "muni-credit-analysis-and-special-structures.q6",
    lessonSlug: "muni-credit-analysis-and-special-structures",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "municipal-bonds", "idb-amt"],
    prompt:
      "An **industrial development bond (IDB)** finances a plant leased to a manufacturer. Whose credit primarily backs the bond, and what is the tax catch?",
    choices: [
      { id: "a", text: "The municipality's taxing power; interest is always fully tax-exempt" },
      { id: "b", text: "The corporate lessee; interest on this specified private-activity bond can be an AMT preference item" },
      { id: "c", text: "The corporate lessee; interest is fully taxable at the federal level", feedback: "IDB interest is generally federally tax-exempt for regular tax — the catch is only the AMT add-back, not full taxation." },
      { id: "d", text: "The state legislature via a moral obligation pledge" },
    ],
    correctId: "b",
    explanation:
      "An IDB is repaid by the **corporate lessee's** lease payments, so the bond rests on the company's credit. As a **specified private-activity bond** (issued after August 7, 1986), its interest is a **tax-preference item** for the **AMT**.",
  },
  {
    id: "muni-credit-analysis-and-special-structures.q7",
    lessonSlug: "muni-credit-analysis-and-special-structures",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "municipal-bonds", "collection-ratio"],
    prompt:
      "A GO analyst notes the issuer's **collection ratio** has fallen from 98% to 91% over three years. What does this most directly signal?",
    choices: [
      { id: "a", text: "The project's debt-service coverage is improving", feedback: "Coverage is a revenue-bond metric; the collection ratio measures taxes collected vs. levied for a GO." },
      { id: "b", text: "The rate covenant has been breached" },
      { id: "c", text: "Taxpayers are increasingly failing to pay levied taxes, a tax-base stress signal" },
      { id: "d", text: "The bond has become subject to the AMT" },
    ],
    correctId: "c",
    explanation:
      "The **collection ratio** is taxes **collected ÷ levied**. A falling ratio means a growing share of assessed taxes goes unpaid — a sign of **tax-base stress** that can pressure GO repayment.",
  },
];

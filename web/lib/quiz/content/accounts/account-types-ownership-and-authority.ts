import type { Question } from "@/lib/quiz/types";

// Quiz for the "Account Types, Ownership & Authority" lesson.
export const questions: Question[] = [
  {
    id: "account-types-ownership-and-authority.q1",
    lessonSlug: "account-types-ownership-and-authority",
    type: "single",
    difficulty: "medium",
    tags: ["fn:2", "accounts", "tic"],
    prompt:
      "Two unmarried partners hold a tenants-in-common account; one contributed 70% and one 30%. The 70% owner dies. Where does the deceased owner's 70% interest go?",
    choices: [
      { id: "a", text: "Automatically to the surviving co-owner" },
      { id: "b", text: "To the deceased owner's estate" },
      { id: "c", text: "Split equally 50/50 between the estate and survivor" },
      { id: "d", text: "To the brokerage firm until probate closes" },
    ],
    correctId: "b",
    explanation:
      "In a **tenants-in-common** account, a deceased owner's fractional interest passes to **that owner's estate** — not to the surviving co-owner. TIC also permits the unequal 70/30 split.",
  },
  {
    id: "account-types-ownership-and-authority.q2",
    lessonSlug: "account-types-ownership-and-authority",
    type: "single",
    difficulty: "easy",
    tags: ["fn:2", "accounts", "jtwros"],
    prompt:
      "In a JTWROS account, what happens to a deceased owner's interest?",
    choices: [
      { id: "a", text: "It passes to the deceased owner's estate", feedback: "That's the TIC outcome. The whole point of right of survivorship (JTWROS) is that the interest passes to the survivor and bypasses probate." },
      { id: "b", text: "It is frozen indefinitely" },
      { id: "c", text: "It passes automatically to the surviving owner(s), bypassing probate" },
      { id: "d", text: "It is forfeited to the state" },
    ],
    correctId: "c",
    explanation:
      "**JTWROS** (joint tenants with right of survivorship) passes the decedent's interest **automatically to the survivor(s)**, bypassing probate — the key contrast with tenants in common.",
  },
  {
    id: "account-types-ownership-and-authority.q3",
    lessonSlug: "account-types-ownership-and-authority",
    type: "single",
    difficulty: "medium",
    tags: ["fn:2", "accounts", "discretion"],
    prompt:
      "A customer tells the rep, \"Buy 500 shares of any tech stock you like.\" Is this a discretionary order?",
    choices: [
      { id: "a", text: "No — the customer set the amount, so the rep has no discretion" },
      { id: "b", text: "No — discretion applies only to options accounts" },
      { id: "c", text: "Yes — choosing the security is discretion, requiring prior written authorization and principal approval" },
      { id: "d", text: "Yes, but only verbal authorization is needed", feedback: "Verbal isn't enough. Discretion over the asset requires PRIOR WRITTEN authorization plus firm/principal approval, and each order must be marked discretionary." },
    ],
    correctId: "c",
    explanation:
      "Choosing the **Asset** (the security) is one of the three A's of discretion. That requires **prior written authorization** plus **principal approval**, and each discretionary order must be marked as such.",
  },
  {
    id: "account-types-ownership-and-authority.q4",
    lessonSlug: "account-types-ownership-and-authority",
    type: "single",
    difficulty: "medium",
    tags: ["fn:2", "accounts", "discretion"],
    prompt:
      "Which instruction does NOT require written discretionary authorization?",
    choices: [
      { id: "a", text: "\"Buy 100 shares of XYZ whenever you think the timing is best today\"" },
      { id: "b", text: "\"Buy whatever energy stock you think is best\"" },
      { id: "c", text: "\"Invest $5,000 in whatever you choose\"" },
      { id: "d", text: "\"Sell something to raise cash; you pick what\"" },
    ],
    correctId: "a",
    explanation:
      "Choosing only **time or price** is not discretion — the customer already specified the asset, amount, and action. The other three leave the rep choosing the Asset, Amount, or Action, which is discretion.",
  },
  {
    id: "account-types-ownership-and-authority.q5",
    lessonSlug: "account-types-ownership-and-authority",
    type: "single",
    difficulty: "easy",
    tags: ["fn:2", "ugma", "accounts"],
    prompt:
      "Can a custodian buy securities on margin in a UTMA account?",
    choices: [
      { id: "a", text: "Yes, if the minor's parent co-signs" },
      { id: "b", text: "No — custodial accounts must be cash accounts; no margin, short selling, or uncovered options" },
      { id: "c", text: "Yes, up to 50% of the account value" },
      { id: "d", text: "Yes, but only with principal approval", feedback: "No approval can authorize it. A UGMA/UTMA must be a CASH account by rule — margin and short selling are flatly prohibited." },
    ],
    correctId: "b",
    explanation:
      "UGMA/UTMA accounts must be **cash accounts**. Margin, short selling, and uncovered options are prohibited regardless of who controls or signs.",
  },
  {
    id: "account-types-ownership-and-authority.q6",
    lessonSlug: "account-types-ownership-and-authority",
    type: "single",
    difficulty: "medium",
    tags: ["fn:2", "ugma", "ownership"],
    prompt:
      "In a UGMA/UTMA account, who is the beneficial owner and whose SSN is used?",
    choices: [
      { id: "a", text: "The custodian is the owner and uses the custodian's SSN" },
      { id: "b", text: "The minor is the owner; the account uses the minor's SSN and income is taxed to the minor" },
      { id: "c", text: "The donor remains the owner and may reclaim the gift" },
      { id: "d", text: "The brokerage firm holds title until the minor turns 18" },
    ],
    correctId: "b",
    explanation:
      "The **minor** is the beneficial owner — the account uses the minor's SSN and income is taxed to the minor — while the **custodian** controls trading. The gift is irrevocable.",
  },
  {
    id: "account-types-ownership-and-authority.q7",
    lessonSlug: "account-types-ownership-and-authority",
    type: "single",
    difficulty: "hard",
    tags: ["fn:2", "accounts", "corporate"],
    prompt:
      "A corporation wants to trade options in its brokerage account. What document establishes that authority?",
    choices: [
      { id: "a", text: "A corporate resolution authorizing options trading and naming who may trade" },
      { id: "b", text: "The minor's birth certificate" },
      { id: "c", text: "A loan consent agreement" },
      { id: "d", text: "Only the registered rep's signature" },
    ],
    correctId: "a",
    explanation:
      "Corporate accounts require a **corporate resolution** specifying who is authorized — and a **separate resolution** is needed to trade margin or options. A general account opening alone does not grant options authority.",
  },
  {
    id: "account-types-ownership-and-authority.q8",
    lessonSlug: "account-types-ownership-and-authority",
    type: "single",
    difficulty: "medium",
    tags: ["fn:2", "accounts", "joint"],
    prompt:
      "In a joint account, who may enter orders and how must distributions be made?",
    choices: [
      { id: "a", text: "Only the primary owner may trade; checks go to that owner alone" },
      { id: "b", text: "Any one party may enter orders; distributions must be made out to all owners" },
      { id: "c", text: "All owners must approve every order; checks go to any single owner" },
      { id: "d", text: "Only the firm may trade; distributions are reinvested automatically" },
    ],
    correctId: "b",
    explanation:
      "In a joint account, **any one party may enter orders**, but **distributions must be made out to all owners**. This holds for both JTWROS and TIC; only the death outcome differs.",
  },
];

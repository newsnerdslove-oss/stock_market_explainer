import type { Question } from "@/lib/quiz/types";

// Quiz for the "Bringing a Muni to Market" lesson.
export const questions: Question[] = [
  {
    id: "municipal-new-issue-official-statement-and-syndicate.q1",
    lessonSlug: "municipal-new-issue-official-statement-and-syndicate",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "municipal-bonds", "official-statement"],
    prompt:
      "What does a **Preliminary Official Statement (POS)** typically OMIT compared with the final Official Statement?",
    choices: [
      { id: "a", text: "The final offering price, coupons, and yields" },
      { id: "b", text: "A description of the issuer", feedback: "The issuer description is in the POS; only the pricing-dependent terms are missing." },
      { id: "c", text: "The use of proceeds" },
      { id: "d", text: "The risk factors", feedback: "Risk factors appear in the POS — they don't depend on pricing." },
    ],
    correctId: "a",
    explanation:
      "The **POS comes before the price**. Anything that's set when the bonds are priced — final coupons, yields, and offering prices — is missing from the POS and added only in the final OS.",
  },
  {
    id: "municipal-new-issue-official-statement-and-syndicate.q2",
    lessonSlug: "municipal-new-issue-official-statement-and-syndicate",
    type: "single",
    difficulty: "easy",
    tags: ["fn:3", "municipal-bonds", "legal-opinion"],
    prompt: "An **unqualified** legal opinion from bond counsel means:",
    choices: [
      { id: "a", text: "Bond counsel attached a reservation about the bonds' tax status", feedback: "That describes a *qualified* opinion — a reservation makes it qualified, not unqualified." },
      { id: "b", text: "The bonds are rendered valid and tax-exempt with no reservations" },
      { id: "c", text: "Bond counsel endorses the bonds as a good investment", feedback: "Bond counsel opines on validity and tax status, not investment merit." },
      { id: "d", text: "The underwriter, not the issuer, hired the lawyers" },
    ],
    correctId: "b",
    explanation:
      "An **unqualified (clean)** opinion has **no reservations** — the bonds are valid and tax-exempt without conditions. A **qualified** opinion is hedged with a contingency.",
  },
  {
    id: "municipal-new-issue-official-statement-and-syndicate.q3",
    lessonSlug: "municipal-new-issue-official-statement-and-syndicate",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "municipal-bonds", "legal-opinion"],
    prompt: "The bond counsel legal opinion attests to the bonds' validity and to which other matter?",
    choices: [
      { id: "a", text: "The accuracy of the issuer's revenue projections", feedback: "Bond counsel does not opine on financial projections or investment merit." },
      { id: "b", text: "Whether interest is exempt from federal (and often state) income tax" },
      { id: "c", text: "The fairness of the underwriting spread" },
      { id: "d", text: "The likelihood the bonds will be upgraded by rating agencies" },
    ],
    correctId: "b",
    explanation:
      "Bond counsel opines on two things: that the bonds are **duly authorized, valid and binding obligations**, and whether/to what extent **interest is tax-exempt**. It does not opine on investment merit or disclosure adequacy.",
  },
  {
    id: "municipal-new-issue-official-statement-and-syndicate.q4",
    lessonSlug: "municipal-new-issue-official-statement-and-syndicate",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "municipal-bonds", "competitive-sale"],
    prompt:
      "In a **competitive** sale, the issuer publishes a Notice of Sale and awards the bonds to:",
    choices: [
      { id: "a", text: "The underwriter the issuer pre-selected before bidding", feedback: "That's a *negotiated* sale; a competitive sale uses open, sealed bids." },
      { id: "b", text: "The bid offering the highest reoffering yield to investors" },
      { id: "c", text: "The sealed bid with the lowest interest cost (NIC or TIC)" },
      { id: "d", text: "The largest syndicate by number of firms" },
    ],
    correctId: "c",
    explanation:
      "A competitive sale takes **sealed bids** and awards to the **lowest interest cost** — measured by **NIC or TIC** as the Notice of Sale specifies.",
  },
  {
    id: "municipal-new-issue-official-statement-and-syndicate.q5",
    lessonSlug: "municipal-new-issue-official-statement-and-syndicate",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "municipal-bonds", "interest-cost"],
    prompt: "What is the key difference between **True Interest Cost (TIC)** and **Net Interest Cost (NIC)**?",
    choices: [
      { id: "a", text: "TIC discounts future payments to present value; NIC ignores the time value of money" },
      { id: "b", text: "NIC includes the time value of money; TIC does not", feedback: "It's reversed — TIC is the one that accounts for the time value of money." },
      { id: "c", text: "TIC ignores any premium or discount; NIC includes it", feedback: "Both adjust for premium/discount; the difference is TIC's present-value discounting." },
      { id: "d", text: "NIC can only be used in negotiated sales" },
    ],
    correctId: "a",
    explanation:
      "Both methods total coupon interest and adjust for premium/discount. **TIC** additionally **discounts payments to present value** (time value of money); **NIC** does not, making TIC the more precise measure.",
  },
  {
    id: "municipal-new-issue-official-statement-and-syndicate.q6",
    lessonSlug: "municipal-new-issue-official-statement-and-syndicate",
    type: "single",
    difficulty: "medium",
    tags: ["fn:3", "municipal-bonds", "syndicate"],
    prompt: "The **Agreement Among Underwriters (AAU)** is the contract that:",
    choices: [
      { id: "a", text: "Binds the syndicate to buy the bonds from the issuer", feedback: "That's the bond purchase agreement (or winning bid) — between syndicate and issuer, not among the members." },
      { id: "b", text: "Sets each syndicate member's commitment, liability, and compensation" },
      { id: "c", text: "Is the issuer's published invitation for sealed bids", feedback: "That's the Notice of Sale, not the AAU." },
      { id: "d", text: "Contains bond counsel's opinion on tax exemption" },
    ],
    correctId: "b",
    explanation:
      "The **AAU** (syndicate letter) is the contract **among the underwriters themselves**, setting each firm's commitment, liability, and share of the spread. A separate bond purchase agreement binds the syndicate to the issuer.",
  },
  {
    id: "municipal-new-issue-official-statement-and-syndicate.q7",
    lessonSlug: "municipal-new-issue-official-statement-and-syndicate",
    type: "single",
    difficulty: "hard",
    tags: ["fn:3", "municipal-bonds", "spread", "takedown"],
    prompt:
      "On a new issue the additional takedown is `$5.00` per bond and the selling concession is `$7.50` per bond. What does a **syndicate member** earn per bond when it sells directly to a customer (the **total takedown**)?",
    choices: [
      { id: "a", text: "$2.50", feedback: "That's the difference, not the sum — total takedown adds the concession and additional takedown." },
      { id: "b", text: "$5.00", feedback: "That's only the additional takedown; the member selling directly also captures the concession." },
      { id: "c", text: "$7.50", feedback: "That's only the concession — a selling-group member's share, not a syndicate member's full takedown." },
      { id: "d", text: "$12.50" },
    ],
    correctId: "d",
    explanation:
      "**Total takedown = concession + additional takedown = $7.50 + $5.00 = $12.50** per bond. A syndicate member selling directly captures the whole takedown; a selling-group member would keep only the `$7.50` concession.",
  },
];

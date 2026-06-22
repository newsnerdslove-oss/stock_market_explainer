import type { Question } from "@/lib/quiz/types";

// Quiz for the "TIPS & STRIPS: Inflation-Protected and Stripped Treasuries" lesson.
export const questions: Question[] = [
  {
    id: "tips-and-stripped-treasuries.q1",
    lessonSlug: "tips-and-stripped-treasuries",
    type: "single",
    difficulty: "medium",
    tags: ["fixed-income", "tips", "inflation"],
    prompt: "On a **TIPS**, how does inflation affect the security?",
    choices: [
      { id: "a", text: "The coupon rate floats up and down with the CPI", feedback: "The rate is fixed — it's the principal that adjusts with the CPI." },
      { id: "b", text: "The principal is adjusted with the CPI, while the coupon rate stays fixed" },
      { id: "c", text: "Nothing changes; TIPS pay a fixed dollar amount like any note" },
      { id: "d", text: "The maturity date shortens as inflation rises" },
    ],
    correctId: "b",
    explanation:
      "TIPS carry a **fixed coupon rate**, but the **principal adjusts with the CPI**. Because the rate is applied to the adjusted principal, the dollar coupon payment moves with inflation too.",
  },
  {
    id: "tips-and-stripped-treasuries.q2",
    lessonSlug: "tips-and-stripped-treasuries",
    type: "single",
    difficulty: "hard",
    tags: ["fixed-income", "tips", "coupon"],
    prompt: "A `$1,000` TIPS pays a `2%` annual coupon (`1%` semiannually). After CPI indexing, its principal is `$1,030`. What is the next **semiannual** interest payment?",
    choices: [
      { id: "a", text: "`$10.00` — always based on the original `$1,000` par" },
      { id: "b", text: "`$20.60` — the full annual coupon on the adjusted principal" },
      { id: "c", text: "`$10.30` — `1%` of the adjusted `$1,030` principal" },
      { id: "d", text: "`$10.15` — the average of old and new principal", feedback: "The coupon is applied to the current adjusted principal, not an average." },
    ],
    correctId: "c",
    explanation:
      "The fixed rate is paid on the **adjusted principal**: `1% × $1,030 = $10.30`. The rate never changed — the larger principal made the dollar payment larger.",
  },
  {
    id: "tips-and-stripped-treasuries.q3",
    lessonSlug: "tips-and-stripped-treasuries",
    type: "single",
    difficulty: "medium",
    tags: ["fixed-income", "tips", "deflation"],
    prompt: "Sustained **deflation** pushes a TIPS's adjusted principal below par. What does the holder receive **at maturity**?",
    choices: [
      { id: "a", text: "The greater of the adjusted principal or the original par value" },
      { id: "b", text: "The deflated principal — there is no protection on the downside", feedback: "TIPS have a deflation floor: the final principal repayment can't drop below original par." },
      { id: "c", text: "Nothing until inflation returns the principal to par" },
      { id: "d", text: "Double the deflated principal as compensation" },
    ],
    correctId: "a",
    explanation:
      "TIPS have a **deflation floor**: at maturity you get the **greater of the adjusted principal or original par**, so you never receive less than face value — even after years of deflation.",
  },
  {
    id: "tips-and-stripped-treasuries.q4",
    lessonSlug: "tips-and-stripped-treasuries",
    type: "single",
    difficulty: "medium",
    tags: ["fixed-income", "strips", "zero-coupon"],
    prompt: "How is a Treasury **STRIP** created, and what kind of security is each piece?",
    choices: [
      { id: "a", text: "The Treasury auctions them directly as floating-rate notes" },
      { id: "b", text: "A bond is split so each coupon and the principal become separate zero-coupon securities" },
      { id: "c", text: "Several bonds are merged into one high-coupon security" },
      { id: "d", text: "A bond's coupons are doubled to create extra income", feedback: "Stripping removes the coupons into separate pieces — it doesn't add income." },
    ],
    correctId: "b",
    explanation:
      "**STRIPS** (Separate Trading of Registered Interest and Principal of Securities) split a note, bond, or TIPS so **each coupon and the principal becomes its own zero-coupon security** — a single future payment. Dealers create them through the Fed; the Treasury doesn't auction them directly.",
  },
  {
    id: "tips-and-stripped-treasuries.q5",
    lessonSlug: "tips-and-stripped-treasuries",
    type: "single",
    difficulty: "medium",
    tags: ["fixed-income", "strips", "discount"],
    prompt: "Because a STRIP makes **no periodic interest payments**, how does an investor earn a return?",
    choices: [
      { id: "a", text: "Through quarterly dividends from the Treasury" },
      { id: "b", text: "By collecting a higher coupon than a regular note" },
      { id: "c", text: "It's bought at a discount and redeemed at full face value at maturity" },
      { id: "d", text: "Only if interest rates rise before maturity", feedback: "The return is the built-in discount, locked in at purchase — it doesn't depend on rates rising." },
    ],
    correctId: "c",
    explanation:
      "A STRIP is a **zero-coupon** security: you buy it at a **discount** and receive **full face value at maturity**. That gap is your return, standing in for the coupons that were stripped away.",
  },
  {
    id: "tips-and-stripped-treasuries.q6",
    lessonSlug: "tips-and-stripped-treasuries",
    type: "single",
    difficulty: "hard",
    tags: ["fixed-income", "taxation", "phantom-income"],
    prompt: "What is the **phantom income** problem shared by TIPS and STRIPS?",
    choices: [
      { id: "a", text: "Their interest is taxed twice, at both the state and federal level", feedback: "Treasury interest is actually exempt from state and local tax — the issue is timing, not double taxation." },
      { id: "b", text: "The annual inflation adjustment (TIPS) and accreted discount (STRIPS) are taxed yearly, before any cash is received" },
      { id: "c", text: "They are fully tax-free at all levels" },
      { id: "d", text: "They are taxed only when sold at a loss" },
    ],
    correctId: "b",
    explanation:
      "The yearly **TIPS inflation adjustment** and the **STRIPS accreted discount** must be reported as income **in the year earned** — even though no cash arrives until maturity. That's why both are often held in **tax-deferred accounts**.",
  },
  {
    id: "tips-and-stripped-treasuries.q7",
    lessonSlug: "tips-and-stripped-treasuries",
    type: "single",
    difficulty: "medium",
    tags: ["fixed-income", "tips", "purchasing-power"],
    prompt: "Which risk are **TIPS** specifically designed to hedge?",
    choices: [
      { id: "a", text: "Purchasing-power (inflation) risk — the erosion of a fixed payment's real value" },
      { id: "b", text: "Default risk on the US government's debt", feedback: "All Treasuries are considered free of meaningful default risk; TIPS add no special protection there." },
      { id: "c", text: "Prepayment risk from early principal returns" },
      { id: "d", text: "Currency risk from foreign exchange swings" },
    ],
    correctId: "a",
    explanation:
      "TIPS hedge **purchasing-power risk**: by indexing principal (and thus the coupon) to the CPI, they preserve your **real** return. The trade-off is a **lower stated coupon** than a comparable nominal Treasury.",
  },
];

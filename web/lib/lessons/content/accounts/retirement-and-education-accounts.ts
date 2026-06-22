import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "retirement-and-education-accounts",
  title: "Retirement & Education Accounts",
  level: 4,
  moduleId: "markets-accounts",
  moduleOrder: 8,
  summary:
    "Traditional vs Roth IRAs, employer plans (401(k)/403(b)/SEP), the rules that govern rollovers, and how 529 plans stack up against the Coverdell ESA — with the 2026 contribution limits.",
  estMinutes: 9,
  sections: [
    {
      type: "text",
      body:
        "Tax-advantaged accounts trade **liquidity for tax breaks**: you accept rules on when and how you can pull money out in exchange for sheltering it from tax. The exam tests the *boundaries* of those rules — contribution limits, who gets the deduction, when withdrawals are penalized, and what you're forbidden from holding inside. Start with the workhorse account, the **Individual Retirement Arrangement (IRA)**.",
    },
    { type: "heading", text: "Traditional vs Roth IRA" },
    {
      type: "text",
      body:
        "Both IRA types share the **same annual contribution cap** — for **2026 that is $7,500**, plus a **$1,100 catch-up** for those age 50+, for **$8,600** total. The cap is **per person across all IRAs combined**, not per account. The difference between the two flavors is *when* you get the tax break.",
    },
    {
      type: "list",
      items: [
        "**Traditional IRA:** contributions may be **tax-deductible** now (the deduction phases out if you — or a spouse — are covered by a workplace plan and earn above set limits); growth is tax-deferred; **withdrawals are taxed as ordinary income**.",
        "**Roth IRA:** contributions are made with **after-tax dollars** (never deductible), but **qualified withdrawals are entirely tax-free**. Eligibility to contribute phases out at higher incomes.",
        "**Earned income required:** you can only contribute up to the amount of your **earned (compensation) income** — investment income doesn't count.",
      ],
    },
    { type: "heading", text: "RMDs and the early-withdrawal penalty" },
    {
      type: "text",
      body:
        "Two distribution rules dominate the test. First, **Required Minimum Distributions (RMDs)**: a **Traditional IRA** owner must begin taking RMDs by **April 1 of the year after they turn 73** (the SECURE 2.0 age). A **Roth IRA has no RMDs during the owner's lifetime** — a major planning advantage. Second, the **10% early-withdrawal penalty**: amounts taken **before age 59½** are generally hit with a **10% additional tax** on top of ordinary income tax, unless an exception applies (e.g., first-home purchase up to $10,000, qualified education, death, or disability).",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'Roth IRAs have RMDs at 73 like Traditional ones.'* No — a **Roth IRA has no lifetime RMDs** for the original owner. RMDs at age 73 apply to **Traditional** IRAs (inherited Roths are a separate matter).",
    },
    { type: "heading", text: "Prohibited investments inside an IRA" },
    {
      type: "text",
      body:
        "An IRA can hold stocks, bonds, mutual funds, ETFs, and CDs — but the tax code **bars two categories**. IRA funds **cannot buy life insurance**, and they **cannot hold collectibles** — art, antiques, gems, stamps, rugs, most coins, and alcoholic beverages (e.g., fine wine). Buying a prohibited collectible is treated as a **taxable distribution** of that amount. Certain highly-refined precious metals bullion is a narrow exception that meets specific purity requirements.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Quick recall for the exam: the two classic IRA-prohibited holdings are **life insurance** and **collectibles**. If a question offers \"whole life policy\" or \"rare coins / fine art\" as an IRA investment, that's the wrong-for-an-IRA answer.",
    },
    { type: "heading", text: "Employer plans: 401(k), 403(b), SEP" },
    {
      type: "list",
      items: [
        "**401(k):** the private-employer defined-contribution plan. The **2026 elective-deferral limit is $24,500**, with a **$8,000 catch-up** at age 50+ (and a higher **$11,250** \"super catch-up\" for ages **60–63** under SECURE 2.0). Employers often **match** contributions.",
        "**403(b):** the same deferral and catch-up limits as a 401(k), but for **public schools and 501(c)(3) tax-exempt organizations** (teachers, hospital and nonprofit workers).",
        "**SEP IRA:** a **Simplified Employee Pension** funded by **employer** contributions into each employee's IRA; designed for self-employed people and small businesses, with much higher employer-funded limits than a personal IRA.",
      ],
    },
    { type: "heading", text: "Rollovers: indirect vs direct" },
    {
      type: "text",
      body:
        "Moving money between retirement accounts comes in two forms, and the distinction is heavily tested.",
    },
    {
      type: "list",
      items: [
        "**Indirect (60-day) rollover:** the custodian pays the money **to you**, and you must redeposit it into another qualified account **within 60 days** or it becomes a taxable distribution. From an **employer plan**, the payer must withhold **20%** — yet you must redeposit the **full** amount to avoid tax on the shortfall.",
        "**Direct (trustee-to-trustee) transfer:** the money moves **institution to institution** and never touches your hands — no withholding, no 60-day clock.",
        "**One-rollover-per-year rule:** you may do only **one IRA-to-IRA indirect rollover in any 12-month period**, across all your IRAs. This limit does **not** apply to **trustee-to-trustee transfers** or to **Roth conversions** — which is why advisors favor direct transfers.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'The one-per-year rule limits how often I can move IRA money.'* It only limits **60-day indirect rollovers**. **Direct trustee-to-trustee transfers are unlimited** — you can do as many as you like.",
    },
    { type: "heading", text: "Education accounts: 529 vs Coverdell ESA" },
    {
      type: "list",
      items: [
        "**529 plan (Qualified Tuition Program):** **no annual federal contribution limit** (only large lifetime aggregate caps set by each state plan), no income limit on the donor, and grows tax-free for qualified education expenses. The donor keeps control and can change the beneficiary.",
        "**Coverdell ESA:** capped at just **$2,000 per beneficiary per year** (across all Coverdell accounts for that child combined), contributions stop once the beneficiary turns **18** (special-needs exception), and unused funds generally must be distributed by age **30**. Contribution eligibility phases out at higher incomes.",
        "**Both** can fund **K–12 and higher-education** expenses, and contributions are made with **after-tax dollars** (no federal deduction; some states offer a 529 deduction).",
      ],
    },
    { type: "heading", text: "Worked scenario" },
    {
      type: "text",
      body:
        "A 45-year-old wants to move her entire Traditional IRA from one custodian to another and asks the rep to \"just send me a check.\" The rep should steer her to a **direct trustee-to-trustee transfer** instead. Taking the check is an **indirect rollover**: she'd face the **60-day** redeposit clock and burn her **one indirect rollover** for the year. A direct transfer avoids both — no 60-day clock, no one-per-year limit. And because she's **45 (under 59½)**, missing the 60-day window would trigger a **10% early-withdrawal penalty** plus ordinary income tax on the whole balance.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Traditional IRA", def: "An IRA where contributions may be tax-deductible and growth is tax-deferred, but withdrawals are taxed as ordinary income; subject to RMDs at age 73." },
        { term: "Roth IRA", def: "An IRA funded with after-tax dollars where qualified withdrawals are tax-free; no required minimum distributions during the owner's lifetime." },
        { term: "Catch-up contribution", def: "An extra amount those 50+ may contribute — $1,100 for IRAs and $8,000 for 401(k)/403(b) plans in 2026 (a higher $11,250 applies at ages 60–63)." },
        { term: "RMD", def: "Required Minimum Distribution — the amount a Traditional IRA owner must begin withdrawing by April 1 of the year after turning 73; Roth IRAs have no lifetime RMDs." },
        { term: "10% early-withdrawal penalty", def: "An additional 10% tax on retirement-account amounts withdrawn before age 59½, unless an exception (first home, education, death, disability) applies." },
        { term: "SEP IRA", def: "Simplified Employee Pension — an employer-funded IRA for self-employed people and small businesses, with much higher limits than a personal IRA." },
        { term: "Indirect (60-day) rollover", def: "A rollover paid to the owner who must redeposit it within 60 days; limited to one IRA-to-IRA rollover per 12 months, with 20% withholding from employer plans." },
        { term: "Trustee-to-trustee transfer", def: "A direct, institution-to-institution move of retirement funds — unlimited in frequency, with no withholding and no 60-day clock." },
        { term: "529 plan", def: "A Qualified Tuition Program with no annual federal contribution limit; tax-free growth for K–12 and higher-education expenses, donor retains control." },
        { term: "Coverdell ESA", def: "An education savings account capped at $2,000 per beneficiary per year; contributions stop at age 18 and funds generally distribute by age 30." },
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial or tax advice. Contribution and catch-up figures are the IRS 2026 limits.",
    },
  ],
};

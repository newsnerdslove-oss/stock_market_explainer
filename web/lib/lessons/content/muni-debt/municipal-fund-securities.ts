import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "municipal-fund-securities",
  title: "Municipal Fund Securities (529, ABLE, LGIP)",
  level: 4,
  moduleId: "markets-muni-debt",
  moduleOrder: 8,
  summary:
    "529 college-savings plans, 529 ABLE accounts for disabled beneficiaries, and Local Government Investment Pools — a distinct class of MSRB-regulated municipal fund securities sold by an official statement.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "Not every municipal security is a bond. **Municipal fund securities** are interests in trust funds set up by state or local governments — most famously **529 college-savings plans**, their **ABLE** cousins for people with disabilities, and **Local Government Investment Pools (LGIPs)**. They look and behave like mutual funds, but they are **municipal securities**, so they fall under the **MSRB** rulebook — not the Investment Company Act.",
    },
    {
      type: "heading",
      text: "What makes them \"municipal fund securities\"",
    },
    {
      type: "text",
      body:
        "The SEC determined that interests in these state-sponsored pools are **municipal securities** issued in a continuous primary offering. Because they trade like fund shares, the MSRB coined the label **municipal fund security**. The practical consequence: they're sold by **MSRB-regulated dealers** under an **official statement** (often called a program disclosure document), not by a registered fund prospectus. A firm that supervises these sales needs a principal qualified by the **Series 51** exam.",
    },
    {
      type: "heading",
      text: "529 college-savings plans",
    },
    {
      type: "list",
      items: [
        "**Tax-free growth, tax-free qualified withdrawals.** Earnings grow federally tax-deferred and come out **federal-tax-free** when used for **qualified education expenses** (tuition, fees, books, room and board, plus up to `$20,000`/year of K-12 tuition for 2026 and registered apprenticeship costs).",
        "**No federal deduction, but maybe a state one.** Contributions are **not** federally deductible, yet many states offer a **state income-tax deduction or credit** to their own residents.",
        "**The account OWNER keeps control.** Unlike an UGMA/UTMA, the **owner** — not the beneficiary — controls the money, decides withdrawals, and can **change the beneficiary** to another family member with no tax hit.",
        "**Non-qualified withdrawals are penalized.** The **earnings** portion of a non-qualified distribution is taxed as ordinary income **plus a 10% federal penalty** (contributions, already taxed, come out free).",
      ],
    },
    {
      type: "heading",
      text: "The 5-year gift-tax front-load",
    },
    {
      type: "text",
      body:
        "529 contributions are completed **gifts** to the beneficiary. Section 529 lets a donor make **five years of annual-exclusion gifts at once** and elect to spread them ratably over five years for gift-tax purposes — the **5-year front-load** (a.k.a. superfunding). With the `2026` annual exclusion at `$19,000`, a single donor can front-load `5 × $19,000 = $95,000` (a couple, `$190,000`) into one beneficiary's plan with **no gift tax**, provided no other gifts are made to that person during the five years.",
    },
    {
      type: "heading",
      text: "529 ABLE accounts",
    },
    {
      type: "text",
      body:
        "An **ABLE account** (Achieving a Better Life Experience, IRC §529A) is a 529-style account for an **eligible individual with a disability**. Earnings grow tax-deferred and withdrawals are **tax-free for qualified disability expenses** — housing, transportation, health, education, assistive technology, and more. The **disability onset** age threshold rose from before age `26` to before age `46`, effective **January 1, 2026** (the ABLE Age Adjustment Act). Total annual contributions are capped at `$20,000` for 2026 (the ABLE base limit, with possible additional ABLE-to-Work contributions for working beneficiaries), and ABLE balances are largely disregarded for means-tested federal benefits like SSI.",
    },
    {
      type: "heading",
      text: "Local Government Investment Pools (LGIPs)",
    },
    {
      type: "text",
      body:
        "An **LGIP** is a state-run pool where **governmental entities** — cities, counties, school districts, agencies — park short-term cash for safety, liquidity, and a return. Many maintain a stable **$1.00 NAV** and operate like a money-market fund, but they are **municipal fund securities**, **not** money-market mutual funds, and they are **not FDIC-insured**. Their investors are governments, not retail savers.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Municipal fund security", def: "Interest in a state/local trust pool (529, ABLE, LGIP) deemed a municipal security; MSRB-regulated." },
        { term: "Official statement", def: "The disclosure / program document delivered to buyers of a municipal fund security in lieu of a fund prospectus." },
        { term: "Series 51", def: "Limited-principal exam to supervise municipal fund securities sales." },
        { term: "529 plan", def: "Education-savings plan; tax-free qualified withdrawals; the OWNER keeps control of the account." },
        { term: "5-year front-load", def: "Electing to treat one 529 gift as five years of annual exclusions — up to $95,000 single / $190,000 couple in 2026." },
        { term: "ABLE account", def: "529A disability-savings account; tax-free for qualified disability expenses; onset age before 46 from Jan 1, 2026." },
        { term: "LGIP", def: "Local Government Investment Pool — short-term cash pool for governments; a municipal fund security, not a money-market fund." },
        { term: "Qualified expense", def: "Spending that lets earnings come out tax-free — education for 529s, disability costs for ABLE." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Don't call a 529 or LGIP a **mutual fund** — they're **municipal fund securities** sold by an **official statement** under **MSRB** rules, not the Investment Company Act, and they are **not FDIC-insured**. And remember: in a 529 the **account owner**, not the beneficiary, stays in control. This is educational content, not financial advice.",
    },
  ],
};

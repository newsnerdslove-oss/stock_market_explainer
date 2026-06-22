import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "agency-and-mortgage-backed-securities",
  title: "Agency & Mortgage-Backed Securities",
  level: 3,
  moduleId: "markets-fixed-income",
  moduleOrder: 9,
  summary: "Ginnie, Fannie, and Freddie turn home loans into bonds — with one carrying the government's full faith and credit and a unique risk: prepayment.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "A huge slice of the bond market isn't issued by companies or the Treasury — it's **mortgages, repackaged into securities**. Thousands of home loans are pooled, and investors buy a piece of the pool's monthly payments. Three issuers dominate, and the **exam loves the distinction** between them.",
    },
    {
      type: "heading",
      text: "Ginnie vs. Fannie & Freddie" },
    {
      type: "text",
      body:
        "**GNMA (Ginnie Mae)** is a wholly-owned **government corporation**, and its securities carry the **full faith and credit of the US government** — the *only* mortgage-backed securities that do. **FNMA (Fannie Mae)** and **FHLMC (Freddie Mac)** are **government-sponsored enterprises (GSEs)** — publicly traded companies, **not** backed by full faith and credit (they've been in federal **conservatorship** since 2008, but that's not a legal guarantee).",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "GNMA (Ginnie Mae)", def: "A government corporation; its pass-throughs carry the full faith and credit of the US government." },
        { term: "GSE (Fannie / Freddie)", def: "Government-sponsored enterprises — public companies whose securities are NOT full faith and credit." },
        { term: "Pass-through certificate", def: "A share of a mortgage pool; monthly principal + interest is 'passed through' to investors." },
        { term: "Self-amortizing", def: "Each monthly payment includes some principal, so the balance shrinks over the life — unlike a bullet bond that repays par at maturity." },
        { term: "Prepayment risk", def: "When rates fall, homeowners refinance and repay early; you get principal back to reinvest at lower rates." },
        { term: "Extension risk", def: "When rates rise, prepayments slow, so your principal comes back later than expected — the security's life extends." },
        { term: "CMO", def: "Collateralized Mortgage Obligation — an MBS sliced into tranches that reorder prepayment risk." },
      ],
    },
    {
      type: "heading",
      text: "Pass-throughs are self-amortizing" },
    {
      type: "text",
      body:
        "Most agency MBS are **pass-through certificates**: homeowners' monthly payments — **both principal and interest** — flow through to certificate holders. Because principal comes back **every month** (not in one lump at maturity), the security is **self-amortizing**: part of each check is a return of your own principal, and the outstanding balance steadily shrinks.",
    },
    {
      type: "heading",
      text: "The signature risk: prepayment" },
    {
      type: "text",
      body:
        "Mortgages can be paid off early, and that creates the risk unique to MBS. When **rates fall**, homeowners **refinance** — you get a flood of principal back exactly when you'd have to reinvest it at **lower** yields (**prepayment risk**). When **rates rise**, refinancing dries up, prepayments slow, and your money is tied up **longer** than expected (**extension risk**). It's a frustrating combination: the security gets shorter when you'd want it long and longer when you'd want it short.",
    },
    {
      type: "heading",
      text: "CMOs reorder the risk" },
    {
      type: "text",
      body:
        "A **CMO (Collateralized Mortgage Obligation)** takes a pool of mortgages and carves the cash flows into **tranches**. In a simple sequential CMO, the **first tranche** receives all principal until it's retired, then the next, and so on — so early tranches absorb prepayment first and later tranches are shielded for a while. This lets investors pick a maturity/risk profile, but it doesn't make prepayment disappear — it just **redistributes** it.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**Taxation trap:** interest on agency MBS (GNMA, FNMA, FHLMC) is **fully taxable** at the federal, state, **and** local levels — *unlike* US Treasuries, whose interest is exempt from state and local tax. Don't assume 'government-related' means tax-advantaged.",
    },
  ],
};

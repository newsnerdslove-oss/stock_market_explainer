import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "uncovered-option-margin",
  title: "Margin for Naked (Uncovered) Option Writing",
  level: 4,
  moduleId: "markets-adv-options",
  moduleOrder: 11,
  summary:
    "Why writing naked calls and puts demands real margin while covered writing demands none — and the FINRA Rule 4210 'greater-of' formula (premium + 20% − OTM, floored at premium + 10%) worked through a numeric example.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "When you write a **covered** call — short a call against `100` shares you already own — the stock *is* your collateral, so there's **no additional margin**. Write an **uncovered (naked)** option and there's nothing backing it, so **FINRA Rule 4210** forces you to deposit margin against the risk. For a naked call that risk is theoretically **unlimited**, which is exactly why the requirement is steep and why some firms won't approve naked writing at all.",
    },
    { type: "heading", text: "The greater-of formula (Rule 4210(f)(2)(E))" },
    {
      type: "text",
      body:
        "The margin on a single naked equity option is the **greater of two numbers**, and in both numbers you first add **100% of the option's premium** (its current market value):",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**Standard requirement:** premium **+ 20%** of the underlying's current market value **− any out-of-the-money amount**.",
        "**Minimum floor:** premium **+ 10%** of the underlying's market value (for a **call**) or **+ 10% of the aggregate exercise price** (for a **put**).",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "The **out-of-the-money amount only reduces the 20% number**, never the 10% floor. So an option that is far OTM still requires the **premium + 10%** minimum — the formula never lets the requirement fall to zero.",
    },
    { type: "heading", text: "Covered vs. naked: the contrast" },
    {
      type: "list",
      items: [
        "**Covered call** (own the stock) or **covered put** (short the stock): **no extra option margin** — the underlying position is the collateral.",
        "**Naked call:** unlimited upside risk → the **greater-of** requirement above, all in cash/margin.",
        "**Naked put:** risk is capped at the strike (stock can only fall to zero), but margin still follows the same greater-of formula using the **exercise price** for the floor.",
      ],
    },
    { type: "heading", text: "Worked example — naked call" },
    {
      type: "text",
      body:
        "A customer writes `1` uncovered `XYZ` `Aug 55` **call** for a premium of `$3`. `XYZ` trades at **`$52`** — the call is `$3` **out of the money** (`55 − 52`). Work both numbers per share, then ×`100`.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**Standard:** premium `+ 20%` of underlying `− OTM` = `3 + (0.20 × 52) − 3` = `3 + 10.40 − 3` = **`$10.40`** per share.",
        "**Floor:** premium `+ 10%` of underlying = `3 + (0.10 × 52)` = `3 + 5.20` = **`$8.20`** per share.",
        "**Greater of** `$10.40` and `$8.20` = **`$10.40`** per share → ×`100` = **`$1,040`** margin required.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Sanity check: the customer **received** `$300` in premium. That premium counts toward the deposit, but the *total* requirement is `$1,040`, so roughly `$740` of additional equity must be there. The deeper in-the-money the call goes, the **smaller the OTM subtraction** (it's zero once at-the-money), so the requirement **climbs** — naked-call margin rises as it moves against you.",
    },
    { type: "heading", text: "Why the exam cares" },
    {
      type: "text",
      body:
        "Series 7 questions hand you a premium, a stock price, and a strike and ask for the deposit. The trap is forgetting the **− OTM** adjustment, forgetting the **`×100`** multiplier, or comparing against the wrong floor (10% of **strike** for puts vs. 10% of **underlying** for calls). Identify call vs. put first, compute both numbers, take the greater.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Uncovered (naked) option", def: "A short option with no offsetting stock or option position to back it." },
        { term: "Covered writing", def: "Short call against owned stock (or short put against short stock) — no additional option margin required." },
        { term: "FINRA Rule 4210(f)(2)(E)", def: "The rule setting margin on listed options, including the naked-option greater-of formula." },
        { term: "Standard requirement", def: "Premium + 20% of the underlying's market value − the out-of-the-money amount." },
        { term: "Minimum floor", def: "Premium + 10% of underlying value (call) or + 10% of the aggregate exercise price (put)." },
        { term: "Out-of-the-money amount", def: "How far the option is OTM; subtracted only from the 20% number, never from the 10% floor." },
        { term: "Naked-call risk", def: "Theoretically unlimited, since the underlying can rise without bound — the reason for the steep requirement." },
        { term: "×100 multiplier", def: "Per-share margin is multiplied by 100 shares per equity-option contract." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'The OTM amount lowers the whole requirement.'* It only reduces the **20%** standard number; the **premium + 10%** floor still applies, so the deposit never drops to zero. Selling naked calls carries unlimited risk and is not suitable for every account. This is educational content, not financial advice.",
    },
  ],
};

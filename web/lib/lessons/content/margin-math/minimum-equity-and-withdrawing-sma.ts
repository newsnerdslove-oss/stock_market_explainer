import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "minimum-equity-and-withdrawing-sma",
  title: "Minimum Equity & Withdrawing SMA",
  level: 4,
  moduleId: "markets-margin-math",
  moduleOrder: 5,
  summary:
    "The $2,000 minimum to open a margin account (and the lesser-of rule that caps it at the purchase price), the $25,000 pattern-day-trader floor, and how SMA can be withdrawn as cash without breaching the maintenance requirement.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "Opening a margin account has a floor: you generally need at least `$2,000` of equity. Once the account is running and appreciation builds **SMA**, that excess can be pulled out as cash — but a withdrawal is not free money. It raises your debit, lowers your equity, and can never drag the account below the maintenance floor.",
    },
    {
      type: "heading",
      text: "The $2,000 minimum — and the lesser-of cap",
    },
    {
      type: "text",
      body:
        "Under **FINRA Rule 4210(b)**, the initial deposit on a margin purchase is the **greater of** the Reg T amount, the maintenance amount, or **`$2,000`** — *except that cash need not be deposited in excess of the cost of any security purchased*. That exception is the **\"never more than 100%\" rule**: the deposit is capped at the full price of the trade.",
    },
    {
      type: "list",
      ordered: false,
      items: [
        "Buy `$10,000` of stock: Reg T `50%` `= $5,000`, but the `$2,000` floor is lower, so you deposit `$5,000` (the greater amount).",
        "Buy `$3,000` of stock: Reg T `50%` `= $1,500`, which is below the `$2,000` floor, so you deposit `$2,000`.",
        "Buy `$1,000` of stock: the `$2,000` floor would exceed the trade's full price. The lesser-of cap kicks in — you deposit `$1,000`, not `$2,000`. You never put up more than `100%`.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Think of it as a stack: required deposit `=` greater of `{50% Reg T, maintenance, $2,000}`, then capped at `100%` of the purchase. A cheap trade can never force you to deposit more than the stock itself costs.",
    },
    {
      type: "heading",
      text: "The $25,000 pattern-day-trader floor (in transition)",
    },
    {
      type: "text",
      body:
        "Historically, an account flagged as a **pattern day trader** (4+ day trades in 5 business days) had to keep **`$25,000`** of equity under Rule 4210(f)(8). **FINRA Regulatory Notice 26-10** eliminates both the PDT designation and the `$25,000` minimum, replacing them with intraday exposure-based requirements — effective `2026-06-04`, with firms allowed to phase in through `2027-10-20`. Know the `$25,000` figure for legacy questions, but know it is being retired.",
    },
    {
      type: "heading",
      text: "Where SMA comes from",
    },
    {
      type: "text",
      body:
        "**SMA (Special Memorandum Account)** is a line of credit recorded under **Reg T 12 CFR 220.5**. It is created by **excess equity** — equity above the `50%` Reg T requirement — and also by cash dividends, interest, and non-required deposits. Crucially, SMA is **non-decreasing**: it stays at its high even if the stock later falls, and only drops when you *use* it.",
    },
    {
      type: "heading",
      text: "Two ways to use SMA",
    },
    {
      type: "list",
      ordered: false,
      items: [
        "**As buying power**: `2 × SMA` of new stock under Reg T `50%`. SMA falls; the debit rises by the new borrowing.",
        "**As a cash withdrawal**: pull SMA out of the account. Under 220.5, a payment to the customer reduces the SMA entry. The withdrawal is funded by **borrowing more**, so the **debit rises** by the cash taken and **equity falls** by the same amount.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "A cash withdrawal is **not** a transfer of your own money out — in a margined account it is an *additional loan*. Debit goes up, equity goes down dollar-for-dollar. Treat \"withdraw SMA\" exactly like \"buy stock\" in its effect on the debit.",
    },
    {
      type: "heading",
      text: "The maintenance-floor guardrail",
    },
    {
      type: "text",
      body:
        "SMA can be withdrawn **only to the extent it does not push equity below the FINRA maintenance requirement** (`25%` of LMV long). If the recorded SMA is larger than the room above the maintenance floor, you cannot withdraw the whole figure — the maintenance floor wins.",
    },
    {
      type: "heading",
      text: "Worked example — withdraw SMA as cash",
    },
    {
      type: "text",
      body:
        "An account is long `LMV = $20,000` with `DR = $9,000`, so `EQ = $11,000`. Reg T requirement `= 50% × $20,000 = $10,000`, so SMA `= $11,000 − $10,000 = $1,000`. The customer withdraws the full `$1,000`.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Before: `LMV = $20,000`, `DR = $9,000`, `EQ = $11,000`, `SMA = $1,000`.",
        "Withdraw `$1,000` cash: the broker advances it, so `DR → $9,000 + $1,000 = $10,000`.",
        "Equity falls: `EQ = $20,000 − $10,000 = $10,000`; `SMA → $0`.",
        "Check the floor: maintenance `= 25% × $20,000 = $5,000`. New equity `$10,000` is well above `$5,000`, so the withdrawal is allowed.",
        "Had SMA been, say, `$8,000`, withdrawing it all would drive equity to `$3,000` — below the `$5,000` floor — so only `$6,000` (down to the floor) could come out.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Minimum equity ($2,000)", def: "FINRA 4210(b) floor to open/maintain a margin account, capped at the purchase price (never more than `100%`)." },
        { term: "Lesser-of / never-more-than-100% rule", def: "Cash need not be deposited in excess of the cost of the security; a `$1,000` buy needs `$1,000`, not `$2,000`." },
        { term: "Pattern day trader ($25,000)", def: "Legacy 4210(f)(8) floor for 4+ day trades in 5 business days; eliminated by Notice 26-10 (effective `2026-06-04`, phase-in to `2027-10-20`)." },
        { term: "SMA", def: "Special Memorandum Account — a non-decreasing line of credit (Reg T 220.5) created by excess equity, dividends, and non-required deposits." },
        { term: "Excess equity", def: "`EQ − (50% × LMV)`; positive excess equity is recorded as SMA." },
        { term: "SMA as buying power", def: "`2 × SMA` of new stock under Reg T `50%`." },
        { term: "SMA withdrawal", def: "Cash pulled out by borrowing more: the debit rises and equity falls by the amount withdrawn." },
        { term: "Maintenance floor", def: "`25% × LMV` (long); an SMA withdrawal cannot push equity below it." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"Withdrawing SMA just moves my own cash out and leaves the account unchanged.\"* It increases the **debit** and decreases **equity** dollar-for-dollar, and it is blocked at the `25%` maintenance floor. This is educational content, not financial advice.",
    },
  ],
};

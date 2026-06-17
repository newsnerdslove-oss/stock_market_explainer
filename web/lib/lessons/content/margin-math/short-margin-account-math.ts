import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "short-margin-account-math",
  title: "Short Margin Account Math: Credit Balance, the 150% Rule & 30% Maintenance",
  level: 4,
  moduleId: "markets-margin-math",
  moduleOrder: 2,
  summary:
    "Learn why a short account's credit balance is frozen at 150% of the short sale and how the 30% maintenance floor works (plus the special low-priced-stock rules).",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "A short account flips the long equation. The governing identity is **Credit Balance − Short Market Value = Equity**, written `CR − SMV = EQ` (equivalently `SMV + EQ = CR`).",
    },
    {
      type: "heading",
      text: "How the credit balance forms",
    },
    {
      type: "text",
      body:
        "When you sell short, two pools of cash land in the account: the **short-sale proceeds** (equal to the SMV at the open) and your **Reg T deposit** of `50%` of that SMV. Their sum is the **credit balance**: `CR = SMV + (50% × SMV) = 150%` of the original short market value.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "The credit balance is **frozen** the moment the short is opened. As the market moves, only `SMV` and `EQ` change — `CR` never does. And because you owe shares, equity **rises when SMV falls** (the inverse of a long account).",
    },
    {
      type: "heading",
      text: "Maintenance floors on shorts",
    },
    {
      type: "list",
      ordered: false,
      items: [
        "**Short, `$5`+ stock**: greater of `30% × SMV` or `$5/share`.",
        "**Low-priced short (under `$5`)**: greater of `$2.50/share` or `100% × SMV`.",
        "**Short bonds**: greater of `5%` of principal or `30%` of market value.",
      ],
    },
    {
      type: "heading",
      text: "Worked example 1 — opening a short & the 150% relationship",
    },
    {
      type: "text",
      body:
        "Short 1,000 shares at `$80` = `$80,000` SMV. Reg T `50%` requires a `$40,000` deposit.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Open: `SMV = $80,000`; Reg T deposit `EQ = $40,000`.",
        "Credit balance: `CR = $80,000 + $40,000 = $120,000` (= `150% × $80,000`).",
        "Stock rises to `$120`: `SMV = $120,000`; `CR` frozen at `$120,000`.",
        "Equity: `EQ = $120,000 − $120,000 = $0` — wiped out.",
      ],
    },
    {
      type: "heading",
      text: "Worked example 2 — maintenance call on a short",
    },
    {
      type: "text",
      body:
        "Continue from above, then contrast a smaller move.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "At `SMV = $120,000`: minimum maintenance `= 30% × $120,000 = $36,000`, but `EQ = $0`.",
        "Maintenance call `= $36,000 − $0 = $36,000`.",
        "Contrast — if `SMV` had risen only to `$100,000`: `EQ = $120,000 − $100,000 = $20,000`.",
        "Requirement `= 30% × $100,000 = $30,000`; call `= $30,000 − $20,000 = $10,000`.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "SMV", def: "Short Market Value — current market value of the shares sold short (and owed back)." },
        { term: "CR", def: "Credit balance — short proceeds plus the Reg T deposit. Frozen at `150%` of opening SMV." },
        { term: "EQ", def: "Equity in a short account: `CR − SMV`. Rises when SMV falls." },
        { term: "Reg T", def: "Federal Reserve `50%` initial requirement; on a short it is `50%` of SMV." },
        { term: "150% rule", def: "Opening credit balance = `SMV + 50% deposit = 150%` of the original short market value." },
        { term: "Maintenance", def: "Short floor: greater of `30% × SMV` or `$5/share` for `$5`+ stocks." },
        { term: "Low-priced short", def: "Under `$5`: greater of `$2.50/share` or `100% × SMV`." },
        { term: "Maintenance call", def: "Required maintenance minus current equity, owed when equity falls short." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"The credit balance changes with the stock price.\"* `CR` is fixed the moment the short is opened (`SMV` + Reg T deposit). When the stock moves, only `SMV` moves; equity is recomputed as `CR − SMV`. This is educational content, not financial advice.",
    },
  ],
};

import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "buying-power-and-leverage-math",
  title: "Buying Power & Leverage Math",
  level: 3,
  moduleId: "markets-margin",
  moduleOrder: 3,
  summary:
    "How Reg T's 50% turns into 2:1 buying power — and exactly how that leverage doubles your percentage gains *and* your losses.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "Leverage sounds like a superpower: borrow, buy more, win bigger. The math is real — but it cuts *both ways*. The same multiplier that doubles a gain doubles a loss, and a loss can wipe out your equity on a move far smaller than `100%`.",
    },
    {
      type: "heading",
      text: "From 50% to 2:1",
    },
    {
      type: "text",
      body:
        "Reg T's `50%` initial margin gives you **2:1 buying power**: `equity ÷ 0.50 = stock you can buy`. Your **leverage ratio** is `position size ÷ equity`. Buy `$20,000` of stock with `$10,000` of your own money and you're at `2:1`.",
    },
    {
      type: "heading",
      text: "Why % returns get multiplied",
    },
    {
      type: "text",
      body:
        "The loan amount is **fixed**. So *all* the profit and loss on the position lands on your equity. Roughly, `return on equity ≈ leverage × asset return`. At `2:1`, a `+10%` move in the stock becomes about `+20%` on your money — and a `−10%` move becomes about `−20%`. The **amplification factor** here is `2`.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Buying power", def: "The total stock you can purchase: `equity ÷ 0.50` under Reg T." },
        { term: "Leverage ratio", def: "`position size ÷ equity`. Buying `$20,000` with `$10,000` equity is `2:1`." },
        { term: "Return on equity", def: "Percentage gain or loss measured against your own money, not the whole position." },
        { term: "Amplification factor", def: "How much leverage multiplies the asset's % move — `2` at 2:1." },
        { term: "Position size", def: "The total market value of what you bought, your money plus the loan." },
        { term: "Cushion", def: "Unused buying power or extra equity that absorbs a dip before a maintenance call." },
      ],
    },
    {
      type: "heading",
      text: "Worked example",
    },
    {
      type: "text",
      body:
        "Equity `$10,000` → buying power `$20,000` → leverage `2:1`. The loan is `$10,000` and stays fixed. Watch what each move does to your money:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Stock `+10%`: value `$22,000`, equity `$22,000 − $10,000 = $12,000` → `+20%`",
        "Stock `−10%`: value `$18,000`, equity `$18,000 − $10,000 = $8,000` → `−20%`",
        "Stock `−25%`: value `$15,000`, equity `$15,000 − $10,000 = $5,000` → `−50%` of your money",
      ],
    },
    {
      type: "text",
      body:
        "Note the last line: a `−25%` move in the stock cut your equity in *half*. And remember, interest and fees on the loan come out of your returns too — making the loss side worse.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Edge case: using *all* your buying power leaves **zero cushion**. Even a modest dip pushes you toward a maintenance call. The amplification is symmetric in *percentages* but asymmetric in *survival* — a big loss can force liquidation before the stock ever has a chance to recover.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"2:1 just doubles my profit.\"* It also doubles your percentage **loss** and can wipe out your equity on a move far smaller than `100%`. A `−50%` stock at 2:1 erases your entire stake. Margin amplifies losses and can cost more than you invested. This is educational content, not financial advice.",
    },
  ],
};

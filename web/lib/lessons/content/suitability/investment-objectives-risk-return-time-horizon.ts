import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "investment-objectives-risk-return-time-horizon",
  title: "Investment Objectives: Risk, Return, and Time Horizon",
  level: 4,
  moduleId: "markets-suitability",
  moduleOrder: 2,
  summary:
    "Every recommendation starts by translating a customer's goals into the classic objectives — income, growth, preservation, speculation — bounded by risk tolerance, time horizon, and liquidity.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "Suitability begins with translation: a customer says 'I want to build wealth' or 'I need my money to last,' and you convert that into a formal **investment objective**. The objective then points you toward whole categories of products — and the customer's constraints rule some of them out.",
    },
    { type: "heading", text: "The core objectives" },
    {
      type: "list",
      items: [
        "**Preservation of capital (safety)** — protect principal above all.",
        "**Income** — generate steady, predictable cash flow.",
        "**Growth (capital appreciation)** — increase the value of the principal over time.",
        "**Speculation** — pursue large gains while accepting large potential losses.",
        "Secondary objectives: **tax advantages**, **liquidity**, and **diversification**.",
      ],
    },
    { type: "heading", text: "Three constraints bound every objective" },
    {
      type: "text",
      body:
        "An objective never stands alone. Three constraints frame which products actually fit: **risk tolerance** (how much loss the customer can stomach), **time horizon** (when the money is needed), and **liquidity needs** (how fast it must convert to cash without loss). A 'growth' goal with a one-year horizon is a very different recommendation from a 'growth' goal with a 35-year horizon.",
    },
    { type: "heading", text: "Product-to-objective shorthand" },
    {
      type: "list",
      items: [
        "**Preservation** → Treasuries, money-market funds, CDs, high-grade bonds.",
        "**Income** → bonds, preferred stock, dividend-paying equities, fixed annuities.",
        "**Growth** → common stock, growth funds.",
        "**Speculation** → options, low-priced/volatile stocks, leveraged products.",
        "**Tax advantages** → municipal bonds, retirement accounts.",
      ],
    },
    { type: "heading", text: "Risk is objective-relative" },
    {
      type: "text",
      body:
        "There is no single 'safe.' A product that is safe for one objective can be unsafe for another. Know the risk types: **market**, **interest-rate**, **inflation (purchasing-power)**, **credit/default**, **liquidity**, **reinvestment**, and **call** risk. Holding everything in cash defeats market risk but maximizes inflation risk over a long horizon.",
    },
    { type: "heading", text: "Worked scenario" },
    {
      type: "text",
      body:
        "A 30-year-old has a **35-year horizon**, stable income, **high risk tolerance**, and the stated goal 'build wealth.' Her objective is **growth**, and her constraints permit volatility because she won't need the money for decades.",
    },
    {
      type: "list",
      items: [
        "**Suitable:** a diversified portfolio of **equities/growth funds** — matches a growth objective and a long horizon that can ride out market swings.",
        "**Unsuitable:** holding everything in a **money-market fund**. It feels 'safe,' but over 35 years it exposes her to **inflation/purchasing-power risk** and won't grow wealth — a mismatch with her objective and horizon.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Preservation of capital", def: "Objective focused on protecting principal; served by Treasuries, money-market, CDs, high-grade bonds." },
        { term: "Income", def: "Objective focused on steady cash flow; served by bonds, preferred stock, dividend equities, fixed annuities." },
        { term: "Growth", def: "Objective focused on capital appreciation over time; served by common stock and growth funds." },
        { term: "Speculation", def: "Objective accepting large losses for large potential gains; served by options, volatile stocks, leveraged products." },
        { term: "Risk tolerance", def: "How much loss a customer can financially and emotionally accept." },
        { term: "Time horizon", def: "When the money will be needed — a key constraint on how much volatility is appropriate." },
        { term: "Liquidity needs", def: "How quickly funds must convert to cash without meaningful loss of value." },
        { term: "Inflation (purchasing-power) risk", def: "The risk that returns fail to keep pace with rising prices — greatest for long-horizon, all-cash holdings." },
        { term: "Reinvestment risk", def: "The risk that cash flows must be reinvested at lower rates than the original investment." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'lower volatility always means lower risk / safer.'* Risk is **objective-relative**. All-cash is safe against market loss but **guarantees inflation erosion** over a long horizon. The 'safest' product for a retiree's income can be the *worst* choice for a 28-year-old's growth goal.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial advice.",
    },
  ],
};

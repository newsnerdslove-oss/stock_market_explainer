import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "dollar-cost-averaging",
  title: "Dollar-Cost Averaging vs. Lump Sum",
  level: 2,
  moduleId: "markets-portfolio",
  moduleOrder: 7,
  summary:
    "How investing a fixed dollar amount on a schedule lowers your average cost per share over a bumpy stretch, why that average sits below the average price, and how it stacks up against putting the whole sum in at once.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "You've got money to invest. Do you put it **all in today**, or feed it in **a bit at a time**? That single choice is the heart of **dollar-cost averaging (DCA)** versus **lump-sum** investing. Neither is a trick — both are simple rules — but they behave differently when prices bounce around, and the difference shows up right in your average cost per share.",
    },
    {
      type: "heading",
      text: "What dollar-cost averaging is",
    },
    {
      type: "text",
      body:
        "**Dollar-cost averaging** means investing the **same fixed dollar amount** at **regular intervals** — say `$300` every month — regardless of the price that day. The SEC describes it as investing equal amounts at regular intervals \"regardless of the ups and downs in the market.\" Because you spend a fixed *dollar* amount each time, a low price automatically buys **more** shares and a high price buys **fewer**. You don't decide that — the arithmetic does it for you.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Dollar-cost averaging (DCA)", def: "Investing a fixed dollar amount on a set schedule, regardless of price." },
        { term: "Lump-sum investing", def: "Putting the entire available amount to work at once, immediately." },
        { term: "Average cost per share", def: "`Total dollars invested ÷ total shares bought` — your true blended purchase price." },
        { term: "Average price", def: "The simple (arithmetic) mean of the prices over the period, ignoring how many shares you bought at each." },
        { term: "Timing risk", def: "The risk that the single moment you invest a lump sum turns out to be a poor entry point." },
        { term: "Time in the market", def: "How long your money is actually invested and exposed to growth — DCA delays some of it." },
        { term: "Behavioral discipline", def: "Using an automatic rule to keep investing steadily and avoid panic-driven timing." },
      ],
    },
    {
      type: "heading",
      text: "Worked example: the average-cost math",
    },
    {
      type: "text",
      body:
        "Invest `$300` on the first of each month for four months. The price per share that day is `$10`, then `$6`, then `$5`, then `$12`. Each month you buy `$300 ÷ price` shares:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Month 1: `$300 ÷ $10 = 30` shares.",
        "Month 2: `$300 ÷ $6 = 50` shares.",
        "Month 3: `$300 ÷ $5 = 60` shares.",
        "Month 4: `$300 ÷ $12 = 25` shares.",
        "Total invested: `$300 × 4 = $1,200`. Total shares: `30 + 50 + 60 + 25 = 165`.",
        "Average cost per share: `$1,200 ÷ 165 = $7.27`.",
      ],
    },
    {
      type: "text",
      body:
        "Now compare that to the **average price** over the same four months: `(10 + 6 + 5 + 12) ÷ 4 = $8.25`. Your average **cost** of `$7.27` came in **below** the average price of `$8.25`. That gap isn't luck — it's built in: spending a fixed dollar amount tilts your share count toward the cheap months, so the low prices carry more weight in your blended cost.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "The reason average cost lands **below** average price is mathematical: average cost is a **harmonic** mean of the prices (dollars over shares), and the harmonic mean is always `≤` the simple average whenever prices vary. Equal prices every month would make the two equal — it's the *volatility* that opens the gap.",
    },
    {
      type: "heading",
      text: "Recompute it: a second example",
    },
    {
      type: "text",
      body:
        "Same idea, new numbers. Invest `$600` per month for three months at prices `$20`, `$15`, `$25`:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Shares: `$600 ÷ $20 = 30`, `$600 ÷ $15 = 40`, `$600 ÷ $25 = 24`.",
        "Total invested: `$1,800`. Total shares: `30 + 40 + 24 = 94`.",
        "Average cost: `$1,800 ÷ 94 = $19.15`.",
        "Average price: `(20 + 15 + 25) ÷ 3 = $20.00`.",
      ],
    },
    {
      type: "text",
      body:
        "Again the average **cost** (`$19.15`) sits below the average **price** (`$20.00`). The fixed `$600` bought the most shares in the `$15` month, pulling your blended cost down.",
    },
    {
      type: "heading",
      text: "Lump sum: usually higher expected return",
    },
    {
      type: "text",
      body:
        "DCA's lower average cost sounds like a free win, but it isn't the whole story. With **lump-sum** investing you put the entire amount in **today**, so all of it starts compounding immediately. Because markets **trend upward** over long stretches, getting fully invested sooner usually beats waiting. Vanguard's research found that investing a lump sum immediately **beat** cost-averaging it in over roughly the following 12 months about **two-thirds of the time** (Vanguard reports ~`68%` across U.S. data) — simply because, more often than not, prices were higher later. The trade-off is **timing risk**: a lump sum invested right before a drop feels much worse than easing in.",
    },
    {
      type: "heading",
      text: "The behavioral case for DCA",
    },
    {
      type: "text",
      body:
        "If lump sum usually wins on paper, why does anyone DCA? Two real reasons. First, **most people don't have a lump sum** — they invest each paycheck, which *is* dollar-cost averaging by default (think a `401(k)`). Second, **behavior beats arithmetic when nerves break**. An automatic, fixed-amount schedule removes the urge to time the market, smooths the emotional swings of a volatile entry, and keeps a hesitant investor from sitting in cash. A slightly lower *expected* return you actually stick with can beat a higher one you bail on.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"DCA lowers my risk and raises my return.\"* It does neither reliably. It can lower your **average cost** over a bumpy period and curb **timing risk**, but because markets usually rise, spreading money in tends to leave some of it in cash earning less — historically a modest **return drag** versus investing it all at once. DCA's real edge is **discipline**, not magic.",
    },
  ],
};

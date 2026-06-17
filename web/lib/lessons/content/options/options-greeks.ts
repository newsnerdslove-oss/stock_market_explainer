import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "options-greeks",
  title: "The Options Greeks: Delta, Gamma, Theta, Vega",
  level: 3,
  moduleId: "markets-options",
  moduleOrder: 1,
  summary: "The four numbers that tell you how an option's price will move — and why being 'right' can still lose money.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "You buy a call, the stock climbs all afternoon — and your option *loses* money. How? An option's price answers to more than just the stock. The **Greeks** are the four sensitivities that explain the rest: how the price reacts to the underlying, to the passage of time, and to changes in implied volatility.",
    },
    {
      type: "text",
      body:
        "Every Greek is a *theoretical estimate* spat out by a pricing model — an educated approximation, not a promise. They're also **dynamic**: each one shifts as the stock, the calendar, and volatility move. Treat them as a live dashboard, not fixed dials.",
    },
    { type: "heading", text: "Delta — direction" },
    {
      type: "text",
      body:
        "**Delta** is the option-value change per `$1` move in the underlying. A long call runs `+0` to `+1`; a long put runs `−1` to `0`. A `0.50` delta means roughly `+$0.50` per share for a `+$1` move. Loosely, delta is also a shares-equivalent (a `0.50` call behaves like 50 shares) and a rough proxy for the probability of finishing in-the-money.",
    },
    { type: "heading", text: "Gamma — how fast direction changes" },
    {
      type: "text",
      body:
        "**Gamma** is the change in *delta* per `$1` move — how quickly your directional exposure ramps up or fades. Long options have positive gamma. Gamma is highest **near-the-money** and **near expiry**, which is why a short-dated option's P/L can lurch on a small move.",
    },
    { type: "heading", text: "Theta — time decay" },
    {
      type: "text",
      body:
        "**Theta** is the value lost per day to the clock. Long options have *negative* theta, and the bleed **accelerates near expiry**. Theta is why you can be right on direction and still lose: a small delta gain can be swamped by a day of decay.",
    },
    { type: "heading", text: "Vega — volatility" },
    {
      type: "text",
      body:
        "**Vega** is the value change per 1-point change in **implied volatility**. Long options have positive vega, so when IV falls, they lose value — an *IV crush* can sink your trade even if the stock moved your way.",
    },
    {
      type: "payoff",
      legs: [{ instrument: "call", side: "long", strike: 100, premium: 5, qty: 1 }],
      title: "Long call payoff",
      caption: "A long call: max loss = the $500 premium; breakeven = $105.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Delta", def: "Option-value change per `$1` move in the underlying. Long call `+0..+1`, long put `−1..0`." },
        { term: "Gamma", def: "Change in delta per `$1` move — how fast directional exposure shifts. Highest near-the-money and near expiry." },
        { term: "Theta", def: "Value change per day from time decay. Negative for long options; accelerates near expiry." },
        { term: "Vega", def: "Value change per 1-point change in implied volatility. Positive for long options." },
        { term: "Implied volatility (IV)", def: "The market's expectation of future movement, baked into the option's price." },
        { term: "Time decay", def: "The steady erosion of an option's extrinsic value as expiration approaches (theta)." },
        { term: "At-the-money", def: "Strike sitting right at the current stock price — where gamma and theta are most intense." },
      ],
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "You own 1 call, strike `100`, premium `$5`, 30 days out. The Greeks read: delta `0.50`, gamma `0.06`, theta `−0.08`, vega `0.12`.",
    },
    {
      type: "list",
      items: [
        "Stock rises `+$1` → option gains about `+$0.50` (delta), and delta itself climbs to about `0.56` (gamma added `0.06`).",
        "One day passes → about `−$0.08` (theta).",
        "IV drops `3` points → about `−$0.36` (vega `0.12 × 3`).",
        "Now combine them all on the same day — a `+$1` move *and* a `3`-point IV drop *and* a day gone: `+0.50 − 0.08 − 0.36 = +$0.06`/share. You were right on direction and barely broke even.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Near expiration, gamma and theta both spike: small moves swing your P/L fast, and decay bites hard. And these signs are for *long* options — **short** positions flip every sign (you collect theta but pay gamma and vega), and they carry **assignment risk**.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'delta is the probability my option pays off.'* Delta only *approximates* probability-of-ITM. It is fundamentally a **price-sensitivity** measure — and it changes constantly as gamma kicks in.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial advice. Long options can expire **worthless**, and any Greek-based estimate is a model output, not a guarantee.",
    },
  ],
};

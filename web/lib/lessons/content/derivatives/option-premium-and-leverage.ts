import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "option-premium-and-leverage",
  title: "Option Premium & Leverage",
  level: 2,
  moduleId: "markets-derivatives",
  moduleOrder: 3,
  summary: "What you're really paying for — and why being right can still lose money.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "When you pay a **premium** for an option, what are you actually buying? It splits into exactly two parts — and understanding that split explains why a long option is a *wasting asset* that can lose money even when you call the direction correctly.",
    },
    { type: "heading", text: "Premium = intrinsic + time value" },
    {
      type: "text",
      body:
        "Every premium is the sum of just two components: `premium = intrinsic value + time value`. There's nothing else in there.",
    },
    {
      type: "list",
      items: [
        "**Intrinsic value** = the in-the-money amount. Call: `max(0, spot − strike)`. Put: `max(0, strike − spot)`. It's never negative — an OTM or ATM option has `$0` intrinsic.",
        "**Time value** (extrinsic) = `premium − intrinsic`. It's what you pay for the *chance* of gaining intrinsic before expiry — driven by time remaining and volatility.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Intrinsic value", def: "The in-the-money amount: `max(0, spot − strike)` for a call. Never negative." },
        { term: "Time value (extrinsic)", def: "`premium − intrinsic` — the cost of the chance to gain intrinsic before expiry." },
        { term: "Theta", def: "The rate of time decay — how much time value the option loses as a day passes." },
        { term: "Time decay", def: "The daily erosion of time value, accelerating as expiration nears, reaching `$0` at expiry." },
        { term: "Leverage", def: "One premium controls 100 shares, magnifying the percentage profit and loss." },
        { term: "Wasting asset", def: "An asset that loses value with the passage of time alone — like a long option." },
        { term: "Total loss / expire worthless", def: "An OTM option at expiration is worth `$0` — a `−100%` loss of the premium." },
      ],
    },
    { type: "heading", text: "Theta: time decay" },
    {
      type: "text",
      body:
        "**Theta** is time decay. Time value erodes a little every day and *accelerates* as expiration approaches, decaying to `$0` at expiry — at which point the option is worth only its intrinsic value. A long option is a **wasting asset**: hold it and the clock works against you.",
    },
    { type: "heading", text: "Leverage" },
    {
      type: "text",
      body:
        "One premium controls `100 shares`, so a small percentage move in the stock becomes a large percentage move in the option — in *both* directions. The maximum loss on a long option is the premium paid: if it expires OTM, that's a `100%` loss.",
    },
    { type: "heading", text: "Worked example" },
    {
      type: "list",
      ordered: true,
      items: [
        "Call, strike `$100`, premium `$7`, spot `$104`, `30` days to expiry.",
        "Intrinsic = `max(0, 104 − 100) = $4`.",
        "Time value = `premium − intrinsic = 7 − 4 = $3`.",
        "Leverage: `$700` controls `100` shares worth `100 × $104 = $10,400`.",
        "If at expiration the spot is *still* `$104`, time value has decayed to `$0`, so the option = intrinsic `$4` = `$400`. That's `−$3` per share, `−$300` total — a loss *even though the stock never moved* (that's theta).",
        "If the spot ends at or below `$100`, the option is worth `$0` → you lose the full `$700` (`−100%`).",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Even an **ITM** option can lose: here you paid `$7` for `$4` of intrinsic, so you need a *further* rise just to break even. Total loss is normal in options — OTM options routinely expire worthless.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**Risk: leverage and decay are a double threat.** A long option is a wasting asset. Even if you're right on direction, time decay can erase the premium when the move is too *small* (it doesn't clear the strike by enough) or too *slow* (theta eats it first). Educational only, not financial advice.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**Misconception: \"if I'm right that the stock goes up, I'll make money on my call.\"** Not necessarily. You can be right on direction and still lose if the move is too small (under the premium) or too slow (theta decays the time value before the move arrives).",
    },
  ],
};

import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "calls-and-puts",
  title: "Calls and Puts",
  level: 2,
  moduleId: "markets-derivatives",
  moduleOrder: 2,
  summary: "The two building blocks of options — and how to compute what each pays.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "Every option is one of two things: a **call** or a **put**. Get these two straight and the rest of options trading is built on top of them. Both give the *buyer* a right — never an obligation — but they point in opposite directions.",
    },
    { type: "heading", text: "Call vs. put" },
    {
      type: "list",
      items: [
        "A **call** is the right (not the obligation) to **buy** the underlying at the **strike** price.",
        "A **put** is the right (not the obligation) to **sell** the underlying at the **strike** price.",
      ],
    },
    {
      type: "text",
      body:
        "The **buyer** (the *long*) pays the **premium** and owns the right. The **seller** or **writer** (the *short*) receives the premium and takes on the obligation to perform if **assigned**.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Call", def: "The right to *buy* the underlying at the strike price before/at expiration." },
        { term: "Put", def: "The right to *sell* the underlying at the strike price before/at expiration." },
        { term: "Strike price", def: "The fixed price at which the option lets you buy (call) or sell (put)." },
        { term: "Premium", def: "The price of the option, quoted per share; `× 100` gives the cost per contract." },
        { term: "Writer / seller", def: "The party who sells the option, collects the premium, and takes the obligation if assigned." },
        { term: "Moneyness", def: "Whether an option is in-the-money (ITM), at-the-money (ATM), or out-of-the-money (OTM)." },
        { term: "Assignment", def: "When a seller is required to fulfill the contract; American-style equity options can be assigned any time before expiry." },
      ],
    },
    { type: "heading", text: "Payoff at expiration" },
    {
      type: "text",
      body:
        "At expiration, the buyer's payoff is simple and never negative:",
    },
    {
      type: "list",
      items: [
        "**Call payoff** = `max(0, spot − strike)`",
        "**Put payoff** = `max(0, strike − spot)`",
      ],
    },
    {
      type: "text",
      body:
        "Payoff is never below `$0` for the buyer — the only thing the buyer can lose is the premium already paid. **Profit** = `payoff − premium`, so an option can finish in-the-money and *still* be a net loss.",
    },
    { type: "heading", text: "Moneyness" },
    {
      type: "text",
      body:
        "For a **call**: **ITM** when `spot > strike`, **ATM** when `spot ≈ strike`, **OTM** when `spot < strike`. For a **put** it reverses — a put is ITM when `spot < strike`.",
    },
    { type: "heading", text: "Worked example — a call" },
    {
      type: "list",
      ordered: true,
      items: [
        "Buy `1` call, strike `$100`, premium `$5` → cost `5 × 100 = $500`.",
        "At expiration the spot is `$108`.",
        "Payoff = `max(0, 108 − 100) = $8` per share → `8 × 100 = $800`.",
        "Profit = `$800 − $500 = +$300`. The option finished **ITM** and was a net winner.",
      ],
    },
    { type: "heading", text: "Worked example — a put" },
    {
      type: "list",
      ordered: true,
      items: [
        "Buy `1` put, strike `$50`, premium `$2` → cost `2 × 100 = $200`.",
        "Spot falls to `$44`. Payoff = `max(0, 50 − 44) = $6` → `6 × 100 = $600`. Profit = `$600 − $200 = +$400`.",
        "But if the spot is `$52`, payoff = `max(0, 50 − 52) = $0` → you lose the full `$200` premium.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Finishing exactly **at** the strike (ATM) gives `$0` intrinsic value, so the buyer still loses the entire premium. Remember that with American-style equity options, **assignment can happen before expiration**.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**Risk.** The *buyer's* worst case is losing `100%` of the premium when the option expires OTM. The *seller* collects a fixed premium but faces a much larger loss — a **naked call** has *theoretically unlimited* loss — and can be assigned at any time. This is educational only, not financial advice.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "**Misconception: \"buying a call is the same as buying the stock.\"** A call has a strike, an expiration, and a premium that decays. The stock must clear the strike by *enough* to recover the premium before expiry — otherwise you can lose `100%`, something a share owner never does from a small dip.",
    },
  ],
};

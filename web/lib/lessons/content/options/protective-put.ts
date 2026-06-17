import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "protective-put",
  title: "Protective Put: Insurance for Your Shares",
  level: 3,
  moduleId: "markets-options",
  moduleOrder: 3,
  summary: "Buy a floor under your stock — pay a premium, sleep through the dip, keep the upside.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "You're bullish on a stock long-term but nervous about the next few weeks — earnings, a Fed meeting, a wobbly market. A **protective put** buys you the right to sell at a set price no matter how far the stock falls. It's insurance: you keep the upside, but you pay a premium for the floor.",
    },
    { type: "heading", text: "How to build it" },
    {
      type: "list",
      items: [
        "Own **100 shares** of the stock.",
        "**Buy 1 put** — the right to sell at the strike, which becomes your **floor**.",
        "The stance is **bullish but cautious**: you want to ride through an event without bailing out.",
      ],
    },
    {
      type: "text",
      body:
        "Versus *selling* the stock, a put lets you keep the upside and any dividends — but the premium is a **sunk cost** that drags every outcome, like an insurance bill. Versus a *stop-loss*, a put **guarantees an exit price**: a stop can fill far below your level if the stock gaps overnight, while the put's strike holds.",
    },
    {
      type: "payoff",
      legs: [
        { instrument: "stock", side: "long", premium: 100, qty: 100 },
        { instrument: "put", side: "long", strike: 95, premium: 3, qty: 1 },
      ],
      title: "Protective put payoff",
      caption: "Floored at $95; breakeven $103; max loss $800 no matter how far it falls.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Protective put (married put)", def: "Long 100 shares plus a long put for downside protection; 'married' if opened together." },
        { term: "Floor (protected price)", def: "The strike — the worst sale price the put guarantees you." },
        { term: "Premium drag", def: "The cost of the put, which lowers every outcome whether or not you use it." },
        { term: "Deductible (analogy)", def: "The gap between your cost and the strike that you still eat before the floor engages." },
        { term: "Intrinsic value", def: "How far in-the-money the put is (`strike − stock` when positive) — what makes the floor real." },
        { term: "Gap risk", def: "An overnight price jump a stop-loss can't catch but a put's strike can." },
      ],
    },
    { type: "heading", text: "Worked example" },
    {
      type: "text",
      body:
        "Buy 100 shares @ `$100` (`$10,000`), then buy 1 put, strike `$95`, for `$3` (`$300`). Max loss is `(100 − 95 + 3) × 100 = $800`; breakeven is `cost + premium = $103`.",
    },
    {
      type: "list",
      items: [
        "Stock to `$80` → sell at `$95`: loss `(100 − 95) × 100 + 300 = −$800` (the floor holds).",
        "Stock to `$70` → still `−$800`; the floor doesn't care how far it falls.",
        "Stock to `$103` → breakeven, `$0`.",
        "Stock to `$120` → `+$1,700` (you kept the upside, minus the `$300` premium).",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "To cap the loss you must actually **exercise** the put (or sell the stock and put together). Letting an in-the-money put **expire unexercised** throws away the protection — and the floor is only as low as the strike you bought.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'a protective put means I can't lose money.'* You can still lose up to `(cost − strike)` plus the premium. It caps **how far** you fall, not whether you fall — and if the stock never drops, the premium is simply gone.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial advice. Options expire worthless if unused.",
    },
  ],
};

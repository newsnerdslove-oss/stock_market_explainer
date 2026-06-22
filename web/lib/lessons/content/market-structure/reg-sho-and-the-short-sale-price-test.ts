import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "reg-sho-and-the-short-sale-price-test",
  title: "Reg SHO & the Short-Sale Price Test",
  level: 2,
  moduleId: "markets-structure",
  moduleOrder: 7,
  summary: "The rules that govern short selling: locate, mark, close out — and the modern uptick rule.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "Short selling — borrowing shares to sell them, hoping to buy back cheaper — isn't a free-for-all. The SEC's **Regulation SHO** sets the plumbing: you must *locate* shares before you sell short, *mark* the order honestly, and *close out* any failure to deliver. A separate piece, **Rule 201**, throttles short selling in a stock that's already falling hard.",
    },
    { type: "heading", text: "The locate requirement (Rule 203)" },
    {
      type: "text",
      body:
        "Before a broker-dealer effects a short sale, it must have **borrowed** the security, **arranged to borrow** it, or have **reasonable grounds to believe** it can be borrowed and delivered by the settlement date. This is the **locate**. It must be done *before* the short sale and *on the same day* the order is effected — you can't sell first and find the shares later. The point is to reduce **naked short selling**, where someone sells stock they have no realistic way to deliver.",
    },
    { type: "heading", text: "Order marking (Rule 200)" },
    {
      type: "text",
      body:
        "Every sell order must be **marked** as one of three things, so the market knows what kind of sale it is:",
    },
    {
      type: "list",
      items: [
        "**Long** — the seller *owns* the security and it's in (or will be in) the broker's possession or control by settlement.",
        "**Short** — the seller does **not** own the security being delivered (a borrowed-share sale).",
        "**Short exempt** — a short sale the firm is claiming an *exemption* from the **Rule 201 price test** for; the marking flags it so trading centers don't reject it.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Marking is a compliance obligation with teeth: the SEC has brought enforcement cases against firms for **mis-marking** millions of orders (e.g. labeling shorts as longs). The marking is how the LOCATE and price-test rules are actually policed.",
    },
    { type: "heading", text: "Close-out of fails-to-deliver (Rule 204)" },
    {
      type: "text",
      body:
        "A **fail-to-deliver (FTD)** happens when shares aren't delivered by settlement. **Rule 204** forces the clearing-firm participant to **close out** that fail — by **purchasing or borrowing** the security — no later than the **start of regular trading hours on the settlement day following the settlement date**. Under today's **T+1** settlement cycle (effective `May 28, 2024`), that deadline is tighter than it was under the old T+2 cycle. Miss it, and the firm faces a **pre-borrow penalty**: it can't sell that stock short again without *actually borrowing* the shares first, until the fail is cleared.",
    },
    { type: "heading", text: "Rule 201: the alternative uptick rule" },
    {
      type: "text",
      body:
        "The old 'uptick rule' (Rule 10a-1) was repealed in 2007. Its modern replacement, **Rule 201**, adopted in `2010`, is a **circuit-breaker** uptick rule. It only switches on after a stock has already dropped sharply:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**Trigger:** a covered security falls **`10%` or more** from the **prior day's closing price**, intraday.",
        "**Restriction:** for the rest of that day, short sales may only execute at a price **above the national best bid** (you can't hit the bid to short — you have to post above it).",
        "**Duration:** the restriction stays in force for the **remainder of that day *and* all of the next trading day**.",
      ],
    },
    {
      type: "text",
      body:
        "The design is subtle: it doesn't *ban* shorting. It just makes short sellers **stand in line above the bid**, so **long sellers** — who can still sell at the bid — get to exit first while the stock is under pressure. If the stock drops another `10%` intraday on a day it's already restricted, the circuit breaker **re-triggers**, extending the restriction into the following day again.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Regulation SHO", def: "The SEC framework governing short sales: locate, order marking, and close-out of fails." },
        { term: "Locate (Rule 203)", def: "Borrowing, arranging to borrow, or reasonably believing shares can be borrowed — done before and on the same day as the short sale." },
        { term: "Naked short selling", def: "Selling short without a borrow or locate in place to deliver the shares." },
        { term: "Order marking (Rule 200)", def: "Labeling each sell order long, short, or short-exempt." },
        { term: "Short exempt", def: "A marking claiming an exemption from the Rule 201 price-test restriction." },
        { term: "Fail-to-deliver (FTD)", def: "Shares not delivered by settlement; Rule 204 forces a close-out." },
        { term: "Rule 201 (alternative uptick rule)", def: "After a 10% intraday drop, short sales must be above the national best bid for that day and the next." },
        { term: "National best bid", def: "The highest displayed bid across all markets; the price level Rule 201 forces shorts above." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Don't confuse Rule 201 with a **trading halt** or a **circuit breaker that stops trading**. Rule 201 never pauses the stock — trading continues normally. It only restricts *how* short sales may print (above the best bid). And its `10%` trigger is measured from the **prior close**, not from the day's high.",
    },
  ],
};

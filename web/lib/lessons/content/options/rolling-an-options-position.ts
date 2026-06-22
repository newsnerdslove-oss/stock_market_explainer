import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "rolling-an-options-position",
  title: "Rolling an Options Position: Buy Time, Change Strikes",
  level: 3,
  moduleId: "markets-options",
  moduleOrder: 10,
  summary: "Close one option and open another in a single adjustment — to defend, extend, or reset a trade.",
  estMinutes: 7,
  sections: [
    {
      type: "text",
      body:
        "Your covered call is getting tested, expiration is days away, and you're not ready to let the shares go. Instead of just closing the trade, you can **roll** it: close the current option and open a new one — often at a later expiration or a different strike — as one adjustment. A roll is not a special order type; it's two legs (one to close, one to open) usually entered together so you see the **net price** before you commit.",
    },
    { type: "heading", text: "The four directions of a roll" },
    {
      type: "list",
      items: [
        "**Roll out** — same strike, **later expiration**. Buys time and usually collects more premium on a short option.",
        "**Roll up** — **higher strike**, same expiration. On a short call, makes room for more upside; on a long call, takes some profit off the table.",
        "**Roll down** — **lower strike**, same expiration. Common on a short put under pressure, or on a long put to follow a falling stock.",
        "**Diagonal roll** — change the **strike *and* the expiration at once** (e.g., roll out *and* up). Named for the diagonal it traces across the options chain.",
      ],
    },
    {
      type: "text",
      body:
        "Mechanically, you **buy to close** the option you hold short (or **sell to close** one you hold long) and simultaneously **sell to open** / **buy to open** the replacement. Brokers package this as a single spread order with one combined price, so a partial fill can't leave you with a naked leg.",
    },
    { type: "heading", text: "Why traders roll" },
    {
      type: "list",
      items: [
        "**Defend a tested short.** A short call your stock is about to blow past — or a short put it's falling toward — can be rolled out (and up or down) to delay assignment and gain room.",
        "**Extend a covered call for more income.** When a short call nears expiration still out-of-the-money, roll it to the next cycle to **collect another premium** on the same shares.",
        "**Lock a profit and re-establish.** On a winning long option, roll up (calls) or down (puts) to bank gains while keeping a position in the trade.",
      ],
    },
    { type: "heading", text: "Debit or credit?" },
    {
      type: "text",
      body:
        "Every roll nets out to a single number. A **credit roll** pays you cash (the new option you sell brings in more than the old one costs to buy back) — the goal when defending or extending a short. A **debit roll** costs you cash. Rolling a short option **out in time** usually earns a credit because the later option has more time value; rolling **up or down** to a worse strike for your short can flip it to a debit. The net price — not the two legs separately — is what determines whether the adjustment was worth it.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Roll", def: "Closing an existing option and opening a new one as one adjustment, usually entered as a single net-priced order." },
        { term: "Roll out", def: "Moving to a later expiration at the same strike — buys time, typically for a credit on a short option." },
        { term: "Roll up / roll down", def: "Moving the strike higher (up) or lower (down), same expiration." },
        { term: "Diagonal roll", def: "Changing strike and expiration at the same time — a diagonal move across the chain." },
        { term: "Net credit / net debit", def: "The single combined price of the roll: cash received (credit) or paid (debit)." },
        { term: "Wash sale", def: "Tax rule that defers a loss if you re-acquire a substantially identical position within 30 days before or after the loss." },
      ],
    },
    { type: "heading", text: "Worked example: rolling a tested covered call" },
    {
      type: "text",
      body:
        "You're short a `$55` call expiring this Friday for which you originally collected `$2`. The stock is now `$56` and you'd rather keep the shares. You **buy to close** the `$55` call for `$1.80` and **sell to open** a `$57` call in the next month's cycle for `$2.50`. Net of the roll: `$2.50 − $1.80 = $0.70` **credit** (`$70`). You've moved the cap from `$55` up to `$57`, bought a month of time, and got paid `$0.70` to do it — a diagonal roll (out *and* up).",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "A roll is **two separate trades for tax purposes**: closing the old option **realizes a gain or loss** right then. If you close a short option at a loss and reopen a substantially identical short within the **30-day** window, the IRS **wash sale** rule can disallow that loss for now — it's added to the basis of the new position instead.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'rolling escapes a losing trade.'* Rolling **doesn't erase the loss** — it relocates risk to a new contract and often *adds* cost. A credit can mask a worse strike. And repeatedly rolling a deeply tested short can lock in a string of small losses larger than just taking assignment.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial advice. Tax treatment varies — confirm wash-sale specifics with IRS Publication 550 or a tax professional.",
    },
  ],
};

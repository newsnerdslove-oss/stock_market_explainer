import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "margin-accounts-and-regulation-t",
  title: "Margin Accounts & Regulation T",
  level: 3,
  moduleId: "markets-margin",
  moduleOrder: 1,
  summary:
    "What a margin account really is — a loan secured by your stock — and the 50% Regulation T rule that sets how much you can borrow.",
  estMinutes: 6,
  sections: [
    {
      type: "text",
      body:
        "You found a stock you like, but you only have so much cash. A broker offers to *lend* you the rest so you can buy more. That's a **margin account** — and before you say yes, understand exactly what you're signing up for: a loan, secured by the very shares you're buying.",
    },
    {
      type: "heading",
      text: "Cash account vs. margin account",
    },
    {
      type: "text",
      body:
        "In a **cash account** you pay `100%` of every purchase with your own money. Simple: you can only buy what you can afford. A **margin account** lets you borrow part of the purchase price from your broker, using the securities in your account as **collateral**. You put up some of the money; the broker lends the rest.",
    },
    {
      type: "text",
      body:
        "That borrowed money is a real loan — a **margin loan** — and it *accrues interest daily*. You owe it back whether your stock goes up, down, or sideways.",
    },
    {
      type: "heading",
      text: "Regulation T: the 50% rule",
    },
    {
      type: "text",
      body:
        "**Regulation T**, set by the Federal Reserve, caps how much the broker can lend on a *new* purchase. The **initial margin** requirement is `50%`: the broker may lend you up to `50%` of the purchase price, which means you must put up at least `50%` yourself. To open margin borrowing at all, you generally need at least `$2,000` in equity.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Reg T is a *floor*, not a ceiling on caution. Firms can — and do — require **more** (these are called **house requirements**) and can refuse to lend against volatile or low-priced stocks (those aren't **marginable**).",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Margin account", def: "A brokerage account that lets you borrow from the broker to buy securities, using those securities as collateral." },
        { term: "Cash account", def: "An account where you pay `100%` of each purchase with your own money — no borrowing." },
        { term: "Regulation T", def: "The Federal Reserve rule setting the `50%` initial margin on new purchases." },
        { term: "Initial margin", def: "The minimum share of a new purchase you must fund yourself — `50%` under Reg T." },
        { term: "Equity", def: "Your own stake: account value minus what you owe (`market value − loan`)." },
        { term: "Margin loan", def: "The money borrowed from the broker; it accrues interest daily and must be repaid." },
        { term: "Marginable security", def: "A security a broker is willing to lend against. Volatile or low-priced stocks often aren't." },
      ],
    },
    {
      type: "heading",
      text: "Worked example",
    },
    {
      type: "text",
      body:
        "Say you deposit `$10,000` into a margin account. Under Reg T's `50%` rule, your buying power is `$10,000 ÷ 0.50 = $20,000`. You buy 400 shares at `$50` — a `$20,000` position. Of that, `$10,000` is your money and `$10,000` is the broker's loan.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Deposit: `$10,000`",
        "Buying power: `$10,000 ÷ 0.50 = $20,000`",
        "Position: 400 shares × `$50 = $20,000`",
        "Margin loan: `$10,000`",
        "Equity: `$20,000 − $10,000 = $10,000` (exactly `50%`)",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Edge case: meeting the `50%` rule on day one does **not** make the trade safe. Reg T governs your *contribution*, not your risk. The loan must be repaid in full regardless of what the stock does — and remember, not every security is even marginable.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *\"A margin account just gives me more buying power — no big deal.\"* It is a **loan secured by your stock**. If those shares fall, you still owe the full loan plus interest, and the broker can sell your shares to protect itself. Margin amplifies losses just as much as gains, and it can cost you more than you put in. This is educational content, not financial advice.",
    },
  ],
};

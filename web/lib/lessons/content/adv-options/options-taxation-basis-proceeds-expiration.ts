import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "options-taxation-basis-proceeds-expiration",
  title: "Options & Taxes: Basis, Proceeds & Expiration",
  level: 4,
  moduleId: "markets-adv-options",
  moduleOrder: 9,
  summary:
    "When an option is exercised the premium folds into the stock's basis or proceeds; when it expires it's a clean capital gain or loss. Work all four cases numerically.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "When an equity option is **exercised**, the premium doesn't get its own gain or loss — it **rolls into the stock trade**, adjusting **basis** for the buyer of shares and **proceeds** for the seller. When the same option **expires worthless**, there's no stock trade, so the premium *is* the whole result: a **capital loss** to the holder and a **capital gain** to the writer. These IRS Publication 550 rules generate a tight cluster of Series 7 questions, and they're easy points once you memorize the four exercise cases.",
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Scope: this is the **core** equity-option tax treatment. The **`§1256` 60/40** rule (broad-based index options) and the **married-put** holding-period rules are covered in their own lessons — they're exceptions layered on top of what follows.",
    },
    { type: "heading", text: "The one rule behind everything" },
    {
      type: "text",
      body:
        "On **exercise**, the premium adjusts the *stock* side of the trade — it never produces a separate gain or loss. On **expiration**, the option is closed for `$0`, so the entire premium is realized as a capital gain or loss on the expiration date.",
    },
    { type: "heading", text: "Exercise: the four cases" },
    {
      type: "list",
      items: [
        "**Call, buyer (holder):** you buy stock — **add** the call premium to your **cost basis**.",
        "**Call, writer:** you're assigned and **sell** stock — **add** the premium to your **sale proceeds**.",
        "**Put, buyer (holder):** you **sell** stock — the put premium **reduces** your **sale proceeds** (amount realized).",
        "**Put, writer:** you're assigned and **buy** stock — the premium **reduces** your **cost basis**.",
      ],
    },
    {
      type: "text",
      body:
        "The pattern: a **call** premium always moves toward the **buy/sell of shares** it triggered (basis up for the long, proceeds up for the writer). A **put** premium always pushes the **share-sale value down** (proceeds down for the holder, basis down for the writer). Premiums paid are *added to the share you receive*; premiums received are *added to the cash you keep* — then carried into the stock leg.",
    },
    { type: "heading", text: "Worked: the two call cases" },
    {
      type: "text",
      body:
        "An investor buys an `XYZ` `50` call for `$3` (`$300`) and later exercises it; the writer was short that same call.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**Holder** buys `100` shares at the `$50` strike = `$5,000`, then **adds** the `$300` premium → **cost basis `$5,300`** (`$53/share`). No separate option gain/loss.",
        "**Writer** delivers `100` shares at `$50` = `$5,000`, then **adds** the `$300` premium → **proceeds `$5,300`**. The writer's gain/loss is `$5,300` minus *their* basis in the delivered shares.",
      ],
    },
    { type: "heading", text: "Worked: the two put cases" },
    {
      type: "text",
      body:
        "An investor buys an `XYZ` `50` put for `$2` (`$200`) and exercises it; the writer was short that same put.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "**Holder** sells `100` shares at the `$50` strike = `$5,000`, then **subtracts** the `$200` premium → **amount realized `$4,800`** (`$48/share`). Gain/loss = `$4,800` minus the holder's basis in those shares.",
        "**Writer** is assigned and buys `100` shares at `$50` = `$5,000`, then **subtracts** the `$200` premium → **cost basis `$4,800`** (`$48/share`).",
      ],
    },
    { type: "heading", text: "Expiration: the premium is the result" },
    {
      type: "text",
      body:
        "If the option **expires worthless**, no shares move, so the premium stands alone on the **expiration date**. The **holder** recognizes a **capital loss** equal to the premium paid (its character — short- or long-term — follows the holder's holding period in the option). The **writer** recognizes a **short-term capital gain** equal to the premium received — by rule it's **always short-term**, regardless of how long the option was open.",
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "Memory hook: a writer's **expiration** gain is **always short-term**, but a writer's **exercise** result takes the holding period of the *stock* delivered/acquired — because exercise turns the whole thing into a stock trade.",
    },
    { type: "heading", text: "Closing the option early (sale-to-close)" },
    {
      type: "text",
      body:
        "If you **sell the option to close** instead of exercising or letting it expire, you have a normal capital gain or loss = **sale premium − purchase premium**. It's **short-term** unless you held the *option* **more than one year** (`>1 year`); **one year or less** is short-term. Most listed options are held well under a year, so these are typically short-term.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Cost basis", def: "What you paid for stock for tax purposes. Exercising a call adds the call premium; being assigned on a put subtracts the put premium." },
        { term: "Amount realized / proceeds", def: "What you received selling stock. A call writer adds the premium; a put holder subtracts the premium." },
        { term: "Call exercised (holder)", def: "Buy stock at strike, then add the premium paid to basis — no separate option gain/loss." },
        { term: "Call exercised (writer)", def: "Sell stock at strike, then add the premium received to proceeds." },
        { term: "Put exercised (holder)", def: "Sell stock at strike, then subtract the premium paid from the amount realized." },
        { term: "Put exercised (writer)", def: "Buy stock at strike, then subtract the premium received from basis." },
        { term: "Expire worthless", def: "Holder takes a capital loss = premium paid; writer takes a short-term capital gain = premium received, on the expiration date." },
        { term: "Sale-to-close", def: "Closing the option in the market: gain/loss = sale − purchase premium; short-term unless the option was held more than one year." },
        { term: "Long-term", def: "Held more than one year (>1 year); one year or less is short-term, taxed as ordinary income." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Misconception: *'When I exercise a call, I report a gain on the option.'* No — on **exercise** the premium **merges into the stock** (basis or proceeds); a separate gain/loss only appears if you **sell the option** or let it **expire**. Per **IRS Publication 550**. This is educational content, not tax or financial advice.",
    },
  ],
};

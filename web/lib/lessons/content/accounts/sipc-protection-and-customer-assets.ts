import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "sipc-protection-and-customer-assets",
  title: "SIPC Protection & Customer Assets",
  level: 4,
  moduleId: "markets-accounts",
  moduleOrder: 7,
  summary:
    "What SIPC covers (and the $500,000 / $250,000 limits), what it pointedly does NOT cover, how a SIPC liquidation runs through a court-appointed trustee, and how SEC Rule 15c3-3 keeps customer assets segregated in the first place.",
  estMinutes: 9,
  sections: [
    {
      type: "text",
      body:
        "There are two distinct safeguards for the assets in your brokerage account, and the test loves to conflate them. **SEC Rule 15c3-3** is the *front line* — it forces the firm to keep your fully-paid securities **segregated** so they're never at risk in the first place. **SIPC** is the *backstop* — if a member firm fails and customer assets are **missing**, SIPC steps in. Neither one protects you from a stock simply **going down**.",
    },
    { type: "heading", text: "What SIPC is — and what it is not" },
    {
      type: "text",
      body:
        "The **Securities Investor Protection Corporation (SIPC)** is a **nonprofit, member-funded** corporation created by the **Securities Investor Protection Act (SIPA)** of 1970. It is **not** a government agency and is **not** the SEC. SIPC protects the **custody function** of a broker-dealer — it restores cash and securities that are **missing** from customer accounts when a SIPC-member firm fails financially. It is the brokerage analog of the FDIC for banks, but the comparison is loose: **SIPC does not insure against losses**.",
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "The single most-tested misconception: *'SIPC will make me whole if my stock drops.'* **No.** SIPC explicitly does **not** cover **the decline in value** of your securities, bad advice, or unsuitable recommendations. It only replaces assets that are **missing** because the firm failed.",
    },
    { type: "heading", text: "The coverage limits" },
    {
      type: "list",
      items: [
        "**`$500,000`** total protection **per customer**, per failed firm.",
        "Within that `$500,000`, **no more than `$250,000`** may be for a **claim for cash**.",
        "**Securities** can use the **full `$500,000`** (e.g., `$500,000` of stock and `$0` cash is fully covered).",
        "**Cash is the constraint:** `$500,000` in cash is covered only up to **`$250,000`** — the rest is a general creditor claim.",
      ],
    },
    {
      type: "text",
      body:
        "The limit is applied **per customer**, by **separate capacity**. An individual account and a joint account, for instance, are **different customers** for SIPC purposes — so multiple `$500,000` limits can apply to the same person across genuinely separate capacities.",
    },
    { type: "heading", text: "What SIPC does NOT cover" },
    {
      type: "list",
      items: [
        "**Market losses** — a decline in the value of your securities is never covered.",
        "**Commodity futures contracts** and **options on futures** (narrow exceptions exist for certain portfolio-margining accounts).",
        "**Foreign exchange (FX)** and **currency** trades.",
        "**Unregistered investment contracts** and **fixed annuity** contracts.",
        "**Crypto/digital assets** that are **not registered as securities** with the SEC.",
        "**Bad advice / unsuitable recommendations** — that's a suitability matter, not a SIPC claim.",
      ],
    },
    { type: "heading", text: "How a SIPC liquidation works" },
    {
      type: "text",
      body:
        "When a SIPC-member firm fails and customer assets are at risk, SIPC initiates a **liquidation proceeding** in federal court. The court appoints an **independent trustee** to wind down the firm. The trustee **takes control of the books and records**, **closes the offices**, mails **court-approved claim forms** to customers, and works to **recover and return** customer property — operating under **SIPC's oversight** throughout.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "SIPC files for a **protective decree** and the **court appoints a trustee** for the firm.",
        "The trustee seizes the firm's **books and records** and notifies customers to **file claims** on court-approved forms.",
        "Customer property is **pooled and distributed pro rata**; any shortfall is then covered by **SIPC advances** up to the `$500,000` / `$250,000` limits.",
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "For **very small** failures where the claims of **all customers in the aggregate are less than `$250,000`** (and direct payment costs SIPC less than a court liquidation), SIPC may use a **direct payment procedure** — **no court proceeding and no trustee** — and simply pay the claims itself. The same `$500,000` / `$250,000` per-customer protections still apply.",
    },
    { type: "heading", text: "The front line: SEC Rule 15c3-3" },
    {
      type: "text",
      body:
        "The reason most failures leave **little or nothing missing** is **SEC Rule 15c3-3**, the **Customer Protection Rule**. A carrying broker-dealer must do **two** things: keep **physical possession or control** of customers' **fully-paid and excess-margin securities**, and maintain a **Special Reserve Bank Account** holding cash or qualified securities at least equal to the **net cash it owes customers**.",
    },
    {
      type: "list",
      items: [
        "**Possession or control:** fully-paid customer securities are held in a **good control location**, free of any firm lien — the firm **cannot** pledge them for its own borrowing.",
        "**Special Reserve Bank Account:** customer cash (net) is **segregated** at a bank, computed by the **reserve formula** in the rule.",
        "**Segregation = the point:** because customer assets are kept apart from the firm's own assets, a failure usually leaves customer property **intact**, and SIPC only fills any residual gap.",
      ],
    },
    { type: "heading", text: "Worked scenario" },
    {
      type: "text",
      body:
        "A customer's account holds **`$400,000` of stock** and **`$300,000` of cash** when the firm fails. SIPC covers the **full `$400,000`** of securities, but the cash claim is capped at **`$250,000`** — so SIPC protection reaches **`$650,000`** here, and the remaining **`$50,000`** of cash becomes a **general creditor claim** against the estate. The `$500,000` total limit was **not** the binding constraint; the **`$250,000` cash sub-limit** was.",
    },
    {
      type: "keyTerms",
      terms: [
        { term: "SIPC", def: "Securities Investor Protection Corporation — a nonprofit, member-funded backstop (not a government agency) created by SIPA in 1970 that restores MISSING customer cash and securities when a member firm fails." },
        { term: "$500,000 limit", def: "Maximum SIPC protection per customer per failed firm, covering securities and cash combined." },
        { term: "$250,000 cash sub-limit", def: "The most of the $500,000 that may be paid on a claim for CASH; securities can use the full $500,000." },
        { term: "Not covered by SIPC", def: "Market/decline losses, commodity futures, FX/currency, unregistered investment contracts, fixed annuities, and unregistered crypto assets." },
        { term: "SIPC liquidation", def: "A federal-court proceeding in which a court-appointed trustee takes control of the failed firm and returns customer property under SIPC oversight." },
        { term: "Direct payment procedure", def: "For very small failures where all customer claims in the aggregate total less than $250,000, SIPC pays claims directly with no court proceeding and no trustee." },
        { term: "SEC Rule 15c3-3", def: "The Customer Protection Rule: requires possession or control of fully-paid/excess-margin customer securities and a Special Reserve Bank Account for net customer cash." },
        { term: "Special Reserve Bank Account", def: "A segregated bank account holding cash/qualified securities at least equal to the net cash the firm owes customers, per the 15c3-3 reserve formula." },
      ],
    },
    {
      type: "callout",
      tone: "info",
      body:
        "Educational only, not financial or legal advice.",
    },
  ],
};

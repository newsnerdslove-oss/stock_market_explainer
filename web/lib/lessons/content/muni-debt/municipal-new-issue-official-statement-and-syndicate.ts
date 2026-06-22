import type { Lesson } from "@/lib/lessons/types";

export const lesson: Lesson = {
  slug: "municipal-new-issue-official-statement-and-syndicate",
  title: "Bringing a Muni to Market: Official Statement, Legal Opinion & Syndicate",
  level: 4,
  moduleId: "markets-muni-debt",
  moduleOrder: 7,
  summary:
    "The primary-market machinery behind a new muni — the Preliminary and final Official Statement, the bond counsel's legal opinion, competitive vs. negotiated sale, and how the underwriting syndicate splits the spread via takedown and concession.",
  estMinutes: 8,
  sections: [
    {
      type: "text",
      body:
        "Before a muni ever trades, it has to be **brought to market** — disclosed, vetted by lawyers, sold to an underwriter, and distributed to investors. Series 7 expects you to know the **paperwork** (Official Statement, legal opinion) and the **plumbing** (competitive vs. negotiated sale, the syndicate, and how the spread is split).",
    },
    {
      type: "heading",
      text: "The Official Statement (and the Preliminary)",
    },
    {
      type: "text",
      body:
        "The **Official Statement (OS)** is the muni world's disclosure document — the MSRB calls it comparable to a **prospectus** for a corporate offering. It describes the issuer, the security backing the bonds, the use of proceeds, the maturity schedule, and risk factors. Munis are exempt from the registration requirements of the Securities Act of 1933, so there is no SEC-registered prospectus — the OS does that disclosure job instead.",
    },
    {
      type: "list",
      items: [
        "**Preliminary Official Statement (POS)** — circulated to investors **before pricing**; it carries most disclosure but **omits the final price, yields, and coupons** (and any reoffering terms that depend on them).",
        "**Final Official Statement (OS)** — completed **after the bonds are priced**, adding the final interest rates, offering prices/yields, and the dated closing details.",
        "Under SEC **Rule 15c2-12**, the underwriter must obtain and review the issuer's near-final OS before bidding/purchasing, and arrange to deliver copies to investors.",
        "Underwriters must submit the OS to the MSRB's **EMMA** system for public posting (MSRB Rule G-32).",
      ],
    },
    {
      type: "callout",
      tone: "tip",
      body:
        "Mnemonic: the **POS comes before the price**. If a number on the cover would change once the bonds are priced — final coupon, yield, offering price — it's **missing from the POS** and only appears in the final OS.",
    },
    {
      type: "heading",
      text: "The bond counsel legal opinion",
    },
    {
      type: "text",
      body:
        "**Bond counsel** is an independent law firm hired by the **issuer** (not the underwriter) to examine the bonds and render a **legal opinion** printed in the OS. The opinion is the buyer's assurance on two big questions — is the debt **valid**, and is the interest **tax-exempt**?",
    },
    {
      type: "list",
      items: [
        "**Validity** — the bonds are **duly authorized** and are **valid and binding obligations** of the issuer (issued under proper legal authority).",
        "**Tax exemption** — whether, and to what extent, interest is **exempt from federal income tax** (and often from the issuing state's income tax).",
        "Bond counsel typically does **NOT** opine on the **investment merits** of the bonds, on the accuracy of the financial projections, or on the adequacy of the OS's disclosure.",
      ],
    },
    {
      type: "list",
      items: [
        "**Unqualified (clean) legal opinion** — bond counsel renders the opinion with **no reservations**; the bonds are valid and tax-exempt without conditions. This is what issuers want.",
        "**Qualified legal opinion** — bond counsel attaches a **reservation or contingency** that could affect the bonds' legal or tax status. A 'qualified' opinion is a **caveat**, not a compliment — new issues carrying qualified opinions are very hard to sell.",
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "Don't read **'qualified'** as 'better' or 'certified.' In bond-opinion language it's the **weaker** of the two — the opinion is hedged. **Unqualified = clean, no reservations**; **qualified = there's a catch**.",
    },
    {
      type: "heading",
      text: "Competitive vs. negotiated sale",
    },
    {
      type: "text",
      body:
        "An issuer sells a new issue in one of two ways. In a **competitive (public) sale**, the issuer advertises and takes **sealed bids** from underwriters. In a **negotiated sale**, the issuer selects one underwriter in advance and negotiates the price and spread directly. GO bonds (especially those needing voter approval) are often sold competitively; complex revenue deals are often negotiated.",
    },
    {
      type: "list",
      items: [
        "The issuer publishes a **Notice of Sale** (also called the *official notice of sale*) describing the structure, maturities, call features, and **how bids will be judged**.",
        "Underwriters submit **sealed bids**; the issuer **awards the bonds to the bid with the lowest interest cost**.",
        "**Net Interest Cost (NIC)** — totals the coupon interest over the life of the issue, then adjusts for any **premium or discount**. NIC **ignores the time value of money**.",
        "**True Interest Cost (TIC)** — like NIC, but it **discounts future payments to present value**, so it accounts for the **time value of money**. TIC is the more precise measure.",
      ],
    },
    {
      type: "heading",
      text: "The underwriting syndicate",
    },
    {
      type: "text",
      body:
        "A single firm rarely takes down a whole issue, so underwriters band together in a **syndicate (account)** to share the risk and the selling effort. One firm is the **syndicate manager** (senior manager / lead underwriter); it runs the order book and signs the bond purchase agreement with the issuer. The other firms are **co-managers / syndicate members**.",
    },
    {
      type: "list",
      items: [
        "The **Agreement Among Underwriters (AAU)** — sometimes called the *syndicate letter* — is the contract **among the syndicate members** that sets each firm's commitment, liability, and compensation.",
        "A separate **bond purchase agreement (or, in a competitive deal, the winning bid)** binds the **syndicate to the issuer**.",
        "Syndicate liability can be **divided (Western, several)** — each firm liable only for its own bonds — or **undivided (Eastern)** — each firm liable for its share of **any unsold balance**.",
      ],
    },
    {
      type: "heading",
      text: "Splitting the spread: takedown and concession",
    },
    {
      type: "text",
      body:
        "The **underwriting spread** is the difference between what the syndicate pays the issuer and the **public offering price** — it's the syndicate's gross compensation, carved up by the AAU. The pieces (from smallest slice to largest) are the **management fee**, the **takedown**, and (within the takedown) the **concession**.",
    },
    {
      type: "list",
      items: [
        "**Concession** — the portion of the spread earned by a **selling-group member** who sells bonds but is **not** a syndicate member (it takes no underwriting liability).",
        "**Total takedown** — the full discount a **syndicate member** earns on bonds it sells; it equals the **concession plus the additional takedown** (`total takedown = concession + additional takedown`).",
        "A syndicate member selling directly to a customer earns the **total takedown**; if it sells through the selling group, the seller keeps the concession and the member keeps the **additional takedown**.",
        "**Management fee** — paid to the syndicate manager for running the deal; it's typically the **smallest** component of the spread.",
      ],
    },
    {
      type: "keyTerms",
      terms: [
        { term: "Official Statement (OS)", def: "Muni disclosure document — the MSRB's analog to a corporate prospectus; finalized after pricing." },
        { term: "Preliminary Official Statement (POS)", def: "Pre-pricing OS that omits final price, coupons, and yields ('comes before the price')." },
        { term: "Rule 15c2-12", def: "SEC rule requiring the underwriter to obtain/review and deliver the OS in a primary offering." },
        { term: "Legal opinion", def: "Bond counsel's opinion in the OS attesting to the bonds' validity and tax exemption." },
        { term: "Unqualified opinion", def: "Clean legal opinion with no reservations — what issuers want." },
        { term: "Qualified opinion", def: "Legal opinion hedged with a reservation or contingency — a caveat, not a plus." },
        { term: "Notice of Sale", def: "Issuer's published terms inviting competitive bids and stating how bids are judged." },
        { term: "NIC", def: "Net Interest Cost — total coupon interest ± premium/discount; ignores time value of money." },
        { term: "TIC", def: "True Interest Cost — like NIC but discounts payments to present value (time value included)." },
        { term: "Syndicate manager", def: "Senior/lead underwriter that runs the book and signs with the issuer." },
        { term: "Agreement Among Underwriters", def: "Contract among syndicate members setting commitment, liability, and compensation." },
        { term: "Takedown", def: "Discount a syndicate member earns on bonds it sells; total takedown = concession + additional takedown." },
        { term: "Concession", def: "Portion of the spread paid to a selling-group member that takes no underwriting liability." },
      ],
    },
    {
      type: "callout",
      tone: "warn",
      body:
        "This is educational content for exam prep, not financial or legal advice. Spread structures, sale methods, and opinion language vary by deal — always read the actual Official Statement and Notice of Sale.",
    },
  ],
};

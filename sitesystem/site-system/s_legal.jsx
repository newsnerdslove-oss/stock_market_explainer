// About / legal — placeholder document hub. About Stax + Terms + Privacy.
// Body copy is placeholder; structure is real so legal can drop final text in.
function ScreenLegal({ go, theme, setTheme }) {
  const [doc, setDoc] = React.useState('about');
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });

  const ph = (n) => 'This section is a placeholder. Final wording will be supplied by the legal team before launch — the structure and headings below are in place so the copy can drop straight in.';

  const DOCS = {
    about: {
      icon: 'sparkles', title: 'About Stax', updated: 'Company overview',
      lead: 'Stax is a learn-the-stock-market app built around five-minute lessons, real charts, and a daily habit loop. We turn dense financial concepts into something you can actually finish on a coffee break.',
      sections: [
        { h: 'Our mission', b: 'We believe understanding the market should not require a finance degree. Stax breaks investing literacy into small, visual, repeatable steps so anyone can build real confidence over time.' },
        { h: 'What we build', b: 'Interactive lessons on candlesticks, trends, and options; a daily challenge and streak system; practice trainers; and a leaderboard that keeps learning social. Every chart in the product is the same component set our learners study.' },
        { h: 'The team', b: 'Stax is built by a small team of educators, designers, and engineers who care about clarity over jargon. [Placeholder — team bios and photos to follow.]' },
        { h: 'Press & contact', b: 'For press, partnerships, or general questions, reach us at hello@stax.example. [Placeholder contact details.]' },
      ],
    },
    terms: {
      icon: 'file-text', title: 'Terms of Service', updated: 'Last updated: [date]',
      lead: 'These Terms govern your use of Stax. This is placeholder text — replace with the final agreement reviewed by counsel before launch.',
      sections: [
        { h: '1. Acceptance of terms', b: ph() },
        { h: '2. Your account', b: ph() },
        { h: '3. Subscriptions & billing', b: ph() },
        { h: '4. Acceptable use', b: ph() },
        { h: '5. Educational content disclaimer', b: 'Stax is for educational purposes only and does not provide financial, investment, or trading advice. [Placeholder — final disclaimer language to be confirmed by legal.]' },
        { h: '6. Limitation of liability', b: ph() },
        { h: '7. Changes to these terms', b: ph() },
      ],
    },
    privacy: {
      icon: 'shield-check', title: 'Privacy Policy', updated: 'Last updated: [date]',
      lead: 'This Privacy Policy explains what we collect and how we use it. Placeholder text — replace with the final policy before launch.',
      sections: [
        { h: '1. Information we collect', b: ph() },
        { h: '2. How we use your information', b: ph() },
        { h: '3. Single sign-on providers', b: 'When you sign in with Google, Apple, Microsoft, GitHub, or company SSO, we receive basic profile information from that provider. [Placeholder — list exact fields and retention before launch.]' },
        { h: '4. Cookies & analytics', b: ph() },
        { h: '5. Data retention & deletion', b: ph() },
        { h: '6. Your rights', b: ph() },
        { h: '7. Contact', b: 'Questions about privacy? Email privacy@stax.example. [Placeholder.]' },
      ],
    },
  };

  const tabs = [['about', 'About us', 'sparkles'], ['terms', 'Terms', 'file-text'], ['privacy', 'Privacy', 'shield-check']];
  const d = DOCS[doc];

  return (
    <div style={{ minHeight: '100vh', background: A.page, color: A.ink, fontFamily: A.font }}>
      {/* slim top bar */}
      <div style={{ borderBottom: `1px solid ${A.border}`, background: A.card }}>
        <div style={{ maxWidth: 980, margin: '0 auto', padding: '16px 28px', display: 'flex', alignItems: 'center', gap: 14 }}>
          <div onClick={() => go('marketing')} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
            <div style={{ width: 34, height: 34, borderRadius: 10, background: A.primary, color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 18 }}>S</div>
            <span style={{ fontWeight: 800, fontSize: 18, letterSpacing: '-.02em' }}>Stax</span>
          </div>
          <div style={{ flex: 1 }} />
          <Badge tone="amber">Placeholder</Badge>
          <span onClick={() => go('marketing')} style={{ fontSize: 14, fontWeight: 700, color: A.muted, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
            <Icon name="arrow-left" size={16} /> Back to site
          </span>
        </div>
      </div>

      <div style={{ maxWidth: 980, margin: '0 auto', padding: '40px 28px 80px', display: 'grid', gridTemplateColumns: '220px 1fr', gap: 40, alignItems: 'start' }}>
        {/* doc switcher */}
        <div style={{ position: 'sticky', top: 28, display: 'flex', flexDirection: 'column', gap: 6 }}>
          {tabs.map(([id, label, ic]) => (
            <div key={id} onClick={() => { setDoc(id); window.scrollTo(0, 0); }} style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '11px 14px',
              borderRadius: 12, cursor: 'pointer', fontWeight: 700, fontSize: 15,
              background: doc === id ? A.primarySoft : 'transparent', color: doc === id ? A.primaryDeep : A.muted }}>
              <Icon name={ic} size={18} />{label}
            </div>
          ))}
          <div style={{ borderTop: `1px solid ${A.border}`, margin: '12px 0 8px' }}></div>
          <div style={{ fontSize: 12.5, color: A.faint, fontWeight: 600, lineHeight: 1.6, padding: '0 14px' }}>
            These pages are placeholders. Final copy is provided by the legal team.
          </div>
        </div>

        {/* document body */}
        <div style={{ maxWidth: 640 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <div style={{ width: 46, height: 46, borderRadius: 13, background: A.primarySoft, color: A.primary, display: 'grid', placeItems: 'center', flex: '0 0 auto' }}>
              <Icon name={d.icon} size={24} />
            </div>
            <div>
              <h1 style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-.02em', margin: 0, lineHeight: 1.1 }}>{d.title}</h1>
              <div style={{ fontSize: 13.5, color: A.faint, fontWeight: 600, fontFamily: A.mono, marginTop: 3 }}>{d.updated}</div>
            </div>
          </div>

          <p style={{ fontSize: 17, lineHeight: 1.65, color: A.muted, fontWeight: 500, margin: '18px 0 8px' }}>{d.lead}</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 26, marginTop: 24 }}>
            {d.sections.map((s, i) => (
              <div key={i}>
                <h2 style={{ fontSize: 19, fontWeight: 800, letterSpacing: '-.01em', margin: '0 0 8px', color: A.ink }}>{s.h}</h2>
                <p style={{ fontSize: 15.5, lineHeight: 1.7, color: A.muted, fontWeight: 500, margin: 0 }}>{s.b}</p>
              </div>
            ))}
          </div>

          {/* footer links */}
          <div style={{ marginTop: 44, paddingTop: 22, borderTop: `1px solid ${A.border}`, display: 'flex', flexWrap: 'wrap', gap: 8, alignItems: 'center' }}>
            <span style={{ fontSize: 13, color: A.faint, fontWeight: 600, fontFamily: A.mono }}>© 2026 Stax · placeholder</span>
            <div style={{ flex: 1 }} />
            {tabs.map(([id, label]) => (
              <span key={id} onClick={() => { setDoc(id); window.scrollTo(0, 0); }} style={{ fontSize: 13.5, fontWeight: 700, color: doc === id ? A.primary : A.muted, cursor: 'pointer', padding: '4px 8px' }}>{label}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
window.ScreenLegal = ScreenLegal;

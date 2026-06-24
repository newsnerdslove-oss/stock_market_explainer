// Marketing / landing page — Warm Campus. Full-bleed.
function ScreenMarketing({ go, theme, setTheme }) {
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  const Section = ({ children, style }) => (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 28px', ...style }}>{children}</div>
  );

  return (
    <div style={{ background: A.page, color: A.ink, fontFamily: A.font, minHeight: '100%' }}>
      {/* nav */}
      <Section style={{ display: 'flex', alignItems: 'center', gap: 10, paddingTop: 22, paddingBottom: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: 1 }}>
          <div style={{ width: 38, height: 38, borderRadius: 12, background: A.primary, color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 20 }}>S</div>
          <span style={{ fontWeight: 800, fontSize: 20, letterSpacing: '-.02em' }}>Stax</span>
        </div>
        <span style={{ fontSize: 15, fontWeight: 700, color: A.muted, cursor: 'pointer' }} onClick={() => go('catalog')}>Curriculum</span>
        <span style={{ fontSize: 15, fontWeight: 700, color: A.muted, cursor: 'pointer', marginRight: 8 }}>Pricing</span>
        <Btn kind="ghost" size="sm" onClick={() => go('auth')}>Log in</Btn>
        <Btn kind="primary" size="sm" onClick={() => go('onboarding')}>Get started</Btn>
      </Section>

      {/* hero */}
      <Section style={{ display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 40, alignItems: 'center', padding: '54px 28px 40px' }}>
        <div>
          <Pill icon="sparkles" bg={A.amberSoft} fg={A.amberInk}>Learn investing the fun way</Pill>
          <h1 style={{ fontSize: 52, fontWeight: 800, letterSpacing: '-.03em', lineHeight: 1.04, margin: '18px 0 18px' }}>
            The stock market,<br />finally <span style={{ color: A.primary }}>click</span>s.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: A.muted, fontWeight: 500, margin: '0 0 28px', maxWidth: 460 }}>
            Five-minute lessons with real, interactive charts. Build a daily habit, practice with paper trades, and actually understand what moves prices.
          </p>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Btn kind="primary" size="lg" iconRight="arrow-right" onClick={() => go('onboarding')}>Start free</Btn>
            <Btn kind="ghost" size="lg" icon="play" onClick={() => go('lesson')}>See a lesson</Btn>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 26 }}>
            <div style={{ display: 'flex' }}>
              {[A.green, A.primary, A.amber, A.blue].map((c, i) => (
                <div key={i} style={{ width: 34, height: 34, borderRadius: '50%', background: c, border: '2px solid ' + A.page, marginLeft: i ? -10 : 0 }}></div>
              ))}
            </div>
            <div style={{ fontSize: 14, color: A.muted, fontWeight: 600 }}>
              <b style={{ color: A.ink }}>40,000+</b> learners · <span style={{ color: A.amber }}>★★★★★</span> 4.9
            </div>
          </div>
        </div>

        {/* hero visual */}
        <div style={{ position: 'relative' }}>
          <div style={{ background: A.card, border: `1px solid ${A.border}`, borderRadius: 24, padding: 22, boxShadow: A.shadowLg }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <div style={{ width: 36, height: 36, borderRadius: 11, background: A.primarySoft, color: A.primary, display: 'grid', placeItems: 'center' }}><Icon name="candlestick-chart" size={20} /></div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 15 }}>Reading candlesticks</div>
                <div style={{ fontSize: 12.5, color: A.muted, fontWeight: 600 }}>Lesson 5 · interactive</div>
              </div>
              <Pill size="sm" icon="zap" bg={A.primarySoft} fg={A.primaryDeep} >+40 XP</Pill>
            </div>
            <div style={{ background: A.page, borderRadius: 16, padding: 14, border: `1px solid ${A.borderSoft}` }}>
              <DSChart kind="PatternChart" candles={window.hammerCandles ? window.hammerCandles() : []} />
            </div>
          </div>
          <div style={{ position: 'absolute', bottom: -18, left: -18, background: A.card, borderRadius: 16, padding: '12px 16px', boxShadow: A.shadowLg, border: `1px solid ${A.border}`, display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: A.amberSoft, color: A.amber, display: 'grid', placeItems: 'center' }}><Icon name="flame" size={20} /></div>
            <div><div style={{ fontWeight: 800, fontSize: 15 }}>12-day streak</div><div style={{ fontSize: 12, color: A.muted, fontWeight: 600 }}>Keep it going!</div></div>
          </div>
        </div>
      </Section>

      {/* features */}
      <Section style={{ padding: '50px 28px' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-.02em', margin: '0 0 8px' }}>Built to make it stick</h2>
          <p style={{ fontSize: 16, color: A.muted, fontWeight: 600, margin: 0 }}>Small lessons, real charts, and a streak you won't want to break.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
          {[['candlestick-chart', A.primary, A.primarySoft, 'Real interactive charts', 'Tap candles, trace payoffs, and read live curves — not static screenshots.'],
            ['flame', A.amber, A.amberSoft, 'Daily streaks & XP', 'Tiny goals and a streak counter keep the habit going, five minutes a day.'],
            ['dumbbell', A.green, A.greenSoft, 'Practice that pays off', 'Pattern trainers and paper trades let you apply each lesson immediately.']].map(([ic, c, bg, t, d], i) => (
            <Card key={i} pad={24} hover>
              <div style={{ width: 50, height: 50, borderRadius: 15, background: bg, color: c, display: 'grid', placeItems: 'center', marginBottom: 16 }}><Icon name={ic} size={24} /></div>
              <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 7 }}>{t}</div>
              <div style={{ fontSize: 14.5, lineHeight: 1.55, color: A.muted, fontWeight: 500 }}>{d}</div>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section style={{ padding: '20px 28px 70px' }}>
        <div style={{ background: `linear-gradient(120deg, ${A.gradA}, ${A.gradB})`, borderRadius: 28, padding: '46px 40px',
          textAlign: 'center', color: '#fff', boxShadow: `0 18px 44px ${A.heroShadow}` }}>
          <h2 style={{ fontSize: 34, fontWeight: 800, letterSpacing: '-.02em', margin: '0 0 10px' }}>Your first lesson is free</h2>
          <p style={{ fontSize: 17, opacity: .92, fontWeight: 500, margin: '0 0 24px' }}>No card, no jargon. Just five minutes to your first chart.</p>
          <Btn kind="white" size="lg" iconRight="arrow-right" onClick={() => go('onboarding')}>Get started</Btn>
        </div>
      </Section>
    </div>
  );
}
window.ScreenMarketing = ScreenMarketing;

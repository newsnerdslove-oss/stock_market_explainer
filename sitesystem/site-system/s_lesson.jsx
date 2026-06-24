// Lesson / explainer screen — Warm Campus.
function ScreenLesson({ go, theme, setTheme }) {
  const steps = ['Intro', 'Anatomy', 'Read it', 'Quiz'];
  const [step, setStep] = React.useState(1);
  const pct = Math.round(((step + 1) / steps.length) * 100);
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });

  return (
    <AppShell tab="dashboard" go={go} maxWidth={1080} theme={theme} setTheme={setTheme}>
      {/* breadcrumb + progress */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
        <span onClick={() => go('catalog')} style={{ fontSize: 13, color: A.muted, fontWeight: 700, cursor: 'pointer' }}>Unit 2 · Chart patterns</span>
        <Icon name="chevron-right" size={15} color={A.faint} />
        <span style={{ fontSize: 13, color: A.ink, fontWeight: 800 }}>Reading candlesticks</span>
        <div style={{ flex: 1 }} />
        <Pill icon="zap" bg={A.primarySoft} fg={A.primaryDeep}>+40 XP</Pill>
      </div>

      {/* step rail */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
        {steps.map((s, i) => (
          <div key={i} onClick={() => setStep(i)} style={{ flex: 1, cursor: 'pointer' }}>
            <div style={{ height: 6, borderRadius: 999, background: i <= step ? A.primary : A.barTrack, marginBottom: 7 }}></div>
            <div style={{ fontSize: 12, fontWeight: 700, color: i <= step ? A.primaryDeep : A.faint }}>{s}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 26, alignItems: 'center',
        background: A.card, border: `1px solid ${A.border}`, borderRadius: A.radius, padding: 30, boxShadow: A.shadow }}>
        <div>
          <Badge tone="primary">Lesson 5 of 7</Badge>
          <h1 style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-.02em', margin: '14px 0 12px', lineHeight: 1.12 }}>
            Every candle tells a story
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: A.muted, fontWeight: 500, margin: '0 0 16px' }}>
            A single candlestick packs four prices into one shape: where trading <b style={{ color: A.ink }}>opened</b>,
            where it <b style={{ color: A.ink }}>closed</b>, and the <b style={{ color: A.ink }}>high</b> and <b style={{ color: A.ink }}>low</b> it
            reached in between. The body shows open-to-close; the thin wicks show the extremes.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 22 }}>
            {[['square', A.green, 'Green body — closed higher than it opened (buyers won)'],
              ['square', A.red, 'Red body — closed lower than it opened (sellers won)'],
              ['minus', A.faint, 'Wicks — the highest and lowest prices touched']].map(([ic, c, t], i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, fontWeight: 600, color: A.ink }}>
                <span style={{ width: 22, height: 22, borderRadius: 7, background: c, display: 'grid', placeItems: 'center', flex: '0 0 auto' }}>
                  <Icon name={ic} size={13} color="#fff" strokeWidth={3} />
                </span>{t}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <Btn kind="ghost" icon="arrow-left" onClick={() => setStep(Math.max(0, step - 1))}>Back</Btn>
            <Btn kind="primary" iconRight="arrow-right" onClick={() => go('player')}>
              {step < 3 ? 'Start lesson' : 'Start quiz'}
            </Btn>
          </div>
        </div>

        <div style={{ background: A.page, borderRadius: 18, padding: 18, border: `1px solid ${A.borderSoft}` }}>
          <DSChart kind="CandleAnatomy" />
        </div>
      </div>

      {/* worked example */}
      <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: '320px 1fr', gap: 20, alignItems: 'center' }}>
        <Card>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <Icon name="lightbulb" size={18} color={A.amber} />
            <span style={{ fontWeight: 800, fontSize: 15 }}>Try to read it</span>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.55, color: A.muted, fontWeight: 500, margin: 0 }}>
            This is a <b style={{ color: A.ink }}>hammer</b> — a small body with a long lower wick after a downtrend.
            It hints buyers stepped in. You'll spot these in the next quiz.
          </p>
        </Card>
        <div style={{ background: A.card, border: `1px solid ${A.border}`, borderRadius: A.radius, padding: 18, boxShadow: A.shadow }}>
          <DSChart kind="PatternChart" candles={hammerCandles()} />
        </div>
      </div>
    </AppShell>
  );
}

function hammerCandles() {
  return [
    { open: 118, high: 120, low: 116, close: 117 },
    { open: 117, high: 118, low: 112, close: 113 },
    { open: 113, high: 114, low: 108, close: 109 },
    { open: 109, high: 110, low: 101, close: 108 },
    { open: 108, high: 113, low: 107, close: 112 },
    { open: 112, high: 117, low: 111, close: 116 },
  ];
}

window.ScreenLesson = ScreenLesson;
window.hammerCandles = hammerCandles;

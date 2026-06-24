// Daily hub — "Today" screen. NET-NEW feature (not in the repo yet — see REPO-NOTES).
// Chart of the day + question of the day + "what to test today" launcher.
function ScreenDaily({ go, theme, setTheme }) {
  const [qPick, setQPick] = React.useState(null);
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });

  // Question of the day (quick multiple-choice with reveal).
  const QOTD = {
    q: 'A long lower wick after a downtrend usually signals…',
    correct: 1,
    options: ['Sellers are still firmly in control', 'Buyers stepped in to defend the low', 'The market is closed for the day'],
  };
  const answered = qPick !== null;

  const tests = [
    { icon: 'candlestick-chart', t: 'Candlestick patterns', s: '5 questions · 3 min', tint: [A.primarySoft, A.primary], to: 'quiz' },
    { icon: 'activity', t: 'Reading trends', s: '4 questions · 3 min', tint: [A.greenSoft, A.green], to: 'quiz' },
    { icon: 'git-branch', t: 'Options payoffs', s: '5 questions · 4 min', tint: [A.blueSoft, A.blue], to: 'lesson' },
    { icon: 'sprout', t: 'Market basics', s: '6 questions · 4 min', tint: [A.amberSoft, A.amberInk], to: 'lesson' },
  ];

  const dateStr = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

  return (
    <AppShell tab="daily" go={go} theme={theme} setTheme={setTheme}>
      {/* greeting */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 22 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <h1 style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-.02em', margin: 0 }}>Good morning, Maya</h1>
            <Badge tone="amber">Concept · needs build</Badge>
          </div>
          <p style={{ fontSize: 15, color: A.muted, fontWeight: 600, margin: 0 }}>{dateStr} · here's your daily warm-up</p>
        </div>
        <Pill icon="flame" bg={A.amberSoft} fg={A.amberInk}>12-day streak</Pill>
      </div>

      {/* chart of the day */}
      <div style={{ background: `linear-gradient(120deg, ${A.gradA}, ${A.gradB})`, borderRadius: 26, padding: 26,
        color: '#fff', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 26, alignItems: 'center', boxShadow: `0 12px 30px ${A.heroShadow}`, marginBottom: 22 }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(255,255,255,.18)', padding: '5px 12px', borderRadius: 999, fontSize: 12.5, fontWeight: 800, marginBottom: 14 }}>
            <Icon name="sparkles" size={15} /> CHART OF THE DAY
          </div>
          <h2 style={{ fontSize: 27, fontWeight: 800, letterSpacing: '-.02em', margin: '0 0 8px' }}>Spot the hammer</h2>
          <p style={{ fontSize: 15, lineHeight: 1.55, opacity: .92, fontWeight: 500, margin: '0 0 20px' }}>
            One candle in today's chart marks a reversal. Find it to earn double XP and keep your streak alive.
          </p>
          <Btn kind="white" size="lg" iconRight="arrow-right" onClick={() => go('quiz')}>Take today's challenge</Btn>
        </div>
        <div style={{ background: 'rgba(255,255,255,.12)', borderRadius: 18, padding: 14 }}>
          <div style={{ background: theme === 'dark' ? A.card : '#fff', borderRadius: 12, padding: 10 }}>
            <DSChart kind="PatternChart" candles={window.hammerCandles ? window.hammerCandles() : []} />
          </div>
        </div>
      </div>

      {/* QOTD + streak */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 18, marginBottom: 26 }}>
        <Card>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 12 }}>
            <Icon name="help-circle" size={18} color={A.primary} />
            <span style={{ fontWeight: 800, fontSize: 15 }}>Question of the day</span>
          </div>
          <div style={{ fontSize: 17, fontWeight: 700, color: A.ink, marginBottom: 16, lineHeight: 1.35 }}>{QOTD.q}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {QOTD.options.map((o, i) => {
              const isCorrect = i === QOTD.correct;
              const show = answered && (isCorrect || i === qPick);
              const bg = !answered ? A.card : (isCorrect ? A.greenSoft : (i === qPick ? A.redSoft : A.card));
              const bd = !answered ? A.border : (show ? (isCorrect ? A.green : A.red) : A.border);
              return (
                <div key={i} onClick={() => !answered && setQPick(i)} style={{ display: 'flex', alignItems: 'center', gap: 12,
                  padding: '13px 16px', borderRadius: 13, cursor: answered ? 'default' : 'pointer',
                  border: `1.5px solid ${bd}`, background: bg, fontWeight: 700, fontSize: 14.5, color: A.ink }}>
                  <span style={{ width: 22, height: 22, borderRadius: '50%', flex: '0 0 auto', display: 'grid', placeItems: 'center',
                    border: `2px solid ${show ? (isCorrect ? A.green : A.red) : A.faint}`, color: '#fff',
                    background: show ? (isCorrect ? A.green : A.red) : 'transparent' }}>
                    {show && <Icon name={isCorrect ? 'check' : 'x'} size={13} strokeWidth={3} />}
                  </span>
                  {o}
                </div>
              );
            })}
          </div>
          {answered && (
            <div style={{ marginTop: 14, fontSize: 13.5, color: A.muted, fontWeight: 600 }}>
              {qPick === QOTD.correct ? '✅ Exactly — a long lower wick means buyers absorbed the selling. +10 XP' : 'A long lower wick shows buyers defended the low. Try the full trainer to practice more.'}
            </div>
          )}
        </Card>

        <Card style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 14 }}>Daily goal</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
            <Ring size={84} stroke={10} pct={0.5} color={A.amber} track={A.barTrack}>
              <div style={{ fontWeight: 800, fontSize: 20, color: A.ink }}>1<span style={{ color: A.faint, fontSize: 13 }}>/2</span></div>
            </Ring>
            <div style={{ fontSize: 13.5, color: A.muted, fontWeight: 600 }}>Finish the daily challenge and one lesson to hit today's goal.</div>
          </div>
          <div style={{ marginTop: 'auto' }}>
            <WeekDots today={4} on={A.amber} off={A.barTrack} txt={A.faint}
              days={[{ l: 'M', done: true }, { l: 'T', done: true }, { l: 'W', done: true }, { l: 'T', done: true }, { l: 'F', done: false }, { l: 'S', done: false }, { l: 'S', done: false }]} />
          </div>
        </Card>
      </div>

      {/* what to test today */}
      <SectionTitle>What do you want to test today?</SectionTitle>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {tests.map((t, i) => (
          <Card key={i} pad={20} onClick={() => go(t.to)} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ width: 48, height: 48, borderRadius: 14, background: t.tint[0], color: t.tint[1], display: 'grid', placeItems: 'center' }}>
              <Icon name={t.icon} size={24} />
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: 15.5, marginBottom: 3 }}>{t.t}</div>
              <div style={{ fontSize: 13, color: A.muted, fontWeight: 600 }}>{t.s}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: A.primary, fontWeight: 700, fontSize: 13.5, marginTop: 'auto' }}>
              Start <Icon name="arrow-right" size={15} />
            </div>
          </Card>
        ))}
      </div>
    </AppShell>
  );
}
window.ScreenDaily = ScreenDaily;

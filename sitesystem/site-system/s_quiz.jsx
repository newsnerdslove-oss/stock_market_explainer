// Quiz / practice trainer — Warm Campus. Multi-question session with scoring + results.
const QUESTIONS = [
  {
    prompt: 'Which candle is the hammer?',
    hint: 'Small body up top, long lower wick — buyers defended the low after a fall.',
    explain: 'A hammer has a short body and a long lower wick. It often signals a reversal after a downtrend.',
    correctIndex: 3,
    candles: [
      { open: 120, high: 121, low: 117, close: 118 },
      { open: 118, high: 119, low: 113, close: 114 },
      { open: 114, high: 115, low: 109, close: 110 },
      { open: 110, high: 111, low: 101, close: 109 },
      { open: 109, high: 114, low: 108, close: 113 },
      { open: 113, high: 118, low: 112, close: 117 },
    ],
  },
  {
    prompt: 'Which candle is the bullish engulfing?',
    hint: 'A green body that completely swallows the previous red body.',
    explain: 'Bullish engulfing: a green candle whose body fully covers the prior red one — buyers took control.',
    correctIndex: 4,
    candles: [
      { open: 112, high: 114, low: 110, close: 113 },
      { open: 113, high: 114, low: 109, close: 110 },
      { open: 110, high: 111, low: 106, close: 107 },
      { open: 107, high: 108, low: 104, close: 105 },
      { open: 104, high: 114, low: 103, close: 113 },
      { open: 113, high: 116, low: 112, close: 115 },
    ],
  },
  {
    prompt: 'Which candle is the doji?',
    hint: 'Open and close almost equal — a thin cross. Indecision.',
    explain: 'A doji opens and closes at nearly the same price, leaving a tiny body — buyers and sellers in balance.',
    correctIndex: 2,
    candles: [
      { open: 106, high: 108, low: 104, close: 107 },
      { open: 107, high: 110, low: 106, close: 109 },
      { open: 110, high: 114, low: 106, close: 110.3 },
      { open: 110, high: 112, low: 107, close: 108 },
      { open: 108, high: 110, low: 105, close: 106 },
      { open: 106, high: 109, low: 104, close: 108 },
    ],
  },
  {
    prompt: 'Where did sellers win by the most?',
    hint: 'The largest red body — the biggest open-to-close drop.',
    explain: 'The widest red body is the biggest decline from open to close — the strongest selling pressure.',
    correctIndex: 1,
    candles: [
      { open: 112, high: 114, low: 109, close: 110 },
      { open: 120, high: 121, low: 107, close: 108 },
      { open: 108, high: 110, low: 105, close: 106 },
      { open: 106, high: 109, low: 104, close: 108 },
      { open: 108, high: 112, low: 107, close: 111 },
      { open: 111, high: 113, low: 109, close: 110 },
    ],
  },
];

function ScreenQuiz({ go, theme, setTheme }) {
  const [idx, setIdx] = React.useState(0);
  const [picked, setPicked] = React.useState(null);
  const [score, setScore] = React.useState(0);
  const [done, setDone] = React.useState(false);
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });

  const total = QUESTIONS.length;
  const q = QUESTIONS[idx];
  const answered = picked !== null;
  const right = answered && picked === q.correctIndex;

  function pick(i) { if (answered) return; setPicked(i); if (i === q.correctIndex) setScore(s => s + 1); }
  function next() { if (idx + 1 < total) { setIdx(idx + 1); setPicked(null); } else { setDone(true); } }
  function restart() { setIdx(0); setPicked(null); setScore(0); setDone(false); }

  // ---- Results screen ----
  if (done) {
    const acc = Math.round((score / total) * 100);
    const xp = score * 20;
    const great = acc >= 75;
    return (
      <AppShell tab="quiz" go={go} maxWidth={680} theme={theme} setTheme={setTheme}>
        <Card pad={34} style={{ textAlign: 'center' }}>
          <div style={{ width: 76, height: 76, borderRadius: '50%', margin: '0 auto 18px', display: 'grid', placeItems: 'center',
            background: great ? A.greenSoft : A.amberSoft, color: great ? A.green : A.amberInk }}>
            <Icon name={great ? 'party-popper' : 'thumbs-up'} size={38} />
          </div>
          <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-.02em', margin: '0 0 6px' }}>
            {great ? 'Sharp eye!' : 'Nice practice!'}
          </h1>
          <p style={{ fontSize: 15.5, color: A.muted, fontWeight: 600, margin: '0 0 24px' }}>
            You got {score} of {total} patterns right.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 36, marginBottom: 28 }}>
            <Ring size={104} stroke={11} pct={score / total} color={great ? A.green : A.amber} track={A.barTrack}>
              <div><div style={{ fontWeight: 800, fontSize: 26, color: A.ink }}>{acc}<span style={{ fontSize: 13 }}>%</span></div>
                <div style={{ fontSize: 11, color: A.faint, fontWeight: 700 }}>ACCURACY</div></div>
            </Ring>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: A.primarySoft, color: A.primaryDeep, display: 'grid', placeItems: 'center' }}><Icon name="zap" size={20} /></div>
                <div style={{ textAlign: 'left' }}><div style={{ fontFamily: A.mono, fontWeight: 800, fontSize: 20 }}>+{xp}</div><div style={{ fontSize: 12, color: A.muted, fontWeight: 700 }}>XP earned</div></div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 40, height: 40, borderRadius: 12, background: A.amberSoft, color: A.amberInk, display: 'grid', placeItems: 'center' }}><Icon name="flame" size={20} /></div>
                <div style={{ textAlign: 'left' }}><div style={{ fontFamily: A.mono, fontWeight: 800, fontSize: 20 }}>13</div><div style={{ fontSize: 12, color: A.muted, fontWeight: 700 }}>day streak</div></div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <Btn kind="ghost" icon="rotate-ccw" onClick={restart}>Practice again</Btn>
            <Btn kind="primary" iconRight="arrow-right" onClick={() => go('dashboard')}>Back to learn</Btn>
          </div>
        </Card>
      </AppShell>
    );
  }

  // ---- Question screen ----
  const barPct = ((idx + (answered ? 1 : 0)) / total) * 100;
  return (
    <AppShell tab="quiz" go={go} maxWidth={960} theme={theme} setTheme={setTheme}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <Pill icon="dumbbell" bg={A.primarySoft} fg={A.primaryDeep}>Pattern trainer</Pill>
        <div style={{ flex: 1 }}><Bar pct={barPct} color={A.amber} track={A.barTrack} height={8} /></div>
        <span style={{ fontFamily: A.mono, fontSize: 13, fontWeight: 700, color: A.muted }}>{idx + 1} / {total}</span>
      </div>

      <div style={{ background: A.card, border: `1px solid ${A.border}`, borderRadius: A.radius, padding: 30, boxShadow: A.shadow }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
          <Icon name="help-circle" size={20} color={A.primary} />
          <span style={{ fontSize: 13, fontWeight: 800, color: A.primaryDeep, letterSpacing: '.03em', textTransform: 'uppercase' }}>Question {idx + 1}</span>
        </div>
        <h1 style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-.02em', margin: '0 0 4px' }}>{q.prompt}</h1>
        <p style={{ fontSize: 15, color: A.muted, fontWeight: 600, margin: '0 0 22px' }}>{q.hint}</p>

        <div style={{ background: A.page, borderRadius: 18, padding: 18, border: `1px solid ${A.borderSoft}` }}>
          <DSChart kind="PatternChart" candles={q.candles} picked={picked ?? undefined}
            correctIndex={answered ? q.correctIndex : undefined}
            onPick={answered ? undefined : pick} />
        </div>

        <div style={{ marginTop: 22, minHeight: 64 }}>
          {!answered && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, color: A.faint, fontSize: 14, fontWeight: 700 }}>
              <Icon name="mouse-pointer-click" size={18} /> Tap a candle to answer
            </div>
          )}
          {answered && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 20px', borderRadius: 16,
              background: right ? A.greenSoft : A.redSoft }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', flex: '0 0 auto', display: 'grid', placeItems: 'center',
                background: right ? A.green : A.red, color: '#fff' }}>
                <Icon name={right ? 'check' : 'x'} size={24} strokeWidth={3} />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800, fontSize: 16, color: right ? A.green : A.red }}>
                  {right ? 'Nailed it! +20 XP' : 'Not quite'}
                </div>
                <div style={{ fontSize: 14, color: A.ink, fontWeight: 600, marginTop: 2 }}>{q.explain}</div>
              </div>
              <Btn kind={right ? 'success' : 'primary'} iconRight="arrow-right" onClick={next}>
                {idx + 1 < total ? 'Next' : 'See results'}
              </Btn>
            </div>
          )}
        </div>
      </div>

      {/* live session tally */}
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 22 }}>
        {QUESTIONS.map((_, i) => {
          const state = i < idx ? 'past' : (i === idx ? 'now' : 'future');
          const c = state === 'now' ? A.primary : (state === 'past' ? A.green : A.barTrack);
          return <div key={i} style={{ width: state === 'now' ? 28 : 10, height: 10, borderRadius: 999, background: c, transition: 'all .2s ease' }}></div>;
        })}
      </div>
    </AppShell>
  );
}
window.ScreenQuiz = ScreenQuiz;

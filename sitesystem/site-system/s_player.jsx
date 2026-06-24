// Lesson player — the actual step-through (slides + inline checks).
// NET-NEW vs the lesson *intro* (s_lesson.jsx): this is the focused, full-bleed
// player a learner drops into when they hit "Continue". See REPO-NOTES.
function ScreenPlayer({ go, theme, setTheme }) {
  // --- Lesson script. Each step is one of: teach | choice | tap | done -------
  const STEPS = [
    {
      kind: 'teach',
      eyebrow: 'Anatomy',
      title: 'Every candle holds four prices',
      body: 'The body runs from the open to the close. The thin wicks reach up to the high and down to the low. One shape, four facts.',
      chart: { kind: 'CandleAnatomy' },
    },
    {
      kind: 'choice',
      eyebrow: 'Quick check',
      prompt: 'A green (hollow) body means the candle closed…',
      options: ['Lower than it opened', 'Higher than it opened', 'Exactly where it opened'],
      correct: 1,
      explain: 'Green = close above open. Buyers pushed the price up over the session.',
    },
    {
      kind: 'teach',
      eyebrow: 'Read it',
      title: 'A hammer hints at a reversal',
      body: 'After a slide, a small body with a long lower wick shows sellers pushed price down — then buyers slammed it back up. Momentum may be turning.',
      chart: { kind: 'PatternChart', props: { candles: window.hammerCandles ? window.hammerCandles() : [] } },
    },
    {
      kind: 'tap',
      eyebrow: 'Spot it',
      prompt: 'Tap the candle that looks like a hammer.',
      // index of the correct candle among the swatches below
      correct: 3,
      explain: 'That one — tiny body up top, long lower wick. Classic hammer.',
    },
    {
      kind: 'choice',
      eyebrow: 'Last one',
      prompt: 'You see a hammer at the bottom of a downtrend. The likely read is…',
      options: ['Sellers still in control', 'Buyers are stepping in', 'No signal at all'],
      correct: 1,
      explain: 'A hammer after a downtrend is a bullish reversal cue — buyers defended the low.',
    },
  ];

  const [i, setI] = React.useState(0);
  const [pick, setPick] = React.useState(null);   // selected option/candle index
  const [checked, setChecked] = React.useState(false);
  const [hearts, setHearts] = React.useState(3);
  const [correctCount, setCorrectCount] = React.useState(0);
  const [done, setDone] = React.useState(false);
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });

  const step = STEPS[i];
  const total = STEPS.length;
  const isQuestion = step && (step.kind === 'choice' || step.kind === 'tap');
  const isCorrect = isQuestion && pick === step.correct;

  const advance = () => {
    if (i + 1 >= total) { setDone(true); return; }
    setI(i + 1); setPick(null); setChecked(false);
  };
  const onCheck = () => {
    if (pick === null) return;
    setChecked(true);
    if (pick === step.correct) setCorrectCount(c => c + 1);
    else setHearts(h => Math.max(0, h - 1));
  };

  // --- Completion screen ----------------------------------------------------
  if (done) {
    const xp = correctCount * 12 + 16;
    const acc = Math.round((correctCount / STEPS.filter(s => s.kind !== 'teach').length) * 100);
    return (
      <PlayerFrame key="done" go={go} hearts={hearts} pct={100} hideProgress>
        <div style={{ maxWidth: 520, margin: '0 auto', textAlign: 'center', paddingTop: 24 }}>
          <div style={{ width: 96, height: 96, borderRadius: '50%', margin: '0 auto 22px',
            background: `linear-gradient(135deg, ${A.gradA}, ${A.gradB})`, display: 'grid', placeItems: 'center',
            boxShadow: `0 14px 34px ${A.heroShadow}` }}>
            <Icon name="check" size={48} color="#fff" strokeWidth={3} />
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-.02em', margin: '0 0 8px' }}>Lesson complete</h1>
          <p style={{ fontSize: 16, color: A.muted, fontWeight: 600, margin: '0 0 26px' }}>Reading candlesticks · Unit 2</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginBottom: 28 }}>
            {[['zap', A.primary, `+${xp}`, 'XP earned'], ['target', A.green, acc + '%', 'Accuracy'], ['heart', A.red, hearts, 'Hearts left']].map(([ic, c, v, l], k) => (
              <div key={k} style={{ background: A.card, border: `1px solid ${A.border}`, borderRadius: A.radius, padding: '18px 12px', boxShadow: A.shadow }}>
                <div style={{ color: c, marginBottom: 6 }}><Icon name={ic} size={22} /></div>
                <div style={{ fontSize: 26, fontWeight: 800, fontFamily: A.mono, color: A.ink }}>{v}</div>
                <div style={{ fontSize: 12.5, color: A.muted, fontWeight: 700 }}>{l}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <Btn kind="primary" size="lg" full iconRight="arrow-right" onClick={() => go('quiz')}>Practice what you learned</Btn>
            <Btn kind="ghost" full onClick={() => go('dashboard')}>Back to Learn</Btn>
          </div>
        </div>
      </PlayerFrame>
    );
  }

  // --- Active step ----------------------------------------------------------
  return (
    <PlayerFrame key={i + '|' + checked} go={go} hearts={hearts} pct={Math.round((i / total) * 100)}>
      <div style={{ maxWidth: 640, margin: '0 auto', display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 190px)' }}>
        <div style={{ flex: 1 }}>
          <Badge tone={isQuestion ? 'amber' : 'primary'}>{step.eyebrow}</Badge>

          {step.kind === 'teach' && (
            <React.Fragment>
              <h1 style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-.02em', margin: '16px 0 12px', lineHeight: 1.15 }}>{step.title}</h1>
              <p style={{ fontSize: 17, lineHeight: 1.6, color: A.muted, fontWeight: 500, margin: '0 0 22px' }}>{step.body}</p>
              <div style={{ background: A.card, border: `1px solid ${A.border}`, borderRadius: A.radius, padding: 22, boxShadow: A.shadow }}>
                <DSChart kind={step.chart.kind} {...(step.chart.props || {})} />
              </div>
            </React.Fragment>
          )}

          {step.kind === 'choice' && (
            <React.Fragment>
              <h1 style={{ fontSize: 25, fontWeight: 800, letterSpacing: '-.01em', margin: '16px 0 20px', lineHeight: 1.3 }}>{step.prompt}</h1>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {step.options.map((o, k) => {
                  const sel = pick === k;
                  const showRight = checked && k === step.correct;
                  const showWrong = checked && sel && k !== step.correct;
                  const bd = showRight ? A.green : showWrong ? A.red : sel ? A.primary : A.border;
                  const bg = showRight ? A.greenSoft : showWrong ? A.redSoft : sel ? A.primarySoft : A.card;
                  return (
                    <div key={k} onClick={() => !checked && setPick(k)} style={{ display: 'flex', alignItems: 'center', gap: 14,
                      padding: '16px 18px', borderRadius: 16, cursor: checked ? 'default' : 'pointer',
                      border: `1.5px solid ${bd}`, background: bg, fontWeight: 700, fontSize: 16, color: A.ink,
                      boxShadow: A.shadow, transition: 'border-color .12s ease, background .12s ease' }}>
                      <span style={{ width: 26, height: 26, borderRadius: 8, flex: '0 0 auto', display: 'grid', placeItems: 'center',
                        border: `2px solid ${showRight ? A.green : showWrong ? A.red : sel ? A.primary : A.faint}`,
                        background: showRight ? A.green : showWrong ? A.red : sel ? A.primary : 'transparent', color: '#fff', fontSize: 13, fontWeight: 800 }}>
                        {showRight ? <Icon name="check" size={15} strokeWidth={3} /> : showWrong ? <Icon name="x" size={15} strokeWidth={3} /> : String.fromCharCode(65 + k)}
                      </span>
                      {o}
                    </div>
                  );
                })}
              </div>
            </React.Fragment>
          )}

          {step.kind === 'tap' && (
            <React.Fragment>
              <h1 style={{ fontSize: 25, fontWeight: 800, letterSpacing: '-.01em', margin: '16px 0 20px', lineHeight: 1.3 }}>{step.prompt}</h1>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
                {CANDLE_SWATCHES.map((c, k) => {
                  const sel = pick === k;
                  const showRight = checked && k === step.correct;
                  const showWrong = checked && sel && k !== step.correct;
                  const bd = showRight ? A.green : showWrong ? A.red : sel ? A.primary : A.border;
                  return (
                    <div key={k} onClick={() => !checked && setPick(k)} style={{ aspectRatio: '3 / 4', borderRadius: 14, cursor: checked ? 'default' : 'pointer',
                      border: `2px solid ${bd}`, background: A.card, boxShadow: A.shadow, display: 'grid', placeItems: 'center', position: 'relative' }}>
                      <CandleGlyph spec={c} />
                      {showRight && <span style={badgeDot(A.green)}><Icon name="check" size={13} strokeWidth={3} /></span>}
                      {showWrong && <span style={badgeDot(A.red)}><Icon name="x" size={13} strokeWidth={3} /></span>}
                    </div>
                  );
                })}
              </div>
            </React.Fragment>
          )}

          {/* feedback banner */}
          {checked && (
            <div style={{ marginTop: 22, display: 'flex', gap: 12, alignItems: 'flex-start',
              background: isCorrect ? A.greenSoft : A.redSoft, border: `1px solid ${isCorrect ? A.green : A.red}`,
              borderRadius: 16, padding: '15px 18px' }}>
              <Icon name={isCorrect ? 'party-popper' : 'info'} size={20} color={isCorrect ? A.green : A.red} style={{ marginTop: 1 }} />
              <div>
                <div style={{ fontWeight: 800, fontSize: 15, color: isCorrect ? A.green : A.red, marginBottom: 2 }}>{isCorrect ? 'Nailed it' : 'Not quite'}</div>
                <div style={{ fontSize: 14, color: A.ink, fontWeight: 600, lineHeight: 1.5 }}>{step.explain}</div>
              </div>
            </div>
          )}
        </div>

        {/* footer action */}
        <div style={{ marginTop: 28, paddingTop: 18, borderTop: `1px solid ${A.borderSoft}`, display: 'flex', justifyContent: 'flex-end' }}>
          {step.kind === 'teach'
            ? <Btn kind="primary" size="lg" iconRight="arrow-right" onClick={advance}>Continue</Btn>
            : !checked
              ? <Btn kind={pick === null ? 'ghost' : 'primary'} size="lg" onClick={onCheck} style={pick === null ? { opacity: .55, cursor: 'not-allowed' } : {}}>Check</Btn>
              : <Btn kind={isCorrect ? 'success' : 'primary'} size="lg" iconRight="arrow-right" onClick={advance}>{i + 1 >= total ? 'Finish' : 'Continue'}</Btn>}
        </div>
      </div>
    </PlayerFrame>
  );
}

// Slim focused chrome for the player: exit, lesson progress, hearts.
function PlayerFrame({ go, hearts, pct, hideProgress, children }) {
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  return (
    <div style={{ background: A.page, color: A.ink, fontFamily: A.font, minHeight: '100vh' }}>
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '20px 24px 48px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 30 }}>
          <div onClick={() => go('lesson')} title="Exit lesson" style={{ cursor: 'pointer', color: A.faint, display: 'grid', placeItems: 'center', flex: '0 0 auto' }}>
            <Icon name="x" size={26} strokeWidth={2.5} />
          </div>
          <div style={{ flex: 1, visibility: hideProgress ? 'hidden' : 'visible' }}>
            <Bar pct={pct} color={A.green} track={A.barTrack} height={14} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, flex: '0 0 auto' }}>
            <Icon name="heart" size={22} color={A.red} style={{ fill: A.red }} />
            <span style={{ fontWeight: 800, fontSize: 18, fontFamily: A.mono, color: A.ink }}>{hearts}</span>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
}

const badgeDot = (c) => ({ position: 'absolute', top: 6, right: 6, width: 22, height: 22, borderRadius: '50%',
  background: c, color: '#fff', display: 'grid', placeItems: 'center' });

// Tiny inline candlestick glyphs for the "tap the hammer" exercise.
const CANDLE_SWATCHES = [
  { dir: 'up', bodyTop: 30, bodyH: 34, wickTop: 16, wickBot: 78 },   // long body
  { dir: 'down', bodyTop: 26, bodyH: 30, wickTop: 14, wickBot: 64 }, // down body
  { dir: 'up', bodyTop: 38, bodyH: 16, wickTop: 22, wickBot: 56 },   // doji-ish
  { dir: 'up', bodyTop: 22, bodyH: 14, wickTop: 16, wickBot: 86 },   // HAMMER (correct)
  { dir: 'down', bodyTop: 30, bodyH: 26, wickTop: 20, wickBot: 60 }, // down body
];
function CandleGlyph({ spec }) {
  const up = spec.dir === 'up';
  const col = up ? A.green : A.red;
  return (
    <svg viewBox="0 0 40 100" width="40" height="76" style={{ overflow: 'visible' }}>
      <line x1="20" y1={spec.wickTop} x2="20" y2={spec.wickBot} stroke={col} strokeWidth="3" strokeLinecap="round" />
      <rect x="10" y={spec.bodyTop} width="20" height={spec.bodyH} rx="3"
        fill={up ? 'none' : col} stroke={col} strokeWidth="3" />
    </svg>
  );
}

window.ScreenPlayer = ScreenPlayer;

// Onboarding flow — Warm Campus. Full-bleed, multi-step.
function ScreenOnboarding({ go }) {
  const [step, setStep] = React.useState(0);
  const [goal, setGoal] = React.useState(null);
  const [level, setLevel] = React.useState(null);
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });

  const total = 4;
  const next = () => step < total - 1 ? setStep(step + 1) : go('dashboard');

  const goals = [
    { id: 'understand', icon: 'book-open', t: 'Understand the market', s: 'Learn how stocks really work' },
    { id: 'invest', icon: 'trending-up', t: 'Start investing', s: 'Build confidence to buy my first stock' },
    { id: 'trade', icon: 'candlestick-chart', t: 'Read charts', s: 'Spot patterns and time entries' },
    { id: 'options', icon: 'git-branch', t: 'Learn options', s: 'Calls, puts and payoffs' },
  ];
  const levels = [
    { id: 'new', emoji: '🌱', t: 'Brand new', s: 'I\'m starting from zero' },
    { id: 'some', emoji: '📈', t: 'Some basics', s: 'I know a few terms' },
    { id: 'confident', emoji: '🚀', t: 'Pretty confident', s: 'Just want to sharpen up' },
  ];

  const Shell = ({ children, canNext }) => (
    <div style={{ width: 'min(560px, 92vw)' }}>
      {/* progress dots */}
      <div style={{ display: 'flex', gap: 7, justifyContent: 'center', marginBottom: 28 }}>
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} style={{ width: i === step ? 26 : 8, height: 8, borderRadius: 999,
            background: i <= step ? A.primary : A.barTrack, transition: 'all .25s ease' }}></div>
        ))}
      </div>
      <div style={{ background: A.card, border: `1px solid ${A.border}`, borderRadius: 26, padding: 36, boxShadow: A.shadowLg }}>
        {children}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
        <span onClick={() => step > 0 ? setStep(step - 1) : go('marketing')} style={{ fontSize: 14, color: A.muted, fontWeight: 700, cursor: 'pointer' }}>
          {step > 0 ? '← Back' : 'Cancel'}
        </span>
        <Btn kind="primary" size="lg" iconRight="arrow-right" onClick={next} style={{ opacity: canNext ? 1 : .45, pointerEvents: canNext ? 'auto' : 'none' }}>
          {step === total - 1 ? 'Start learning' : 'Continue'}
        </Btn>
      </div>
    </div>
  );

  const ChoiceCard = ({ active, onClick, children }) => (
    <div onClick={onClick} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px', cursor: 'pointer',
      borderRadius: 16, border: `2px solid ${active ? A.primary : A.border}`, background: active ? A.primarySoft : A.card,
      transition: 'all .15s ease' }}>{children}</div>
  );

  let body, canNext;
  if (step === 0) {
    canNext = true;
    body = (
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: 64, height: 64, borderRadius: 20, background: A.primary, color: '#fff', margin: '0 auto 20px',
          display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 34, boxShadow: '0 10px 24px rgba(46,123,230,.35)' }}>S</div>
        <h1 style={{ fontSize: 28, fontWeight: 800, letterSpacing: '-.02em', margin: '0 0 10px' }}>Welcome to Stax</h1>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: A.muted, fontWeight: 500, margin: '0 auto', maxWidth: 380 }}>
          Learn the stock market in five-minute lessons — real charts, no jargon, a little every day.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 28, marginTop: 26 }}>
          {[['book-open', '25 lessons'], ['candlestick-chart', 'Live charts'], ['flame', 'Daily streaks']].map(([ic, t], i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ width: 44, height: 44, borderRadius: 14, background: A.primarySoft, color: A.primary, margin: '0 auto 7px', display: 'grid', placeItems: 'center' }}><Icon name={ic} size={20} /></div>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: A.muted }}>{t}</div>
            </div>
          ))}
        </div>
      </div>
    );
  } else if (step === 1) {
    canNext = !!goal;
    body = (
      <div>
        <h2 style={{ fontSize: 23, fontWeight: 800, letterSpacing: '-.01em', margin: '0 0 6px' }}>What brings you here?</h2>
        <p style={{ fontSize: 15, color: A.muted, fontWeight: 600, margin: '0 0 22px' }}>We'll tailor your path. Pick one.</p>
        <div style={{ display: 'grid', gap: 12 }}>
          {goals.map(g => (
            <ChoiceCard key={g.id} active={goal === g.id} onClick={() => setGoal(g.id)}>
              <div style={{ width: 44, height: 44, borderRadius: 13, background: goal === g.id ? A.primary : A.primarySoft, color: goal === g.id ? '#fff' : A.primary, display: 'grid', placeItems: 'center', flex: '0 0 auto' }}><Icon name={g.icon} size={22} /></div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800, fontSize: 16 }}>{g.t}</div>
                <div style={{ fontSize: 13.5, color: A.muted, fontWeight: 600 }}>{g.s}</div>
              </div>
              {goal === g.id && <Icon name="check-circle-2" size={22} color={A.primary} />}
            </ChoiceCard>
          ))}
        </div>
      </div>
    );
  } else if (step === 2) {
    canNext = !!level;
    body = (
      <div>
        <h2 style={{ fontSize: 23, fontWeight: 800, letterSpacing: '-.01em', margin: '0 0 6px' }}>How much do you know?</h2>
        <p style={{ fontSize: 15, color: A.muted, fontWeight: 600, margin: '0 0 22px' }}>No wrong answer — it sets your starting point.</p>
        <div style={{ display: 'grid', gap: 12 }}>
          {levels.map(l => (
            <ChoiceCard key={l.id} active={level === l.id} onClick={() => setLevel(l.id)}>
              <div style={{ fontSize: 28, flex: '0 0 auto' }}>{l.emoji}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 800, fontSize: 16 }}>{l.t}</div>
                <div style={{ fontSize: 13.5, color: A.muted, fontWeight: 600 }}>{l.s}</div>
              </div>
              {level === l.id && <Icon name="check-circle-2" size={22} color={A.primary} />}
            </ChoiceCard>
          ))}
        </div>
      </div>
    );
  } else {
    canNext = true;
    body = (
      <div style={{ textAlign: 'center' }}>
        <div style={{ width: 72, height: 72, borderRadius: '50%', background: A.greenSoft, color: A.green, margin: '0 auto 20px', display: 'grid', placeItems: 'center' }}>
          <Icon name="check" size={38} strokeWidth={3} />
        </div>
        <h2 style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-.01em', margin: '0 0 10px' }}>You're all set, Maya</h2>
        <p style={{ fontSize: 16, lineHeight: 1.6, color: A.muted, fontWeight: 500, margin: '0 auto 22px', maxWidth: 360 }}>
          We built a path just for you. First up: <b style={{ color: A.ink }}>Market basics</b> — a 5-minute lesson to get the ball rolling.
        </p>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: A.page, borderRadius: 14, padding: '12px 18px', border: `1px solid ${A.border}` }}>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: A.greenSoft, color: A.green, display: 'grid', placeItems: 'center' }}><Icon name="sprout" size={20} /></div>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontWeight: 800, fontSize: 15 }}>Unit 1 · Market basics</div>
            <div style={{ fontSize: 13, color: A.muted, fontWeight: 600 }}>5 lessons · ~22 min</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100%', background: A.page, color: A.ink, fontFamily: A.font,
      display: 'grid', placeItems: 'center', padding: '48px 20px' }}>
      <Shell canNext={canNext}>{body}</Shell>
    </div>
  );
}
window.ScreenOnboarding = ScreenOnboarding;

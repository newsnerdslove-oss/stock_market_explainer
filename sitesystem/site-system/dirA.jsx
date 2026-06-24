// Direction A — "Warm Campus": light, friendly, rounded. Plus Jakarta Sans.
const A = {
  page: '#FBF7F0', card: '#FFFFFF', ink: '#232026', muted: '#837C88', faint: '#ABA4B0',
  primary: '#2E7BE6', primarySoft: '#E7F1FD', green: '#1FA968', greenSoft: '#E5F5EE',
  amber: '#F5A623', amberSoft: '#FDF0DC', red: '#F0594C', border: '#EFE7DA',
  radius: 22, shadow: '0 6px 22px rgba(80,60,30,.07)', font: "'Plus Jakarta Sans', sans-serif",
};

function ApillA({ icon, children, bg, fg }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: bg, color: fg,
      padding: '6px 12px', borderRadius: 999, fontSize: 13, fontWeight: 700 }}>
      {icon && <Icon name={icon} size={15} />}{children}
    </span>
  );
}

function AnavA({ label, icon, active }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '9px 14px', borderRadius: 12,
      background: active ? A.primarySoft : 'transparent', color: active ? A.primary : A.muted,
      fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>
      <Icon name={icon} size={18} />{label}
    </div>
  );
}

function AlessonA({ title, sub, icon, tint, pct, state }) {
  const done = state === 'done', locked = state === 'locked';
  return (
    <div style={{ background: A.card, border: `1px solid ${A.border}`, borderRadius: A.radius, padding: 18,
      boxShadow: A.shadow, opacity: locked ? 0.6 : 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 46, height: 46, borderRadius: 14, background: tint.bg, color: tint.fg,
          display: 'grid', placeItems: 'center', flex: '0 0 auto' }}>
          <Icon name={locked ? 'lock' : icon} size={22} />
        </div>
        <div style={{ minWidth: 0 }}>
          <div style={{ fontWeight: 800, fontSize: 16, color: A.ink }}>{title}</div>
          <div style={{ fontSize: 13, color: A.muted, fontWeight: 600 }}>{sub}</div>
        </div>
      </div>
      {!locked && (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 700,
            color: done ? A.green : A.muted, marginBottom: 6 }}>
            <span>{done ? 'Completed' : 'In progress'}</span><span>{pct}%</span>
          </div>
          <Bar pct={pct} color={done ? A.green : A.primary} track="#F1ECE3" height={8} />
        </div>
      )}
      {locked && <div style={{ fontSize: 13, color: A.faint, fontWeight: 700 }}>Finish the unit to unlock</div>}
    </div>
  );
}

function DirectionA() {
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  return (
    <div style={{ background: A.page, color: A.ink, fontFamily: A.font, padding: 28, minHeight: '100%' }}>
      {/* nav */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 26 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginRight: 18 }}>
          <div style={{ width: 38, height: 38, borderRadius: 12, background: A.primary, color: '#fff',
            display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 20 }}>S</div>
          <span style={{ fontWeight: 800, fontSize: 20, letterSpacing: '-.02em' }}>Stax</span>
        </div>
        <AnavA label="Learn" icon="graduation-cap" active />
        <AnavA label="Practice" icon="dumbbell" />
        <AnavA label="Markets" icon="trending-up" />
        <div style={{ flex: 1 }} />
        <ApillA icon="flame" bg={A.amberSoft} fg={A.amber}>12</ApillA>
        <ApillA icon="zap" bg={A.primarySoft} fg={A.primary}>340 XP</ApillA>
        <Avatar name="Maya R" size={40} bg={A.green} ring={A.card} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 22 }}>
        {/* main */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          {/* hero */}
          <div style={{ background: `linear-gradient(120deg, ${A.primary}, #6BA6F5)`, borderRadius: 26,
            padding: 26, color: '#fff', display: 'flex', alignItems: 'center', gap: 22, boxShadow: '0 12px 30px rgba(46,123,230,.28)' }}>
            <Ring size={92} stroke={10} pct={0.6} color="#fff" track="rgba(255,255,255,.28)">
              <div style={{ fontWeight: 800, fontSize: 22 }}>60<span style={{ fontSize: 12 }}>%</span></div>
            </Ring>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700, opacity: .85, marginBottom: 4 }}>CONTINUE · UNIT 2 · CHART PATTERNS</div>
              <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-.02em', marginBottom: 4 }}>Reading candlesticks</div>
              <div style={{ fontSize: 14, opacity: .9, fontWeight: 600 }}>Nice work, Maya — you're 3 lessons from levelling up. 🔥</div>
            </div>
            <button style={{ background: '#fff', color: A.primary, border: 'none', borderRadius: 14,
              padding: '14px 22px', fontWeight: 800, fontSize: 16, fontFamily: A.font, cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 8 }}>
              Resume <Icon name="arrow-right" size={18} />
            </button>
          </div>

          {/* lessons */}
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 14 }}>
              <h2 style={{ margin: 0, fontSize: 19, fontWeight: 800 }}>Your path</h2>
              <span style={{ fontSize: 14, color: A.primary, fontWeight: 700, cursor: 'pointer' }}>See all units →</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <AlessonA title="Candlestick basics" sub="6 lessons" icon="bar-chart-3" pct={100} state="done"
                tint={{ bg: A.greenSoft, fg: A.green }} />
              <AlessonA title="Spotting reversals" sub="4 of 7 lessons" icon="activity" pct={57} state="active"
                tint={{ bg: A.primarySoft, fg: A.primary }} />
              <AlessonA title="Options payoffs" sub="5 lessons" icon="git-branch" pct={0} state="locked"
                tint={{ bg: '#F2EEE7', fg: A.faint }} />
              <AlessonA title="Build a portfolio" sub="8 lessons" icon="wallet" pct={0} state="locked"
                tint={{ bg: '#F2EEE7', fg: A.faint }} />
            </div>
          </div>
        </div>

        {/* right rail */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ background: A.card, border: `1px solid ${A.border}`, borderRadius: A.radius, padding: 20, boxShadow: A.shadow }}>
            <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 14 }}>Today's goal</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <Ring size={88} stroke={10} pct={0.75} color={A.green} track="#EEF3F0">
                <div><div style={{ fontWeight: 800, fontSize: 22, color: A.ink }}>3<span style={{ color: A.faint, fontSize: 14 }}>/4</span></div></div>
              </Ring>
              <div>
                <div style={{ fontWeight: 800, fontSize: 15 }}>Almost there!</div>
                <div style={{ fontSize: 13, color: A.muted, fontWeight: 600, marginTop: 2 }}>1 more lesson to hit today's goal and keep your streak.</div>
              </div>
            </div>
          </div>

          <div style={{ background: A.card, border: `1px solid ${A.border}`, borderRadius: A.radius, padding: 20, boxShadow: A.shadow }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <div style={{ fontWeight: 800, fontSize: 15 }}>This week</div>
              <ApillA icon="flame" bg={A.amberSoft} fg={A.amber}>12-day streak</ApillA>
            </div>
            <WeekDots today={4} on={A.amber} off="#F1ECE3" txt={A.faint}
              days={[{ l: 'M', done: true }, { l: 'T', done: true }, { l: 'W', done: true }, { l: 'T', done: true }, { l: 'F', done: false }, { l: 'S', done: false }, { l: 'S', done: false }]} />
          </div>

          <div style={{ background: A.card, border: `1px solid ${A.border}`, borderRadius: A.radius, padding: 20, boxShadow: A.shadow }}>
            <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 4 }}>Practice portfolio</div>
            <div style={{ fontSize: 13, color: A.muted, fontWeight: 600, marginBottom: 8 }}>Your paper trades, this month</div>
            <DSChart kind="EquityCurve" light equity={[100, 102, 101, 104, 103, 107, 111, 110, 114, 118]} />
          </div>
        </div>
      </div>
    </div>
  );
}
window.DirectionA = DirectionA;

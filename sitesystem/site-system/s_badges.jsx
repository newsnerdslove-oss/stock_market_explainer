// Achievements / badges — full grid, earned + locked + progress toward each.
// Feeds the streak/daily loop (see REPO-NOTES). Uses the shared AppShell.
function ScreenBadges({ go, theme, setTheme }) {
  const [cat, setCat] = React.useState('All');
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });

  // tier → swatch. earned badges use their tier color; locked render muted.
  const TIER = {
    bronze: { c: '#B0763C', bg: theme === 'dark' ? '#2E2316' : '#F6ECDD', label: 'Bronze' },
    silver: { c: '#8C93A1', bg: theme === 'dark' ? '#262A31' : '#EDEFF3', label: 'Silver' },
    gold:   { c: '#D9A327', bg: theme === 'dark' ? '#322811' : '#FBF1D6', label: 'Gold' },
  };

  const BADGES = [
    { cat: 'Streaks', tier: 'gold',   icon: 'flame',         t: 'On fire',       s: 'Hold a 12-day streak',         earned: true,  at: 'Earned Jun 22' },
    { cat: 'Mastery', tier: 'silver', icon: 'sprout',        t: 'First steps',   s: 'Finish your first unit',        earned: true,  at: 'Earned Apr 03' },
    { cat: 'Mastery', tier: 'silver', icon: 'target',        t: 'Sharp eye',     s: 'Hit 90% on a quiz',             earned: true,  at: 'Earned May 18' },
    { cat: 'Daily',   tier: 'bronze', icon: 'sparkles',      t: 'Early bird',    s: 'Complete 5 daily challenges',   earned: true,  at: 'Earned May 30' },
    { cat: 'Streaks', tier: 'gold',   icon: 'calendar-check', t: 'Unbreakable',  s: 'Reach a 30-day streak',         earned: false, prog: 12, goal: 30 },
    { cat: 'Mastery', tier: 'gold',   icon: 'git-branch',    t: 'Options pro',   s: 'Finish the options unit',       earned: false, prog: 2,  goal: 6 },
    { cat: 'Daily',   tier: 'silver', icon: 'help-circle',   t: 'Quiz whiz',     s: 'Answer 50 questions of the day', earned: false, prog: 31, goal: 50 },
    { cat: 'Mastery', tier: 'bronze', icon: 'candlestick-chart', t: 'Chartist', s: 'Read 100 candles correctly',    earned: false, prog: 64, goal: 100 },
    { cat: 'Social',  tier: 'silver', icon: 'trophy',        t: 'Top of class', s: 'Finish #1 in a weekly league',  earned: false, prog: 0,  goal: 1 },
    { cat: 'Daily',   tier: 'gold',   icon: 'zap',           t: 'XP machine',    s: 'Earn 1,000 XP',                earned: false, prog: 340, goal: 1000 },
    { cat: 'Social',  tier: 'bronze', icon: 'users',         t: 'Study buddy',   s: 'Add your first friend',         earned: false, prog: 0,  goal: 1 },
    { cat: 'Streaks', tier: 'silver', icon: 'snowflake',     t: 'Cool save',     s: 'Use a streak freeze',           earned: false, prog: 0,  goal: 1 },
  ];

  const cats = ['All', 'Streaks', 'Mastery', 'Daily', 'Social'];
  const shown = BADGES.filter(b => cat === 'All' || b.cat === cat);
  const earnedN = BADGES.filter(b => b.earned).length;

  // "Closest to unlocking" — the most complete locked badge.
  const next = BADGES.filter(b => !b.earned && b.goal).sort((a, b) => (b.prog / b.goal) - (a.prog / a.goal))[0];
  const nextPct = next ? Math.round((next.prog / next.goal) * 100) : 0;

  return (
    <AppShell tab="dashboard" go={go} maxWidth={1080} theme={theme} setTheme={setTheme}>
      {/* header */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 22, flexWrap: 'wrap', gap: 16 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <h1 style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-.02em', margin: 0 }}>Achievements</h1>
            <Badge tone="amber">Concept · needs build</Badge>
          </div>
          <p style={{ fontSize: 15, color: A.muted, fontWeight: 600, margin: 0 }}>
            <b style={{ color: A.ink }}>{earnedN}</b> of {BADGES.length} earned · keep your streak alive to unlock more
          </p>
        </div>
        <Pill icon="trophy" bg={A.amberSoft} fg={A.amberInk}>{earnedN} badges</Pill>
      </div>

      {/* next-up spotlight */}
      {next && (
        <div style={{ background: `linear-gradient(120deg, ${A.gradA}, ${A.gradB})`, borderRadius: 24, padding: '22px 26px',
          color: '#fff', display: 'flex', alignItems: 'center', gap: 22, boxShadow: `0 12px 30px ${A.heroShadow}`, marginBottom: 26 }}>
          <Ring size={92} stroke={10} pct={next.prog / next.goal} color="#fff" track="rgba(255,255,255,.28)">
            <Icon name={next.icon} size={34} color="#fff" />
          </Ring>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12.5, fontWeight: 800, letterSpacing: '.08em', opacity: .85, marginBottom: 5 }}>CLOSEST TO UNLOCKING</div>
            <div style={{ fontSize: 23, fontWeight: 800, letterSpacing: '-.01em', marginBottom: 4 }}>{next.t}</div>
            <div style={{ fontSize: 14.5, fontWeight: 600, opacity: .92 }}>{next.s} — {next.prog} / {next.goal} ({nextPct}%)</div>
          </div>
          <Btn kind="white" iconRight="arrow-right" onClick={() => go('daily')}>Make progress</Btn>
        </div>
      )}

      {/* category filter */}
      <div style={{ display: 'flex', gap: 9, marginBottom: 20, flexWrap: 'wrap' }}>
        {cats.map(c => (
          <div key={c} onClick={() => setCat(c)} style={{ padding: '9px 16px', borderRadius: 999, cursor: 'pointer',
            fontWeight: 700, fontSize: 14, border: `1.5px solid ${cat === c ? A.primary : A.border}`,
            background: cat === c ? A.primarySoft : A.card, color: cat === c ? A.primaryDeep : A.muted }}>{c}</div>
        ))}
      </div>

      {/* grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {shown.map((b, i) => {
          const tier = TIER[b.tier];
          const pct = b.goal ? Math.round((b.prog / b.goal) * 100) : 0;
          return (
            <Card key={i} pad={20} style={{ display: 'flex', flexDirection: 'column', gap: 12, position: 'relative', opacity: b.earned ? 1 : 1 }}>
              <div style={{ position: 'absolute', top: 14, right: 14, fontSize: 10.5, fontWeight: 800, letterSpacing: '.05em',
                textTransform: 'uppercase', color: b.earned ? tier.c : A.faint }}>{tier.label}</div>
              <div style={{ width: 60, height: 60, borderRadius: '50%', display: 'grid', placeItems: 'center',
                background: b.earned ? tier.bg : A.sunk, color: b.earned ? tier.c : A.faint,
                border: b.earned ? `2px solid ${tier.c}` : `2px dashed ${A.border}` }}>
                <Icon name={b.earned ? b.icon : 'lock'} size={28} />
              </div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 16, color: A.ink, marginBottom: 2 }}>{b.t}</div>
                <div style={{ fontSize: 13, color: A.muted, fontWeight: 600, lineHeight: 1.4 }}>{b.s}</div>
              </div>
              <div style={{ marginTop: 'auto' }}>
                {b.earned ? (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12.5, fontWeight: 700, color: A.green }}>
                    <Icon name="check-circle-2" size={15} /> {b.at}
                  </div>
                ) : (
                  <React.Fragment>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 700, color: A.muted, marginBottom: 5 }}>
                      <span>{b.prog} / {b.goal}</span><span>{pct}%</span>
                    </div>
                    <Bar pct={pct} color={tier.c} track={A.barTrack} height={7} />
                  </React.Fragment>
                )}
              </div>
            </Card>
          );
        })}
      </div>
    </AppShell>
  );
}
window.ScreenBadges = ScreenBadges;

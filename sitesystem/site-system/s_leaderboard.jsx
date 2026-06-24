// Leaderboard — weekly XP league + friends ranking. Pairs with Today + streaks.
// Concept / net-new (see REPO-NOTES). Uses the shared AppShell.
function ScreenLeaderboard({ go, theme, setTheme }) {
  const [view, setView] = React.useState('League');
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });

  // Weekly league standings (you = Maya). Sorted by xp desc.
  const LEAGUE = [
    { name: 'Dev Patel',   xp: 920, you: false },
    { name: 'Aisha Khan',  xp: 815, you: false },
    { name: 'Liam Foster', xp: 690, you: false },
    { name: 'Sofia Lopez', xp: 612, you: false },
    { name: 'Maya Rivera', xp: 540, you: true },
    { name: 'Noah Kim',    xp: 505, you: false },
    { name: 'Ethan Walsh', xp: 470, you: false },
    { name: 'Grace Adeyemi', xp: 388, you: false },
    { name: 'Omar Said',   xp: 350, you: false },
    { name: 'Chloe Bennett', xp: 290, you: false },
    { name: 'Ravi Menon',  xp: 244, you: false },
    { name: 'Hana Sato',   xp: 180, you: false },
  ];
  const FRIENDS = [
    { name: 'Dev Patel',  xp: 920, you: false },
    { name: 'Maya Rivera', xp: 540, you: true },
    { name: 'Noah Kim',   xp: 505, you: false },
    { name: 'Hana Sato',  xp: 180, you: false },
  ];
  const rows = (view === 'League' ? LEAGUE : FRIENDS).slice().sort((a, b) => b.xp - a.xp);
  const PROMOTE = 3;   // top 3 advance
  const DEMOTE = rows.length - 2; // bottom 2 drop (league only)
  const myRank = rows.findIndex(r => r.you) + 1;

  const PODIUM = [['#D9A327', 1], ['#8C93A1', 2], ['#B0763C', 3]];
  const avatarBg = (n) => ['#1FA968', '#2E7BE6', '#E2683C', '#6C5CE7', '#0E9E96', '#F5A623'][n.length % 6];

  // podium order: 2nd, 1st, 3rd
  const top3 = rows.slice(0, 3);
  const podiumOrder = [top3[1], top3[0], top3[2]];

  return (
    <AppShell tab="daily" go={go} maxWidth={920} theme={theme} setTheme={setTheme}>
      {/* header */}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 22, flexWrap: 'wrap', gap: 16 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <h1 style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-.02em', margin: 0 }}>Leaderboard</h1>
            <Badge tone="amber">Concept · needs build</Badge>
          </div>
          <p style={{ fontSize: 15, color: A.muted, fontWeight: 600, margin: 0 }}>
            Sapphire League · you're <b style={{ color: A.ink }}>#{myRank}</b> this week
          </p>
        </div>
        <Pill icon="timer" bg={A.amberSoft} fg={A.amberInk}>Resets in 2d 14h</Pill>
      </div>

      {/* league band + podium */}
      <div style={{ background: `linear-gradient(120deg, ${A.gradA}, ${A.gradB})`, borderRadius: 26, padding: '26px 26px 30px',
        color: '#fff', boxShadow: `0 12px 30px ${A.heroShadow}`, marginBottom: 22 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center', marginBottom: 6 }}>
          <Icon name="gem" size={20} color="#fff" />
          <span style={{ fontWeight: 800, fontSize: 17, letterSpacing: '.02em' }}>Sapphire League</span>
        </div>
        <div style={{ textAlign: 'center', fontSize: 13.5, fontWeight: 600, opacity: .85, marginBottom: 22 }}>Top 3 advance to Emerald</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, alignItems: 'end', maxWidth: 460, margin: '0 auto' }}>
          {podiumOrder.map((p, idx) => {
            if (!p) return <div key={idx} />;
            const place = idx === 0 ? 2 : idx === 1 ? 1 : 3;
            const h = place === 1 ? 116 : place === 2 ? 88 : 70;
            const medal = ['#D9A327', '#E8E8EC', '#E0A36A'][place - 1];
            return (
              <div key={idx} style={{ textAlign: 'center' }}>
                <div style={{ position: 'relative', display: 'inline-block', marginBottom: 10 }}>
                  <Avatar name={p.name} size={place === 1 ? 60 : 50} bg={avatarBg(p.name)} ring="rgba(255,255,255,.9)" color="#fff" />
                  <span style={{ position: 'absolute', bottom: -4, right: -4, width: 24, height: 24, borderRadius: '50%',
                    background: medal, color: '#3A2D0A', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 12,
                    boxShadow: '0 2px 6px rgba(0,0,0,.25)' }}>{place}</span>
                </div>
                <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.name.split(' ')[0]}</div>
                <div style={{ fontFamily: A.mono, fontSize: 13, fontWeight: 700, opacity: .9, marginBottom: 10 }}>{p.xp} XP</div>
                <div style={{ height: h, borderRadius: '12px 12px 0 0', background: 'rgba(255,255,255,.18)',
                  display: 'grid', placeItems: 'start center', paddingTop: 10, fontWeight: 800, fontSize: 22, color: 'rgba(255,255,255,.9)' }}>{place}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* view toggle */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 16, background: A.sunk, padding: 5, borderRadius: 14, width: 'fit-content' }}>
        {['League', 'Friends'].map(v => (
          <div key={v} onClick={() => setView(v)} style={{ padding: '9px 22px', borderRadius: 10, cursor: 'pointer',
            fontWeight: 800, fontSize: 14.5, background: view === v ? A.card : 'transparent',
            color: view === v ? A.ink : A.muted, boxShadow: view === v ? A.shadow : 'none' }}>{v}</div>
        ))}
      </div>

      {/* full standings */}
      <Card pad={8}>
        {rows.map((r, i) => {
          const rank = i + 1;
          const promote = view === 'League' && rank <= PROMOTE;
          const demote = view === 'League' && rank >= DEMOTE;
          const isLastPromote = promote && rank === PROMOTE;
          const isFirstDemote = demote && rank === DEMOTE;
          return (
            <React.Fragment key={i}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 14px', borderRadius: 14,
                background: r.you ? A.primarySoft : 'transparent', border: r.you ? `1.5px solid ${A.primary}` : '1.5px solid transparent' }}>
                <div style={{ width: 30, textAlign: 'center', fontWeight: 800, fontSize: 16, fontFamily: A.mono,
                  color: promote ? A.green : demote ? A.red : A.muted, flex: '0 0 auto' }}>{rank}</div>
                <Avatar name={r.name} size={40} bg={avatarBg(r.name)} color="#fff" ring={r.you ? A.primary : undefined} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 800, fontSize: 15.5, color: A.ink }}>{r.name}{r.you && <span style={{ color: A.primaryDeep, fontWeight: 700 }}> · you</span>}</div>
                  {(promote || demote) && (
                    <div style={{ fontSize: 11.5, fontWeight: 700, color: promote ? A.green : A.red, display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Icon name={promote ? 'arrow-up' : 'arrow-down'} size={12} />{promote ? 'Promotion zone' : 'Demotion zone'}
                    </div>
                  )}
                </div>
                <div style={{ fontFamily: A.mono, fontWeight: 700, fontSize: 15, color: A.ink }}>{r.xp} <span style={{ color: A.faint, fontSize: 12 }}>XP</span></div>
              </div>
              {(isLastPromote || isFirstDemote) && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '4px 14px' }}>
                  <div style={{ flex: 1, height: 1, background: isLastPromote ? A.green : A.red, opacity: .35 }} />
                  <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '.05em', textTransform: 'uppercase', color: isLastPromote ? A.green : A.red }}>
                    {isLastPromote ? 'Advance line' : 'Drop line'}
                  </span>
                  <div style={{ flex: 1, height: 1, background: isLastPromote ? A.green : A.red, opacity: .35 }} />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </Card>
    </AppShell>
  );
}
window.ScreenLeaderboard = ScreenLeaderboard;

// Trading clubs, challenges & community — missions, weekly league, stock clubs,
// friend circles, discipline badges. Stubs for invite/create (see REPO-NOTES).
function ScreenClubs({ go, theme, setTheme }) {
  const t = useTrade();
  const [copied, setCopied] = React.useState(false);
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });
  if (!t) return null;

  const h = t.holdings();
  const orders = t.orders();
  const sectors = new Set(h.map(x => t.META[x.sym].sector));
  const journaled = Object.keys(t.theses()).length;
  const usedLimit = orders.some(o => o.type === 'limit' || o.type === 'stoplimit');

  const missions = [
    { icon: 'sliders-horizontal', t: 'Place a limit order', s: 'Control your entry price', xp: 30, prog: usedLimit ? 1 : 0, goal: 1 },
    { icon: 'layout-grid', t: 'Diversify across 4 sectors', s: 'Spread your risk', xp: 50, prog: sectors.size, goal: 4 },
    { icon: 'notebook-pen', t: 'Journal 3 trade theses', s: 'Write your reasoning', xp: 60, prog: journaled, goal: 3 },
    { icon: 'hand-coins', t: 'Hold through a 5% dip', s: 'Beat the urge to panic-sell', xp: 80, prog: 0, goal: 1 },
    { icon: 'repeat', t: 'Rebalance your book', s: 'Trim a winner, add to a laggard', xp: 40, prog: 0, goal: 1 },
  ];

  // Stock clubs the learner belongs to (one person → many clubs + friend circles).
  const clubs = [
    { name: 'Candlestick Club', emoji: '🕯️', members: 1204, rank: 18, ret: 14.2, color: A.primary, top: ['Dev Patel', 'Aisha Khan', 'Liam Foster'] },
    { name: 'ETF Long-Haulers', emoji: '🐢', members: 342, rank: 3, ret: 6.1, color: A.green, top: ['Grace A.', 'Maya Rivera', 'Omar Said'] },
    { name: 'Crypto Curious', emoji: '🪙', members: 890, rank: 51, ret: 22.5, color: A.amberInk, top: ['Noah Kim', 'Hana Sato', 'Ravi Menon'] },
    { name: "Maya's Study Group", emoji: '📚', members: 6, rank: 2, ret: 4.8, color: A.blue, top: ['Dev Patel', 'Maya Rivera', 'Chloe B.'], circle: true },
  ];
  const friends = [
    { n: 'Dev Patel', ret: 12.4, bg: '#1FA968' }, { n: 'Aisha Khan', ret: 8.1, bg: '#2E7BE6' },
    { n: 'Noah Kim', ret: -2.3, bg: '#E2683C' }, { n: 'Hana Sato', ret: 5.6, bg: '#6C5CE7' },
  ];
  const badges = [
    { ic: 'sliders-horizontal', t: 'Price Setter', s: 'First limit order', earned: usedLimit, c: A.primary },
    { ic: 'notebook-pen', t: 'The Journalist', s: 'Logged 3 theses', earned: journaled >= 3, c: A.green },
    { ic: 'layout-grid', t: 'Diversified', s: '4+ sectors held', earned: sectors.size >= 4, c: A.blue },
    { ic: 'anchor', t: 'Diamond Hands', s: 'Held through a dip', earned: false, c: A.amberInk },
    { ic: 'shield-check', t: 'Cool Head', s: 'A week, no overtrading', earned: false, c: A.green },
    { ic: 'trophy', t: 'Club Champion', s: 'Win a weekly club', earned: false, c: A.amber },
  ];

  const invite = () => { setCopied(true); setTimeout(() => setCopied(false), 2200); };
  const up = (v) => v >= 0 ? A.green : A.red;

  return (
    <AppShell tab="trade" go={go} maxWidth={1180} theme={theme} setTheme={setTheme}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 22 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <h1 style={{ fontSize: 30, fontWeight: 800, letterSpacing: '-.02em', margin: 0 }}>Clubs & challenges</h1>
            <Badge tone="amber">Concept · needs build</Badge>
          </div>
          <p style={{ fontSize: 15, color: A.muted, fontWeight: 600, margin: 0 }}>Practice together — compete on returns, learn from each other's trades.</p>
        </div>
        <Btn kind={copied ? 'success' : 'primary'} icon={copied ? 'check' : 'user-plus'} onClick={invite}>{copied ? 'Invite link copied' : 'Invite friends'}</Btn>
      </div>

      {/* weekly challenge banner */}
      <div style={{ background: `linear-gradient(120deg, ${A.gradA}, ${A.gradB})`, borderRadius: 26, padding: 26, color: '#fff',
        display: 'flex', alignItems: 'center', gap: 26, boxShadow: `0 12px 30px ${A.heroShadow}`, marginBottom: 26, flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: 240 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: 'rgba(255,255,255,.18)', padding: '5px 12px', borderRadius: 999, fontSize: 12.5, fontWeight: 800, marginBottom: 12 }}>
            <Icon name="trophy" size={15} /> WEEKLY CHALLENGE
          </div>
          <h2 style={{ fontSize: 25, fontWeight: 800, letterSpacing: '-.02em', margin: '0 0 6px' }}>Best return this week wins</h2>
          <p style={{ fontSize: 14.5, opacity: .92, fontWeight: 500, margin: 0 }}>Top 3 in your league advance. Returns are paper-only — play smart, not reckless.</p>
        </div>
        <div style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
          {[['#5', 'Your rank'], ['+3.1%', 'Your return'], ['2d 14h', 'Left']].map(([v, l], i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 26, fontWeight: 800, fontFamily: A.mono }}>{v}</div>
              <div style={{ fontSize: 12.5, fontWeight: 600, opacity: .85 }}>{l}</div>
            </div>
          ))}
          <Btn kind="white" iconRight="arrow-right" onClick={() => go('leaderboard')}>League</Btn>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 22, alignItems: 'start' }}>
        {/* left: clubs + friends */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <div>
            <SectionTitle>Your clubs</SectionTitle>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {clubs.map((c, i) => (
                <Card key={i} pad={20} hover style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 46, height: 46, borderRadius: 13, background: c.color + '22', display: 'grid', placeItems: 'center', fontSize: 24, flex: '0 0 auto' }}>{c.emoji}</div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 800, fontSize: 15.5, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.name}</div>
                      <div style={{ fontSize: 12.5, color: A.muted, fontWeight: 600 }}>{c.circle ? 'Friend circle' : c.members.toLocaleString() + ' members'}</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 18 }}>
                    <div><div style={{ fontSize: 11.5, color: A.muted, fontWeight: 700 }}>Your rank</div><div style={{ fontFamily: A.mono, fontWeight: 800, fontSize: 17 }}>#{c.rank}</div></div>
                    <div><div style={{ fontSize: 11.5, color: A.muted, fontWeight: 700 }}>Top return</div><div style={{ fontFamily: A.mono, fontWeight: 800, fontSize: 17, color: up(c.ret) }}>{pct(c.ret, 1)}</div></div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 'auto' }}>
                    <div style={{ display: 'flex' }}>
                      {c.top.map((n, k) => <div key={k} style={{ marginLeft: k ? -8 : 0 }}><Avatar name={n} size={26} bg={['#1FA968', '#2E7BE6', '#E2683C'][k % 3]} color="#fff" ring={A.card} /></div>)}
                    </div>
                    <span style={{ fontSize: 12.5, color: A.primary, fontWeight: 700, cursor: 'pointer', marginLeft: 'auto' }} onClick={() => go('leaderboard')}>Standings →</span>
                  </div>
                </Card>
              ))}
              {/* create */}
              <Card pad={20} onClick={invite} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10,
                border: `2px dashed ${A.border}`, background: 'transparent', boxShadow: 'none', minHeight: 150, textAlign: 'center' }}>
                <div style={{ width: 46, height: 46, borderRadius: 13, background: A.primarySoft, color: A.primary, display: 'grid', placeItems: 'center' }}><Icon name="plus" size={24} /></div>
                <div style={{ fontWeight: 800, fontSize: 15 }}>Create a club</div>
                <div style={{ fontSize: 12.5, color: A.muted, fontWeight: 600 }}>Start a private group and invite friends</div>
              </Card>
            </div>
          </div>

          {/* friend circle */}
          <div>
            <SectionTitle action="Find friends" onAction={invite}>Friends</SectionTitle>
            <Card pad={8}>
              {friends.map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 13, padding: '12px 14px', borderBottom: i < friends.length - 1 ? `1px solid ${A.borderSoft}` : 'none' }}>
                  <Avatar name={f.n} size={40} bg={f.bg} color="#fff" />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 800, fontSize: 14.5 }}>{f.n}</div>
                    <div style={{ fontSize: 12.5, color: A.muted, fontWeight: 600 }}>This week</div>
                  </div>
                  <span style={{ fontFamily: A.mono, fontWeight: 800, fontSize: 15, color: up(f.ret) }}>{pct(f.ret, 1)}</span>
                </div>
              ))}
            </Card>
          </div>
        </div>

        {/* right: missions + badges */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          <Card>
            <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 16 }}>Trading missions</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {missions.map((m, i) => {
                const done = m.prog >= m.goal;
                return (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 11, flex: '0 0 auto', display: 'grid', placeItems: 'center', background: done ? A.greenSoft : A.primarySoft, color: done ? A.green : A.primary }}>
                      <Icon name={done ? 'check' : m.icon} size={18} strokeWidth={done ? 3 : 2} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontWeight: 700, fontSize: 13.5 }}>{m.t}</div>
                      <div style={{ fontSize: 12, color: A.muted, fontWeight: 600, marginBottom: 5 }}>{m.s}</div>
                      <Bar pct={Math.min(100, (m.prog / m.goal) * 100)} color={done ? A.green : A.primary} track={A.barTrack} height={6} />
                    </div>
                    <Pill icon="zap" bg={A.primarySoft} fg={A.primaryDeep} size="sm">{m.xp}</Pill>
                  </div>
                );
              })}
            </div>
          </Card>

          <Card>
            <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 14 }}>Discipline badges</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14 }}>
              {badges.map((b, i) => (
                <div key={i} style={{ textAlign: 'center', opacity: b.earned ? 1 : .5 }}>
                  <div style={{ width: 50, height: 50, borderRadius: '50%', margin: '0 auto 7px', display: 'grid', placeItems: 'center',
                    background: b.earned ? b.c + '22' : A.sunk, color: b.earned ? b.c : A.faint, border: b.earned ? `2px solid ${b.c}` : `2px dashed ${A.border}` }}>
                    <Icon name={b.earned ? b.ic : 'lock'} size={22} />
                  </div>
                  <div style={{ fontWeight: 800, fontSize: 12.5 }}>{b.t}</div>
                  <div style={{ fontSize: 11, color: A.muted, fontWeight: 600, lineHeight: 1.3 }}>{b.s}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
window.ScreenClubs = ScreenClubs;

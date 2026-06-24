// Profile / settings screen — Warm Campus.
function ScreenProfile({ go, theme, setTheme }) {
  const [notif, setNotif] = React.useState(true);
  const [reminder, setReminder] = React.useState(true);
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });

  const badges = [
    { icon: 'flame', c: A.amber, bg: A.amberSoft, t: 'On fire', s: '12-day streak', earned: true },
    { icon: 'sprout', c: A.green, bg: A.greenSoft, t: 'First steps', s: 'Unit 1 done', earned: true },
    { icon: 'target', c: A.primary, bg: A.primarySoft, t: 'Sharp eye', s: '90% accuracy', earned: true },
    { icon: 'git-branch', c: A.faint, bg: A.sunk, t: 'Options pro', s: 'Finish unit 3', earned: false },
  ];

  return (
    <AppShell tab="dashboard" go={go} maxWidth={1000} theme={theme} setTheme={setTheme}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 22, alignItems: 'start' }}>
        {/* left */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          {/* profile header */}
          <Card pad={26} style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <Avatar name="Maya R" size={76} bg={A.green} ring={A.card} />
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <h1 style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-.02em', margin: 0 }}>Maya Rivera</h1>
                <Badge tone="primary">Level 6</Badge>
              </div>
              <div style={{ fontSize: 14, color: A.muted, fontWeight: 600, marginTop: 3 }}>Joined March 2026 · Learning to read charts</div>
              <div style={{ marginTop: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, fontWeight: 700, color: A.muted, marginBottom: 5 }}>
                  <span>340 / 500 XP to Level 7</span><span>68%</span>
                </div>
                <Bar pct={68} color={A.primary} track={A.barTrack} height={8} />
              </div>
            </div>
          </Card>

          {/* stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[['flame', A.amber, '12', 'Day streak'], ['book-open', A.green, '11', 'Lessons done'], ['zap', A.primary, '340', 'Total XP']].map(([ic, c, v, l], i) => (
              <Card key={i} pad={18} style={{ textAlign: 'center' }}>
                <div style={{ width: 44, height: 44, borderRadius: 13, background: A.page, color: c, display: 'grid', placeItems: 'center', margin: '0 auto 8px' }}><Icon name={ic} size={22} /></div>
                <div style={{ fontSize: 26, fontWeight: 800, fontFamily: A.mono }}>{v}</div>
                <div style={{ fontSize: 13, color: A.muted, fontWeight: 700 }}>{l}</div>
              </Card>
            ))}
          </div>

          {/* achievements */}
          <div>
            <SectionTitle>Achievements</SectionTitle>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
              {badges.map((b, i) => (
                <Card key={i} pad={16} style={{ textAlign: 'center', opacity: b.earned ? 1 : .5 }}>
                  <div style={{ width: 52, height: 52, borderRadius: '50%', background: b.bg, color: b.c, display: 'grid', placeItems: 'center', margin: '0 auto 10px' }}>
                    <Icon name={b.earned ? b.icon : 'lock'} size={24} />
                  </div>
                  <div style={{ fontWeight: 800, fontSize: 14 }}>{b.t}</div>
                  <div style={{ fontSize: 12, color: A.muted, fontWeight: 600 }}>{b.s}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* right: portfolio + settings */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <Card>
            <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 4 }}>Paper portfolio</div>
            <div style={{ fontSize: 13, color: A.muted, fontWeight: 600, marginBottom: 10 }}>Since you started</div>
            <DSChart kind="EquityCurve" equity={[100, 101, 103, 102, 106, 109, 108, 113, 117, 121]} />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12 }}>
              <span style={{ fontSize: 13, color: A.muted, fontWeight: 600 }}>Total return</span>
              <span style={{ fontFamily: A.mono, fontSize: 14, fontWeight: 700, color: A.green }}>+21.0%</span>
            </div>
          </Card>

          <Card pad={8}>
            {[['bell', 'Notifications', notif, setNotif], ['alarm-clock', 'Daily reminder', reminder, setReminder], ['moon', 'Dark theme', theme === 'dark', (v) => setTheme && setTheme(v ? 'dark' : 'light')]].map(([ic, label, val, set], i, arr) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '13px 14px',
                borderBottom: i < arr.length - 1 ? `1px solid ${A.borderSoft}` : 'none' }}>
                <Icon name={ic} size={19} color={A.muted} />
                <span style={{ flex: 1, fontWeight: 700, fontSize: 15 }}>{label}</span>
                <Toggle on={val} onClick={() => set(!val)} />
              </div>
            ))}
          </Card>

          <Btn kind="ghost" full icon="log-out" onClick={() => go('marketing')}>Log out</Btn>
        </div>
      </div>
    </AppShell>
  );
}
window.ScreenProfile = ScreenProfile;

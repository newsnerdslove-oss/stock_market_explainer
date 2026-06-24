// Dashboard / home screen — Warm Campus.
function ScreenDashboard({ go, theme, setTheme }) {
  return (
    <AppShell tab="dashboard" go={go} theme={theme} setTheme={setTheme}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 22, alignItems: 'start' }}>
        {/* main column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
          {/* hero */}
          <div style={{ background: `linear-gradient(120deg, ${A.gradA}, ${A.gradB})`, borderRadius: 26,
            padding: 26, color: '#fff', display: 'flex', alignItems: 'center', gap: 22, boxShadow: `0 12px 30px ${A.heroShadow}` }}>
            <Ring size={92} stroke={10} pct={0.6} color="#fff" track="rgba(255,255,255,.28)">
              <div style={{ fontWeight: 800, fontSize: 22 }}>60<span style={{ fontSize: 12 }}>%</span></div>
            </Ring>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 700, opacity: .85, marginBottom: 4 }}>CONTINUE · UNIT 2 · CHART PATTERNS</div>
              <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: '-.02em', marginBottom: 4 }}>Reading candlesticks</div>
              <div style={{ fontSize: 14, opacity: .9, fontWeight: 600 }}>Nice work, Maya — you're 3 lessons from levelling up. 🔥</div>
            </div>
            <Btn kind="white" size="lg" iconRight="arrow-right" onClick={() => go('lesson')}>Resume</Btn>
          </div>

          {/* path */}
          <div>
            <SectionTitle action="See all units →" onAction={() => go('catalog')}>Your path</SectionTitle>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <LessonCard title="Candlestick basics" sub="6 lessons" icon="bar-chart-3" pct={100} state="done"
                tint={{ bg: A.greenSoft, fg: A.green }} onClick={() => go('lesson')} />
              <LessonCard title="Spotting reversals" sub="4 of 7 lessons" icon="activity" pct={57} state="active"
                tint={{ bg: A.primarySoft, fg: A.primary }} onClick={() => go('lesson')} />
              <LessonCard title="Options payoffs" sub="5 lessons" icon="git-branch" pct={0} state="locked"
                tint={{ bg: A.sunk, fg: A.faint }} />
              <LessonCard title="Build a portfolio" sub="8 lessons" icon="wallet" pct={0} state="locked"
                tint={{ bg: A.sunk, fg: A.faint }} />
            </div>
          </div>
        </div>

        {/* right rail */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <Card>
            <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 14 }}>Today's goal</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              <Ring size={88} stroke={10} pct={0.75} color={A.green} track={A.barTrack}>
                <div style={{ fontWeight: 800, fontSize: 22, color: A.ink }}>3<span style={{ color: A.faint, fontSize: 14 }}>/4</span></div>
              </Ring>
              <div>
                <div style={{ fontWeight: 800, fontSize: 15 }}>Almost there!</div>
                <div style={{ fontSize: 13, color: A.muted, fontWeight: 600, marginTop: 2 }}>1 more lesson to hit today's goal and keep your streak.</div>
              </div>
            </div>
          </Card>

          <Card>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
              <div style={{ fontWeight: 800, fontSize: 15 }}>This week</div>
              <Pill icon="flame" bg={A.amberSoft} fg={A.amberInk}>12-day streak</Pill>
            </div>
            <WeekDots today={4} on={A.amber} off={A.barTrack} txt={A.faint}
              days={[{ l: 'M', done: true }, { l: 'T', done: true }, { l: 'W', done: true }, { l: 'T', done: true }, { l: 'F', done: false }, { l: 'S', done: false }, { l: 'S', done: false }]} />
          </Card>

          <Card>
            <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 4 }}>Practice portfolio</div>
            <div style={{ fontSize: 13, color: A.muted, fontWeight: 600, marginBottom: 10 }}>Your paper trades, this month</div>
            <DSChart kind="EquityCurve" equity={[100, 102, 101, 104, 103, 107, 111, 110, 114, 118]} />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12 }}>
              <span style={{ fontSize: 13, color: A.muted, fontWeight: 600 }}>Return</span>
              <span style={{ fontFamily: A.mono, fontSize: 14, fontWeight: 700, color: A.green }}>+18.0%</span>
            </div>
          </Card>
        </div>
      </div>
    </AppShell>
  );
}
window.ScreenDashboard = ScreenDashboard;

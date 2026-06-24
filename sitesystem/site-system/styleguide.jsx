// Stax Style Guide — documents foundations + components from aKit.jsx / shared.jsx.
const SG = {
  // labeled-specimen helpers
};

function Swatch({ name, value }) {
  const dark = (window.__theme === 'dark');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ height: 60, borderRadius: 12, background: value, border: `1px solid ${A.border}` }}></div>
      <div>
        <div style={{ fontWeight: 700, fontSize: 13, color: A.ink }}>{name}</div>
        <div style={{ fontFamily: A.mono, fontSize: 12, color: A.faint }}>{value}</div>
      </div>
    </div>
  );
}

function Block({ id, title, desc, children }) {
  return (
    <section id={id} style={{ marginBottom: 56, scrollMarginTop: 24 }}>
      <h2 style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-.02em', margin: '0 0 4px', color: A.ink }}>{title}</h2>
      {desc && <p style={{ fontSize: 14.5, color: A.muted, fontWeight: 500, margin: '0 0 20px', maxWidth: 620, lineHeight: 1.55 }}>{desc}</p>}
      {children}
    </section>
  );
}

function Specimen({ label, children, col }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: col ? 'stretch' : 'flex-start' }}>
      <div style={{ fontFamily: A.mono, fontSize: 11.5, color: A.faint, textTransform: 'uppercase', letterSpacing: '.04em' }}>{label}</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>{children}</div>
    </div>
  );
}

function Panel({ children, style }) {
  return <div style={{ background: A.card, border: `1px solid ${A.border}`, borderRadius: 18, padding: 24, boxShadow: A.shadow, ...style }}>{children}</div>;
}

function StyleGuide({ theme, setTheme }) {
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });

  const nav = [
    ['Foundations', [['color', 'Color'], ['type', 'Typography'], ['shape', 'Radius & elevation']]],
    ['Components', [['buttons', 'Buttons'], ['tags', 'Pills & badges'], ['cards', 'Cards'], ['lessons', 'Lesson cards'], ['forms', 'Forms'], ['progress', 'Progress & stats'], ['charts', 'Charts']]],
  ];

  const colorGroups = [
    ['Surfaces', [['page', A.page], ['card', A.card], ['border', A.border], ['sunk', A.sunk]]],
    ['Text', [['ink', A.ink], ['muted', A.muted], ['faint', A.faint]]],
    ['Brand', [['primary', A.primary], ['primaryDeep', A.primaryDeep], ['primarySoft', A.primarySoft]]],
    ['Semantic', [['green', A.green], ['amber', A.amber], ['red', A.red], ['blue', A.blue]]],
  ];

  const days = [{ l: 'M', done: true }, { l: 'T', done: true }, { l: 'W', done: true }, { l: 'T', done: true }, { l: 'F', done: false }, { l: 'S', done: false }, { l: 'S', done: false }];

  return (
    <div style={{ background: A.page, color: A.ink, fontFamily: A.font, minHeight: '100%' }}>
      {/* top bar */}
      <div style={{ position: 'sticky', top: 0, zIndex: 10, background: A.page, borderBottom: `1px solid ${A.border}`,
        display: 'flex', alignItems: 'center', gap: 12, padding: '16px 32px' }}>
        <div style={{ width: 34, height: 34, borderRadius: 11, background: A.primary, color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 18 }}>S</div>
        <div style={{ fontWeight: 800, fontSize: 18, letterSpacing: '-.02em' }}>Stax — Style Guide</div>
        <span style={{ fontFamily: A.mono, fontSize: 12, color: A.faint, marginLeft: 4 }}>Warm Campus · v1</span>
        <div style={{ flex: 1 }} />
        <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} style={{ width: 40, height: 40, borderRadius: 12,
          border: `1px solid ${A.border}`, cursor: 'pointer', display: 'grid', placeItems: 'center', color: A.muted, background: A.card }}>
          <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={19} />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '210px 1fr', gap: 40, maxWidth: 1140, margin: '0 auto', padding: '32px 32px 90px' }}>
        {/* sidebar */}
        <nav style={{ position: 'sticky', top: 90, alignSelf: 'start', display: 'flex', flexDirection: 'column', gap: 18 }}>
          {nav.map(([group, items]) => (
            <div key={group}>
              <div style={{ fontFamily: A.mono, fontSize: 11, color: A.faint, textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 8 }}>{group}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {items.map(([id, label]) => (
                  <a key={id} href={`#${id}`} style={{ fontSize: 14, fontWeight: 600, color: A.muted, textDecoration: 'none', padding: '6px 10px', borderRadius: 9 }}>{label}</a>
                ))}
              </div>
            </div>
          ))}
        </nav>

        {/* content */}
        <main>
          <Block id="color" title="Color" desc="The full token set, shown live for the current theme. Toggle dark mode (top-right) to see both. Brand color is themeable via the Tweaks panel in the app.">
            {colorGroups.map(([g, sw]) => (
              <div key={g} style={{ marginBottom: 22 }}>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 12 }}>{g}</div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
                  {sw.map(([n, v]) => <Swatch key={n} name={n} value={v} />)}
                </div>
              </div>
            ))}
          </Block>

          <Block id="type" title="Typography" desc="Plus Jakarta Sans for everything, JetBrains Mono for numerics and labels. Weights run 500–800; headings use tight tracking.">
            <Panel>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                {[['Display / 32 · 800', 32, 800, '-.02em', 'Every candle tells a story'],
                  ['Heading / 22 · 800', 22, 800, '-.01em', 'Your path this week'],
                  ['Subhead / 16 · 800', 16, 800, '0', 'Reading candlesticks'],
                  ['Body / 15 · 500', 15, 500, '0', 'A single candlestick packs four prices into one shape.'],
                  ['Small / 13 · 600', 13, 600, '0', 'In progress · 57%']].map(([l, s, w, ls, t], i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 20, alignItems: 'baseline', borderTop: i ? `1px solid ${A.borderSoft}` : 'none', paddingTop: i ? 16 : 0 }}>
                    <div style={{ fontFamily: A.mono, fontSize: 11.5, color: A.faint }}>{l}</div>
                    <div style={{ fontSize: s, fontWeight: w, letterSpacing: ls, color: A.ink }}>{t}</div>
                  </div>
                ))}
                <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 20, alignItems: 'baseline', borderTop: `1px solid ${A.borderSoft}`, paddingTop: 16 }}>
                  <div style={{ fontFamily: A.mono, fontSize: 11.5, color: A.faint }}>Mono / numeric</div>
                  <div style={{ fontFamily: A.mono, fontSize: 22, fontWeight: 700, color: A.ink }}>+18.0%  ·  340 XP</div>
                </div>
              </div>
            </Panel>
          </Block>

          <Block id="shape" title="Radius & elevation" desc="A single 22px card radius (tweakable) and two shadow tiers keep surfaces calm and consistent.">
            <div style={{ display: 'flex', gap: 18, flexWrap: 'wrap' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: 150, height: 96, borderRadius: A.radius, background: A.card, border: `1px solid ${A.border}`, boxShadow: A.shadow }}></div>
                <div style={{ fontFamily: A.mono, fontSize: 12, color: A.faint, marginTop: 8 }}>radius {A.radius} · shadow</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: 150, height: 96, borderRadius: A.radius, background: A.card, border: `1px solid ${A.border}`, boxShadow: A.shadowLg }}></div>
                <div style={{ fontFamily: A.mono, fontSize: 12, color: A.faint, marginTop: 8 }}>radius {A.radius} · shadowLg</div>
              </div>
            </div>
          </Block>

          <Block id="buttons" title="Buttons" desc="Five intents and three sizes. Primary carries a soft brand glow; ghost is the quiet default.">
            <Panel>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
                <Specimen label="Intents">
                  <Btn kind="primary" icon="arrow-right">Primary</Btn>
                  <Btn kind="soft">Soft</Btn>
                  <Btn kind="ghost">Ghost</Btn>
                  <Btn kind="success" icon="check">Success</Btn>
                  <div style={{ background: A.primary, padding: 10, borderRadius: 12 }}><Btn kind="white">On color</Btn></div>
                </Specimen>
                <Specimen label="Sizes">
                  <Btn kind="primary" size="sm">Small</Btn>
                  <Btn kind="primary" size="md">Medium</Btn>
                  <Btn kind="primary" size="lg" iconRight="arrow-right">Large</Btn>
                </Specimen>
              </div>
            </Panel>
          </Block>

          <Block id="tags" title="Pills & badges" desc="Pills carry an icon + value (streaks, XP). Badges are compact status labels.">
            <Panel>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
                <Specimen label="Pills">
                  <Pill icon="flame" bg={A.amberSoft} fg={A.amberInk}>12-day streak</Pill>
                  <Pill icon="zap" bg={A.primarySoft} fg={A.primaryDeep}>340 XP</Pill>
                  <Pill icon="award" bg={A.greenSoft} fg={A.green}>1 of 4 complete</Pill>
                </Specimen>
                <Specimen label="Badges">
                  <Badge tone="primary">In progress</Badge>
                  <Badge tone="green">Done</Badge>
                  <Badge tone="amber">New</Badge>
                  <Badge tone="red">Locked</Badge>
                  <Badge tone="blue">Beta</Badge>
                  <Badge tone="neutral">Draft</Badge>
                </Specimen>
              </div>
            </Panel>
          </Block>

          <Block id="cards" title="Cards" desc="The base surface. Pass an onClick to make it interactive (lifts on hover).">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <Card>
                <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 6 }}>Static card</div>
                <div style={{ fontSize: 14, color: A.muted, fontWeight: 500 }}>Default surface for content blocks and rails.</div>
              </Card>
              <Card hover>
                <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 6 }}>Interactive card</div>
                <div style={{ fontSize: 14, color: A.muted, fontWeight: 500 }}>Hover me — lifts with the larger shadow.</div>
              </Card>
            </div>
          </Block>

          <Block id="lessons" title="Lesson cards" desc="Three states drive the whole learning path: completed, in-progress (with a bar), and locked.">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              <LessonCard title="Candlestick basics" sub="6 lessons" icon="bar-chart-3" pct={100} state="done" tint={{ bg: A.greenSoft, fg: A.green }} />
              <LessonCard title="Spotting reversals" sub="4 of 7 lessons" icon="activity" pct={57} state="active" tint={{ bg: A.primarySoft, fg: A.primary }} />
              <LessonCard title="Options payoffs" sub="5 lessons" icon="git-branch" pct={0} state="locked" tint={{ bg: A.sunk, fg: A.faint }} />
            </div>
          </Block>

          <Block id="forms" title="Forms" desc="Text fields (optionally with a leading icon) and the on/off toggle.">
            <Panel>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, alignItems: 'end' }}>
                <Field label="Email" placeholder="you@example.com" icon="mail" />
                <Field label="Display name" placeholder="Maya Rivera" />
                <Specimen label="Toggle"><Toggle on={true} /><Toggle on={false} /></Specimen>
              </div>
            </Panel>
          </Block>

          <Block id="progress" title="Progress & stats" desc="Rings, bars, the weekly streak strip, and avatars — the gamification vocabulary.">
            <Panel>
              <div style={{ display: 'flex', gap: 36, flexWrap: 'wrap', alignItems: 'center' }}>
                <Specimen label="Rings">
                  <Ring size={72} stroke={9} pct={0.6} color={A.primary} track={A.barTrack}><div style={{ fontWeight: 800, fontSize: 17, color: A.ink }}>60<span style={{ fontSize: 10 }}>%</span></div></Ring>
                  <Ring size={72} stroke={9} pct={0.75} color={A.green} track={A.barTrack}><div style={{ fontWeight: 800, fontSize: 17, color: A.ink }}>3<span style={{ color: A.faint, fontSize: 11 }}>/4</span></div></Ring>
                </Specimen>
                <Specimen label="Avatars"><Avatar name="Maya R" size={48} bg={A.green} /><Avatar name="Jon K" size={48} bg={A.primary} /></Specimen>
                <div style={{ minWidth: 220 }}>
                  <Specimen label="Streak strip" col><WeekDots days={days} today={4} on={A.amber} off={A.barTrack} txt={A.faint} /></Specimen>
                </div>
              </div>
              <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 460 }}>
                <Bar pct={100} color={A.green} track={A.barTrack} />
                <Bar pct={57} color={A.primary} track={A.barTrack} />
                <Bar pct={28} color={A.amber} track={A.barTrack} />
              </div>
            </Panel>
          </Block>

          <Block id="charts" title="Charts" desc="The synced chart components (window.StocksDS.*) — the heart of the system. They render light or dark to match the theme automatically.">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[['CandleAnatomy', 'Anatomy of a candle', {}],
                ['PatternChart', 'Pattern (hammer)', { candles: window.hammerCandles ? window.hammerCandles() : [] }],
                ['EquityCurve', 'Equity curve', { equity: [100, 102, 101, 104, 103, 107, 111, 110, 114, 118] }],
                ['PayoffDiagram', 'Payoff — long call', { title: 'Long call · strike 100 @ $5', legs: [{ instrument: 'call', side: 'long', strike: 100, premium: 5, qty: 1 }] }]].map(([kind, cap, props]) => (
                <Card key={kind}>
                  <div style={{ fontFamily: A.mono, fontSize: 12, color: A.faint, marginBottom: 12 }}>StocksDS.{kind}</div>
                  <div style={{ background: A.page, borderRadius: 14, padding: 14, border: `1px solid ${A.borderSoft}` }}>
                    <DSChart kind={kind} {...props} />
                  </div>
                  <div style={{ fontSize: 13.5, color: A.muted, fontWeight: 600, marginTop: 12 }}>{cap}</div>
                </Card>
              ))}
            </div>
          </Block>
        </main>
      </div>
    </div>
  );
}
window.StyleGuide = StyleGuide;

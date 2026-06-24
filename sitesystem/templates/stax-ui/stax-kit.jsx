// ─────────────────────────────────────────────────────────────────────────
// Stax UI Kit — the design system's reusable React primitives.
// Registers every component on window.StaxKit (and on window for convenience).
//
// This is the "Warm Campus" app kit: light/dark themed, rounded, friendly.
// Pure React + inline styles + lucide icons — no build step, no CSS classes.
//
// USAGE (plain HTML)
//   <script src="https://unpkg.com/lucide@0.460.0/dist/umd/lucide.min.js"></script>
//   <script type="text/babel" src="stax-kit.jsx"></script>
//   …then in your component:  const { Btn, Card, AppShell } = window.StaxKit;
//
// USAGE (Design Component)
//   <x-import component-from-global-scope="StaxKit.Card" from="./stax-kit.jsx" …>
//
// THEMING — call StaxKit.applyTheme('light'|'dark') to flip the live palette
// (StaxKit.A). Components read A.* at render time.
// ─────────────────────────────────────────────────────────────────────────
(function () {
  // NOTE: do not capture window.React here — the module may evaluate before the
  // page's React <script> finishes. Transpiled `React.createElement` / hooks
  // resolve the global `React` lazily at render time, by which point it exists.

  const cx = (...a) => a.filter(Boolean).join(' ');

  // ---- Theme ---------------------------------------------------------------
  const BASE = { radius: 22, font: "'Plus Jakarta Sans', sans-serif", mono: "'JetBrains Mono', monospace" };
  const LIGHT = {
    page: '#FBF7F0', card: '#FFFFFF', ink: '#232026', muted: '#837C88', faint: '#ABA4B0',
    primary: '#2E7BE6', primaryDeep: '#1F5DC0', primarySoft: '#E7F1FD',
    green: '#1FA968', greenSoft: '#E5F5EE', amber: '#F5A623', amberSoft: '#FDF0DC', amberInk: '#B9791A',
    red: '#F0594C', redSoft: '#FCE9E7', blue: '#3B82F6', blueSoft: '#E7F0FE',
    border: '#EFE7DA', borderSoft: '#F4EEE3', sunk: '#F2EEE7', barTrack: '#F1ECE3',
    gradA: '#2E7BE6', gradB: '#6BA6F5', heroShadow: 'rgba(46,123,230,.28)',
    shadow: '0 6px 22px rgba(80,60,30,.07)', shadowLg: '0 16px 44px rgba(80,60,30,.12)',
  };
  const DARK = {
    page: '#13151A', card: '#1C1F26', ink: '#F4F2EE', muted: '#9CA0A8', faint: '#6B707A',
    primary: '#5B9BF0', primaryDeep: '#9AC2F7', primarySoft: '#1E2A3D',
    green: '#34C27D', greenSoft: '#14302A', amber: '#F5B53D', amberSoft: '#322811', amberInk: '#F5B53D',
    red: '#F47065', redSoft: '#37201E', blue: '#5B9BF0', blueSoft: '#1E2A3D',
    border: '#2B3039', borderSoft: '#232730', sunk: '#23262E', barTrack: '#2A2E37',
    gradA: '#2456A0', gradB: '#3E7BD0', heroShadow: 'rgba(0,0,0,.45)',
    shadow: '0 6px 22px rgba(0,0,0,.4)', shadowLg: '0 16px 44px rgba(0,0,0,.55)',
  };
  const THEMES = { light: { ...BASE, ...LIGHT }, dark: { ...BASE, ...DARK } };
  const A = { ...THEMES.light };
  function applyTheme(name) {
    const tk = THEMES[name] || THEMES.light;
    Object.keys(A).forEach(k => delete A[k]);
    Object.assign(A, tk);
    window.__staxTheme = name;
    try { if (document.body) document.body.style.background = A.page; } catch (e) {}
  }

  // ---- Icons (lucide) ------------------------------------------------------
  let _iconTimer = null;
  function refreshIcons() {
    clearTimeout(_iconTimer);
    _iconTimer = setTimeout(() => { try { window.lucide && window.lucide.createIcons(); } catch (e) {} }, 30);
  }
  function Icon({ name, size = 18, color, strokeWidth = 2, style }) {
    React.useEffect(refreshIcons);
    return React.createElement('i', { 'data-lucide': name, 'data-sw': strokeWidth,
      style: { display: 'inline-flex', width: size, height: size, color, ...style } });
  }

  // ---- Ring / Bar / Avatar / WeekDots -------------------------------------
  function Ring({ size = 84, stroke = 9, pct = 0, color = '#000', track = 'rgba(0,0,0,.08)', children }) {
    const r = (size - stroke) / 2, c = 2 * Math.PI * r, off = c * (1 - Math.max(0, Math.min(1, pct)));
    return (
      <div style={{ position: 'relative', width: size, height: size, flex: '0 0 auto', display: 'grid', placeItems: 'center' }}>
        <svg width={size} height={size} style={{ position: 'absolute', inset: 0, transform: 'rotate(-90deg)' }}>
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={stroke} />
          <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={color} strokeWidth={stroke}
            strokeDasharray={c} strokeDashoffset={off} strokeLinecap="round" />
        </svg>
        <div style={{ position: 'relative', textAlign: 'center', lineHeight: 1 }}>{children}</div>
      </div>
    );
  }
  function Bar({ pct = 0, color = '#000', track = 'rgba(0,0,0,.08)', height = 10, radius = 999, glow }) {
    return (
      <div style={{ width: '100%', height, background: track, borderRadius: radius, overflow: 'hidden' }}>
        <div style={{ width: `${Math.max(0, Math.min(100, pct))}%`, height: '100%', background: color,
          borderRadius: radius, boxShadow: glow ? `0 0 12px ${color}` : 'none', transition: 'width .4s ease' }} />
      </div>
    );
  }
  function Avatar({ name = 'M', size = 36, bg = '#ddd', color = '#fff', ring }) {
    const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
    return (
      <div style={{ width: size, height: size, borderRadius: '50%', background: bg, color,
        display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: size * 0.38, flex: '0 0 auto',
        boxShadow: ring ? `0 0 0 2px ${ring}` : 'none' }}>{initials}</div>
    );
  }
  function WeekDots({ days = [], on = '#000', off = 'rgba(0,0,0,.1)', txt = '#999', today = -1 }) {
    return (
      <div style={{ display: 'flex', gap: 8, justifyContent: 'space-between' }}>
        {days.map((d, i) => (
          <div key={i} style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ fontSize: 11, color: txt, marginBottom: 6, fontWeight: 600 }}>{d.l}</div>
            <div style={{ width: 30, height: 30, margin: '0 auto', borderRadius: '50%', display: 'grid', placeItems: 'center',
              background: d.done ? on : off, color: d.done ? '#fff' : txt,
              outline: i === today ? `2px solid ${on}` : 'none', outlineOffset: 2 }}>
              {d.done ? <Icon name="check" size={15} strokeWidth={3} /> : <span style={{ fontSize: 12 }}>·</span>}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // ---- Buttons -------------------------------------------------------------
  function Btn({ children, kind = 'primary', size = 'md', icon, iconRight, full, onClick = () => {}, style }) {
    const pads = { sm: '8px 14px', md: '12px 20px', lg: '15px 26px' }[size];
    const fs = { sm: 14, md: 15, lg: 17 }[size];
    const kinds = {
      primary: { background: A.primary, color: '#fff', border: '1px solid transparent', boxShadow: '0 6px 16px rgba(46,123,230,.32)' },
      soft: { background: A.primarySoft, color: A.primaryDeep, border: '1px solid transparent' },
      ghost: { background: 'transparent', color: A.ink, border: `1px solid ${A.border}` },
      success: { background: A.green, color: '#fff', border: '1px solid transparent', boxShadow: '0 6px 16px rgba(31,169,104,.3)' },
      white: { background: '#fff', color: A.primaryDeep, border: '1px solid transparent', boxShadow: A.shadow },
    };
    return (
      <button onClick={onClick} style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
        padding: pads, borderRadius: 14, fontFamily: A.font, fontWeight: 800, fontSize: fs, cursor: 'pointer',
        width: full ? '100%' : 'auto', whiteSpace: 'nowrap', transition: 'transform .12s ease, filter .12s ease', ...kinds[kind], ...style }}
        onMouseDown={e => e.currentTarget.style.transform = 'scale(.97)'}
        onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
        {icon && <Icon name={icon} size={fs + 2} />}{children}{iconRight && <Icon name={iconRight} size={fs + 2} />}
      </button>
    );
  }

  // ---- Pills / badges ------------------------------------------------------
  function Pill({ icon, children, bg = A.primarySoft, fg = A.primaryDeep, size = 'md' }) {
    const p = size === 'sm' ? '4px 10px' : '6px 12px', fs = size === 'sm' ? 12 : 13;
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: bg, color: fg,
        padding: p, borderRadius: 999, fontSize: fs, fontWeight: 700, whiteSpace: 'nowrap' }}>
        {icon && <Icon name={icon} size={fs + 2} />}{children}
      </span>
    );
  }
  function Badge({ children, tone = 'primary' }) {
    const tones = { primary: [A.primarySoft, A.primaryDeep], green: [A.greenSoft, A.green], amber: [A.amberSoft, A.amberInk],
      red: [A.redSoft, A.red], blue: [A.blueSoft, A.blue], neutral: [A.sunk, A.muted] };
    const [bg, fg] = tones[tone] || tones.primary;
    return <span style={{ background: bg, color: fg, padding: '3px 9px', borderRadius: 8, fontSize: 11.5,
      fontWeight: 800, letterSpacing: '.02em', textTransform: 'uppercase' }}>{children}</span>;
  }

  // ---- Surfaces ------------------------------------------------------------
  function Card({ children, pad = 20, style, onClick, hover }) {
    return (
      <div onClick={onClick} style={{ background: A.card, border: `1px solid ${A.border}`, borderRadius: A.radius, padding: pad,
        boxShadow: A.shadow, cursor: onClick ? 'pointer' : 'default', transition: 'transform .15s ease, box-shadow .15s ease', ...style }}
        onMouseEnter={e => { if (hover || onClick) { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = A.shadowLg; } }}
        onMouseLeave={e => { if (hover || onClick) { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = A.shadow; } }}>
        {children}
      </div>
    );
  }
  function SectionTitle({ children, action, onAction = () => {} }) {
    return (
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 14 }}>
        <h2 style={{ margin: 0, fontSize: 19, fontWeight: 800, letterSpacing: '-.01em', color: A.ink }}>{children}</h2>
        {action && <span onClick={onAction} style={{ fontSize: 14, color: A.primary, fontWeight: 700, cursor: 'pointer' }}>{action}</span>}
      </div>
    );
  }
  function LessonCard({ title, sub, icon, tint = {}, pct = 0, state, onClick = () => {} }) {
    const done = state === 'done', locked = state === 'locked';
    const bg = tint.bg || A.primarySoft, fg = tint.fg || A.primary;
    return (
      <Card pad={18} onClick={locked ? undefined : onClick} style={{ opacity: locked ? 0.62 : 1, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 46, height: 46, borderRadius: 14, background: bg, color: fg, display: 'grid', placeItems: 'center', flex: '0 0 auto' }}>
            <Icon name={locked ? 'lock' : (icon || 'book-open')} size={22} />
          </div>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontWeight: 800, fontSize: 16, color: A.ink }}>{title}</div>
            <div style={{ fontSize: 13, color: A.muted, fontWeight: 600 }}>{sub}</div>
          </div>
          {done && <div style={{ marginLeft: 'auto' }}><Icon name="check-circle-2" size={22} color={A.green} /></div>}
        </div>
        {!locked && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 700, color: done ? A.green : A.muted, marginBottom: 6 }}>
              <span>{done ? 'Completed' : 'In progress'}</span><span>{pct}%</span>
            </div>
            <Bar pct={pct} color={done ? A.green : A.primary} track={A.barTrack} height={8} />
          </div>
        )}
        {locked && <div style={{ fontSize: 13, color: A.faint, fontWeight: 700 }}>Finish the unit to unlock</div>}
      </Card>
    );
  }

  // ---- Form controls -------------------------------------------------------
  function Field({ label, placeholder, value, onChange = () => {}, type = 'text', icon }) {
    return (
      <label style={{ display: 'block' }}>
        {label && <div style={{ fontSize: 13, fontWeight: 700, color: A.ink, marginBottom: 7 }}>{label}</div>}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: A.card, border: `1.5px solid ${A.border}`, borderRadius: 14, padding: '0 14px' }}>
          {icon && <Icon name={icon} size={18} color={A.faint} />}
          <input type={type} placeholder={placeholder} value={value} onChange={onChange} style={{ flex: 1, border: 'none', outline: 'none',
            background: 'transparent', padding: '13px 0', fontFamily: A.font, fontSize: 15, fontWeight: 600, color: A.ink }} />
        </div>
      </label>
    );
  }
  function Toggle({ on, onClick = () => {} }) {
    return (
      <div onClick={onClick} style={{ width: 46, height: 27, borderRadius: 999, padding: 3, cursor: 'pointer',
        background: on ? A.green : A.barTrack, transition: 'background .2s ease' }}>
        <div style={{ width: 21, height: 21, borderRadius: '50%', background: '#fff',
          transform: on ? 'translateX(19px)' : 'translateX(0)', transition: 'transform .2s ease', boxShadow: '0 1px 3px rgba(0,0,0,.2)' }} />
      </div>
    );
  }

  // ---- App shell (persistent top nav) -------------------------------------
  function AppShell({ tab, go = () => {}, children, maxWidth = 1180, theme = 'light', setTheme, brand = 'Stax',
    streak = 12, xp = 340, user = 'Maya R' }) {
    const tabs = [
      { id: 'daily', label: 'Today', icon: 'sparkles' },
      { id: 'dashboard', label: 'Learn', icon: 'graduation-cap' },
      { id: 'quiz', label: 'Practice', icon: 'dumbbell' },
      { id: 'trade', label: 'Invest', icon: 'line-chart' },
      { id: 'catalog', label: 'Markets', icon: 'trending-up' },
    ];
    React.useEffect(refreshIcons);
    return (
      <div style={{ background: A.page, color: A.ink, fontFamily: A.font, minHeight: '100%' }}>
        <div style={{ maxWidth, margin: '0 auto', padding: '22px 28px 60px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 26 }}>
            <div onClick={() => go('marketing')} style={{ display: 'flex', alignItems: 'center', gap: 10, marginRight: 18, cursor: 'pointer' }}>
              <div style={{ width: 38, height: 38, borderRadius: 12, background: A.primary, color: '#fff', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 20 }}>{brand[0]}</div>
              <span style={{ fontWeight: 800, fontSize: 20, letterSpacing: '-.02em' }}>{brand}</span>
            </div>
            {tabs.map(tt => (
              <div key={tt.id} onClick={() => go(tt.id)} style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '9px 14px', borderRadius: 12,
                background: tab === tt.id ? A.primarySoft : 'transparent', color: tab === tt.id ? A.primaryDeep : A.muted, fontWeight: 700, fontSize: 15, cursor: 'pointer' }}>
                <Icon name={tt.icon} size={18} />{tt.label}
              </div>
            ))}
            <div style={{ flex: 1 }} />
            <Pill icon="flame" bg={A.amberSoft} fg={A.amberInk}>{streak}</Pill>
            <Pill icon="zap" bg={A.primarySoft} fg={A.primaryDeep}>{xp} XP</Pill>
            {setTheme && (
              <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} title="Toggle theme" style={{ width: 40, height: 40, borderRadius: 12,
                border: `1px solid ${A.border}`, cursor: 'pointer', display: 'grid', placeItems: 'center', color: A.muted, background: A.card }}>
                <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={19} />
              </div>
            )}
            <div onClick={() => go('profile')} style={{ cursor: 'pointer' }}><Avatar name={user} size={40} bg={A.green} ring={A.card} /></div>
          </div>
          {children}
        </div>
      </div>
    );
  }

  const StaxKit = { A, THEMES, applyTheme, refreshIcons, cx,
    Icon, Ring, Bar, Avatar, WeekDots, Btn, Pill, Badge, Card, SectionTitle, LessonCard, Field, Toggle, AppShell };
  window.StaxKit = StaxKit;
  Object.assign(window, StaxKit); // also expose bare names for plain-HTML use
  if (typeof module !== 'undefined' && module.exports) module.exports = StaxKit;
})();

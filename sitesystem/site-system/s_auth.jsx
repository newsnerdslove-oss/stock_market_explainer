// Login / signup — Warm Campus. Split panel: brand story + auth card with SSO.
function ScreenAuth({ go, theme, setTheme }) {
  const [mode, setMode] = React.useState('login'); // 'login' | 'signup'
  const [email, setEmail] = React.useState('');
  const [pw, setPw] = React.useState('');
  const [name, setName] = React.useState('');
  const [showPw, setShowPw] = React.useState(false);
  React.useEffect(() => { window.lucide && window.lucide.createIcons(); });

  const isSignup = mode === 'signup';
  const submit = () => go(isSignup ? 'onboarding' : 'daily');

  const providers = [
    { id: 'google', label: 'Google', mark: <GoogleMark /> },
    { id: 'apple', label: 'Apple', mark: <Icon name="apple" size={20} color={A.ink} /> },
    { id: 'microsoft', label: 'Microsoft', mark: <MicrosoftMark /> },
    { id: 'github', label: 'GitHub', mark: <Icon name="github" size={20} color={A.ink} /> },
  ];

  return (
    <div style={{ minHeight: '100vh', background: A.page, color: A.ink, fontFamily: A.font,
      display: 'grid', gridTemplateColumns: '1.05fr 1fr' }}>

      {/* left — brand panel */}
      <div style={{ background: `linear-gradient(150deg, ${A.gradA}, ${A.gradB})`, color: '#fff',
        padding: '46px 52px', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
        <div onClick={() => go('marketing')} style={{ display: 'flex', alignItems: 'center', gap: 11, cursor: 'pointer', position: 'relative', zIndex: 1 }}>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(255,255,255,.18)', display: 'grid', placeItems: 'center', fontWeight: 800, fontSize: 21 }}>S</div>
          <span style={{ fontWeight: 800, fontSize: 21, letterSpacing: '-.02em' }}>Stax</span>
        </div>

        <div style={{ marginTop: 'auto', marginBottom: 'auto', position: 'relative', zIndex: 1, maxWidth: 420 }}>
          <h1 style={{ fontSize: 38, fontWeight: 800, letterSpacing: '-.025em', lineHeight: 1.12, margin: '0 0 16px' }}>
            The market, finally making sense.
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.6, opacity: .92, fontWeight: 500, margin: '0 0 30px' }}>
            Five-minute lessons, real charts, and a daily streak that keeps it sticking. Pick up where you left off.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[['candlestick-chart', 'Read any chart with confidence'],
              ['flame', 'Build a streak, learn a little daily'],
              ['trophy', 'Climb the weekly leaderboard']].map(([ic, t], i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 15.5, fontWeight: 600 }}>
                <span style={{ width: 34, height: 34, borderRadius: 10, background: 'rgba(255,255,255,.16)', display: 'grid', placeItems: 'center', flex: '0 0 auto' }}>
                  <Icon name={ic} size={18} color="#fff" />
                </span>{t}
              </div>
            ))}
          </div>
        </div>

        <div style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 12, fontSize: 14, fontWeight: 600, opacity: .9 }}>
          <div style={{ display: 'flex' }}>
            {['Maya R', 'Dev P', 'Aisha K'].map((n, i) => (
              <div key={i} style={{ marginLeft: i ? -10 : 0 }}><Avatar name={n} size={30} bg="rgba(255,255,255,.9)" color={A.primaryDeep} ring={A.primary} /></div>
            ))}
          </div>
          Joined by 40,000+ learners this year
        </div>

        {/* soft decorative blobs */}
        <div style={{ position: 'absolute', top: -80, right: -60, width: 260, height: 260, borderRadius: '50%', background: 'rgba(255,255,255,.10)' }}></div>
        <div style={{ position: 'absolute', bottom: -90, left: -50, width: 220, height: 220, borderRadius: '50%', background: 'rgba(255,255,255,.08)' }}></div>
      </div>

      {/* right — auth card */}
      <div style={{ display: 'grid', placeItems: 'center', padding: '40px 24px', position: 'relative' }}>
        {setTheme && (
          <div onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} title="Toggle theme" style={{
            position: 'absolute', top: 22, right: 24, width: 40, height: 40, borderRadius: 12, border: `1px solid ${A.border}`,
            cursor: 'pointer', display: 'grid', placeItems: 'center', color: A.muted, background: A.card }}>
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={19} />
          </div>
        )}

        <div style={{ width: 'min(400px, 100%)' }}>
          <h2 style={{ fontSize: 27, fontWeight: 800, letterSpacing: '-.02em', margin: '0 0 6px' }}>
            {isSignup ? 'Create your account' : 'Welcome back'}
          </h2>
          <p style={{ fontSize: 15, color: A.muted, fontWeight: 600, margin: '0 0 24px' }}>
            {isSignup ? 'Start your first lesson in under a minute.' : 'Log in to keep your streak alive.'}
          </p>

          {/* SSO grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 18 }}>
            {providers.map(p => (
              <button key={p.id} onClick={submit} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9, padding: '12px 12px',
                borderRadius: 13, border: `1.5px solid ${A.border}`, background: A.card, color: A.ink,
                fontFamily: A.font, fontWeight: 700, fontSize: 14.5, cursor: 'pointer', transition: 'border-color .12s ease, background .12s ease' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = A.primary; e.currentTarget.style.background = A.primarySoft; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = A.border; e.currentTarget.style.background = A.card; }}>
                {p.mark}{p.label}
              </button>
            ))}
          </div>

          {/* enterprise SSO */}
          <button onClick={submit} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 9,
            padding: '12px', borderRadius: 13, border: `1.5px solid ${A.border}`, background: A.card, color: A.muted,
            fontFamily: A.font, fontWeight: 700, fontSize: 14, cursor: 'pointer', marginBottom: 22 }}
            onMouseEnter={e => e.currentTarget.style.color = A.ink}
            onMouseLeave={e => e.currentTarget.style.color = A.muted}>
            <Icon name="building-2" size={18} /> Continue with company SSO (SAML)
          </button>

          {/* divider */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, margin: '0 0 22px', color: A.faint, fontSize: 13, fontWeight: 700 }}>
            <div style={{ flex: 1, height: 1, background: A.border }}></div>
            or with email
            <div style={{ flex: 1, height: 1, background: A.border }}></div>
          </div>

          {/* email form */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {isSignup && <Field label="Name" placeholder="Maya Rivera" icon="user" value={name} onChange={e => setName(e.target.value)} />}
            <Field label="Email" placeholder="you@email.com" icon="mail" type="email" value={email} onChange={e => setEmail(e.target.value)} />
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 7 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: A.ink }}>Password</span>
                {!isSignup && <span style={{ fontSize: 13, fontWeight: 700, color: A.primary, cursor: 'pointer' }}>Forgot?</span>}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, background: A.card, border: `1.5px solid ${A.border}`, borderRadius: 14, padding: '0 14px' }}>
                <Icon name="lock" size={18} color={A.faint} />
                <input type={showPw ? 'text' : 'password'} placeholder={isSignup ? 'At least 8 characters' : '••••••••'} value={pw} onChange={e => setPw(e.target.value)}
                  style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', padding: '13px 0', fontFamily: A.font, fontSize: 15, fontWeight: 600, color: A.ink }} />
                <div onClick={() => setShowPw(!showPw)} style={{ cursor: 'pointer', color: A.faint, display: 'grid', placeItems: 'center' }}>
                  <Icon name={showPw ? 'eye-off' : 'eye'} size={18} />
                </div>
              </div>
            </div>
            <Btn kind="primary" size="lg" full iconRight="arrow-right" onClick={submit}>
              {isSignup ? 'Create account' : 'Log in'}
            </Btn>
          </div>

          {/* mode toggle */}
          <div style={{ textAlign: 'center', marginTop: 22, fontSize: 14.5, color: A.muted, fontWeight: 600 }}>
            {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
            <span onClick={() => setMode(isSignup ? 'login' : 'signup')} style={{ color: A.primary, fontWeight: 800, cursor: 'pointer' }}>
              {isSignup ? 'Log in' : 'Sign up free'}
            </span>
          </div>

          {/* legal microcopy */}
          <p style={{ textAlign: 'center', marginTop: 24, fontSize: 12.5, color: A.faint, fontWeight: 600, lineHeight: 1.6 }}>
            By continuing you agree to our{' '}
            <span onClick={() => go('legal')} style={{ color: A.muted, textDecoration: 'underline', cursor: 'pointer' }}>Terms</span> and{' '}
            <span onClick={() => go('legal')} style={{ color: A.muted, textDecoration: 'underline', cursor: 'pointer' }}>Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
}

// --- Simple, non-logo provider marks (recognizable, not trademark recreations) ---
function GoogleMark() {
  return (
    <span style={{ width: 20, height: 20, borderRadius: '50%', display: 'grid', placeItems: 'center',
      background: 'conic-gradient(#EA4335 0 25%, #FBBC05 0 50%, #34A853 0 75%, #4285F4 0 100%)', flex: '0 0 auto' }}>
      <span style={{ width: 11, height: 11, borderRadius: '50%', background: window.A.card, display: 'grid', placeItems: 'center',
        fontWeight: 800, fontSize: 10, color: '#4285F4', fontFamily: 'arial, sans-serif' }}>G</span>
    </span>
  );
}
function MicrosoftMark() {
  const sq = (c) => ({ width: 8.5, height: 8.5, background: c });
  return (
    <span style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5, flex: '0 0 auto' }}>
      <span style={sq('#F25022')}></span><span style={sq('#7FBA00')}></span>
      <span style={sq('#00A4EF')}></span><span style={sq('#FFB900')}></span>
    </span>
  );
}

window.ScreenAuth = ScreenAuth;

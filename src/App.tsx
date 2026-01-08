function App() {
  return (
    <>
      <main className="hero">
        <div className="hero-frame" aria-hidden="true"></div>
        <div className="panel-left" aria-hidden="true"></div>
        <div className="signal" aria-hidden="true"></div>
        <div className="spark s1" aria-hidden="true"></div>
        <div className="spark s2" aria-hidden="true"></div>
        <div className="spark s3" aria-hidden="true"></div>

        <nav className="nav">
          <div className="logo">AEGIS</div>
          <div className="nav-links">
            <a href="#">PROJECT</a>
            <a href="#">ACTIVITY</a>
            <a href="#">FAQ</a>
            <a href="#">RECRUIT</a>
          </div>
        </nav>

        <section className="hero-main">
          <div className="club-tag">단국대학교 개발·보안 동아리</div>
          <h1 className="hero-title">AEGIS</h1>
          <p className="hero-sub">
            보안과 개발의 경계를 함께 탐구하고, 안전한 제품을 만드는 실전형 스터디·프로젝트 커뮤니티.
          </p>
          <div className="value-grid">
            <div className="value">Secure Coding</div>
            <div className="value">Threat Modeling</div>
            <div className="value">Red &amp; Blue Team</div>
            <div className="value">Product Security</div>
          </div>
        </section>

        <footer className="hero-footer">
          <div className="line"></div>
          <span>AEGIS 2026</span>
        </footer>
      </main>

      <section className="activity">
        <div className="activity-inner">
          <div>
            <div className="activity-title">Activity</div>
          </div>
          <div className="activity-grid">
            <div className="photo-slot">Photo</div>
            <div className="photo-slot">Photo</div>
            <div className="photo-slot">Photo</div>
            <div className="photo-slot">Photo</div>
            <div className="photo-slot">Photo</div>
            <div className="photo-slot">Photo</div>
          </div>
        </div>
      </section>

      <section className="partners">
        <div className="partners-inner">
          <div className="partners-title">Partnerships</div>
          <div className="partners-grid">
            <div className="partner-card">Partner Logo</div>
            <div className="partner-card">Partner Logo</div>
            <div className="partner-card">Partner Logo</div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-brand">AEGIS</div>
          <div className="footer-meta">
            <span>단국대학교 개발·보안 동아리</span>
            <span>dankook.aegis@gmail.com</span>
            <span>© 2026 aegis all rights reserved.</span>
          </div>
          <div className="footer-links">
            <a
              className="footer-link"
              href="https://instagram.com/dku_aegis"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="instagram dku_aegis"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 3.2a5.8 5.8 0 1 1 0 11.6 5.8 5.8 0 0 1 0-11.6Zm0 2a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Zm6.4-2.7a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" />
              </svg>
            </a>
            <a
              className="footer-link"
              href="https://github.com/dkuaegis"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="github dku_aegis"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.49-1.1-1.49-.9-.63.07-.62.07-.62 1 .07 1.52 1.05 1.52 1.05.9 1.56 2.35 1.11 2.92.85.09-.67.35-1.11.63-1.36-2.22-.26-4.56-1.13-4.56-5.02 0-1.11.39-2.02 1.03-2.73-.1-.26-.45-1.33.1-2.77 0 0 .84-.27 2.75 1.03a9.25 9.25 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.44.2 2.51.1 2.77.64.71 1.03 1.62 1.03 2.73 0 3.9-2.34 4.76-4.58 5.02.36.31.68.92.68 1.86 0 1.35-.01 2.43-.01 2.76 0 .27.18.59.69.49A10.2 10.2 0 0 0 22 12.2C22 6.58 17.52 2 12 2Z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App

import React from 'react';

function Footer({ t }) {
  return (
    <footer className="site-footer-bottom">
      <div className="footer-content">
        <div className="copyright">{t.copyright}</div>
        <nav className="footer-nav">
          <button onClick={() => alert(t.aboutUsInfo)}>{t.aboutUs}</button>
          <button onClick={() => window.scrollTo(0, 0)}>{t.menu}</button>
          <button onClick={() => alert(t.contactInfo)}>{t.contact}</button>
        </nav>
        <button onClick={() => window.scrollTo(0, 0)} className="back-to-top">
          {t.backToTop}
        </button>
      </div>
    </footer>
  );
}

export default Footer;
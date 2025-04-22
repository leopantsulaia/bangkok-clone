import React from 'react';
import Flag from 'react-world-flags';

function Header({ t, language, setLanguage, showDropdown, setShowDropdown }) {
  return (
    <header className="site-header">
      <div className="header-top">
        <div className="contact-info">
          <span className="phone">{t.phone}</span>
        </div>
        <div className="social-media">
          <a href="https://facebook.com" aria-label="Visit our Facebook page">(facebook)</a>
          <a href="https://instagram.com" aria-label="Visit our Instagram profile">(instagram)</a>
        </div>
      </div>
      <div className="header-main">
        <a href="/" className="logo-link">
          <div className="logo">VADGKŌK</div>
        </a>
        <nav className="main-nav">
          <ul>
            <li><button onClick={() => alert(t.aboutUsInfo)}>{t.aboutUs}</button></li>
            <li><button className="active">{t.menu}</button></li>
            <li className="dropdown">
              <button onClick={() => setShowDropdown(!showDropdown)}>
                {t.onlineOrder} <span className="dropdown-arrow">▼</span>
              </button>
            </li>
            <li>
              <button onClick={() => alert(t.contactInfo)}>{t.contact}</button>
            </li>
          </ul>
        </nav>
        <div className="language-selector">
          <button onClick={() => setLanguage(language === 'en' ? 'geo' : 'en')}>
            {t.language}
            {language === 'en' ? (
              <Flag code="GE" style={{ width: '20px', marginLeft: '5px' }} />
            ) : (
              <Flag code="GB" style={{ width: '20px', marginLeft: '5px' }} />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
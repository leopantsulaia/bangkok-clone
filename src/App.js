import React, { useState } from 'react';
import './App.css';
import Flag from 'react-world-flags'; // Import the flag library

// Placeholder images
const placeholderNoodles = "https://picsum.photos/seed/noodles/400/267?random=1";
const placeholderRice = "https://picsum.photos/seed/rice/400/267?random=2";
const placeholderSignature = "https://picsum.photos/seed/signature/400/267?random=3";
const placeholderSoups = "https://picsum.photos/seed/soups/400/267?random=4";
const placeholderRoll = "https://picsum.photos/seed/roll/400/267?random=5";
const placeholderSushi = "https://picsum.photos/seed/sushi/400/267?random=6";
const placeholderMaki = "https://picsum.photos/seed/maki/400/267?random=7";
const placeholderSets = "https://picsum.photos/seed/sets/400/267?random=8";
const placeholderBuns = "https://picsum.photos/seed/buns/400/267?random=9";
const placeholderPoke = "https://picsum.photos/seed/poke/400/267?random=10";
const placeholderSauce = "https://picsum.photos/seed/sauce/400/267?random=11";
const placeholderDrinks = "https://picsum.photos/seed/drinks/400/267?random=12";

const placeholderUkFlag = "https://via.placeholder.com/50x30?text=UK"; // English flag
const placeholderGeoFlag = "https://via.placeholder.com/50x30?text=GE"; // Georgian flag

function App() {
  const [language, setLanguage] = useState('en'); // State to track selected language
  const [showDropdown, setShowDropdown] = useState(false); // State to toggle dropdown visibility

  // Menu categories with translations
  const menuCategories = [
    { name: { en: 'Noodles', geo: 'ლაფშა' }, image: placeholderNoodles, href: '#' },
    { name: { en: 'Rice', geo: 'ბრინჯი' }, image: placeholderRice, href: '#' },
    { name: { en: 'Signature Dishes', geo: 'ფირმული კერძები' }, image: placeholderSignature, href: '#' },
    { name: { en: 'Soups', geo: 'სუპები' }, image: placeholderSoups, href: '#' },
    { name: { en: 'Roll', geo: 'როლი' }, image: placeholderRoll, href: '#' },
    { name: { en: 'Sushi', geo: 'სუში' }, image: placeholderSushi, href: '#' },
    { name: { en: 'Maki', geo: 'მაკი' }, image: placeholderMaki, href: '#' },
    { name: { en: 'Sets', geo: 'სეტები' }, image: placeholderSets, href: '#' },
    { name: { en: 'Buns', geo: 'ბურგერები' }, image: placeholderBuns, href: '#' },
    { name: { en: 'Poke', geo: 'პოკე' }, image: placeholderPoke, href: '#' },
    { name: { en: 'Sauce/Topping', geo: 'სოუსი/ტოპინგი' }, image: placeholderSauce, href: '#' },
    { name: { en: 'Drinks', geo: 'სასმელები' }, image: placeholderDrinks, href: '#' },
  ];

  // Text translations
  const translations = {
    en: {
      phone: '+995 574 07 75 18',
      aboutUs: 'About Us',
      menu: 'Menu',
      onlineOrder: 'Online Order',
      contact: 'Contact',
      language: 'ქართული',
      walt: 'Walt',
      bolt: 'Bolt',
      aboutUsInfo: 'Somebody said there are TRANS people in bangkok, we don"t have trans fats here.',
      contactInfo: `Call Us: +995 574 07 75 18\nEmail: AtriaMagaria@atria.nk\nAddress: Shio Aragvispirelis qoronikonit qristes aqet 1521`,
      copyright: '© All rights reserved. Bangkok 2025 By LP',
      backToTop: '▲',
    },
    geo: {
      phone: '+995 574 07 75 18',
      aboutUs: 'ჩვენს შესახებ',
      menu: 'მენიუ',
      onlineOrder: 'ონლაინ შეკვეთა',
      contact: 'კონტაქტი',
      language: 'English',
      walt: 'ვალტი',
      bolt: 'ბოლტი',
      aboutUsInfo: 'გავიზარდე ბანგკოკში, დავიბადე ბანგკოკში, ჯერ დავიბადე მერე გავიზარდე.',
      contactInfo: `დაგვირეკეთ: +995 574 07 75 18\nელ.ფოსტა: AtriaMagaria@atria.nk\nმისამართი: შიო არაგვისპირელის ყორონიკონით ქრისტეს აქეთ 1521`,
      copyright: '© ყველა უფლება დაცულია. ბანგკოკი 2025 LP-ის მიერ',
      backToTop: '▲',
    },
  };

  const t = translations[language]; // Get translations for the current language

  return (
    <>
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
            <div className="logo">BANGKŌK</div>
          </a>
          <nav className="main-nav">
            <ul>
              <li><button onClick={() => alert(t.aboutUsInfo)}>{t.aboutUs}</button></li>
              <li><button className="active">{t.menu}</button></li>
              <li className="dropdown">
                <button
                  onClick={() => setShowDropdown(!showDropdown)} // Toggle dropdown visibility
                >
                  {t.onlineOrder} <span className="dropdown-arrow">▼</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => alert(t.contactInfo)} // Show contact info as a popup alert
                >
                  {t.contact}
                </button>
              </li>
            </ul>
          </nav>
          <div className="language-selector">
            <button
              onClick={() => setLanguage(language === 'en' ? 'geo' : 'en')} // Toggle language
            >
              {t.language} 
              {language === 'en' ? <Flag code="GE" style={{ width: '20px', marginLeft: '5px' }} /> : <Flag code="GB" style={{ width: '20px', marginLeft: '5px' }} />}
            </button>
          </div>
        </div>
      </header>

      {showDropdown && (
        <div className="popup-menu">
          <ul>
            <li><a href="https://walt.com" target="_blank" rel="noopener noreferrer">{t.walt}</a></li>
            <li><a href="https://boltfood.com" target="_blank" rel="noopener noreferrer">{t.bolt}</a></li>
          </ul>
        </div>
      )}

      <main className="menu-container">
        <div className="menu-grid">
          {menuCategories.map((category) => (
            <a
              href={category.href}
              key={category.name.en}
              className="menu-category-card"
              style={{ backgroundImage: `url(${category.image})` }}
              aria-label={`View ${category.name[language]} menu`}
            >
              <span className="category-name">{category.name[language]}</span>
            </a>
          ))}
        </div>
      </main>

      <footer className="site-footer-bottom">
        <div className="footer-content">
          <div className="copyright">
            {t.copyright}
          </div>
          <nav className="footer-nav">
            <button onClick={() => alert(t.aboutUsInfo)} >{t.aboutUs}</button>
            <button onClick={() => window.scrollTo(0, 0)}>{t.menu}</button>
            <button
              onClick={() => alert(t.contactInfo)} // Show contact info as a popup alert
            >
              {t.contact}
            </button>
          </nav>
          <button onClick={() => window.scrollTo(0, 0)} className="back-to-top">{t.backToTop}</button>
        </div>
      </footer>
    </>
  );
}

export default App;
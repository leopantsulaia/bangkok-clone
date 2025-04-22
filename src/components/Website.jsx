import React, { useState } from 'react';
import menuCategories from './menuCategories';
import content from './content';
import translations from './translations';
import Header from './header';
import Main from './main';
import Footer from './footer';

function Website() {
  const [language, setLanguage] = useState('geo');
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const t = translations[language];

  return (
    <>
      <Header
        t={t}
        language={language}
        setLanguage={setLanguage}
        showDropdown={showDropdown}
        setShowDropdown={setShowDropdown}
      />
      {showDropdown && (
        <div className="popup-menu">
          <ul>
            <li>
              <a href="https://walt.com" target="_blank" rel="noopener noreferrer">
                {t.walt}
              </a>
            </li>
            <li>
              <a href="https://boltfood.com" target="_blank" rel="noopener noreferrer">
                {t.bolt}
              </a>
            </li>
          </ul>
        </div>
      )}
      <Main
        menuCategories={menuCategories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        content={content}
        language={language}
      />
      <Footer t={t} />
    </>
  );
}

export default Website;
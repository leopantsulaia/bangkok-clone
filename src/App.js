import React, { useState } from 'react';
import './App.css';
import menuCategories from './components/menuCategories';
import content from './components/content';
import translations from './components/translations';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';

function App() {
  const [language, setLanguage] = useState('en');
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

export default App;
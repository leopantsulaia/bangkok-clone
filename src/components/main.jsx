import React from 'react';

function Main({ menuCategories, selectedCategory, setSelectedCategory, content, language }) {
  return (
    <main className="menu-container">
      {!selectedCategory ? (
        <div className="menu-grid">
          {menuCategories.map((category) => (
            <button
              key={category.name.en}
              className="menu-category-card"
              style={{ backgroundImage: `url(${category.image})` }}
              onClick={() => setSelectedCategory(category.name[language])}
            >
              <span className="category-name">{category.name[language]}</span>
            </button>
          ))}
        </div>
      ) : (
        <div className="category-content">
          <button
            style={{ color: 'white', backgroundColor: 'red' }}
            onClick={() => setSelectedCategory(null)}
            className="back-button"
          >
            {language === 'en' ? 'Back to Menu' : 'მენიუში დაბრუნება'}
          </button>
          <pre>{content[language]}</pre>
        </div>
      )}
    </main>
  );
}

export default Main;
import React from 'react';

export default function MobileMenuWrapper() {
  return (
    <div className="mobile_menu_wrapper">
      <button id="close_mobile_menu" type="button" className="close-button">
        <span className="ti-close"></span>
      </button>
      <div className="menu-mainmenu-container">
        <ul id="mobile_main_menu" className="mobile_main_nav">
          <li id="menu-item-6237" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6237">
            <a href="https://bangkok.ge/en/about-us/">About Us</a>
          </li>
          <li id="menu-item-7071" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-6949 current_page_item menu-item-7071">
            <a href="https://bangkok.ge/en/" aria-current="page">Menu</a>
          </li>
          <li id="menu-item-7239" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-7239">
            <button type="button" className="link-button">Online Order</button>
            <ul className="sub-menu">
              <li id="menu-item-7240" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-7240">
                <a href="https://wolt.com/en/geo/tbilisi/restaurant/bangkok1">Wolt</a>
              </li>
              <li id="menu-item-7241" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-7241">
                <a href="https://glovoapp.com/ge/en/tbilisi/bangkok-tbi/">Glovo</a>
              </li>
              <li id="menu-item-7245" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-7245">
                <a href="https://food.bolt.eu/en-US/15-tbilisi/p/70039-bangkok">Bold Food</a>
              </li>
            </ul>
          </li>
          <li id="menu-item-6238" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-6238">
            <a href="https://bangkok.ge/en/contact/">Contact</a>
          </li>
          <li id="menu-item-7247" className="qtranxs-lang-menu qtranxs-lang-menu-en menu-item menu-item-type-custom menu-item-object-custom current-menu-parent menu-item-has-children menu-item-7247">
            <button type="button" className="link-button" title="English">
              Language:&nbsp;
              <img src="https://bangkok.ge/wp-content/plugins/qtranslate-x/flags/gb.png" alt="English" />
            </button>
            <ul className="sub-menu">
              <li id="menu-item-7248" className="qtranxs-lang-menu-item qtranxs-lang-menu-item-ka menu-item menu-item-type-custom menu-item-object-custom menu-item-7248">
                <a href="https://bangkok.ge/ka/" title="ქართული">
                  <img src="https://bangkok.ge/wp-content/plugins/qtranslate-x/flags/ge.png" alt="ქართული" />&nbsp;ქართული
                </a>
              </li>
              <li id="menu-item-7249" className="qtranxs-lang-menu-item qtranxs-lang-menu-item-en menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-7249">
                <a href="https://bangkok.ge/en/" aria-current="page" title="English">
                  <img src="https://bangkok.ge/wp-content/plugins/qtranslate-x/flags/gb.png" alt="English" />&nbsp;English
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="page_content_wrapper">
        <div className="sidebar_wrapper">
          <div className="sidebar">
            <div className="content">
              <ul className="sidebar_widget"></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
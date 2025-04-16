import React from "react";

export default function KirkiInlineStyles() {
  return (
    <style id="kirki-inline-styles" type="text/css">
      {`
      body,
      input[type="text"],
      input[type="email"],
      input[type="url"],
      input[type="password"],
      textarea {
        font-family: reforma_2018blanca;
      }
      body {
        font-size: 16px;
        letter-spacing: 0px;
        font-weight: 400;
        background-color: #ffffff;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      h7,
      input[type="submit"],
      input[type="button"],
      a.button,
      .button,
      blockquote,
      #autocomplete li strong,
      #autocomplete li.view_all,
      .post_quote_title,
      label,
      .portfolio_filter_dropdown,
      .woocommerce ul.products li.product .price,
      .woocommerce ul.products li.product .button,
      .woocommerce ul.products li.product a.add_to_cart_button.loading,
      .woocommerce-page ul.products li.product a.add_to_cart_button.loading,
      .woocommerce ul.products li.product a.add_to_cart_button:hover,
      .woocommerce-page ul.products li.product a.add_to_cart_button:hover,
      .woocommerce input.button,
      .woocommerce #respond input#submit,
      .woocommerce #content input.button,
      .woocommerce-page input.button,
      .woocommerce-page #respond input#submit,
      .woocommerce-page #content input.button,
      .woocommerce-page input.button:hover,
      .woocommerce-page input.button:active,
      .woocommerce.columns-4 ul.products li.product a.add_to_cart_button,
      .woocommerce.columns-4 ul.products li.product a.add_to_cart_button:hover,
      strong[itemprop="author"],
      #footer_before_widget_text {
        font-family: reforma_2018negra;
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      h7 {
        font-weight: 900;
        text-transform: none;
        letter-spacing: 0px;
      }
      `}
    </style>
  );
}
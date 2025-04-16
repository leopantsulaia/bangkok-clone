import { useEffect } from "react";

export default function Scripts1() {
  useEffect(() => {
    const scripts = [
      {
        src: "https://bangkok.ge/wp-content/themes/grandrestaurant/js/jquery.masory.js",
        id: "jquery.masory.js-js",
      },
      {
        src: "https://bangkok.ge/wp-content/themes/grandrestaurant/js/jquery.tooltipster.min.js",
        id: "jquery.tooltipster.min.js-js",
      },
      {
        src: "https://bangkok.ge/wp-content/themes/grandrestaurant/js/hw-parallax.js",
        id: "hw-parallax.js-js",
      },
      {
        src: "https://bangkok.ge/wp-content/themes/grandrestaurant/js/jquery.stellar.min.js",
        id: "jquery.stellar.min.js-js",
      },
      {
        src: "https://bangkok.ge/wp-content/themes/grandrestaurant/js/jquery.resizeimagetoparent.min.js",
        id: "jquery.resizeimagetoparent.min.js-js",
      },
      {
        src: "https://bangkok.ge/wp-content/themes/grandrestaurant/js/custom_plugins.js",
        id: "custom_plugins.js-js",
      },
      {
        src: "https://bangkok.ge/wp-content/themes/grandrestaurant/js/custom.js",
        id: "custom.js-js",
      },
      {
        src: "https://bangkok.ge/wp-content/plugins/woocommerce/assets/js/sourcebuster/sourcebuster.min.js",
        id: "sourcebuster-js-js",
      },
      {
        // wc-order-attribution-js-extra (empty inline script)
        inline: "",
        id: "wc-order-attribution-js-extra",
      },
      {
        src: "https://bangkok.ge/wp-content/plugins/woocommerce/assets/js/frontend/order-attribution.min.js",
        id: "wc-order-attribution-js",
      },
      {
        src: "https://bangkok.ge/wp-content/themes/grandrestaurant/js/ajax-add-to-cart.js",
        id: "grandrestaurant_mini_cart-ajax-add-to-cart-js",
      },
      {
        // woocommerce-google-analytics-integration-data-js-after (inline script)
        inline: `
          window.ga4w = {
            data: {
              cart: {
                items: [],
                coupons: [],
                totals: {
                  currency_code: "USD",
                  total_price: 0,
                  currency_minor_unit: 2,
                },
              },
            },
            settings: {
              tracker_function_name: "gtag",
              events: [
                "purchase",
                "add_to_cart",
                "remove_from_cart",
                "view_item_list",
                "select_content",
                "view_item",
                "begin_checkout",
              ],
              identifier: null,
            },
          };
          document.dispatchEvent(new Event("ga4w:ready"));
        `,
        id: "woocommerce-google-analytics-integration-data-js-after",
      },
      {
        src: "https://bangkok.ge/wp-content/plugins/elementor/assets/js/webpack.runtime.min.js",
        id: "elementor-webpack-runtime-js",
      },
      {
        src: "https://bangkok.ge/wp-content/plugins/elementor/assets/js/frontend-modules.min.js",
        id: "elementor-frontend-modules-js",
      },
      {
        src: "https://bangkok.ge/wp-includes/js/jquery/ui/core.min.js",
        id: "jquery-ui-core-js",
      },
      {
        // elementor-frontend-js-before (empty inline script)
        inline: "",
        id: "elementor-frontend-js-before",
      },
      {
        src: "https://bangkok.ge/wp-content/plugins/elementor/assets/js/frontend.min.js",
        id: "elementor-frontend-js",
      },
    ];

    const createdScripts = scripts.map((attrs) => {
      let script = document.createElement("script");
      script.type = "text/javascript";
      if (attrs.src) script.src = attrs.src;
      if (attrs.id) script.id = attrs.id;
      if (attrs.inline !== undefined) script.text = attrs.inline;
      document.body.appendChild(script);
      return script;
    });

    // Cleanup on unmount
    return () => {
      createdScripts.forEach((script) => {
        if (script.parentNode) script.parentNode.removeChild(script);
      });
    };
  }, []);

  return null;
}
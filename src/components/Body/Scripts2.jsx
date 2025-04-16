import { useEffect } from "react";

export default function Scripts2() {
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
        // Empty inline script
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
import { useEffect } from "react";

export default function Scripts0() {
  useEffect(() => {
    const scripts = [
      {
        src: "https://bangkok.ge/wp-content/plugins/grandrestaurant-elementor/assets/js/jquery.lazy.js",
        id: "lazy-js",
      },
      {
        src: "https://bangkok.ge/wp-content/plugins/grandrestaurant-elementor/assets/js/modulobox.js",
        id: "modulobox-js",
      },
      {
        src: "https://bangkok.ge/wp-content/plugins/grandrestaurant-elementor/assets/js/jquery.parallax-scroll.js",
        id: "parallax-scroll-js",
      },
      {
        src: "https://bangkok.ge/wp-content/plugins/grandrestaurant-elementor/assets/js/jquery.smoove.js",
        id: "smoove-js",
      },
      {
        src: "https://bangkok.ge/wp-content/plugins/grandrestaurant-elementor/assets/js/parallax.js",
        id: "parallax-js",
      },
      {
        src: "https://bangkok.ge/wp-content/plugins/grandrestaurant-elementor/assets/js/jquery.blast.js",
        id: "blast-js",
      },
      {
        src: "https://bangkok.ge/wp-content/plugins/grandrestaurant-elementor/assets/js/jarallax.js",
        id: "jarallax-js",
      },
      {
        src: "https://bangkok.ge/wp-content/plugins/grandrestaurant-elementor/assets/js/jquery.sticky-kit.min.js",
        id: "sticky-kit-js",
      },
      {
        // grandrestaurant-elementor-js-extra (inline script)
        inline: `
          var tgAjax = {
            ajaxurl: "https://bangkok.ge/wp-admin/admin-ajax.php",
            ajax_nonce: "1e63ec3800",
          };
        `,
        id: "grandrestaurant-elementor-js-extra",
      },
      {
        src: "https://bangkok.ge/wp-content/plugins/grandrestaurant-elementor/assets/js/grandrestaurant-elementor.js",
        id: "grandrestaurant-elementor-js",
      },
      {
        src: "https://www.googletagmanager.com/gtag/js?id=G-RMGFPYTRNX",
        id: "google-tag-manager-js",
        async: true,
      },
      {
        src: "https://bangkok.ge/wp-includes/js/dist/hooks.min.js",
        id: "wp-hooks-js",
      },
      {
        src: "https://bangkok.ge/wp-includes/js/dist/i18n.min.js",
        id: "wp-i18n-js",
      },
    ];

    const createdScripts = scripts.map((attrs) => {
      let script = document.createElement("script");
      script.type = "text/javascript";
      if (attrs.src) script.src = attrs.src;
      if (attrs.id) script.id = attrs.id;
      if (attrs.async) script.async = true;
      if (attrs.inline) script.text = attrs.inline;
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
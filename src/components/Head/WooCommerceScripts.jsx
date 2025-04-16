import { useEffect } from "react";

export default function WooCommerceScripts() {
  useEffect(() => {
    // Inline woocommerce-js-extra
    const extraScript = document.createElement("script");
    extraScript.type = "text/javascript";
    extraScript.id = "woocommerce-js-extra";
    extraScript.innerHTML = `
      /* <![CDATA[ */
      var woocommerce_params = {
        ajax_url: "/wp-admin/admin-ajax.php",
        wc_ajax_url: "/en/?wc-ajax=%%endpoint%%",
        i18n_password_show: "Show password",
        i18n_password_hide: "Hide password"
      };
      /* ]]> */
    `;
    document.body.appendChild(extraScript);

    // External woocommerce.min.js
    const mainScript = document.createElement("script");
    mainScript.type = "text/javascript";
    mainScript.src = "https://bangkok.ge/wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.min.js";
    mainScript.id = "woocommerce-js";
    mainScript.defer = true;
    mainScript.setAttribute("data-wp-strategy", "defer");
    document.body.appendChild(mainScript);

    // Cleanup on unmount
    return () => {
      if (extraScript.parentNode) extraScript.parentNode.removeChild(extraScript);
      if (mainScript.parentNode) mainScript.parentNode.removeChild(mainScript);
    };
  }, []);

  return null;
}
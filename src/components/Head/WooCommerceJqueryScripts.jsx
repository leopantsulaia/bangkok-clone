import { useEffect } from "react";

export default function WooCommerceJqueryScripts() {
	useEffect(() => {
		// jQuery core
		const jqueryCore = document.createElement("script");
		jqueryCore.type = "text/javascript";
		jqueryCore.src = "https://bangkok.ge/wp-includes/js/jquery/jquery.min.js";
		jqueryCore.id = "jquery-core-js";
		document.body.appendChild(jqueryCore);

		// jQuery migrate
		const jqueryMigrate = document.createElement("script");
		jqueryMigrate.type = "text/javascript";
		jqueryMigrate.src =
			"https://bangkok.ge/wp-includes/js/jquery/jquery-migrate.min.js";
		jqueryMigrate.id = "jquery-migrate-js";
		document.body.appendChild(jqueryMigrate);

		// jQuery blockUI
		const blockUi = document.createElement("script");
		blockUi.type = "text/javascript";
		blockUi.src =
			"https://bangkok.ge/wp-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.min.js";
		blockUi.id = "jquery-blockui-js";
		blockUi.defer = true;
		blockUi.setAttribute("data-wp-strategy", "defer");
		document.body.appendChild(blockUi);

		// wc-add-to-cart-js-extra (inline)
		const addToCartExtra = document.createElement("script");
		addToCartExtra.type = "text/javascript";
		addToCartExtra.id = "wc-add-to-cart-js-extra";
		addToCartExtra.innerHTML = `
      /* <![CDATA[ */
      var wc_add_to_cart_params = {
        ajax_url: "/wp-admin/admin-ajax.php",
        wc_ajax_url: "/en/?wc-ajax=%%endpoint%%",
        i18n_view_cart: "View cart",
        cart_url: "https://bangkok.ge/en/cart-3/",
        is_cart: "",
        cart_redirect_after_add: "no",
      };
      /* ]]> */
    `;
		document.body.appendChild(addToCartExtra);

		// add-to-cart.min.js
		const addToCart = document.createElement("script");
		addToCart.type = "text/javascript";
		addToCart.src =
			"https://bangkok.ge/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.min.js";
		addToCart.id = "wc-add-to-cart-js";
		addToCart.defer = true;
		addToCart.setAttribute("data-wp-strategy", "defer");
		document.body.appendChild(addToCart);

		// js-cookie.min.js
		const jsCookie = document.createElement("script");
		jsCookie.type = "text/javascript";
		jsCookie.src =
			"https://bangkok.ge/wp-content/plugins/woocommerce/assets/js/js-cookie/js.cookie.min.js";
		jsCookie.id = "js-cookie-js";
		jsCookie.defer = true;
		jsCookie.setAttribute("data-wp-strategy", "defer");
		document.body.appendChild(jsCookie);

		// Cleanup on unmount
		return () => {
			[
				jqueryCore,
				jqueryMigrate,
				blockUi,
				addToCartExtra,
				addToCart,
				jsCookie,
			].forEach(script => {
				if (script.parentNode) script.parentNode.removeChild(script);
			});
		};
	}, []);

	return null;
}

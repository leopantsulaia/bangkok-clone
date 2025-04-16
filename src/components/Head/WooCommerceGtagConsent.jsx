import { useEffect } from "react";

export default function WooCommerceGtagConsent() {
	useEffect(() => {
		const script = document.createElement("script");
		script.type = "text/javascript";
		script.id = "woocommerce-google-analytics-integration-gtag-js-after";
		script.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      for (const mode of [
        {
          analytics_storage: "denied",
          ad_storage: "denied",
          ad_user_data: "denied",
          ad_personalization: "denied",
          region: [
            "AT","BE","BG","HR","CY","CZ","DK","EE","FI","FR","DE","GR","HU","IS","IE","IT","LV","LI","LT","LU","MT","NL","NO","PL","PT","RO","SK","SI","ES","SE","GB","CH"
          ],
        },
      ] || []) {
        gtag("consent", "default", { wait_for_update: 500, ...mode });
      }
      gtag("js", new Date());
      gtag("set", "developer_id.dOGY3NW", true);
      gtag("config", "G-RMGFPYTRNX", {
        track_404: true,
        allow_google_signals: true,
        logged_in: false,
        linker: { domains: [], allow_incoming: false },
        custom_map: { dimension1: "logged_in" },
      });
    `;
		document.head.appendChild(script);

		return () => {
			if (script.parentNode) script.parentNode.removeChild(script);
		};
	}, []);

	return null;
}

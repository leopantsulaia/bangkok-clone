import { useEffect } from "react";

export default function Scripts4() {
	useEffect(() => {
		const scripts = [
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
				// Empty inline script
				inline: "",
				id: "elementor-frontend-js-before",
			},
			{
				src: "https://bangkok.ge/wp-content/plugins/elementor/assets/js/frontend.min.js",
				id: "elementor-frontend-js",
			},
		];

		const createdScripts = scripts.map(attrs => {
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
			createdScripts.forEach(script => {
				if (script.parentNode) script.parentNode.removeChild(script);
			});
		};
	}, []);

	return null;
}

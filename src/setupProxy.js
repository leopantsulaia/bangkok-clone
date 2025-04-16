const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
	app.use(
		"/wp-content",
		createProxyMiddleware({
			target: "https://bangkok.ge",
			changeOrigin: true,
		})
	);
};

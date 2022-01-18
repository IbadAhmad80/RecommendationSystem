const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api", {
      target: "http://acb6-34-74-183-178.ngrok.io", // API endpoint 1
      changeOrigin: true,

      headers: {
        Connection: "keep-alive",
      },
    })
  );
  app.use(
    createProxyMiddleware("/sendEmail", {
      target: "https://test-emailserver.herokuapp.com", // API endpoint 1
      changeOrigin: true,

      headers: {
        Connection: "keep-alive",
      },
    })
  );
};

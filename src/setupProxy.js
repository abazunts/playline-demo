const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://playline-dev-test.s3-us-west-2.amazonaws.com',
      changeOrigin: true,
    })
  );
};
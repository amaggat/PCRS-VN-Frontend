const createProxyMiddleware = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: process.env.REACT_APP_API_PROXY_SERVER || 'http://localhost:8080',
      changeOrigin: true,
    })
  );
  app.use(
    '/user',
    createProxyMiddleware({
      target: process.env.REACT_APP_API_PROXY_SERVER || 'http://localhost:8080',
      changeOrigin: true,
    })
  );
};
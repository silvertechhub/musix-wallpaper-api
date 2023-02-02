const proxy = require('http-proxy-middleware').createProxyMiddleware;
module.exports = function (app) {
    app.use(proxy(``, { target: 'http://localhost:6000' }));
};
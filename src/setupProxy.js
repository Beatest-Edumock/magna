const proxy = require('http-proxy-middleware')
const https = require('https');


module.exports = function (app) {
    app.use(proxy('/api', {target: 'http://localhost:5000', changeOrigin: true}),
        proxy('/blobs', {target: "http://beatest.in", changeOrigin: true}))

};


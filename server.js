var express = require('express');
var path = require('path');
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");
var app = express();
var PORT = 3001;

(function() {
    // Step 1: Create & configure a webpack compiler
    var webpack = require('webpack');
    var webpackConfig = require('./webpack.config');
    var compiler = webpack(webpackConfig);

    // Step 2: Attach the dev middleware to the compiler & the server
    app.use(webpackDevMiddleware(compiler, {
        noInfo: true, publicPath: webpackConfig.output.publicPath
    }));

    // Step 3: Attach the hot middleware to the compiler & the server
    app.use(webpackHotMiddleware (compiler, {
        log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
    }));
})();

// Serve static files from the public folder (very primitive routing)
var publicPath = path.resolve(__dirname, 'public');
app.use(express.static(publicPath));

var bowerPath = path.resolve(__dirname, 'bower_components');
app.use(express.static(bowerPath));

app.listen(PORT, function () {
    console_out = 'Example app listening on port ' + PORT.toString();
    console.log(console_out);
});
//http://jamesknelson.com/using-es6-in-the-browser-with-babel-6-and-webpack/
var path = require('path');
var webpack = require('webpack');

var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');
var mainPath = path.resolve(__dirname, 'app', 'index.js');

config = {
    entry: [
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        'babel-polyfill', // Don't know why needed, but recommended
        mainPath
    ],
    output: {
        path: buildPath,
        publicPath: '/build/',
        filename: 'bundle.js',
        library: 'exports', // use the "exports" object in the index.html <script>
        sourcePrefix: '' // required for cesium
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.ProvidePlugin({ // make jquery globally available, some libraries require it
           $: "jquery",
           jQuery: "jquery"
       })
    ],

    module: {
        unknownContextCritical : false,
        loaders: [
            {test: /\.json$/, loader: "json-loader"},
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: [nodeModulesPath],
                query: {
                    plugins: ['transform-runtime'], //Don't know why needed, but recommended
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
            {test: /\.css$/, loader: "style!css" },
            {test: /\.(png|gif|jpg|jpeg)$/, loader: "file-loader"},
            {test: /\.(woff2?|svg)$/, loader: 'url?limit=10000' },
            {test: /\.(ttf|eot)$/, loader: 'file' }
        ]
    }
};

module.exports = config;
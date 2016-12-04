var path = require('path');
var webpack = require('webpack');

var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'public', 'build');
var mainPath = path.resolve(__dirname, 'app', 'index.js');

config = {
    entry: [
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
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
        new webpack.ProvidePlugin({
           $: "jquery",
           jQuery: "jquery"
       })
    ],

    module: {
        unknownContextCritical : false,
        loaders: [
            {test: /\.json$/, loader: "json-loader"},
            {test: /\.js$/, loader: 'babel', exclude: [nodeModulesPath]},
            {test: /\.css$/, loader: "style!css" },
            {test: /\.(png|gif|jpg|jpeg)$/, loader: "file-loader"},
            {test: /\.(woff2?|svg)$/, loader: 'url?limit=10000' }
        ]
    }
};

module.exports = config;
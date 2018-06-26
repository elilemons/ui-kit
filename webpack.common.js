const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/assets/js/index.js',
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'UI Kit'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: [/\.scss$/],
            use: [
                "html-loader",
                "style-loader",
                "css-loader", // translates css into CommonJS
                "sass-loader" // compiles Sass to CSS
            ]
        }]
    }
};
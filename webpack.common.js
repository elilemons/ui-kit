const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); 

module.exports = {
    entry: {
        app: './src/index.js',
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'UI Kit'
        }),
        new ExtractTextPlugin("[name].html"),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: [/\.scss$/,  /\.html$/],
            use: [
                "html-loader",
                process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader, 
                "css-loader", // translates css into CommonJS
                "sass-loader" // compiles Sass to CSS
            ]
        }]
    }
}
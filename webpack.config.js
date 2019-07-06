var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        path: __dirname + '/public',
        publicPath: '/',
        filename: 'bundle.js',
        publicPath: '/',
    },
    devServer: {
        contentBase: './public',
        historyApiFallback: true,
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx'],
    },
};

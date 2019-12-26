const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader"
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './src/',
                            hmr: true,
                            reloadAll: true
                        },
                    },
                    'css-loader',
                    'sass-loader',
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, "./src/index.html")
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                styles: {
                    name: 'styles',
                    test: /\.scss$/,
                    chunks: 'all',
                    enforce: true,
                },
            },
        },
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        hot: true
    },
};
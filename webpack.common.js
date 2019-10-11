const path = require('path');

//生成index.html 并自动将打包后的js文件注入到index.html
const HtmlWebpackPlugin = require('html-webpack-plugin');

//清理dist 目录
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: {
        print: './src/js/print.js',
        index: './src/index.js',
        vendor: ['lodash','jquery']
    },
    output: {
        // filename: 'bundle.js',
        // filename: '[hash].[name].bundle.js',
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, {
                test: /\.(svg|png|jpg|jpeg|gif)$/,
                use: [
                    'file-loader'
                ]
            }, {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'output Management',
            // filename: 'index1.html',
            template: './index.html' //根据自己的html文件生成index.html
        }),
        new webpack.HashedModuleIdsPlugin() 
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                  // cacheGroupKey here is `commons` as the key of the cacheGroup
                  name: 'common',
                  chunks: 'all'
                },
                vendor: {
                    name:'vender'
                }
              }
        }
    }
}
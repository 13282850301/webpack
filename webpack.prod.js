const path = require('path');
const merge = require('webpack-merge');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common,{
    mode:'production',
    devtool: 'source-map',
    plugins: [
        new UglifyjsWebpackPlugin({
            sourceMap: true
        })
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
                    name:'vendor'
                }
              }
        }
    }
});
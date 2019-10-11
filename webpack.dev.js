const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports =merge(common, {
    mode:'development',
    plugins: [
    
        //热替换
        new webpack.HotModuleReplacementPlugin()      
    ],
    //代码原位置
    devtool: 'inline-source-map' ,
    devServer:{
        contentBase: path.join(__dirname,'dist'),
        port: 8888,
        compress: true,
        hot:true
    }
})
const webpackBaseConfig = require('./webpack.base.conf.js')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackDevConf = Object.assign({}, webpackBaseConfig)
webpackDevConf.plugins.push(
  new ExtractTextPlugin({
    filename: "serra.css",
    /*
       filename:  (getPath) => {
       return getPath('css/[name].css').replace('css/js', 'css');
     }, // */
    allChunks: true
  })
)
webpackDevConf.module.rules.push(
	{ test: /\.html$/, loader: 'html-loader' }
)
webpackDevConf.plugins.push(
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'example/index.html',
    inject: true
  })
)
module.exports = webpackDevConf

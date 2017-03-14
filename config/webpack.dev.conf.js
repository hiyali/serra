const webpackBaseConfig = require('./webpack.base.conf.js')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

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
module.exports = webpackDevConf

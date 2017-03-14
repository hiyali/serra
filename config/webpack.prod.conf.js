const webpackBaseConfig = require('./webpack.base.conf.js')
const webpack = require('webpack')
const stylusLoader = require("stylus-loader")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const webpackProdConf = Object.assign({}, webpackBaseConfig)
webpackProdConf.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    minimize: true,
    beautify: false,
    compress: {
      warnings      : false,
      sequences     : true,  // join consecutive statemets with the “comma operator”
      properties    : true,  // optimize property access: a["foo"] → a.foo
      dead_code     : true,  // discard unreachable code
      drop_debugger : true,  // discard “debugger” statements
      drop_console  : true,  // discard “console” statements
      unsafe        : true, // some unsafe optimizations (see below)
      conditionals  : true,  // optimize if-s and conditional expressions
      comparisons   : true,  // optimize comparisons
      evaluate      : true,  // evaluate constant expressions
      booleans      : true,  // optimize boolean expressions
      loops         : true,  // optimize loops
      unused        : true,  // drop unused variables/functions
      hoist_funs    : true,  // hoist function declarations
      hoist_vars    : true, // hoist variable declarations
      if_return     : true,  // optimize if-s followed by return/continue
      join_vars     : true,  // join var declarations
      cascade       : true,  // try to cascade `right` into `left` in sequences
      side_effects  : true,  // drop side-effect-free statements
      global_defs   : {},
      keep_fnames: true
    },
    output: {
      comments: false
    }
  })
)
webpackProdConf.plugins.push(
  new stylusLoader.OptionsPlugin({
    default: {
      use: [
        require('poststylus')([ 'autoprefixer', 'rucksack-css' ])
      ],
    },
  })
)
webpackProdConf.plugins.push(
  new ExtractTextPlugin({
    filename: "serra.min.css",
    /*
       filename:  (getPath) => {
       return getPath('css/[name].css').replace('css/js', 'css');
     }, // */
    allChunks: true
  })
)
webpackProdConf.output.filename = "[name].min.js"
module.exports = webpackProdConf

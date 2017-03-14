const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: {
    serra: "./src"
  },
  output: {
    filename: "[name].js",
		path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  resolve: {
    extensions: [".js", ".styl"]
  },
  module: {
		rules: [
			{
				test: /\.styl$/,
				use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [ 'css-loader', 'stylus-loader', ]
        })
			},
			{ test: /\.png$/, use: "file-loader" }
		]
  },
  plugins: [ ]
}

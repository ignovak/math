// const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './index.js',
  output: {
    path: './',
    filename: 'bundle.js'
  },
  watch: true,
  plugins: [
    // new ExtractTextPlugin('main.css')
  ],
  module: {
    loaders: [
       // for watching
      { test: /\.html/, loader: 'url-loader' },
      {
        test: /\.scss$/,
        // loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
        loader: 'style-loader!css-loader!sass-loader'
      },
      { test: /\.jpg/, loader: 'url-loader?limit=10000' },
      { test: /\.woff$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.woff2$/, loader: "url-loader?limit=10000&minetype=application/font-woff2" },
      { test: /\.ttf$/, loader: "file-loader" },
      { test: /\.eot$/, loader: "file-loader" },
      { test: /\.svg$/, loader: "file-loader" }
    ]
  }
}

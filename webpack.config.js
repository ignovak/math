// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const cssExtractor  = new ExtractTextPlugin('[name].css')

module.exports = {
  entry: './index.js',
  output: {
    path: './',
    filename: 'bundle.js'
  },
  watch: true,
  plugins: [
    // cssExtractor
  ],
  module: {
    loaders: [
       // for watching
      { test: /\.html/, loader: 'url' },
      {
        test: /\.scss$/,
        // loader: cssExtractor.extract('style', 'css!sass')
        loader: 'style!css!sass'
      },
      { test: /\.jpg/, loader: 'url?limit=10000' },
      { test: /\.png/, loader: 'url?limit=10000' },
      { test: /\.woff$/, loader: 'url?limit=10000&minetype=application/font-woff' },
      { test: /\.woff2$/, loader: 'url?limit=10000&minetype=application/font-woff2' },
      { test: /\.ttf$/, loader: 'file' },
      { test: /\.eot$/, loader: 'file' },
      { test: /\.svg$/, loader: 'file' }
    ]
  }
}

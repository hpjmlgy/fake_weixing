var path = require('path');
var webpack = require('webpack');

module.exports = {
  // or devtool: 'eval' to debug issues with compiled output:
  devtool: 'cheap-module-eval-source-map',
  entry: {
    common: [
      // necessary for hot reloading with IE:
      'eventsource-polyfill',
      // listen to code updates emitted by hot middleware:
      'webpack-hot-middleware/client',
      // your code:
      // './src/index',
      // './src/mbck'
      // "./src/mbck": './src/mbck'
    ],
    index: './src/index',
    mbck: './src/mbck'
  },


  output: {
    path: path.join(__dirname, 'dist'),
    // filename: 'bundle.js',
    filename: "[name].bundle.js",
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'src')
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      loader: 'style!css'
    }, {
      test: /\.(png|jpg)$/,
      exclude: /node_modules/,
      loader: 'url-loader'
    }]
  }
};
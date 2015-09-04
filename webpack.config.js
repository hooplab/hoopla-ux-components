var path = require('path');
var webpack = require('webpack');
var exec = require('sync-exec');

var __CURRENT_COMMIT__ = JSON.stringify(exec("git log -n 1 --pretty='%h'").stdout.trim());

module.exports = {
  devtool: 'eval',
  entry: {
    components: [
      './lib/HooplaComponents'
    ],
    app: [
      'webpack-dev-server/client?http://localhost:9000',
      'webpack/hot/only-dev-server',
      './app/index'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"'
      },
      '__CURRENT_COMMIT__': __CURRENT_COMMIT__
    }),
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ]
  }
};

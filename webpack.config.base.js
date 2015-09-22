var webpack = require('webpack');
var path = require('path');

var sassPaths = require('node-neat').includePaths.map(function(sassPath) {
  return "includePaths[]=" + sassPath;
}).join('&');

sassPaths += "&includePaths[]="+path.join(__dirname, 'node_modules/font-awesome/scss');

module.exports = {
  entry: {
    components: [
      './src/HooplaComponents'
    ],
    app: [
      'webpack-dev-server/client?http://localhost:9000',
      'webpack/hot/only-dev-server',
      './app/index'
    ]
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass?' + sassPaths
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
  },
  resolve: {
    extensions: ['', '.js']
  }
};

var path = require('path');
var webpack = require('webpack');
var exec = require('sync-exec');

var __CURRENT_COMMIT__ = JSON.stringify(exec("git log -n 1 --pretty='%h'").stdout.trim());

var sassPaths = require('node-neat').includePaths.map(function(sassPath) {
  return "includePaths[]=" + sassPath;
}).join('&');

sassPaths += "&includePaths[]="+path.join(__dirname, 'node_modules/font-awesome/scss');

module.exports = {
  devtool: 'eval',
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
  output: {
    path: path.join(__dirname, 'lib'),
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
        loaders: ['react-hot', 'babel']
      },
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
  }
};

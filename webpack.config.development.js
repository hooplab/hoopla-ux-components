var path = require('path');
var webpack = require('webpack');
var baseConfig = require('./webpack.config.base');
var exec = require('sync-exec');

var config = Object.create(baseConfig);
var __CURRENT_COMMIT__ = JSON.stringify(exec("git log -n 1 --pretty='%h'").stdout.trim());

config.devtool = 'eval';

config.plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development'),
    '__CURRENT_COMMIT__': __CURRENT_COMMIT__
  }),
];

config.output = {
  path: path.join(__dirname, 'lib'),
  filename: '[name].bundle.js',
  publicPath: '/static/'
};

config.module.loaders.push({
  test: /\.js$/,
  loaders: ['babel'],
  exclude: /node_modules/
});

module.exports = config;

var webpack = require('webpack');
var baseConfig = require('./webpack.config.base');
var path = require('path');
var exec = require('sync-exec');

var config = Object.create(baseConfig);
var __CURRENT_COMMIT__ = JSON.stringify(exec("git log -n 1 --pretty='%h'").stdout.trim());

config.devool = 'source-map';

config.plugins = [
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
    '__CURRENT_COMMIT__': __CURRENT_COMMIT__
  })
];

config.output = {
  path: path.join(__dirname, 'lib'),
  filename: '[name].bundle.js',
  libraryTarget: 'umd'
};

config.module.loaders.push({
  test: /\.js$/,
  loaders: ['babel']
});

module.exports = config;

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  stats: {
    colors: true
  }
}).listen(9000, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at http://localhost:9000');
});

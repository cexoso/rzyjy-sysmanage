var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config.debug');
var express = require("express");
var WebpackDevServer = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  quiet: false,
  historyApiFallback: true
});
WebpackDevServer.app.use(express.static(__dirname + '/'));
WebpackDevServer.listen(3000, '0.0.0.0', function (err, result) {
  if (err) {
    return console.log(err);
  }
  console.log('Listening at http://localhost:3000/');
});

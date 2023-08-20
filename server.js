'use strict';

require('babel-core/register');

let path = require('path');
let webpack = require('webpack');

if (process.env.NODE_ENV === 'production') {
  // Production mode uses an Express server

  let express = require('express');
  let app = express();
  let static_path = path.join(__dirname, 'build');

  app
    .use(express.static(static_path))

    .get('/', function(req, res) {
      res.sendFile('index.html', {
        root: static_path
      });
    })

    .listen(process.env.PORT || 8080, function(err) {
      if (err) console.error(err);

      console.log('Listening at localhost:' + (process.env.PORT || 8080));
    });
} else {
  // Development mode uses a webpack-dev-server

  let config = require(path.resolve(__dirname, 'webpack.config.babel')).default;
  let WebpackDevServer = require('webpack-dev-server');

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath
  }).listen(3000, 'localhost', function(err) {
    if (err) console.error(err);

    console.log('Listening at localhost:3000');
  });
}

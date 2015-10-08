'use strict';

var path = require('path');

var config = {
  entry: [path.resolve(__dirname, 'static/js/tnris.js')],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
    {
      test: /\.css$/, // Only .css files
      loader: 'style!css' // Run both loaders
    },
    {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }]
  }
};

module.exports = config;

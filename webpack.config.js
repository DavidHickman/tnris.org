'use strict';

var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  entry: {
    '2015forum': path.resolve(__dirname, 'static/js/2015forum.js'),
    'contact': path.resolve(__dirname, 'static/js/contact-forms/app.js'),
    'data-download': path.resolve(__dirname, 'static/js/data-download/app.js'),
    'site': path.resolve(__dirname, 'static/js/site.js'),
    'tnris': path.resolve(__dirname, 'static/js/tnris.js'),
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css')
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
        ]
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css")
  ]
};

module.exports = config;

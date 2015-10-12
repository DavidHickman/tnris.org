'use strict';

var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

var config = {
  entry: {
    '2015forum': path.resolve(__dirname, 'static/js/2015forum.js'),
    'contact': path.resolve(__dirname, 'static/js/contact-forms/app.js'),
    'data-download': path.resolve(__dirname, 'static/js/data-download/app.js'),
    'site': path.resolve(__dirname, 'static/js/site.js'),
    'tnris': path.resolve(__dirname, 'static/js/tnris.js'),
    'vendor': [
      'jquery',
      'bootstrap',
      'bootstrap/dist/css/bootstrap.min.css',
      'holderjs',
      'jquery-zclip/jquery.zclip.js',
      'lodash',
      'swfobject',
      'twentytwenty/js/jquery.event.move.js',
      'twentytwenty/js/jquery.twentytwenty.js',
      'twentytwenty/css/twentytwenty.css',
    ]
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js'
  },
  resolve: {
      root: [path.join(__dirname, 'bower_components')]
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
        test: /\.(eot|ttf|woff2?)$/i,
        loader: 'file',
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css!sass')
      },
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    )
  ]
};

module.exports = config;

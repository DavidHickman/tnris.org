'use strict';

var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var glob = require('glob');
var includes = require('lodash.includes');
var webpack = require('webpack');


var staticFiles = glob.sync(
  'static/**/*', {
    mark: true
  }
).filter(function (path) {
  return path.slice(-1) !== '/' && !includes(path, '/js/');
});

var config = {
  entry: {
    'static': staticFiles,
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
    root: [
      path.join(__dirname, 'bower_components'),
    ],
    alias: {
      'static': './static'
    }
  },
  module: {
    loaders: [
      {
        test: /LICENSE/i,
        loader: 'file?name=[path][name]'
      },
      {
        test: /\/static\/(?!js)/i,
        loader: 'file?name=[path][name].[ext]'
      },
      {
        test: /\/bower_components\/.+\.svg/i,
        loader: 'file?name=[path][name].[ext]'
      },
      {
        test: /\.(eot|ttf|woff2?)$/i,
        loader: 'file',
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css')
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
    ),
  ]
};

module.exports = config;

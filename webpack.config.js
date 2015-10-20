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

var processedHTML = glob.sync(
  '.tmp/**/*.html', {
    mark: true
  }
);

var config = {
  entry: {
    '2015forum': [path.resolve(__dirname, 'static/js/2015forum.js')],
    'contact-forms': [path.resolve(__dirname, 'static/js/contact-forms/app.js')],
    'data-download': [path.resolve(__dirname, 'static/js/data-download/app.js')],
    'processed': processedHTML,
    'static': staticFiles,
    'site': [path.resolve(__dirname, 'static/js/site.js')],
    'webfontloader': ['file?name=webfontloader.js!webfontloader'],
    'xdomain': ['file?name=xdomain.js!xdomain'],
  },
  output: {
    path: path.resolve(__dirname, '.dist'),
    filename: '[name].bundle.js'
  },
  resolve: {
    root: [
      path.join(__dirname, 'bower_components'),
      path.join(__dirname, '.tmp'),
    ],
    alias: {
      'static': './static',
      '.tmp': './.tmp',
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
        test: /\/.tmp\/.+\.html/i,
        loader: 'file?context=.tmp/&name=[path][name].[ext]',
      },
      {
        test: /\/partials\/.+\.html/i,
        loader: 'file?name=[path][name].[ext]'
      },
      {
        test: /\.(eot|ttf|woff2?)$/i,
        loader: 'file',
      },
      {
        test: /\.swf$/i,
        loader: 'file?name=[path][name].[ext]',
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
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'swfobject': 'swfobject',
    })
  ]
};

module.exports = config;

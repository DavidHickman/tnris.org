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
    '2015forum': path.resolve(__dirname, 'static/js/2015forum.js'),
    'contact-forms': path.resolve(__dirname, 'static/js/contact-forms/app.js'),
    'contact-forms-vendor': [
      'angular',
      'angular-recaptcha',
      'angular-animate',
      'ng-file-upload',
    ],
    'data-download': path.resolve(__dirname, 'static/js/data-download/app.js'),
    'data-download-vendor': [
      'angular',
      'angular-collection',
      'angular-sanitize',
      'angular-ui-router',
      'angular-ui-select',
      'angulartics/dist/angulartics.min.js',
      'angulartics/dist/angulartics-ga.min.js',
      'leaflet-plugins/layer/tile/Bing.js'
    ],
    'static': staticFiles,
    'site': path.resolve(__dirname, 'static/js/site.js'),
    'tnris': path.resolve(__dirname, 'static/js/tnris.js'),
    'vendor': [
      'jquery',
      'bootstrap',
      'bootstrap/dist/css/bootstrap.min.css',
      'imports?this=>window!holderjs',
      'jquery-zclip/jquery.zclip.js',
      'lodash',
      'swfobject',
      'twentytwenty/js/jquery.event.move.js',
      'twentytwenty/js/jquery.twentytwenty.js',
      'twentytwenty/css/twentytwenty.css',
    ],
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
        test: /\/partials\/.+\.html/i,
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
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    })
  ]
};

module.exports = config;

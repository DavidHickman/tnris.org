#!/usr/bin/env node
/* 
  Generates sitemap of DataDownload county and quad pages
  Relies on data-download-areas.json, which is created in tnris/data-download
*/

var fs = require('fs');
var extend = require('extend');
var path = require('path');
var swig = require('swig');
var areas = require('./data-download-areas.json');

var templatePath = path.join(__dirname, 'sitemap-datadownload.xml.swig');
var template = swig.compileFile(templatePath);

var defaults = {
  output: path.join(__dirname, 'sitemap-datadownload.xml')
};

function generate(options, cb) {
  var opts = extend({}, defaults, options);
  var context = {
    areas: areas,
    modified_date: new Date()
  };

  fs.writeFile(opts.output, template(context), function (err) {
      if (err) {
        throw err;
      }
      if (typeof cb === 'function') {
        cb();
      }
    });
  }

module.exports = generate;

if (require.main === module) {
  var opts = extend({}, defaults);

  //allow passing of output file by command-line argument
  if (process.argv.length > 2) {
    opts.output = process.argv[2];
  }

  generate(opts, function() {
    console.log("Wrote datadownload sitemap to " + opts.output);
    process.exit();
  });
}


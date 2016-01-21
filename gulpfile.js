'use strict';

var _ = require('lodash');
var clog = require('clog');
var debug = require('debug')('tnris-site');
var del = require('del');
var each = require('metalsmith-each');
var extend = require('extend');
var fs = require('fs');
var glob = require('glob');
var gulp = require('gulp');
var gulp_front_matter = require('gulp-front-matter');
var gulpsmith = require('gulpsmith');
var gulpSwig = require('gulp-swig');
var markdown = require('metalsmith-markdown');
var marked = require('marked');
var metadata = require('metalsmith-metadata');
var paginate = require('metalsmith-paginate');
var path = require('path');
var permalinks = require('metalsmith-permalinks');
var rename = require('gulp-rename');
var replace = require('metalsmith-replace');
var scapegoat = require('scapegoat');
var sitemap = require('metalsmith-sitemap');
var swig = require('swig');
var templates = require('metalsmith-templates');
var trim = require('lodash.trim');
var vinylPaths = require('vinyl-paths');
var winston = require('winston');
var webpack = require('webpack');
var WebpackDevServer = require("webpack-dev-server");

var autodate = require('./metalsmith-autodate');
var based = require('./metalsmith-based');
var collector = require('./metalsmith-collector');
var crossref = require('./metalsmith-crossref');
var csv = require('./metalsmith-csv');
var metadata = require('metalsmith-metadata');

var generateWebpackConfig = require('./generate-webpack-config');

var production = false;
var devServerPort = 8000;

var dirs = {
  dist: './.dist',
  content: './content',
  scss: './scss',
  static: 'static',
  tmp: './.tmp',
  templates: './templates',
  sitemap: './sitemap',
};

dirs.markdown = path.join(dirs.content, 'markdown');
dirs.bower = path.join(dirs.static, 'bower_components');

var paths = {
  catalog: dirs.content + '/data-catalog.csv',
  content: dirs.content + '/**/*',
  javascript: [dirs.static + '/**/*.js', '!' + path.join(dirs.bower, '**/*.js')],
  markdown: dirs.markdown + '/**/*.md',
  scss: dirs.scss + '/**/*.scss',
  static: [dirs.static + '/**/*', '!' + path.join(dirs.bower, 'bootstrap-sass-official/**'), '!' + path.join(dirs.bower, 'bourbon/**')],
  templates: dirs.templates + '/**/*',
  variables: dirs.content + '/variables.yaml'
};

winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, {colorize: true});
winston.add(winston.transports.File, {
  filename: path.join(dirs.dist, '.build_errors'),
  json: false
});

// turn off caching swig templates - so changes will propagate if re-run by a
// watch task
swig.setDefaults({
  cache: false,
  loader: swig.loaders.fs(__dirname + '/templates'),
  locals: {
    validateLink: validateLink
  }
});

swig.setFilter('find', function (collection, key) {
  return _.find(collection, key);
});

// patch swig groupBy filter so it doesn't mutate lists - this is a temporary
// workaround until patch makes its way into a swig release.
// See: https://github.com/paularmstrong/swig/pull/524
swig.setFilter('groupBy', function (input, key) {
  if (!_.isArray(input)) {
    return input;
  }
  var out = {};

  _.each(input, function (value) {
    if (!value.hasOwnProperty(key)) {
      return;
    }

    var keyname = value[key],
      newValue = _.cloneDeep(value);
    delete newValue[key];

    if (!out[keyname]) {
      out[keyname] = [];
    }

    out[keyname].push(newValue);
  });

  return out;
});

swig.setFilter('sortBy', function (input, key) {
  return _.sortBy(input, key);
});

swig.setFilter('urlize', function(input) {
  return urlize(input);
});

function parseCSV(options) {
  var name = options.name;
  var path = options.path;
  var urlDir = options.urlDir || options.name;
  var template = options.template;
  var filenameKeys = options.filenameKeys;
  var splitKeys = options.splitKeys || [];

  return csv(path, function parser (data, files, metalsmith) {
    metalsmith.data[name] = metalsmith.data[name] || [];

    var obj = metalsmith.data[name];

    _.map(splitKeys, function(key) {
      if (data[key]) {
        data[key] = data[key]
          .split(',')
          .map(function (s) {
            return s.trim();
          });
      }
    });

    var urlKeys = _.map(filenameKeys, function(key) {
      var urlized = urlize(data[key]);
      data['urlized_' + key] = urlized;
      return urlized;
    });

    data.filename = [urlDir].concat(urlKeys).join('/') + '.md';
    data._collector_ignore = true;

    var file = files[data.filename];
    if (file) {
      file = extend(file, data);
    } else {
      file = extend(data, {
        template: template,
        contents: new Buffer('')
      });
    }
 
    if (options.contentsKey) {
      file.contents = file[options.contentsKey];
    }
    if (options.titleKey) {
      file.title = file[options.titleKey];
    }

    //add a stats object to each file based on the stats of the source csv file
    //the stats objects are used by the sitemap plugin
    file.stats = fs.statSync(path);
    debug(file.stats);

    // trim trailing '\r' off of keys or values - this seems to be some
    // intermittent issue with Google Docs
    Object.keys(file).forEach(function (key) {
      if(typeof file[key] === 'string') {
        file[key.trim('\r')] = file[key].trim('\r');
      }
    });

    if (options.additional) {
      file = options.additional(file);
    }

    if (files[data.filename]) {
      errors.breaking("Page '" + data.filename + "' generated from " + options.path + ", but it already exists. This indicates a likely url collision and/or overwriting an existing page.");
    }
    files[data.filename] = file;

    obj.push(file);
  });
}

function urlize(str) {
  return str.trim().toLowerCase().replace(/[\(\)\']/g, '').replace(/\W/g, '-').replace(/-+/g, '-');
}

function urlPath(str) {
  return str.replace(path.sep, '/');
}

function validateLink(str, crossref, filename) {
  if (!str) {
    errors.breaking("Invalid link: from " + filename);
    return '#';
  }

  var trimsplit = trim(str, '/').split('#');
  var link = trimsplit[0],
      anchor = trimsplit[1];

  var ref = urlPath(link);
  if (!crossref[ref]) {
    errors.breaking("Invalid link: " + link + " (" + ref + ") from " + filename);
    return '#';
  }

  var url = crossref[ref];
  if (anchor) {
    url += '#' + anchor;
  }

  return url;
}

var markedOptions = {
  renderer: (function () {
    var renderer = new marked.Renderer();
    var re = /^(.*:.*|\/\/)/;

    function macroifyLink (originalFunc) {
      return function (href, title, text) {
        if (!href.match(re)) {
          href = "{{m.link('" + href + "', path + '.md')}}";
        }
        return originalFunc.apply(renderer, [href, title, text]);
      };
    }

    renderer.link = macroifyLink(renderer.link);
    renderer.image = macroifyLink(renderer.image);

    return renderer;
  }()),
  smartypants: false
};

var errors = function () {
  var count = 0;
  return {
    breaking: function log (message) {
      winston.log('error', message);
      this.count++;
    },
    count: count
  }
}();


gulp.task('default', ['watch', 'webserver']);
gulp.task('dev-prod', ['dist', 'watch', 'webserver']);

gulp.task('watch', function () {
  gulp.watch(paths.content, ['dist-metal']);
  gulp.watch(paths.templates, ['dist-metal']);
});

gulp.task('webserver', ['webpack-dev-server']);

gulp.task('dist', ['dist-production']);
gulp.task('dist-dev', ['webpack-dev', 'dist-sitemap']);
gulp.task('dist-production', ['webpack-production', 'dist-sitemap', 'static-to-root']);

gulp.task('dist-fonts', ['webpack']);

gulp.task('dist-metal', function () {
  return gulp.src([
    paths.markdown,
    paths.variables
  ])
    .pipe(gulp_front_matter()).on("data", function(file) {
        _.assign(file, file.frontMatter);
        delete file.frontMatter;
      })
    .pipe(
      gulpsmith()
        .use(parseCSV({
          name: 'catalog',
          path: 'content/data-catalog.csv',
          urlDir: 'data-catalog/entry',
          template: 'data-catalog-entry.html',
          filenameKeys: ['name'],
          splitKeys: ['tags'],
          contentsKey: 'description',
          titleKey: 'name',
          additional: function (file) {
            var markdownFields = [
              'description',
              'short_description',
            ];

            _.each(markdownFields, function(markdownField) {
              file[markdownField] = marked(file[markdownField], markedOptions);
            });

            var imageName = file.urlized_name.replace(/-/g, '_');
            var base = 'images/data-catalog/entry/' + imageName;

            file['urlized_category'] = urlize(file.category);

            var imageTypes = [
              {
                name: 'thumb',
                suffix: '_th',
              }, {
                name: 'overview_image',
                suffix: '_overview',
              }, {
                name: 'status_map',
                suffix: '_status',
              }, {
                name: 'detail_image',
                suffix: '_detail',
              }, {
                name: 'urban_image',
                suffix: '_urban',
              }, {
                name: 'natural_image',
                suffix: '_natural',
              }
            ];

            _.each(imageTypes, function (imageType) {
              var filename = base + imageType.suffix + '.jpg';

              var staticPath = dirs.static + '/' + filename;
              var exists = fs.existsSync(staticPath);

              if (exists) {
                file[imageType.name + '_url'] = filename;
              }
            });

            if (file.supplemental_report === 'T') {
              var supplemental_report_file = imageName + '_supplementalreports.zip';
              file.supplemental_report_url = 'https://tnris-datadownload.s3.amazonaws.com/datacatalog/supplemental_reports/' + supplemental_report_file;
            }

            if (file.tile_index) {
              if (file.tile_index === 'T') {
                var tile_index_file = imageName + '_tileindex.zip';
                file.tile_index_url = 'https://tnris-datadownload.s3.amazonaws.com/datacatalog/tile_index/' + tile_index_file;
              } else if (file.tile_index.toLowerCase() === 'lidar') {
                file.tile_index_url = 'https://tnris-datadownload.s3.amazonaws.com/d/tnris-lidar/state/tx/tnris-lidar_tx.zip';
              }
            }

            if (file.license) {
              if (file.license === 'CC0') {
                file.license_text = 'Public Domain (Creative Commons CC0)';
                file.license_url = 'https://creativecommons.org/publicdomain/zero/1.0/';
              } else if (file.license !== 'NA') {
                file.license_text = file.license;
              }
            }

            if (!file['thumb_url']) {
              errors.breaking("Could not find required thumbnail image for data catalog entry: " + imageName);
            }

            if (!file['overview_image_url'] && !file['detail_image_url']) {
              errors.breaking("Could not find overview or detail image for data catalog entry: " + imageName);
            }

            return file;
          }
        }))
        .use(parseCSV({
          name: 'training',
          path: 'content/training.csv',
          template: 'training-entry.html',
          filenameKeys: ['class_title', 'url_date'],
          contentsKey: 'description',
          titleKey: 'class_title'
        }))
        .use(parseCSV({
          name: 'forumtraining',
          path: 'content/forum-training.csv',
          template: '2015-forum-training-entry.html',
          filenameKeys: ['class_title'],
          contentsKey: 'description',
          titleKey: 'class_title',
          additional: function (file) {
            file.bodyClass = '_2015-forum-training';
            return file;
          }
        }))
        .use(metadata({
          variables: 'variables.yaml'
        }))
        .use(each(function(file, filename) {
          file.filename = filename;
          file.preserved = filename.slice(0, -1 * path.extname(filename).length);
          file.id = file.preserved.replace(/\//g, '-');
          if (file.id[0].match(/\d/)) {
            file.id = '_' + file.id;
          }
        }))
        .use(autodate('YYYY-MM-DD'))
        .use(collector({
          pattern: '*.md',
          ignore: ['training']
        }))
        .use(paginate({
          perPage: 10,
          path: 'updates'
        }))
        .use(each(function(file) {
          // run metadata fields through markdown renderer for link processing
          var markdownFields = [
            'updates',
          ];

          _.each(markdownFields, function(markdownField) {
            if (file[markdownField]) {
              if (Array.isArray(file[markdownField])) {
                file[markdownField] = file[markdownField].map(function (str) {
                  return marked(str, markedOptions);
                });
              } else {
                file[markdownField] = marked(file[markdownField], markedOptions);
              }
            }
          });
        }))
        .use(each(function(file) {
          file.contents = '{%- import "_macros.html" as m -%}\n' + file.contents;
        }))
        .use(markdown(markedOptions))
        .use(each(function(file) {
          file.urlEnd = file.withoutDate || file.preserved;
        }))
        .use(permalinks({
          pattern: ':collection/:date/:urlEnd',
          date: 'YYYY-MM-DD'
        }))
        .use(crossref({
          include: {
            'data-download': '/data-download/'
          },
          includeDirs: {
            'static/documents': 'static/documents',
            'static/images': 'static/images'
          }
        }))
        .use(based())
        .use(replace({
          contents: function(contents) {
            var str = contents.toString()
              .replace(/{{.+?}}/g, scapegoat.unescape)
              .replace(/{#.+?#}/g, scapegoat.unescape)
              .replace(/{%.+?%}/g, scapegoat.unescape);
            return new Buffer(str);
          }
        }))
        .use(function (files, metalsmith, done) {
          // combine news and geographic information office into an updates stream
          var updates = metalsmith.data.news.concat(metalsmith.data.geographic_information_office);
          metalsmith.data.updates = _.sortBy(updates, 'date').reverse();
          done();
        })
        .use(templates({
          engine: 'swig',
          inPlace: true
        }))
        .use(templates({
          engine: 'swig'
        }))
        .use(sitemap({
          hostname: 'https://tnris.org',
          output: 'sitemap-main.xml'
        }))
        .use(function (files, metalsmith, done) {
          if (errors.count > 0) {
            clog.error("There were " + errors.count + " errors with this build. You'll need to fix them before continuing.");
            process.exit(1);
          } else {
            clog.info('Build is clean! Hurray!');
          }
          done();
        })
      )
    .pipe(gulp.dest(dirs.tmp));
});

gulp.task('dist-sitemap', ['dist-metal', 'sitemap-datadownload', 'sitemap-index'], function () {
  var sitemap_file = path.join(dirs.tmp, 'sitemap*.xml');
  return gulp.src(sitemap_file)
    .pipe(gulp.dest(dirs.dist));
});

gulp.task('sitemap-datadownload', function() {
  gulp.src(path.join(dirs.sitemap, 'sitemap-datadownload.xml'))
    .pipe(gulp.dest(dirs.tmp));
});

gulp.task('sitemap-index', function() {
  var opts = {
    data: {
      modified_date: new Date()
    }
  };
  return gulp.src(path.join(dirs.sitemap, 'sitemap-index.xml.swig'))
    .pipe(gulpSwig(opts))
    .pipe(rename('sitemap-index.xml'))
    .pipe(gulp.dest(dirs.tmp));
});

gulp.task('static-to-root', ['webpack-production'], function() {
  var files = glob.sync(path.join(dirs.dist, 'static/*'), {nodir: true});

  return gulp.src(files)
    .pipe(gulp.dest(dirs.dist));
});

gulp.task('clean', ['clean-dist']);

gulp.task('clean-dist', function() {
  return gulp.src([dirs.dist, dirs.tmp])
    .pipe(vinylPaths(del));
});


function checkWebpackErrors (err, stats) {
  if (err) {
    errors.breaking(err);
    process.exit(1);
  } else if (stats.hasErrors()) {
    errors.breaking(stats.toJson().errors);
    process.exit(1);
  }
}

gulp.task('webpack-production', ['dist-metal'], function(callback) {
  process.env.NODE_ENV = 'production';

  var prodWebpackConfig = generateWebpackConfig();
  prodWebpackConfig.debug = false;

	prodWebpackConfig.plugins = prodWebpackConfig.plugins.concat(
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.UglifyJsPlugin()
	);

  webpack(prodWebpackConfig, function(err, stats) {
    checkWebpackErrors(err, stats);
    callback();
  });
});


gulp.task('webpack-dev', ['dist-metal'], function(callback) {
  process.env.NODE_ENV = 'development';

  var devWebpackConfig = generateWebpackConfig();
  devWebpackConfig.devtool = "sourcemap";
  devWebpackConfig.debug = true;

  webpack(devWebpackConfig, function(err, stats) {
    checkWebpackErrors(err, stats);
    callback();
  });
});

gulp.task('webpack-dev-server', ['dist-metal'], function(callback) {
  process.env.NODE_ENV = 'development';

  var devWebpackConfig = generateWebpackConfig();
	devWebpackConfig.devtool = "eval";
  devWebpackConfig.debug = true;
  devWebpackConfig.unsafeCache = ['.tmp'];

  Object.keys(devWebpackConfig.entry).forEach(function (key) {
    devWebpackConfig.entry[key].unshift('webpack-dev-server/client?http://localhost:' + devServerPort);
  });

	// Start a webpack-dev-server
	new WebpackDevServer(webpack(devWebpackConfig), {
		contentBase: devWebpackConfig.output.path,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    stats: {
			colors: true
		}
	}).listen(devServerPort, "localhost", function(err) {
		if(err) {
      errors.breaking(err);
      throw new gutil.PluginError("webpack-dev-server", err)
    };
		clog.info("webpack dev server started: http://localhost:" + devServerPort + "/");
	});
});

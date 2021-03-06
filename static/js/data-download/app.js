/*eslint "no-undef": false*/
/*global angular*/
'use strict';

require('angular');
require('angular-collection');
require('angular-sanitize');
require('angular-ui-router');
require('angular-ui-select');
require('angulartics/dist/angulartics.min.js');
require('angulartics/dist/angulartics-ga.min.js');
require('leaflet-plugins/layer/tile/Bing.js');


// css
require('selectize/dist/css/selectize.bootstrap3.css');
require('angular-ui-select/dist/select.css');
require('../../../scss/data-download.scss');

// partials
require('./partials/downloadMap.html');
require('./partials/mapControl.html');
require('./partials/resourceGroup.html');
require('./partials/results.html');

var _counties = require('./counties');

require('../config');

// Amend any incoming hash links to use hash-bang
var loc = window.location.href;
if (loc.indexOf('#') !== -1 && loc.indexOf('#!') === -1) {
  window.location = loc.replace('#', '#!');
}

angular.module('dataDownloadApp', [
    'ConfigApp',
    'angulartics',
    'angulartics.google.analytics',
    'ngCollection',
    'ngSanitize',
    'ui.router',
    'ui.select'
  ])
  .constant('PARTIALS_PATH', '../static/js/data-download/partials/')
  .constant('COUNTIES', _counties)
  .config(function ($analyticsProvider) {
    $analyticsProvider.withAutoBase(true);
    //Turn off automatic pageview tracking and manually track after page is rendered
    $analyticsProvider.virtualPageviews(false);
  })
  .run(function ($rootScope, $timeout, $analytics) {
    $rootScope.$on('$stateChangeSuccess', function () {
      //Track the pageview after a timeout so that it happens after the current $digest
      $timeout(function() {
        $analytics.pageTrack();
      });
    });
  })
  .config(function($stateProvider, $urlRouterProvider, $sceDelegateProvider, $locationProvider, PARTIALS_PATH) {
    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads
      'self',
      // Allow loading from our s3 bucket
      '//s3.amazonaws.com/tnris-datadownload/**'
    ]);

    // Use hash-bang #! URLs for SEO
    $locationProvider.hashPrefix('!');

    // For any unmatched url, redirect to /statewide
    $urlRouterProvider.otherwise("/statewide");

    var resultsTemplate = PARTIALS_PATH + 'results.html';

    $stateProvider
      .state('statewide', {
        url: "/statewide",
        templateUrl: resultsTemplate,
        controller: function($scope, $rootScope, DataService) {
          $scope.category = 'Statewide';
          $rootScope.pageTitle = 'Texas Statewide';

          DataService.getAreaDatasets('state', 'texas')
            .then(function (resourceGroups) {

              // for splitting statewide resource groups into columns
              var groupedGroups = _(resourceGroups)
                .groupBy(function(g, index) {
                  if (index < 4) {
                    return 0;
                  } else if (index < 7) {
                    return 1;
                  } else {
                    return 2;
                  }
                })
                .values()
                .value();

              $scope.areaDatasets = [
                {
                  'area': 'statewide',
                  'groups': groupedGroups
                }
              ];
            });
        }
      })
      .state('county', {
        url: "/county/:name",
        templateUrl: resultsTemplate,
        controller: function($scope, $rootScope, $stateParams, $filter, DataService, MapService, CountyService, HistoricalAerialsService) {
          $scope.category = 'County';
          $scope.name = _.clone($stateParams.name);
          $rootScope.pageTitle = $filter('titleize')($scope.name) + ' County';

          var fips = CountyService.getFipsForName($scope.name);
          HistoricalAerialsService.getYearsForCounty(fips)
            .then(function (years) {
              $scope.aerialsYears = years;
              return years;
            });

          DataService.getAreaDatasets('county', $scope.name)
            .then(function (resourceGroups) {
              $scope.areaDatasets = [
                {
                  'area': 'county',
                  'groups': resourceGroups
                }
              ];
            });
        }
      })
      .state('quad', {
        url: "/quad/:name",
        templateUrl: resultsTemplate,
        controller: function($scope, $rootScope, $stateParams, $collection, $filter, DataService, MapService) {
          $scope.category = 'Quad';
          $scope.name = $stateParams.name;

          $rootScope.pageTitle = $filter('titleize')($scope.name) + ' Quad';

          $scope.areaDatasets = [{
              'area': 'quad',
              'groups': []
            }, {
              'area': 'doqq',
              'groups': [0, 1, 2, 3]
            }
          ];

          DataService.getAreaDatasets('quad', $scope.name)
            .then(function (resourceGroups) {
              $scope.areaDatasets[0].groups = resourceGroups;
            });

          _.map(['NW','NE','SW','SE'], function (corner, index) {
            return DataService.getAreaDatasets('qquad', $scope.name + '|' + corner)
              .then(function (resourceGroups) {
                $scope.areaDatasets[1].groups[index] = resourceGroups[0];
              });
          });
        }
      });
  });


// include angular bits
require('./services/BrowserService');
require('./services/CartoService');
require('./services/DataService');
require('./services/MapService');
require('./services/CountyService');
require('./services/HistoricalAerialsService');
require('./directives/mapControl');
require('./directives/downloadMap');
require('./directives/resourceGroup');
require('./filters/titleize');
require('./controllers/dataDownloadCtrl');

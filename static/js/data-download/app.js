var dataDownloadApp = function () {
  'use strict';

  // Amend any incoming hash links to use hash-bang
  var loc = window.location.href;
  if (loc.indexOf('#') !== -1 && loc.indexOf('#!') === -1) {
    window.location = loc.replace('#', '#!');
  }

  var dataDownloadApp = angular.module('dataDownloadApp', [
    'angulartics',
    'angulartics.google.analytics',
    'ngCollection',
    'ngSanitize',
    'ui.router',
    'ui.select'
  ])
    .factory('CartoService', CartoService)
    .factory('DataService', DataService)
    .factory('MapService', MapService)
    .factory('CountyService', CountyService)
    .factory('HistoricalAerialsService', HistoricalAerialsService)
    .directive('downloadMap', downloadMap)
    .directive('resourceGroup',  resourceGroup)
    .filter('titleize',  titleizeFilter)
    .constant('CARTODB_CONFIG', {
      account: 'tnris',
      county: {
        table: 'county_extended',
        nameField: 'name',
        viz_id: '51ed411a-bc54-11e4-941d-0e4fddd5de28'
      },
      quad: {
        table: 'tnris_quad_wgs84',
        nameField: 'quadname',
        viz_id: '6d6032fe-a8c2-11e4-b1cd-0e4fddd5de28'
      }
    })
    .constant('MAP_IMAGE_URL_PRE', '//s3.amazonaws.com/tnris-datadownload/')
    .constant('DOWNLOAD_URL_PRE', '//tg-twdb-gemss.s3.amazonaws.com')
    .constant('DOWNLOAD_API_PRE', '//tnris.org/data-download/api/v1')
    .constant('HISTORICAL_AERIALS_URL', '//tnris.org/historical-aerials/api/v1')
    .constant('PARTIALS_PATH', '../js/data-download/partials/')
    .constant('COUNTIES', _counties)
    .controller('dataDownloadCtrl', dataDownloadCtrl)
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


  return dataDownloadApp;
}();

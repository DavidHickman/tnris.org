/*eslint "no-undef": false*/
/*global angular*/
var dataDownloadApp = function () {
  'use strict';

  // Amend any incoming hash links to use hash-bang
  var loc = window.location.href;
  if (loc.indexOf('#') !== -1 && loc.indexOf('#!') === -1) {
    window.location = loc.replace('#', '#!');
  }

  var app = angular.module('dataDownloadApp', [
    'ConfigApp',
    'angulartics',
    'angulartics.google.analytics',
    'ngCollection',
    'ngSanitize',
    'ui.router',
    'ui.select'
  ])
    .factory('BrowserService', BrowserService)
    .factory('CartoService', CartoService)
    .factory('DataService', DataService)
    .factory('MapService', MapService)
    .factory('CountyService', CountyService)
    .factory('HistoricalAerialsService', HistoricalAerialsService)
    .directive('mapControl', mapControl)
    .directive('downloadMap', downloadMap)
    .directive('resourceGroup',  resourceGroup)
    .filter('titleize',  titleizeFilter)
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
            $rootScope.pageTitle = 'Texas Statewide';
            $scope.category = 'Statewide';

            DataService.getAreaDatasets({'type': 'state', 'name': 'texas'})
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
            $scope.name = _.clone($stateParams.name);
            $rootScope.pageTitle = $filter('titleize')($scope.name) + ' County';
            $scope.category = 'County';
            $scope.code = undefined;

            DataService.getArea({'type': 'county', 'name': $scope.name})
              .then(function (area) {
                $scope.code = area.code;
              })

            $scope.$watch('code', function (code) {
              if (code) {
                HistoricalAerialsService.getYearsForCounty(code)
                  .then(function (years) {
                    $scope.aerialsYears = years;
                    return years;
                  });

                DataService.getAreaDatasets({'type': 'county', 'code': code})
                  .then(function (resourceGroups) {
                    $scope.areaDatasets = [
                      {
                        'area': 'county',
                        'groups': resourceGroups
                      }
                    ];
                  });
              }
            });
          }
        })
        .state('quad', {
          url: "/quad/:name",
          templateUrl: resultsTemplate,
          controller: function($scope, $rootScope, $stateParams, $collection, $filter, DataService, MapService) {
            $scope.name = $stateParams.name;
            $rootScope.pageTitle = $filter('titleize')($scope.name) + ' Quad';
            $scope.category = 'Quad';

            $scope.code = undefined;
            DataService.getArea({'type': 'quad', 'name': $scope.name})
              .then(function (area) {
                $scope.code = area.code;
              })


            $scope.areaDatasets = [{
                'area': 'quad',
                'groups': []
              }, {
                'area': 'doqq',
                'groups': [0, 1, 2, 3]
              }
            ];

            var mergeGroups = function (original, merge) {
              var merged = _.clone(original);

              merge.forEach(function (group) {
                var found = _.findIndex(merged, function(g) {return g.name === group.name;});
                if (found >= 0) {
                  var mergedResources = _.sortBy(merged[found].resources.concat(group.resources), function (resource) {
                    return resource.dataset.name;
                  });
                  merged[found].resources = mergedResources;
                } else {
                  merged.push(group);
                }
              })
              return merged;
            };

            $scope.$watch('code', function (code) {
              if (code) {
                DataService.getAssociatedAreas({'type': 'quad', 'code': code})
                  .then(function (areas) {
                    areas.forEach(function (area) {
                      DataService.getAreaDatasets(area)
                        .then(function (resourceGroups) {
                          if (area.type === 'qquad') {
                            var index = parseInt(area.code.slice(-1)) - 1;
                            $scope.areaDatasets[1].groups[index] = resourceGroups[0];
                          } else {
                            $scope.areaDatasets[0].groups = mergeGroups($scope.areaDatasets[0].groups, resourceGroups);
                          }
                        });
                    })
                  })
              }
            });
          }
        });
    });


  return app;
}();

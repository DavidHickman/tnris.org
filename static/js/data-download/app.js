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
    .factory('DataService', DataService)
    .factory('MapService', MapService)
    .directive('includeMap', includeMap)
    .directive('resourceGroup',  resourceGroup)
    .filter('titleize',  titleizeFilter)
    .constant('MAP_IMAGE_URL_PRE', '//s3.amazonaws.com/tnris-datadownload/')
    .constant('DOWNLOAD_URL_PRE', '//tg-twdb-gemss.s3.amazonaws.com')
    .constant('DOWNLOAD_API_PRE', '//tnris.org/data-download/api/v1')
    .constant('PARTIALS_PATH', '../js/data-download/partials/')
    .controller('dataDownloadCtrl', dataDownloadCtrl)
    .config(function ($analyticsProvider) {
      $analyticsProvider.withAutoBase(true);
    })
    .run(function ($rootScope, $timeout) {
      //This method is used when the data-download app is pre-rendered for search engine listing.
      // It should be called after the page is 'finished' rendering (after async calls complete)
      // and will signal to our PhantomJS renderer to stop waiting for changes in the page
      $rootScope.htmlReady = function () {
        $timeout(function () {
          if (angular.isFunction(window.callPhantom)) { 
            window.callPhantom();
          }
        });
      };
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
          controller: function($scope, $rootScope) {
            $scope.category = 'Statewide';

            $scope.map = null;

            $rootScope.pageTitle = 'Texas Statewide';

            DataService.getAreaDatasets('state', 'texas')
              .then(function (resourceGroups) {

                // for splitting statewide resource groups into columns
                var groupedGroups = _(resourceGroups)
                  .groupBy(function(g, index) {
                    return Math.floor(index / 4);
                  })
                  .values()
                  .value();

                $scope.areaDatasets = [
                  {
                    'area': 'statewide',
                    'groups': groupedGroups
                  }
                ];

                $rootScope.htmlReady();
              });
          }
        })
        .state('county', {
          url: "/county/:name",
          templateUrl: resultsTemplate,
          controller: function($scope, $rootScope, $stateParams, $filter, MapService) {
            $scope.category = 'County';
            $scope.name = _.clone($stateParams.name);

            $scope.map = MapService.find('counties', $scope.name);

            $rootScope.pageTitle = $filter('titleize')($scope.name) + ' County';

            DataService.getAreaDatasets('county', $scope.name)
              .then(function (resourceGroups) {
                $scope.areaDatasets = [
                  {
                    'area': 'county',
                    'groups': resourceGroups
                  }
                ];

                $rootScope.htmlReady();
              });
          }
        })
        .state('quad', {
          url: "/quad/:name",
          templateUrl: resultsTemplate,
          controller: function($scope, $rootScope, $stateParams, $q, $collection, $filter, MapService) {
            $scope.category = 'Quad';
            $scope.name = $stateParams.name;

            $scope.map = MapService.find('quads', $scope.name);

            $rootScope.pageTitle = $filter('titleize')($scope.name) + ' Quad';

            $scope.areaDatasets = [{
                'area': 'quad',
                'groups': []
              }, {
                'area': 'doqq',
                'groups': [0, 1, 2, 3]
              }
            ];

            var quadPromise = DataService.getAreaDatasets('quad', $scope.name)
              .then(function (resourceGroups) {
                $scope.areaDatasets[0].groups = resourceGroups;
              });

            var cornerPromises = _.map(['NW','NE','SW','SE'], function (corner, index) {
              return DataService.getAreaDatasets('qquad', $scope.name + '|' + corner)
                .then(function (resourceGroups) {
                  $scope.areaDatasets[1].groups[index] = resourceGroups[0];
                });
            });

            $q.all([].concat(quadPromise, cornerPromises)).then(function() {
              $rootScope.htmlReady();
            });
          }
        });
    });


  return dataDownloadApp;
}();

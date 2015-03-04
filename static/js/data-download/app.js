var dataDownloadApp = function () {
  'use strict';

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
    .controller('dataDownloadCtrl', dataDownloadCtrl)
    .config(function ($analyticsProvider) {
      $analyticsProvider.withAutoBase(true);
    })
    .config(function($stateProvider, $urlRouterProvider, $sceDelegateProvider) {
      $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads
        'self',
        // Allow loading from our s3 bucket
        '//s3.amazonaws.com/tnris-datadownload/**'
      ]);

      // For any unmatched url, redirect to /statewide
      $urlRouterProvider.otherwise("/statewide");

      var origTitle = $('title').html();
      var updateTitle = function (text) {
        if (text) { text += " | "; }
        else { text = ''; }

        $('title').html(text + origTitle);
      };

      $stateProvider
        .state('statewide', {
          url: "/statewide",
          templateUrl: "partials/results.html",
          controller: function($scope) {
            $scope.category = 'Statewide';

            $scope.map = null;

            updateTitle('Texas Statewide');

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
              });
          }
        })
        .state('county', {
          url: "/county/:name",
          templateUrl: "partials/results.html",
          controller: function($scope, $stateParams, $filter, MapService) {
            $scope.category = 'County';
            $scope.name = _.clone($stateParams.name);

            $scope.map = MapService.find('counties', $scope.name);

            updateTitle($filter('titleize')($scope.name) + ' County');

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
          templateUrl: "partials/results.html",
          controller: function($scope, $stateParams, $collection, $filter, MapService) {
            $scope.category = 'Quad';
            $scope.name = $stateParams.name;

            $scope.map = MapService.find('quads', $scope.name);

            updateTitle($filter('titleize')($scope.name) + ' Quad');

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

            ['NW','NE','SW','SE'].map(function(corner, index) {
              DataService.getAreaDatasets('qquad', $scope.name + '|' + corner)
                .then(function (resourceGroups) {
                  $scope.areaDatasets[1].groups[index] = resourceGroups[0];
                });
            });

          }
        });
    });

  return dataDownloadApp;
}();

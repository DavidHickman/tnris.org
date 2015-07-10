/* globals _*/
var dataDownloadCtrl = function ($scope, $state, DataService) {
  'use strict';

  $scope.counties = [];
  $scope.county = {};

  DataService.getAreas('county')
    .then(function (counties) {
      $scope.counties = _.map(counties, function(county) {
        return {
          value: county.name,
          text: county.name
        };
      });
    });

  $scope.$watch('county.selected', function (value) {
    if (!value) {
      return;
    }
    $state.go('county', {name: value.value});
    $scope.county.selected = undefined;
  });


  $scope.quads = [];
  $scope.quad = {};

  function byMatch(searchTerm) {
    return function (a, b) {
      searchTerm = searchTerm.toLowerCase();
      var aText = a.text.toLowerCase();
      var bText = b.text.toLowerCase();
      var aIndex = aText.indexOf(searchTerm);
      var bIndex = bText.indexOf(searchTerm);

      if (_.isEmpty(searchTerm) || (aIndex === 0 && bIndex === 0) ||
        (aIndex !== 0 && bIndex !== 0)) {
          return (aText < bText) ? -1 : (aText > bText) ? 1 : 0;
      }
      if (aIndex === 0) {
        return -1;
      }
      return 1;
    };
  }

  $scope.searchQuads = function(search) {
    DataService.getAreas('quad', search)
      .then(function (quads) {
        $scope.quads = _.map(quads, function(quad) {
          return {
            value: quad.name,
            text: quad.name
          };
        }).sort(byMatch(search));
      });
  };

  $scope.$watch('quad.selected', function (value) {
    if (!value) {
      return;
    }
    $state.go('quad', {name: value.value});
    $scope.quad.selected = undefined;
  });
};

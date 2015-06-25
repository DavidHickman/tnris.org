var resourceGroup = ['$stateParams', 'PARTIALS_PATH', function ($stateParams, PARTIALS_PATH) {
  return {
    restrict: 'EA',
    scope: {
      group: '=',
      areaDataset: '='
    },
    templateUrl: PARTIALS_PATH + 'resourceGroup.html',
    link: function(scope) {
      //EventAction strings for GA event tracking
      switch (scope.areaDataset.area) {
        case 'statewide':
          scope.eventAction = 'STATE_Texas';
          break;
        case 'county':
          scope.eventAction = 'COUNTY_' + $stateParams.name;
          break;
        case 'quad':
          scope.eventAction = 'QUAD_' + $stateParams.name;
          break;
        case 'doqq':
          scope.eventAction = 'QQUAD_' + $stateParams.name;
          break;
      }
    }
  };
}];

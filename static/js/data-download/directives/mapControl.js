var mapControl = function ($compile, $http, $state, PARTIALS_PATH, MapService, CartoService) {
  'use strict';

  return {
    restrict: 'EA',
    templateUrl: PARTIALS_PATH + 'mapControl.html',
    link: {
      post: function (scope, element) {
        function updateControl() {
          MapService.getReturn(scope.type, scope.name)
            .then(function (returnTo) {
              scope.returnTo = returnTo;
            });
        }

        scope.$watch('type', updateControl);
        scope.$watch('name', updateControl);
      }
    }
  };
};


module.exports = mapControl;

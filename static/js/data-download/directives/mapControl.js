var mapControl = function ($compile, $http, $state, MapService, CartoService) {
  return {
    restrict: 'EA',
    templateUrl: 'partials/mapControl.html',
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


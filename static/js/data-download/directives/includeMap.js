var includeMap = function ($compile, $http, $state, MapService, CartoService) {
  return {
    restrict: 'EA',
    template: '<div id="map"></div>',
    link: {
      post: function (scope, element) {
        // create a map in the "map" div, set the view to a given place and zoom
        var map = L.map(element[0]);

        zoomTo('statewide').then(function() {
          // mapquest open aerial layer
          var openAerial = L.tileLayer('http://otile{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png',{
            subdomains: '1234',
            attribution: 'Tiles Courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png">'
          });

          // positron layer
          var positron = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png',{
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
          });

          map.addLayer(positron);

          cartodb.createLayer(map, CartoService.vizURL('quad'))
            .addTo(map)
            .on('done', function(layer) {
              layer.setInteraction(true);
              layer.on('featureClick', function(e, latlng, pos, data) {
                cartodb.log.log(e, latlng, pos, data);
                map.setView([data.c_lat, data.c_lon]);
                $state.go('quad', {name: data.quadname});
              });
              layer.on('error', function(err) {
                cartodb.log.log('error: ' + err);
              });
            }).on('error', function(a,b,c) {
              cartodb.log.log("some error occurred");
            });
        });

        function updateMapState() {
          var type = $state.current.name;
          var name = $state.params.name;

          zoomTo(type, name);
        }

        function zoomTo(type, name) {
          return MapService.getCenter(type, name)
            .then(function (center) {
              map.setView(center.centroid, center.zoom);
            });
        }

        //Update map state every time the state changes
        scope.$on('$stateChangeSuccess', updateMapState);
      }
    }
  };
};

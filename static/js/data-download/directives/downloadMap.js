var downloadMap = function ($compile, $http, $state, MapService, CartoService) {
  return {
    restrict: 'EA',
    templateUrl: 'partials/downloadMap.html',
    link: {
      post: function (scope, element) {
        // create a map in the "map" div, set the view to a given place and zoom
        var mapElement = $(element).find('#map')[0];
        var map = L.map(mapElement, {zoomControl: false});
        var quads, counties;

        // disable normal pan/zoom behaviors
        map.dragging.disable();
        map.touchZoom.disable();
        map.doubleClickZoom.disable();
        map.scrollWheelZoom.disable();

        scope.hovered = {};

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

          map.addLayer(openAerial);

          cartodb.createLayer(map, CartoService.vizURL('county'))
            .addTo(map)
            .on('done', function(layer) {
              counties = layer;
              layer.setInteraction(true);
              layer.on('featureOver', function(e, latlng, pos, data) {
                if ($state.current.name === 'statewide') {
                  scope.hovered = {
                    name: data.name
                  };
                  scope.$digest();
                }
              });
              layer.on('featureOut', function(e, latlng, pos, data) {
                if ($state.current.name === 'statewide') {
                  scope.hovered = {};
                  scope.$digest();
                }
              });
              layer.on('featureClick', function(e, latlng, pos, data) {
                if ($state.current.name === 'statewide') {
                  $state.go('county', {name: data.name});
                }
              });

              updateMapState();
            });

          cartodb.createLayer(map, CartoService.vizURL('quad'))
            .addTo(map)
            .on('done', function(layer) {
              quads = layer;
              layer.setInteraction(true);
              layer.on('featureOver', function(e, latlng, pos, data) {
                if ($state.current.name !== 'statewide') {
                  scope.hovered = {
                    name: data.quadname
                  };
                  scope.$digest();
                }
              });
              layer.on('featureOut', function(e, latlng, pos, data) {
                if ($state.current.name !== 'statewide') {
                  scope.hovered = {};
                  scope.$digest();
                }
              });
              layer.on('featureClick', function(e, latlng, pos, data) {
                if ($state.current.name !== 'statewide') {
                  map.setView([data.c_lat, data.c_lon], 12, {reset: true});
                  $state.go('quad', {name: data.quadname});
                }
              });
              layer.on('error', function(err) {
                cartodb.log.log('error: ' + err);
              });

              updateMapState();
            }).on('error', function(a,b,c) {
              cartodb.log.log("some error occurred");
            });
        });


        function show(layer) {
          if (layer) {
            layer.show();
          }
        }

        function hide(layer) {
          if (layer) {
            layer.hide();
          }
        }

        function updateMapState() {
          var type = scope.type = $state.current.name;
          var name = scope.name = $state.params.name;

          zoomTo(type, name).then(function() {
            if (type === 'statewide') {
              show(counties);
              hide(quads);
            } else if (type === 'county') {
              show(counties);
              show(quads);
            } else if (type === 'quad') {
              show(counties);
              show(quads);
            } else {
              hide(counties);
              hide(quads);
            }
          });
        }

        function zoomTo(type, name) {
          return MapService.getBounds(type, name)
            .then(function (bounds) {
              map.fitBounds(bounds);
            });
        }

        //Update map state every time the state changes
        scope.$on('$stateChangeSuccess', updateMapState);
      }
    }
  };
};

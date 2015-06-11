var downloadMap = function ($compile, $http, $state, PARTIALS_PATH, BING_API_KEY, MapService, CartoService) {
  return {
    restrict: 'EA',
    templateUrl: PARTIALS_PATH + 'downloadMap.html',
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
          //var openAerial = L.tileLayer('http://otile{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.png',{
            //subdomains: '1234',
            //attribution: 'Tiles Courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png">'
          //});
          //map.addLayer(openAerial);

          var bing = new L.BingLayer(BING_API_KEY);
          map.addLayer(bing);

          // positron layer
          var positron = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png',{
            attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
          });


          cartodb.createLayer(map, CartoService.vizURL('data-download'), {https: true})
            .addTo(map)
            .on('done', function(layer) {
              // returns sublayer from layer with layer_name === find_name
              function findSubLayer (layer, find_name) {
                var index = _.findIndex(layer.layers, function(iter_layer) {
                  return iter_layer.options.layer_name === find_name;
                });
                return layer.getSubLayer(index);
              }

              counties = findSubLayer(layer, "counties");
              quads = findSubLayer(layer, "quads");
              findSubLayer(layer, "quad labels").setInteraction(false);

              function setListeners(sublayer, stateName, extractParamFunc) {
                sublayer.on('featureOver', function(e, latlng, pos, data) {
                  scope.hovered = extractParamFunc(data);
                  scope.$digest();
                });
                sublayer.on('featureOut', function(e, latlng, pos, data) {
                  scope.hovered = {};
                  scope.$digest();
                });
                sublayer.on('featureClick', function(e, latlng, pos, data) {
                  if (data.c_lat && data.c_lon) {
                    map.setView([data.c_lat, data.c_lon], 12, {animate: false});
                  }

                  $state.go(stateName, extractParamFunc(data));
                });
              }

              setListeners(counties, 'county', function(data) {
                return {
                  name: data.name
                };
              });
              setListeners(quads, 'quad', function(data) {
                return {
                  name: data.quadname
                };
              });

              updateMapState();
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

        function setInteractiveLayer(layername) {
          if (layername === "counties") {
            counties && counties.setInteraction(true);
            quads && quads.setInteraction(false);
          }
          if (layername === "quads") {
            counties && counties.setInteraction(false);
            quads && quads.setInteraction(true);
          }
        }

        function updateMapState() {
          var type = scope.type = $state.current.name;
          var name = scope.name = $state.params.name;

          zoomTo(type, name).then(function() {
            if (type === 'statewide') {
              setInteractiveLayer('counties');
            } else if (type === 'county' || type === 'quad') {
              setInteractiveLayer('quads');
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

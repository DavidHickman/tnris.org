/* globals _, cartodb, L */
var downloadMap = function ($compile, $http, $state, PARTIALS_PATH, BING_API_KEY, MapService, CartoService) {
  'use strict';

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

          // returns sublayer from layer with layer_name === findName
          function findSubLayer (layer, findName) {
            var index = _.findIndex(layer.layers, function(iterLayer) {
              return iterLayer.options.layer_name === findName;
            });
            return layer.getSubLayer(index);
          }

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

          var cartoDBOptions = {
            cartodb_logo: false,
            https: true
          };

          cartodb.createLayer(map, CartoService.vizURL('data-download'), cartoDBOptions)
            .addTo(map)
            .on('done', function(layer) {
              counties = findSubLayer(layer, 'counties');
              quads = findSubLayer(layer, 'qquads');

              setListeners(quads, 'quad', function(data) {
                return {
                  name: data.quadname
                };
              });

              setListeners(counties, 'county', function(data) {
                return {
                  name: data.name
                };
              });


              updateMapState();
            });
        });

        function setInteractiveLayer(layername) {
          if (layername === 'counties') {
            if (counties) {
              counties.setInteraction(true);
            }
            if (quads) {
              quads.setInteraction(false);
            }
          }
          if (layername === 'quads') {
            if (counties) {
              counties.setInteraction(false);
            }
            if (quads) {
              quads.setInteraction(true);
            }
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

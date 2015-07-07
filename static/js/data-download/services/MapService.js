/*global L*/
var MapService = ['$collection', '$http', '$q', 'MAP_IMAGE_URL_PRE', 'CartoService', function ($collection, $http, $q, mapImageUrlPre, CartoService) {
  'use strict';

  function processSQL (data, nameField) {
    if (data.rows.length === 0) {
      return {};
    }
    if (data.rows.length > 1) {
      return {};
    }
    var obj = data.rows[0];
    obj.name = obj[nameField];
    return obj;
  }

  MapService = {};

  MapService.find = function (type, name) {
    var baseUrl = mapImageUrlPre + type + '/' + name.toUpperCase();

    var src = baseUrl + '.JPG';
    var imageMapUrl = baseUrl + '.MAP';

    return {
      imageMap: imageMapUrl,
      src: src
    };
  };

  MapService.findByName = function (type, name) {
    var table = CartoService.tableName(type);
    var nameField = CartoService.nameField(type);

    var extra = '';
    if (type === 'quad') {
      extra = ', closest_county_name ';
    }

    var query = 'SELECT ' + nameField + ', ST_AsGeoJSON(ST_Envelope(the_geom)) as bbox ' + extra + 'from ' + table + ' WHERE ' + nameField + " = '" + name + "'";

    return CartoService.sql(query)
      .then(function (data) {
        return processSQL(data, nameField);
      });
  };

  MapService.findByLatLong = function (type, latitude, longitude) {
    var table = CartoService.tableName(type);
    var nameField = CartoService.nameField(type);

    var query = 'SELECT ' + nameField + ', ST_AsGeojson(ST_Envelope(the_geom)) as bbox from ' + table +
      ' WHERE ST_Intersects(the_geom, ST_SetSRID(POINT(' + longitude + ', ' + latitude + ')::geometry, 4326))';

    return CartoService.sql(query)
      .then(function (data) {
        return processSQL(data, nameField);
      });
  };

  MapService.getBounds = function (type, name) {
    if (type === 'statewide') {
      return $q(function(resolve, reject) {
        resolve(L.latLngBounds([
          [25.84, -106.65],
          [36.68, -93.51]
        ]));
      });
    } else {
      return MapService.findByName(type, name)
        .then(function(data) {
          var bbox = _.map(JSON.parse(data.bbox).coordinates[0], function (coordinates) {
            return L.latLng(coordinates[1], coordinates[0]);
          });
          return [
            bbox[0],
            bbox[2]
          ];
        });
    }
  };

  MapService.getReturn = function (type, name) {
    if (type === 'quad') {
      return MapService.findByName(type, name)
        .then(function (data) {
          return {
            statewide: true,
            county: data.closest_county_name
          };
        });
    } else {
      return $q(function(resolve, reject) {
        var obj = {};
        if (type === 'county') {
          obj.statewide = true;
        }
        resolve(obj);
      });
    }
  };

  return MapService;
}];

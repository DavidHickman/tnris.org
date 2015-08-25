/*global _*/
var DataService = ['$collection', '$http', 'DOWNLOAD_API_PRE', function ($collection, $http, downloadAPIPre) {
  'use strict';
  DataService = {};

  DataService.getArea = function (where) {
    return DataService.getAreas(where, true)
      .then(function (areas) {
        if (areas.length === 1) {
          return areas[0];
        } else if (areas.length >= 1) {
          throw "Multiple areas found for: " + JSON.stringify(where);
        } else {
          throw "No area found for: " + JSON.stringify(where);
        }
      });
  };

  DataService.getAreas = function (where, strict) {
    var clauses = [];

    _.pairs(_.omit(where, 'name')).forEach(function (pair) {
      var key = pair[0];
      var value = pair[1];

      clauses.push(key + " = '" + value + "'");
    });

    strict = strict || false;

    if (!_.isUndefined(where.name)) {
      // case insensitive pattern match in name
      var nameClause = 'name ILIKE ';

      // strict matching for datasets, non-strict for search
      if (strict) {
        nameClause += "'" + where.name + "'";
      } else {
        nameClause += "'%" + where.name + "%'";
      }
      clauses.push(nameClause);
    }

    var filter = clauses.join(' AND ');
    var promise = $http.get(downloadAPIPre + '/areas', {
      params: {
        filter: filter,
        limit: 300
      }
    })
    .then(function (resp) {
      return resp.data.areas;
    });

    return promise;
  };

  DataService.getAssociatedAreas = function (where) {
    var type = where.type;
    var code = where.code;

    if (type !== 'quad') {
      throw "Associated datasets for things other than quads not currently supported.";
    }

    var promise = $http.get(downloadAPIPre + '/quad-info/' + code)
      .then(function (resp) {
        return resp.data;
      });

    return promise;
  }

  DataService.getAreaDatasets = function (where) {
    var type = where.type;

    var promise = DataService.getArea(where)
      .then(function(area) {
        var filter = "area_id = '" + area.id + "'";
        return $http.get(downloadAPIPre + '/resources', {
          params: {
            filter: filter
          }
        });
      })
      .then(function (resp) {
        var group = _(resp.data.resources)
          .groupBy(function(resource) {
            if (type === 'qquad') {
              return resource.area.name;
            } else {
              return resource.dataset.category;
            }
          })
          .pairs()
          .map(function(pair) {
            var subResources = _.sortBy(pair[1], 'name');

            if (type === 'qquad') {
              subResources = subResources.reverse();
            }

            return {
              name: pair[0],
              resources: subResources
            };
          })
          .sortBy('name')
          .value();
        return group;
      });

    return promise;
  };

  return DataService;
}];

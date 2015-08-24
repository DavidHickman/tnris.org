/*global _*/
var DataService = ['$collection', '$http', 'DOWNLOAD_API_PRE', function ($collection, $http, downloadAPIPre) {
  'use strict';
  DataService = {};

  DataService.getAreas = function (type, name, strict) {
    var filter = "type = '" + type + "'";
    strict = strict || false;

    if (!_.isUndefined(name)) {
      // case insensitive pattern match in name
      filter += ' AND name ILIKE ';

      // strict matching for datasets, non-strict for search
      if (strict) {
        filter += "'" + name + "'";
      } else {
        filter += "'%" + name + "%'";
      }
    }

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

  DataService.getAreaDatasets = function (type, name) {
    var promise = DataService.getAreas(type, name, true)
      .then(function (areas) {
        return areas[0].id;
      })
      .then(function(areaID) {
        var filter = "area_id = '" + areaID + "'";
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

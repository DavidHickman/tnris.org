/*global _*/
var HistoricalAerialsService = ['$http', 'HISTORICAL_AERIALS_URL', function ($http, HISTORICAL_AERIALS_URL) {
  'use strict';

  var service = {};

  var recordsUrl = HISTORICAL_AERIALS_URL + '/records?countyFips=';

  service.getForCounty = function (countyFips) {
    return $http.get(recordsUrl + countyFips).then(function (results) {
      return results.data;
    });
  };

  service.getYearsForCounty = function (countyFips) {
    return service.getForCounty(countyFips)
      .then(function (records) {
        var toYear = function (rec) {
          var d = new Date(rec.Date);
          var year = d.getFullYear();
          return year;
        };

        return _(records)
          .map(toYear)
          .unique()
          .sortBy()
          .filter(function (year) { return year <= (new Date()).getFullYear(); })
          .value();
      });
  };

  return service;
}];

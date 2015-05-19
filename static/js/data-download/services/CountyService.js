var CountyService = ['COUNTIES', function (COUNTIES) {
  'use strict';

  var service = {};

  service.getNameForFips = function (fips) {
    return COUNTIES[fips];
  };

  service.getFipsForName = function (name) {
    return _.findKey(COUNTIES, function (c) {
      return c.toLowerCase() === name.toLowerCase();
    });
  };

  return service;
}];

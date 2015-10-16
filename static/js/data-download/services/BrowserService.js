/*global $*/
var BrowserService = [function () {
  'use strict';

  var service = {};

  var isTerrible;

  service.supportsCORS = function () {
    if (isTerrible === undefined) {
      var html = $('html');
      isTerrible = html.hasClass('ie6') || html.hasClass('ie7') || html.hasClass('ie8') || html.hasClass('ie9');
    }
    return !isTerrible;
  };

  return service;
}];

module.exports = BrowserService;

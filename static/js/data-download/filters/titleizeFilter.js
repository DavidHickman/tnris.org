var titleizeFilter = function () {
  'use strict';

  return function(str) {
    if (!str) {
      return;
    }

    str = str.toLowerCase();

    return str.replace(/(^|\s)([a-z])/g, function(m, p1, p2) {
      return p1 + p2.toUpperCase();
    });
  };
};

module.exports = titleizeFilter;

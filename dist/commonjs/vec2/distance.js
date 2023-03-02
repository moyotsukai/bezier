'use strict';

var Math = require('../utils/Math.js');

var distance = function distance(a, b) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
};

exports.distance = distance;
//# sourceMappingURL=distance.js.map

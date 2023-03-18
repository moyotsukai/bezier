'use strict';

var Math = require('../utils/Math.js');

var inferLine = function inferLine(_ref) {
  var point = _ref.point,
    angle = _ref.angle;
  var lineLength = 1000;
  var endPoint = {
    x: point.x + Math.cos(angle) * lineLength,
    y: point.y - Math.sin(angle) * lineLength
  };
  return [point, endPoint];
};

exports.inferLine = inferLine;
//# sourceMappingURL=inferLine.js.map

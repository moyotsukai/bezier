'use strict';

var Math = require('../utils/Math.js');
var absoluteAngle = require('./absoluteAngle.js');
var distance = require('./distance.js');

var rotatePoint = function rotatePoint(_ref) {
  var center = _ref.center,
    angle = _ref.angle,
    point = _ref.point;
  var pointAngle = absoluteAngle.absoluteAngle({
    start: center,
    end: point
  });
  var length = distance.distance(center, point);
  var x = center.x + Math.cos(pointAngle - angle) * length;
  var y = center.y + Math.sin(pointAngle - angle) * length;
  return {
    x: x,
    y: y
  };
};

exports.rotatePoint = rotatePoint;
//# sourceMappingURL=rotatePoint.js.map

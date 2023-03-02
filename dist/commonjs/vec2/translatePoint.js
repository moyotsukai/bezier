'use strict';

var Math = require('../utils/Math.js');

var translatePoint = function translatePoint(props) {
  var angle = props.angle,
    distance = props.distance,
    point = props.point;
  return {
    x: point.x + Math.cos(angle) * distance,
    y: point.y - Math.sin(angle) * distance
  };
};

exports.translatePoint = translatePoint;
//# sourceMappingURL=translatePoint.js.map

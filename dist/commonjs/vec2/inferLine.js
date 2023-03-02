'use strict';

var Math = require('../utils/Math.js');

var inferLine = function inferLine(props) {
  var point = props.point,
    angle = props.angle;
  var lineLength = 1000;
  var endPoint = {
    x: point.x + Math.cos(angle) * lineLength,
    y: point.y - Math.sin(angle) * lineLength
  };
  return [point, endPoint];
};

exports.inferLine = inferLine;
//# sourceMappingURL=inferLine.js.map

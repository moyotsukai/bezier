'use strict';

var intersection = require('./intersection.js');
var inferLine = require('./inferLine.js');
var rotatePoint = require('./rotatePoint.js');

var mirrorPoint = function mirrorPoint(props) {
  var _intersection;
  var center = props.center,
    angle = props.angle,
    point = props.point;
  var inferedAxis = inferLine.inferLine({
    point: center,
    angle: angle
  });
  var inferedTargetLine = inferLine.inferLine({
    point: point,
    angle: angle + 90
  });
  var intersectionPoint = (_intersection = intersection.intersection(inferedAxis, inferedTargetLine)) !== null && _intersection !== void 0 ? _intersection : {
    x: 0,
    y: 0
  };
  var mirrored = rotatePoint.rotatePoint({
    center: intersectionPoint,
    angle: 180,
    point: point
  });
  return mirrored;
};

exports.mirrorPoint = mirrorPoint;
//# sourceMappingURL=mirrorPoint.js.map

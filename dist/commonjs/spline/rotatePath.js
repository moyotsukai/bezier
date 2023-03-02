'use strict';

var midpoint = require('../vec2/midpoint.js');
var rotatePoint = require('../vec2/rotatePoint.js');

var rotatePath = function rotatePath(_ref) {
  var center = _ref.center,
    angle = _ref.angle,
    path = _ref.path;
  var rotated = path.map(function (curve) {
    var startAnchor = rotatePoint.rotatePoint({
      center: center,
      angle: angle,
      point: curve.startAnchor
    });
    var startControl = rotatePoint.rotatePoint({
      center: center,
      angle: angle,
      point: curve.startControl
    });
    var endControl = rotatePoint.rotatePoint({
      center: center,
      angle: angle,
      point: curve.endControl
    });
    var endAnchor = rotatePoint.rotatePoint({
      center: center,
      angle: angle,
      point: curve.endAnchor
    });
    var anchorMidpoint = midpoint.midpoint(startAnchor, endAnchor);
    var controlMidpoint = midpoint.midpoint(startControl, endControl);
    return {
      startAnchor: startAnchor,
      startControl: startControl,
      endControl: endControl,
      endAnchor: endAnchor,
      anchorMidpoint: anchorMidpoint,
      controlMidpoint: controlMidpoint
    };
  });
  return rotated;
};

exports.rotatePath = rotatePath;
//# sourceMappingURL=rotatePath.js.map

'use strict';

var midpoint = require('../vec2/midpoint.js');
var translatePoint = require('../vec2/translatePoint.js');

var translatePath = function translatePath(_ref) {
  var angle = _ref.angle,
    distance = _ref.distance,
    path = _ref.path;
  var mirrored = path.map(function (curve) {
    var startAnchor = translatePoint.translatePoint({
      angle: angle,
      distance: distance,
      point: curve.startAnchor
    });
    var startControl = translatePoint.translatePoint({
      angle: angle,
      distance: distance,
      point: curve.startControl
    });
    var endControl = translatePoint.translatePoint({
      angle: angle,
      distance: distance,
      point: curve.endControl
    });
    var endAnchor = translatePoint.translatePoint({
      angle: angle,
      distance: distance,
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
  return mirrored;
};

exports.translatePath = translatePath;
//# sourceMappingURL=translatePath.js.map

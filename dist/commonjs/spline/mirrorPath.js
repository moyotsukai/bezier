'use strict';

var midpoint = require('../vec2/midpoint.js');
var mirrorPoint = require('../vec2/mirrorPoint.js');

var mirrorPath = function mirrorPath(props) {
  var center = props.center,
    angle = props.angle,
    path = props.path;
  var mirrored = path.map(function (curve) {
    var startAnchor = mirrorPoint.mirrorPoint({
      center: center,
      angle: angle,
      point: curve.startAnchor
    });
    var startControl = mirrorPoint.mirrorPoint({
      center: center,
      angle: angle,
      point: curve.startControl
    });
    var endControl = mirrorPoint.mirrorPoint({
      center: center,
      angle: angle,
      point: curve.endControl
    });
    var endAnchor = mirrorPoint.mirrorPoint({
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
  return mirrored;
};

exports.mirrorPath = mirrorPath;
//# sourceMappingURL=mirrorPath.js.map

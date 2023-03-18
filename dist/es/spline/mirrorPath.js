import { midpoint } from '../vec2/midpoint.js';
import { mirrorPoint } from '../vec2/mirrorPoint.js';

var mirrorPath = function mirrorPath(_ref) {
  var center = _ref.center,
    angle = _ref.angle,
    path = _ref.path;
  var mirrored = path.map(function (curve) {
    var startAnchor = mirrorPoint({
      center: center,
      angle: angle,
      point: curve.startAnchor
    });
    var startControl = mirrorPoint({
      center: center,
      angle: angle,
      point: curve.startControl
    });
    var endControl = mirrorPoint({
      center: center,
      angle: angle,
      point: curve.endControl
    });
    var endAnchor = mirrorPoint({
      center: center,
      angle: angle,
      point: curve.endAnchor
    });
    var anchorMidpoint = midpoint(startAnchor, endAnchor);
    var controlMidpoint = midpoint(startControl, endControl);
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

export { mirrorPath };
//# sourceMappingURL=mirrorPath.js.map

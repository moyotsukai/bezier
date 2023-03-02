import { midpoint } from '../vec2/midpoint.js';
import { rotatePoint } from '../vec2/rotatePoint.js';

var rotatePath = function rotatePath(_ref) {
  var center = _ref.center,
    angle = _ref.angle,
    path = _ref.path;
  var rotated = path.map(function (curve) {
    var startAnchor = rotatePoint({
      center: center,
      angle: angle,
      point: curve.startAnchor
    });
    var startControl = rotatePoint({
      center: center,
      angle: angle,
      point: curve.startControl
    });
    var endControl = rotatePoint({
      center: center,
      angle: angle,
      point: curve.endControl
    });
    var endAnchor = rotatePoint({
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
  return rotated;
};

export { rotatePath };
//# sourceMappingURL=rotatePath.js.map

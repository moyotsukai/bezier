import { midpoint } from '../vec2/midpoint.js';
import { mirrorPoint } from '../vec2/mirrorPoint.js';

var mirrorPath = function mirrorPath(props) {
  var center = props.center,
    angle = props.angle,
    path = props.path;
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

import { midpoint } from '../vec2/midpoint.js';
import { translatePoint } from '../vec2/translatePoint.js';

var translatePath = function translatePath(props) {
  var angle = props.angle,
    distance = props.distance,
    path = props.path;
  var mirrored = path.map(function (curve) {
    var startAnchor = translatePoint({
      angle: angle,
      distance: distance,
      point: curve.startAnchor
    });
    var startControl = translatePoint({
      angle: angle,
      distance: distance,
      point: curve.startControl
    });
    var endControl = translatePoint({
      angle: angle,
      distance: distance,
      point: curve.endControl
    });
    var endAnchor = translatePoint({
      angle: angle,
      distance: distance,
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

export { translatePath };
//# sourceMappingURL=translatePath.js.map

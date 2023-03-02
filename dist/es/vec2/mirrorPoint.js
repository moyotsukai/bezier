import { intersection } from './intersection.js';
import { inferLine } from './inferLine.js';
import { rotatePoint } from './rotatePoint.js';

var mirrorPoint = function mirrorPoint(props) {
  var _intersection;
  var center = props.center,
    angle = props.angle,
    point = props.point;
  var inferedAxis = inferLine({
    point: center,
    angle: angle
  });
  var inferedTargetLine = inferLine({
    point: point,
    angle: angle + 90
  });
  var intersectionPoint = (_intersection = intersection(inferedAxis, inferedTargetLine)) !== null && _intersection !== void 0 ? _intersection : {
    x: 0,
    y: 0
  };
  var mirrored = rotatePoint({
    center: intersectionPoint,
    angle: 180,
    point: point
  });
  return mirrored;
};

export { mirrorPoint };
//# sourceMappingURL=mirrorPoint.js.map

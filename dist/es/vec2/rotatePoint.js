import { cos, sin } from '../utils/Math.js';
import { absoluteAngle } from './absoluteAngle.js';
import { distance } from './distance.js';

var rotatePoint = function rotatePoint(_ref) {
  var center = _ref.center,
    angle = _ref.angle,
    point = _ref.point;
  var pointAngle = absoluteAngle({
    start: center,
    end: point
  });
  var length = distance(center, point);
  var x = center.x + cos(pointAngle - angle) * length;
  var y = center.y + sin(pointAngle - angle) * length;
  return {
    x: x,
    y: y
  };
};

export { rotatePoint };
//# sourceMappingURL=rotatePoint.js.map

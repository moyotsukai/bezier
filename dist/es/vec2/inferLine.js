import { cos, sin } from '../utils/Math.js';

var inferLine = function inferLine(_ref) {
  var point = _ref.point,
    angle = _ref.angle;
  var lineLength = 1000;
  var endPoint = {
    x: point.x + cos(angle) * lineLength,
    y: point.y - sin(angle) * lineLength
  };
  return [point, endPoint];
};

export { inferLine };
//# sourceMappingURL=inferLine.js.map

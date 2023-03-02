import { atan } from '../utils/Math.js';

var absoluteAngle = function absoluteAngle(_ref) {
  var start = _ref.start,
    end = _ref.end;
  var theta = atan((end.y - start.y) / (end.x - start.x));
  if (isNaN(theta)) {
    return 0;
  }
  if (end.x - start.x >= 0) {
    return theta;
  } else {
    return 180 + theta;
  }
};

export { absoluteAngle };
//# sourceMappingURL=absoluteAngle.js.map

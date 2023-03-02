import { slicedToArray as _slicedToArray } from '../_virtual/_rollupPluginBabelHelpers.js';
import { abs } from '../utils/Math.js';

//2直線abとcdの交点
var intersection = function intersection(ab, cd) {
  var _ab = _slicedToArray(ab, 2),
    a = _ab[0],
    b = _ab[1];
  var _cd = _slicedToArray(cd, 2),
    c = _cd[0],
    d = _cd[1];
  if (a.x - b.x === 0) {
    var ratio_c = abs(a.x - c.x);
    var ratio_d = abs(a.x - d.x);
    var _x = a.x;
    if (ratio_c + ratio_d === 0) {
      return null;
    }
    var _y = c.y - (d.y - c.y) * ratio_c / (ratio_c + ratio_d);
    return {
      x: _x,
      y: _y
    };
  }
  if (c.x - d.x === 0) {
    var ratio_a = abs(c.x - a.x);
    var ratio_b = abs(c.x - b.x);
    var _x2 = c.x;
    if (ratio_a + ratio_b === 0) {
      return null;
    }
    var _y2 = a.y - (b.y - a.y) * ratio_a / (ratio_a + ratio_b);
    return {
      x: _x2,
      y: _y2
    };
  }
  var alpha = (a.y - b.y) / (a.x - b.x);
  var beta = (c.y - d.y) / (c.x - d.x);
  if (alpha - beta === 0) {
    return null;
  }
  var x = (c.y - beta * c.x - (a.y - alpha * a.x)) / (alpha - beta);
  var y = alpha * x + a.y - alpha * a.x;
  return {
    x: x,
    y: y
  };
};

export { intersection };
//# sourceMappingURL=intersection.js.map

import { cos, sin } from '../utils/Math.js';

var translatePoint = function translatePoint(props) {
  var angle = props.angle,
    distance = props.distance,
    point = props.point;
  return {
    x: point.x + cos(angle) * distance,
    y: point.y - sin(angle) * distance
  };
};

export { translatePoint };
//# sourceMappingURL=translatePoint.js.map

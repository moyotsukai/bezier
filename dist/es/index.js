import { bezierControlPoints } from './spline/bezierControlPoints.js';
import { BezierSpline } from './spline/BezierSpline.js';
import { getStartAnchor } from './spline/getStartAnchor.js';
import { getEndAnchor } from './spline/getEndAnchor.js';
import { mirrorPath } from './spline/mirrorPath.js';
import { rotatePath } from './spline/rotatePath.js';
import { translatePath } from './spline/translatePath.js';
import SvgComponent from './Svg/SvgComponent.js';
import SvgRoot from './Svg/SvgRoot.js';
import { absoluteAngle } from './vec2/absoluteAngle.js';
import { distance } from './vec2/distance.js';
import { inferLine } from './vec2/inferLine.js';
import { intersection } from './vec2/intersection.js';
import { midpoint } from './vec2/midpoint.js';
import { mirrorPoint } from './vec2/mirrorPoint.js';
import { rotatePoint } from './vec2/rotatePoint.js';
import { translatePoint } from './vec2/translatePoint.js';

var Bezier;
(function (Bezier) {
  //Components
  Bezier.Svg = SvgComponent;
  Bezier.Root = SvgRoot;
  //Functions
  Bezier.controlPoints = bezierControlPoints;
  Bezier.getStartAnchor = getStartAnchor;
  Bezier.getEndAnchor = getEndAnchor;
  Bezier.mirrorPath = mirrorPath;
  Bezier.rotatePath = rotatePath;
  Bezier.translatePath = translatePath;
  function spline(props, style) {
    var _style$fill, _style$stroke;
    return new BezierSpline(bezierControlPoints(props), {
      fill: (_style$fill = style === null || style === void 0 ? void 0 : style.fill) !== null && _style$fill !== void 0 ? _style$fill : null,
      stroke: (_style$stroke = style === null || style === void 0 ? void 0 : style.stroke) !== null && _style$stroke !== void 0 ? _style$stroke : null
    });
  }
  Bezier.spline = spline;
  Bezier.absoluteAngle = absoluteAngle;
  Bezier.distance = distance;
  Bezier.inferLine = inferLine;
  Bezier.intersection = intersection;
  Bezier.midpoint = midpoint;
  Bezier.mirrorPoint = mirrorPoint;
  Bezier.rotatePoint = rotatePoint;
  Bezier.translatePoint = translatePoint;
})(Bezier || (Bezier = {}));
var Bezier$1 = Bezier;

export { Bezier$1 as default };
//# sourceMappingURL=index.js.map

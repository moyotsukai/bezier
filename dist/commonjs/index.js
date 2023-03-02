'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var bezierControlPoints = require('./spline/bezierControlPoints.js');
var BezierSpline = require('./spline/BezierSpline.js');
var getStartAnchor = require('./spline/getStartAnchor.js');
var getEndAnchor = require('./spline/getEndAnchor.js');
var mirrorPath = require('./spline/mirrorPath.js');
var rotatePath = require('./spline/rotatePath.js');
var translatePath = require('./spline/translatePath.js');
var SvgComponent = require('./Svg/SvgComponent.js');
var SvgRoot = require('./Svg/SvgRoot.js');
var absoluteAngle = require('./vec2/absoluteAngle.js');
var distance = require('./vec2/distance.js');
var inferLine = require('./vec2/inferLine.js');
var intersection = require('./vec2/intersection.js');
var midpoint = require('./vec2/midpoint.js');
var mirrorPoint = require('./vec2/mirrorPoint.js');
var rotatePoint = require('./vec2/rotatePoint.js');
var translatePoint = require('./vec2/translatePoint.js');

var Bezier;
(function (Bezier) {
  //Components
  Bezier.Svg = SvgComponent.default;
  Bezier.Root = SvgRoot.default;
  //Functions
  Bezier.controlPoints = bezierControlPoints.bezierControlPoints;
  Bezier.getStartAnchor = getStartAnchor.getStartAnchor;
  Bezier.getEndAnchor = getEndAnchor.getEndAnchor;
  Bezier.mirrorPath = mirrorPath.mirrorPath;
  Bezier.rotatePath = rotatePath.rotatePath;
  Bezier.translatePath = translatePath.translatePath;
  function spline(props, style) {
    var _style$fill, _style$stroke;
    return new BezierSpline.BezierSpline(bezierControlPoints.bezierControlPoints(props), {
      fill: (_style$fill = style === null || style === void 0 ? void 0 : style.fill) !== null && _style$fill !== void 0 ? _style$fill : null,
      stroke: (_style$stroke = style === null || style === void 0 ? void 0 : style.stroke) !== null && _style$stroke !== void 0 ? _style$stroke : null
    });
  }
  Bezier.spline = spline;
  Bezier.absoluteAngle = absoluteAngle.absoluteAngle;
  Bezier.distance = distance.distance;
  Bezier.inferLine = inferLine.inferLine;
  Bezier.intersection = intersection.intersection;
  Bezier.midpoint = midpoint.midpoint;
  Bezier.mirrorPoint = mirrorPoint.mirrorPoint;
  Bezier.rotatePoint = rotatePoint.rotatePoint;
  Bezier.translatePoint = translatePoint.translatePoint;
})(Bezier || (Bezier = {}));
var Bezier$1 = Bezier;

exports.default = Bezier$1;
//# sourceMappingURL=index.js.map

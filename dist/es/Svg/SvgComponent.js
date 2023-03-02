import { jsx, jsxs } from 'react/jsx-runtime';
import React from 'react';
import { useShowGuideValue } from '../context/ShowGuideContext.js';
import SvgCanvas from './SvgCanvas.js';
import SvgCubicBezier from './SvgCubicBezier.js';
import SvgCubicBezierGuide from './SvgCubicBezierGuide.js';

var A4 = {
  x: 841.89,
  y: 595.28
};
var SvgComponent = function SvgComponent(_ref) {
  var splines = _ref.splines,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? A4.x : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? A4.y : _ref$height,
    expandCanvasToEdge = _ref.expandCanvasToEdge,
    shouGuide = _ref.shouGuide;
  var showGuide = shouGuide !== null && shouGuide !== void 0 ? shouGuide : useShowGuideValue();
  return jsx(SvgCanvas, {
    width: width,
    height: height,
    expandCanvasToEdge: expandCanvasToEdge,
    children: splines.map(function (spline, index) {
      return jsx("g", {
        children: spline.paths.map(function (path, index) {
          var _spline$stroke, _spline$fill;
          return jsxs(React.Fragment, {
            children: [jsx(SvgCubicBezier, {
              path: path,
              style: {
                stroke: (_spline$stroke = spline.stroke) !== null && _spline$stroke !== void 0 ? _spline$stroke : null,
                fill: (_spline$fill = spline.fill) !== null && _spline$fill !== void 0 ? _spline$fill : null
              }
            }), showGuide && jsx(SvgCubicBezierGuide, {
              pathInfo: path,
              width: width
            })]
          }, index);
        })
      }, index);
    })
  });
};

export { SvgComponent as default };
//# sourceMappingURL=SvgComponent.js.map

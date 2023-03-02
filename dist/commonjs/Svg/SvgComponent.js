'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var ShowGuideContext = require('../context/ShowGuideContext.js');
var SvgCanvas = require('./SvgCanvas.js');
var SvgCubicBezier = require('./SvgCubicBezier.js');
var SvgCubicBezierGuide = require('./SvgCubicBezierGuide.js');

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
  var showGuide = shouGuide !== null && shouGuide !== void 0 ? shouGuide : ShowGuideContext.useShowGuideValue();
  return jsxRuntime.jsx(SvgCanvas.default, {
    width: width,
    height: height,
    expandCanvasToEdge: expandCanvasToEdge,
    children: splines.map(function (spline, index) {
      return jsxRuntime.jsx("g", {
        children: spline.paths.map(function (path, index) {
          var _spline$stroke, _spline$fill;
          return jsxRuntime.jsxs(React.Fragment, {
            children: [jsxRuntime.jsx(SvgCubicBezier.default, {
              path: path,
              style: {
                stroke: (_spline$stroke = spline.stroke) !== null && _spline$stroke !== void 0 ? _spline$stroke : null,
                fill: (_spline$fill = spline.fill) !== null && _spline$fill !== void 0 ? _spline$fill : null
              }
            }), showGuide && jsxRuntime.jsx(SvgCubicBezierGuide.default, {
              pathInfo: path,
              width: width
            })]
          }, index);
        })
      }, index);
    })
  });
};

exports.default = SvgComponent;
//# sourceMappingURL=SvgComponent.js.map

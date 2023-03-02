'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');

var SvgLine = function SvgLine(_ref) {
  var start = _ref.start,
    end = _ref.end,
    stroke = _ref.stroke,
    fill = _ref.fill,
    strokeWidth = _ref.strokeWidth;
  return jsxRuntime.jsx("line", {
    x1: start.x,
    x2: end.x,
    y1: start.y,
    y2: end.y,
    stroke: stroke !== null && stroke !== void 0 ? stroke : "black",
    fill: fill !== null && fill !== void 0 ? fill : "transparent",
    "stroke-width": strokeWidth !== null && strokeWidth !== void 0 ? strokeWidth : 1
  });
};

exports.default = SvgLine;
//# sourceMappingURL=SvgLine.js.map

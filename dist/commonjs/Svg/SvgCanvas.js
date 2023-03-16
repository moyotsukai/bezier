'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
require('@moyotsukai/bezier/dist/es/index.css');

//The dedault size 841.89px x 595.28px is A4
var SvgCanvas = function SvgCanvas(_ref) {
  var width = _ref.width,
    height = _ref.height,
    _ref$expandCanvasToEd = _ref.expandCanvasToEdge,
    expandCanvasToEdge = _ref$expandCanvasToEd === void 0 ? false : _ref$expandCanvasToEd,
    children = _ref.children;
  return jsxRuntime.jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "".concat(width, "px"),
    height: "".concat(height, "px"),
    viewBox: "0 0 ".concat(width, " ").concat(height),
    stroke: "black",
    fill: "transparent",
    className: "svgCanvas".concat(" ", expandCanvasToEdge && "svgCanvasExpand"),
    children: children
  });
};

exports.default = SvgCanvas;
//# sourceMappingURL=SvgCanvas.js.map

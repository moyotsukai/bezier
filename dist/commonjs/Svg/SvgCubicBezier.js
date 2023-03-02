'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');

var SvgCubicBezier = function SvgCubicBezier(_ref) {
  var _style$stroke, _style$fill;
  var path = _ref.path,
    style = _ref.style;
  var d = "M ".concat(path.startAnchor.x, " ").concat(path.startAnchor.y, " C ").concat(path.startControl.x, " ").concat(path.startControl.y, ", ").concat(path.endControl.x, " ").concat(path.endControl.y, ", ").concat(path.endAnchor.x, " ").concat(path.endAnchor.y);
  return jsxRuntime.jsx("path", {
    d: d,
    stroke: (_style$stroke = style.stroke) !== null && _style$stroke !== void 0 ? _style$stroke : "black",
    fill: (_style$fill = style.fill) !== null && _style$fill !== void 0 ? _style$fill : "transparent"
  });
};

exports.default = SvgCubicBezier;
//# sourceMappingURL=SvgCubicBezier.js.map

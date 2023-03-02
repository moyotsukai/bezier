'use strict';

var sin = function sin(angle) {
  return Math.sin(angle * Math.PI / 180);
};
var cos = function cos(angle) {
  return Math.cos(angle * Math.PI / 180);
};
var atan = function atan(num) {
  return Math.atan(num) * 180 / Math.PI;
};
var sqrt = Math.sqrt;
var pow = Math.pow;
var abs = Math.abs;

exports.abs = abs;
exports.atan = atan;
exports.cos = cos;
exports.pow = pow;
exports.sin = sin;
exports.sqrt = sqrt;
//# sourceMappingURL=Math.js.map

import { createClass as _createClass, classCallCheck as _classCallCheck, defineProperty as _defineProperty } from '../_virtual/_rollupPluginBabelHelpers.js';
import { translatePath } from './translatePath.js';
import { getEndAnchor } from './getEndAnchor.js';
import { mirrorPath } from './mirrorPath.js';
import { rotatePath } from './rotatePath.js';
import { getStartAnchor } from './getStartAnchor.js';

var BezierSpline = /*#__PURE__*/function () {
  function BezierSpline(paths, style) {
    var _style$stroke, _style$fill;
    _classCallCheck(this, BezierSpline);
    _defineProperty(this, "_paths", void 0);
    _defineProperty(this, "_stroke", null);
    _defineProperty(this, "_fill", null);
    this._paths = paths;
    this._stroke = (_style$stroke = style === null || style === void 0 ? void 0 : style.stroke) !== null && _style$stroke !== void 0 ? _style$stroke : null;
    this._fill = (_style$fill = style === null || style === void 0 ? void 0 : style.fill) !== null && _style$fill !== void 0 ? _style$fill : null;
  }
  _createClass(BezierSpline, [{
    key: "paths",
    get: function get() {
      return this._paths;
    }
  }, {
    key: "stroke",
    get: function get() {
      return this._stroke;
    }
  }, {
    key: "fill",
    get: function get() {
      return this._fill;
    }
  }, {
    key: "startAnchor",
    get: function get() {
      return getStartAnchor(this._paths);
    }
  }, {
    key: "endAnchor",
    get: function get() {
      return getEndAnchor(this._paths);
    }
  }, {
    key: "rotate",
    value: function rotate(_ref) {
      var center = _ref.center,
        angle = _ref.angle;
      return new BezierSpline(rotatePath({
        center: center,
        angle: angle,
        path: this._paths
      }), {
        fill: this._fill,
        stroke: this._stroke
      });
    }
  }, {
    key: "mirror",
    value: function mirror(_ref2) {
      var center = _ref2.center,
        angle = _ref2.angle;
      return new BezierSpline(mirrorPath({
        center: center,
        angle: angle,
        path: this._paths
      }), {
        fill: this._fill,
        stroke: this._stroke
      });
    }
  }, {
    key: "translate",
    value: function translate(_ref3) {
      var angle = _ref3.angle,
        distance = _ref3.distance;
      return new BezierSpline(translatePath({
        angle: angle,
        distance: distance,
        path: this._paths
      }), {
        fill: this._fill,
        stroke: this._stroke
      });
    }
  }]);
  return BezierSpline;
}();

export { BezierSpline };
//# sourceMappingURL=BezierSpline.js.map

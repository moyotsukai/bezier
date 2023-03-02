'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var SvgCircle = require('./SvgCircle.js');
var SvgLine = require('./SvgLine.js');

var SvgCubicBezierGuide = function SvgCubicBezierGuide(_ref) {
  var pathInfo = _ref.pathInfo;
    _ref.width;
  var info = pathInfo;
  var guideScale = 1;
  return jsxRuntime.jsxs(React.Fragment, {
    children: [jsxRuntime.jsx(SvgLine.default, {
      start: info.startAnchor,
      end: info.endAnchor,
      stroke: "gray",
      strokeWidth: 1 * guideScale
    }), jsxRuntime.jsx(SvgLine.default, {
      start: info.anchorMidpoint,
      end: info.controlMidpoint,
      stroke: "gray",
      strokeWidth: 1 * guideScale
    }), jsxRuntime.jsx(SvgLine.default, {
      start: info.startControl,
      end: info.endControl,
      stroke: "gray",
      strokeWidth: 1 * guideScale
    }), jsxRuntime.jsx(SvgLine.default, {
      start: info.startAnchor,
      end: info.startControl,
      stroke: "gray",
      strokeWidth: 1 * guideScale
    }), jsxRuntime.jsx(SvgLine.default, {
      start: info.endAnchor,
      end: info.endControl,
      stroke: "gray",
      strokeWidth: 1 * guideScale
    }), jsxRuntime.jsx(SvgCircle.default, {
      center: info.startAnchor,
      radius: 2 * guideScale,
      fill: "black"
    }), jsxRuntime.jsx(SvgCircle.default, {
      center: info.endAnchor,
      radius: 2 * guideScale,
      fill: "gray"
    }), jsxRuntime.jsx(SvgCircle.default, {
      center: info.startControl,
      radius: 2 * guideScale,
      fill: "red"
    }), jsxRuntime.jsx(SvgCircle.default, {
      center: info.endControl,
      radius: 2 * guideScale,
      fill: "blue"
    }), jsxRuntime.jsx(SvgCircle.default, {
      center: info.anchorMidpoint,
      radius: 2 * guideScale,
      fill: "pink"
    }), jsxRuntime.jsx(SvgCircle.default, {
      center: info.controlMidpoint,
      radius: 2 * guideScale,
      fill: "green"
    })]
  });
};

exports.default = SvgCubicBezierGuide;
//# sourceMappingURL=SvgCubicBezierGuide.js.map

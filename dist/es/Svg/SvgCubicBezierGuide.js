import { jsxs, jsx } from 'react/jsx-runtime';
import React from 'react';
import SvgCircle from './SvgCircle.js';
import SvgLine from './SvgLine.js';

var SvgCubicBezierGuide = function SvgCubicBezierGuide(_ref) {
  var pathInfo = _ref.pathInfo;
    _ref.width;
  var info = pathInfo;
  var guideScale = 1;
  return jsxs(React.Fragment, {
    children: [jsx(SvgLine, {
      start: info.startAnchor,
      end: info.endAnchor,
      stroke: "gray",
      strokeWidth: 1 * guideScale
    }), jsx(SvgLine, {
      start: info.anchorMidpoint,
      end: info.controlMidpoint,
      stroke: "gray",
      strokeWidth: 1 * guideScale
    }), jsx(SvgLine, {
      start: info.startControl,
      end: info.endControl,
      stroke: "gray",
      strokeWidth: 1 * guideScale
    }), jsx(SvgLine, {
      start: info.startAnchor,
      end: info.startControl,
      stroke: "gray",
      strokeWidth: 1 * guideScale
    }), jsx(SvgLine, {
      start: info.endAnchor,
      end: info.endControl,
      stroke: "gray",
      strokeWidth: 1 * guideScale
    }), jsx(SvgCircle, {
      center: info.startAnchor,
      radius: 2 * guideScale,
      fill: "black"
    }), jsx(SvgCircle, {
      center: info.endAnchor,
      radius: 2 * guideScale,
      fill: "gray"
    }), jsx(SvgCircle, {
      center: info.startControl,
      radius: 2 * guideScale,
      fill: "red"
    }), jsx(SvgCircle, {
      center: info.endControl,
      radius: 2 * guideScale,
      fill: "blue"
    }), jsx(SvgCircle, {
      center: info.anchorMidpoint,
      radius: 2 * guideScale,
      fill: "pink"
    }), jsx(SvgCircle, {
      center: info.controlMidpoint,
      radius: 2 * guideScale,
      fill: "green"
    })]
  });
};

export { SvgCubicBezierGuide as default };
//# sourceMappingURL=SvgCubicBezierGuide.js.map

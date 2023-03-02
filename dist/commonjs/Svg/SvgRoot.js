'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var ShowGuideContext = require('../context/ShowGuideContext.js');
var ShowGuideToggleButton = require('./ShowGuideToggleButton.js');

var SvgRoot = function SvgRoot(_ref) {
  var fileName = _ref.fileName,
    children = _ref.children;
  var svgContainerRef = React.useRef(null);
  var downloadSvg = function downloadSvg() {
    var _svgContainerRef$curr;
    if (!svgContainerRef) {
      return;
    }
    var svgElement = (_svgContainerRef$curr = svgContainerRef.current) === null || _svgContainerRef$curr === void 0 ? void 0 : _svgContainerRef$curr.querySelector("svg");
    var svgText = new XMLSerializer().serializeToString(svgElement);
    var svgBlob = new Blob([svgText], {
      type: 'image/svg+xml;charset=utf-8'
    });
    var svgUrl = URL.createObjectURL(svgBlob);
    var a = document.createElement('a');
    a.href = svgUrl;
    a.download = "".concat(fileName !== null && fileName !== void 0 ? fileName : "bezier_spline", ".svg");
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(svgUrl);
  };
  return jsxRuntime.jsxs(ShowGuideContext.ShowGuideConatextProvider, {
    children: [jsxRuntime.jsx("button", {
      onClick: downloadSvg,
      className: "svgDownloadButton",
      children: "Download SVG"
    }), jsxRuntime.jsx(ShowGuideToggleButton.ShowGuideToggleButton, {}), jsxRuntime.jsx("div", {
      ref: svgContainerRef,
      children: children
    })]
  });
};

exports.default = SvgRoot;
//# sourceMappingURL=SvgRoot.js.map

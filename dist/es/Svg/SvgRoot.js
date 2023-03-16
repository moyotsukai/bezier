import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef } from 'react';
import { ShowGuideConatextProvider } from '../context/ShowGuideContext.js';
import { ShowGuideToggleButton } from './ShowGuideToggleButton.js';
import '@moyotsukai/bezier/dist/es/index.css';

var SvgRoot = function SvgRoot(_ref) {
  var fileName = _ref.fileName,
    children = _ref.children;
  var svgContainerRef = useRef(null);
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
  return jsxs(ShowGuideConatextProvider, {
    children: [jsx("button", {
      onClick: downloadSvg,
      className: "svgDownloadButton",
      children: "Download SVG"
    }), jsx(ShowGuideToggleButton, {}), jsx("div", {
      ref: svgContainerRef,
      children: children
    })]
  });
};

export { SvgRoot as default };
//# sourceMappingURL=SvgRoot.js.map

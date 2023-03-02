'use strict';

var jsxRuntime = require('react/jsx-runtime');
var ShowGuideContext = require('../context/ShowGuideContext.js');

var ShowGuideToggleButton = function ShowGuideToggleButton() {
  var _ref = [ShowGuideContext.useShowGuideValue(), ShowGuideContext.useSetShowGuide()],
    showGuide = _ref[0],
    setShowGuide = _ref[1];
  var onToggleSwitch = function onToggleSwitch() {
    setShowGuide(function (prev) {
      return !prev;
    });
  };
  return jsxRuntime.jsxs("span", {
    className: "svgShowGuideButtonContainer",
    children: ["Show guide", jsxRuntime.jsx("input", {
      type: "checkbox",
      checked: showGuide,
      onChange: onToggleSwitch,
      className: "svgShowGuideButton"
    })]
  });
};

exports.ShowGuideToggleButton = ShowGuideToggleButton;
//# sourceMappingURL=ShowGuideToggleButton.js.map

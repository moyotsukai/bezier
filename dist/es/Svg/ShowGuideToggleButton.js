import { jsxs, jsx } from 'react/jsx-runtime';
import { useShowGuideValue, useSetShowGuide } from '../context/ShowGuideContext.js';

var ShowGuideToggleButton = function ShowGuideToggleButton() {
  var _ref = [useShowGuideValue(), useSetShowGuide()],
    showGuide = _ref[0],
    setShowGuide = _ref[1];
  var onToggleSwitch = function onToggleSwitch() {
    setShowGuide(function (prev) {
      return !prev;
    });
  };
  return jsxs("span", {
    className: "svgShowGuideButtonContainer",
    children: ["Show guide", jsx("input", {
      type: "checkbox",
      checked: showGuide,
      onChange: onToggleSwitch,
      className: "svgShowGuideButton"
    })]
  });
};

export { ShowGuideToggleButton };
//# sourceMappingURL=ShowGuideToggleButton.js.map

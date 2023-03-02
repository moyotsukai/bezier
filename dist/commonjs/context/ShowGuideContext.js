'use strict';

var _rollupPluginBabelHelpers = require('../_virtual/_rollupPluginBabelHelpers.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');

var ShowGuideValueContext = React.createContext(false);
var ShowGuideDispatchContext = React.createContext(function () {
  return undefined;
});
var ShowGuideConatextProvider = function ShowGuideConatextProvider(_ref) {
  var children = _ref.children;
  var _useState = React.useState(false),
    _useState2 = _rollupPluginBabelHelpers.slicedToArray(_useState, 2),
    showGuide = _useState2[0],
    setShowGuide = _useState2[1];
  return jsxRuntime.jsx(ShowGuideValueContext.Provider, {
    value: showGuide,
    children: jsxRuntime.jsx(ShowGuideDispatchContext.Provider, {
      value: setShowGuide,
      children: children
    })
  });
};
var useShowGuideValue = function useShowGuideValue() {
  return React.useContext(ShowGuideValueContext);
};
var useSetShowGuide = function useSetShowGuide() {
  return React.useContext(ShowGuideDispatchContext);
};

exports.ShowGuideConatextProvider = ShowGuideConatextProvider;
exports.useSetShowGuide = useSetShowGuide;
exports.useShowGuideValue = useShowGuideValue;
//# sourceMappingURL=ShowGuideContext.js.map

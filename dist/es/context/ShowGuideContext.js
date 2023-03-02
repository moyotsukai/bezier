import { slicedToArray as _slicedToArray } from '../_virtual/_rollupPluginBabelHelpers.js';
import { jsx } from 'react/jsx-runtime';
import { createContext, useState, useContext } from 'react';

var ShowGuideValueContext = createContext(false);
var ShowGuideDispatchContext = createContext(function () {
  return undefined;
});
var ShowGuideConatextProvider = function ShowGuideConatextProvider(_ref) {
  var children = _ref.children;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    showGuide = _useState2[0],
    setShowGuide = _useState2[1];
  return jsx(ShowGuideValueContext.Provider, {
    value: showGuide,
    children: jsx(ShowGuideDispatchContext.Provider, {
      value: setShowGuide,
      children: children
    })
  });
};
var useShowGuideValue = function useShowGuideValue() {
  return useContext(ShowGuideValueContext);
};
var useSetShowGuide = function useSetShowGuide() {
  return useContext(ShowGuideDispatchContext);
};

export { ShowGuideConatextProvider, useSetShowGuide, useShowGuideValue };
//# sourceMappingURL=ShowGuideContext.js.map

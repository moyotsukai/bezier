import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState } from 'react';
const ShowGuideValueContext = createContext(false);
const ShowGuideDispatchContext = createContext(() => undefined);
export const ShowGuideConatextProvider = ({ children }) => {
    const [showGuide, setShowGuide] = useState(false);
    return (_jsx(ShowGuideValueContext.Provider, { value: showGuide, children: _jsx(ShowGuideDispatchContext.Provider, { value: setShowGuide, children: children }) }));
};
export const useShowGuideValue = () => useContext(ShowGuideValueContext);
export const useSetShowGuide = () => useContext(ShowGuideDispatchContext);

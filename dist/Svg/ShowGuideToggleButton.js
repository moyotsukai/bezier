import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSetShowGuide, useShowGuideValue } from '../context/ShowGuideContext';
import '../styles/Svg/Svg.css';
export const ShowGuideToggleButton = () => {
    const [showGuide, setShowGuide] = [useShowGuideValue(), useSetShowGuide()];
    const onToggleSwitch = () => {
        setShowGuide((prev) => !prev);
    };
    return (_jsxs("span", { className: "svgShowGuideButtonContainer", children: ["Show guide", _jsx("input", { type: "checkbox", checked: showGuide, onChange: onToggleSwitch, className: "svgShowGuideButton" })] }));
};

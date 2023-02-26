import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { useShowGuideValue } from "../context/ShowGuideContext";
import SvgCanvas from "./SvgCanvas";
import SvgCubicBezier from "./SvgCubicBezier";
import SvgCubicBezierInfo from "./SvgCubicBezierGuide";
const A4 = {
    x: 841.89,
    y: 595.28
};
const SvgComponent = ({ splines, width = A4.x, height = A4.y, expandCanvasToEdge }) => {
    const showGuide = useShowGuideValue();
    return (_jsx(SvgCanvas, { width: width, height: height, expandCanvasToEdge: expandCanvasToEdge, children: splines.map((spline, index) => (_jsx("g", { children: spline.paths.map((path, index) => (_jsxs(React.Fragment, { children: [_jsx(SvgCubicBezier, { path: path, style: {
                            stroke: spline.stroke ?? null,
                            fill: spline.fill ?? null
                        } }), showGuide &&
                        _jsx(SvgCubicBezierInfo, { pathInfo: path, width: width })] }, index))) }, index))) }));
};
export default SvgComponent;

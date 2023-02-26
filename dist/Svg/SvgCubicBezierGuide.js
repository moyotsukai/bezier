import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import SvgCircle from './SvgCircle';
import SvgLine from './SvgLine';
const SvgCubicBezierGuide = ({ pathInfo, width }) => {
    const info = pathInfo;
    const guideScale = 1;
    return (_jsxs(React.Fragment, { children: [_jsx(SvgLine, { start: info.startAnchor, end: info.endAnchor, stroke: "gray", strokeWidth: 1 * guideScale }), _jsx(SvgLine, { start: info.anchorMidpoint, end: info.controlMidpoint, stroke: "gray", strokeWidth: 1 * guideScale }), _jsx(SvgLine, { start: info.startControl, end: info.endControl, stroke: "gray", strokeWidth: 1 * guideScale }), _jsx(SvgLine, { start: info.startAnchor, end: info.startControl, stroke: "gray", strokeWidth: 1 * guideScale }), _jsx(SvgLine, { start: info.endAnchor, end: info.endControl, stroke: "gray", strokeWidth: 1 * guideScale }), _jsx(SvgCircle, { center: info.startAnchor, radius: 2 * guideScale, fill: "black" }), _jsx(SvgCircle, { center: info.endAnchor, radius: 2 * guideScale, fill: "gray" }), _jsx(SvgCircle, { center: info.startControl, radius: 2 * guideScale, fill: "red" }), _jsx(SvgCircle, { center: info.endControl, radius: 2 * guideScale, fill: "blue" }), _jsx(SvgCircle, { center: info.anchorMidpoint, radius: 2 * guideScale, fill: "pink" }), _jsx(SvgCircle, { center: info.controlMidpoint, radius: 2 * guideScale, fill: "green" })] }));
};
export default SvgCubicBezierGuide;

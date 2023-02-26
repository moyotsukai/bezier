import { jsx as _jsx } from "react/jsx-runtime";
import '../styles/Svg/Svg.css';
//The dedault size 841.89px x 595.28px is A4
const SvgCanvas = ({ width, height, expandCanvasToEdge = false, children }) => {
    return (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: `${width}px`, height: `${height}px`, viewBox: `0 0 ${width} ${height}`, stroke: "black", fill: "transparent", className: `${"svgCanvas"} ${expandCanvasToEdge && "svgCanvasExpand"}`, children: children }));
};
export default SvgCanvas;

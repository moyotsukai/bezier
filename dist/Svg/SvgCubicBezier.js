import { jsx as _jsx } from "react/jsx-runtime";
const SvgCubicBezier = ({ path, style }) => {
    const d = `M ${path.startAnchor.x} ${path.startAnchor.y} C ${path.startControl.x} ${path.startControl.y}, ${path.endControl.x} ${path.endControl.y}, ${path.endAnchor.x} ${path.endAnchor.y}`;
    return (_jsx("path", { d: d, stroke: style.stroke ?? "black", fill: style.fill ?? "transparent" }));
};
export default SvgCubicBezier;

import { jsx as _jsx } from "react/jsx-runtime";
const SvgLine = ({ start, end, stroke, fill, strokeWidth }) => {
    return (_jsx("line", { x1: start.x, x2: end.x, y1: start.y, y2: end.y, stroke: stroke ?? "black", fill: fill ?? "transparent", "stroke-width": strokeWidth ?? 1 }));
};
export default SvgLine;

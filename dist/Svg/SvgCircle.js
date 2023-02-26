import { jsx as _jsx } from "react/jsx-runtime";
const SvgCircle = (props) => {
    return (_jsx("circle", { cx: props.center.x, cy: props.center.y, r: props.radius, stroke: props.fill ?? "black", fill: props.fill ?? "transparent" }));
};
export default SvgCircle;

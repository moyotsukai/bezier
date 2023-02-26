import React from "react";
import { BezierSpline } from "../spline/BezierSpline";
type Props = {
    splines: BezierSpline[];
    width?: number;
    height?: number;
    expandCanvasToEdge?: boolean;
};
declare const SvgComponent: React.FC<Props>;
export default SvgComponent;

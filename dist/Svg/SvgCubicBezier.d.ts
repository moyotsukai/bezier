import React from 'react';
import { BezierPoints } from '../spline/BezierPoints';
import { BezierStyleProps } from '../spline/BezierStyle';
type Props = {
    path: BezierPoints;
    style: BezierStyleProps;
};
declare const SvgCubicBezier: React.FC<Props>;
export default SvgCubicBezier;

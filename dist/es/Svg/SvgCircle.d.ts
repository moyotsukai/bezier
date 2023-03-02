import React from 'react';
import { Vec2 } from '../vec2/Vec2';
type Props = {
    center: Vec2;
    radius: number;
    stroke?: string;
    fill?: string;
};
declare const SvgCircle: React.FC<Props>;
export default SvgCircle;

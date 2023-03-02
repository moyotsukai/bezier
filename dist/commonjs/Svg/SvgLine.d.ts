import React from 'react';
import { Vec2 } from '../vec2/Vec2';
type Props = {
    start: Vec2;
    end: Vec2;
    stroke?: string;
    fill?: string;
    strokeWidth?: number;
};
declare const SvgLine: React.FC<Props>;
export default SvgLine;

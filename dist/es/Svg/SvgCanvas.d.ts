import React from 'react';
import '../styles/Svg/Svg.css';
type Props = {
    width?: number;
    height?: number;
    expandCanvasToEdge?: boolean;
    children?: React.ReactNode;
};
declare const SvgCanvas: React.FC<Props>;
export default SvgCanvas;

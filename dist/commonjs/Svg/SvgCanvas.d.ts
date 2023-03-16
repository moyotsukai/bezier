import React from 'react';
import '../styles/svg/svg.css';
import '@moyotsukai/bezier/dist/es/index.css';
type Props = {
    width?: number;
    height?: number;
    expandCanvasToEdge?: boolean;
    children?: React.ReactNode;
};
declare const SvgCanvas: React.FC<Props>;
export default SvgCanvas;

import React from 'react';
import '../styles/svg/svg.css';
import '@moyotsukai/bezier/dist/es/index.css';
type Props = {
    fileName?: string;
    children: React.ReactNode;
};
declare const SvgRoot: React.FC<Props>;
export default SvgRoot;

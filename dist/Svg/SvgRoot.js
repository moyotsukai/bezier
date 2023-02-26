import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from 'react';
import { ShowGuideConatextProvider } from '../context/ShowGuideContext';
import '../styles/Svg/Svg.css';
import { ShowGuideToggleButton } from './ShowGuideToggleButton';
const SvgRoot = ({ fileName, children }) => {
    const svgContainerRef = useRef(null);
    const downloadSvg = () => {
        if (!svgContainerRef) {
            return;
        }
        const svgElement = svgContainerRef.current?.querySelector("svg");
        const svgText = new XMLSerializer().serializeToString(svgElement);
        const svgBlob = new Blob([svgText], { type: 'image/svg+xml;charset=utf-8' });
        const svgUrl = URL.createObjectURL(svgBlob);
        const a = document.createElement('a');
        a.href = svgUrl;
        a.download = `${fileName ?? "bezier_spline"}.svg`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(svgUrl);
    };
    return (_jsxs(ShowGuideConatextProvider, { children: [_jsx("button", { onClick: downloadSvg, className: "svgDownloadButton", children: "Download SVG" }), _jsx(ShowGuideToggleButton, {}), _jsx("div", { ref: svgContainerRef, children: children })] }));
};
export default SvgRoot;

import { midpoint } from '../vec2/midpoint';
import { rotatePoint } from "../vec2/rotatePoint";
export const rotatePath = ({ center, angle, path }) => {
    const rotated = path.map((curve) => {
        const startAnchor = rotatePoint({ center: center, angle: angle, point: curve.startAnchor });
        const startControl = rotatePoint({ center: center, angle: angle, point: curve.startControl });
        const endControl = rotatePoint({ center: center, angle: angle, point: curve.endControl });
        const endAnchor = rotatePoint({ center: center, angle: angle, point: curve.endAnchor });
        const anchorMidpoint = midpoint(startAnchor, endAnchor);
        const controlMidpoint = midpoint(startControl, endControl);
        return { startAnchor: startAnchor, startControl: startControl, endControl: endControl, endAnchor: endAnchor, anchorMidpoint: anchorMidpoint, controlMidpoint: controlMidpoint };
    });
    return rotated;
};

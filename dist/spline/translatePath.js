import { midpoint } from '../vec2/midpoint';
import { translatePoint } from '../vec2/translatePoint';
export const translatePath = (props) => {
    const { angle, distance, path } = props;
    const mirrored = path.map((curve) => {
        const startAnchor = translatePoint({ angle: angle, distance: distance, point: curve.startAnchor });
        const startControl = translatePoint({ angle: angle, distance: distance, point: curve.startControl });
        const endControl = translatePoint({ angle: angle, distance: distance, point: curve.endControl });
        const endAnchor = translatePoint({ angle: angle, distance: distance, point: curve.endAnchor });
        const anchorMidpoint = midpoint(startAnchor, endAnchor);
        const controlMidpoint = midpoint(startControl, endControl);
        return { startAnchor: startAnchor, startControl: startControl, endControl: endControl, endAnchor: endAnchor, anchorMidpoint: anchorMidpoint, controlMidpoint: controlMidpoint };
    });
    return mirrored;
};

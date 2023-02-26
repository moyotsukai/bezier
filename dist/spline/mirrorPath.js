import { midpoint } from '../vec2/midpoint';
import { mirrorPoint } from '../vec2/mirrorPoint';
export const mirrorPath = (props) => {
    const { center, angle, path } = props;
    const mirrored = path.map((curve) => {
        const startAnchor = mirrorPoint({ center: center, angle: angle, point: curve.startAnchor });
        const startControl = mirrorPoint({ center: center, angle: angle, point: curve.startControl });
        const endControl = mirrorPoint({ center: center, angle: angle, point: curve.endControl });
        const endAnchor = mirrorPoint({ center: center, angle: angle, point: curve.endAnchor });
        const anchorMidpoint = midpoint(startAnchor, endAnchor);
        const controlMidpoint = midpoint(startControl, endControl);
        return { startAnchor: startAnchor, startControl: startControl, endControl: endControl, endAnchor: endAnchor, anchorMidpoint: anchorMidpoint, controlMidpoint: controlMidpoint };
    });
    return mirrored;
};

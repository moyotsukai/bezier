import { intersection } from './intersection';
import { inferLine } from "./inferLine";
import { rotatePoint } from "./rotatePoint";
export const mirrorPoint = (props) => {
    const { center, angle, point } = props;
    const inferedAxis = inferLine({ point: center, angle: angle });
    const inferedTargetLine = inferLine({ point: point, angle: angle + 90 });
    const intersectionPoint = intersection(inferedAxis, inferedTargetLine) ?? { x: 0, y: 0 };
    const mirrored = rotatePoint({ center: intersectionPoint, angle: 180, point: point });
    return mirrored;
};

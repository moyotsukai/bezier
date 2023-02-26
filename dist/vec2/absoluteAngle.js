import { atan } from '../utils/Math';
export const absoluteAngle = ({ start, end }) => {
    const theta = atan((end.y - start.y) / (end.x - start.x));
    if (isNaN(theta)) {
        return 0;
    }
    if (end.x - start.x >= 0) {
        return theta;
    }
    else {
        return 180 + theta;
    }
};

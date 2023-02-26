import { cos, sin } from "../utils/Math";
export const translatePoint = (props) => {
    const { angle, distance, point } = props;
    return {
        x: point.x + cos(angle) * distance,
        y: point.y - sin(angle) * distance
    };
};

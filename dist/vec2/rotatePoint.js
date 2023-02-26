import { cos, sin } from "../utils/Math";
import { absoluteAngle } from "./absoluteAngle";
import { distance } from "./distance";
export const rotatePoint = ({ center, angle, point }) => {
    const pointAngle = absoluteAngle({ start: center, end: point });
    const length = distance(center, point);
    const x = center.x + cos(pointAngle - angle) * length;
    const y = center.y + sin(pointAngle - angle) * length;
    return { x: x, y: y };
};

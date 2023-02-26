import { sin } from '../utils/Math';
import { cos } from '../utils/Math';
export const inferLine = (props) => {
    const { point, angle } = props;
    const lineLength = 1000;
    const endPoint = {
        x: point.x + cos(angle) * lineLength,
        y: point.y - sin(angle) * lineLength
    };
    return [point, endPoint];
};

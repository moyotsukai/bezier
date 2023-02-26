import { pow, sqrt } from '../utils/Math';
export const distance = (a, b) => {
    return sqrt(pow(a.x - b.x, 2) + pow(a.y - b.y, 2));
};

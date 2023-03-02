import { sqrt, pow } from '../utils/Math.js';

var distance = function distance(a, b) {
  return sqrt(pow(a.x - b.x, 2) + pow(a.y - b.y, 2));
};

export { distance };
//# sourceMappingURL=distance.js.map

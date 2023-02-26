import { translatePath } from './translatePath';
import { getEndAnchor } from './getEndAnchor';
import { mirrorPath } from './mirrorPath';
import { rotatePath } from './rotatePath';
export class BezierSpline {
    _paths;
    _stroke = null;
    _fill = null;
    constructor(paths, style) {
        this._paths = paths;
        this._stroke = style?.stroke ?? null;
        this._fill = style?.fill ?? null;
    }
    get paths() {
        return this._paths;
    }
    get stroke() {
        return this._stroke;
    }
    get fill() {
        return this._fill;
    }
    get endAnchor() {
        return getEndAnchor(this._paths);
    }
    rotate({ center, angle }) {
        return new BezierSpline(rotatePath({ center: center, angle: angle, path: this._paths }), { fill: this._fill, stroke: this._stroke });
    }
    mirror({ center, angle }) {
        return new BezierSpline(mirrorPath({ center: center, angle: angle, path: this._paths }), { fill: this._fill, stroke: this._stroke });
    }
    translate({ angle, distance }) {
        return new BezierSpline(translatePath({ angle: angle, distance: distance, path: this._paths }), { fill: this._fill, stroke: this._stroke });
    }
}

import { BezierPoints } from './BezierPoints';
import { Vec2 } from '../vec2/Vec2';
import { BezierStyleProps } from './BezierStyle';
export declare class BezierSpline {
    private _paths;
    private _stroke;
    private _fill;
    constructor(paths: BezierPoints[], style?: BezierStyleProps);
    get paths(): BezierPoints[];
    get stroke(): string | null;
    get fill(): string | null;
    get endAnchor(): Vec2;
    rotate({ center, angle }: {
        center: Vec2;
        angle: number;
    }): BezierSpline;
    mirror({ center, angle }: {
        center: Vec2;
        angle: number;
    }): BezierSpline;
    translate({ angle, distance }: {
        angle: number;
        distance: number;
    }): BezierSpline;
}

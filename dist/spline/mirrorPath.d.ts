import { BezierPoints } from './BezierPoints';
import { Vec2 } from '../vec2/Vec2';
type Props = {
    center: Vec2;
    angle: number;
    path: BezierPoints[];
};
export declare const mirrorPath: (props: Props) => BezierPoints[];
export {};

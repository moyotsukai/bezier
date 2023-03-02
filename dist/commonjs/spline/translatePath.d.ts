import { BezierPoints } from './BezierPoints';
type Props = {
    angle: number;
    distance: number;
    path: BezierPoints[];
};
export declare const translatePath: (props: Props) => BezierPoints[];
export {};

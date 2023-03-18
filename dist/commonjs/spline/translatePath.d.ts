import { BezierPoints } from './BezierPoints';
type Props = {
    angle: number;
    distance: number;
    path: BezierPoints[];
};
export declare const translatePath: ({ angle, distance, path }: Props) => BezierPoints[];
export {};

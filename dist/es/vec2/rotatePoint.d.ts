import { Vec2 } from "./Vec2";
type Props = {
    center: Vec2;
    angle: number;
    point: Vec2;
};
export declare const rotatePoint: ({ center, angle, point }: Props) => Vec2;
export {};

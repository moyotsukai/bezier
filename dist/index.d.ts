/// <reference types="react" />
import { BezierControlPointsProps } from "./spline/BezierControlPoints.type";
import { BezierPoints } from "./spline/BezierPoints";
import { BezierSpline } from "./spline/BezierSpline";
import { BezierStyleProps } from "./spline/BezierStyle";
import { Vec2 as Vec2Type } from "./vec2/Vec2";
declare namespace Bezier {
    type Vec2 = Vec2Type;
    type Points = BezierPoints;
    type Spline = BezierSpline;
    type ControlPointsProps = BezierControlPointsProps;
    type StyleProps = BezierStyleProps;
    const Svg: import("react").FC<{
        splines: BezierSpline[];
        width?: number | undefined;
        height?: number | undefined;
        expandCanvasToEdge?: boolean | undefined;
    }>;
    const Root: import("react").FC<{
        fileName?: string | undefined;
        children: import("react").ReactNode;
    }>;
    const controlPoints: (props: BezierControlPointsProps) => BezierPoints[];
    const getEndAnchor: (paths: BezierPoints[]) => Vec2Type;
    const mirrorPath: (props: {
        center: Vec2Type;
        angle: number;
        path: BezierPoints[];
    }) => BezierPoints[];
    const rotatePath: ({ center, angle, path }: {
        center: Vec2Type;
        angle: number;
        path: BezierPoints[];
    }) => BezierPoints[];
    const translatePath: (props: {
        angle: number;
        distance: number;
        path: BezierPoints[];
    }) => BezierPoints[];
    function spline(props: ControlPointsProps, style?: StyleProps): BezierSpline;
    const absoluteAngle: ({ start, end }: {
        start: Vec2Type;
        end: Vec2Type;
    }) => number;
    const distance: (a: Vec2Type, b: Vec2Type) => number;
    const inferLine: (props: {
        point: Vec2Type;
        angle: number;
    }) => [Vec2Type, Vec2Type];
    const intersection: (ab: [Vec2Type, Vec2Type], cd: [Vec2Type, Vec2Type]) => Vec2Type | null;
    const midpoint: (a: Vec2Type, b: Vec2Type) => Vec2Type;
    const mirrorPoint: (props: {
        center: Vec2Type;
        angle: number;
        point: Vec2Type;
    }) => Vec2Type;
    const rotatePoint: ({ center, angle, point }: {
        center: Vec2Type;
        angle: number;
        point: Vec2Type;
    }) => Vec2Type;
    const translatePoint: (props: {
        angle: number;
        distance: number;
        point: Vec2Type;
    }) => Vec2Type;
}
export default Bezier;

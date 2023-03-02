import { Vec2 } from '../vec2/Vec2';
export declare const isVec2: (arg: any) => arg is Vec2;
type EndPointAngleParameters = {
    eaa: number;
    eal: number;
};
export declare const isEndPointAngleParameters: (arg: any) => arg is EndPointAngleParameters;
type ControlPointsMidpointParameters = {
    cma: number;
    cml: number;
    cdr: number | "smooth";
    cda: number;
};
export declare const isControlPointsMidpointParameters: (arg: any) => arg is ControlPointsMidpointParameters;
type ControlPointsAngleParameters = {
    sca: number | "smooth";
    scl: number;
    eca: number;
    ecl: number;
};
export declare const isControlPointsAngleParameters: (arg: any) => arg is ControlPointsAngleParameters;
type ControlPointsVec2Parameters = {
    sc: Vec2;
    ec: Vec2;
};
export declare const isControlPointsVec2Parameters: (arg: any) => arg is ControlPointsVec2Parameters;
export type BezierControlPointsProps = {
    start: Vec2;
    points: {
        end: EndPointAngleParameters | Vec2;
        controls: ControlPointsMidpointParameters | ControlPointsAngleParameters | ControlPointsVec2Parameters;
    }[];
};
export {};

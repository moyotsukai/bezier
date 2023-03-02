export declare const sin: (angle: number) => number;
export declare const cos: (angle: number) => number;
export declare const asin: (num: number) => number;
export declare const acos: (num: number) => number;
export declare const atan: (num: number) => number;
export declare const sqrt: (x: number) => number;
export declare const pow: (x: number, y: number) => number;
export declare const abs: (x: number) => number;
export declare const angleAfromLawOfCosines: ({ a, b, c }: {
    a: number;
    b: number;
    c: number;
}) => number;
export declare const lengthAfromSineTheorem: ({ angleA, angleB, b }: {
    angleA: number;
    angleB: number;
    b: number;
}) => number;
export declare const angleAfromSineTheorem: ({ a, b, angleB }: {
    a: number;
    b: number;
    angleB: number;
}) => number;
export declare const normalizeAngle: (angle: number) => number;
export declare const takeAcuteAngle: (angle: number) => number;

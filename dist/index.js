import { bezierControlPoints } from "./spline/bezierControlPoints";
import { BezierSpline } from "./spline/BezierSpline";
import { getEndAnchor as bezierGetEndAnchor } from "./spline/getEndAnchor";
import { mirrorPath as bezierMirrorPath } from "./spline/mirrorPath";
import { rotatePath as bezierRotatePath } from "./spline/rotatePath";
import { translatePath as bezierTranslatePath } from "./spline/translatePath";
import SvgComponent from "./Svg/SvgComponent";
import SvgRoot from "./Svg/SvgRoot";
import { absoluteAngle as bezierAbsoluteAngle } from "./vec2/absoluteAngle";
import { distance as vec2Distance } from "./vec2/distance";
import { inferLine as vec2InferLine } from "./vec2/inferLine";
import { intersection as vec2Intersection } from "./vec2/intersection";
import { midpoint as vec2Midpoint } from "./vec2/midpoint";
import { mirrorPoint as vec2MirrorPoint } from "./vec2/mirrorPoint";
import { rotatePoint as vec2RotatePoint } from "./vec2/rotatePoint";
import { translatePoint as vec2TranslatePoint } from "./vec2/translatePoint";
var Bezier;
(function (Bezier) {
    //Components
    Bezier.Svg = SvgComponent;
    Bezier.Root = SvgRoot;
    //Functions
    Bezier.controlPoints = bezierControlPoints;
    Bezier.getEndAnchor = bezierGetEndAnchor;
    Bezier.mirrorPath = bezierMirrorPath;
    Bezier.rotatePath = bezierRotatePath;
    Bezier.translatePath = bezierTranslatePath;
    function spline(props, style) {
        return new BezierSpline(bezierControlPoints(props), { fill: style?.fill ?? null, stroke: style?.stroke ?? null });
    }
    Bezier.spline = spline;
    Bezier.absoluteAngle = bezierAbsoluteAngle;
    Bezier.distance = vec2Distance;
    Bezier.inferLine = vec2InferLine;
    Bezier.intersection = vec2Intersection;
    Bezier.midpoint = vec2Midpoint;
    Bezier.mirrorPoint = vec2MirrorPoint;
    Bezier.rotatePoint = vec2RotatePoint;
    Bezier.translatePoint = vec2TranslatePoint;
})(Bezier || (Bezier = {}));
export default Bezier;

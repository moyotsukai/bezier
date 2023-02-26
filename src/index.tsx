import { bezierControlPoints } from "./spline/bezierControlPoints"
import { BezierControlPointsProps } from "./spline/BezierControlPoints.type"
import { BezierPoints } from "./spline/BezierPoints"
import { BezierSpline } from "./spline/BezierSpline"
import { BezierStyleProps } from "./spline/BezierStyle"
import { getEndAnchor as bezierGetEndAnchor } from "./spline/getEndAnchor"
import { mirrorPath as bezierMirrorPath } from "./spline/mirrorPath"
import { rotatePath as bezierRotatePath } from "./spline/rotatePath"
import { translatePath as bezierTranslatePath } from "./spline/translatePath"
import SvgComponent from "./Svg/SvgComponent"
import SvgRoot from "./Svg/SvgRoot"
import { absoluteAngle as bezierAbsoluteAngle } from "./vec2/absoluteAngle"
import { distance as vec2Distance } from "./vec2/distance"
import { inferLine as vec2InferLine } from "./vec2/inferLine"
import { intersection as vec2Intersection } from "./vec2/intersection"
import { midpoint as vec2Midpoint } from "./vec2/midpoint"
import { mirrorPoint as vec2MirrorPoint } from "./vec2/mirrorPoint"
import { rotatePoint as vec2RotatePoint } from "./vec2/rotatePoint"
import { translatePoint as vec2TranslatePoint } from "./vec2/translatePoint"
import { Vec2 as Vec2Type } from "./vec2/Vec2"

namespace Bezier {

  //Types
  export type Vec2 = Vec2Type

  export type Points = BezierPoints

  export type Spline = BezierSpline

  export type ControlPointsProps = BezierControlPointsProps

  export type StyleProps = BezierStyleProps


  //Components
  export const Svg = SvgComponent

  export const Root = SvgRoot


  //Functions
  export const controlPoints = bezierControlPoints

  export const getEndAnchor = bezierGetEndAnchor

  export const mirrorPath = bezierMirrorPath

  export const rotatePath = bezierRotatePath

  export const translatePath = bezierTranslatePath

  export function spline(props: ControlPointsProps, style?: StyleProps) {
    return new BezierSpline(bezierControlPoints(props), { fill: style?.fill ?? null, stroke: style?.stroke ?? null })
  }

  export const absoluteAngle = bezierAbsoluteAngle

  export const distance = vec2Distance

  export const inferLine = vec2InferLine

  export const intersection = vec2Intersection

  export const midpoint = vec2Midpoint

  export const mirrorPoint = vec2MirrorPoint

  export const rotatePoint = vec2RotatePoint

  export const translatePoint = vec2TranslatePoint

}

export default Bezier
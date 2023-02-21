import { BezierPoints } from './BezierPoints'
import { Vec2 } from '../vec2/Vec2'
import { midpoint } from '../vec2/midpoint'
import { rotatePoint } from "../vec2/rotatePoint"

type Props = {
  center: Vec2
  angle: number
  path: BezierPoints[]
}

export const rotatePath = ({ center, angle, path }: Props): BezierPoints[] => {
  const rotated: BezierPoints[] = path.map((curve) => {
    const startAnchor: Vec2 = rotatePoint({ center: center, angle: angle, point: curve.startAnchor })
    const startControl: Vec2 = rotatePoint({ center: center, angle: angle, point: curve.startControl })
    const endControl: Vec2 = rotatePoint({ center: center, angle: angle, point: curve.endControl })
    const endAnchor: Vec2 = rotatePoint({ center: center, angle: angle, point: curve.endAnchor })
    const anchorMidpoint = midpoint(startAnchor, endAnchor)
    const controlMidpoint = midpoint(startControl, endControl)
    return { startAnchor: startAnchor, startControl: startControl, endControl: endControl, endAnchor: endAnchor, anchorMidpoint: anchorMidpoint, controlMidpoint: controlMidpoint }
  })

  return rotated
}
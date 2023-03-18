import { BezierPoints } from './BezierPoints'
import { Vec2 } from '../vec2/Vec2'
import { midpoint } from '../vec2/midpoint'
import { mirrorPoint } from '../vec2/mirrorPoint'

type Props = {
  center: Vec2
  angle: number
  path: BezierPoints[]
}

export const mirrorPath = ({ center, angle, path }: Props): BezierPoints[] => {
  const mirrored: BezierPoints[] = path.map((curve) => {
    const startAnchor: Vec2 = mirrorPoint({ center: center, angle: angle, point: curve.startAnchor })
    const startControl: Vec2 = mirrorPoint({ center: center, angle: angle, point: curve.startControl })
    const endControl: Vec2 = mirrorPoint({ center: center, angle: angle, point: curve.endControl })
    const endAnchor: Vec2 = mirrorPoint({ center: center, angle: angle, point: curve.endAnchor })
    const anchorMidpoint = midpoint(startAnchor, endAnchor)
    const controlMidpoint = midpoint(startControl, endControl)
    return { startAnchor: startAnchor, startControl: startControl, endControl: endControl, endAnchor: endAnchor, anchorMidpoint: anchorMidpoint, controlMidpoint: controlMidpoint }
  })

  return mirrored
}
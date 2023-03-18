import { BezierPoints } from './BezierPoints'
import { Vec2 } from '../vec2/Vec2'
import { midpoint } from '../vec2/midpoint'
import { translatePoint } from '../vec2/translatePoint'

type Props = {
  angle: number
  distance: number
  path: BezierPoints[]
}

export const translatePath = ({ angle, distance, path }: Props): BezierPoints[] => {
  const mirrored: BezierPoints[] = path.map((curve) => {
    const startAnchor: Vec2 = translatePoint({ angle: angle, distance: distance, point: curve.startAnchor })
    const startControl: Vec2 = translatePoint({ angle: angle, distance: distance, point: curve.startControl })
    const endControl: Vec2 = translatePoint({ angle: angle, distance: distance, point: curve.endControl })
    const endAnchor: Vec2 = translatePoint({ angle: angle, distance: distance, point: curve.endAnchor })
    const anchorMidpoint = midpoint(startAnchor, endAnchor)
    const controlMidpoint = midpoint(startControl, endControl)
    return { startAnchor: startAnchor, startControl: startControl, endControl: endControl, endAnchor: endAnchor, anchorMidpoint: anchorMidpoint, controlMidpoint: controlMidpoint }
  })

  return mirrored
}
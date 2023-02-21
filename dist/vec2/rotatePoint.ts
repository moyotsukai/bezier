import { cos, sin } from "../utils/Math"
import { absoluteAngle } from "./absoluteAngle"
import { Vec2 } from "./Vec2"
import { distance } from "./distance"

type Props = {
  center: Vec2
  angle: number
  point: Vec2
}

export const rotatePoint = ({ center, angle, point }: Props): Vec2 => {
  const pointAngle = absoluteAngle({ start: center, end: point })
  const length = distance(center, point)
  const x = center.x + cos(pointAngle - angle) * length
  const y = center.y + sin(pointAngle - angle) * length

  return { x: x, y: y }
}
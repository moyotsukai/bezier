import { cos, sin } from "../utils/Math"
import { Vec2 } from "./Vec2"

type Props = {
  angle: number
  distance: number
  point: Vec2
}

export const translatePoint = (props: Props): Vec2 => {
  const { angle, distance, point } = props

  return {
    x: point.x + cos(angle) * distance,
    y: point.y - sin(angle) * distance
  }
}
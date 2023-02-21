import { BezierPoints } from "./BezierPoints"
import { Vec2 } from "../vec2/Vec2"

export const getEndAnchor = (paths: BezierPoints[]): Vec2 => {
  return paths[paths.length - 1].endAnchor
}
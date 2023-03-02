import { BezierPoints } from "./BezierPoints"
import { Vec2 } from "../vec2/Vec2"

export const getStartAnchor = (paths: BezierPoints[]): Vec2 => {
  return paths[paths.length - 1].startAnchor
}
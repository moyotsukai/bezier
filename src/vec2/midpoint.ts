import { Vec2 } from "./Vec2"

export const midpoint = (a: Vec2, b: Vec2): Vec2 => {
  return {
    x: (a.x + b.x) / 2,
    y: (a.y + b.y) / 2
  }
}
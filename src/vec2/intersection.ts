import { abs } from '../utils/Math'
import { Vec2 } from './Vec2'

//2直線abとcdの交点
export const intersection = (ab: [Vec2, Vec2], cd: [Vec2, Vec2]): Vec2 | null => {
  const [a, b] = ab
  const [c, d] = cd

  if (a.x - b.x === 0) {
    const ratio_c = abs(a.x - c.x)
    const ratio_d = abs(a.x - d.x)
    const x = a.x
    if (ratio_c + ratio_d === 0) { return null }
    const y = c.y - ((d.y - c.y) * ratio_c / (ratio_c + ratio_d))
    return { x: x, y: y }
  }

  if (c.x - d.x === 0) {
    const ratio_a = abs(c.x - a.x)
    const ratio_b = abs(c.x - b.x)
    const x = c.x
    if (ratio_a + ratio_b === 0) { return null }
    const y = a.y - ((b.y - a.y) * ratio_a / (ratio_a + ratio_b))
    return { x: x, y: y }
  }

  const alpha = (a.y - b.y) / (a.x - b.x)
  const beta = (c.y - d.y) / (c.x - d.x)
  if (alpha - beta === 0) { return null }
  const x = ((c.y - beta * c.x) - (a.y - alpha * a.x)) / (alpha - beta)
  const y = alpha * x + a.y - alpha * a.x
  return { x: x, y: y }
}
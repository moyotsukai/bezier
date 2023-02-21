import { pow, sqrt } from '../utils/Math'
import { Vec2 } from './Vec2'

export const distance = (a: Vec2, b: Vec2): number => {
  return sqrt(pow(a.x - b.x, 2) + pow(a.y - b.y, 2))
}
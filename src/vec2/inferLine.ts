import { sin } from '../utils/Math'
import { cos } from '../utils/Math'
import { Vec2 } from './Vec2'

type Props = {
  point: Vec2,
  angle: number
}

export const inferLine = ({ point, angle }: Props): [Vec2, Vec2] => {
  const lineLength = 1000
  const endPoint: Vec2 = {
    x: point.x + cos(angle) * lineLength,
    y: point.y - sin(angle) * lineLength
  }

  return [point, endPoint]
}
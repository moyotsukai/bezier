import { atan } from '../utils/Math'
import { Vec2 } from './Vec2'

type Props = {
  start: Vec2,
  end: Vec2
}

export const absoluteAngle = ({ start, end }: Props) => {
  const theta = atan((end.y - start.y) / (end.x - start.x))
  if (isNaN(theta)) { return 0 }

  if (end.x - start.x >= 0) {
    return theta
  } else {
    return 180 + theta
  }
}
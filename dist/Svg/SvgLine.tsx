import React from 'react'
import { Vec2 } from '../vec2/Vec2'

type Props = {
  start: Vec2
  end: Vec2
  stroke?: string
  fill?: string
  strokeWidth?: number
}

const SvgLine: React.FC<Props> = ({ start, end, stroke, fill, strokeWidth }) => {
  return (
    <line
      x1={start.x}
      x2={end.x}
      y1={start.y}
      y2={end.y}
      stroke={stroke ?? "black"}
      fill={fill ?? "transparent"}
      stroke-width={strokeWidth ?? 1}
    />
  )
}

export default SvgLine
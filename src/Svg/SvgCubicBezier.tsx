import React from 'react'
import { BezierPoints } from '../spline/BezierPoints'
import { BezierStyleProps } from '../spline/BezierStyle'

type Props = {
  path: BezierPoints
  style: BezierStyleProps
}

const SvgCubicBezier: React.FC<Props> = ({ path, style }: Props) => {
  const d = `M ${path.startAnchor.x} ${path.startAnchor.y} C ${path.startControl.x} ${path.startControl.y}, ${path.endControl.x} ${path.endControl.y}, ${path.endAnchor.x} ${path.endAnchor.y}`

  return (
    <path
      d={d}
      stroke={style.stroke ?? "black"}
      fill={style.fill ?? "transparent"}
    />
  )
}

export default SvgCubicBezier
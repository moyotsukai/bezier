import React from "react"
import { useShowGuideValue } from "../context/ShowGuideContext"
import { BezierSpline } from "../spline/BezierSpline"
import { Vec2 } from "../vec2/Vec2"
import SvgCanvas from "./SvgCanvas"
import SvgCubicBezier from "./SvgCubicBezier"
import SvgCubicBezierInfo from "./SvgCubicBezierGuide"

type Props = {
  splines: BezierSpline[],
  width?: number,
  height?: number,
  expandCanvasToEdge?: boolean,
  shouGuide?: boolean
}

const A4: Vec2 = {
  x: 841.89,
  y: 595.28
}

const SvgComponent: React.FC<Props> = ({ splines, width = A4.x, height = A4.y, expandCanvasToEdge, shouGuide }: Props) => {
  const showGuide = shouGuide ?? useShowGuideValue()

  return (
    <SvgCanvas width={width} height={height} expandCanvasToEdge={expandCanvasToEdge}>
      {splines.map((spline, index) => (
        <g key={index}>
          {spline.paths.map((path, index) => (
            <React.Fragment key={index}>
              <SvgCubicBezier
                path={path}
                style={{
                  stroke: spline.stroke ?? null,
                  fill: spline.fill ?? null
                }}
              />
              {showGuide &&
                <SvgCubicBezierInfo pathInfo={path} width={width} />
              }
            </React.Fragment>
          ))}
        </g>
      ))}
    </SvgCanvas>
  )
}

export default SvgComponent
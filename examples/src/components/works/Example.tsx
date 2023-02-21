import React from 'react'
import Bezier from '../../../../src'

const CENTER: Bezier.Vec2 = { x: 100, y: 300 }
const SCALE = 0.5

const Example: React.FC = () => {

  const mountainPath = Bezier.spline({
    start: { x: CENTER.x, y: CENTER.y },
    points: [
      {
        end: { eaa: 0, eal: 800 * SCALE },
        controls: { cma: 30, cml: 200 * SCALE, cdr: 0.3, cda: -20 }
      }
    ]
  })

  const valleyPath = Bezier.spline({
    start: { x: CENTER.x, y: CENTER.y + 100 },
    points: [
      {
        end: { eaa: 15, eal: 800 * SCALE },
        controls: { sca: 30, scl: 200 * SCALE, eca: 45, ecl: 250 * SCALE }
      },
      {
        end: { eaa: -80, eal: 300 * SCALE },
        controls: { sca: "smooth", scl: 100 * SCALE, eca: 60, ecl: 100 * SCALE }
      }
    ]
  }, {
    stroke: "red",
    fill: "rgba(0, 0, 0, 0.1)"
  })

  const splines: Bezier.Spline[] = [
    mountainPath.rotate({ center: { x: CENTER.x, y: CENTER.y }, angle: 15 }),
    valleyPath,
  ]

  return (
    <Bezier.Svg
      splines={splines}
      // width={5000}
      // height={3000}
      expandCanvasToEdge={true}
    />
  )
}

export default Example
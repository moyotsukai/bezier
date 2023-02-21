import React from 'react'
import Bezier from '../../../../src'

const NUM = 8
const CENTER: Bezier.Vec2 = { x: 1600, y: 1000 }
const SCALE = 0.6

const WhippedCream: React.FC = () => {
  const mountainPath = Bezier.spline({
    start: { x: CENTER.x + 5, y: CENTER.y - 25 },
    points: [
      {
        end: { eaa: 90, eal: 800 * SCALE },
        controls: { cma: -80, cml: -150 * SCALE, cdr: 0.3, cda: 80 }
      }
    ]
  })



  const valleyPath = Bezier.spline({
    start: { x: CENTER.x - 5, y: CENTER.y - 25 },
    points: [
      {
        end: { eaa: 110, eal: 800 * SCALE },
        controls: { cma: -50, cml: -240 * SCALE, cdr: 0.2, cda: 30 }
      }
    ]
  })



  const splines: Bezier.Spline[] = Array(NUM).fill(0).map((_, index) => {
    return [
      mountainPath.rotate({ center: CENTER, angle: 360 / NUM * index }),
      valleyPath.rotate({ center: CENTER, angle: 360 / NUM * index })
    ]
  }).flat()

  return (
    <Bezier.Svg splines={splines} />
  )
}

export default WhippedCream
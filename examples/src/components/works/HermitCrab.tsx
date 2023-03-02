import React from 'react'
import Bezier from '../../../../src'
import { BezierSpline } from '../../../../src/spline/BezierSpline'

const NUM = 4
const ORIGINAL_SCALE = 0.2

const HermitCrab: React.FC = () => {

  const path_1 = (scale: number, start: Bezier.Vec2) => Bezier.spline({
    start: start,
    points: [
      {
        end: { eaa: 30, eal: 800 * scale },
        controls: { sca: -10, scl: 200 * scale, eca: -10, ecl: 300 * scale }
      }
    ]
  }, {
    stroke: "blue",
  })

  const path_2 = (scale: number, start: Bezier.Vec2) => Bezier.spline({
    start: path_1(scale, start).endAnchor,
    points: [
      {
        end: { eaa: -135, eal: 600 * scale },
        controls: { sca: 10, scl: 200 * scale, eca: 10, ecl: 120 * scale }
      }
    ]
  }, {
    stroke: "red",
  })

  const path_3 = (scale: number, start: Bezier.Vec2) => Bezier.spline({
    start: path_1(scale, start).startAnchor,
    points: [
      {
        end: path_2(scale, start).endAnchor,
        controls: { sca: 0, scl: 0, eca: 0, ecl: 0 }
      }
    ]
  })

  const path_4 = (scale: number, start: Bezier.Vec2) => Bezier.spline({
    start: path_1(scale, start).endAnchor,
    points: [
      {
        end: { eaa: 0, eal: 260 * scale },
        controls: { cma: 0, cml: -15 * scale, cdr: 0.5, cda: 0 }
      }
    ]
  }, {
    stroke: "red",
  })

  const path_5 = (scale: number, start: Bezier.Vec2) => Bezier.spline({
    start: path_1(scale, start).endAnchor,
    points: [
      {
        end: { eaa: 80, eal: 260 * scale },
        controls: { cma: 0, cml: -15 * scale, cdr: 0.5, cda: 0 }
      }
    ]
  }, {
    stroke: "red",
  })

  const path_6 = (scale: number, start: Bezier.Vec2) => Bezier.spline({
    start: path_1(scale, start).endAnchor,
    points: [
      {
        end: { eaa: 65, eal: 270 * scale },
        controls: { cma: 0, cml: -15 * scale, cdr: 0.5, cda: 0 }
      }
    ]
  }, {
    stroke: "blue",
  })

  const path_7 = (scale: number, start: Bezier.Vec2) => Bezier.spline({
    start: path_5(scale, start).endAnchor,
    points: [
      {
        end: path_6(scale, start).endAnchor,
        controls: { cma: 0, cml: 0, cdr: 0, cda: 0 }
      }
    ]
  })

  type GeneratePathProps = {
    path: BezierSpline,
    angle: number,
    index: number,
    scale: number,
    start: Bezier.Vec2
  }

  const generatePath = ({ path, angle, index, scale, start }: GeneratePathProps) => {
    let _path = path
    for (let i = 0; i < index; i++) {
      _path = _path
        .rotate({
          center: path_1(ORIGINAL_SCALE, start).endAnchor, angle: angle
        })
        .translate({
          angle: 0,
          distance: Bezier.distance(path_4(ORIGINAL_SCALE, start).startAnchor, path_4(ORIGINAL_SCALE, start).endAnchor)
        })
    }
    return _path
  }

  const generateSplines = (): Bezier.Spline[] => {
    let _splines: Bezier.Spline[][] = []
    for (let i = 0; i < NUM; i++) {
      const _index = i - 1 <= 0 ? 0 : i - 1
      const angle = 20
      const scale = ORIGINAL_SCALE * Math.pow(1.1, -_index)
      const start: Bezier.Vec2 = i <= 0 ? { x: 100, y: 400 } : _splines[_splines.length - 1][0].startAnchor

      _splines.push([
        generatePath({ path: path_1(scale, start), angle: angle, index: i, scale: scale, start: start }),
        generatePath({ path: path_2(scale, start), angle: angle, index: i, scale: scale, start: start }),
        generatePath({ path: path_3(scale, start), angle: angle, index: i, scale: scale, start: start }),
        generatePath({ path: path_4(scale, start), angle: angle, index: i, scale: scale, start: start }),
        generatePath({ path: path_5(scale, start), angle: angle, index: i, scale: scale, start: start }),
        generatePath({ path: path_6(scale, start), angle: angle, index: i, scale: scale, start: start }),
        generatePath({ path: path_7(scale, start), angle: angle, index: i, scale: scale, start: start }),
      ].flat()
      )
    }
    return _splines.flat()
  }

  // const splines: Bezier.Spline[] = Array(NUM).fill(0).map((_, index) => {
  //   const _index = index - 1 <= 0 ? 0 : index - 1
  //   const angle = 20
  //   const scale = ORIGINAL_SCALE * Math.pow(1.1, -_index)

  //   return [
  //     generatePath({ path: path_1(scale), angle: angle, index: index, scale: scale }),
  //     generatePath({ path: path_2(scale), angle: angle, index: index, scale: scale }),
  //     generatePath({ path: path_3(scale), angle: angle, index: index, scale: scale }),
  //     generatePath({ path: path_4(scale), angle: angle, index: index, scale: scale }),
  //     generatePath({ path: path_5(scale), angle: angle, index: index, scale: scale }),
  //     generatePath({ path: path_6(scale), angle: angle, index: index, scale: scale }),
  //     generatePath({ path: path_7(scale), angle: angle, index: index, scale: scale }),
  //   ]
  // }).flat()

  const splines = generateSplines()

  return (
    <Bezier.Svg
      splines={splines}
      expandCanvasToEdge={true}
    // shouGuide={true}
    />
  )
}

export default HermitCrab
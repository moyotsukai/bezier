import React from 'react'
import { BezierPoints } from '../spline/BezierPoints'
import SvgCircle from './SvgCircle'
import SvgLine from './SvgLine'

type Props = {
  pathInfo: BezierPoints
  width: number
}

const SvgCubicBezierGuide: React.FC<Props> = ({ pathInfo, width }) => {
  const info = pathInfo
  const guideScale = 1

  return (
    <React.Fragment>
      <SvgLine start={info.startAnchor} end={info.endAnchor} stroke="gray" strokeWidth={1 * guideScale} />
      <SvgLine start={info.anchorMidpoint} end={info.controlMidpoint} stroke="gray" strokeWidth={1 * guideScale} />
      <SvgLine start={info.startControl} end={info.endControl} stroke="gray" strokeWidth={1 * guideScale} />
      <SvgLine start={info.startAnchor} end={info.startControl} stroke="gray" strokeWidth={1 * guideScale} />
      <SvgLine start={info.endAnchor} end={info.endControl} stroke="gray" strokeWidth={1 * guideScale} />

      <SvgCircle center={info.startAnchor} radius={2 * guideScale} fill={"black"} />
      <SvgCircle center={info.endAnchor} radius={2 * guideScale} fill={"gray"} />
      <SvgCircle center={info.startControl} radius={2 * guideScale} fill={"red"} />
      <SvgCircle center={info.endControl} radius={2 * guideScale} fill={"blue"} />
      <SvgCircle center={info.anchorMidpoint} radius={2 * guideScale} fill={"pink"} />
      <SvgCircle center={info.controlMidpoint} radius={2 * guideScale} fill={"green"} />
    </React.Fragment>
  )
}

export default SvgCubicBezierGuide
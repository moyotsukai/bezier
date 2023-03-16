import React from 'react'
import '../styles/svg/svg.css'
import '@moyotsukai/bezier/dist/es/index.css'

type Props = {
  width?: number
  height?: number
  expandCanvasToEdge?: boolean
  children?: React.ReactNode
}

//The dedault size 841.89px x 595.28px is A4
const SvgCanvas: React.FC<Props> = ({ width, height, expandCanvasToEdge = false, children }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={`${width}px`}
      height={`${height}px`}
      viewBox={`0 0 ${width} ${height}`}
      stroke="black"
      fill="transparent"
      className={`${"svgCanvas"} ${expandCanvasToEdge && "svgCanvasExpand"}`}
    >
      {children}
    </svg>
  )
}

export default SvgCanvas
import React, { useRef } from 'react'
import { ShowGuideConatextProvider } from '../context/ShowGuideContext'
import { ShowGuideToggleButton } from './ShowGuideToggleButton'
import '../styles/svg/svg.css'
import '@moyotsukai/bezier/dist/es/index.css'

type Props = {
  fileName?: string
  children: React.ReactNode
}

const SvgRoot: React.FC<Props> = ({ fileName, children }) => {
  const svgContainerRef = useRef<HTMLDivElement>(null)

  const downloadSvg = () => {
    if (!svgContainerRef) { return }
    const svgElement = svgContainerRef.current?.querySelector("svg")
    const svgText = new XMLSerializer().serializeToString(svgElement as Node)
    const svgBlob = new Blob([svgText], { type: 'image/svg+xml;charset=utf-8' })
    const svgUrl = URL.createObjectURL(svgBlob)
    const a = document.createElement('a')
    a.href = svgUrl
    a.download = `${fileName ?? "bezier_spline"}.svg`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(svgUrl)
  }

  return (
    <ShowGuideConatextProvider>
      <button onClick={downloadSvg} className={"svgDownloadButton"}>
        Download SVG
      </button>
      <ShowGuideToggleButton />
      <div ref={svgContainerRef}>
        {children}
      </div>
    </ShowGuideConatextProvider>
  )
}

export default SvgRoot
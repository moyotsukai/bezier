import React from 'react'
import { useSetShowGuide, useShowGuideValue } from '../context/ShowGuideContext'
import '../styles/svg/svg.css'
import '@moyotsukai/bezier/dist/es/index.css'

export const ShowGuideToggleButton: React.FC = () => {
  const [showGuide, setShowGuide] = [useShowGuideValue(), useSetShowGuide()]

  const onToggleSwitch = () => {
    setShowGuide((prev) => !prev)
  }

  return (
    <span className={"svgShowGuideButtonContainer"}>
      Show guide
      <input type="checkbox" checked={showGuide} onChange={onToggleSwitch} className={"svgShowGuideButton"} />
    </span>
  )
}
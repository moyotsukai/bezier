import React, { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'

const ShowGuideValueContext = createContext<boolean>(false)

const ShowGuideDispatchContext = createContext<Dispatch<SetStateAction<boolean>>>(() => undefined)

type Props = {
  children: React.ReactNode
}

export const ShowGuideConatextProvider: React.FC<Props> = ({ children }) => {
  const [showGuide, setShowGuide] = useState<boolean>(false)

  return (
    <ShowGuideValueContext.Provider value={showGuide} >
      <ShowGuideDispatchContext.Provider value={setShowGuide}>
        {children}
      </ShowGuideDispatchContext.Provider>
    </ShowGuideValueContext.Provider>
  )
}

export const useShowGuideValue = () => useContext(ShowGuideValueContext)

export const useSetShowGuide = () => useContext(ShowGuideDispatchContext)

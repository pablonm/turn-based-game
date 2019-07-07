import React, { useState, useContext, createContext } from 'react'
const SkillEffectAreaContext = createContext()

function SkillEffectAreaProvider({ children }) {
  const [effectTiles, setEffectTiles] = useState([])
  return (
    <SkillEffectAreaContext.Provider value={{ effectTiles, setEffectTiles }}>
      {children}
    </SkillEffectAreaContext.Provider>
  )
}

function useSkillEffectArea() {
  const context = useContext(SkillEffectAreaContext)
  if (context === undefined) {
    throw new Error('useSkillEffectArea must be used within a SkillEffectAreaProvider')
  }
  return context
}

export { SkillEffectAreaProvider, useSkillEffectArea }

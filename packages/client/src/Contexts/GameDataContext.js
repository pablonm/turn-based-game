import React, { useContext, createContext } from 'react'

const GameDataContext = createContext()

function GameDataProvider({ children, gameData }) {
  return (
    <GameDataContext.Provider value={gameData}>
      {children}
    </GameDataContext.Provider>
  )
}

function useGameData() {
  const context = useContext(GameDataContext)
  if (context === undefined) {
    throw new Error('useGameData must be used within a GameDataProvider')
  }
  return context
}

export { GameDataProvider, useGameData }

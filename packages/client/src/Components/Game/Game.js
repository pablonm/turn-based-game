import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import Tilemap from '../Common/Tilemap/Tilemap'
import InteractionPanel from '../Common/InteractionPanel/InteractionPanel'
import { SkillEffectAreaProvider } from '../../Contexts/SkillEffectAreaContext'
import { SelectedPlayerInfoProvider } from '../../Contexts/SelectedPlayerInfoContext'
import { GameDataProvider } from '../../Contexts/GameDataContext'
import './Game.scss'

function Game() {
  const [gameData, setGameData] = useState(null)
  
  useEffect(() => {
    const socket = io('http://localhost:3001')
    socket.on('gameData', data => {
      setGameData(data)
    })
    socket.on('effectsApplied', data => {
      console.log('Effects applied: ', data)
    })
    return () => {
      socket.close()
    }
  }, [])

  if (!gameData) return <p>Loading...</p>
  return (
    <GameDataProvider gameData={gameData}>
      <SelectedPlayerInfoProvider gameData={gameData}>
        <SkillEffectAreaProvider>
          <div className="layout">
            <div className="gameBoard">
              <Tilemap />
            </div>
            <div className="gameUI">
              <InteractionPanel />
            </div>
          </div>
        </SkillEffectAreaProvider>
      </SelectedPlayerInfoProvider>
    </GameDataProvider>
  )
}

export default Game

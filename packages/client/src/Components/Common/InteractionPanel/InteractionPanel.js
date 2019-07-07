/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import classNames from 'classnames'
import CharacterList from './CharacterList/CharacterList'
import CharacterInfo from './CharacterInfo/CharacterInfo'
import { useSelectedPlayerInfo } from '../../../Contexts/SelectedPlayerInfoContext'
import { useGameData } from '../../../Contexts/GameDataContext'
import './InteractionPanel.scss'

const InteractionPanel = () => {
  const { players } = useGameData()
  const { selectedPlayer, setSelectedPlayer } = useSelectedPlayerInfo()
  const clickPlayerTabHandler = playerId => () => setSelectedPlayer(playerId)
  const tabClasses = playerId => classNames('tab', { active: playerId === selectedPlayer.id })

  return (
    <div className="interactionPanel">
      <div className="playersTabs">
        {players.map(player => (
          <div
            key={`playerTab${player.id}`}
            className={tabClasses(player.id)}
            onClick={clickPlayerTabHandler(player.id)}
          >
            {player.name}
          </div>
        ))}
      </div>
      <div className="content">
        <CharacterList />
        <CharacterInfo />
      </div>
    </div>
  )
}

export default InteractionPanel

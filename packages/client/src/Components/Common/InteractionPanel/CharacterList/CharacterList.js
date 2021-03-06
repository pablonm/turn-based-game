import React from 'react'
import classNames from 'classnames'
import { useSelectedPlayerInfo } from '../../../../Contexts/SelectedPlayerInfoContext'
import { useGameData } from '../../../../Contexts/GameDataContext'
import './CharacterList.scss'

const CharacterList = () => {
  const { characters } = useGameData()
  const { selectedChar, selectedPlayer, setSelectedChar } = useSelectedPlayerInfo()
  const playerChars = characters.filter(char => char.player === selectedPlayer.id)
  const characterClickHandler = charCode => () => setSelectedChar(charCode)
  const characterClasses = charCode =>
    classNames('character', { active: charCode === selectedChar.code })

  return (
    <div className="characters">
      {playerChars.map(character => (
        <div
          key={`character${character.code}`}
          className={characterClasses(character.code)}
          onClick={characterClickHandler(character.code)}
        >
          <img
            src={character.image}
            alt={character.name}
          />
        </div>
      ))}
    </div>
  )
}

export default CharacterList

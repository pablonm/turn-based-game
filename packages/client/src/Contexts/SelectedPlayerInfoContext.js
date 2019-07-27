import React, { useState, useContext, createContext } from 'react'
import charactersLogic from 'characters'
const SelectedPlayerInfoContext = createContext()

function SelectedPlayerInfoProvider({ children, gameData: { players, characters } }) {
  const [selectedPlayerId, setSelectedPlayerId] = useState(players[0].id)
  const [selectedCharsCodes, setSelectedCharsCodes] = useState(
    players.reduce((obj, player) => ({ ...obj, [player.id]: player.characters[0] }), {})
  )
  const [selectedSkillsCodes, setSelectedSkillsCodes] = useState(
    characters.reduce((obj, char) => ({ ...obj, [char.player + char.code]: char.skills[0] }), {})
  )

  const selectedPlayer = players.find(player => player.id === selectedPlayerId)
  const selectedChar = characters.find(char => char.code === selectedCharsCodes[selectedPlayerId])
  const selectedSkill = charactersLogic.actions.get(selectedSkillsCodes[selectedPlayerId + selectedChar.code])

  const setSelectedPlayer = playerId => setSelectedPlayerId(playerId)
  const setSelectedChar = charId =>
    setSelectedCharsCodes(prev => ({ ...prev, [selectedPlayer.id]: charId }))
  const setSelectedSkill = skillId =>
    setSelectedSkillsCodes(prev => ({ ...prev, [selectedPlayer.id + selectedChar.code]: skillId }))

  return (
    <SelectedPlayerInfoContext.Provider
      value={{
        selectedPlayer,
        selectedChar,
        selectedSkill,
        setSelectedPlayer,
        setSelectedChar,
        setSelectedSkill
      }}
    >
      {children}
    </SelectedPlayerInfoContext.Provider>
  )
}

function useSelectedPlayerInfo() {
  const context = useContext(SelectedPlayerInfoContext)
  if (context === undefined) {
    throw new Error('useSelectedPlayerInfo must be used within a SelectedPlayerInfoProvider')
  }
  return context
}

export { SelectedPlayerInfoProvider, useSelectedPlayerInfo }

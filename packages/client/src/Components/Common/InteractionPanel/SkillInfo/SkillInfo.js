import React, { useEffect } from 'react'
import './SkillInfo.scss'
import { action } from '../../../../Utils/ServerApi'
import { useSkillEffectArea } from '../../../../Contexts/SkillEffectAreaContext'
import { useSelectedPlayerInfo } from '../../../../Contexts/SelectedPlayerInfoContext'
import { useGameData } from '../../../../Contexts/GameDataContext'

const SkillInfo = () => {
  const { map } = useGameData()
  const { setEffectTiles } = useSkillEffectArea()
  const { selectedSkill, selectedChar } = useSelectedPlayerInfo()

  const actionHandler = skillCode => () => action(selectedChar.code, skillCode)

  useEffect(() => {
    const previewFunction = selectedSkill.preview
    if (previewFunction) {
      setEffectTiles(previewFunction(selectedChar, map))
    }
  }, [setEffectTiles, selectedChar, map, selectedSkill.code, selectedSkill.preview])

  return (
    <div className="skillInfo">
      <h1>{selectedSkill.name}</h1>
      <p>{selectedSkill.description}</p>
      {selectedSkill.type === 'movement' && (
        <div>
          <button onClick={actionHandler('TURN_LEFT')}> Left </button>
          <button onClick={actionHandler('MOVE')}> Move </button>
          <button onClick={actionHandler('TURN_RIGHT')}> Right </button>
        </div>
      )}
      {selectedSkill.type === 'active' && <button onClick={actionHandler(selectedSkill.code)}> Do it </button>}
    </div>
  )
}

export default SkillInfo

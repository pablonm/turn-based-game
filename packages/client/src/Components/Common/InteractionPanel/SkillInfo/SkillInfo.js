import React, { useEffect } from 'react'
import characters from 'characters'
import './SkillInfo.scss'
import { move, left, right, attack1 } from '../../../../Utils/ServerApi'
import { useSkillEffectArea } from '../../../../Contexts/SkillEffectAreaContext'
import { useSelectedPlayerInfo } from '../../../../Contexts/SelectedPlayerInfoContext'
import { useGameData } from '../../../../Contexts/GameDataContext'

const SkillInfo = () => {
  const { map } = useGameData()
  const { setEffectTiles } = useSkillEffectArea()
  const { selectedSkill, selectedChar } = useSelectedPlayerInfo()

  const moveHandler = () => move(selectedChar.code)
  const leftHandler = () => left(selectedChar.code)
  const rightHandler = () => right(selectedChar.code)
  const attack1Handler = () => attack1(selectedChar.code)

  useEffect(() => {
    const previewFunction = characters.skillPreviews.get(selectedSkill.code)
    if (previewFunction) {
      setEffectTiles(previewFunction(selectedChar, map))
    }
  }, [setEffectTiles, selectedChar, map, selectedSkill.code])

  return (
    <div className="skillInfo">
      <h1>{selectedSkill.name}</h1>
      <p>{selectedSkill.description}</p>
      {selectedSkill.type === 'movement' && (
        <div>
          <button onClick={leftHandler}> Left </button>
          <button onClick={moveHandler}> Move </button>
          <button onClick={rightHandler}> Right </button>
        </div>
      )}
      {selectedSkill.type === 'active' && <button onClick={attack1Handler}> Do it </button>}
    </div>
  )
}

export default SkillInfo

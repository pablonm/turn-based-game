import React from 'react'
import classNames from 'classnames'
import SkillInfo from '../SkillInfo/SkillInfo'
import { useSelectedPlayerInfo } from '../../../../Contexts/SelectedPlayerInfoContext'
import './CharacterInfo.scss'

const CharacterInfo = () => {
  const { selectedSkill, selectedChar, setSelectedSkill } = useSelectedPlayerInfo()

  const skillClickHandler = skillCode => () => setSelectedSkill(skillCode)
  const skillClasses = skillCode =>
    classNames('skill', { active: skillCode === selectedSkill.code })

  return (
    <div className="character">
      <div className="info">
        <div className="status">
          <div>{selectedChar.name}</div>
          <div>status: </div>
          <div>buffs: </div>
        </div>
        <div className="skills">
          {selectedChar.skills.map(skill => (
            <div
              key={`skill_${skill.code}`}
              onClick={skillClickHandler(skill.code)}
              className={skillClasses(skill.code)}
            >
              <img src={skill.image} alt={skill.name} />
            </div>
          ))}
        </div>
      </div>
      <SkillInfo />
    </div>
  )
}

export default CharacterInfo

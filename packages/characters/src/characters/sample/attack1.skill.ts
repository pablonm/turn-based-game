import SkillTypes from '../../enums/SkillTypes'
import getTileInFront from '../../utils/getTileInFront'
import Point from '../../interfaces/Point'
import SkillInfo from '../../interfaces/SkillInfo'

export const attack1Info : SkillInfo = {
  code: 'SAMPLE_ATTACK1',
  type: SkillTypes.ACTIVE,
  name: 'Attack 1',
  description: 'This is a very powerful attack',
  image:
    'https://cdn3.iconfinder.com/data/icons/game-play/512/gaming-game-play-multimedia-console-18-512.png'
}

export const attack1Preview = (character, map) : Array<Point> => {
  const effect = []
  const tileInFront = getTileInFront({ character, map })
  if (tileInFront) effect.push(tileInFront)
  return effect
}
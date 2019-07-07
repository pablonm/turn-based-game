import SkillTypes from '../../enums/SkillTypes'
import movement from '../../movement'
import Point from '../../interfaces/Point'
import SkillInfo from '../../interfaces/SkillInfo'

export const basicMovementInfo : SkillInfo = {
  code: 'COMMON_BASIC_MOVEMENT',
  type: SkillTypes.MOVEMENT,
  name: 'Movement',
  description: 'Move in the map',
  image:
    'https://cdn3.iconfinder.com/data/icons/game-play/512/gaming-game-play-multimedia-console-18-512.png'
}

export const basicMovementPreview = (character, map) : Array<Point> => {
  const effect = []
  if (movement.isMovementValid(map, character)) {
    const newCharacter = {
      ...character,
      position: movement.getNewPosition(character)
    }
    effect.push({ x: newCharacter.position.x, y: newCharacter.position.y })
  }
  return effect
}
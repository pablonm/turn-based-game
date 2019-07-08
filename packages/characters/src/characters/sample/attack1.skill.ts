import SkillTypes from '../../enums/SkillTypes'
import EffectTypes from '../../enums/EffectTypes'
import getTileInFront from '../../utils/getTileInFront'
import isSamePosition from '../../utils/isSamePosition'
import Point from '../../interfaces/Point'
import SkillInfo from '../../interfaces/SkillInfo'
import ActionEffect, { DamageOnCharacter } from '../../interfaces/Effects'

export const attack1Info : SkillInfo = {
  code: 'SAMPLE_ATTACK1',
  type: SkillTypes.ACTIVE,
  name: 'Attack 1',
  description: 'This is a very powerful attack',
  image:
    'https://cdn3.iconfinder.com/data/icons/game-play/512/gaming-game-play-multimedia-console-18-512.png'
}

export const attack1Preview = (character, map) : Array<Point> => {
  const preview = []
  const tileInFront = getTileInFront({ character, map })
  if (tileInFront) preview.push(tileInFront)
  return preview
}

export const attack1effect = (character, game) : ActionEffect => {
  const { characters, map } = game
  const effectArea = attack1Preview(character, map)
  const effects : Array<DamageOnCharacter> = []
  const newGame = {
    ...game,
    characters: characters.map(char => {
      if (isSamePosition(char.position, effectArea[0])) {
        effects.push({
          type: EffectTypes.DAMAGE_ON_CHARACTER,
          toCharacter: char.code,
          amount: 10
        })
        return {
          ...char,
          health: char.health - 10
        }
      }
      return char
    })
  }

  return {
    game: newGame,
    effectsApplied: effects
  }
}
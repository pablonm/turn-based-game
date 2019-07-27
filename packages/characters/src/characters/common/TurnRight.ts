import ActionTypes from '../../enums/ActionTypes'
import EffectTypes from '../../enums/EffectTypes'
import Directions from '../../enums/Directions'
import Point from '../../interfaces/Point'
import ActionEffect, { CharacterRotated } from '../../interfaces/Effects'
import Action from '../../classes/Action'
import Character from '../../classes/Character';

class TurnRight extends Action {

  code = 'TURN_RIGHT'
  name = 'Turn right'
  type = ActionTypes.MOVEMENT
  description = 'Move to the right'
  image = 'https://cdn3.iconfinder.com/data/icons/game-play/512/gaming-game-play-multimedia-console-18-512.png'

  preview(character, map): Array<Point> {
    return []
  }

  execute(character, game): ActionEffect {
    const dirs = [Directions.NORTH, Directions.EAST, Directions.SOUTH, Directions.WEST]
    const newDirectionIndex = dirs.indexOf(character.direction) + 1
    const newDirection = dirs[(newDirectionIndex < 0 ? 3 : newDirectionIndex) % 4]
    const effects : Array<CharacterRotated> = []
    effects.push({
      type: EffectTypes.CHARACTER_ROTATED,
      character: character.code,
      fromDirection: character.direction,
      toDirection: newDirection
    })
    const newGame = {
      ...game,
      characters: game.characters.map((char: Character) => {
        if (char.code === character.code)
          return char.setDirection(newDirection)
        return char
      })
    }

    return {
      game: newGame,
      effectsApplied: effects
    }
  }
}

export default new TurnRight()
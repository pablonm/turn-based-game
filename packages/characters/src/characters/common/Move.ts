import ActionTypes from '../../enums/ActionTypes'
import EffectTypes from '../../enums/EffectTypes'
import getTileInFront from '../../utils/getTileInFront'
import isTileInMap from '../../utils/isTileInMap'
import Point from '../../interfaces/Point'
import ActionEffect, { CharacterMoved } from '../../interfaces/Effects'
import Action from '../../classes/Action'
import Character from '../../classes/Character';
import Game from '../../classes/Game';

class Move extends Action {

  code = 'MOVE'
  name = 'Move'
  type = ActionTypes.MOVEMENT
  description = 'This is a very powerful attack'
  image = 'https://cdn3.iconfinder.com/data/icons/game-play/512/gaming-game-play-multimedia-console-18-512.png'

  preview(character, map): Array<Point> {
    const effect = []
    const tileInFront = getTileInFront({ character, map })
    if (tileInFront) {
      const newCharacter = {
        ...character,
        position: tileInFront
      }
      effect.push({ x: newCharacter.position.x, y: newCharacter.position.y })
    }
    return effect
  }

  execute(character: Character, game: Game): ActionEffect {
    const { map } = game
    let newGame = game
    const effects: Array<CharacterMoved> = []
    const newPosition = getTileInFront({ character, map })
    if (isTileInMap(map, newPosition)) {
      effects.push({
        type: EffectTypes.CHARACTER_MOVED,
        character: character.code,
        fromPosition: character.position,
        toPosition: newPosition
      })
      newGame = {
        ...game,
        characters: game.characters.map((char: Character) => {
          if (char.code === character.code)
            return char.setPosition(newPosition)
          return char
        })
      }
    }

    return {
      game: newGame,
      effectsApplied: effects
    }
  }
}

export default new Move()
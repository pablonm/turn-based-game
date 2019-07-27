import ActionTypes from '../../enums/ActionTypes'
import getTileInFront from '../../utils/getTileInFront'
import getCharacterInTile from '../../utils/getCharacterInTile'
import Point from '../../interfaces/Point'
import ActionEffect from '../../interfaces/Effects'
import Action from '../../classes/Action'
import Character from '../../classes/Character';

class Attack1 extends Action {
  
  public code = 'SAMPLE_ATTACK1'
  public name = 'Attack1'
  public type = ActionTypes.ACTIVE
  public description = 'This is a very powerful attack'
  public image = 'https://cdn3.iconfinder.com/data/icons/game-play/512/gaming-game-play-multimedia-console-18-512.png'

  public preview(character, map) : Array<Point> {
    const preview = []
    const tileInFront = getTileInFront({ character, map })
    if (tileInFront) preview.push(tileInFront)
    return preview
  }

  public execute(character, game) : ActionEffect {
    const effectArea = this.preview(character, game.map)
    const receiver = getCharacterInTile(game, effectArea[0]) as Character
    if (receiver) {
      return receiver.receiveDamage(game, receiver.code, character.code)
    } else {
      return {
        game,
        effectsApplied: []
      }
    }

  }
}

export default new Attack1()
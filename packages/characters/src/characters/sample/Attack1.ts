import ActionTypes from '../../enums/ActionTypes'
import nextPointInDirection from '../../utils/nextPointInDirection'
import Map from '../../interfaces/Map';
import Point from '../../interfaces/Point'
import ActionEffect from '../../interfaces/Effects'
import Game from '../../classes/Game';
import Action from '../../classes/Action'
import Character from '../../classes/Character';
import applyDamageOnArea from '../../utils/applyDamageOnArea';

class Attack1 extends Action {
  
  public code = 'SAMPLE_ATTACK1'
  public name = 'Attack1'
  public type = ActionTypes.ACTIVE
  public description = 'This is a very powerful attack'
  public image = 'https://cdn3.iconfinder.com/data/icons/game-play/512/gaming-game-play-multimedia-console-18-512.png'

  public preview(character: Character, map: Map) : Array<Point> {
    const preview = []
    const tileInFront = nextPointInDirection(character.position, character.direction, map)
    if (tileInFront) preview.push(tileInFront)
    return preview
  }

  public execute(character: Character, game: Game) : ActionEffect {
    const effectArea = this.preview(character, game.map)
    return applyDamageOnArea(game, character, effectArea, 10)
  }
}

export default new Attack1()
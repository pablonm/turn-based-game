import ActionTypes from '../../enums/ActionTypes'
import Point from '../../interfaces/Point'
import ActionEffect from '../../interfaces/Effects'
import Map from '../../interfaces/Map'
import Action from '../../classes/Action'
import Character from '../../classes/Character';
import Game from '../../classes/Game';
import nextPointInDirection from '../../utils/nextPointInDirection'
import applyDamageOnArea from '../../utils/applyDamageOnArea'

class Attack1 extends Action {

  public code = 'FENNELORE_SPIRIT_ARROW'
  public name = 'Spirit Arrow'
  public type = ActionTypes.ACTIVE
  public description = 'Shoots a spirit arrow that travels across the entire map dealing damage to each enemy it hits'
  public image = 'https://cdn3.iconfinder.com/data/icons/game-play/512/gaming-game-play-multimedia-console-18-512.png'

  public preview(character: Character, map: Map): Array<Point> {
    const preview = []
    let nextTile = nextPointInDirection(character.position, character.direction, map)
    while (nextTile) {
      preview.push(nextTile)
      nextTile = nextPointInDirection(nextTile, character.direction, map)
    }
    return preview
  }

  public execute(character: Character, game: Game): ActionEffect {
    const effectArea = this.preview(character, game.map)
    return applyDamageOnArea(game, character, effectArea, 10)
  }
}

export default new Attack1()
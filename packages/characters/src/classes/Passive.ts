import Point from '../interfaces/Point'
import ActionEffect from '../interfaces/Effects'
import ActionTypes from '../enums/ActionTypes'
import Action from './Action';

abstract class Passive extends Action {

  public type = ActionTypes.PASIVE
  public abstract code: string
  public abstract name: string
  public abstract description: string
  public abstract image: string

  public preview(character, map) : Array<Point> {
    return []
  }

  public execute(character, game) : ActionEffect {
    return {
      game,
      effectsApplied: []
    }
  }
}

export default Passive
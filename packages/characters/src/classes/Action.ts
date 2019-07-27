import Point from '../interfaces/Point'
import ActionEffect from '../interfaces/Effects'
import ActionTypes from '../enums/ActionTypes'

abstract class Action {
  public abstract code: string
  public abstract name: string
  public abstract type: ActionTypes
  public abstract description: string
  public abstract image: string
  public abstract preview(character, map) : Array<Point>
  public abstract execute(character, game) : ActionEffect
}

export default Action
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

  /**
   * Setters
   */

  public setCode(code): Action { this.code = code; return this }
  public setName(name): Action { this.name = name; return this }
  public setType(type): Action { this.type = type; return this }
  public setDescription(description): Action { this.description = description; return this }
  public setImage(image): Action { this.image = image; return this }

}

export default Action
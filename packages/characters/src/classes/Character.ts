import Point from "../interfaces/Point";
import EffectTypes from "../enums/EffectTypes";
import Directions from "../enums/Directions";
import ActionEffect, { DamageOnCharacter, StatusOnCharacter } from "../interfaces/Effects";
import Status from "../enums/Status";
import Action from "./Action";

abstract class Character {
  public abstract code: string
  public abstract name: string
  public abstract player: string
  public abstract skills: Array<Action>
  public abstract position: Point
  public abstract direction: Directions
  public abstract maxHealth: number
  public abstract currentHealth: number
  public abstract maxEnergy: number
  public abstract currentEnergy: number
  public abstract image: string
  public abstract status: Array<Status>

  /**
   * Setters.
   */

  public setCode(code): Character { this.code = code; return this }
  public setName(name): Character { this.name = name; return this }
  public setPlayer(player): Character { this.player = player; return this }
  public setSkills(skills): Character { this.skills = skills; return this }
  public setPosition(position): Character { this.position = position; return this }
  public setDirection(direction): Character { this.direction = direction; return this }
  public setMaxHealth(maxHealth): Character { this.maxHealth = maxHealth; return this }
  public setCurrentHealth(currentHealth): Character { this.currentHealth = currentHealth; return this }
  public setMaxEnergy(maxEnergy): Character { this.maxEnergy = maxEnergy; return this }
  public setCurrentEnergy(currentEnergy): Character { this.currentEnergy = currentEnergy; return this }
  public setImage(image): Character { this.image = image; return this }
  public setStatus(status): Character { this.status = status; return this }

  /**
   * Character methods.
   */

  public addStatus(status: Status): Character {
    this.status.push(status)
    return this
  }

  public removeStatus(status: Status): Character {
    this.status = this.status.filter(s => s === status)
    return this
  }

  public receiveDamage(game, receiverCode, attackerCode, amount): ActionEffect {
    const newGame = {
      ...game,
      characters: game.characters.map(char => {
        if (char.code === receiverCode)
          return char.setCurrentHealth(this.currentHealth - amount)
        return char
      })
    }
    const effectsApplied: Array<DamageOnCharacter> = [{
      type: EffectTypes.DAMAGE_ON_CHARACTER,
      fromCharacter: attackerCode,
      toCharacter: receiverCode,
      amount
    }]
    return { game: newGame, effectsApplied }
  }

  public applyStatus(game, receiverCode, attackerCode, status): ActionEffect {
    const newGame = {
      ...game,
      characters: game.characters.map(char => {
        if (char.code === receiverCode)
          return char.addStatus(status)
        return char
      })
    }
    const effectsApplied: Array<StatusOnCharacter> = [{
      type: EffectTypes.STATUS_ON_CHARACTER,
      fromCharacter: attackerCode,
      toCharacter: receiverCode,
      status
    }]
    return { game: newGame, effectsApplied }
  }

  /**
   * Game lifecycle methods called by the game on each
   * character at certain moments.
   */

  public onCharacterReceivedDamage(game): ActionEffect {
    return { game, effectsApplied: [] }
  }

  public turnTick(game): ActionEffect {
    return { game, effectsApplied: [] }
  }

  public onCharacterMoved(game): ActionEffect {
    return { game, effectsApplied: [] }
  }

}

export default Character
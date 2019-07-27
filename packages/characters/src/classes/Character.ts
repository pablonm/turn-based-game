import Point from "../interfaces/Point";
import EffectTypes from "../enums/EffectTypes";
import Directions from "../enums/Directions";
import ActionEffect, { DamageOnCharacter } from "../interfaces/Effects";
import characters from '../characters'

abstract class Character {
  public abstract code: string
  public abstract name: string
  public abstract player: string
  public abstract skills: Array<string>
  public abstract position: Point
  public abstract direction: Directions
  public abstract maxHealth: number
  public abstract currentHealth: number
  public abstract maxEnergy: number
  public abstract currentEnergy: number
  public abstract image: string

  public setCode(code) : Character {
    this.code = code
    return this
  }

  public setName(name) : Character {
    this.name = name
    return this
  }

  public setPlayer(player) : Character {
    this.player = player
    return this
  }

  public setSkills(skills) : Character {
    this.skills = skills
    return this
  }

  public setPosition(position) : Character {
    this.position = position
    return this
  }

  public setDirection(direction) : Character {
    this.direction = direction
    return this
  }

  public setMaxHealth(maxHealth) : Character {
    this.maxHealth = maxHealth
    return this
  }

  public setCurrentHealth(currentHealth) : Character {
    this.currentHealth = currentHealth
    return this
  }

  public setMaxEnergy(maxEnergy) : Character {
    this.maxEnergy = maxEnergy
    return this
  }

  public setCurrentEnergy(currentEnergy) : Character {
    this.currentEnergy = currentEnergy
    return this
  }

  public setImage(image) : Character {
    this.image = image
    return this
  }

  public onCharacterMoved(game) : ActionEffect {
   return { game, effectsApplied: [] } 
  }

  public receiveDamage(game, receiverCode, attackerCode) : ActionEffect {
    const newGame = {
      ...game,
      characters: game.characters.map(char => {
        if (char.code === receiverCode)
          return char.setCurrentHealth(this.currentHealth - 10)
        return char
      })
    }
    const effectsApplied: Array<DamageOnCharacter> = [{
      type: EffectTypes.DAMAGE_ON_CHARACTER,
      fromCharacter: attackerCode,
      toCharacter: receiverCode,
      amount: 10
    }]
    return { game: newGame, effectsApplied } 
  }

  public onCharacterReceivedDamage(game) : ActionEffect {
    return { game, effectsApplied: [] } 
  }

  public turnTick(game) : ActionEffect {
    return { game, effectsApplied: [] } 
  }

  public static fromJS(js) : Character {
    const CharClass = characters.get(js.code)
    const char = new CharClass()
    return char
      .setCode(js.code)
      .setName(js.name)
      .setPlayer(js.player)
      .setSkills(js.skills)
      .setPosition(js.position)
      .setDirection(js.direction)
      .setMaxHealth(js.maxHealth)
      .setCurrentHealth(js.currentHealth)
      .setMaxEnergy(js.maxEnergy)
      .setCurrentEnergy(js.currentEnergy)
      .setImage(js.image)
  }

}

export default Character
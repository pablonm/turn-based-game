import Point from './Point';
import EffectTypes from '../enums/EffectTypes'

export interface CharacterMoved {
  type: EffectTypes.CHARACTER_MOVED,
  character: string,
  fromPosition: Point,
  toPosition: Point,
}

export interface DamageOnCharacter {
  type: EffectTypes.DAMAGE_ON_CHARACTER,
  toCharacter: string,
  amount: number,
}

export interface HealthChangeOnCharacter {
  type: EffectTypes.HEALTH_CHANGE_ON_CHARACTER,
  toCharacter: string,
  amount: number,
}

export default interface ActionEffect {
  game: any,
  effectsApplied: Array<CharacterMoved | DamageOnCharacter | HealthChangeOnCharacter>
}
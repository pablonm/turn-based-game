import Point from './Point';
import Game from '../classes/Game';
import EffectTypes from '../enums/EffectTypes';
import Directions from '../enums/Directions';
import Status from '../enums/Status';
export interface CharacterMoved {
    type: EffectTypes.CHARACTER_MOVED;
    character: string;
    fromPosition: Point;
    toPosition: Point;
}
export interface CharacterRotated {
    type: EffectTypes.CHARACTER_ROTATED;
    character: string;
    fromDirection: Directions;
    toDirection: Directions;
}
export interface DamageOnCharacter {
    type: EffectTypes.DAMAGE_ON_CHARACTER;
    fromCharacter: string;
    toCharacter: string;
    amount: number;
}
export interface StatusOnCharacter {
    type: EffectTypes.STATUS_ON_CHARACTER;
    fromCharacter: string;
    toCharacter: string;
    status: Status;
}
export interface HealthChangeOnCharacter {
    type: EffectTypes.HEALTH_CHANGE_ON_CHARACTER;
    toCharacter: string;
    amount: number;
}
export default interface ActionEffect {
    game: Game;
    effectsApplied: Array<CharacterMoved | CharacterRotated | DamageOnCharacter | StatusOnCharacter | HealthChangeOnCharacter>;
}

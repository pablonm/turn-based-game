import Character from "../classes/Character";
import Game from "../classes/Game";
import Point from "../interfaces/Point";
import ActionEffect from "../interfaces/Effects";
import mergeActionEffects from "./mergeActionEffects";
import getCharacterInTile from "./getCharacterInTile";

const applyDamageOnArea = (game: Game, character: Character, area: Array<Point>, damage: Number) => {
  let effects: ActionEffect = { game, effectsApplied: [] }
  area.forEach(tile => {
    const receiver = getCharacterInTile(effects.game, tile) as Character
    if (receiver) {
      const damageEffects = receiver.receiveDamage(game, receiver.code, character.code, damage)
      effects = mergeActionEffects(effects, damageEffects)
    }
  })
  return effects;
}

export default applyDamageOnArea
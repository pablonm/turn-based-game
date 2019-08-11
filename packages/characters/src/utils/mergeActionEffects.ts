import ActionEffect from "../interfaces/Effects";

const mergeActionEffects = (effect1: ActionEffect, effect2: ActionEffect) : ActionEffect => {
  return {
    game: effect2.game,
    effectsApplied: effect1.effectsApplied.concat(effect2.effectsApplied)
  }
}

export default mergeActionEffects;
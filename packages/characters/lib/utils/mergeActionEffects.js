"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mergeActionEffects = (effect1, effect2) => {
    return {
        game: effect2.game,
        effectsApplied: effect1.effectsApplied.concat(effect2.effectsApplied)
    };
};
exports.default = mergeActionEffects;
//# sourceMappingURL=mergeActionEffects.js.map
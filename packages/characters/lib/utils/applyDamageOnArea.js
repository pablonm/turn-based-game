"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mergeActionEffects_1 = __importDefault(require("./mergeActionEffects"));
const getCharacterInTile_1 = __importDefault(require("./getCharacterInTile"));
const applyDamageOnArea = (game, character, area, damage) => {
    let effects = { game, effectsApplied: [] };
    area.forEach(tile => {
        const receiver = getCharacterInTile_1.default(effects.game, tile);
        if (receiver) {
            const damageEffects = receiver.receiveDamage(game, receiver.code, character.code, damage);
            effects = mergeActionEffects_1.default(effects, damageEffects);
        }
    });
    return effects;
};
exports.default = applyDamageOnArea;
//# sourceMappingURL=applyDamageOnArea.js.map
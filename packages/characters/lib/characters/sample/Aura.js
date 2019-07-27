"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Passive_1 = __importDefault(require("../../classes/Passive"));
class Aura extends Passive_1.default {
    constructor() {
        super(...arguments);
        this.code = 'SAMPLE_AURA';
        this.name = 'Aura';
        this.description = 'This is the passive and does very interesting stuff';
        this.image = 'https://cdn3.iconfinder.com/data/icons/game-play/512/gaming-game-play-multimedia-console-18-512.png';
    }
    preview(character, map) {
        return [];
    }
    execute(character, game) {
        return {
            game,
            effectsApplied: []
        };
    }
}
exports.default = new Aura();
//# sourceMappingURL=Aura.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Passive_1 = __importDefault(require("../../classes/Passive"));
class MasterAgility extends Passive_1.default {
    constructor() {
        super(...arguments);
        this.code = 'FENNELORE_MASTER_AGILITY';
        this.name = 'Master Agility';
        this.description = "Fennelore can't be slowed nor rooted";
        this.image = 'https://cdn3.iconfinder.com/data/icons/game-play/512/gaming-game-play-multimedia-console-18-512.png';
    }
    preview(character, map) {
        return [];
    }
    execute(character, game) {
        return { game, effectsApplied: [] };
    }
}
exports.default = new MasterAgility();
//# sourceMappingURL=MasterAgility.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ActionTypes_1 = __importDefault(require("../../enums/ActionTypes"));
const Action_1 = __importDefault(require("../../classes/Action"));
const nextPointInDirection_1 = __importDefault(require("../../utils/nextPointInDirection"));
const applyDamageOnArea_1 = __importDefault(require("../../utils/applyDamageOnArea"));
class Attack1 extends Action_1.default {
    constructor() {
        super(...arguments);
        this.code = 'FENNELORE_SPIRIT_ARROW';
        this.name = 'Spirit Arrow';
        this.type = ActionTypes_1.default.ACTIVE;
        this.description = 'Shoots a spirit arrow that travels across the entire map dealing damage to each enemy it hits';
        this.image = 'https://cdn3.iconfinder.com/data/icons/game-play/512/gaming-game-play-multimedia-console-18-512.png';
    }
    preview(character, map) {
        const preview = [];
        let nextTile = nextPointInDirection_1.default(character.position, character.direction, map);
        while (nextTile) {
            preview.push(nextTile);
            nextTile = nextPointInDirection_1.default(nextTile, character.direction, map);
        }
        return preview;
    }
    execute(character, game) {
        const effectArea = this.preview(character, game.map);
        return applyDamageOnArea_1.default(game, character, effectArea, 10);
    }
}
exports.default = Attack1;
//# sourceMappingURL=SpiritArrow.js.map
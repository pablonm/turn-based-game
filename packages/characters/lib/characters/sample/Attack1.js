"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ActionTypes_1 = __importDefault(require("../../enums/ActionTypes"));
const nextPointInDirection_1 = __importDefault(require("../../utils/nextPointInDirection"));
const Action_1 = __importDefault(require("../../classes/Action"));
const applyDamageOnArea_1 = __importDefault(require("../../utils/applyDamageOnArea"));
class Attack1 extends Action_1.default {
    constructor() {
        super(...arguments);
        this.code = 'SAMPLE_ATTACK1';
        this.name = 'Attack1';
        this.type = ActionTypes_1.default.ACTIVE;
        this.description = 'This is a very powerful attack';
        this.image = 'https://cdn3.iconfinder.com/data/icons/game-play/512/gaming-game-play-multimedia-console-18-512.png';
    }
    preview(character, map) {
        const preview = [];
        const tileInFront = nextPointInDirection_1.default(character.position, character.direction, map);
        if (tileInFront)
            preview.push(tileInFront);
        return preview;
    }
    execute(character, game) {
        const effectArea = this.preview(character, game.map);
        return applyDamageOnArea_1.default(game, character, effectArea, 10);
    }
}
exports.default = new Attack1();
//# sourceMappingURL=Attack1.js.map
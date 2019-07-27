"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ActionTypes_1 = __importDefault(require("../../enums/ActionTypes"));
const getTileInFront_1 = __importDefault(require("../../utils/getTileInFront"));
const getCharacterInTile_1 = __importDefault(require("../../utils/getCharacterInTile"));
const Action_1 = __importDefault(require("../../classes/Action"));
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
        const tileInFront = getTileInFront_1.default({ character, map });
        if (tileInFront)
            preview.push(tileInFront);
        return preview;
    }
    execute(character, game) {
        const effectArea = this.preview(character, game.map);
        const receiver = getCharacterInTile_1.default(game, effectArea[0]);
        if (receiver) {
            return receiver.receiveDamage(game, receiver.code, character.code);
        }
        else {
            return {
                game,
                effectsApplied: []
            };
        }
    }
}
exports.default = new Attack1();
//# sourceMappingURL=Attack1.js.map
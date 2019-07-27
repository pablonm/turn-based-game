"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ActionTypes_1 = __importDefault(require("../../enums/ActionTypes"));
const EffectTypes_1 = __importDefault(require("../../enums/EffectTypes"));
const Directions_1 = __importDefault(require("../../enums/Directions"));
const Action_1 = __importDefault(require("../../classes/Action"));
class TurnRight extends Action_1.default {
    constructor() {
        super(...arguments);
        this.code = 'TURN_RIGHT';
        this.name = 'Turn right';
        this.type = ActionTypes_1.default.MOVEMENT;
        this.description = 'Move to the right';
        this.image = 'https://cdn3.iconfinder.com/data/icons/game-play/512/gaming-game-play-multimedia-console-18-512.png';
    }
    preview(character, map) {
        return [];
    }
    execute(character, game) {
        const dirs = [Directions_1.default.NORTH, Directions_1.default.EAST, Directions_1.default.SOUTH, Directions_1.default.WEST];
        const newDirectionIndex = dirs.indexOf(character.direction) + 1;
        const newDirection = dirs[(newDirectionIndex < 0 ? 3 : newDirectionIndex) % 4];
        const effects = [];
        effects.push({
            type: EffectTypes_1.default.CHARACTER_ROTATED,
            character: character.code,
            fromDirection: character.direction,
            toDirection: newDirection
        });
        const newGame = Object.assign({}, game, { characters: game.characters.map((char) => {
                if (char.code === character.code)
                    return char.setDirection(newDirection);
                return char;
            }) });
        return {
            game: newGame,
            effectsApplied: effects
        };
    }
}
exports.default = new TurnRight();
//# sourceMappingURL=TurnRight.js.map
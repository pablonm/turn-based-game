"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ActionTypes_1 = __importDefault(require("../../enums/ActionTypes"));
const EffectTypes_1 = __importDefault(require("../../enums/EffectTypes"));
const nextPointInDirection_1 = __importDefault(require("../../utils/nextPointInDirection"));
const isTileInMap_1 = __importDefault(require("../../utils/isTileInMap"));
const Action_1 = __importDefault(require("../../classes/Action"));
class Move extends Action_1.default {
    constructor() {
        super(...arguments);
        this.code = 'MOVE';
        this.name = 'Move';
        this.type = ActionTypes_1.default.MOVEMENT;
        this.description = 'This is a very powerful attack';
        this.image = 'https://cdn3.iconfinder.com/data/icons/game-play/512/gaming-game-play-multimedia-console-18-512.png';
    }
    preview(character, map) {
        const effect = [];
        const tileInFront = nextPointInDirection_1.default(character.position, character.direction, map);
        if (tileInFront) {
            const newCharacter = Object.assign({}, character, { position: tileInFront });
            effect.push({ x: newCharacter.position.x, y: newCharacter.position.y });
        }
        return effect;
    }
    execute(character, game) {
        const { map } = game;
        let newGame = game;
        const effects = [];
        const newPosition = nextPointInDirection_1.default(character.position, character.direction, map);
        if (isTileInMap_1.default(map, newPosition)) {
            effects.push({
                type: EffectTypes_1.default.CHARACTER_MOVED,
                character: character.code,
                fromPosition: character.position,
                toPosition: newPosition
            });
            newGame = Object.assign({}, game, { characters: game.characters.map((char) => {
                    if (char.code === character.code)
                        return char.setPosition(newPosition);
                    return char;
                }) });
        }
        return {
            game: newGame,
            effectsApplied: effects
        };
    }
}
exports.default = new Move();
//# sourceMappingURL=Move.js.map
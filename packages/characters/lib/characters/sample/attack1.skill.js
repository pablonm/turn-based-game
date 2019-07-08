"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SkillTypes_1 = __importDefault(require("../../enums/SkillTypes"));
const EffectTypes_1 = __importDefault(require("../../enums/EffectTypes"));
const getTileInFront_1 = __importDefault(require("../../utils/getTileInFront"));
const isSamePosition_1 = __importDefault(require("../../utils/isSamePosition"));
exports.attack1Info = {
    code: 'SAMPLE_ATTACK1',
    type: SkillTypes_1.default.ACTIVE,
    name: 'Attack 1',
    description: 'This is a very powerful attack',
    image: 'https://cdn3.iconfinder.com/data/icons/game-play/512/gaming-game-play-multimedia-console-18-512.png'
};
exports.attack1Preview = (character, map) => {
    const preview = [];
    const tileInFront = getTileInFront_1.default({ character, map });
    if (tileInFront)
        preview.push(tileInFront);
    return preview;
};
exports.attack1effect = (character, game) => {
    const { characters, map } = game;
    const effectArea = exports.attack1Preview(character, map);
    const effects = [];
    const newGame = Object.assign({}, game, { characters: characters.map(char => {
            if (isSamePosition_1.default(char.position, effectArea[0])) {
                effects.push({
                    type: EffectTypes_1.default.DAMAGE_ON_CHARACTER,
                    toCharacter: char.code,
                    amount: 10
                });
                return Object.assign({}, char, { health: char.health - 10 });
            }
            return char;
        }) });
    return {
        game: newGame,
        effectsApplied: effects
    };
};
//# sourceMappingURL=attack1.skill.js.map
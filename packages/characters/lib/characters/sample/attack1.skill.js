"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SkillTypes_1 = __importDefault(require("../../enums/SkillTypes"));
const getTileInFront_1 = __importDefault(require("../../utils/getTileInFront"));
exports.attack1Info = {
    code: 'SAMPLE_ATTACK1',
    type: SkillTypes_1.default.ACTIVE,
    name: 'Attack 1',
    description: 'This is a very powerful attack',
    image: 'https://cdn3.iconfinder.com/data/icons/game-play/512/gaming-game-play-multimedia-console-18-512.png'
};
exports.attack1Preview = (character, map) => {
    const effect = [];
    const tileInFront = getTileInFront_1.default({ character, map });
    if (tileInFront)
        effect.push(tileInFront);
    return effect;
};
//# sourceMappingURL=attack1.skill.js.map
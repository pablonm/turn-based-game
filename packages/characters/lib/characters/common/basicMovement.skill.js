"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SkillTypes_1 = __importDefault(require("../../enums/SkillTypes"));
const movement_1 = __importDefault(require("../../movement"));
exports.basicMovementInfo = {
    code: 'COMMON_BASIC_MOVEMENT',
    type: SkillTypes_1.default.MOVEMENT,
    name: 'Movement',
    description: 'Move in the map',
    image: 'https://cdn3.iconfinder.com/data/icons/game-play/512/gaming-game-play-multimedia-console-18-512.png'
};
exports.basicMovementPreview = (character, map) => {
    const effect = [];
    if (movement_1.default.isMovementValid(map, character)) {
        const newCharacter = Object.assign({}, character, { position: movement_1.default.getNewPosition(character) });
        effect.push({ x: newCharacter.position.x, y: newCharacter.position.y });
    }
    return effect;
};
//# sourceMappingURL=basicMovement.skill.js.map
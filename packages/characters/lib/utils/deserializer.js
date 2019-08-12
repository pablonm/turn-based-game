"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const actions_1 = __importDefault(require("../actions"));
const characters_1 = __importDefault(require("../characters"));
const Game_1 = __importDefault(require("../classes/Game"));
const actionFromJS = (js) => {
    const ActionClass = actions_1.default.get(js.code);
    const char = new ActionClass();
    return char
        .setCode(js.code)
        .setName(js.name)
        .setType(js.type)
        .setDescription(js.description)
        .setImage(js.image);
};
const characterFromJS = (js) => {
    const CharClass = characters_1.default.get(js.code);
    const char = new CharClass();
    return char
        .setCode(js.code)
        .setName(js.name)
        .setPlayer(js.player)
        .setPosition(js.position)
        .setDirection(js.direction)
        .setMaxHealth(js.maxHealth)
        .setCurrentHealth(js.currentHealth)
        .setMaxEnergy(js.maxEnergy)
        .setCurrentEnergy(js.currentEnergy)
        .setImage(js.image)
        .setStatus(js.status)
        .setSkills(js.skills.map(skill => actionFromJS(skill)));
};
const gameFromJS = (js) => {
    let game = new Game_1.default(js.id);
    game
        .setMap(js.map)
        .setPlayersTurn(js.playersTurn)
        .setPlayers(js.players)
        .setCharacters(js.characters.map(character => characterFromJS(character)));
    return game;
};
exports.default = gameFromJS;
//# sourceMappingURL=deserializer.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Character_1 = __importDefault(require("./Character"));
class Game {
    constructor(id) {
        this.players = [];
        this.characters = [];
        this.id = id;
    }
    setPlayersTurn(playersTurn) {
        this.playersTurn = playersTurn;
        return this;
    }
    setMap(map) {
        this.map = map;
        return this;
    }
    addPlayer(player) {
        this.players.push(player);
        return this;
    }
    addCharacter(character) {
        this.characters.push(character);
        return this;
    }
    static fromJS(js) {
        let game = new Game(js.id);
        game.setMap(js.map).setPlayersTurn(js.playersTurn);
        js.players.forEach(player => game.addPlayer(player));
        js.characters.forEach(character => game.addCharacter(Character_1.default.fromJS(character)));
        return game;
    }
}
exports.default = Game;
//# sourceMappingURL=Game.js.map
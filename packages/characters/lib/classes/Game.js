"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Game {
    constructor(id) {
        this.players = [];
        this.characters = [];
        this.id = id;
    }
    setPlayersTurn(playersTurn) { this.playersTurn = playersTurn; return this; }
    setMap(map) { this.map = map; return this; }
    setPlayers(players) { this.players = [...players]; return this; }
    setCharacters(characters) { this.characters = [...characters]; return this; }
    addPlayer(player) {
        this.players.push(player);
        return this;
    }
    addCharacter(character) {
        this.characters.push(character);
        return this;
    }
}
exports.default = Game;
//# sourceMappingURL=Game.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getCharacterInTile = (game, p) => {
    return game.characters.find(char => char.position.x === p.x && char.position.y === p.y);
};
exports.default = getCharacterInTile;
//# sourceMappingURL=getCharacterInTile.js.map
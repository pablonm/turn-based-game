"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Directions_1 = __importDefault(require("./enums/Directions"));
const TileTypes_1 = __importDefault(require("./enums/TileTypes"));
const move = ({ game, characterCode }) => {
    const character = game.characters.find(char => char.code === characterCode);
    if (isMovementValid(game.map, character)) {
        return Object.assign({}, game, { characters: game.characters.map(char => {
                if (char.code === characterCode) {
                    const newPosition = getNewPosition(char);
                    return Object.assign({}, char, { position: newPosition });
                }
                return char;
            }) });
    }
    return game;
};
const isMovementValid = (map, character) => {
    const newPosition = getNewPosition(character);
    return (newPosition.x < map.size.x &&
        newPosition.x >= 0 &&
        newPosition.y < map.size.y &&
        newPosition.y >= 0 &&
        map.tiles[newPosition.x][newPosition.y] !== TileTypes_1.default.EMPTY);
};
const getNewPosition = character => {
    let movement = { x: 0, y: 0 };
    if (character.position.direction === Directions_1.default.NORTH)
        movement = { x: -1, y: 0 };
    if (character.position.direction === Directions_1.default.EAST)
        movement = { x: 0, y: 1 };
    if (character.position.direction === Directions_1.default.SOUTH)
        movement = { x: 1, y: 0 };
    if (character.position.direction === Directions_1.default.WEST)
        movement = { x: 0, y: -1 };
    return Object.assign({}, character.position, { x: character.position.x + movement.x, y: character.position.y + movement.y });
};
const turn = ({ game, characterCode, rotation }) => {
    const dirs = [Directions_1.default.NORTH, Directions_1.default.EAST, Directions_1.default.SOUTH, Directions_1.default.WEST];
    return Object.assign({}, game, { characters: game.characters.map(char => {
            if (char.code === characterCode) {
                const newDirectionIndex = dirs.indexOf(char.position.direction) + rotation;
                return Object.assign({}, char, { position: Object.assign({}, char.position, { direction: dirs[(newDirectionIndex < 0 ? 3 : newDirectionIndex) % 4] }) });
            }
            return char;
        }) });
};
const turnRight = params => turn(Object.assign({}, params, { rotation: 1 }));
const turnLeft = params => turn(Object.assign({}, params, { rotation: -1 }));
const movement = {
    move,
    isMovementValid,
    getNewPosition,
    turnLeft,
    turnRight
};
exports.default = movement;
//# sourceMappingURL=movement.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Directions_1 = __importDefault(require("../enums/Directions"));
const getTileInFront = ({ character, map }) => {
    let movement;
    if (character.direction === Directions_1.default.NORTH)
        movement = { x: -1, y: 0 };
    if (character.direction === Directions_1.default.EAST)
        movement = { x: 0, y: 1 };
    if (character.direction === Directions_1.default.SOUTH)
        movement = { x: 1, y: 0 };
    if (character.direction === Directions_1.default.WEST)
        movement = { x: 0, y: -1 };
    const frontPoint = {
        x: character.position.x + movement.x,
        y: character.position.y + movement.y
    };
    return frontPoint;
};
exports.default = getTileInFront;
//# sourceMappingURL=getTileInFront.js.map
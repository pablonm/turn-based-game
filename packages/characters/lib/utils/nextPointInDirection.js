"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Directions_1 = __importDefault(require("../enums/Directions"));
const isTileInMap_1 = __importDefault(require("./isTileInMap"));
const nextPointInDirection = (point, direction, map) => {
    let movement;
    if (direction === Directions_1.default.NORTH)
        movement = { x: -1, y: 0 };
    if (direction === Directions_1.default.EAST)
        movement = { x: 0, y: 1 };
    if (direction === Directions_1.default.SOUTH)
        movement = { x: 1, y: 0 };
    if (direction === Directions_1.default.WEST)
        movement = { x: 0, y: -1 };
    const frontPoint = {
        x: point.x + movement.x,
        y: point.y + movement.y
    };
    return isTileInMap_1.default(map, frontPoint) ? frontPoint : null;
};
exports.default = nextPointInDirection;
//# sourceMappingURL=nextPointInDirection.js.map
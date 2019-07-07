"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TileTypes_1 = __importDefault(require("../enums/TileTypes"));
const isTileInMap = (map, point) => {
    const { x, y } = point;
    return (x < map.size.x &&
        x >= 0 &&
        y < map.size.y &&
        y >= 0 &&
        map.tiles[x][y] !== TileTypes_1.default.EMPTY);
};
exports.default = isTileInMap;
//# sourceMappingURL=isTileInMap.js.map
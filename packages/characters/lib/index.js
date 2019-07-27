"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const characters_1 = __importDefault(require("./characters"));
const actions_1 = __importDefault(require("./actions"));
const maps_1 = __importDefault(require("./maps"));
const Game_1 = __importDefault(require("./classes/Game"));
const characters = {
    charactersInfo: characters_1.default,
    actions: actions_1.default,
    maps: maps_1.default,
    Game: Game_1.default
};
exports.default = characters;
//# sourceMappingURL=index.js.map
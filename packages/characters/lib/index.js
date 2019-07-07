"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const movement_1 = __importDefault(require("./movement"));
const characters_1 = __importDefault(require("./characters"));
const skillsPreviews_1 = __importDefault(require("./skillsPreviews"));
const characters = {
    movement: movement_1.default,
    charactersInfo: characters_1.default,
    skillPreviews: skillsPreviews_1.default
};
exports.default = characters;
//# sourceMappingURL=index.js.map
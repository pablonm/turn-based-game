"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sample_1 = __importDefault(require("./characters/sample/sample"));
const characters = new Map();
characters.set(sample_1.default.code, sample_1.default);
exports.default = characters;
//# sourceMappingURL=characters.js.map
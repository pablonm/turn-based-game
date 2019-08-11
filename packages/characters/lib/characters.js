"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Sample_1 = __importDefault(require("./characters/sample/Sample"));
const Fennelore_1 = __importDefault(require("./characters/Fennelore/Fennelore"));
const characters = new Map();
characters.set('SAMPLE', Sample_1.default);
characters.set('FENNELORE', Fennelore_1.default);
exports.default = characters;
//# sourceMappingURL=characters.js.map
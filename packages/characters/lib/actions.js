"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Move_1 = __importDefault(require("./characters/common/Move"));
const TurnLeft_1 = __importDefault(require("./characters/common/TurnLeft"));
const TurnRight_1 = __importDefault(require("./characters/common/TurnRight"));
const Attack1_1 = __importDefault(require("./characters/sample/Attack1"));
const Aura_1 = __importDefault(require("./characters/sample/Aura"));
const actions = new Map();
actions.set(Move_1.default.code, Move_1.default);
actions.set(TurnLeft_1.default.code, TurnLeft_1.default);
actions.set(TurnRight_1.default.code, TurnRight_1.default);
actions.set(Aura_1.default.code, Aura_1.default);
actions.set(Attack1_1.default.code, Attack1_1.default);
exports.default = actions;
//# sourceMappingURL=actions.js.map
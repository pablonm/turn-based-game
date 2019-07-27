"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ActionTypes_1 = __importDefault(require("../enums/ActionTypes"));
const Action_1 = __importDefault(require("./Action"));
class Passive extends Action_1.default {
    constructor() {
        super(...arguments);
        this.type = ActionTypes_1.default.PASIVE;
    }
    preview(character, map) {
        return [];
    }
    execute(character, game) {
        return {
            game,
            effectsApplied: []
        };
    }
}
exports.default = Passive;
//# sourceMappingURL=Passive.js.map
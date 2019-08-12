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
const MasterAgility_1 = __importDefault(require("./characters/Fennelore/MasterAgility"));
const SpiritArrow_1 = __importDefault(require("./characters/Fennelore/SpiritArrow"));
const actions = new Map();
actions.set('MOVE', Move_1.default);
actions.set('TURN_LEFT', TurnLeft_1.default);
actions.set('TURN_RIGHT', TurnRight_1.default);
actions.set('SAMPLE_AURA', Aura_1.default);
actions.set('SAMPLE_ATTACK1', Attack1_1.default);
actions.set('FENNELORE_SPIRIT_ARROW', SpiritArrow_1.default);
actions.set('FENNELORE_MASTER_AGILITY', MasterAgility_1.default);
exports.default = actions;
//# sourceMappingURL=actions.js.map
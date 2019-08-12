"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Character_1 = __importDefault(require("../../classes/Character"));
const Directions_1 = __importDefault(require("../../enums/Directions"));
const Move_1 = __importDefault(require("../common/Move"));
const TurnLeft_1 = __importDefault(require("../common/TurnLeft"));
const TurnRight_1 = __importDefault(require("../common/TurnRight"));
const SpiritArrow_1 = __importDefault(require("./SpiritArrow"));
const MasterAgility_1 = __importDefault(require("./MasterAgility"));
const Status_1 = __importDefault(require("../../enums/Status"));
class Fennerlore extends Character_1.default {
    constructor() {
        super(...arguments);
        this.code = 'FENNELORE';
        this.name = 'Fennelore';
        this.player = null;
        this.skills = [
            new Move_1.default(),
            new TurnLeft_1.default(),
            new TurnRight_1.default(),
            new MasterAgility_1.default(),
            new SpiritArrow_1.default(),
        ];
        this.position = {
            x: 1,
            y: 1
        };
        this.direction = Directions_1.default.NORTH;
        this.maxHealth = 100;
        this.currentHealth = 100;
        this.maxEnergy = 5;
        this.currentEnergy = 5;
        this.image = 'http://newdesignfile.com/postpic/2014/09/cool-youtube-gaming-channel-icon_335416.png';
        this.status = [];
    }
    applyStatus(game, receiverCode, attackerCode, status) {
        if (status !== Status_1.default.SLOWED && status !== Status_1.default.ROOTED)
            return super.applyStatus(game, receiverCode, attackerCode, status);
        return { game, effectsApplied: [] };
    }
}
exports.default = Fennerlore;
//# sourceMappingURL=Fennelore.js.map
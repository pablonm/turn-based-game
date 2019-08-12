"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Character_1 = __importDefault(require("../../classes/Character"));
const Directions_1 = __importDefault(require("../../enums/Directions"));
const Move_1 = __importDefault(require("../common/Move"));
const Aura_1 = __importDefault(require("./Aura"));
const Attack1_1 = __importDefault(require("./Attack1"));
const TurnLeft_1 = __importDefault(require("../common/TurnLeft"));
const TurnRight_1 = __importDefault(require("../common/TurnRight"));
class Sample extends Character_1.default {
    constructor() {
        super(...arguments);
        this.code = 'SAMPLE';
        this.name = 'The warrior';
        this.player = null;
        this.skills = [
            new Move_1.default(),
            new TurnLeft_1.default(),
            new TurnRight_1.default(),
            new Aura_1.default(),
            new Attack1_1.default(),
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
}
exports.default = Sample;
//# sourceMappingURL=Sample.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Character_1 = __importDefault(require("../../classes/Character"));
const Directions_1 = __importDefault(require("../../enums/Directions"));
class Sample extends Character_1.default {
    constructor() {
        super(...arguments);
        this.code = 'SAMPLE';
        this.name = 'The warrior';
        this.player = null;
        this.skills = ['MOVE', 'SAMPLE_AURA', 'SAMPLE_ATTACK1'];
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
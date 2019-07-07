"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const basicMovement_skill_1 = require("../common/basicMovement.skill");
const aura_skill_1 = require("./aura.skill");
const attack1_skill_1 = require("./attack1.skill");
const sample = {
    code: 'SAMPLE',
    player: null,
    position: {
        x: null,
        y: null,
        direction: 'north'
    },
    name: 'The warrior',
    health: 100,
    skills: [basicMovement_skill_1.basicMovementInfo, aura_skill_1.auraInfo, attack1_skill_1.attack1Info]
};
exports.default = sample;
//# sourceMappingURL=sample.js.map
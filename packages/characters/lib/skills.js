"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const basicMovement_skill_1 = require("./characters/common/basicMovement.skill");
const aura_skill_1 = require("./characters/sample/aura.skill");
const attack1_skill_1 = require("./characters/sample/attack1.skill");
exports.skillPreviews = new Map();
exports.skillPreviews.set(basicMovement_skill_1.basicMovementInfo.code, basicMovement_skill_1.basicMovementPreview);
exports.skillPreviews.set(aura_skill_1.auraInfo.code, aura_skill_1.auraPreview);
exports.skillPreviews.set(attack1_skill_1.attack1Info.code, attack1_skill_1.attack1Preview);
//# sourceMappingURL=skills.js.map
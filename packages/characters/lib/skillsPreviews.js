"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const basicMovement_skill_1 = require("./characters/common/basicMovement.skill");
const aura_skill_1 = require("./characters/sample/aura.skill");
const attack1_skill_1 = require("./characters/sample/attack1.skill");
const skillPreviews = new Map();
skillPreviews.set(basicMovement_skill_1.basicMovementInfo.code, basicMovement_skill_1.basicMovementPreview);
skillPreviews.set(aura_skill_1.auraInfo.code, aura_skill_1.auraPreview);
skillPreviews.set(attack1_skill_1.attack1Info.code, attack1_skill_1.attack1Preview);
exports.default = skillPreviews;
//# sourceMappingURL=skillsPreviews.js.map
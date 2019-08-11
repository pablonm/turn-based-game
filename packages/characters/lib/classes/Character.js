"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EffectTypes_1 = __importDefault(require("../enums/EffectTypes"));
class Character {
    setCode(code) { this.code = code; return this; }
    setName(name) { this.name = name; return this; }
    setPlayer(player) { this.player = player; return this; }
    setSkills(skills) { this.skills = skills; return this; }
    setPosition(position) { this.position = position; return this; }
    setDirection(direction) { this.direction = direction; return this; }
    setMaxHealth(maxHealth) { this.maxHealth = maxHealth; return this; }
    setCurrentHealth(currentHealth) { this.currentHealth = currentHealth; return this; }
    setMaxEnergy(maxEnergy) { this.maxEnergy = maxEnergy; return this; }
    setCurrentEnergy(currentEnergy) { this.currentEnergy = currentEnergy; return this; }
    setImage(image) { this.image = image; return this; }
    setStatus(status) { this.status = status; return this; }
    addStatus(status) {
        this.status.push(status);
        return this;
    }
    removeStatus(status) {
        this.status = this.status.filter(s => s === status);
        return this;
    }
    receiveDamage(game, receiverCode, attackerCode, amount) {
        const newGame = Object.assign({}, game, { characters: game.characters.map(char => {
                if (char.code === receiverCode)
                    return char.setCurrentHealth(this.currentHealth - amount);
                return char;
            }) });
        const effectsApplied = [{
                type: EffectTypes_1.default.DAMAGE_ON_CHARACTER,
                fromCharacter: attackerCode,
                toCharacter: receiverCode,
                amount
            }];
        return { game: newGame, effectsApplied };
    }
    applyStatus(game, receiverCode, attackerCode, status) {
        const newGame = Object.assign({}, game, { characters: game.characters.map(char => {
                if (char.code === receiverCode)
                    return char.addStatus(status);
                return char;
            }) });
        const effectsApplied = [{
                type: EffectTypes_1.default.STATUS_ON_CHARACTER,
                fromCharacter: attackerCode,
                toCharacter: receiverCode,
                status
            }];
        return { game: newGame, effectsApplied };
    }
    onCharacterReceivedDamage(game) {
        return { game, effectsApplied: [] };
    }
    turnTick(game) {
        return { game, effectsApplied: [] };
    }
    onCharacterMoved(game) {
        return { game, effectsApplied: [] };
    }
}
exports.default = Character;
//# sourceMappingURL=Character.js.map
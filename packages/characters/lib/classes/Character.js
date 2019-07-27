"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EffectTypes_1 = __importDefault(require("../enums/EffectTypes"));
const characters_1 = __importDefault(require("../characters"));
class Character {
    setCode(code) {
        this.code = code;
        return this;
    }
    setName(name) {
        this.name = name;
        return this;
    }
    setPlayer(player) {
        this.player = player;
        return this;
    }
    setSkills(skills) {
        this.skills = skills;
        return this;
    }
    setPosition(position) {
        this.position = position;
        return this;
    }
    setDirection(direction) {
        this.direction = direction;
        return this;
    }
    setMaxHealth(maxHealth) {
        this.maxHealth = maxHealth;
        return this;
    }
    setCurrentHealth(currentHealth) {
        this.currentHealth = currentHealth;
        return this;
    }
    setMaxEnergy(maxEnergy) {
        this.maxEnergy = maxEnergy;
        return this;
    }
    setCurrentEnergy(currentEnergy) {
        this.currentEnergy = currentEnergy;
        return this;
    }
    setImage(image) {
        this.image = image;
        return this;
    }
    onCharacterMoved(game) {
        return { game, effectsApplied: [] };
    }
    receiveDamage(game, receiverCode, attackerCode) {
        const newGame = Object.assign({}, game, { characters: game.characters.map(char => {
                if (char.code === receiverCode)
                    return char.setCurrentHealth(this.currentHealth - 10);
                return char;
            }) });
        const effectsApplied = [{
                type: EffectTypes_1.default.DAMAGE_ON_CHARACTER,
                fromCharacter: attackerCode,
                toCharacter: receiverCode,
                amount: 10
            }];
        return { game: newGame, effectsApplied };
    }
    onCharacterReceivedDamage(game) {
        return { game, effectsApplied: [] };
    }
    turnTick(game) {
        return { game, effectsApplied: [] };
    }
    static fromJS(js) {
        const CharClass = characters_1.default.get(js.code);
        const char = new CharClass();
        return char
            .setCode(js.code)
            .setName(js.name)
            .setPlayer(js.player)
            .setSkills(js.skills)
            .setPosition(js.position)
            .setDirection(js.direction)
            .setMaxHealth(js.maxHealth)
            .setCurrentHealth(js.currentHealth)
            .setMaxEnergy(js.maxEnergy)
            .setCurrentEnergy(js.currentEnergy)
            .setImage(js.image);
    }
}
exports.default = Character;
//# sourceMappingURL=Character.js.map
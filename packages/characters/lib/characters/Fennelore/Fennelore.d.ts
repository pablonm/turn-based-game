import Character from '../../classes/Character';
import Directions from '../../enums/Directions';
import ActionEffect from '../../interfaces/Effects';
declare class Fennerlore extends Character {
    code: string;
    name: string;
    player: any;
    skills: string[];
    position: {
        x: number;
        y: number;
    };
    direction: Directions;
    maxHealth: number;
    currentHealth: number;
    maxEnergy: number;
    currentEnergy: number;
    image: string;
    status: any[];
    applyStatus(game: any, receiverCode: any, attackerCode: any, status: any): ActionEffect;
}
export default Fennerlore;

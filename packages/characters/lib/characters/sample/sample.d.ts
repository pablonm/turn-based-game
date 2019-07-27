import Character from '../../classes/Character';
import Directions from '../../enums/Directions';
declare class Sample extends Character {
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
}
export default Sample;

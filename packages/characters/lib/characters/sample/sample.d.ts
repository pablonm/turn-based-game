import Character from '../../classes/Character';
import Directions from '../../enums/Directions';
import Move from '../common/Move';
import Aura from './Aura';
import Attack1 from './Attack1';
import TurnLeft from '../common/TurnLeft';
import TurnRight from '../common/TurnRight';
declare class Sample extends Character {
    code: string;
    name: string;
    player: any;
    skills: (Move | TurnLeft | TurnRight | Aura | Attack1)[];
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
}
export default Sample;

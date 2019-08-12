import Character from '../../classes/Character';
import Directions from '../../enums/Directions';
import Move from '../common/Move';
import TurnLeft from '../common/TurnLeft';
import TurnRight from '../common/TurnRight';
import SpiritArrow from './SpiritArrow';
import MasterAgility from './MasterAgility';
import ActionEffect from '../../interfaces/Effects';
declare class Fennerlore extends Character {
    code: string;
    name: string;
    player: any;
    skills: (SpiritArrow | Move | TurnLeft | TurnRight | MasterAgility)[];
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

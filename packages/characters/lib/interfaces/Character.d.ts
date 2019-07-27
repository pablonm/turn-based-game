import Point from './Point';
import Directions from '../enums/Directions';
interface Character {
    code: string;
    player: string;
    position: Point;
    direction: Directions;
}
export default Character;

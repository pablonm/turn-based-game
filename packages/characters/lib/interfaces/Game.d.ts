import Map from './Map';
import Player from './Player';
import Character from '../classes/Character';
interface Game {
    id: string;
    playersTurn: string;
    map: Map;
    players: Array<Player>;
    characters: Array<Character>;
}
export default Game;

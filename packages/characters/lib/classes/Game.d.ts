import Map from '../interfaces/Map';
import Player from '../interfaces/Player';
import Character from './Character';
declare class Game {
    id: string;
    playersTurn: string;
    map: Map;
    players: Array<Player>;
    characters: Array<Character>;
    constructor(id: any);
    setPlayersTurn(playersTurn: any): Game;
    setMap(map: any): Game;
    addPlayer(player: any): Game;
    addCharacter(character: any): Game;
    static fromJS(js: any): Game;
}
export default Game;

import Point from '../interfaces/Point';
import Game from '../classes/Game';
import Character from '../classes/Character';
declare const getCharacterInTile: (game: Game, p: Point) => Character;
export default getCharacterInTile;

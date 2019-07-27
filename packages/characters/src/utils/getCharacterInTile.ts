import Directions from '../enums/Directions'
import Point from '../interfaces/Point'
import Game from '../classes/Game'
import Character from '../classes/Character';

const getCharacterInTile = (game: Game, p: Point) : Character => {
  return game.characters.find(char => char.position.x === p.x && char.position.y === p.y)
}

export default getCharacterInTile

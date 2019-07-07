import Directions from '../enums/Directions'
import isTileInMap from './isTileInMap'
import Point from '../interfaces/Point'

const getTileInFront = ({ character, map }) : Point => {
  let movement
  if (character.position.direction === Directions.NORTH) movement = { x: -1, y: 0 }
  if (character.position.direction === Directions.EAST) movement = { x: 0, y: 1 }
  if (character.position.direction === Directions.SOUTH) movement = { x: 1, y: 0 }
  if (character.position.direction === Directions.WEST) movement = { x: 0, y: -1 }

  const frontPoint = {
    x: character.position.x + movement.x,
    y: character.position.y + movement.y
  }
  if (isTileInMap(map, frontPoint)) return frontPoint
  return null
}

export default getTileInFront

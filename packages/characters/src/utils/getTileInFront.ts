import Directions from '../enums/Directions'
import isTileInMap from './isTileInMap'
import Point from '../interfaces/Point'

const getTileInFront = ({ character, map }) : Point => {
  let movement
  if (character.direction === Directions.NORTH) movement = { x: -1, y: 0 }
  if (character.direction === Directions.EAST) movement = { x: 0, y: 1 }
  if (character.direction === Directions.SOUTH) movement = { x: 1, y: 0 }
  if (character.direction === Directions.WEST) movement = { x: 0, y: -1 }

  const frontPoint = {
    x: character.position.x + movement.x,
    y: character.position.y + movement.y
  }
  return frontPoint
}

export default getTileInFront

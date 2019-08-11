import Directions from '../enums/Directions'
import Point from '../interfaces/Point'
import Map from '../interfaces/Map';
import isTileInMap from './isTileInMap'

const nextPointInDirection = (point: Point, direction: Directions, map: Map) : Point => {
  let movement
  if (direction === Directions.NORTH) movement = { x: -1, y: 0 }
  if (direction === Directions.EAST) movement = { x: 0, y: 1 }
  if (direction === Directions.SOUTH) movement = { x: 1, y: 0 }
  if (direction === Directions.WEST) movement = { x: 0, y: -1 }

  const frontPoint = {
    x: point.x + movement.x,
    y: point.y + movement.y
  }
  return isTileInMap(map, frontPoint) ? frontPoint : null
}

export default nextPointInDirection

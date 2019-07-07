import TileTypes from '../enums/TileTypes'
import Point from '../interfaces/Point'

const isTileInMap = (map, point: Point): Boolean => {
  const { x, y } = point
  return (
    x < map.size.x &&
    x >= 0 &&
    y < map.size.y &&
    y >= 0 &&
    map.tiles[x][y] !== TileTypes.EMPTY
  )
}

export default isTileInMap
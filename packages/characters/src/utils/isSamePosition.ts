import Point from '../interfaces/Point'

const isSamePosition = (pos1: Point, pos2: Point): Boolean => {
  return pos1.x === pos2.x && pos1.y === pos2.y
}

export default isSamePosition
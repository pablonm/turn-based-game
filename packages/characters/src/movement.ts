import Directions from './enums/Directions'
import TileTypes from './enums/TileTypes'

const move = ({ game, characterCode }) => {
  const character = game.characters.find(char => char.code === characterCode)
  if (isMovementValid(game.map, character)) {
    return {
      ...game,
      characters: game.characters.map(char => {
        if (char.code === characterCode) {
          const newPosition = getNewPosition(char)
          return {
            ...char,
            position: newPosition
          }
        }
        return char
      })
    }
  }
  return game
}

const isMovementValid = (map, character) => {
  const newPosition = getNewPosition(character)
  return (
    newPosition.x < map.size.x &&
    newPosition.x >= 0 &&
    newPosition.y < map.size.y &&
    newPosition.y >= 0 &&
    map.tiles[newPosition.x][newPosition.y] !== TileTypes.EMPTY
    // Todo: also check for chacater status (root, stun, etc), stamina, etc.
  )
}

const getNewPosition = character => {
  let movement = { x: 0, y: 0 }
  if (character.position.direction === Directions.NORTH) movement = { x: -1, y: 0 }
  if (character.position.direction === Directions.EAST) movement = { x: 0, y: 1 }
  if (character.position.direction === Directions.SOUTH) movement = { x: 1, y: 0 }
  if (character.position.direction === Directions.WEST) movement = { x: 0, y: -1 }
  return {
    ...character.position,
    x: character.position.x + movement.x,
    y: character.position.y + movement.y
  }
}

const turn = ({ game, characterCode, rotation }) => {
  const dirs = [Directions.NORTH, Directions.EAST, Directions.SOUTH, Directions.WEST]
  return {
    ...game,
    characters: game.characters.map(char => {
      if (char.code === characterCode) {
        const newDirectionIndex = dirs.indexOf(char.position.direction) + rotation
        return {
          ...char,
          position: {
            ...char.position,
            direction: dirs[(newDirectionIndex < 0 ? 3 : newDirectionIndex) % 4]
          }
        }
      }
      return char
    })
  }
}

const turnRight = params => turn({ ...params, rotation: 1 })
const turnLeft = params => turn({ ...params, rotation: -1 })

const movement = {
  move,
  isMovementValid,
  getNewPosition,
  turnLeft,
  turnRight
}

export default movement
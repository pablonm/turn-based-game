import Map from '../interfaces/Map'
import Player from '../interfaces/Player'
import Character from './Character';

class Game {
  public id: string
  public playersTurn: string
  public map: Map
  public players: Array<Player> = []
  public characters: Array<Character> = []

  constructor(id) {
    this.id = id
  }

  public setPlayersTurn(playersTurn): Game {
    this.playersTurn = playersTurn
    return this
  }

  public setMap(map): Game {
    this.map = map
    return this
  }

  public addPlayer(player): Game {
    this.players.push(player)
    return this
  }

  public addCharacter(character): Game {
    this.characters.push(character)
    return this
  }

  public static fromJS(js): Game {
    let game = new Game(js.id)
    game.setMap(js.map).setPlayersTurn(js.playersTurn)
    js.players.forEach(player => game.addPlayer(player))
    js.characters.forEach(character => game.addCharacter(Character.fromJS(character)))
    return game
  }
}

export default Game
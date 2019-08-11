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

  /**
   * Setters.
   */

  public setPlayersTurn(playersTurn): Game { this.playersTurn = playersTurn; return this }
  public setMap(map): Game { this.map = map; return this }
  public setPlayers(players): Game { this.players = [...players]; return this }
  public setCharacters(characters): Game { this.characters = [...characters]; return this }

  public addPlayer(player): Game {
    this.players.push(player)
    return this
  }

  public addCharacter(character): Game {
    this.characters.push(character)
    return this
  }

}

export default Game
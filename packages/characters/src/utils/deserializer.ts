import actions from '../actions'
import characters from '../characters'
import Game from '../classes/Game';
import Action from '../classes/Action';
import Character from '../classes/Character';

const actionFromJS = (js): Action => {
  const ActionClass = actions.get(js.code)
  const char = new ActionClass()
  return char
    .setCode(js.code)
    .setName(js.code)
    .setType(js.code)
    .setDescription(js.code)
    .setImage(js.code)
}

const characterFromJS = (js): Character => {
  const CharClass = characters.get(js.code)
    const char = new CharClass()
    return char
      .setCode(js.code)
      .setName(js.name)
      .setPlayer(js.player)
      .setSkills(js.skills)
      .setPosition(js.position)
      .setDirection(js.direction)
      .setMaxHealth(js.maxHealth)
      .setCurrentHealth(js.currentHealth)
      .setMaxEnergy(js.maxEnergy)
      .setCurrentEnergy(js.currentEnergy)
      .setImage(js.image)
      .setStatus(js.status)
}

const gameFromJS = (js): Game => {
  let game = new Game(js.id)
  game
    .setMap(js.map)
    .setPlayersTurn(js.playersTurn)
    .setPlayers(js.players)
    .setCharacters(js.characters.map(character => characterFromJS(character)))
  return game
}

export default gameFromJS
import Point from '../../interfaces/Point'
import ActionEffect from '../../interfaces/Effects'
import Passive from '../../classes/Passive';

class MasterAgility extends Passive {

  code = 'FENNELORE_MASTER_AGILITY'
  name = 'Master Agility'
  description = "Fennelore can't be slowed nor rooted"
  image = 'https://cdn3.iconfinder.com/data/icons/game-play/512/gaming-game-play-multimedia-console-18-512.png'

  preview(character, map) : Array<Point> {
    return []
  }

  execute(character, game) : ActionEffect {
    return { game, effectsApplied: [] }
  }
}

export default new MasterAgility()
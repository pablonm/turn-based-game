import Point from '../../interfaces/Point'
import ActionEffect from '../../interfaces/Effects'
import Passive from '../../classes/Passive';

class Aura extends Passive {

  code = 'SAMPLE_AURA'
  name = 'Aura'
  description = 'This is the passive and does very interesting stuff'
  image = 'https://cdn3.iconfinder.com/data/icons/game-play/512/gaming-game-play-multimedia-console-18-512.png'

  preview(character, map) : Array<Point> {
    return []
  }

  execute(character, game) : ActionEffect {
    return {
      game,
      effectsApplied: []
    }
  }
}

export default new Aura()
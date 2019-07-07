import { basicMovementInfo } from '../common/basicMovement.skill'
import { auraInfo } from './aura.skill'
import { attack1Info } from './attack1.skill'

const sample = {
  code: 'SAMPLE',
  player: null,
  position: {
    x: null,
    y: null,
    direction: 'north'
  },
  name: 'The warrior',
  health: 100,
  skills: [ basicMovementInfo, auraInfo, attack1Info ]
}

export default sample
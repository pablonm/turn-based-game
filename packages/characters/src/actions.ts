import Move from './characters/common/Move'
import TurnLeft from './characters/common/TurnLeft'
import TurnRight from './characters/common/TurnRight'
import Attack1 from './characters/sample/Attack1'
import Aura from './characters/sample/Aura'
import MasterAgility from './characters/Fennelore/MasterAgility'

import SpiritArrow from './characters/Fennelore/SpiritArrow'

const actions = new Map()
actions.set('MOVE', Move)
actions.set('TURN_LEFT', TurnLeft)
actions.set('TURN_RIGHT', TurnRight)
actions.set('SAMPLE_AURA', Aura)
actions.set('SAMPLE_ATTACK1', Attack1)
actions.set('FENNELORE_SPIRIT_ARROW', SpiritArrow)
actions.set('FENNELORE_MASTER_AGILITY', MasterAgility)

export default actions
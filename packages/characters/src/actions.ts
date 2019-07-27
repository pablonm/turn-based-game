import Move from './characters/common/Move'
import TurnLeft from './characters/common/TurnLeft'
import TurnRight from './characters/common/TurnRight'
import Attack1 from './characters/sample/Attack1'
import Aura from './characters/sample/Aura'

const actions = new Map()
actions.set(Move.code, Move)
actions.set(TurnLeft.code, TurnLeft)
actions.set(TurnRight.code, TurnRight)
actions.set(Aura.code, Aura)
actions.set(Attack1.code, Attack1)

export default actions
import Character from '../../classes/Character'
import Directions from '../../enums/Directions';
import Move from '../common/Move'
import TurnLeft from '../common/TurnLeft'
import TurnRight from '../common/TurnRight'
import SpiritArrow from './SpiritArrow'
import MasterAgility from './MasterAgility'
import Status from '../../enums/Status';
import ActionEffect from '../../interfaces/Effects';

class Fennerlore extends Character {
  public code = 'FENNELORE'
  public name = 'Fennelore'
  public player = null
  public skills = [ 
    new Move(),
    new TurnLeft(),
    new TurnRight(),
    new MasterAgility(),
    new SpiritArrow(),
  ]
  public position = { 
    x: 1,
    y: 1
  }
  public direction = Directions.NORTH
  public maxHealth = 100
  public currentHealth = 100
  public maxEnergy = 5
  public currentEnergy = 5
  public image = 'http://newdesignfile.com/postpic/2014/09/cool-youtube-gaming-channel-icon_335416.png'
  public status = []

  public applyStatus(game, receiverCode, attackerCode, status) : ActionEffect {
    if (status !== Status.SLOWED && status !== Status.ROOTED)
      return super.applyStatus(game, receiverCode, attackerCode, status)
    return { game, effectsApplied: [] }
  }
  
}

export default Fennerlore
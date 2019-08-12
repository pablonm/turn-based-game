import Character from '../../classes/Character'
import Directions from '../../enums/Directions';
import Move from '../common/Move';
import Aura from './Aura';
import Attack1 from './Attack1';
import TurnLeft from '../common/TurnLeft';
import TurnRight from '../common/TurnRight';

class Sample extends Character {
  public code = 'SAMPLE'
  public name = 'The warrior'
  public player = null
  public skills = [ 
    new Move(),
    new TurnLeft(),
    new TurnRight(),
    new Aura(),
    new Attack1(),
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
}

export default Sample
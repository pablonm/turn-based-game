import Character from '../../classes/Character'
import Directions from '../../enums/Directions';

class Sample extends Character {
  public code = 'SAMPLE'
  public name = 'The warrior'
  public player = null
  public skills = [ 'MOVE', 'SAMPLE_AURA', 'SAMPLE_ATTACK1' ]
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
import React from 'react'
import classNames from 'classnames'
import exampleCharacter from '../../../../Assets/Characters/character.png'
import { useSkillEffectArea } from '../../../../Contexts/SkillEffectAreaContext'
import { useGameData } from '../../../../Contexts/GameDataContext'
import './Tile.scss'

const Tile = ({ tileSize, isEmpty, x, y }) => {
  const { characters } = useGameData()
  const { effectTiles } = useSkillEffectArea()
  const isTileInEffect = (x, y) => effectTiles.some(tile => tile.x === x && tile.y === y)
  const classes = classNames('tile', { effect: isTileInEffect(x, y) })
  const character = characters.find(char => char.position.x === x && char.position.y === y)
  
  if (isEmpty) return <div className="empty" style={{ width: tileSize, height: tileSize }} />
  return (
    <div className={classes} style={{ width: tileSize - 2, height: tileSize - 2 }}>
      {character && <img className="characterInTile" src={exampleCharacter} alt="example character" />}
    </div>
  )
}

export default Tile

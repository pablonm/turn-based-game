import React, { useState, useEffect } from 'react'
import MapBackground from '../../../Maps/map.png'
import { useGameData } from '../../../Contexts/GameDataContext'
import Tile from './Tile/Tile'

import './Tilemap.scss'

const Tilemap = () => {
  const { map } = useGameData()

  const [tileSize, setTileSize] = useState(0)
  const [scale, setScale] = useState(0)
  const [marginTop, setMarginTop] = useState(0)
  const [padding, setPadding] = useState({ top: 0, bottom: 0, left: 0, right: 0 })

  useEffect(() => {
    const calculateTilemapDimensions = substractPadding => {
      // width of the isometric tilemap
      const width = document.getElementsByClassName('container')[0].clientWidth

      // height of the isometric tilemap
      const height = width / 2

      // height of the tilemap container
      let tilemapHeight = document.getElementsByClassName('container')[0].clientHeight
      tilemapHeight = substractPadding
        ? tilemapHeight - (map.padding.bottom * tilemapHeight) / 100
        : tilemapHeight

      // the overflow if the isometric tilemap is higher than the container
      const heightOverflow = height > tilemapHeight ? height - tilemapHeight : 0

      // the underflow if the isometric tilemap is lower than the container
      const heightUnderflow = height < tilemapHeight ? tilemapHeight - height : 0

      // the size of each tile before applying the css rotation
      const tileSize = (width + map.tiles.length - heightOverflow * 2) / map.tiles.length

      // the total width of the isometric tilemap
      const mapWidth = tileSize * map.tiles.length

      setTileSize(tileSize)

      // Set padding of the backgroundImage
      const top = (map.padding.top * tilemapHeight) / 100
      const bottom = (map.padding.bottom * tilemapHeight) / 100
      const left = (map.padding.left * mapWidth) / 100
      const right = (map.padding.right * mapWidth) / 100
      setPadding({ top, bottom, left, right })

      // Scale down the tilemap so it fits the container
      setScale((mapWidth - left - right) / Math.sqrt(2) / (mapWidth - left - right))

      // Set the margin top so the tilemap is centered in it's container
      setMarginTop(((width - heightOverflow * 2 - heightUnderflow * 2) / 4) * -1)
    }

    window.addEventListener('resize', () => calculateTilemapDimensions(false))
    calculateTilemapDimensions(true)
    return () => {
      window.removeEventListener('resize', () => calculateTilemapDimensions(false))
    }
  }, [map.padding.bottom, map.padding.left, map.padding.right, map.padding.top, map.tiles.length])

  return (
    <div
      className="mapBackground"
      style={{
        backgroundImage: `url(${MapBackground})`,
        paddingTop: `${padding.top}px`,
        paddingBottom: `${padding.bottom}px`,
        paddingLeft: `${padding.left}px`,
        paddingRight: `${padding.right}px`
      }}
    >
      <div className="container">
        <div
          className="tiles"
          style={{
            transform: `rotate3d(1, 0, 0, 60deg) rotate(45deg) scale(${scale})`,
            marginTop: `${marginTop}px`
          }}
        >
          {map.tiles.map((line, lineIndex) => (
            <div key={`line${lineIndex}`} className="line">
              {line.map((tile, tileIndex) => (
                <Tile
                  key={`tile${lineIndex}-${tileIndex}`}
                  isEmpty={tile === 'empty'}
                  tileSize={tileSize}
                  x={lineIndex}
                  y={tileIndex}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tilemap

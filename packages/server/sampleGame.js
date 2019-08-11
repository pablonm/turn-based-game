const { charactersInfo, Game, maps } = require('characters').default
const SampleChar = charactersInfo.get('SAMPLE')
const Fennelore = charactersInfo.get('FENNELORE')

const newGame = new Game('SAMPLE_GAME')
  .setMap(maps.get('SAMPLE_MAP'))
  .addPlayer({
    id: '1',
    name: '0x0bab10',
    characters: ['FENNELORE']
  })
  .addPlayer({
    id: '2',
    name: 'Player 2',
    characters: ['SAMPLE']
  })
  .addCharacter(
    new Fennelore()
      .setPlayer('1')
      .setPosition({ x: 1, y: 1 })
  )
  .addCharacter(
    new SampleChar()
      .setPlayer('2')
      .setPosition({ x: 1, y: 2 })
  )

module.exports = newGame

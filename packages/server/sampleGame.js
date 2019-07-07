const { charactersInfo } = require('characters').default

const game = {
  id: 1,
  playersTurn: 1,
  map: {
    padding: {
      top: 0,
      bottom: 3.5,
      left: 0,
      right: 0
    },
    size: {
      x: 9,
      y: 9
    },
    tiles: [
      ['empty', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass'],
      ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass'],
      ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass'],
      ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass'],
      ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass'],
      ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass'],
      ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass'],
      ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass'],
      ['grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass', 'grass']
    ]
  },
  players: [
    {
      id: 1,
      name: '0x0bab10',
      characters: ['1', '2', '3']
    },
    {
      id: 2,
      name: 'Player 2',
      characters: ['4', '5', '6']
    }
  ],
  characters: [
    {
      ...charactersInfo.get('SAMPLE'),
      code: '1',
      player: 1,
      position: {
        x: 1,
        y: 1,
        direction: 'north'
      }
    },
    {
      ...charactersInfo.get('SAMPLE'),
      code: '2',
      player: 1,
      position: {
        x: 1,
        y: 2,
        direction: 'north'
      }
    },
    {
      ...charactersInfo.get('SAMPLE'),
      code: '3',
      player: 1,
      position: {
        x: 1,
        y: 3,
        direction: 'north'
      }
    },
    {
      ...charactersInfo.get('SAMPLE'),
      code: '4',
      player: 2,
      position: {
        x: 2,
        y: 2,
        direction: 'north'
      }
    },
    {
      ...charactersInfo.get('SAMPLE'),
      code: '5',
      player: 2,
      position: {
        x: 2,
        y: 3,
        direction: 'north'
      }
    },
    {
      ...charactersInfo.get('SAMPLE'),
      code: '6',
      player: 2,
      position: {
        x: 2,
        y: 4,
        direction: 'north'
      }
    }
  ]
}

module.exports = game
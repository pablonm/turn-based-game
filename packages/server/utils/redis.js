const redis = require("redis")
const { Game } = require('characters').default
const redisClient = redis.createClient(process.env.REDIS_URL);
let game = require('../sampleGame')
redisClient.set('game', JSON.stringify(game))

const getActiveGame = () => {
  return new Promise((resolve, reject) => {
    redisClient.get('game', (err, reply) => {
      if (err) reject(err)
      const game = Game.fromJS(JSON.parse(reply))
      resolve(game)
    })
  })
}

const setActiveGame = (newGame) => {
  redisClient.set('game', JSON.stringify(newGame))
}

module.exports = { 
  getActiveGame,
  setActiveGame
}
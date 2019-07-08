const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const bodyParser = require('body-parser')
const cors = require('cors')
const redis = require("redis")

const { movement: { move, turnLeft, turnRight }, skillEffects } = require('characters').default

const redisClient = redis.createClient(process.env.REDIS_URL);

let game = require('./sampleGame')
redisClient.set('game', JSON.stringify(game))

app.use(bodyParser.json())
app.use(cors())

let socketConnections = []

io.on('connection', function(socket) {
  console.log('a user connected')
  socketConnections.push(socket)
  redisClient.get('game', (err, reply) => {
    const game = JSON.parse(reply)
    socket.join('game1')
    io.to('game1').emit('gameData', game)
  })
})

app.get('/', function(req, res) {
  redisClient.get('game', (err, game) => {
    res.status(200).send(JSON.parse(game))
  })
})

app.post('/right', function(req, res) {
  const { characterCode } = req.body
  redisClient.get('game', (err, reply) => {
    const game = JSON.parse(reply)
    const newGame = turnRight({ game, characterCode })
    redisClient.set('game', JSON.stringify(newGame))
    io.to('game1').emit('gameData', newGame)
    res.sendStatus(200)
  })
})

app.post('/left', function(req, res) {
  const { characterCode } = req.body
  redisClient.get('game', (err, reply) => {
    const game = JSON.parse(reply)
    const newGame = turnLeft({ game, characterCode })
    redisClient.set('game', JSON.stringify(newGame))
    io.to('game1').emit('gameData', newGame)
    res.sendStatus(200)
  })
})

app.post('/move', function(req, res) {
  const { characterCode } = req.body
  redisClient.get('game', (err, reply) => {
    const game = JSON.parse(reply)
    const newGame = move({ game, characterCode })
    redisClient.set('game', JSON.stringify(newGame))
    io.to('game1').emit('gameData', newGame)
    res.sendStatus(200)
  })
})

app.post('/attack1', function(req, res) {
  const { characterCode } = req.body
  redisClient.get('game', (err, reply) => {
    const game = JSON.parse(reply)
    const { characters } = game
    const character = characters.find(char => char.code === characterCode)
    const effectFunction = skillEffects.get('SAMPLE_ATTACK1')
    const result = effectFunction(character, game)
    redisClient.set('game', JSON.stringify(result.game))
    io.to('game1').emit('gameData', result.game)
    io.to('game1').emit('effectsApplied', result.effectsApplied)
    res.sendStatus(200)
  })
})

http.listen(3001, function() {
  console.log('listening on *:3001')
})

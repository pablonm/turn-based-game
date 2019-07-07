const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const bodyParser = require('body-parser')
const cors = require('cors')
const redis = require("redis")

const { movement: { move, turnLeft, turnRight } } = require('characters').default

const redisClient = redis.createClient(process.env.REDIS_URL);

let game = require('./sampleGame')
redisClient.set('game', JSON.stringify(game))

app.use(bodyParser.json())
app.use(cors())

let socketClient

io.on('connection', function(socket) {
  console.log('a user connected')
  socketClient = socket
  redisClient.get('game', (err, reply) => {
    const game = JSON.parse(reply)
    socketClient.emit('gameData', game)
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
    socketClient.emit('gameData', newGame)
    res.sendStatus(200)
  })
})

app.post('/left', function(req, res) {
  const { characterCode } = req.body
  redisClient.get('game', (err, reply) => {
    const game = JSON.parse(reply)
    const newGame = turnLeft({ game, characterCode })
    redisClient.set('game', JSON.stringify(newGame))
    socketClient.emit('gameData', newGame)
    res.sendStatus(200)
  })
})

app.post('/move', function(req, res) {
  const { characterCode } = req.body
  redisClient.get('game', (err, reply) => {
    const game = JSON.parse(reply)
    const newGame = move({ game, characterCode })
    redisClient.set('game', JSON.stringify(newGame))
    socketClient.emit('gameData', newGame)
    res.sendStatus(200)
  })
})

http.listen(3001, function() {
  console.log('listening on *:3001')
})

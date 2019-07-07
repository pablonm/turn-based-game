const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const bodyParser = require('body-parser')
const cors = require('cors')
const { movement: { move, turnLeft, turnRight } } = require('characters').default

let game = require('./sampleGame')

app.use(bodyParser.json())
app.use(cors())

let client

io.on('connection', function(socket) {
  console.log('a user connected')
  client = socket
  client.emit('gameData', game)
})

app.get('/test', function(req, res) {
  res.status(200).send('OK')
})

app.get('/', function(req, res) {
  client.emit('gameData', game)
  res.sendStatus(200)
})

app.post('/right', function(req, res) {
  const { characterCode } = req.body
  game = turnRight({ game, characterCode })
  client.emit('gameData', game)
  res.sendStatus(200)
})

app.post('/left', function(req, res) {
  const { characterCode } = req.body
  game = turnLeft({ game, characterCode })
  client.emit('gameData', game)
  res.sendStatus(200)
})

app.post('/move', function(req, res) {
  const { characterCode } = req.body
  game = move({ game, characterCode })
  client.emit('gameData', game)
  res.sendStatus(200)
})

http.listen(3001, function() {
  console.log('listening on *:3001')
})

const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const bodyParser = require('body-parser')
const cors = require('cors')
const { getActiveGame, setActiveGame } = require('./utils/redis')

const { actions } = require('characters').default

app.use(bodyParser.json())
app.use(cors())

let socketConnections = []

io.on('connection', async (socket) => {
  console.log('a user connected')

  // add the socket to the pool
  socketConnections.push(socket)
  socket.join('game1')

  // get active game from redis
  const game = await getActiveGame()

  // emit the game data to the room
  io.to('game1').emit('gameData', game)
})

// TODO: Check if character has the action. If it's not in cooldown, etc.
app.post('/action', async (req, res) => {
  const { characterCode, actionCode } = req.body
  const game = await getActiveGame()
  const { characters } = game
  const character = characters.find(char => char.code === characterCode)
  const skill = character.skills.find(skill => skill.code === actionCode)
  const result = skill.execute(character, game)
  setActiveGame(result.game)
  io.to('game1').emit('gameData', result.game)
  io.to('game1').emit('effectsApplied', result.effectsApplied)
  res.sendStatus(200)
})

app.get('/reset', (req, res) => {
  const game = require('./sampleGame')
  setActiveGame(game)
  res.sendStatus(200)
})

http.listen(3001, () => {
  console.log('listening on *:3001')
})

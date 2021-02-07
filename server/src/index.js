import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import { createServer } from 'http'
import { Server } from 'socket.io'
require('dotenv').config()

const PORT = 4000
const app = express()

const server = createServer(app)
const io = new Server(server)
io.on('connection', socket => {
  console.log('user connected')
})

app.use(bodyParser.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('Hello')
})

server.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})